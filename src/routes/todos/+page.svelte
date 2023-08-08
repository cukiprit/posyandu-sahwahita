<script>
  export let data;
</script>

{#each data.todos as todo}
  <ul>
    <li>{todo.title}</li>
    <li>{todo.description}</li>
    <li>{todo.created_at}</li>
  </ul>
{/each}
