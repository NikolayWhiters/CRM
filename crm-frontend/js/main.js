import { createClientsTable } from './createClientsTable.js'
import { createClientTR } from './createClientsTR.js'
import { getClients } from './clientsAPI.js'

// Declare // "function (Table clients)"
const table = async () => {
    const clients = await getClients()
    const clientsTable = createClientsTable()

    for (const client of clients) {
        clientsTable.tableTbody.append(createClientTR(client))
    }
}

table()