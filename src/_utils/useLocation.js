import { useState, useEffect } from 'react'

export const useLocation = () => {
    const [countryName, setCountryName] = useState('')
    const [regionName, setRegionName] = useState('')
    // const [regionName, setIsHN] = useState(undefined)
    const key = 'dd590a631f9bf5e66721a813820403acdd0922b5feb5ff635fb5e53a'

    useEffect(() => {
        const url = `https://api.ipdata.co?api-key=${key}`
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                setCountryName(responseJson.country_name)
                setRegionName(responseJson.latitude > 17 ? 'HN' : 'HCM')
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])

    return { countryName, regionName }
}
