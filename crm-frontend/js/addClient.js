// IMPORT // "function (Client "form")"
import { createClientForm } from './createClientsForm.js'

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

    // REMOVE MODAL WINDOW // On click "Button Close"
    clientForm.clientBlockBtnClose.addEventListener('click', () => {
        modalWindow.remove()
    })
    // REMOVE MODAL WINDOW // On click "Button Cancel"
    clientForm.clientBlockBtnCancel.addEventListener('click', () => {
        modalWindow.remove()
    })
    // // REMOVE MODAL WINDOW // On click "Outside Modal Window"
    // document.addEventListener('click', (e) => {
    //     if (e.target == modalWindow) {
    //         modalWindow.remove()
    //     }
    // })

    // ----- CLASS FOR ELEMENT'S ----- //
    // Class // "div (Modal window)" and "div (Client block)"
    modalWindow.classList.add('modalblock', 'modal-animation')
    clientBlock.classList.add('modalblock__content', 'modal-animation')

    return modalWindow
}