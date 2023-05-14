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
    //                          ↓
    // Create // "tr" for thead
    const tableTheadTr = document.createElement('tr')
    //                          ↓
    // Create // "th (Elements of sorting)" for tr
    const tableTheadTrThId = document.createElement('th')
    const tableTheadTrThFullName = document.createElement('th')
    const tableTheadTrThCreatingDate = document.createElement('th')
    const tableTheadTrThLastChanges = document.createElement('th')
    const tableTheadTrThContacts = document.createElement('th')
    const tableTheadTrThActions = document.createElement('th')
    //                          ↓
    // Create // "span (for sort)" for th (Elements of sorting)
    const tableTheadTrThSPANId = document.createElement('span')
    const tableTheadTrThSPANFullName = document.createElement('span')
    const tableTheadTrThSPANCreatingDate = document.createElement('span')
    const tableTheadTrThSPANLastChanges = document.createElement('span')
    const tableTheadTrThSPANContacts = document.createElement('span')
    const tableTheadTrThSPANActions = document.createElement('span')
    //                          ↓
    // Create // "span (text)" for span (for sort)
    const thSPANIdSpan = document.createElement('span')
    const thSPANFullNameSpan = document.createElement('span')
    const thSPANCreatingDateSpan = document.createElement('span')
    const thSPANLastChangesSpan = document.createElement('span')
    const thSPANContactsSpan = document.createElement('span')
    const thSPANActionsSpan = document.createElement('span')
    //                          ↓
    // Create // "span (svg)"
    const thSPANIdSVGDown = document.createElement('span')
    const thSPANIdSVGUp = document.createElement('span')
    const thSPANFullNameSVGDown = document.createElement('span')
    const thSPANFullNameSVGUp = document.createElement('span')
    const thSPANCreatingDateSVGDown = document.createElement('span')
    const thSPANCreatingDateSVGUp = document.createElement('span')
    const thSPANLastChangesSVGDown = document.createElement('span')
    const thSPANLastChangesSVGUp = document.createElement('span')

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
    tableTheadTrThSPANId.append(thSPANIdSVGDown, thSPANIdSVGUp)
    tableTheadTrThSPANFullName.append(thSPANFullNameSVGDown, thSPANFullNameSVGUp)
    tableTheadTrThSPANCreatingDate.append(thSPANCreatingDateSVGDown, thSPANCreatingDateSVGUp)
    tableTheadTrThSPANLastChanges.append(thSPANLastChangesSVGDown, thSPANLastChangesSVGUp)

    // ----- TEXT FOR ELEMENT'S ----- //
    // Text // "span (text)"
    thSPANIdSpan.textContent = 'ID '
    const mediaQueryFullName = window.matchMedia('(max-width: 767px)')
    function handleWidthChangeOne (event) {
        if (event.matches) {
            thSPANFullNameSpan.innerHTML = `Lastname Name<br>Surname `
        } else {
            thSPANFullNameSpan.textContent = 'Lastname Name Surname '
        }
    }
    handleWidthChangeOne(mediaQueryFullName)
    mediaQueryFullName.addEventListener('change', handleWidthChangeOne)
    //
    // WIDTH FOR 320-1023px //
    const mediaQueryDateAndTime = window.matchMedia('(max-width: 1023px)')
    function handleWidthChangeTwo (event) {
        if (event.matches) {
            thSPANCreatingDateSpan.innerHTML = `Date and time<br>of creation `
        } else {
            thSPANCreatingDateSpan.textContent = 'Date and time of creation '
        }
    }
    handleWidthChangeTwo(mediaQueryDateAndTime)
    mediaQueryDateAndTime.addEventListener('change', handleWidthChangeTwo)
    //
    thSPANLastChangesSpan.textContent = 'Last changes '
    thSPANContactsSpan.textContent = 'Contacts '
    thSPANActionsSpan.textContent = 'Actions '
    // Text // "span (svg)"
    thSPANIdSVGDown.innerHTML = svgIcons.arrowDown
    thSPANIdSVGUp.innerHTML = svgIcons.arrowUp
    thSPANFullNameSVGDown.innerHTML = svgIcons.arrowDown + ' A–Y+1'
    thSPANFullNameSVGUp.innerHTML = svgIcons.arrowUp + ' A–Y+1'
    thSPANCreatingDateSVGDown.innerHTML = svgIcons.arrowDown
    thSPANCreatingDateSVGUp.innerHTML = svgIcons.arrowUp
    thSPANLastChangesSVGDown.innerHTML = svgIcons.arrowDown
    thSPANLastChangesSVGUp.innerHTML = svgIcons.arrowUp

    // Dircetion of arrow's //
    tableTheadTrThId.addEventListener('click', () => {
        if (thSPANIdSVGDown.style.display !== 'none') {
            thSPANIdSVGDown.style.display = 'none'
            thSPANIdSVGUp.style.display = 'inline-block'
        } else {
            thSPANIdSVGDown.style.display = 'inline-block'
            thSPANIdSVGUp.style.display = 'none'
        }
    })

    tableTheadTrThFullName.addEventListener('click', () => {
        if (thSPANFullNameSVGDown.style.display !== 'none') {
            thSPANFullNameSVGDown.style.display = 'none'
            thSPANFullNameSVGUp.style.display = 'inline-block'
        } else {
            thSPANFullNameSVGDown.style.display = 'inline-block'
            thSPANFullNameSVGUp.style.display = 'none'
        }
    })

    tableTheadTrThCreatingDate.addEventListener('click', () => {
        if (thSPANCreatingDateSVGDown.style.display !== 'none') {
            thSPANCreatingDateSVGDown.style.display = 'none'
            thSPANCreatingDateSVGUp.style.display = 'inline-block'
        } else {
            thSPANCreatingDateSVGDown.style.display = 'inline-block'
            thSPANCreatingDateSVGUp.style.display = 'none'
        }
    })

    tableTheadTrThLastChanges.addEventListener('click', () => {
        if (thSPANLastChangesSVGDown.style.display !== 'none') {
            thSPANLastChangesSVGDown.style.display = 'none'
            thSPANLastChangesSVGUp.style.display = 'inline-block'
        } else {
            thSPANLastChangesSVGDown.style.display = 'inline-block'
            thSPANLastChangesSVGUp.style.display = 'none'
        }
    })

    // ----- ATTRIBUTE'S FOR ELEMENT'S ----- //
    tableTheadTrThId.setAttribute('data-type', 'id')
    tableTheadTrThFullName.setAttribute('data-type', 'text')
    tableTheadTrThCreatingDate.setAttribute('data-type', 'create')
    tableTheadTrThLastChanges.setAttribute('data-type', 'update')

    // ----- CLASS FOR ELEMENT'S ----- //
    // Class // "thead"
    tableThead.classList.add('clientstable__header')
    // Class // "tr"
    tableTheadTr.classList.add('clientstable__header-col')
    // Class // "th (Elements of sorting)"
    tableTheadTrThId.classList.add('clientstable__header-row', 'header-row', 'sorting')
    tableTheadTrThFullName.classList.add('clientstable__header-row', 'header-row', 'sorting')
    tableTheadTrThCreatingDate.classList.add('clientstable__header-row', 'header-row', 'sorting')
    tableTheadTrThLastChanges.classList.add('clientstable__header-row', 'header-row', 'sorting')
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
    thSPANIdSVGDown.classList.add('header-row__subblock-icon-down-first')
    thSPANIdSVGUp.classList.add('header-row__subblock-icon-up-first')
    thSPANFullNameSVGDown.classList.add('header-row__subblock-icon-down')
    thSPANFullNameSVGUp.classList.add('header-row__subblock-icon-up')
    thSPANCreatingDateSVGDown.classList.add('header-row__subblock-icon-down')
    thSPANCreatingDateSVGUp.classList.add('header-row__subblock-icon-up')
    thSPANLastChangesSVGDown.classList.add('header-row__subblock-icon-down')
    thSPANLastChangesSVGUp.classList.add('header-row__subblock-icon-up')

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