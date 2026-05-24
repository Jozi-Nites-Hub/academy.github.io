// Age Gate with Two Checkboxes
function checkConsent() {
    const ageChecked = document.getElementById('ageCheck').checked;
    const contentChecked = document.getElementById('contentCheck').checked;
    const enterBtn = document.getElementById('enterBtn');
    
    enterBtn.disabled = !(ageChecked && contentChecked);
}

// Enter Site
function enterSite() {
    if (!document.getElementById('enterBtn').disabled) {
        localStorage.setItem('ageVerified', 'true');
        document.getElementById('ageGate').style.display = 'none';
    }
}

function leaveSite() {
    window.location.href = "https://www.google.com";
}

// Cookie Banner
function showCookieBanner() {
    if (localStorage.getItem('cookiesAccepted') === 'true') return;
    
    const banner = document.createElement('div');
    banner.id = 'cookieBanner';
    banner.style.cssText = 'position:fixed; bottom:0; left:0; width:100%; background:#1a0033; border-top:3px solid #FFD700; padding:15px; text-align:center; z-index:9999;';
    banner.innerHTML = `
        <p>We use cookies to improve your experience on Jozi Nites Academy. 
        <button onclick="acceptCookies()" style="background:#FFD700; color:black; border:none; padding:8px 16px; margin-left:10px;">Accept Cookies</button></p>
    `;
    document.body.appendChild(banner);
}

function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.getElementById('cookieBanner').remove();
}

// Initialize
window.onload = function() {
    const gate = document.getElementById('ageGate');
    if (localStorage.getItem('ageVerified') === 'true') {
        if (gate) gate.style.display = 'none';
    } else {
        const ageCheck = document.getElementById('ageCheck');
        const contentCheck = document.getElementById('contentCheck');
        if (ageCheck && contentCheck) {
            ageCheck.addEventListener('change', checkConsent);
            contentCheck.addEventListener('change', checkConsent);
        }
    }
    
    // Show cookie banner after age gate
    setTimeout(showCookieBanner, 1500);
};
