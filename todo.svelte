<script>
  let newTask = '';
  let tasks = [];

  function addTask() {
    if (newTask.trim()) {
      tasks = [...tasks, { text: newTask, completed: false }];
      newTask = ''; // clear input field
    }
  }

  function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
  }

  function deleteTask(index) {
    tasks = tasks.filter((_, i) => i !== index);
  }
</script>

<main>
  <h1>To-Do List</h1>

  <div class="input-container">
    <input
      type="text"
      placeholder="Add a new task"
      bind:value={newTask}
      on:keypress={(e) => e.key === 'Enter' && addTask()}
    />
    <button on:click={addTask}>Add</button>
  </div>

  {#if tasks.length === 0}
    <p>No tasks to show.</p>
  {:else}
    <ul>
      {#each tasks as task, index}
        <li class:completed={task.completed}>
          <span on:click={() => toggleTaskCompletion(index)}>
            {task.completed ? '✓ ' : '○ '}
            {task.text}
          </span>
          <button on:click={() => deleteTask(index)}>Delete</button>
        </li>
      {/each}
    </ul>
  {/if}
</main>

<style>
  main {
    text-align: center;
    padding: 20px;
    font-family: Arial, sans-serif;
  }

  h1 {
    font-size: 2em;
    color: #333;
  }

  .input-container {
    margin-bottom: 20px;
  }

  input {
    padding: 10px;
    font-size: 16px;
    width: 200px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
  }

  button:hover {
    background-color: #45a049;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }

  li.completed span {
    text-decoration: line-through;
    color: #aaa;
  }

  span {
    cursor: pointer;
  }

  button {
    background-color: #e74c3c;
    border: none;
    border-radius: 4px;
    color: white;
    padding: 5px 10px;
  }

  button:hover {
    background-color: #c0392b;
  }
</style>

