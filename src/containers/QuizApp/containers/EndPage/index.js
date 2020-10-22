import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'

import { LIST_RESULT } from 'containers/QuizApp/const'
import { REDUCER_NAME, actions } from 'containers/QuizApp/slice'
import useProgressiveImage from 'containers/QuizApp/helper/useProgressiveImage'

import { pageViewEvent } from 'containers/QuizApp/helper/trackingGA'

import './index.scss'
import { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const LazyLoadImageComponent = ({
    source,
    placeholder,
    className = '',
    style = {},
}) => {
    const loaded = useProgressiveImage(source)

    return <img className={className} src={loaded || placeholder} />
}

function EndPage({}) {
    const dispatch = useDispatch()
    const isSmallScreen = useMediaQuery({ maxDeviceWidth: 320 })

    const { answerSheet, userName, gender } = useSelector(
        (state) => state[REDUCER_NAME]
    )

    const isContainKeys = Object.values(answerSheet).filter(
        (ans) => ans.isSpecial
    ).length

    let keyValue = null

    if (!!isContainKeys) {
        keyValue = Math.max.apply(
            Math,
            Object.values(answerSheet)
                .filter((ans) => ans.isSpecial)
                .map(function (o) {
                    return o.value
                })
        )
    } else {
        keyValue = Object.values(answerSheet).reduce((a, b) => {
            return a + b.value
        }, 0)
    }

    const finalResult = LIST_RESULT[keyValue]
    const colorClass = LIST_RESULT?.[keyValue]?.color || 'text-orange'
    const backgroundClass =
        LIST_RESULT?.[keyValue]?.background || 'background-3'

    let isShowMaleLabel = false

    if (keyValue === 30 && Number(gender) === 1) {
        isShowMaleLabel = true
    }

    useEffect(() => {
        dispatch(actions.saveScoreRequest(keyValue))
    }, [keyValue])

    useEffect(() => {
        dispatch(
            actions.saveHashTagRequest(
                `#Team${finalResult?.label?.split(' ')?.join('') || ''}`
            )
        )
    }, [finalResult])

    useEffect(() => {
        pageViewEvent(6)
    }, [])

    const imageURL = `/static/img/flower/${
        isShowMaleLabel ? finalResult?.imgSrcForMale : finalResult?.imgSrc
    }.png`

    return (
        <motion.div
            exit={{ opacity: 0 }}
            initial="initial"
            animate="animate"
            className="page-wrapper end-page-wrapper "
        >
            <div className={backgroundClass} />
            <motion.div className="page-content" variants={stagger}>
                <div className="page-image">
                    <LazyLoadImageComponent
                        source={imageURL}
                        placeholder={'/static/img/NRQuiz/img_welcome.png'}
                    />
                </div>
                <div className={`z-3 ${isSmallScreen ? 'result-small' : 'result'}`}>
                    <div>
                        <div className={`${isSmallScreen ? 'mb-1' : 'mb-3'}`}>
                            <span className={`mr-2 ${colorClass} ${isSmallScreen ? 'text-md-small' : 'text-md'}`}>
                                {userName}
                            </span>
                            <span className={`${isSmallScreen ? 'text-sm-small' : 'text-sm'}`}>
                                chính là
                            </span>
                        </div>
                        <div className={`${colorClass}  ${isSmallScreen ? 'text-xl-small' : 'text-xl'}`}>
                            {isShowMaleLabel
                                ? finalResult?.labelForMale
                                : finalResult?.label}
                        </div>

                        <div
                            className={`${isSmallScreen ? 'mt-1' : 'mt-3'}`}
                            style={{ whiteSpace: 'break-spaces', fontSize: isSmallScreen ? '14px' : '16px' }}
                        >
                            {finalResult?.mainContent || ''}
                        </div>
                        <div
                            className={`${isSmallScreen ? 'mt-2' : 'mt-3'}`}
                            style={{ whiteSpace: 'break-spaces', fontSize: isSmallScreen ? '14px' : '16px' }}
                        >
                            {finalResult?.subContent || ''}
                        </div>
                    </div>
                    <div className={`hashTag d-flex flex-column align-items-center ${isSmallScreen ? 'mt-2' : 'mt-3'}`}
                        style={{fontSize: isSmallScreen ? '12px' : '16px', lineHeight: isSmallScreen ? '12px' : '20px'}}
                    >
                        <div className={colorClass}>
                            {`#Team${
                                finalResult?.label?.split(' ')?.join('') || ''
                            }`}
                        </div>
                        <div className={colorClass}>
                            #TôiYêuPhụNữ #GấuShowVinID
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default EndPage
