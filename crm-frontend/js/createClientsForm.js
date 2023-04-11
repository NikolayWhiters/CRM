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
    const clientBlockDivSurname = document.createElement('div')
    const clientBlockDivLastname = document.createElement('div')
    // Create // "input", "label"
    const clientBlocklabelName = document.createElement('label')
    const clientBlocklabelSurname = document.createElement('label')
    const clientBlocklabelLastName = document.createElement('label')
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
    clientBlockBtnAddContactTEXT.textContent = 'Add contact'
    clientBlockBtnSave.textContent = 'Save'
    clientBlockBtnCancel.textContent = 'Cancel'

    // Get attribute //
    clientBlockInputName.type = 'text'
    clientBlockInputSurname.type = 'text'
    clientBlockInputLastName.type = 'text'
    clientBlockInputName.required = true
    clientBlockInputLastName.required = true
    clientBlockInputName.id = 'input-name'
    clientBlockInputSurname.id = 'input-surname'
    clientBlockInputLastName.id = 'input-lastname'
    clientBlocklabelName.htmlFor = 'input-name'
    clientBlocklabelSurname.htmlFor = 'input-surname'
    clientBlocklabelLastName.htmlFor = 'input-lastname'

    // ----- ADD ELEMENT'S ----- //
    // Add // form ← div (subblock of label & input)
    clientBlockForm.append(
        clientBlockDivName,
        clientBlockDivSurname,
        clientBlockDivLastname,
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
    clientBlockDivSurname.classList.add('form__surname')
    clientBlockDivLastname.classList.add('form__lastname')
    // Class // "input", "label"
    clientBlocklabelName.classList.add('form__name-label')
    clientBlocklabelSurname.classList.add('form__surname-label')
    clientBlocklabelLastName.classList.add('form__lastname-label')
    clientBlockInputName.classList.add('form__name-input')
    clientBlockInputSurname.classList.add('form__surname-input')
    clientBlockInputLastName.classList.add('form__lastname-input')
    // Class // "span (required)" FOR label
    clientBlocklabelNameRequired.classList.add('form__name-label-required')
    clientBlocklabelLastNameRequired.classList.add('form__lastname-label-required')
    clientBlockBtnDivAddContact.classList.add('form__addcontact')
    // Class // "button (Add contact)"
    clientBlockBtnAddContact.classList.add('form__addcontact-button', 'btn')
    // Class // "span (text & icon)"
    clientBlockBtnAddContactIcon.classList.add('form__addcontact-button-icon')
    clientBlockBtnAddContactIconActive.classList.add('form__addcontact-button-hovericon')
    clientBlockBtnAddContactTEXT.classList.add('form__addcontact-button-text')
    // Class // "div (subblock of button Save & Cancel)"
    clientBlockBtnSaveAndCancel.classList.add('form__buttonsgroup')
    // Class // "button (Save & Cancel)"
    clientBlockBtnSave.classList.add('form__buttonsgroup-save', 'btn')
    clientBlockBtnCancel.classList.add('form__buttonsgroup-cancel', 'btn')

    return {
        clientBlockTitle,
        clientBlockForm,
        clientBlocklabelName,
        clientBlocklabelSurname,
        clientBlocklabelLastName,
        clientBlockInputName,
        clientBlockInputSurname,
        clientBlockInputLastName,
        clientBlockBtnClose,
        clientBlockBtnDivAddContact,
        clientBlockBtnAddContact,
        clientBlockBtnSave,
        clientBlockBtnCancel
    }
}