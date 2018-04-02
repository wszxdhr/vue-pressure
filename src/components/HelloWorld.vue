<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 class="demo-btn" style="cursor: pointer;">Press Me, tell you value.</h2>
    <ul>
      <li>
        <a
          href="javascript:;"
          target="_blank"
          style="position: relative;"
        >
          Force: <div :class="['force', force === 1 ? 'red' : '']" :style="{width: force * 100 + 'px'}">{{force}}</div>
        </a>
      </li>
    </ul>
    <h2>Docs or demos</h2>
    <ul>
      <li>
        <a
          href="https://pressurejs.com/"
          target="_blank"
        >
          Pressure.js
        </a>
      </li>
      <li>
        <a
          href="https://github.com/stuyam/pressure"
          target="_blank"
        >
          Github of Pressure.js
        </a>
      </li>
      <li>
        <a
          href="https://pressurejs.com/documentation.html"
          target="_blank"
        >
          Docs of Pressure.js
        </a>
      </li>
      <li>
        <a
          href="https://github.com/wszxdhr/vue-pressure.git"
          target="_blank"
        >
          Github of vue-pressure
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['force'],
  data () {
    return {
      msg: 'Try to press the logo.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
  .force {
    position: absolute;
    left: 50px;
    top: 0;
    background-color: #42b983;
    color: #ffffff;
    text-align: left;
  }
  .force.red {
    background-color: red;
  }
  .demo-btn {
  }
  .demo-btn:hover {
    background-color: #42b983;
    color: #ffffff;
  }
</style>
