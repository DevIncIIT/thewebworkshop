<script>
    import { page } from "$app/state";
    import Message from "$lib/components/Message.svelte";
    let username = page.url.pathname.slice(1);
</script>


<div class="chat">
    <div class="msg">
        <Message msg="Hello" username = {username} />
        <Message msg="Hello" username = {"self"} />
        <Message msg="Hello" username = {username} />
    </div>
    <form class="send_msg">
        <input type="text" placeholder="Type your message..." />
        <button type="submit">Send</button>
    </form>
</div>

<style>
    *{
        box-sizing: border-box;
    }
    .msg{
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }
    .chat {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        width: 75%;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        border-inline: 2px solid black;
        padding: 1rem;
        height: 100vh;
    }
    .send_msg {
        display: flex;
        align-self: flex-end;
        justify-self: flex-end;
        bottom: 10px;
        width: 100%;
        border: 2px solid #ccc;
        border-radius: 25px;
        padding: 10px 10px 10px 10px;
    }
    .send_msg input {
        width: 100%;
        outline: none;
        font-size: 16px;
        border: none;
    }

    .send_msg button {
        padding: 8px 15px;
        border: none;
        background-color: #4caf50;
        color: white;
        border-radius: 20px;
        cursor: pointer;
        font-size: 14px;
    }

    .send_msg button:hover {
        background-color: #45a049;
    }
</style>
