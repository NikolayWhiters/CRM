// IMPORT // "function (Client "form")"
import { createClientForm } from "./createClientsForm.js"
import { deleteClientModal } from "./deleteClient.js"
import { createContact } from "./createContact.js"

export const editDetailsOfClient = (data) => {
    const editClientBlock = document.createElement('div')
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
    editClientBlockContent.classList.add('modalblock__content')
    editClientBlockTitleID.classList.add('modalblock__idclient')

    // ----- ADD ELEMENT'S ----- //
    // Add // "div (Edit client)" ← "div (Edit Client block)"
    editClientBlock.append(editClientBlockContent)
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

    return {
        editClientBlock,
        editClientBlockContent
    }
}