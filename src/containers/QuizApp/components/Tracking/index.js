import ReactGA from 'react-ga'

const isDevEnv = () => {
    return process.env.NODE_ENV === 'development'
}

export const initGA = (trackingID) => {
    ReactGA.initialize(trackingID)
}

export const setUID = (uid) => {
    ReactGA.set({ userId: uid })
}

export const PageView = (title) => {
    if (!isDevEnv()) {
        ReactGA.pageview(title)
    }
}

/**
 * Event - Add custom tracking event.
 * @param {string} category
 * @param {string} action
 * @param {string} label
 */
export const Event = (category, action, label) => {
    if (!isDevEnv()) {
        ReactGA.event({
            category,
            action,
            label,
        })
    }
}
