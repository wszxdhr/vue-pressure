# vue-pressure

> A Vue.js 2.0 directive for pressure.js

## Install

``` bash
# install vue-pressure
npm install vue-pressure --save

# Pressure.js is already in the vue-pressure package, so you can not install Pressure.js anymore.
```
## Demo
http://demo.pressure.anymelon.com/

## Use in Vue.js

``` javascript
// add in main.js
import Vue from 'vue'
import VuePressure from 'vue-pressure'

Vue.use(VuePressure)

// or set some configs

Vue.use(VuePressure, {
  // some configs...
  polyfill: true,
  polyfillSpeedUp: 1000,
  only: null
})

// use pressure.map
this.$pressure.map(xxx)

// use vue-pressure in elements

 <img v-pressure @pressureChange="handlePressureChange"/>
 <img v-pressure @pressureStart="handlePressureStart"/>
 <img v-pressure @pressureEnd="handlePressureEnd"/>
 <img v-pressure @pressureDeepStart="handlePressureStartDeepPress"/>
 <img v-pressure @pressureDeepEnd="handlePressureEndDeepPress"/>

// or set some options to current element

<img v-pressure="{
  polyfill: true,
  polyfillSpeedUp: 1000,
  polyfillSpeedDown: 0,
  preventSelect: true,
  only: null
}" @pressureChange="handlePressureChange" src="http://somePicUrl.png"/>


 // in Vue componentss
 // add .native
 <Hello-World v-pressure @pressureChange.native="handlePressureChange"></HelloWorld>

 // function handleChange
 // field 'force' is inserted into argument event
 handleChange: function (event) {
    console.log(event, event.force)
 }

 // only 'pressureChange', 'pressureStart', 'pressureDeepStart' have a argument named event
```

## For Details

See demos on: https://pressurejs.com/

Please see APIs on Github of Pressure.js: https://github.com/stuyam/pressure

or its documentation: https://pressurejs.com/documentation.html
