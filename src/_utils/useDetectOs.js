import { useEffect, useState } from 'react'

const useDetectOS = () => {
    const [OS, setOS] = useState()
    useEffect(() => {
        const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(
            window.navigator.userAgent
        )
        setOS(isIPhone ? 'IOS' : 'ANDROID')
    }, [])

    return OS
}

export default useDetectOS
