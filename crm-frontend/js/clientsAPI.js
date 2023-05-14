export const getClients = async () => {
    const response = await fetch('http://localhost:3000/api/clients', {
        method: 'GET'
    })

    const result = await response.json()

    return result
}

export const createClient = async (client, method, id = null) => {
    const response = await fetch(`http://localhost:3000/api/clients/${method === 'POST' ? '' : id}`, {
        method,
        body: JSON.stringify(client)
    })
    const result = await response.json()
    location.reload()

    return result
}

export const deleteClient = async (id) => {
    const response = await fetch(`http://localhost:3000/api/clients/${id}`, {
        method: 'DELETE',
    })
    location.reload()
}

export const findClient = async (value) => {
    const response = await fetch(`http://localhost:3000/api/clients?search=${value}`, {
        method: 'GET'
    })

    const result = await response.json()

    return result
}