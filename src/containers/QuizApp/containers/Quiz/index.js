import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { clickSelect, pageViewEvent } from 'containers/QuizApp/helper/trackingGA'
import { useMediaQuery } from 'react-responsive'
import { REDUCER_NAME, actions } from 'containers/QuizApp/slice'
import usePrevious from 'containers/QuizApp/helper/usePrevious'
import './index.scss'

function Quiz({}) {
    const [value, setValue] = useState(0)
    const [disableChooseAnswer, setDisable] = useState(false)
    const dispatch = useDispatch()
    const { currentIndex, listQuiz, answerSheet } = useSelector(
        (state) => state[REDUCER_NAME]
    )

    const isSmallScreen = useMediaQuery({ maxDeviceWidth: 320 })

    const previosCurrentIndex = usePrevious(currentIndex)

    let easing = [0.6, -0.05, 0.01, 0.99]

    const stagger = {
        animate: {
            transition: {
                staggerChildren: 0.05,
            },
        },
    }

    const fadeInUp = {
        initial: {
            x: 160,
            opacity: 0,
            transition: { duration: 0.6, ease: easing },
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: easing,
            },
        },
    }

    const array = ['A', 'B', 'C', 'D']

    const currentQuiz = listQuiz[currentIndex - 1] || {}

    const nextQuestion = (answer) => {
        if (disableChooseAnswer) return
        clickSelect(currentIndex, answer.id)
        dispatch(
            actions.saveAnswerSheetRequest({
                key: currentIndex,
                value: answer,
            })
        )

        setDisable(true)

        setTimeout(() => {
            setDisable(false)
            dispatch(actions.setCurrentIndexRequest(currentIndex + 1))
        }, 500)
    }

    useEffect(() => {
        if (previosCurrentIndex !== currentIndex) setValue((value) => ++value)
    }, [currentIndex, previosCurrentIndex])

    useEffect(() => {
        pageViewEvent(currentIndex)
    }, [currentIndex])

    if (currentIndex > listQuiz.length) return null

    const currentAnswer = answerSheet?.[currentIndex] || {}

    return (
        <motion.div
            initial="initial"
            animate="animate"
            key={value}
            className="quiz-wrapper"
        >
            <div className="question-label z-3" style={{ fontSize: isSmallScreen ? '22px' : '24px'}}>{currentQuiz.question}</div>
            <motion.div
                variants={stagger}
                className="quiz-container d-flex flex-column"
            >
                {(currentQuiz?.answer || []).map((item, index) => {
                    return (
                        <motion.div
                            whileTap={{ scale: 0.95 }}
                            variants={fadeInUp}
                            className={`quiz ${array[index]} ${
                                currentAnswer?.id === item.id
                                    ? 'selected-answer'
                                    : ''
                            }`}
                            style={{
                                height: isSmallScreen ? '64px' : '80px',
                                fontSize: isSmallScreen ? '16px' : '18px',
                                lineHeight: isSmallScreen ? '20px' : '24px'
                            }}
                            key={index}
                            onClick={() => nextQuestion(item)}
                        >
                            <span>{`${array[index]}. ${item.content}`}</span>
                            {currentAnswer?.id === item.id && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.4 }}
                                    className="selected-icon"
                                >
                                    <img src="/static/img/ic_check.svg" />
                                </motion.div>
                            )}
                        </motion.div>
                    )
                })}
            </motion.div>
        </motion.div>
    )
}

export default Quiz
