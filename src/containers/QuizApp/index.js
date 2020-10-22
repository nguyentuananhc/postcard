import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { actions, REDUCER_NAME } from './slice'
import { initGA, PageView, setUID } from './components/Tracking'
import StartPage from 'containers/QuizApp/containers/StartPage'
import ShareModal from 'components/ShareModal'
import QuizContainer from 'containers/QuizApp/components/QuizContainer'

import firebase from './Firebase'

import './index.scss'
import EndPage from './containers/EndPage'
import { getAddressUrl } from 'config'
import { capturePage } from './helper/trackingGA'

const QuizzApp = () => {
    const dispatch = useDispatch()
    const [uid, setId] = useState(undefined)
    const [urlLocation, setUrlLocation] = useState('')
    const [userDefaultLocation, setUserDefaultLocation] = useState()
    const {
        currentIndex,
        isShowMultiShare,
        userInfo,
        listMerChants,
    } = useSelector((state) => state[REDUCER_NAME])

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search)
        const location = urlParams.get('location')
        if (location === 'HN' || location === 'HCM') setUrlLocation(location)
    }, [])

    useEffect(() => {
        initGA('UA-173271646-1')
        //GA PROD ID
        PageView('2010Quiz')
    }, [])

    useEffect(() => {
        if (typeof window === 'undefined') {
            global.window = {}
            // prevent window error at server side
        }
    }, [])

    useEffect(() => {
        const mobileServiceAppResponse = (resp, flag) => {
            if (flag === 'SCREEN_CAPTURE') {
                capturePage()
            }

            if (flag === 'DEVICE_INFO') {
                window.WEB_OS = resp.deviceName === 'iPhone' ? 'IOS' : 'ANDROID'
            }
            if (flag === 'USER_PROFILE') {
                window.USER_ID = resp.user_id || resp.a
                window.USER_NAME = resp.full_name || resp.c

                setUID(resp.user_id)
                setId(resp.user_id || resp.a)
                dispatch(actions.saveUserNameRequest(resp.full_name || resp.c))
                dispatch(actions.saveGenderRequest(resp.gender))
                // gender
            }
            if (flag === 'get_delivery_address') {
                let address = resp?.data?.find((item) => item.is_default)
                if (!address) address = resp?.data[0]
                if (address?.province?.code && address.province.code >= 45) {
                    // From Quang Tri province (province code = 45), all count for VN's southern 
                    setUserDefaultLocation("HCM")
                } else {
                    setUserDefaultLocation("HN")
                }
            }
            return 'nothing'
        }
        window.insurance = {}
        window.platform = {}
        window.insurance.mobileServiceAppResponse = mobileServiceAppResponse
        window.platform.mobileServiceAppResponse = mobileServiceAppResponse
        window.insurance.APIRequestAppResponse = mobileServiceAppResponse
        window.platform.APIRequestAppResponse = mobileServiceAppResponse
    }, [])

    useEffect(() => {
        const sendRequest = () => {
            const param = JSON.stringify({
                method: "GET",
                "flag": "get_delivery_address",
                url: getAddressUrl()
            })
            if (window?.androidAppProxy) {
                // window.androidAppProxy.requestMobileService(
                //     JSON.stringify({
                //         type: 'CONFIG_STATUS_BAR',
                //         data: 'light',
                //     })
                // )
                window.androidAppProxy.requestMobileService(
                    JSON.stringify({
                        type: 'USER_PROFILE'
                    })
                )
                window.androidAppProxy.requestAPIService(param)
            }
            if (window?.webkit) {
                // window.webkit.messageHandlers.updateStatusBarStyle.postMessage(
                //     JSON.stringify({
                //         type: 'CONFIG_STATUS_BAR',
                //         data: 'light',
                //     })
                // )
                window.webkit.messageHandlers.requestMobileService.postMessage(
                    JSON.stringify({
                        type: 'USER_PROFILE'
                    })
                )
                window.webkit.messageHandlers.requestAPIService.postMessage(param)
            }
        }
        const id = setInterval(() => sendRequest(), 1000)
        setTimeout(function () {
            clearInterval(id)
            setUserDefaultLocation((prevState) => prevState || "HN")
        }, 5000)
        //in case loop not stop
    }, [])

    useEffect(() => {
        const searchLocation = urlLocation || userDefaultLocation
        const getListMerchants = async () => {
            console.log(`fetch merchant in ${searchLocation}`)
            const firestore = firebase.firestore()
            const docRef = await firestore.collection('retails/landing_pages/woman_2020')
            docRef
                .where('region', 'array-contains', searchLocation)
                .get()
                .then((snapshot) => {
                    let arrayR = snapshot.docs.map((doc) => {
                        let listProduct = []
                        return { ...doc.data(), listProduct }
                    })
                    dispatch(actions.saveListMerChantsRequest(arrayR))
                })
                .catch(function (error) {
                    // console.log('got an error', error)
                })
        }
        if (searchLocation) getListMerchants()
    }, [urlLocation, userDefaultLocation])

    useEffect(() => {
        const getListMerchants = async () => {
            const firestore = firebase.firestore()
            const docRef = await firestore.collection('retails/landing_pages/woman_2020')
            listMerChants.forEach((mc) => {
                docRef
                    .doc(mc.id.toString())
                    .collection('products')
                    .get()
                    .then((snapshot) => {
                        const arrayR = snapshot.docs.map((doc) => {
                            return { ...doc.data() }
                        })
                        dispatch(
                            actions.saveListProductsRequest({
                                data: arrayR,
                                id: mc.id,
                            })
                        )
                    })
                    .catch(function (error) {
                        console.log('got an error', error)
                    })
            })
        }
        getListMerchants()
    }, [listMerChants])

    return (
        <div className="quiz-app-wrapper">
            {currentIndex === 0 && <StartPage />}
            {currentIndex > 0 && currentIndex < 6 && <QuizContainer />}
            {currentIndex === 6 && <EndPage />}
            {isShowMultiShare && <ShareModal />}
        </div>
    )
}

export default QuizzApp
