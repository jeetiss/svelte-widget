<style>
  button {
    all: initial;
    display: inline-block;
    box-sizing: border-box;
    margin: 0;
    padding: 0.4em 1em;
    width: auto;
    min-width: 0;
    height: auto;
    min-height: 0;
    border-radius: 6px;
    border: none;
    background: #157cfc;
    color: #fff;
    cursor: pointer;
    text-align: center;
    white-space: nowrap;
    font: inherit;
    line-height: inherit;
    box-shadow: none;
    text-shadow: inherit;
    transition: background 0.3s;
  }

  button:hover {
    background: #3891ff;
    color: #fff;
    font: inherit;
    box-shadow: none;
    text-shadow: inherit;
  }

  button:focus {
    box-shadow: 0px 0px 0px 3px rgba(0, 100, 255, 0.5);
  }
</style>

<button on:click>
  <slot></slot>
</button>
