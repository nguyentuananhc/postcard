import { motion } from 'framer-motion'
import Button from 'containers/QuizApp/components/Button'
import { useDispatch, useSelector } from 'react-redux'

import { actions, REDUCER_NAME } from 'containers/QuizApp/slice'

import { clickStart, pageViewEvent } from 'containers/QuizApp/helper/trackingGA'
import { useMediaQuery } from 'react-responsive'

import './index.scss'
import { useEffect, useState } from 'react'

let easing = [0.6, -0.05, 0.01, 0.99]

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const fadeInUp = {
    initial: {
        y: 60,
        opacity: 0,
        transition: { duration: 0.6, ease: easing },
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: easing,
        },
    },
}

function StartPage({ hidden = false }) {
    const dispatch = useDispatch()
    const { listMerChants } = useSelector((state) => state[REDUCER_NAME])
    const [headerFontSize, setHeaderFontSize] = useState('text-xl')
    const [desFontSize, setDesFontSize] = useState('16px')
    const isSmallScreen = useMediaQuery({ maxDeviceWidth: 320 })

    useEffect(() => {
        if (isSmallScreen) {
            setHeaderFontSize('text-xl-small')
            setDesFontSize('14px')
        }
    })
    useEffect(() => {
        pageViewEvent(0)
    }, [])

    return (
        <motion.div
            id={'page0'}
            exit={{ opacity: 0 }}
            initial="initial"
            animate="animate"
            className="page-wrapper start-page-wrapper"
            ariaHidden={hidden}
        >
            <motion.div className="page-content" variants={stagger}>
                <motion.div
                    variants={fadeInUp}
                    className={`text-blue d-flex flex-column align-items-center ${headerFontSize}`}
                >
                    <div className="z-3">Nếu là hoa,</div>
                    <div className="z-3">bạn sẽ là hoa gì?</div>
                </motion.div>
                <div className="img-welcome">
                    <img src="/static/img/NRQuiz/img_welcome.png" />
                </div>
                <motion.div
                    variants={fadeInUp}
                    className="subline d-flex flex-column align-items-center"
                    style={{fontSize: desFontSize}}
                >
                    <div>Khám phá ngay loài hoa tượng trưng cho</div>
                    <div>bạn chỉ với 5 câu hỏi nhỏ 🌼</div>
                </motion.div>

                {!!listMerChants?.length ? (
                    <Button
                        hidden={hidden}
                        onClick={() => {
                            dispatch(actions.setCurrentIndexRequest(1))
                            clickStart()
                        }}
                    >
                        Chơi luôn nào!
                    </Button>
                ) : (
                    <div className="loading-title text-orange">
                        <img
                            className="loading-icon"
                            src="/static/img/loading.gif"
                        />
                        Sống như những đóa hoa nhé...
                    </div>
                )}
            </motion.div>
        </motion.div>
    )
}

export default StartPage
