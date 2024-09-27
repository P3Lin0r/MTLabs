document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const errorMessage = document.getElementById('error-message');
    let creditCardAttempts = 0;
    form.addEventListener('submit',(event)=>{
        event.preventDefault();
        errorMessage.textContent = '';

        const name = document.getElementById('name').value;
        const surname = document.getElementById('surname').value;
        const orgname = document.getElementById('orgname').value;
        const cardnum = document.getElementById('cardnum').value;
        const phonnum = document.getElementById('phonnum').value;
        const email = document.getElementById('email').value;

        const nameRegex = /^[a-zA-Zа-яА-ЯёЁїЇєЄ'-]+$/;
        const orgRegex = /^[a-zA-Zа-яА-ЯёЁїЇєЄ0-9\s.,-]+$/;
        const phoneRegex = /^\+\d{1,3}\s?\d{10}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const cardRegex = /^\d{13,16}$/

        if (!nameRegex.test(name)) {
            errorMessage.textContent = 'Invalid name';
            return;
        }
        if (!nameRegex.test(surname)) {
            errorMessage.textContent = 'Invalid surname';
            return;
        }
        if (!orgRegex.test(orgname)) {
            errorMessage.textContent = 'Invalid Organization name';
            return;
        }
        if (!phoneRegex.test(phonnum)) {
            errorMessage.textContent = 'Invalid phone number';
            return;
        }
        if (!emailRegex.test(email)) {
            errorMessage.textContent = 'Invalid email';
            return;
        }
        if (!cardRegex.test(cardnum)) {
            creditCardAttempts++;
            if (creditCardAttempts >= 3) {
                errorMessage.textContent = 'Too many incorrect attempts for credit card';
                document.getElementById('cardnum').disabled = true; // Block further input
            } else {
                errorMessage.textContent = `Invalid credit card number, attempt ${creditCardAttempts}`;
            }
            return;
        }

        errorMessage.textContent = 'Registration successful';
    });

    const expRegex = /a[3-7]a/g;
    const expinput = document.getElementById('expinput');
    const expRes = document.getElementById('expres');
    expinput.addEventListener('input', () => {
        const matches = expinput.value.match(expRegex);
        if (matches) {
            const lines = expinput.value.split(/[\n.?!]/);
            const matchedLines = lines.filter(line => /a[3-7]a/.test(line));
            expRes.value = matchedLines.length > 0 ? matchedLines.join('\n') : 'No matches found';
        } else {
            expRes.value = 'No matches found';
        }
    });
});