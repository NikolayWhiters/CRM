// IMPORT // "svg (Icons)"
import { svgIcons } from './svg.js'

export const createContact = () => {
    // --- CREATE ELEMENT'S FOR BUTTON "ADD CONTACT" --- //
    const contactBlock = document.createElement('div')
    const contactBlockType = document.createElement('div')
    const contactBlockInput = document.createElement('input')
    const contactBlockDelete = document.createElement('button')
    const contactBlockTypeBtn = document.createElement('button')
    const contactBlockList = document.createElement('ul')
    const contactBlockListPhone = document.createElement('li')
    const contactBlockListFacebook = document.createElement('li')
    const contactBlockListVkontakte = document.createElement('li')
    const contactBlockListEmail = document.createElement('li')
    const contactBlockListOther = document.createElement('li')
    const contactBlockDeleteTooltip = document.createElement('span')

    // --- TEXT FOR ELEMENT'S --- //
    contactBlockListPhone.textContent = 'Phone'
    contactBlockListEmail.textContent = 'Email'
    contactBlockListFacebook.textContent = 'Facebook'
    contactBlockListVkontakte.textContent = 'Vk'
    contactBlockListOther.textContent = 'Other'
    contactBlockDelete.innerHTML = svgIcons.deleteIconGray
    contactBlockDeleteTooltip.textContent = 'Delete contact'
    contactBlockTypeBtn.textContent = contactBlockListPhone.textContent

    // --- GET ATTRIBUTE --- //
    // contactBlockInput.type = 'number'
    contactBlockInput.placeholder = 'Enter contact details'

    // --- ADD ELEMENT'S --- //
    // Add // "div (block)" ← "div (blocktype)", "input (data)", "button (delete)"
    contactBlock.append(contactBlockType, contactBlockInput, contactBlockDelete)
    // Add // "div (blocktype)" ← "button (type)", "ul"
    contactBlockType.append(contactBlockTypeBtn, contactBlockList)
    // Add // "ul" ← "li"
    contactBlockList.append(
        contactBlockListPhone,
        contactBlockListEmail,
        contactBlockListFacebook,
        contactBlockListVkontakte,
        contactBlockListOther
    )
    // Add // button (delete) ← "span (tooltip"
    contactBlockDelete.append(contactBlockDeleteTooltip)

    // --- CLASS FOR ELEMENT'S --- //
    // Class // "div (block)", div (type)", "input (data)", "button (delete)"
    contactBlock.classList.add('contact')
    contactBlockType.classList.add('contact__blocktype')
    contactBlockInput.classList.add('contact__input')
    contactBlockDelete.classList.add('contact__delete', 'btn')
    // Class // "span (tooltip)"
    contactBlockDeleteTooltip.classList.add('contact__tooltip')
    // Class // elements of "div (blocktype)"
    contactBlockTypeBtn.classList.add('contact__type', 'btn')
    contactBlockList.classList.add('contact__list')
    contactBlockListPhone.classList.add('contact__item')
    contactBlockListFacebook.classList.add('contact__item')
    contactBlockListVkontakte.classList.add('contact__item')
    contactBlockListEmail.classList.add('contact__item')
    contactBlockListOther.classList.add('contact__item')

    // ----- EVENT HANDLER'S ----- //
    // DELETE Contacts // in (Add contact)
    contactBlockDelete.addEventListener('click', (e) => {
        e.preventDefault()

        contactBlock.remove()
        document.querySelector('.form__addcontact-button').classList.add('form__addcontact-button--active')

        const contactElements = document.getElementsByClassName('contact')
    })
    // APPEARANCE List (type's) // in (Add contact)
    contactBlockTypeBtn.addEventListener('click', (e) => {
        e.preventDefault()
        contactBlockList.classList.toggle('contact__list--active')
        contactBlockTypeBtn.classList.toggle('contact__list--active')
    })

    contactBlockType.addEventListener('mouseleave', (e) => {
        e.preventDefault()

        contactBlockList.classList.remove('contact__list--active')
        contactBlockTypeBtn.classList.remove('contact__list--active')
    })
    // SELECT type // in (Add contact)
    const nameOfType = (type) => {
        type.addEventListener('click', () => {
            contactBlockTypeBtn.textContent = type.textContent
            contactBlockList.classList.remove('contact__list--active')
            contactBlockTypeBtn.classList.remove('contact__list--active')
        })
    }

    const arrayOfType = [
        contactBlockListPhone,
        contactBlockListFacebook,
        contactBlockListVkontakte,
        contactBlockListEmail,
        contactBlockListOther
    ]

    for (const type of arrayOfType) {
        nameOfType(type)
    }

    return {
        contactBlock,
        contactBlockInput,
        contactBlockDelete,
        contactBlockTypeBtn
    }
}