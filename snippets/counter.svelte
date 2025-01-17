<script>
    let count = 0;

    function increment() {
        count += 1;
    }

    function decrement() {
        count -= 1;
    }
</script>

<main>
    <h1>Counter App</h1>
    <p>Count: {count}</p>
    <button on:click={increment}>Increment</button>
    <button on:click={decrement}>Decrement</button>
</main>

<style>
    main {
        text-align: center;
        padding: 20px;
    }

    button {
        margin: 5px;
        padding: 10px;
        font-size: 16px;
    }

    h1 {
        font-size: 2em;
        color: #333;
    }
</style>
