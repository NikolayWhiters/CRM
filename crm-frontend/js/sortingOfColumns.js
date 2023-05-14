export const sortTable = () => {
    const table = document.querySelector('table')
    const headers = document.querySelectorAll('.sorting')
    const tbody = table.querySelector('tbody')
    const directions = Array.from(headers).map(() => '')

    const transform = (type, content) => {
        if (type === 'id') {
            return parseFloat(content)
        }
        if (type === 'create' || type === 'update') {
            return content.split('.').reverse().join('-')
        }
        return content
    }

    const sortColumn = (index) => {
        const type = headers[index].dataset.type
        const rows = Array.from(tbody.querySelectorAll('tr'))
        const direction = directions[index] || 'sortUp'
        const multiply = direction === 'sortUp' ? 1 : -1
        rows.sort((row1, row2) => {
            const cellA = row1.querySelectorAll('td')[index].textContent
            const cellB = row2.querySelectorAll('td')[index].textContent
            const a = transform(type, cellA)
            const b = transform(type, cellB)
            if (a > b) {
                return multiply
            }
            if (a < b) {
                return -multiply
            }
            return 0
        })

        rows.forEach((row) => {
            tbody.appendChild(row)
        })

        directions[index] = direction === 'sortUp' ? 'sortDown' : 'sortUp'
    }

    headers.forEach((header, index) => {
        header.addEventListener('click', () => {
            sortColumn(index)
        })
    })
}