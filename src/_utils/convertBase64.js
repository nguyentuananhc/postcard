const convertBase64 = (src) => {
    const srcToString = src.toString()
    return srcToString.split(',')[1]
}

export default convertBase64
