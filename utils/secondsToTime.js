const secondsToTime = (seconds) => {


    return `00 : 00 : 00 : ${seconds % 60}`
}

export default secondsToTime;