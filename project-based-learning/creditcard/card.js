function isCardNumberValid(number) {
    return number === '123412341234'
}

function isExpirationDateValid(month, year) {
    const expirationDate = new Date(year, month, 1)
    const currentDate = new Date()
    
    currentDate.setDate(1)
    currentDate.setHours(0, 0, 0, 0)
    
    return expirationDate > currentDate
}

function displayError(msg) {
    document.querySelector('.errorMsg').innerHTML = msg
}

function submitHandler(event) {
    event.preventDefault()
    let errorMsg = ''
    console.log(this.cardNumber.value)

    displayError('')

    if (isNaN(this.cardNumber.value)) {
        errorMsg += 'Card number is not a valid number\n'
    } else if (!isCardNumberValid(this.cardNumber.value)) {
        errorMsg += 'Card number is not a valid card number\n'
    }

    const month = parseInt(this.cardMonth.value)
    const year = parseInt(this.cardYear.value)
    
    if (isNaN(month) || month < 1 || month > 12) {
        errorMsg += 'Month must be between 01 and 12\n'
    }
    
    if (isNaN(year) || year < 2025) {
        errorMsg += 'Year must be 2025 or later\n'
    }
    
    if (!isNaN(month) && !isNaN(year) && !isExpirationDateValid(month, year)) {
        errorMsg += 'Card has expired\n'
    }

    if (errorMsg !== '') {
        displayError(errorMsg)
        return false
    }
    return true
}

document.querySelector('#credit-card').addEventListener('submit', submitHandler)