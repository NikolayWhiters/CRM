// IMPORT // "function (Client "form")"
import { createClientForm } from './createClientsForm.js'
import { deleteClientModal } from './deleteClient.js'
import { createContact } from './createContact.js'
import { createClient } from './clientsAPI.js'

export const editDetailsOfClient = (data) => {
    const editClientBlock = document.createElement('div')
    const editClientcontainer = document.createElement('div')
    const editClientBlockContent = document.createElement('div')
    const editClientBlockTitleID = document.createElement('span')
    const clientForm = createClientForm()

    // ----- TEXT FOR ELEMENT'S ----- //
    clientForm.clientBlockTitle.textContent = 'Edit client'
    editClientBlockTitleID.textContent = 'ID: ' + data.id.substr(0, 6)
    clientForm.clientBlockBtnCancel.textContent = 'Delete client'
    clientForm.clientBlockInputName.value = data.name
    clientForm.clientBlockInputSurname.value = data.surname
    clientForm.clientBlockInputLastName.value = data.lastName

    // ----- CLASS FOR ELEMENT'S ----- //
    // Create // "div (Edit client)" and "div (Edit Client block)" 
    editClientBlock.classList.add('modalblock')
    editClientcontainer.classList.add('modalblock__container')
    editClientBlockContent.classList.add('modalblock__content')
    editClientBlockTitleID.classList.add('modalblock__idclient')

    // ----- ADD ELEMENT'S ----- //
    // Add // "div (Edit client)" ← "div (container)"
    editClientBlock.append(editClientcontainer)
    // Add // "div (container)" ← "div (Edit Client block)"
    editClientcontainer.append(editClientBlockContent)
    // Add // "h2" ← "span (ID client)"
    clientForm.clientBlockTitle.append(editClientBlockTitleID)
    // Add // "div (Client block)" ← "h2", "button (Close)", "form"
    editClientBlockContent.append(
        clientForm.clientBlockTitle,
        clientForm.clientBlockBtnClose,
        clientForm.clientBlockForm
    )

    // ----- EVENT HANDLER'S ----- //
    clientForm.clientBlockBtnClose.addEventListener('click', () => {
        editClientBlock.remove()
    })

    clientForm.clientBlockBtnClose.addEventListener('click', () => {
        editClientBlock.remove()
    })

    clientForm.clientBlockBtnCancel.addEventListener('click', (e) => {
        e.preventDefault()

        const clientDelete = deleteClientModal()
        document.body.append(clientDelete.deleteClient)

        import('./clientsAPI.js').then(({ deleteClient }) => {
            clientDelete.deleteClientBtn.addEventListener('click', () => {
                deleteClient(data.id)
                document.getElementById(data.id).remove()
            })
        })
    })

    for (const contact of data.contacts) {
        const contactOfClient = createContact()

        contactOfClient.contactBlockTypeBtn.textContent = contact.type
        contactOfClient.contactBlockInput.value = contact.value

        clientForm.clientBlockBtnDivAddContact.prepend(contactOfClient.contactBlock)
    }

    if (data.contacts.length === 10) {
        clientForm.clientBlockBtnAddContact.classList.remove('form__addcontact-button--active')
    }

    clientForm.clientBlockForm.addEventListener('submit', (e) => {
        e.preventDefault()

        const contactTypes = document.querySelectorAll('.contact__type')
        const contactValues = document.querySelectorAll('.contact__input')

        let contacts = []
        let client = {}

        for (let i = 0; i < contactTypes.length; i++) {
            contacts.push({
                type: contactTypes[i].innerHTML,
                value: contactValues[i].value
            })
        }

        client.name = clientForm.clientBlockInputName.value
        client.lastName = clientForm.clientBlockInputLastName.value
        client.surname = clientForm.clientBlockInputSurname.value
        client.contacts = contacts

        const spinnerForBtnSave = clientForm.clientBlockBtnSaveSpinner
        spinnerForBtnSave.style.display = 'block'

        setTimeout(() => {
            createClient(client, 'PATCH', data.id)
        }, 700)
    })

    return {
        editClientBlock,
        editClientBlockContent
    }
}