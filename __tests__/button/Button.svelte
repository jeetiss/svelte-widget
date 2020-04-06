<script>
  import Button from "../../src/components/Button.svelte";

  export let text = 'default text';
  export let event = () => null;
</script>

<Button on:click="{event}">{text}</Button>
