<script>
	import { getContext } from 'svelte';
	import { TABS } from './Tabs.svelte';

	const panel = {};
	const { registerPanel, selectedPanel } = getContext(TABS);

	registerPanel(panel);
</script>

{#if $selectedPanel === panel}
  <div>
    <slot></slot>
  </div>
{/if}

<style>
  div {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
  }
</style>
