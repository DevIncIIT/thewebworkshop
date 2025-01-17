<script lang="ts">
    export let msg: string;
    export let username: string;
</script>

<div class="message {username === 'self' ? 'self' : 'other'}">
    {#if username !== 'self'}
        <span class="username">{username}</span>
    {/if}
    <div class="content">
        {msg}
    </div>
</div>

<style>
    .message {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        max-width: 80%;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, 
            Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    }

    .message.self {
        align-self: flex-end;
    }

    .message.other {
        align-self: flex-start;
    }

    .username {
        font-size: 0.875rem;
        color: #9ca3af;
        margin-left: 0.5rem;
        font-weight: 500;
    }

    .content {
        padding: 0.8rem 1.2rem;
        border-radius: 12px;
        word-break: break-word;
        line-height: 1.5;
        font-size: 0.9375rem;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    }

    .self .content {
        background-color: #4361ee;
        color: white;
        border-bottom-right-radius: 4px;
    }

    .other .content {
        background-color: #2c2e33;
        color: #e9ecef;
        border-bottom-left-radius: 4px;
        border: 1px solid #3a3d44;
    }

    @media (max-width: 768px) {
        .message {
            max-width: 90%;
        }
    }
</style>