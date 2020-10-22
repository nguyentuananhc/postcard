import './index.scss'
import { motion } from 'framer-motion'
import { fadeInUp, easing } from 'containers/QuizApp/const'

function Button({ children, onClick, hidden = false, style }) {
    if (hidden) return null
    return (
        <motion.div
            style={style}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className="button-wrapper button-disable"
            initial={{
                y: 60,
                opacity: 0,
                transition: { duration: 0.6, ease: easing },
            }}
            animate={{
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.6,
                    ease: easing,
                },
            }}
            exit={{ opacity: 0 }}
        >
            {children}
        </motion.div>
    )
}

export default Button
