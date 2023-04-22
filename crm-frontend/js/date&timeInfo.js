export const formatDate = data => {
    const newDate = new Date(data)

    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    }
    const resultDate = newDate.toLocaleString('ru', options)

    return resultDate
}

export const formatTime = data => {
    const newDate = new Date(data)

    const options = {
        hour: 'numeric',
        minute: 'numeric'
    }

    const resultTime = newDate.toLocaleString('ru', options)

    return resultTime
}