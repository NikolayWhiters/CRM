export const validateContactOfClient = (contactType, contactInput) => {
    const errorValue = document.getElementById('error-name')
    const telNumbers = /[^0-9]+$/g
    const emailSymbols = /[^a-zA-Z@]+$/g

    const valueInput = input => {
        input.addEventListener('input', () => {
            errorValue.textContent = ''
        })

        input.oncut = input.oncopy = input.onpaste = () => {
            errorValue.textContent = ''
        }
    }

    const errorMessage = (message, block) => {
        block.textContent = message
    }

    valueInput(contactInput)

    if (!contactInput.value) {
        errorMessage('Fill in all contact fields!', errorValue, contactInput)
        return false
    }

    switch (contactType.textContent) {
        case 'Phone':
            if (telNumbers.test(contactInput.value)) {
                errorMessage('Only numbers!', errorValue, contactInput)
                return false
            } else if (contactInput.value.length !== 11) {
                errorMessage('The number must be 11 digits long!', errorValue, contactInput)
                return false
            }

            return true
        case 'Email':
            if (emailSymbols.test(contactInput.value)) {
                errorMessage('Invalid email!', errorValue, contactInput)
                return false
            }
            return true
        default:
            return true
    }
}