let colorTemplate = document.getElementById("color-select-template");
colorTemplate.innerHTML = colorTemplate.innerHTML.replace(`</div>\n\t</div>\n`,
`</div>
  <div id="color-picker" class="color-slider">
    <input type="range" oninput="updateColor()" :value="(vueApp.colorSliderVal) ? vueApp.colorSliderVal : 50" min="0" max="100" step="0.00001">
  </div>
</div>`);
