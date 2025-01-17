
<form method="post">
    <h1>Welcome to the chat app</h1>
    <input type="text" name="username" required placeholder="Username" />
    <button type="submit">Go</button>
</form>

<style>
    form {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;
        gap: 10px;
        flex-direction: column;
    }
    form input[type="text"] {
        padding: 20px 10px;
        width: 25%;
        font-size: 122%;
        border-radius: 10px;
        border: 0.5px solid gray;
    }
    form button {
        border: 0.5px solid gray;
        border-radius: 10px;
        padding: 10px 20px;
        cursor: pointer;
    }
</style>