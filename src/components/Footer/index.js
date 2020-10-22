import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { useDispatch, useSelector } from 'react-redux'
import { REDUCER_NAME, actions } from 'containers/QuizApp/slice'
import {
    clickClose,
    clickRetake,
    clickShare,
    clickFloatingButton,
} from 'containers/QuizApp/helper/trackingGA'

import Button from 'containers/QuizApp/components/Button'

import './index.scss'
import { useMediaQuery } from 'react-responsive'

const bounceTransition = {
    y: {
        duration: 0.4,
        yoyo: Infinity,
        ease: 'easeOut',
    },
    backgroundColor: {
        duration: 0,
        yoyo: Infinity,
        ease: 'easeOut',
        repeatDelay: 0.8,
    },
}

const Footer = () => {
    const dispatch = useDispatch()

    const isSmallScreen = useMediaQuery({ maxDeviceWidth: 320 })

    const { currentIndex, score, hashTag } = useSelector(
        (state) => state[REDUCER_NAME]
    )
    const [showFooter, setFooterStatus] = useState(true)

    return (
        <footer className="footer-wrapper">
            {currentIndex === 6 && showFooter && (
                <>
                    {/* <motion.div
                        // initial={{
                        //     x: 120,
                        //     opacity: 0,
                        // }}
                        // animate={{
                        //     x: 0,
                        //     opacity: 1,
                        //     transition: {
                        //         delay: 1,
                        //         duration: 0.5,
                        //     },
                        // }}

                        // transition={bounceTransition}
                        // animate={{
                        //     y: ['100%', '-100%'],
                        // }}
                    > */}
                    <motion.img
                        transition={bounceTransition}
                        animate={{
                            y: ['5%', '-5%'],
                        }}
                        onClick={() => {
                            dispatch(actions.setMultiShareStatusRequest())
                            clickClose()
                            clickFloatingButton()
                        }}
                        style={{
                            top: isSmallScreen ? 24 : 50,
                            right: 10,
                            width: 152,
                            position: 'absolute',
                            zIndex: 13,
                        }}
                        src="/static/img/link.png"
                    />
                    {/* </motion.div> */}

                    <div
                        className="d-flex"
                        style={{
                            height: isSmallScreen ? 30 : 36,
                            width: '100%',
                            position: 'absolute',
                            bottom: isSmallScreen ? 4 : 16,
                            padding: '0 16px',
                        }}
                    >
                        <Button
                            style={{
                                position: 'relative',
                                background: 'white',
                                color: '#1B3984',
                                height: isSmallScreen ? '40px' : '48px'
                            }}
                            onClick={() => {
                                dispatch(actions.resetAnswerSheetRequest())
                                dispatch(actions.setCurrentIndexRequest(1))
                                clickRetake()
                            }}
                        >
                            Chơi lại
                        </Button>
                        <div style={{ width: 16 }} />
                        <Button
                            style={{ 
                                position: 'relative',
                                height: isSmallScreen ? '40px' : '48px'
                            }}
                            onClick={() => {
                                setFooterStatus(false)
                                dispatch(actions.toggleNavigateAction(false))
                                setTimeout(() => {
                                    setFooterStatus(true)
                                    dispatch(actions.toggleNavigateAction(true))
                                }, 1500)

                                clickShare(score)

                                const shareOject = JSON.stringify({
                                    type: 'SHARE_SCREEN',
                                    message: `Loài 🌼 của tôi nè, còn bạn thì sao? 😍😍😍  #TôiYêuPhụNữ ${hashTag} #GấuShowVinID`,
                                })

                                if (window?.androidAppProxy) {
                                    setTimeout(function () {
                                        window.androidAppProxy?.requestMobileService(
                                            shareOject
                                        )
                                    }, 500)
                                }

                                if (window?.webkit) {
                                    setTimeout(function () {
                                        window.webkit?.messageHandlers.requestMobileService.postMessage(
                                            shareOject
                                        )
                                    }, 500)
                                }
                            }}
                        >
                            Chia sẻ
                        </Button>
                    </div>
                </>
            )}
        </footer>
    )
}

export default Footer
