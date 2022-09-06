<h1>How to Making an app</h1>

<div class="console">
  <header>
    <p>guest@antoineneff</p>
  </header>
  <div class="consolebody">
    <p>> npm create vite@latest my-app -- --template svelte</p>
    <p>></p>
  </div>
</div>


<style lang="scss">
  body {
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #eee;
  }

  .console {
    width: 800px;
    height: 450px;
    box-sizing: border-box;
    margin: 40px auto;
    overflow: hidden;
  }

  .console header {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-color: #555;
    height: 45px;
    line-height: 45px;
    text-align: center;
    color: #DDD;
  }

  .console .consolebody {
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    box-sizing: border-box;
    padding: 20px;
    height: calc(100% - 40px);
    overflow: scroll;
    background-color: #000;
    color: #63de00;
  }

  .console .consolebody p {
    line-height: 1.5rem;
  }
</style>
