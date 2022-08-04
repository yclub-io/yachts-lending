const secondsToTime = (sec_num) => {


    const days  = Math.floor(sec_num / (24 * 60 * 60));
    const hours   = Math.floor((sec_num - (days * 24 * 3600)) / 3600);
    const minutes = Math.floor((sec_num - (days * 24 * 3600) - (hours * 3600)) / 60);
    const seconds = sec_num - (days * 24 * 3600) - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}




    return `${days} : ${hours} : ${minutes} : ${seconds}`
}

export default secondsToTime;