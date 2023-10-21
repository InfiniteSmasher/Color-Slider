let slider;

function hueToHex(hue) {
	hue = hue % 360;
	const normalizedHue = hue / 360;
	const { r, g, b } = hslToRgb(normalizedHue, 1, 0.5);
	const hexColor = rgbToHex(Math.round(r * 255), Math.round(g * 255), Math.round(b * 255));
	return hexColor;
}

function hslToRgb(h, s, l) {
	let r, g, b;

	if (s === 0) {
		r = g = b = l;
	} else {
		const hue2rgb = (p, q, t) => {
			if (t < 0) t += 1;
			if (t > 1) t -= 1;
			if (t < 1 / 6) return p + (q - p) * 6 * t;
			if (t < 1 / 2) return q;
			if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
			return p;
		};

		const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		const p = 2 * l - q;
		r = hue2rgb(p, q, h + 1 / 3);
		g = hue2rgb(p, q, h);
		b = hue2rgb(p, q, h - 1 / 3);
	}

	return { r, g, b };
}

function rgbToHex(r, g, b) {
	return `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1)}`;
}

function sliderClick() {
	slider = document.querySelector('.color-slider input');
	if (slider && slider.disabled) {
		vueApp.showSubStorePopup();
		return;
	}
	BAWK.play('ui_onchange');
	updateColor();
}

function updateColor() {
	slider = document.querySelector('.color-slider input');
	vueApp.colorSliderVal = slider.value;
	let hue = vueApp.colorSliderVal * 3.6;
	document.documentElement.style.setProperty('--slider-color', `hsl(${hue}, 100%, 50%)`);
	shellColors[14] = hueToHex(hue);
	extern.setShellColor(14);
	updateSliderLock();
}

function updateSliderLock() {
	let mappedPos = ((vueApp.colorSliderVal / 100) * (14.79 + 14.53)) - 14.53;
	//mappedPos = Math.round(mappedPos * 100) / 100;
	document.documentElement.style.setProperty('--slider-lock-pos', `${mappedPos}em`);
}

comp_color_select.computed.getExtraColorEggIcon = function() {
	updateColor();
	return (this.extraColorsLocked === true && !this.isUpgrade) ? '#icon-egg-locked' : '#icon-egg';
}
