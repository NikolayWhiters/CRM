// IMPORT // "function (format date&time and contact element)" and "svg (Icons)"
import { createContactElem, formatDate, formatTime } from './otherFn.js'
import { editDetailsOfClient } from './editClient.js'
import { deleteClientModal } from './deleteClient.js'
import { svgIcons } from './svg.js'

export const createClientTR = (data) => {
    // ----- CREATE ELEMENT'S FOR TBODY OF TABLE ----- //
    // Create // "tr" for tbody
    const tableTbodyTr = document.createElement('tr')
    //                          ↓
    // Create // "td" for tr
    const tableTbodyTrTdId = document.createElement('td')
    const tableTbodyTrTdFullName = document.createElement('td')
    const tableTbodyTrTdCreatingDate = document.createElement('td')
    const tableTbodyTrTdLastChanges = document.createElement('td')
    const tableTbodyTrTdContacts = document.createElement('td')
    const tableTbodyTrTdActions = document.createElement('td')
    //                          ↓
    // Create // "span (client)" for td
    const clientId = document.createElement('span')
    const clientName = document.createElement('span')
    const clientLastName = document.createElement('span')
    const clientSurname = document.createElement('span')
    const clientCreatingDate = document.createElement('span')
    const clientCreatingTime = document.createElement('span')
    const clientLastChangesDate = document.createElement('span')
    const clientLastChangesTime = document.createElement('span')
    const clientActionCHANGE = document.createElement('button')
    const clientActionDELETE = document.createElement('button')
    //                          ↓
    // Create // "span (svg) and (text)" for span (client)
    const clientActionCHANGESvg = document.createElement('span')
    const clientActionCHANGESpan = document.createElement('span')
    const clientActionCHANGESvgSpinner = document.createElement('span')
    const clientActionDELETESvg = document.createElement('span')
    const clientActionDELETESpan = document.createElement('span')
    const clientActionDELETESvgSpinner = document.createElement('span')

    //
    const clientEdit = editDetailsOfClient(data)
    const clientDelete = deleteClientModal()

    for (const contact of data.contacts) {
        createContactElem(contact.type, contact.value, tableTbodyTrTdContacts)
    }

    const deleteClientById = () => {
        import('./clientsAPI.js').then(({ deleteClient }) => {
            clientDelete.deleteClientBtn.addEventListener('click', () => {
                clientDelete.deleteClientBtnSpinner.style.display = 'block'

                setTimeout(() => {
                    deleteClient(data.id)
                    document.getElementById(data.id).remove()
                }, 700)
            })
        })
    }

    clientActionCHANGE.addEventListener('click', () => {
        clientActionCHANGESvgSpinner.style.display = 'block'
        clientActionCHANGESvg.style.display = 'none'
        setTimeout(() => {
            document.body.append(clientEdit.editClientBlock)

            clientActionCHANGESvgSpinner.style.display = 'none'
            clientActionCHANGESvg.style.display = 'block'
        }, 700)
    })

    clientActionDELETE.addEventListener('click', () => {
        clientActionDELETESvgSpinner.style.display = 'block'
        clientActionDELETESvg.style.display = 'none'
        setTimeout(() => {
            deleteClientById()
            document.body.append(clientDelete.deleteClient)

            clientActionDELETESvgSpinner.style.display = 'none'
            clientActionDELETESvg.style.display = 'block'
        }, 700)
    })

    // ----- TEXT FOR ELEMENT'S ----- //
    clientId.textContent = data.id.substr(0, 6)
    clientName.textContent = data.name
    clientLastName.textContent = data.lastName
    clientSurname.textContent = data.surname
    clientActionCHANGESpan.textContent = 'Change'
    clientActionDELETESpan.textContent = 'Delete'
    clientActionCHANGESvg.innerHTML = svgIcons.changeIcon
    clientActionCHANGESvgSpinner.innerHTML = svgIcons.changeSpinnerIcon
    clientActionDELETESvg.innerHTML = svgIcons.deleteIcon
    clientActionDELETESvgSpinner.innerHTML = svgIcons.deleteSpinnerIcon
    clientCreatingDate.textContent = formatDate(data.createdAt)
    clientCreatingTime.textContent = formatTime(data.createdAt)
    clientLastChangesDate.textContent = formatDate(data.updatedAt)
    clientLastChangesTime.textContent = formatTime(data.updatedAt)

    // ----- ADD ELEMENT'S ----- //
    // Add // "tr" ← "td"
    tableTbodyTr.append(
        tableTbodyTrTdId,
        tableTbodyTrTdFullName,
        tableTbodyTrTdCreatingDate,
        tableTbodyTrTdLastChanges,
        tableTbodyTrTdContacts,
        tableTbodyTrTdActions
    )
    // Add // "td" ← "span (client)"
    tableTbodyTrTdId.append(clientId)
    tableTbodyTrTdFullName.append(clientLastName, clientName, clientSurname)
    tableTbodyTrTdCreatingDate.append(clientCreatingDate, clientCreatingTime)
    tableTbodyTrTdLastChanges.append(clientLastChangesDate, clientLastChangesTime)
    tableTbodyTrTdActions.append(clientActionCHANGE, clientActionDELETE)
    // Add // "span (client)" ← "span (svg) and (text)"
    clientActionCHANGE.append(clientActionCHANGESvgSpinner, clientActionCHANGESvg, clientActionCHANGESpan)
    clientActionDELETE.append(clientActionDELETESvgSpinner, clientActionDELETESvg, clientActionDELETESpan)

    // ----- CLASS FOR ELEMENT'S ----- //
    // Class // "tr"
    tableTbodyTr.classList.add('clientstable__col-client')
    // Class // "td"
    tableTbodyTrTdId.classList.add('clientstable__row-client', 'personinfo')
    tableTbodyTrTdFullName.classList.add('clientstable__row-client', 'personinfo')
    tableTbodyTrTdCreatingDate.classList.add('clientstable__row-client', 'personinfo')
    tableTbodyTrTdLastChanges.classList.add('clientstable__row-client', 'personinfo')
    tableTbodyTrTdContacts.classList.add('clientstable__row-client', 'personinfo')
    tableTbodyTrTdActions.classList.add('clientstable__row-client', 'personinfo', 'flex')
    // Class // "span (client)"
    clientId.classList.add('personinfo__id')
    clientName.classList.add('personinfo__name')
    clientLastName.classList.add('personinfo__lastname')
    clientSurname.classList.add('personinfo__surname')
    clientCreatingDate.classList.add('personinfo__creating-date')
    clientCreatingTime.classList.add('personinfo__creating-time')
    clientLastChangesDate.classList.add('personinfo__lastchanges-date')
    clientLastChangesTime.classList.add('personinfo__lastchanges-time')
    clientActionCHANGE.classList.add('personinfo__action-change', 'change-info', 'btn')
    clientActionDELETE.classList.add('personinfo__action-delete', 'delete-info', 'btn')
    // Class // "span (svg) and (text)"
    clientActionCHANGESvgSpinner.classList.add('change-info__spinner')
    clientActionCHANGESvg.classList.add('change-info__icon')
    clientActionCHANGESpan.classList.add('change-info__text')
    clientActionDELETESvgSpinner.classList.add('delete-info__spinner')
    clientActionDELETESvg.classList.add('delete-info__icon')
    clientActionDELETESpan.classList.add('delete-info__text')

    return tableTbodyTr
}