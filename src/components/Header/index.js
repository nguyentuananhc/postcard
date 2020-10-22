import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'

import { REDUCER_NAME, actions } from 'containers/QuizApp/slice'

import { clickExit, clickBack } from 'containers/QuizApp/helper/trackingGA'

import { useMediaQuery } from 'react-responsive'

import './index.scss'

const Header = () => {
    const dispatch = useDispatch()
    const { currentIndex } = useSelector((state) => state[REDUCER_NAME])
    const { navigateActionVisible } = useSelector((state) => state[REDUCER_NAME])

    const [isClose, setClose] = useState(false)

    const [shareStatus, setShare] = useState(true)

    const isSmallScreen = useMediaQuery({ maxDeviceWidth: 320 })

    const [headerMarginClass, setHeaderMarginClass] = useState('header-margin-large')

    useEffect(() => {
        if (isSmallScreen) setHeaderMarginClass('header-margin-small')
    }, [isSmallScreen])

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search)
        const myParam = urlParams.get('ver')
        setShare(myParam != 'old')
    }, [])

    const handleClose = () => {
        setClose(true)
        clickExit(currentIndex === 0)
    }

    useEffect(() => {
        if (isClose) {
            if (window?.androidAppProxy) {
                window.androidAppProxy?.requestMobileService(
                    '{"type":"backToPreviousView", "message":""}'
                )
            }
            if (window?.webkit) {
                window.webkit?.messageHandlers?.backToPreviousView?.postMessage(
                    'test'
                )
            }
        }
    }, [isClose])

    const handleBack = () => {
        dispatch(actions.setCurrentIndexRequest(currentIndex - 1))
        clickBack(currentIndex)
    }

    return (
        <div className={`header-wrapper ${headerMarginClass}`}>
            {currentIndex !== 0 && currentIndex !== 6 && (
                <motion.span
                    whileTap={{ scale: 0.95 }}
                    className="button button-close"
                    onClick={handleBack}
                >
                    <img
                        className="icon-image"
                        src={'/static/icon/android/back.png'}
                    />
                </motion.span>
            )}
            {(currentIndex === 0 || currentIndex === 6) && navigateActionVisible && (
                <motion.span
                    whileTap={{ scale: 0.95 }}
                    className="button button-close"
                    onClick={handleClose}
                >
                    <img
                        className="icon-image"
                        src={'/static/icon/android/close.png'}
                    />
                </motion.span>
            )}
        </div>
    )
}
export default Header
