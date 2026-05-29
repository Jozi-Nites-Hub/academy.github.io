// ==================== AGE GATE + CONSENT HANDLING ====================
function setupAgeGate() {
    const gate = document.getElementById('ageGate');
    if (!gate) return;

    // Check if already verified
    if (localStorage.getItem('ageVerified') === 'true') {
        gate.style.display = 'none';
        return;
    }

    const ageCheck = document.getElementById('ageCheck');
    const contentCheck = document.getElementById('contentCheck');
    const enterBtn = document.getElementById('enterBtn');

    function validateConsent() {
        enterBtn.disabled = !(ageCheck.checked && contentCheck.checked);
    }

    ageCheck.addEventListener('change', validateConsent);
    contentCheck.addEventListener('change', validateConsent);

    window.enterSite = function() {
        if (!enterBtn.disabled) {
            localStorage.setItem('ageVerified', 'true');
            gate.style.display = 'none';
        }
    };

    window.leaveSite = function() {
        window.location.href = "https://www.google.com";
    };
}

// Cookie Banner
function setupCookieBanner() {
    if (localStorage.getItem('cookiesAccepted') === 'true') return;

    setTimeout(() => {
        const banner = document.createElement('div');
        banner.id = 'cookieBanner';
        banner.style.cssText = 'position:fixed; bottom:0; left:0; width:100%; background:#1a0033; border-top:4px solid #FFD700; padding:15px; text-align:center; z-index:9999; color:white;';
        banner.innerHTML = `
            We use cookies to enhance your experience on Jozi Nites Academy. 
            <button onclick="acceptCookies()" style="background:#FFD700; color:black; border:none; padding:8px 18px; margin-left:12px; border-radius:6px;">Accept</button>
        `;
        document.body.appendChild(banner);
    }, 2000);
}

function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    const banner = document.getElementById('cookieBanner');
    if (banner) banner.remove();
}

// Initialize everything
window.onload = function() {
    setupAgeGate();
    setupCookieBanner();
};
