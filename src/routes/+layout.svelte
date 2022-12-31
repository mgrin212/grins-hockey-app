<script>
  import Nav from "../components/nav.svelte";
  import "../app.postcss";
</script>

<div class="h-screen overflow-clip justify-center">
  <div class="bg-black h-[91vh] w-full mb-2 overflow-auto ">
    <slot class="bg-black" />
  </div>
  <Nav />
</div>
