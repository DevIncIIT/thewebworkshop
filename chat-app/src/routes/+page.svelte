<script lang="ts">
    import { goto } from "$app/navigation";

    let username: string = '';

    const submit = () => {
        goto(`/${username}`);
    }
</script>

<form on:submit|preventDefault={submit}>
    <label>
        Username:
        <input type="text" bind:value={username}/>
    </label>
    <button type="submit">Go</button>
</form>