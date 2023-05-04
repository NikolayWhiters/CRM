export const validateFormOfClient = () => {
    const clientName = document.getElementById('input-name')
    const clientSurname = document.getElementById('input-surname')
    const clientLastName = document.getElementById('input-lastname')
    const errorName = document.getElementById('error-name')
    const errorSurname = document.getElementById('error-surname')
    const errorLastName = document.getElementById('error-lastname')
    const errorUncorrectText = document.getElementById('error-uncorrecttext')
    const errorRequiredValue = document.getElementById('error-requiredvalue')
    const errorRequiredContact = document.getElementById('error-requiredcontact')
    const regexp = /[^a-zA-Z]+$/g
    const arrayOfValidate = [
        errorName,
        errorSurname,
        errorLastName,
        errorUncorrectText,
        errorRequiredValue,
        errorRequiredContact
    ]

    const valueInput = input => {
        input.addEventListener('input', () => {
            input.style.borderColor = 'green'
            for (const item of arrayOfValidate) {
                item.textContent = ''
            }
        })

        input.oncut = input.oncopy = input.onpaste = () => {
            input.style.borderColor = 'green'
            for (const item of arrayOfValidate) {
                item.textContent = ''
            }
        }

        input.onchange = () => {
            input.style.borderColor = 'green'
            if (clientLastName.value && clientName.value && clientSurname.value) {
                for (const item of arrayOfValidate) {
                    item.textContent = ''
                }
            }
        }
    }

    valueInput(clientName)
    valueInput(clientSurname)
    valueInput(clientLastName)

    const checkNameReq = (input, message, name) => {
        if (!input.value) {
            input.style.borderColor = 'orange'
            message.textContent = `Enter ${name} of client!`
            return false
        } else {
            message.textContent = ''
        }

        return true
    }

    const regexpCheck = (input, regexp) => {
        if (regexp.test(input.value)) {
            input.style.borderColor = 'orange'
            unacceptableLetter.textContent = 'Unacceptable symbols!'
            return false
        }

        return true
    }

    if (!checkNameReq(clientName, errorName, 'Name')) { return false }
    if (!checkNameReq(clientSurname, errorSurname, 'Surname')) { return false }
    if (!checkNameReq(clientLastName, errorLastName, 'Lastname')) { return false }
    if (!regexpCheck(clientName, regexp)) { return false }
    if (!regexpCheck(clientSurname, regexp)) { return false }
    if (!regexpCheck(clientLastName, regexp)) { return false }

    return true
}