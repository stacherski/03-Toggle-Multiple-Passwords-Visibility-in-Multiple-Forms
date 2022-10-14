const togglePasswordVisibility = ELM => {
    const FIELDS_PASSWORD = ELM.closest('form').querySelectorAll('[name*="password"]:not([name*="show"])')
    ELM.checked ? FIELDS_PASSWORD.forEach(field => {field.type='text'}) : FIELDS_PASSWORD.forEach(field => {field.type='password'})
}

document.addEventListener('click', EVT => {
    EVT.target.matches('form input[type="checkbox"][id*="show-"]') ? togglePasswordVisibility(EVT.target) : ''
})