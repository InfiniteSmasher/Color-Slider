# Egg Color Slider | Shell Shockers
```js
// ==UserScript==
// @name         Egg Color Slider | Shell Shockers
// @version      1.0
// @author       Infinite Smasher
// @description  Adds a color slider to the inventory!
// @icon         https://raw.githubusercontent.com/InfiniteSmasher/Color-Slider/main/ico_egg.png
// @require      https://raw.githubusercontent.com/InfiniteSmasher/Color-Slider/main/sliderHTML.js
// @match        *://*shellshock.io/*
// @run-at       document-end
// ==/UserScript==

(function() {
    let script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/InfiniteSmasher/Color-Slider@latest/slider1.js';
    document.head.appendChild(script);

    let style = document.createElement('link');
    Object.assign(style, {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/gh/InfiniteSmasher/Color-Slider@latest/slider.css'
    });
    document.head.appendChild(style);
})();
```

# Egg Color Slider (VIP-Exclusive) | Shell Shockers
```js
// ==UserScript==
// @name         Egg Color Slider (VIP-Exclusive) | Shell Shockers
// @version      1.0
// @author       Infinite Smasher
// @description  Adds a color slider to the inventory exclusively for VIPs!
// @icon         https://raw.githubusercontent.com/InfiniteSmasher/Color-Slider/main/ico_egg.png
// @require      https://raw.githubusercontent.com/InfiniteSmasher/Color-Slider/main/sliderHTML.js
// @match        *://*shellshock.io/*
// @run-at       document-end
// ==/UserScript==

(function() {
    let script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/InfiniteSmasher/Color-Slider@latest/slider2.js';
    document.head.appendChild(script);

    let style = document.createElement('link');
    Object.assign(style, {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/gh/InfiniteSmasher/Color-Slider@latest/slider.css'
    });
    document.head.appendChild(style);
})();
```
