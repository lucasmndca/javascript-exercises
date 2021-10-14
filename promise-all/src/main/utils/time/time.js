const getFormattedDate = () => {
    const date = new Date()
    return `${date.toLocaleString()}`
}

const getTimestamp = () => {
    return Date.now() / 1000
}

const getTimeTaken = (startingTime) => {
    let now = getTimestamp()
    return (now - startingTime).toFixed(3)
}

module.exports = {
    getFormattedDate,
    getTimestamp,
    getTimeTaken
}