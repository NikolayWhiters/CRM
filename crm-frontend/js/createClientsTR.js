import { svgIcons } from './svg.js'
import { formatDate, formatTime } from './date&timeInfo.js'
import { createContactItem } from './clientsAPI.js'

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
    const clientContactsSpan = document.createElement('span')
    const clientActionCHANGE = document.createElement('button')
    const clientActionDELETE = document.createElement('button')
    //                          ↓
    // Create // "span (svg) and (text)" for span (client)
    const clientActionCHANGESvg = document.createElement('span')
    const clientActionCHANGESpan = document.createElement('span')
    const clientActionDELETESvg = document.createElement('span')
    const clientActionDELETESpan = document.createElement('span')
    
    for (const contact of data.contacts) {
        createContactItem(contact.type, contact.value, clientContactsSpan)
    }

    // ----- TEXT FOR ELEMENT'S ----- //
    clientId.textContent = data.id.substr(0, 6)
    clientName.textContent = data.name
    clientLastName.textContent = data.lastName
    clientSurname.textContent = data.surname
    clientActionCHANGESpan.textContent = 'Change'
    clientActionDELETESpan.textContent = 'Delete'
    clientActionCHANGESvg.innerHTML = svgIcons.changeIcon
    clientActionDELETESvg.innerHTML = svgIcons.deleteIcon
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
    tableTbodyTrTdContacts.append(clientContactsSpan)
    tableTbodyTrTdActions.append(clientActionCHANGE, clientActionDELETE)
    // Add // "span (client)" ← "span (svg) and (text)"
    clientActionCHANGE.append(clientActionCHANGESvg, clientActionCHANGESpan)
    clientActionDELETE.append(clientActionDELETESvg, clientActionDELETESpan)

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
    clientContactsSpan.classList.add('personinfo__contacts')
    clientActionCHANGE.classList.add('personinfo__action-change', 'change-info', 'btn')
    clientActionDELETE.classList.add('personinfo__action-delete', 'delete-info', 'btn')
    // Class // "span (svg) and (text)"
    clientActionCHANGESvg.classList.add('change-info__icon')
    clientActionCHANGESpan.classList.add('change-info__text')
    clientActionDELETESvg.classList.add('delete-info__icon')
    clientActionDELETESpan.classList.add('delete-info__text')

    return tableTbodyTr
}