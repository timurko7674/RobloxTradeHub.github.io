document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const profileSection = document.getElementById('profile');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simulated login, replace with real authentication
        if (username && password) {
            loginForm.style.display = 'none';
            profileSection.style.display = 'block';
            document.getElementById('profile-username').innerText = username;
            document.getElementById('profile-rap').innerText = '12345'; // Simulated RAP
            document.getElementById('profile-level').innerText = '10';  // Simulated level
        }
    });

    document.getElementById('auction-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const item = document.getElementById('item').value;
        const startingBid = document.getElementById('starting-bid').value;

        // Simulated auction creation, replace with real auction logic
        const auctionList = document.getElementById('auctions');
        const auctionItem = document.createElement('li');
        auctionItem.innerText = `${item} - Starting Bid: ${startingBid}`;
        auctionList.appendChild(auctionItem);
    });

    document.getElementById('account-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const newUsername = document.getElementById('new-username').value;
        const newPassword = document.getElementById('new-password').value;

        // Simulated account change, replace with real account change logic
        alert(`Account changed to: ${newUsername}`);
    });
});

function setTheme(theme) {
    document.body.className = theme + '-theme';
    if (theme === 'custom') {
        document.getElementById('custom-theme-settings').style.display = 'block';
    } else {
        document.getElementById('custom-theme-settings').style.display = 'none';
    }
}

function applyCustomTheme() {
    const backgroundColor = document.getElementById('background-color').value;
    const textColor = document.getElementById('text-color').value;

    document.documentElement.style.setProperty('--custom-background-color', backgroundColor);
    document.documentElement.style.setProperty('--custom-text-color', textColor);
}
