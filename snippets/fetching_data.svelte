<script>
    import { onMount } from "svelte";

    let posts = [];
    let loading = true;
    let error = null;

    // Fetch data when the component is mounted
    onMount(async () => {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            if (!response.ok) {
                throw new Error("Failed to fetch posts");
            }
            posts = await response.json();
        } catch (err) {
            error = err.message;
        } finally {
            loading = false;
        }
    });
</script>

<main>
    <h1>Posts</h1>

    {#if loading}
        <p>Loading...</p>
    {:else if error}
        <p style="color: red;">Error: {error}</p>
    {:else}
        <ul>
            {#each posts as post}
                <li>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </li>
            {/each}
        </ul>
    {/if}
</main>

<style>
    main {
        text-align: center;
        padding: 20px;
    }

    h1 {
        font-size: 2em;
        color: #333;
    }

    ul {
        list-style-type: none;
        padding-left: 0;
    }

    li {
        margin: 15px 0;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }

    h2 {
        font-size: 1.5em;
        color: #007bff;
    }

    p {
        font-size: 1em;
        color: #555;
    }
</style>
