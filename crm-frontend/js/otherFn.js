// IMPORT // "svg (Icons)"
import { svgIcons } from './svg.js'

export const createContactLink = (type, value, link, svgIcon, elem) => {
    link = document.createElement('a')
    link.classList.add('personinfo__contactlink')
    link.innerHTML = svgIcon

    if (type === 'Phone') {
        link.href = `tel:${value.trim()}`
    } else if (type === 'Email') {
        link.href = `mailto:${value.trim()}`
    } else {
        link.href = value.trim()
    }

    elem.append(link)
}

export const createContactElem = (type, value, elem) => {
    switch (type) {
        case 'Phone':
            let phone
            createContactLink(type, value, phone, svgIcons.contactPhone, elem)
            break
        case 'Email':
            let email
            createContactLink(type, value, email, svgIcons.contactEmail, elem)
        case 'Facebook':
            let facebook
            createContactLink(type, value, facebook, svgIcons.contactFacebook, elem)
        case 'Vk':
            let vkontakte
            createContactLink(type, value, vkontakte, svgIcons.contactVkontakte, elem)
        case 'Other':
            let other
            createContactLink(type, value, other, svgIcons.contactOther, elem)
        default:
            break
    }
}

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