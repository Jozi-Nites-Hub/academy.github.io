// Register
document.getElementById('registerForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            alert("Welcome to the Academy, Family! Redirecting to portal...");
            window.location.href = "portal.html";
        })
        .catch(error => alert(error.message));
});

// Login
document.getElementById('loginForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    auth.signInWithEmailAndPassword(email, password)
        .then(() => window.location.href = "portal.html")
        .catch(error => alert(error.message));
});

function logout() {
    auth.signOut().then(() => window.location.href = "login.html");
}

// Protect portal
auth.onAuthStateChanged(user => {
    if (!user && window.location.pathname.includes("portal.html")) {
        window.location.href = "login.html";
    }
});
