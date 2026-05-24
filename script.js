// Age Gate with Consent Checkbox
function checkConsent() {
    const checkbox = document.getElementById('consentCheck');
    const enterBtn = document.getElementById('enterBtn');
    
    enterBtn.disabled = !checkbox.checked;
}

// Enter site
function enterSite() {
    if (document.getElementById('consentCheck').checked) {
        localStorage.setItem('ageVerified', 'true');
        document.getElementById('ageGate').style.display = 'none';
    }
}

function leaveSite() {
    window.location.href = "https://www.google.com";
}

// Initialize on load
window.onload = function() {
    const gate = document.getElementById('ageGate');
    if (localStorage.getItem('ageVerified') === 'true') {
        if (gate) gate.style.display = 'none';
    } else {
        // Add event listener to checkbox
        const checkbox = document.getElementById('consentCheck');
        if (checkbox) {
            checkbox.addEventListener('change', checkConsent);
        }
    }
};
