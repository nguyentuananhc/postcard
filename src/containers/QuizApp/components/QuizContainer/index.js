import React, { useState } from 'react'
import Quiz from 'containers/QuizApp/containers/Quiz'
import { useSelector } from 'react-redux'
import { REDUCER_NAME } from 'containers/QuizApp/slice'
import { useMediaQuery } from 'react-responsive'

import './index.scss'

function QuizContainer({}) {
    const { currentIndex } = useSelector((state) => state[REDUCER_NAME])

    const isSmallScreen = useMediaQuery({ maxDeviceWidth: 320 })

    return (
        <div className={`${isSmallScreen ? 'quiz-container-wrapper-small' : 'quiz-container-wrapper'} page-wrapper`}>
            <div className={`z-3 ${isSmallScreen ? 'text-lg-small' : 'text-lg'}`}>{`Câu hỏi ${currentIndex}/5`}</div>
            <img
                src="/static/img/NRQuiz/deco1.png"
                style={{
                    width: 90,
                    height: 118,
                    position: 'absolute',
                    left: 0,
                    top: isSmallScreen ? 0 : 14,
                }}
            />
            <img
                src="/static/img/NRQuiz/deco2.png"
                style={{
                    width: 172,
                    height: 100,
                    position: 'absolute',
                    right: 0,
                    top: isSmallScreen ? 40 : 80,
                }}
            />
            <img
                src="/static/img/NRQuiz/deco3.png"
                style={{
                    width: '100%',
                    position: 'absolute',
                    right: 0,
                    bottom: 0,
                }}
            />
            <Quiz />
        </div>
    )
}

export default QuizContainer
