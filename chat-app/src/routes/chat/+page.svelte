<script lang="ts">
    import Message from "$lib/components/Message.svelte";
    import { onMount } from "svelte";
    export let data;
    let messages: { content: string; username: string }[] = [];
    async function fetchMessages() {
        const response = await fetch("/api/messages");
        messages = await response.json();
    }
    async function sendMessage(event: SubmitEvent) {
        const formData = new FormData(event.target as HTMLFormElement);
        const message = formData.get("message");
        await fetch("/api/send", {
            method: "POST",
            body: JSON.stringify({ content: message, username: data.username })
        });
        (event.target as HTMLFormElement).reset();
    }
    onMount(() => {
        setInterval(fetchMessages, 1000);
        document.body.style.backgroundColor = '#0a0b0c';
        document.body.style.margin = '0';
    });
</script>

<div class="chat">
    <div class="messages-container">
        <div class="msg">
            {#each messages as message}
                <Message
                    msg={message.content}
                    username={data.username == message.username
                        ? "self"
                        : message.username}
                />
            {/each}
        </div>
    </div>
    <form class="send_msg" on:submit|preventDefault={sendMessage}>
        <input type="text" name="message" placeholder="Type your message..." />
        <button type="submit">Send</button>
    </form>
</div>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        background-color: #0a0b0c;
        min-height: 100vh;
    }

    * {
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, 
            Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    }

    .messages-container {
        flex-grow: 1;
        overflow-y: auto;
        margin-bottom: 0.5rem;
        max-height: calc(100vh - 100px);
        -ms-overflow-style: none;
        scrollbar-width: none;
        padding: 0.5rem;
        background-color: #1a1b1e;
        border-radius: 12px;
    }

    .messages-container::-webkit-scrollbar {
        display: none;
    }

    .msg {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 1.5rem;
    }

    .chat {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        width: 90%;
        max-width: 1200px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        border: none;
        border-radius: 16px;
        padding: 1rem;
        height: 100vh;
        /* background-color: #141517; */
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.2);
        color: #e9ecef;
    }

    .send_msg {
        display: flex;
        gap: 0.8rem;
        align-self: flex-end;
        justify-self: flex-end;
        width: 100%;
        border: 2px solid #2c2e33;
        background-color: #1a1b1e;
        border-radius: 12px;
        padding: 0.6rem 0.8rem;
        transition: border-color 0.2s ease;
    }

    .send_msg:focus-within {
        border-color: #4361ee;
    }

    .send_msg input {
        width: 100%;
        outline: none;
        font-size: 16px;
        border: none;
        padding: 0.2rem;
        background-color: transparent;
        color: #e9ecef;
    }
    
    .send_msg input::placeholder {
        color: #6c757d;
    }

    .send_msg button {
        padding: 0.6rem 1.2rem;
        border: none;
        background-color: #4361ee;
        color: white;
        border-radius: 8px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
        transition: background-color 0.2s ease;
    }

    .send_msg button:hover {
        background-color: #3b4fd8;
    }

    @media (max-width: 768px) {
        .chat {
            width: 100%;
            padding: 0.5rem;
            border-radius: 0;
        }
    }
</style>
