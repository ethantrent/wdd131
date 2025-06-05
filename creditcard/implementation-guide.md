
## Step 3: JavaScript Implementation
Create a `card.js` file with the following structure:

```javascript
// Form validation functions
function isCardNumberValid(number) {
    // For demo purposes, we'll only accept one specific number
    return number === '1234123412341234';
}

function displayError(msg) {
    const errorElement = document.querySelector('.errorMsg');
    if (!errorElement) {
        const errorDiv = document.createElement('p');
        errorDiv.className = 'errorMsg';
        document.querySelector('form').appendChild(errorDiv);
    }
    document.querySelector('.errorMsg').innerHTML = msg;
}

function validateExpirationDate(month, year) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // JavaScript months are 0-based
    
    const inputYear = parseInt(year);
    const inputMonth = parseInt(month);
    
    if (inputYear < currentYear) return false;
    if (inputYear === currentYear && inputMonth < currentMonth) return false;
    return true;
}

function submitHandler(event) {
    event.preventDefault();
    let errorMsg = '';
    
    // Clear previous errors
    displayError('');
    
    // Validate card number
    const cardNumber = this.cardNumber.value.replace(/\s/g, '');
    if (isNaN(cardNumber)) {
        errorMsg += 'Card number must contain only digits\n';
    } else if (!isCardNumberValid(cardNumber)) {
        errorMsg += 'Invalid card number\n';
    }
    
    // Validate expiration date
    const month = this.cardMonth.value;
    const year = this.cardYear.value;
    if (!validateExpirationDate(month, year)) {
        errorMsg += 'Card has expired\n';
    }
    
    // Validate CVC
    const cvc = this.cvc.value;
    if (isNaN(cvc) || cvc.length !== 3) {
        errorMsg += 'CVC must be 3 digits\n';
    }
    
    if (errorMsg !== '') {
        displayError(errorMsg);
        return false;
    }
    
    // If all validations pass
    alert('Form submitted successfully!');
    return true;
}

// Add event listener to form
document.querySelector('form').addEventListener('submit', submitHandler);
```

## Step 4: Testing Your Implementation
1. Test the form with the following scenarios:
   - Valid card number: 1234123412341234
   - Invalid card number: any other number
   - Expired date: any date in the past
   - Invalid CVC: any non-3-digit number
   - Empty fields

2. Verify that:
   - Error messages appear appropriately
   - The form prevents submission with invalid data
   - The form submits successfully with valid data
   - The styling matches the design requirements

## Step 5: Additional Features (Optional)
Consider adding these enhancements:
1. Real-time validation as users type
2. Card type detection (Visa, Mastercard, etc.)
3. Card number formatting (adding spaces automatically)
4. Animated card flip effect
5. Custom styling for different card types

## Notes
- The current implementation uses a hardcoded valid card number for demonstration
- In a real application, you would integrate with a payment processing service
- Consider adding more robust validation for card numbers using the Luhn algorithm
- Remember to handle edge cases and provide clear user feedback

## Resources
- [MDN Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
- [Credit Card Validation](https://en.wikipedia.org/wiki/Luhn_algorithm)
- [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) 