# vue-pressure

> A Vue.js project of pressure.js

## Install

``` bash
# install dependencies
npm install vue-pressure --save

```

## Use in Vue.js

``` javascript
// add in main.js
import Vue from 'vue'
import VuePressure from 'vue-pressure'

Vue.use(VuePressure)

// or set some configs

Vue.use(VuePressure, {
    // some configs...
})

// use vue-pressure in elements

<img v-pressure="{
    change: handlePressureChange,
    start: handlePressureStart,
    end: handlePressureEnd,
    startDeepPress: handlePressureStartDeepPress,
    endDeepPress: handlePressureEndDeepPress,
    unsupported: handlePressureUnsupported
    options: {
        // some options like 'polyfill' or 'only'
    }
}" src="http://somePicUrl.png"/>

 <img v-pressure-change="handlePressureChange"/>
 <img v-pressure-start="handlePressureStart"/>
 <img v-pressure-end="handlePressureEnd"/>
 <img v-pressure-startDeepPress="handlePressureStartDeepPress"/>
 <img v-pressure-endDeepPress="handlePressureEndDeepPress"/>
```

## For Details

Please see APIs on Github of Pressure.js: https://github.com/stuyam/pressure

or its documentation: https://pressurejs.com/documentation.html
