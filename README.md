<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Roblox Trading Site</title>
    <link rel="stylesheet" href="styles.css">
    <script src="scripts.js" defer></script>
</head>
<body class="light-theme">
    <header>
        <h1>Roblox Trading Site</h1>
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
            <h2>Login to Your Roblox Account</h2>
            <form id="login-form">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>
                <button type="submit">Login</button>
            </form>
        </section>
        <section id="profile" style="display:none;">
            <h2>Your Profile</h2>
            <p>Username: <span id="profile-username"></span></p>
            <p>RAP: <span id="profile-rap"></span></p>
            <p>Level: <span id="profile-level"></span></p>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 Roblox Trading Site. All rights reserved.</p>
    </footer>
</body>
</html>
