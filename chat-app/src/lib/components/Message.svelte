<script>
    export let msg, username;
</script>

<div class="container">
    <p class="username">{username}</p>
    <p class="msg">{msg}</p>
</div>

<style>
    p{
        margin: 0;
    }
    .container{
        width: 70%;
        display: flex;
        flex-direction: column;
        border: 1px solid black;
        padding: 0.5rem 1rem;
        border-radius: 25px;
        gap: 0.2rem;
    }
    .username{
        font-weight: bold;
        color: purple;
        font-size: 175%;
    }
    .msg{
        font-size: 125%;
    }
</style>