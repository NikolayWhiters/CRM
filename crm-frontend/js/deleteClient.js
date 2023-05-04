// IMPORT // "svg (Icons)"
import { svgIcons } from './svg.js'

export const deleteClientModal = () => {
    // ----- CREATE ELEMENT'S FOR HEAD OF TABLE ----- //
    const deleteClient = document.createElement('div')
    const deleteClientContent = document.createElement('div')
    const deleteClientClose = document.createElement('button')
    const deleteClientTitle = document.createElement('h2')
    const deleteClientDescr = document.createElement('p')
    const deleteClientBtnAndCancel = document.createElement('div')
    const deleteClientBtn = document.createElement('button')
    const deleteClientBtnSpinner = document.createElement('span')
    const deleteClientBtnText = document.createElement('span')
    const deleteClientCancel = document.createElement('button')

    // ----- CLASS FOR ELEMENT'S ----- //
    deleteClient.classList.add('delete-modalblock')
    deleteClientContent.classList.add('delete-modalblock__content')
    deleteClientClose.classList.add('delete-modalblock__close', 'btn')
    deleteClientTitle.classList.add('delete-modalblock__title')
    deleteClientDescr.classList.add('delete-modalblock__descr')
    deleteClientBtnAndCancel.classList.add('delete-modalblock__buttonsgroup')
    deleteClientBtn.classList.add('delete-modalblock__deletebtn', 'btn')
    deleteClientBtnSpinner.classList.add('delete-modalblock__deletebtn-spinner')
    deleteClientBtnText.classList.add('delete-modalblock__deletebtn-text')
    deleteClientCancel.classList.add('delete-modalblock__cancelbtn', 'btn')

    // ----- TEXT FOR ELEMENT'S ----- //
    deleteClientClose.innerHTML = svgIcons.addClientBtnClose
    deleteClientBtnSpinner.innerHTML = svgIcons.saveSpinnerIcon
    deleteClientTitle.textContent = 'Delete client'
    deleteClientDescr.textContent = 'Are you sure you want to delete this client?'
    deleteClientBtnText.textContent = 'Delete'
    deleteClientCancel.textContent = 'Cancel'

    // ----- ADD ELEMENT'S ----- //
    deleteClient.append(deleteClientContent)
    deleteClientContent.append(
        deleteClientClose,
        deleteClientTitle,
        deleteClientDescr,
        deleteClientBtnAndCancel
    )
    deleteClientBtnAndCancel.append(
        deleteClientBtn,
        deleteClientCancel
    )
    deleteClientBtn.append(deleteClientBtnSpinner, deleteClientBtnText)

    // ----- EVENT HANDLER'S ----- //
    deleteClientClose.addEventListener('click', () => {
        deleteClient.remove()
    })

    deleteClientCancel.addEventListener('click', () => {
        deleteClient.remove()
    })

    return {
        deleteClient,
        deleteClientContent,
        deleteClientBtn,
        deleteClientBtnSpinner
    }
}

