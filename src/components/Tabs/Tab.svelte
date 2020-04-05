<script>
  import { getContext } from "svelte";
  import { TABS } from "./Tabs.svelte";

  const tab = {};
  const { registerTab, selectTab, selectedTab } = getContext(TABS);

  registerTab(tab);
</script>

<style>
  button {
    outline: none;
    background-color: transparent;
    border: none;
    border-radius: 0;
    margin: 0;
    color: #333;

    width: 60px;
    height: 60px;

    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  }

  button.selected {
    background-color: white;
    color: #333;
  }

  button:hover {
    color: #3891ff;
  }

  button:focus {
    box-shadow: inset 0px 0px 0px 3px rgba(0, 100, 255, 0.5);
  }
</style>

<button
  class:selected="{$selectedTab === tab}"
  on:click="{() => selectTab(tab)}"
>
  <slot></slot>
</button>
