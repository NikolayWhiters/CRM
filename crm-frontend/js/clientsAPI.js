// IMPORT // "svg (Icons)"
import { svgIcons } from './svg.js'

export const createContactLink = (type, value, link, svgIcon, item) => {
    link = document.createElement('a')
    link.classList.add('contact')
    link.innerHTML = svgIcon

    if (type === 'Email') {
        link.href = `mailto:${value.trim()}`
    } else if (type === 'Phone') {
        link.href = `tel:${value.tim()}`
    } else {
        link.href = value.trim()
    }

    item.append(link)
}

export const createContactItem = (type, value, item) => {
    switch (type) {
        case 'Phone':
            let phone
            createContactLink(type, value, phone, svgIcons.contactPhone, item)
            break
        case 'Email':
            let email
            createContactLink(type, value, email, svgIcons.contactEmail, item)
        case 'Facebook':
            let facebook
            createContactLink(type, value, facebook, svgIcons.contactFacebook, item)
        case 'Vkontakte':
            let vkontakte
            createContactLink(type, value, vkontakte, svgIcons.contactVkontakte, item)
        case 'Other':
            let other
            createContactLink(type, value, other, svgIcons.contactOther, item)
        default:
            break
    }
}

export const getClients = async () => {
    const response = await fetch('http://localhost:3000/api/clients', {
        method: 'GET'
    })

    const result = await response.json()
    console.log(result)

    return result
}

export const createClient = async (client) => {
    const response = await fetch('http://localhost:3000/api/clients', {
        method: 'POST',
        body: JSON.stringify(client)
    })

    const result = await response.json()
    console.log(result)
}