<script>
  import { createEventDispatcher, onMount, onDestroy } from "svelte";
  import l10n from "../l10n";
  import { Close } from "./Icons";

  const dispatch = createEventDispatcher();
  const close = () => dispatch("close");

  let bg;
  let modal;

  const handle_keydown = e => {
    if (e.key === "Escape") {
      close();
      return;
    }

    if (e.key === "Tab") {
      // trap focus
      const nodes = modal.querySelectorAll("*");
      const tabbable = Array.from(nodes).filter(n => n.tabIndex >= 0);

      let index = tabbable.indexOf(document.activeElement);
      if (index === -1 && e.shiftKey) index = 0;

      index += tabbable.length + (e.shiftKey ? -1 : 1);
      index %= tabbable.length;

      tabbable[index].focus();
      e.preventDefault();
    }
  };

  const previouslyFocused =
    typeof document !== "undefined" && document.activeElement;

  if (previouslyFocused) {
    onDestroy(() => {
      previouslyFocused.focus();
    });
  }

  onMount(() => {
    document.body.appendChild(bg);
    document.body.appendChild(modal);
  });
</script>

<svelte:window on:keydown="{handle_keydown}" />

<div class="modal-background" on:click="{close}" bind:this="{bg}"></div>

<div class="modal" role="dialog" aria-modal="true" bind:this="{modal}">
  <slot></slot>

  <button on:click="{close}" title="{$l10n('Close')}"><Close></Close></button>
</div>

<style>
  .modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }

  .modal {
    position: absolute;
    left: 50%;
    top: 50%;

    width: 100%;
    height: 100%;
    max-width: 640px;
    max-height: 480px;

    transform: translate(-50%, -50%);

    border-radius: 6px;
    background: white;
  }

  button {
    all: initial;
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    height: 48px;
    width: 48px;

    border-radius: 2px;

    top: 4px;
    right: 4px;
  }

  button:focus {
    box-shadow: 0px 0px 0px 4px rgba(0, 100, 255, 0.5);
  }
</style>
