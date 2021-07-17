export const getFormattedDate = (date) => `${getMonth(date)} ${getDay(date)}`


export const getMonth = (date) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return months[new Date(date).getMonth()]
}

export const getDay = (date) => {
    return new Date(date).getDate()
}

export const getOccurrence = (array, value) => {
    var count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
}