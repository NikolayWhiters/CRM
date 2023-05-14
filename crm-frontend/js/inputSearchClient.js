import { findClient } from './clientsAPI.js'
import { createClientTR } from './createClientsTR.js'

export const searchClient = (clients) => {
    const inputSearch = document.querySelector('.form-search__input')
    const clientsList = document.querySelector('.form-search__list')

    clients.forEach(client => {
        const clientsItem = document.createElement('li')
        const clientsLink = document.createElement('a')

        clientsItem.classList.add('form-search__item')
        clientsLink.classList.add('form-search__link')

        clientsLink.textContent = `${client.lastName} ${client.name} ${client.surname}`
        clientsLink.href = '#'

        clientsItem.append(clientsLink)
        clientsList.append(clientsItem)
    })

    const tableRefresh = async (str) => {
        const response = await findClient(str)
        const tbody = document.querySelector('.clientstable__list')
        tbody.innerHTML = ''

        for (const client of response) {
            tbody.append(createClientTR(client))
        }
    }

    inputSearch.addEventListener('input', async () => {
        const value = inputSearch.value.trim()
        const foundClientsItems = document.querySelectorAll('.form-search__link')

        if (value !== '') {
            tableRefresh(value)

            foundClientsItems.forEach(link => {
                if (link.innerText.search(value) == -1) {
                    link.classList.add('list-hidden')
                    link.innerHTML = link.innerText
                } else {
                    link.classList.remove('list-hidden')
                    clientsList.classList.remove('list-hidden')
                }
            })
        } else {
            foundClientsItems.forEach(link => {
                const tbody = document.querySelector('.clientstable__list')
                tbody.innerHTML = ''

                clients.forEach(client => tbody.append(createClientTR(client)))

                link.classList.remove('list-hidden')
                clientsList.classList.add('list-hidden')
                link.innerHTML = link.innerText
            })
        }
    })
}