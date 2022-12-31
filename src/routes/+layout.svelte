<script>
  import Nav from "../components/nav.svelte";
  import "../app.postcss";
</script>

<div class="h-screen overflow-clip">
  <div class="bg-black h-[90vh] w-full mb-2 overflow-auto border border-green-500">
    <slot class="bg-black" />
  </div>
  <Nav />
</div>
