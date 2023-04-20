// IMPORT // "function (Add client)" and "svg (Icons)"
import { createNewClient } from './addClient.js'
import { createClientForm } from './createClientsForm.js'
import { svgIcons } from './svg.js'

export const createClientsTable = () => {
    // EXTRACTION ID'S // "table (Clients)" and "button (Add client)"
    const clientsApp = document.getElementById('table-clients')
    const btnAddClient = document.getElementById('btn-addclient')

    // ----- CREATE ELEMENT'S FOR HEAD OF TABLE ----- //
    // Create // "thead" for table
    const tableThead = document.createElement('thead')
    // Create // "tr" for thead
    const tableTheadTr = document.createElement('tr')
    // Create // "th (Elements of sorting)" for tr
    const tableTheadTrThId = document.createElement('th')
    const tableTheadTrThFullName = document.createElement('th')
    const tableTheadTrThCreatingDate = document.createElement('th')
    const tableTheadTrThLastChanges = document.createElement('th')
    const tableTheadTrThContacts = document.createElement('th')
    const tableTheadTrThActions = document.createElement('th')
    // Create // "span (for sort)" for th (Elements of sorting)
    const tableTheadTrThSPANId = document.createElement('span')
    const tableTheadTrThSPANFullName = document.createElement('span')
    const tableTheadTrThSPANCreatingDate = document.createElement('span')
    const tableTheadTrThSPANLastChanges = document.createElement('span')
    const tableTheadTrThSPANContacts = document.createElement('span')
    const tableTheadTrThSPANActions = document.createElement('span')
    // Create // "span (text)" for span (for sort)
    const thSPANIdSpan = document.createElement('span')
    const thSPANFullNameSpan = document.createElement('span')
    const thSPANCreatingDateSpan = document.createElement('span')
    const thSPANLastChangesSpan = document.createElement('span')
    const thSPANContactsSpan = document.createElement('span')
    const thSPANActionsSpan = document.createElement('span')
    // Create // "span (svg)"
    const thSPANIdSVG = document.createElement('span')
    const thSPANFullNameSVG = document.createElement('span')
    const thSPANCreatingDateSVG = document.createElement('span')
    const thSPANLastChangesSVG = document.createElement('span')

    // ----- ADD ELEMENT'S ----- //
    // Add // "table" ← "thead"
    clientsApp.append(tableThead)
    // Add // "thead" ← "tr"
    tableThead.append(tableTheadTr)
    // Add // "tr" ← "th (Elements of sorting)"
    tableTheadTr.append(
        tableTheadTrThId,
        tableTheadTrThFullName,
        tableTheadTrThCreatingDate,
        tableTheadTrThLastChanges,
        tableTheadTrThContacts,
        tableTheadTrThActions
    )
    // Add // "th (Elements of sorting)" ← "span (for sort)"
    tableTheadTrThId.append(tableTheadTrThSPANId)
    tableTheadTrThFullName.append(tableTheadTrThSPANFullName)
    tableTheadTrThCreatingDate.append(tableTheadTrThSPANCreatingDate)
    tableTheadTrThLastChanges.append(tableTheadTrThSPANLastChanges)
    tableTheadTrThContacts.append(tableTheadTrThSPANContacts)
    tableTheadTrThActions.append(tableTheadTrThSPANActions)
    // Add // "span (for sort)" ← "span (text)"
    tableTheadTrThSPANId.append(thSPANIdSpan)
    tableTheadTrThSPANFullName.append(thSPANFullNameSpan)
    tableTheadTrThSPANCreatingDate.append(thSPANCreatingDateSpan)
    tableTheadTrThSPANLastChanges.append(thSPANLastChangesSpan)
    tableTheadTrThSPANContacts.append(thSPANContactsSpan)
    tableTheadTrThSPANActions.append(thSPANActionsSpan)
    // Add // "span (text)" ← "span (svg)"
    tableTheadTrThSPANId.append(thSPANIdSVG)
    tableTheadTrThSPANFullName.append(thSPANFullNameSVG)
    tableTheadTrThSPANCreatingDate.append(thSPANCreatingDateSVG)
    tableTheadTrThSPANLastChanges.append(thSPANLastChangesSVG)

    // ----- TEXT FOR ELEMENT'S ----- //
    // Text // "span (text)"
    thSPANIdSpan.textContent = 'ID '
    thSPANFullNameSpan.textContent = 'Lastname Name Surname '
    thSPANCreatingDateSpan.textContent = 'Date and time of creation '
    thSPANLastChangesSpan.textContent = 'Last changes '
    thSPANContactsSpan.textContent = 'Contacts '
    thSPANActionsSpan.textContent = 'Actions '
    // Text // "span (svg)"
    thSPANIdSVG.innerHTML = svgIcons.arrowUp
    thSPANFullNameSVG.innerHTML = svgIcons.arrowDown + ' A–Y+1'
    thSPANCreatingDateSVG.innerHTML = svgIcons.arrowDown
    thSPANLastChangesSVG.innerHTML = svgIcons.arrowDown

    // ----- CLASS FOR ELEMENT'S ----- //
    // Class // "thead"
    tableThead.classList.add('clientstable__header')
    // Class // "tr"
    tableTheadTr.classList.add('clientstable__header-col')
    // Class // "th (Elements of sorting)"
    tableTheadTrThId.classList.add('clientstable__header-row', 'header-row')
    tableTheadTrThFullName.classList.add('clientstable__header-row', 'header-row')
    tableTheadTrThCreatingDate.classList.add('clientstable__header-row', 'header-row')
    tableTheadTrThLastChanges.classList.add('clientstable__header-row', 'header-row')
    tableTheadTrThContacts.classList.add('clientstable__header-row', 'header-row')
    tableTheadTrThActions.classList.add('clientstable__header-row', 'header-row')
    // Class // "span (for sort)"
    tableTheadTrThSPANId.classList.add('header-row__subblock')
    tableTheadTrThSPANFullName.classList.add('header-row__subblock')
    tableTheadTrThSPANCreatingDate.classList.add('header-row__subblock')
    tableTheadTrThSPANLastChanges.classList.add('header-row__subblock')
    tableTheadTrThSPANContacts.classList.add('header-row__subblock')
    tableTheadTrThSPANActions.classList.add('header-row__subblock')
    // Class // "span (text)"
    thSPANIdSpan.classList.add('header-row__subblock-titlefirst')
    thSPANFullNameSpan.classList.add('header-row__subblock-title')
    thSPANCreatingDateSpan.classList.add('header-row__subblock-title')
    thSPANLastChangesSpan.classList.add('header-row__subblock-title')
    thSPANContactsSpan.classList.add('header-row__subblock-title')
    thSPANActionsSpan.classList.add('header-row__subblock-title')
    // Class // "span (svg)"
    thSPANIdSVG.classList.add('header-row__subblock-icon-first')
    thSPANFullNameSVG.classList.add('header-row__subblock-icon')
    thSPANCreatingDateSVG.classList.add('header-row__subblock-icon')
    thSPANLastChangesSVG.classList.add('header-row__subblock-icon')

    // ----- CREATE ELEMENT'S FOR BODY OF TABLE ----- //
    // Create // "tbody" for table
    const tableTbody = document.createElement('tbody')

    // Add // "table" ← "tbody"
    clientsApp.append(tableTbody)

    // Class // "tbody"
    tableTbody.classList.add('clientstable__list')

    // ----- EVENT HANDLER'S ----- //
    btnAddClient.addEventListener('click', () => {
        document.body.append(createNewClient())
    })

    return {
        clientsApp,
        tableTbody
    }
}