<script>
  import "../app.css";
  import Navbar from "$lib/components/navbar.svelte";
</script>

<Navbar />

<div class="container max-w-screen-xl mx-auto">
  <slot />
</div>
