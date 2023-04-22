import { createContact } from './createContact.js'
import { svgIcons } from './svg.js'
// _________________________ BLOCK OF FORM _________________________ //
export const createClientForm = () => {
    // ----- CREATE ELEMENT'S FOR MODAL WINDOW ----- //
    // Create // "h2", "button (Close)", "form"
    const clientBlockTitle = document.createElement('h2')
    const clientBlockForm = document.createElement('form')
    const clientBlockBtnClose = document.createElement('button')
    // Create // "div (subblock of label & input)"
    const clientBlockDivName = document.createElement('div')
    const clientBlockDivLastname = document.createElement('div')
    const clientBlockDivSurname = document.createElement('div')
    // Create // "input", "label"
    const clientBlocklabelName = document.createElement('label')
    const clientBlocklabelLastName = document.createElement('label')
    const clientBlocklabelSurname = document.createElement('label')
    const clientBlockInputName = document.createElement('input')
    const clientBlockInputSurname = document.createElement('input')
    const clientBlockInputLastName = document.createElement('input')
    // Create // "span (required)" FOR label
    const clientBlocklabelNameRequired = document.createElement('span')
    const clientBlocklabelLastNameRequired = document.createElement('span')
    // Create // "div (subblock of button Add contact)"
    const clientBlockBtnDivAddContact = document.createElement('div')
    // Create // "button (Add contact)"
    const clientBlockBtnAddContact = document.createElement('button')
    // Create // "span (text & icon)" FOR button (Add Contact)
    const clientBlockBtnAddContactIcon = document.createElement('span')
    const clientBlockBtnAddContactIconActive = document.createElement('span')
    const clientBlockBtnAddContactTEXT = document.createElement('span')
    // Create // "div (subblock of button Save & Cancel)"
    const clientBlockBtnSaveAndCancel = document.createElement('div')
    // Create // "button (Save and Cancel)"
    const clientBlockBtnSave = document.createElement('button')
    const clientBlockBtnCancel = document.createElement('button')

    // ----- TEXT FOR ELEMENT'S ----- //
    clientBlocklabelNameRequired.textContent = '*'
    clientBlocklabelLastNameRequired.textContent = '*'
    clientBlocklabelName.textContent = 'Name'
    clientBlocklabelLastName.textContent = 'Lastname'
    clientBlocklabelSurname.textContent = 'Surname'
    // Text // For modal window
    clientBlockTitle.textContent = 'New client'
    clientBlockBtnClose.innerHTML = svgIcons.addClientBtnClose
    clientBlockBtnAddContactIcon.innerHTML = svgIcons.iconAddContact
    clientBlockBtnAddContactIconActive.innerHTML = svgIcons.iconAddContactHoverActive
    clientBlockBtnAddContactTEXT.textContent = 'Add contact'
    clientBlockBtnSave.textContent = 'Save'
    clientBlockBtnCancel.textContent = 'Cancel'

    // Get attribute //
    clientBlockInputName.type = 'text'
    clientBlockInputLastName.type = 'text'
    clientBlockInputSurname.type = 'text'
    clientBlockInputName.required = true
    clientBlockInputLastName.required = true
    clientBlockInputName.id = 'input-name'
    clientBlockInputLastName.id = 'input-lastname'
    clientBlockInputSurname.id = 'input-surname'
    clientBlocklabelName.htmlFor = 'input-name'
    clientBlocklabelLastName.htmlFor = 'input-lastname'
    clientBlocklabelSurname.htmlFor = 'input-surname'

    // ----- ADD ELEMENT'S ----- //
    // Add // form ← div (subblock of label & input)
    clientBlockForm.append(
        clientBlockDivName,
        clientBlockDivLastname,
        clientBlockDivSurname,
        clientBlockBtnDivAddContact,
        clientBlockBtnSaveAndCancel
    )
    // Add // div (subblock of label & input) ← label & input (NAME, SURNAME, LASTNAME)
    clientBlockDivName.append(clientBlockInputName, clientBlocklabelName)
    clientBlockDivSurname.append(clientBlockInputSurname, clientBlocklabelSurname)
    clientBlockDivLastname.append(clientBlockInputLastName, clientBlocklabelLastName)
    // Add // label ← span (required)
    clientBlocklabelName.append(clientBlocklabelNameRequired)
    clientBlocklabelLastName.append(clientBlocklabelLastNameRequired)
    // Add // div ← button (Add contact)
    clientBlockBtnDivAddContact.append(clientBlockBtnAddContact)
    // Add // button (Add contact) ← span, svg (text & icon)
    clientBlockBtnAddContact.append(
        clientBlockBtnAddContactIcon,
        clientBlockBtnAddContactIconActive,
        clientBlockBtnAddContactTEXT
    )
    clientBlockBtnSaveAndCancel.append(clientBlockBtnSave, clientBlockBtnCancel)
    // Add // span (text) ← span (required)
    clientBlocklabelName.append(clientBlocklabelNameRequired)
    clientBlocklabelLastName.append(clientBlocklabelLastNameRequired)

    // ----- CLASSE'S FOR ELEMENT'S ----- //
    // Class // "h2", "button (Close)", "form"
    clientBlockTitle.classList.add('modalblock__title')
    clientBlockBtnClose.classList.add('modalblock__button')
    clientBlockForm.classList.add('modalblock__form', 'form')
    // Class // "div (subblock of label & input)"
    clientBlockDivName.classList.add('form__name')
    clientBlockDivLastname.classList.add('form__lastname')
    clientBlockDivSurname.classList.add('form__surname')
    // Class // "input", "label"
    clientBlocklabelName.classList.add('form__name-label')
    clientBlocklabelLastName.classList.add('form__lastname-label')
    clientBlocklabelSurname.classList.add('form__surname-label')
    clientBlockInputName.classList.add('form__name-input')
    clientBlockInputLastName.classList.add('form__lastname-input')
    clientBlockInputSurname.classList.add('form__surname-input')
    // Class // "span (required)" FOR label
    clientBlocklabelNameRequired.classList.add('form__name-label-required')
    clientBlocklabelLastNameRequired.classList.add('form__lastname-label-required')
    clientBlockBtnDivAddContact.classList.add('form__addcontact')
    // Class // "button (Add contact)"
    clientBlockBtnAddContact.classList.add('form__addcontact-button', 'btn', 'form__addcontact-button--active')
    // Class // "span (text & icon)"
    clientBlockBtnAddContactIcon.classList.add('form__addcontact-button-icon')
    clientBlockBtnAddContactIconActive.classList.add('form__addcontact-button-hovericon')
    clientBlockBtnAddContactTEXT.classList.add('form__addcontact-button-text')
    // Class // "div (subblock of button Save & Cancel)"
    clientBlockBtnSaveAndCancel.classList.add('form__buttonsgroup')
    // Class // "button (Save & Cancel)"
    clientBlockBtnSave.classList.add('form__buttonsgroup-save', 'btn')
    clientBlockBtnCancel.classList.add('form__buttonsgroup-cancel', 'btn')

    // ----- EVENT HANDLER'S ----- //
    // Input & Label // Animation-focused for "Label-Surname"
    clientBlockInputSurname.addEventListener('focus', () => {
        clientBlocklabelSurname.classList.add('focused')
    })
    clientBlockInputSurname.addEventListener('blur', () => {
        if (!clientBlockInputSurname.value) {
            clientBlocklabelSurname.classList.remove('focused')
        }
    })
    // Contacts // Add contact in modal window
    clientBlockBtnAddContact.addEventListener('click', (e) => {
        e.preventDefault()

        const contactElements = document.getElementsByClassName('contact')

        if (contactElements.length < 9) {
            const contactElement = createContact()
            clientBlockBtnDivAddContact.prepend(contactElement.contactBlock)
            if (contactElements.length >= 5) {
                document.querySelector('.modalblock__content').style.top = "0%"
            }
        } else {
            const contactElement = createContact()
            clientBlockBtnDivAddContact.prepend(contactElement.contactBlock)
            clientBlockBtnAddContact.classList.remove('form__addcontact-button--active')
        }
    })

    // // Add // animation-hover for "Svg icons of Add contact"
    // clientBlockBtnAddContact.addEventListener('mousemove', () => {
    //     clientBlockBtnAddContactIcon.classList.remove('form__addcontact-button--active')
    //     clientBlockBtnAddContactIconActive.classList.add('form__addcontact-button--active')
    // })
    // clientBlockBtnAddContact.addEventListener('mouseleave', () => {
    //     clientBlockBtnAddContactIcon.classList.add('form__addcontact-button--active')
    //     clientBlockBtnAddContactIconActive.classList.remove('form__addcontact-button--active')
    // })


    return {
        clientBlockTitle,
        clientBlockForm,
        clientBlocklabelName,
        clientBlocklabelLastName,
        clientBlocklabelSurname,
        clientBlockInputName,
        clientBlockInputLastName,
        clientBlockInputSurname,
        clientBlockBtnClose,
        clientBlockBtnDivAddContact,
        clientBlockBtnAddContact,
        clientBlockBtnSave,
        clientBlockBtnCancel
    }
}