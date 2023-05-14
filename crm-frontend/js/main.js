// IMPORT // "table (thead & tbody)", "tr (client)", "API data"
import { createClientsTable } from './createClientsTable.js'
import { createClientTR } from './createClientsTR.js'
import { getClients } from './clientsAPI.js'
import { newPreloader } from './preloader.js'
import { sortTable } from './sortingOfColumns.js'
import { searchClient } from './inputSearchClient.js'

// Declare // "function (Table clients)"
const table = async () => {
    const clientsTable = createClientsTable()
    const clients = await getClients()
    searchClient(clients)

    for (const client of clients) {
        clientsTable.tableTbody.append(createClientTR(client))
    }
}

document.getElementById('clients').append(newPreloader())

window.onload = () => {
    let spinn = document.querySelector('.clients__preloader')
    spinn.classList.add('preloader-hidden')
}

table()
document.addEventListener('DOMContentLoaded', sortTable)