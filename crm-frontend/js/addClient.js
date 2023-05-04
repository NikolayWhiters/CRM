// IMPORT // "function (Client "form")"
import { createClient } from './clientsAPI.js'
import { createClientForm } from './createClientsForm.js'
import { validateFormOfClient } from './formValidate.js'
import { validateContactOfClient } from './contactValidate.js'

export const createNewClient = () => {
    // Declare // "function (Client "form")"
    const clientForm = createClientForm()

    // ----- CREATE ELEMENT'S ----- //
    // Create // "div (Modal window)" and "div (Client block)" 
    const modalWindow = document.createElement('div')
    const clientBlock = document.createElement('div')

    // ----- ADD ELEMENT'S ----- //
    // Add // "div (Modal window)" ← "div (Client block)"
    modalWindow.append(clientBlock)
    // Add // "div (Client block)" ← "h2", "button (Close)", "form"
    clientBlock.append(
        clientForm.clientBlockTitle,
        clientForm.clientBlockBtnClose,
        clientForm.clientBlockForm
    )

    // ----- CLASS FOR ELEMENT'S ----- //
    // Class // "div (Modal window)" and "div (Client block)"
    modalWindow.classList.add('modalblock')
    clientBlock.classList.add('modalblock__content')

    // ----- EVENT HANDLER'S ----- //
    // ADD data's of contacts // On click "Button (Add contact)"
    clientForm.clientBlockForm.addEventListener('submit', async (e) => {
        e.preventDefault()
        if (!validateFormOfClient()) {
            return
        }

        const contactsOfTypes = document.querySelectorAll('.contact__type')
        const contactsOfValues = document.querySelectorAll('.contact__input')
        let contacts = []
        let clientObj = {}

        for (let i = 0; i < contactsOfTypes.length; i++) {
            if (!validateContactOfClient(contactsOfTypes[i], contactsOfValues[i])) {
                return
            }

            contacts.push({
                type: contactsOfTypes[i].textContent,
                value: contactsOfValues[i].value
            })
        }

        clientObj.name = clientForm.clientBlockInputName.value
        clientObj.lastName = clientForm.clientBlockInputLastName.value
        clientObj.surname = clientForm.clientBlockInputSurname.value
        clientObj.contacts = contacts
        console.log(clientObj)

        const spinnerForBtnSave = clientForm.clientBlockBtnSaveSpinner
        spinnerForBtnSave.style.display = 'block'
        
        setTimeout(async () => {
            await createClient(clientObj, 'POST')
        }, 700)
    })

    // REMOVE Modal window // On click "Button Close"
    clientForm.clientBlockBtnClose.addEventListener('click', () => {
        modalWindow.remove()
    })
    // REMOVE Modal window // On click "Button Cancel"
    clientForm.clientBlockBtnCancel.addEventListener('click', () => {
        modalWindow.remove()
    })
    // // REMOVE Modal window // On click "Outside Modal window"
    // document.addEventListener('click', (e) => {
    //     if (e.target == modalWindow) {
    //         modalWindow.remove()
    //     }
    // })

    return modalWindow
}