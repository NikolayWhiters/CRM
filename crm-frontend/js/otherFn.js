// IMPORT // "svg (Icons)"
import { svgIcons } from './svg.js'

export const createContactLink = (type, value, link, svgIcon, elem) => {
    const personInfoLinkTooltip = document.createElement('span')
    const personInfoLinkTooltipSPAN = document.createElement('span')
    const personInfoLinkTooltipLINK = document.createElement('span')

    personInfoLinkTooltip.classList.add('personinfo__contactlink-tooltip', 'contactlink-tooltip')
    personInfoLinkTooltipLINK.textContent = value

    link = document.createElement('a')
    link.classList.add('personinfo__contactlink')
    link.innerHTML = svgIcon
    
    if (type === 'Phone') {
        personInfoLinkTooltipLINK.classList.add('contactlink-tooltip__phone')
        personInfoLinkTooltipLINK.textContent = value
        link.href = `tel:${value.trim()}`
    } else if (type === 'Email') {
        personInfoLinkTooltip.append(personInfoLinkTooltipSPAN)
        personInfoLinkTooltipSPAN.classList.add('contactlink-tooltip__text')
        personInfoLinkTooltipLINK.classList.add('contactlink-tooltip__link')
        personInfoLinkTooltipSPAN.textContent = type + ':'
        personInfoLinkTooltipLINK.textContent = value
        link.href = `mailto:${value.trim()}`
    } else if (type === 'Facebook') {
        personInfoLinkTooltip.append(personInfoLinkTooltipSPAN)
        personInfoLinkTooltipSPAN.classList.add('contactlink-tooltip__text')
        personInfoLinkTooltipLINK.classList.add('contactlink-tooltip__link')
        personInfoLinkTooltipSPAN.textContent = type + ':'
        personInfoLinkTooltipLINK.textContent = '@' + value
        link.href = value.trim()
    } else if (type === 'Vk') {
        personInfoLinkTooltip.append(personInfoLinkTooltipSPAN)
        personInfoLinkTooltipSPAN.classList.add('contactlink-tooltip__text')
        personInfoLinkTooltipLINK.classList.add('contactlink-tooltip__link')
        personInfoLinkTooltipSPAN.textContent = type + ':'
        personInfoLinkTooltipLINK.textContent = '@' + value
        link.href = value.trim()
    } else {
        personInfoLinkTooltip.append(personInfoLinkTooltipSPAN)
        personInfoLinkTooltipSPAN.classList.add('contactlink-tooltip__text')
        personInfoLinkTooltipLINK.classList.add('contactlink-tooltip__link')
        personInfoLinkTooltipSPAN.textContent = type + ':'
        link.href = value.trim()
    }

    personInfoLinkTooltip.append(personInfoLinkTooltipLINK)
    link.append(personInfoLinkTooltip)
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
            break
        case 'Facebook':
            let facebook
            createContactLink(type, value, facebook, svgIcons.contactFacebook, elem)
            break
        case 'Vk':
            let vkontakte
            createContactLink(type, value, vkontakte, svgIcons.contactVkontakte, elem)
            break
        case 'Other':
            let other
            createContactLink(type, value, other, svgIcons.contactOther, elem)
            break
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