import { createClientsTable } from './createClientsTable.js'
import { getClients } from './clientsAPI.js'

// Declare // "function (Table clients)"
const clientsTable = async () => {
    const aaa = createClientsTable()
    await getClients()
}
clientsTable()