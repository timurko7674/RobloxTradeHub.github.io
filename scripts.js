document.addEventListener('DOMContentLoaded', async () => {
    // Initialize SQL.js
    const SQL = await initSqlJs({ locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.6.2/${file}` });

    // Load or create the database
    let db;
    const savedDb = localStorage.getItem('database');
    if (savedDb) {
        const uInt8Array = Uint8Array.from(atob(savedDb), c => c.charCodeAt(0));
        db = new SQL.Database(uInt8Array);
    } else {
        db = new SQL.Database();
        initializeDatabase(db);
    }

    // Initialize the database schema
    function initializeDatabase(db) {
        db.run(`
            CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT, password TEXT, rap INTEGER, level INTEGER);
            CREATE TABLE IF NOT EXISTS auctions (id INTEGER PRIMARY KEY, item TEXT, starting_bid INTEGER, current_bid INTEGER, user_id INTEGER);
        `);
    }

    // Save the database to local storage
    function saveDatabase() {
        const data = db.export();
        const buffer = new Uint8Array(data);
        localStorage.setItem('database', btoa(String.fromCharCode.apply(null, buffer)));
    }

    // Load user settings from local storage
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    const savedRAP = localStorage.getItem('rap') || '0';
    const savedLevel = localStorage.getItem('level') || '0';

    // Set profile and style based on saved settings
    const profileSection = document.getElementById('profile');
    const profileUsername = document.getElementById('profile-username');
    const profileRAP = document.getElementById('profile-rap');
    const profileLevel = document.getElementById('profile-level');

    profileRAP.innerText = savedRAP;
    profileLevel.innerText = savedLevel;

    // Apply saved theme
    document.body.classList.add(savedTheme + '-theme');

    // Handle login form submission
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Check user in the database
        const user = db.exec(`SELECT * FROM users WHERE username='${username}' AND password='${password}'`)[0];
        if (user) {
            loginForm.style.display = 'none';
            profileSection.style.display = 'block';
            profileUsername.innerText = username;
            profileRAP.innerText = user.values[0][3]; // RAP
            profileLevel.innerText = user.values[0][4]; // Level

            // Save current user settings
            localStorage.setItem('rap', user.values[0][3]);
            localStorage.setItem('level', user.values[0][4]);
        } else {
            alert('Invalid username or password');
        }
    });

    // Handle account form submission
    document.getElementById('account-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const newUsername = document.getElementById('new-username').value;
        const newPassword = document.getElementById('new-password').value;

        // Add new user to the database
        db.run(`INSERT INTO users (username, password, rap, level) VALUES ('${newUsername}', '${newPassword}', 12345, 10)`);
        saveDatabase();

        alert('Account created');
    });

    // Handle auction form submission
    document.getElementById('auction-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const item = document.getElementById('item').value;
        const startingBid = document.getElementById('starting-bid').value;

        // Add auction to the database
        db.run(`INSERT INTO auctions (item, starting_bid, current_bid, user_id) VALUES ('${item}', ${startingBid}, ${startingBid}, 1)`);
        saveDatabase();

        // Display the new auction
        const auctionList = document.getElementById('auctions-list');
        const auctionItem = document.createElement('li');
        auctionItem.innerText = `${item} - Starting Bid: ${startingBid}`;
        auctionList.appendChild(auctionItem);
    });

    // Load saved auctions
    const auctions = db.exec('SELECT * FROM auctions')[0];
    if (auctions) {
        const auctionList = document.getElementById('auctions-list');
        auctions.values.forEach(auction => {
            const auctionItem = document.createElement('li');
            auctionItem.innerText = `${auction[1]} - Starting Bid: ${auction[2]}`;
            auctionList.appendChild(auctionItem);
        });
    }

    // Theme handling code here...
});

function setTheme(theme) {
    document.body.className = theme + '-theme';
    localStorage.setItem('theme', theme);
}
