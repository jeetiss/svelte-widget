<div>
  <slot></slot>
</div>

<style>
  div {
    background-color: rgb(227, 225, 225);
    overflow: auto;

    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  div::-webkit-scrollbar {
    display: none;
  }
</style>
