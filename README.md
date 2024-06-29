<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Roblox Trade Hub</title>
    <link rel="stylesheet" href="styles.css">
    <script src="scripts.js" defer></script>
</head>
<body class="light-theme">
    <header>
        <h1>Roblox Trade Hub</h1>
    </header>
    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="auction.html">Auctions</a></li>
            <li><a href="settings.html">Settings</a></li>
        </ul>
    </nav>
    <main>
        <section id="login">
            <h2>Login</h2>
            <form id="login-form">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>
                <button type="submit">Login</button>
            </form>
        </section>
        <section id="profile" style="display: none;">
            <h2>Profile</h2>
            <p>Username: <span id="profile-username"></span></p>
            <p>RAP: <span id="profile-rap"></span></p>
            <p>Level: <span id="profile-level"></span></p>
        </section>
        <section id="auctions">
            <h2>Create Auction</h2>
            <form id="auction-form">
                <label for="item">Item:</label>
                <input type="text" id="item" name="item" required>
                <label for="starting-bid">Starting Bid:</label>
                <input type="number" id="starting-bid" name="starting-bid" required>
                <button type="submit">Create Auction</button>
            </form>
            <h2>Auctions</h2>
            <ul id="auctions-list"></ul>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 Roblox Trade Hub. All rights reserved.</p>
    </footer>
</body>
</html>
