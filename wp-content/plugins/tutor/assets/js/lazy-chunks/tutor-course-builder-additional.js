"use strict";(self["webpackChunktutor"]=self["webpackChunktutor"]||[]).push([["85"],{58574:function(e,t,r){r.d(t,{Z:()=>d});/* ESM import */var n=r(8081);/* ESM import */var a=/*#__PURE__*/r.n(n);/* ESM import */var i=r(23645);/* ESM import */var o=/*#__PURE__*/r.n(i);// Imports
var s=o()(a());// Module
s.push([e.id,`/* Variables declaration */
/* prettier-ignore */
.rdp-root {
  --rdp-accent-color: blue; /* The accent color used for selected days and UI elements. */
  --rdp-accent-background-color: #f0f0ff; /* The accent background color used for selected days and UI elements. */

  --rdp-day-height: 44px; /* The height of the day cells. */
  --rdp-day-width: 44px; /* The width of the day cells. */
  
  --rdp-day_button-border-radius: 100%; /* The border radius of the day cells. */
  --rdp-day_button-border: 2px solid transparent; /* The border of the day cells. */
  --rdp-day_button-height: 42px; /* The height of the day cells. */
  --rdp-day_button-width: 42px; /* The width of the day cells. */
  
  --rdp-selected-border: 2px solid var(--rdp-accent-color); /* The border of the selected days. */
  --rdp-disabled-opacity: 0.5; /* The opacity of the disabled days. */
  --rdp-outside-opacity: 0.75; /* The opacity of the days outside the current month. */
  --rdp-today-color: var(--rdp-accent-color); /* The color of the today's date. */
  
  --rdp-dropdown-gap: 0.5rem;/* The gap between the dropdowns used in the month captons. */
  
  --rdp-months-gap: 2rem; /* The gap between the months in the multi-month view. */
  
  --rdp-nav_button-disabled-opacity: 0.5; /* The opacity of the disabled navigation buttons. */
  --rdp-nav_button-height: 2.25rem; /* The height of the navigation buttons. */
  --rdp-nav_button-width: 2.25rem; /* The width of the navigation buttons. */
  --rdp-nav-height: 2.75rem; /* The height of the navigation bar. */
  
  --rdp-range_middle-background-color: var(--rdp-accent-background-color); /* The color of the background for days in the middle of a range. */
  --rdp-range_middle-color: inherit;/* The color of the range text. */
  
  --rdp-range_start-color: white; /* The color of the range text. */
  --rdp-range_start-background: linear-gradient(var(--rdp-gradient-direction), transparent 50%, var(--rdp-range_middle-background-color) 50%); /* Used for the background of the start of the selected range. */
  --rdp-range_start-date-background-color: var(--rdp-accent-color); /* The background color of the date when at the start of the selected range. */
  
  --rdp-range_end-background: linear-gradient(var(--rdp-gradient-direction), var(--rdp-range_middle-background-color) 50%, transparent 50%); /* Used for the background of the end of the selected range. */
  --rdp-range_end-color: white;/* The color of the range text. */
  --rdp-range_end-date-background-color: var(--rdp-accent-color); /* The background color of the date when at the end of the selected range. */
  
  --rdp-week_number-border-radius: 100%; /* The border radius of the week number. */
  --rdp-week_number-border: 2px solid transparent; /* The border of the week number. */
  
  --rdp-week_number-height: var(--rdp-day-height); /* The height of the week number cells. */
  --rdp-week_number-opacity: 0.75; /* The opacity of the week number. */
  --rdp-week_number-width: var(--rdp-day-width); /* The width of the week number cells. */
  --rdp-weeknumber-text-align: center; /* The text alignment of the weekday cells. */

  --rdp-weekday-opacity: 0.75; /* The opacity of the weekday. */
  --rdp-weekday-padding: 0.5rem 0rem; /* The padding of the weekday. */
  --rdp-weekday-text-align: center; /* The text alignment of the weekday cells. */

  --rdp-gradient-direction: 90deg;

  --rdp-animation_duration: 0.3s;
  --rdp-animation_timing: cubic-bezier(0.4, 0, 0.2, 1);
}

.rdp-root[dir="rtl"] {
  --rdp-gradient-direction: -90deg;
}

.rdp-root[data-broadcast-calendar="true"] {
  --rdp-outside-opacity: unset;
}

/* Root of the component. */
.rdp-root {
  position: relative; /* Required to position the navigation toolbar. */
  box-sizing: border-box;
}

.rdp-root * {
  box-sizing: border-box;
}

.rdp-day {
  width: var(--rdp-day-width);
  height: var(--rdp-day-height);
  text-align: center;
}

.rdp-day_button {
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font: inherit;
  color: inherit;
  justify-content: center;
  align-items: center;
  display: flex;

  width: var(--rdp-day_button-width);
  height: var(--rdp-day_button-height);
  border: var(--rdp-day_button-border);
  border-radius: var(--rdp-day_button-border-radius);
}

.rdp-day_button:disabled {
  cursor: revert;
}

.rdp-caption_label {
  z-index: 1;

  position: relative;
  display: inline-flex;
  align-items: center;

  white-space: nowrap;
  border: 0;
}

.rdp-dropdown:focus-visible ~ .rdp-caption_label {
  outline: 5px auto Highlight;
  outline: 5px auto -webkit-focus-ring-color;
}

.rdp-button_next,
.rdp-button_previous {
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font: inherit;
  color: inherit;
  -moz-appearance: none;
  -webkit-appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  appearance: none;

  width: var(--rdp-nav_button-width);
  height: var(--rdp-nav_button-height);
}

.rdp-button_next:disabled,
.rdp-button_next[aria-disabled="true"],
.rdp-button_previous:disabled,
.rdp-button_previous[aria-disabled="true"] {
  cursor: revert;

  opacity: var(--rdp-nav_button-disabled-opacity);
}

.rdp-chevron {
  display: inline-block;
  fill: var(--rdp-accent-color);
}

.rdp-root[dir="rtl"] .rdp-nav .rdp-chevron {
  transform: rotate(180deg);
  transform-origin: 50%;
}

.rdp-dropdowns {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: var(--rdp-dropdown-gap);
}
.rdp-dropdown {
  z-index: 2;

  /* Reset */
  opacity: 0;
  appearance: none;
  position: absolute;
  inset-block-start: 0;
  inset-block-end: 0;
  inset-inline-start: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  cursor: inherit;
  border: none;
  line-height: inherit;
}

.rdp-dropdown_root {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.rdp-dropdown_root[data-disabled="true"] .rdp-chevron {
  opacity: var(--rdp-disabled-opacity);
}

.rdp-month_caption {
  display: flex;
  align-content: center;
  height: var(--rdp-nav-height);
  font-weight: bold;
  font-size: large;
}

.rdp-root[data-nav-layout="around"] .rdp-month,
.rdp-root[data-nav-layout="after"] .rdp-month {
  position: relative;
}

.rdp-root[data-nav-layout="around"] .rdp-month_caption {
  justify-content: center;
  margin-inline-start: var(--rdp-nav_button-width);
  margin-inline-end: var(--rdp-nav_button-width);
  position: relative;
}

.rdp-root[data-nav-layout="around"] .rdp-button_previous {
  position: absolute;
  inset-inline-start: 0;
  top: 0;
  height: var(--rdp-nav-height);
  display: inline-flex;
}

.rdp-root[data-nav-layout="around"] .rdp-button_next {
  position: absolute;
  inset-inline-end: 0;
  top: 0;
  height: var(--rdp-nav-height);
  display: inline-flex;
  justify-content: center;
}

.rdp-months {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: var(--rdp-months-gap);
  max-width: fit-content;
}

.rdp-month_grid {
  border-collapse: collapse;
}

.rdp-nav {
  position: absolute;
  inset-block-start: 0;
  inset-inline-end: 0;

  display: flex;
  align-items: center;

  height: var(--rdp-nav-height);
}

.rdp-weekday {
  opacity: var(--rdp-weekday-opacity);
  padding: var(--rdp-weekday-padding);
  font-weight: 500;
  font-size: smaller;
  text-align: var(--rdp-weekday-text-align);
  text-transform: var(--rdp-weekday-text-transform);
}

.rdp-week_number {
  opacity: var(--rdp-week_number-opacity);
  font-weight: 400;
  font-size: small;
  height: var(--rdp-week_number-height);
  width: var(--rdp-week_number-width);
  border: var(--rdp-week_number-border);
  border-radius: var(--rdp-week_number-border-radius);
  text-align: var(--rdp-weeknumber-text-align);
}

/* DAY MODIFIERS */
.rdp-today:not(.rdp-outside) {
  color: var(--rdp-today-color);
}

.rdp-selected {
  font-weight: bold;
  font-size: large;
}

.rdp-selected .rdp-day_button {
  border: var(--rdp-selected-border);
}

.rdp-outside {
  opacity: var(--rdp-outside-opacity);
}

.rdp-disabled {
  opacity: var(--rdp-disabled-opacity);
}

.rdp-hidden {
  visibility: hidden;
  color: var(--rdp-range_start-color);
}

.rdp-range_start {
  background: var(--rdp-range_start-background);
}

.rdp-range_start .rdp-day_button {
  background-color: var(--rdp-range_start-date-background-color);
  color: var(--rdp-range_start-color);
}

.rdp-range_middle {
  background-color: var(--rdp-range_middle-background-color);
}

.rdp-range_middle .rdp-day_button {
  border-color: transparent;
  border: unset;
  border-radius: unset;
  color: var(--rdp-range_middle-color);
}

.rdp-range_end {
  background: var(--rdp-range_end-background);
  color: var(--rdp-range_end-color);
}

.rdp-range_end .rdp-day_button {
  color: var(--rdp-range_start-color);
  background-color: var(--rdp-range_end-date-background-color);
}

.rdp-range_start.rdp-range_end {
  background: revert;
}

.rdp-focusable {
  cursor: pointer;
}

@keyframes rdp-slide_in_left {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes rdp-slide_in_right {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes rdp-slide_out_left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes rdp-slide_out_right {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}

.rdp-weeks_before_enter {
  animation: rdp-slide_in_left var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-weeks_before_exit {
  animation: rdp-slide_out_left var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-weeks_after_enter {
  animation: rdp-slide_in_right var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-weeks_after_exit {
  animation: rdp-slide_out_right var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-root[dir="rtl"] .rdp-weeks_after_enter {
  animation: rdp-slide_in_left var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-root[dir="rtl"] .rdp-weeks_before_exit {
  animation: rdp-slide_out_right var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-root[dir="rtl"] .rdp-weeks_before_enter {
  animation: rdp-slide_in_right var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-root[dir="rtl"] .rdp-weeks_after_exit {
  animation: rdp-slide_out_left var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

@keyframes rdp-fade_in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes rdp-fade_out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.rdp-caption_after_enter {
  animation: rdp-fade_in var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-caption_after_exit {
  animation: rdp-fade_out var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-caption_before_enter {
  animation: rdp-fade_in var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-caption_before_exit {
  animation: rdp-fade_out var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}
`,""]);// Exports
/* ESM default export */const d=s},23645:function(e){/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/e.exports=function(e){var t=[];// return the list of modules as css string
t.toString=function t(){return this.map(function(t){var r="";var n=typeof t[5]!=="undefined";if(t[4]){r+="@supports (".concat(t[4],") {")}if(t[2]){r+="@media ".concat(t[2]," {")}if(n){r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")}r+=e(t);if(n){r+="}"}if(t[2]){r+="}"}if(t[4]){r+="}"}return r}).join("")};// import a list of modules into the list
t.i=function e(e,r,n,a,i){if(typeof e==="string"){e=[[null,e,undefined]]}var o={};if(n){for(var s=0;s<this.length;s++){var d=this[s][0];if(d!=null){o[d]=true}}}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);if(n&&o[c[0]]){continue}if(typeof i!=="undefined"){if(typeof c[5]==="undefined"){c[5]=i}else{c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}");c[5]=i}}if(r){if(!c[2]){c[2]=r}else{c[1]="@media ".concat(c[2]," {").concat(c[1],"}");c[2]=r}}if(a){if(!c[4]){c[4]="".concat(a)}else{c[1]="@supports (".concat(c[4],") {").concat(c[1],"}");c[4]=a}}t.push(c)}};return t}},8081:function(e){e.exports=function(e){return e[1]}},47041:function(e,t,r){r.d(t,{Z:()=>s});/* ESM import */var n=r(58545);/* ESM import */var a=r(19013);/* ESM import */var i=r(18717);/* ESM import */var o=r(13882);/**
 * @name eachMinuteOfInterval
 * @category Interval Helpers
 * @summary Return the array of minutes within the specified time interval.
 *
 * @description
 * Returns the array of minutes within the specified time interval.
 *
 * @param {Interval} interval - the interval. See [Interval]{@link https://date-fns.org/docs/Interval}
 * @param {Object} [options] - an object with options.
 * @param {Number} [options.step=1] - the step to increment by. The step must be equal to or greater than 1
 * @throws {TypeError} 1 argument required
 * @returns {Date[]} the array with starts of minutes from the minute of the interval start to the minute of the interval end
 * @throws {RangeError} `options.step` must be a number equal to or greater than 1
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Each minute between 14 October 2020, 13:00 and 14 October 2020, 13:03
 * const result = eachMinuteOfInterval({
 *   start: new Date(2014, 9, 14, 13),
 *   end: new Date(2014, 9, 14, 13, 3)
 * })
 * //=> [
 * //   Wed Oct 14 2014 13:00:00,
 * //   Wed Oct 14 2014 13:01:00,
 * //   Wed Oct 14 2014 13:02:00,
 * //   Wed Oct 14 2014 13:03:00
 * // ]
 */function s(e,t){var r;(0,o/* ["default"] */.Z)(1,arguments);var s=(0,i/* ["default"] */.Z)((0,a["default"])(e.start));var d=(0,a["default"])(e.end);var l=s.getTime();var c=d.getTime();if(l>=c){throw new RangeError("Invalid interval")}var u=[];var v=s;var f=Number((r=t===null||t===void 0?void 0:t.step)!==null&&r!==void 0?r:1);if(f<1||isNaN(f))throw new RangeError("`options.step` must be a number equal to or greater than 1");while(v.getTime()<=c){u.push((0,a["default"])(v));v=(0,n["default"])(v,f)}return u}},37042:function(e,t,r){r.r(t);r.d(t,{"default":()=>o});/* ESM import */var n=r(83946);/* ESM import */var a=r(19013);/* ESM import */var i=r(13882);/**
 * @name setHours
 * @category Hour Helpers
 * @summary Set the hours to the given date.
 *
 * @description
 * Set the hours to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} hours - the hours of the new date
 * @returns {Date} the new date with the hours set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set 4 hours to 1 September 2014 11:30:00:
 * const result = setHours(new Date(2014, 8, 1, 11, 30), 4)
 * //=> Mon Sep 01 2014 04:30:00
 */function o(e,t){(0,i/* ["default"] */.Z)(2,arguments);var r=(0,a["default"])(e);var o=(0,n/* ["default"] */.Z)(t);r.setHours(o);return r}},4543:function(e,t,r){r.r(t);r.d(t,{"default":()=>o});/* ESM import */var n=r(83946);/* ESM import */var a=r(19013);/* ESM import */var i=r(13882);/**
 * @name setMinutes
 * @category Minute Helpers
 * @summary Set the minutes to the given date.
 *
 * @description
 * Set the minutes to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} minutes - the minutes of the new date
 * @returns {Date} the new date with the minutes set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set 45 minutes to 1 September 2014 11:30:40:
 * const result = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:45:40
 */function o(e,t){(0,i/* ["default"] */.Z)(2,arguments);var r=(0,a["default"])(e);var o=(0,n/* ["default"] */.Z)(t);r.setMinutes(o);return r}},18717:function(e,t,r){r.d(t,{Z:()=>i});/* ESM import */var n=r(19013);/* ESM import */var a=r(13882);/**
 * @name startOfMinute
 * @category Minute Helpers
 * @summary Return the start of a minute for the given date.
 *
 * @description
 * Return the start of a minute for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a minute
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a minute for 1 December 2014 22:15:45.400:
 * const result = startOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:00
 */function i(e){(0,a/* ["default"] */.Z)(1,arguments);var t=(0,n["default"])(e);t.setSeconds(0,0);return t}},70165:function(e,t,r){/* ESM import */var n=r(93379);/* ESM import */var a=/*#__PURE__*/r.n(n);/* ESM import */var i=r(7795);/* ESM import */var o=/*#__PURE__*/r.n(i);/* ESM import */var s=r(90569);/* ESM import */var d=/*#__PURE__*/r.n(s);/* ESM import */var l=r(3565);/* ESM import */var c=/*#__PURE__*/r.n(l);/* ESM import */var u=r(19216);/* ESM import */var v=/*#__PURE__*/r.n(u);/* ESM import */var f=r(44589);/* ESM import */var p=/*#__PURE__*/r.n(f);/* ESM import */var h=r(58574);var m={};m.styleTagTransform=p();m.setAttributes=c();m.insert=d().bind(null,"head");m.domAPI=o();m.insertStyleElement=v();var g=a()(h/* ["default"] */.Z,m);/* unused ESM default export */var b=h/* ["default"] */.Z&&h/* ["default"].locals */.Z.locals?h/* ["default"].locals */.Z.locals:undefined},93379:function(e){var t=[];function r(e){var r=-1;for(var n=0;n<t.length;n++){if(t[n].identifier===e){r=n;break}}return r}function n(e,n){var i={};var o=[];for(var s=0;s<e.length;s++){var d=e[s];var l=n.base?d[0]+n.base:d[0];var c=i[l]||0;var u="".concat(l," ").concat(c);i[l]=c+1;var v=r(u);var f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(v!==-1){t[v].references++;t[v].updater(f)}else{var p=a(f,n);n.byIndex=s;t.splice(s,0,{identifier:u,updater:p,references:1})}o.push(u)}return o}function a(e,t){var r=t.domAPI(t);r.update(e);var n=function t(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer){return}r.update(e=t)}else{r.remove()}};return n}e.exports=function(e,a){a=a||{};e=e||[];var i=n(e,a);return function e(e){e=e||[];for(var o=0;o<i.length;o++){var s=i[o];var d=r(s);t[d].references--}var l=n(e,a);for(var c=0;c<i.length;c++){var u=i[c];var v=r(u);if(t[v].references===0){t[v].updater();t.splice(v,1)}}i=l}}},90569:function(e){var t={};/* istanbul ignore next  */function r(e){if(typeof t[e]==="undefined"){var r=document.querySelector(e);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
r=r.contentDocument.head}catch(e){// istanbul ignore next
r=null}}t[e]=r}return t[e]}/* istanbul ignore next  */function n(e,t){var n=r(e);if(!n){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.")}n.appendChild(t)}e.exports=n},19216:function(e){/* istanbul ignore next  */function t(e){var t=document.createElement("style");e.setAttributes(t,e.attributes);e.insert(t,e.options);return t}e.exports=t},3565:function(e,t,r){/* istanbul ignore next  */function n(e){var t=true?r.nc:0;if(t){e.setAttribute("nonce",t)}}e.exports=n},7795:function(e){/* istanbul ignore next  */function t(e,t,r){var n="";if(r.supports){n+="@supports (".concat(r.supports,") {")}if(r.media){n+="@media ".concat(r.media," {")}var a=typeof r.layer!=="undefined";if(a){n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")}n+=r.css;if(a){n+="}"}if(r.media){n+="}"}if(r.supports){n+="}"}var i=r.sourceMap;if(i&&typeof btoa!=="undefined"){n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")}// For old IE
/* istanbul ignore if  */t.styleTagTransform(n,e,t.options)}function r(e){// istanbul ignore if
if(e.parentNode===null){return false}e.parentNode.removeChild(e)}/* istanbul ignore next  */function n(e){if(typeof document==="undefined"){return{update:function e(){},remove:function e(){}}}var n=e.insertStyleElement(e);return{update:function r(r){t(n,e,r)},remove:function e(){r(n)}}}e.exports=n},44589:function(e){/* istanbul ignore next  */function t(e,t){if(t.styleSheet){t.styleSheet.cssText=e}else{while(t.firstChild){t.removeChild(t.firstChild)}t.appendChild(document.createTextNode(e))}}e.exports=t},56096:function(e,t,r){e.exports=r.p+"js/images/3d-d74232c4.png"},67149:function(e,t,r){e.exports=r.p+"js/images/black-and-white-a1d197c0.png"},41834:function(e,t,r){e.exports=r.p+"js/images/concept-ad427b25.png"},42336:function(e,t,r){e.exports=r.p+"js/images/dreamy-72eab497.png"},79608:function(e,t,r){e.exports=r.p+"js/images/filmic-91db8802.png"},4359:function(e,t,r){e.exports=r.p+"js/images/illustration-19074f05.png"},88013:function(e,t,r){e.exports=r.p+"js/images/neon-bfde2ac7.png"},53192:function(e,t,r){e.exports=r.p+"js/images/none-2088b52b.jpg"},48366:function(e,t,r){e.exports=r.p+"js/images/painting-db63dd8a.png"},39071:function(e,t,r){e.exports=r.p+"js/images/photo-7d69e05e.png"},43666:function(e,t,r){e.exports=r.p+"js/images/retro-bcc8eda3.png"},46572:function(e,t,r){e.exports=r.p+"js/images/sketch-319bbedf.png"},62756:function(e,t,r){e.exports=r.p+"js/images/not-found-2x-5f9812df.webp"},78535:function(e,t,r){e.exports=r.p+"js/images/not-found-4fa6c9c0.webp"},86056:function(e,t,r){e.exports=r.p+"js/images/generate-image-2x-7d387dcf.webp"},95781:function(e,t,r){e.exports=r.p+"js/images/generate-image-3e5f50a6.webp"},19646:function(e,t,r){// EXPORTS
r.d(t,{Z:()=>/* binding */T});// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_object_spread.js
var n=r(7409);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_object_spread_props.js
var a=r(99282);// EXTERNAL MODULE: ./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js
var i=r(35944);// EXTERNAL MODULE: ./assets/react/v3/entries/course-builder/contexts/CourseBuilderSlotContext.tsx
var o=r(75537);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_define_property.js
var s=r(27412);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/Alert.tsx
var d=r(87056);// EXTERNAL MODULE: external "React"
var l=r(87363);// CONCATENATED MODULE: ./assets/react/v3/shared/components/ComponentErrorBoundary.tsx
class c extends l.Component{static getDerivedStateFromError(e){return{hasError:true,error:e}}componentDidCatch(e,t){var r,n;// eslint-disable-next-line no-console
console.error("Error rendering ".concat(this.props.componentName,":"),e,t);(r=(n=this.props).onError)===null||r===void 0?void 0:r.call(n,e,t)}render(){var{children:e,fallback:t,showError:r}=this.props;var{hasError:n,error:a}=this.state;if(n){if(t){return t}return r?/*#__PURE__*/(0,i/* .jsxs */.BX)(d/* ["default"] */.Z,{type:"danger",children:["Error rendering ",this.props.componentName,": ",(a===null||a===void 0?void 0:a.message)||(a===null||a===void 0?void 0:a.toString())]}):null}return e}constructor(...e){super(...e),(0,s._)(this,"state",{hasError:false,error:null})}}(0,s._)(c,"defaultProps",{showError:true,componentName:"Component"});/* ESM default export */const u=c;// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/components/ContentRenderer.tsx
var v=e=>{var{component:t}=e;return/*#__PURE__*/(0,i/* .jsx */.tZ)(u,{componentName:"content",children:t})};/* ESM default export */const f=v;// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormCheckbox.tsx
var p=r(60274);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormDateInput.tsx
var h=r(42456);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormFileUploader.tsx
var m=r(86774);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormImageInput.tsx
var g=r(44226);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormInput.tsx
var b=r(78150);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormRadioGroup.tsx
var _=r(90097);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormSelectInput.tsx
var y=r(82325);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormSwitch.tsx
var w=r(92386);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormTextareaInput.tsx
var x=r(3473);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormTimeInput.tsx
var Z=r(47778);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormVideoInput.tsx + 2 modules
var k=r(69789);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormWPEditor.tsx
var E=r(3960);// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var C=r(52293);// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/components/FieldRenderer.tsx
var M=e=>{var{name:t,label:r,buttonText:o,helpText:s,infoText:l,placeholder:c,type:v,options:f,defaultValue:M,rules:W,form:D}=e;// eslint-disable-next-line @typescript-eslint/no-explicit-any
var T=e=>{var C=(()=>{switch(v){case"text":return/*#__PURE__*/(0,i/* .jsx */.tZ)(b/* ["default"] */.Z,(0,a._)((0,n._)({},e),{label:r,placeholder:c,helpText:s}));case"number":return/*#__PURE__*/(0,i/* .jsx */.tZ)(b/* ["default"] */.Z,(0,a._)((0,n._)({},e),{type:"number",label:r,placeholder:c,helpText:s}));case"password":return/*#__PURE__*/(0,i/* .jsx */.tZ)(b/* ["default"] */.Z,(0,a._)((0,n._)({},e),{type:"password",label:r,placeholder:c,helpText:s}));case"textarea":return/*#__PURE__*/(0,i/* .jsx */.tZ)(x/* ["default"] */.Z,(0,a._)((0,n._)({},e),{label:r,placeholder:c,helpText:s}));case"select":return/*#__PURE__*/(0,i/* .jsx */.tZ)(y/* ["default"] */.Z,(0,a._)((0,n._)({},e),{label:r,options:f||[],placeholder:c,helpText:s}));case"radio":return/*#__PURE__*/(0,i/* .jsx */.tZ)(_/* ["default"] */.Z,(0,a._)((0,n._)({},e),{label:r,options:f||[]}));case"checkbox":return/*#__PURE__*/(0,i/* .jsx */.tZ)(p/* ["default"] */.Z,(0,a._)((0,n._)({},e),{label:r}));case"switch":return/*#__PURE__*/(0,i/* .jsx */.tZ)(w/* ["default"] */.Z,(0,a._)((0,n._)({},e),{label:r,helpText:s}));case"date":return/*#__PURE__*/(0,i/* .jsx */.tZ)(h/* ["default"] */.Z,(0,a._)((0,n._)({},e),{label:r,placeholder:c,helpText:s}));case"time":return/*#__PURE__*/(0,i/* .jsx */.tZ)(Z/* ["default"] */.Z,(0,a._)((0,n._)({},e),{label:r,placeholder:c,helpText:s}));case"image":return/*#__PURE__*/(0,i/* .jsx */.tZ)(g/* ["default"] */.Z,(0,a._)((0,n._)({},e),{label:r,buttonText:o,helpText:s,infoText:l}));case"video":return/*#__PURE__*/(0,i/* .jsx */.tZ)(k/* ["default"] */.Z,(0,a._)((0,n._)({},e),{label:r,buttonText:o,helpText:s,infoText:l}));case"uploader":return/*#__PURE__*/(0,i/* .jsx */.tZ)(m/* ["default"] */.Z,(0,a._)((0,n._)({},e),{label:r,buttonText:o,helpText:s}));case"WPEditor":return/*#__PURE__*/(0,i/* .jsx */.tZ)(E/* ["default"] */.Z,(0,a._)((0,n._)({},e),{label:r,placeholder:c,helpText:s}));default:return/*#__PURE__*/(0,i/* .jsxs */.BX)(d/* ["default"] */.Z,{type:"danger",children:["Unsupported field type: ",v]})}})();return/*#__PURE__*/(0,i/* .jsx */.tZ)(u,{componentName:"field ".concat(t),onError:(e,r)=>{// eslint-disable-next-line no-console
console.warn("Field ".concat(t," failed to render:"),{error:e,errorInfo:r})},children:C})};return/*#__PURE__*/(0,i/* .jsx */.tZ)(C/* .Controller */.Qr,{name:t,control:D.control,defaultValue:M!==null&&M!==void 0?M:"",rules:W,render:e=>T(e)})};/* ESM default export */const W=M;// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/components/CourseBuilderSlot.tsx
var D=e=>{var{section:t,namePrefix:r,form:s}=e;var{fields:d,contents:l}=(0,o/* .useCourseBuilderSlot */.l)();var c=()=>{var e=t.split(".");// eslint-disable-next-line @typescript-eslint/no-explicit-any
var r=d;for(var n of e){if(!r[n])return[];r=r[n]}return Array.isArray(r)?r:[]};var u=()=>{var e=t.split(".");// eslint-disable-next-line @typescript-eslint/no-explicit-any
var r=l;for(var n of e){if(!r[n])return[];r=r[n]}return Array.isArray(r)?r:[]};return/*#__PURE__*/(0,i/* .jsxs */.BX)(i/* .Fragment */.HY,{children:[c().map(e=>/*#__PURE__*/(0,i/* .jsx */.tZ)(W,(0,a._)((0,n._)({form:s},e),{name:r?"".concat(r).concat(e.name):e.name}),e.name)),u().map((e,t)=>{var{component:r}=e;return/*#__PURE__*/(0,i/* .jsx */.tZ)(f,{component:r},t)})]})};/* ESM default export */const T=D},29422:function(e,t,r){r.d(t,{Z:()=>U});/* ESM import */var n=r(76150);/* ESM import */var a=r(7409);/* ESM import */var i=r(99282);/* ESM import */var o=r(58865);/* ESM import */var s=r(35944);/* ESM import */var d=r(70917);/* ESM import */var l=r(38003);/* ESM import */var c=/*#__PURE__*/r.n(l);/* ESM import */var u=r(32449);/* ESM import */var v=r(87363);/* ESM import */var f=/*#__PURE__*/r.n(v);/* ESM import */var p=r(52293);/* ESM import */var h=r(19398);/* ESM import */var m=r(2613);/* ESM import */var g=r(60274);/* ESM import */var b=r(42456);/* ESM import */var _=r(78150);/* ESM import */var y=r(82325);/* ESM import */var w=r(3473);/* ESM import */var x=r(47778);/* ESM import */var Z=r(34039);/* ESM import */var k=r(74053);/* ESM import */var E=r(60860);/* ESM import */var C=r(76487);/* ESM import */var M=r(37861);/* ESM import */var W=r(41819);/* ESM import */var D=r(90406);/* ESM import */var T=r(11908);/* ESM import */var S=r(14784);/* ESM import */var B=r(17106);/* ESM import */var N=r(29535);/* ESM import */var I=r(22456);/* ESM import */var O=r(25481);function A(){var e=(0,o._)(["\n      box-shadow: ",";\n    "]);A=function t(){return e};return e}var L=(0,S/* .getCourseId */.z)();var z=e=>{var{onCancel:t,data:r,topicId:o,meetingId:d}=e;var{ref:c,isScrolling:f}=(0,W/* .useIsScrolling */.a)({defaultValue:true});var E=(0,T/* .useGoogleMeetDetailsQuery */.i0)(d?d:"",o?o:"");var C=r!==null&&r!==void 0?r:E.data;var S,N,A;var z=(0,M/* .useFormWithGlobalError */.O)({defaultValues:{meeting_name:(S=C===null||C===void 0?void 0:C.post_title)!==null&&S!==void 0?S:"",meeting_summary:(N=C===null||C===void 0?void 0:C.post_content)!==null&&N!==void 0?N:"",meeting_start_date:(C===null||C===void 0?void 0:C.meeting_data.start_datetime)?(0,u["default"])(new Date(C.meeting_data.start_datetime),k/* .DateFormats.yearMonthDay */.E_.yearMonthDay):"",meeting_start_time:(C===null||C===void 0?void 0:C.meeting_data.start_datetime)?(0,u["default"])(new Date(C.meeting_data.start_datetime),k/* .DateFormats.hoursMinutes */.E_.hoursMinutes):"",meeting_end_date:(C===null||C===void 0?void 0:C.meeting_data.end_datetime)?(0,u["default"])(new Date(C.meeting_data.end_datetime),k/* .DateFormats.yearMonthDay */.E_.yearMonthDay):"",meeting_end_time:(C===null||C===void 0?void 0:C.meeting_data.end_datetime)?(0,u["default"])(new Date(C.meeting_data.end_datetime),k/* .DateFormats.hoursMinutes */.E_.hoursMinutes):"",meeting_timezone:(A=C===null||C===void 0?void 0:C.meeting_data.timezone)!==null&&A!==void 0?A:"",meeting_enrolledAsAttendee:(C===null||C===void 0?void 0:C.meeting_data.attendees)==="Yes"},shouldFocusError:true,mode:"onChange"});var U=(0,D/* .useSaveGoogleMeetMutation */.pH)();var J=Z/* .tutorConfig.timezones */.y.timezones;var j=Object.keys(J).map(e=>({label:J[e],value:e}));var P=e=>(0,n._)(function*(){if(!L){return}var r=yield U.mutateAsync((0,i._)((0,a._)({},C&&{"post-id":Number(C.ID),"event-id":C.meeting_data.id},o&&{topic_id:o}),{course_id:L,meeting_title:e.meeting_name,meeting_summary:e.meeting_summary,meeting_start_date:e.meeting_start_date,meeting_start_time:e.meeting_start_time,meeting_end_date:e.meeting_end_date,meeting_end_time:e.meeting_end_time,meeting_attendees_enroll_students:e.meeting_enrolledAsAttendee?"Yes":"No",meeting_timezone:e.meeting_timezone,attendees:e.meeting_enrolledAsAttendee?"Yes":"No"}));if(r.status_code===200||r.status_code===201){t();z.reset()}})();(0,v.useEffect)(()=>{if((0,I/* .isDefined */.$K)(C)){z.reset({meeting_name:C.post_title,meeting_summary:C.post_content,meeting_start_date:C.meeting_data.start_datetime?(0,u["default"])(new Date(C.meeting_data.start_datetime),k/* .DateFormats.yearMonthDay */.E_.yearMonthDay):"",meeting_start_time:C.meeting_data.start_datetime?(0,u["default"])(new Date(C.meeting_data.start_datetime),k/* .DateFormats.hoursMinutes */.E_.hoursMinutes):"",meeting_end_date:C.meeting_data.end_datetime?(0,u["default"])(new Date(C.meeting_data.end_datetime),k/* .DateFormats.yearMonthDay */.E_.yearMonthDay):"",meeting_end_time:C.meeting_data.end_datetime?(0,u["default"])(new Date(C.meeting_data.end_datetime),k/* .DateFormats.hoursMinutes */.E_.hoursMinutes):"",meeting_timezone:C.meeting_data.timezone,meeting_enrolledAsAttendee:C.meeting_data.attendees==="Yes"})}var e=setTimeout(()=>{z.setFocus("meeting_name")},250);return()=>{clearTimeout(e)};// eslint-disable-next-line react-hooks/exhaustive-deps
},[C]);return/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:R.container,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:R.formWrapper,ref:c,children:/*#__PURE__*/(0,s/* .jsxs */.BX)(B/* ["default"] */.Z,{when:!E.isLoading,fallback:/*#__PURE__*/(0,s/* .jsx */.tZ)(m/* .LoadingOverlay */.fz,{}),children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"meeting_name",control:z.control,rules:{required:(0,l.__)("Name is required","tutor")},render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(_/* ["default"] */.Z,(0,i._)((0,a._)({},e),{label:(0,l.__)("Meeting Name","tutor"),placeholder:(0,l.__)("Enter meeting name","tutor")}))}),/*#__PURE__*/(0,s/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"meeting_summary",control:z.control,rules:{required:(0,l.__)("Summary is required","tutor")},render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(w/* ["default"] */.Z,(0,i._)((0,a._)({},e),{label:(0,l.__)("Meeting Summary","tutor"),placeholder:(0,l.__)("Enter meeting summary","tutor"),rows:3,enableResize:true}))}),/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:R.meetingDateTimeWrapper,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:R.dateLabel,children:(0,l.__)("Meeting Start Date","tutor")}),/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:R.meetingDateTime,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"meeting_start_date",control:z.control,rules:{required:(0,l.__)("Start date is required","tutor"),validate:O/* .invalidDateRule */.Ek},render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(b/* ["default"] */.Z,(0,i._)((0,a._)({},e),{placeholder:(0,l.__)("Start date","tutor"),disabledBefore:new Date().toISOString()}))}),/*#__PURE__*/(0,s/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"meeting_start_time",control:z.control,rules:{required:(0,l.__)("Start time is required","tutor"),validate:O/* .invalidTimeRule */.xB},render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(x/* ["default"] */.Z,(0,i._)((0,a._)({},e),{placeholder:(0,l.__)("Start time","tutor")}))})]})]}),/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:R.meetingDateTimeWrapper,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:R.dateLabel,children:(0,l.__)("Meeting End Date","tutor")}),/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:R.meetingDateTime,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"meeting_end_date",control:z.control,rules:{required:(0,l.__)("End date is required","tutor"),validate:{invalidDate:O/* .invalidDateRule */.Ek,checkEndDate:e=>{var t=z.watch("meeting_start_date");var r=e;if(t&&r){return new Date(t)>new Date(r)?(0,l.__)("End date should be greater than start date","tutor"):undefined}return undefined}},deps:["meeting_start_date"]},render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(b/* ["default"] */.Z,(0,i._)((0,a._)({},e),{placeholder:(0,l.__)("End date","tutor"),disabledBefore:z.watch("meeting_start_date")||new Date().toISOString()}))}),/*#__PURE__*/(0,s/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"meeting_end_time",control:z.control,rules:{required:(0,l.__)("End time is required","tutor"),validate:{invalidTime:O/* .invalidTimeRule */.xB,checkEndTime:e=>{var t=z.watch("meeting_start_date");var r=z.watch("meeting_start_time");var n=z.watch("meeting_end_date");var a=e;if(t&&n&&r&&a){return new Date("".concat(t," ").concat(r))>new Date("".concat(n," ").concat(a))?(0,l.__)("End time should be greater than start time","tutor"):undefined}return undefined}},deps:["meeting_start_time","meeting_start_date","meeting_end_date"]},render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(x/* ["default"] */.Z,(0,i._)((0,a._)({},e),{placeholder:(0,l.__)("End time","tutor")}))})]})]}),/*#__PURE__*/(0,s/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"meeting_timezone",control:z.control,rules:{required:(0,l.__)("Timezone is required","tutor")},render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(y/* ["default"] */.Z,(0,i._)((0,a._)({},e),{label:(0,l.__)("Timezone","tutor"),placeholder:(0,l.__)("Select timezone","tutor"),options:j,selectOnFocus:true,isSearchable:true}))}),/*#__PURE__*/(0,s/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"meeting_enrolledAsAttendee",control:z.control,render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(g/* ["default"] */.Z,(0,i._)((0,a._)({},e),{label:(0,l.__)("Add enrolled students as attendees","tutor")}))})]})}),/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:R.buttonWrapper({isScrolling:f}),children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{variant:"text",size:"small",onClick:t,children:(0,l.__)("Cancel","tutor")}),/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{"data-cy":"save-google-meeting",loading:U.isPending,variant:"primary",size:"small",onClick:z.handleSubmit(P),children:C||d?(0,l.__)("Update Meeting","tutor"):(0,l.__)("Create Meeting","tutor")})]})]})};/* ESM default export */const U=z;var R={container:/*#__PURE__*/(0,d/* .css */.iv)(N/* .styleUtils.display.flex */.i.display.flex("column"),"    background:",E/* .colorTokens.background.white */.Jv.background.white,";padding-block:",E/* .spacing["12"] */.W0["12"],";border-radius:",E/* .borderRadius.card */.E0.card,";box-shadow:",E/* .shadow.popover */.AF.popover,";",C/* .typography.caption */.c.caption("regular"),";* > label{font-size:",E/* .fontSize["15"] */.JB["15"],";color:",E/* .colorTokens.text.title */.Jv.text.title,";}"),formWrapper:/*#__PURE__*/(0,d/* .css */.iv)(N/* .styleUtils.display.flex */.i.display.flex("column"),";",N/* .styleUtils.overflowYAuto */.i.overflowYAuto,";padding-inline:",E/* .spacing["12"] */.W0["12"],";padding-bottom:",E/* .spacing["8"] */.W0["8"],";gap:",E/* .spacing["12"] */.W0["12"],";height:400px;"),dateLabel:/*#__PURE__*/(0,d/* .css */.iv)(C/* .typography.caption */.c.caption("medium"),"    color:",E/* .colorTokens.text.title */.Jv.text.title,";"),meetingDateTimeWrapper:/*#__PURE__*/(0,d/* .css */.iv)(N/* .styleUtils.display.flex */.i.display.flex("column"),"    gap:",E/* .spacing["6"] */.W0["6"],";"),meetingDateTime:/*#__PURE__*/(0,d/* .css */.iv)(N/* .styleUtils.display.flex */.i.display.flex(),"    justify-content:space-between;align-items:flex-start;gap:",E/* .spacing["6"] */.W0["6"],";"),buttonWrapper:e=>{var{isScrolling:t=false}=e;return/*#__PURE__*/(0,d/* .css */.iv)(N/* .styleUtils.display.flex */.i.display.flex(),"    padding-top:",E/* .spacing["8"] */.W0["8"],";padding-inline:",E/* .spacing["12"] */.W0["12"],";justify-content:flex-end;gap:",E/* .spacing["8"] */.W0["8"],";z-index:",E/* .zIndex.positive */.W5.positive,";",t&&(0,d/* .css */.iv)(A(),E/* .shadow.scrollable */.AF.scrollable))}}},81632:function(e,t,r){r.d(t,{Z:()=>z});/* ESM import */var n=r(76150);/* ESM import */var a=r(7409);/* ESM import */var i=r(99282);/* ESM import */var o=r(58865);/* ESM import */var s=r(35944);/* ESM import */var d=r(70917);/* ESM import */var l=r(38003);/* ESM import */var c=/*#__PURE__*/r.n(l);/* ESM import */var u=r(32449);/* ESM import */var v=r(87363);/* ESM import */var f=/*#__PURE__*/r.n(v);/* ESM import */var p=r(52293);/* ESM import */var h=r(19398);/* ESM import */var m=r(2613);/* ESM import */var g=r(42456);/* ESM import */var b=r(78150);/* ESM import */var _=r(3473);/* ESM import */var y=r(47778);/* ESM import */var w=r(60860);/* ESM import */var x=r(76487);/* ESM import */var Z=r(37861);/* ESM import */var k=r(90406);/* ESM import */var E=r(11908);/* ESM import */var C=r(14784);/* ESM import */var M=r(82325);/* ESM import */var W=r(34039);/* ESM import */var D=r(74053);/* ESM import */var T=r(17106);/* ESM import */var S=r(41819);/* ESM import */var B=r(29535);/* ESM import */var N=r(22456);/* ESM import */var I=r(25481);function O(){var e=(0,o._)(["\n      box-shadow: ",";\n    "]);O=function t(){return e};return e}var A=(0,C/* .getCourseId */.z)();var L=e=>{var{onCancel:t,data:r,meetingHost:o,topicId:d,meetingId:c}=e;var f;var{ref:w,isScrolling:x}=(0,S/* .useIsScrolling */.a)({defaultValue:true});var C=(0,E/* .useZoomMeetingDetailsQuery */.qY)(c?c:"",d?d:"");var B=r!==null&&r!==void 0?r:C.data;var O,L;var z=(L=(O=B===null||B===void 0?void 0:B.meeting_starts_at)!==null&&O!==void 0?O:B===null||B===void 0?void 0:B.meeting_data.start_time)!==null&&L!==void 0?L:"";var R,J,j,P,X,F;var Q=(0,Z/* .useFormWithGlobalError */.O)({defaultValues:{meeting_name:(R=B===null||B===void 0?void 0:B.post_title)!==null&&R!==void 0?R:"",meeting_summary:(J=B===null||B===void 0?void 0:B.post_content)!==null&&J!==void 0?J:"",meeting_date:z?(0,u["default"])(new Date(z),D/* .DateFormats.yearMonthDay */.E_.yearMonthDay):"",meeting_time:z?(0,u["default"])(new Date(z),D/* .DateFormats.hoursMinutes */.E_.hoursMinutes):"",meeting_duration:(B===null||B===void 0?void 0:B.meeting_data.duration)?String(B===null||B===void 0?void 0:B.meeting_data.duration):"40",meeting_duration_unit:(j=B===null||B===void 0?void 0:B.meeting_data.duration_unit)!==null&&j!==void 0?j:"min",meeting_timezone:(P=B===null||B===void 0?void 0:B.meeting_data.timezone)!==null&&P!==void 0?P:"",auto_recording:(X=B===null||B===void 0?void 0:(f=B.meeting_data.settings)===null||f===void 0?void 0:f.auto_recording)!==null&&X!==void 0?X:"none",meeting_password:(F=B===null||B===void 0?void 0:B.meeting_data.password)!==null&&F!==void 0?F:"",meeting_host:Object.keys(o).length===1?Object.keys(o)[0]:""},shouldFocusError:true,mode:"onChange"});var Y=(0,k/* .useSaveZoomMeetingMutation */.Z4)();var q=W/* .tutorConfig.timezones */.y.timezones;var H=Object.keys(q).map(e=>({label:q[e],value:e}));var G=Object.keys(o).map(e=>({label:o[e],value:e}));var K=e=>(0,n._)(function*(){if(!A){return}var r=yield Y.mutateAsync((0,i._)((0,a._)({},B&&{meeting_id:Number(B.ID)},d&&{topic_id:Number(d)}),{course_id:A,meeting_title:e.meeting_name,meeting_summary:e.meeting_summary,meeting_date:e.meeting_date,meeting_time:e.meeting_time,meeting_duration:Number(e.meeting_duration),meeting_duration_unit:e.meeting_duration_unit,meeting_timezone:e.meeting_timezone,auto_recording:e.auto_recording,meeting_password:e.meeting_password,click_form:d?"course_builder":"metabox",meeting_host:e.meeting_host}));if(r.data){t();Q.reset()}})();(0,v.useEffect)(()=>{if((0,N/* .isDefined */.$K)(B)){var e;var t;Q.reset({meeting_name:B.post_title,meeting_summary:B.post_content,meeting_date:z?(0,u["default"])(new Date(z),D/* .DateFormats.yearMonthDay */.E_.yearMonthDay):"",meeting_time:z?(0,u["default"])(new Date(z),D/* .DateFormats.hoursMinutes */.E_.hoursMinutes):"",meeting_duration:String(B.meeting_data.duration),meeting_duration_unit:B.meeting_data.duration_unit,meeting_timezone:B.meeting_data.timezone,auto_recording:(t=(e=B.meeting_data.settings)===null||e===void 0?void 0:e.auto_recording)!==null&&t!==void 0?t:"none",meeting_password:B.meeting_data.password,meeting_host:B.meeting_data.host_id})}var r=setTimeout(()=>{Q.setFocus("meeting_name")},250);return()=>{clearTimeout(r)};// eslint-disable-next-line react-hooks/exhaustive-deps
},[B]);return/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:U.container,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:U.formWrapper,ref:w,children:/*#__PURE__*/(0,s/* .jsxs */.BX)(T/* ["default"] */.Z,{when:!C.isLoading,fallback:/*#__PURE__*/(0,s/* .jsx */.tZ)(m/* .LoadingOverlay */.fz,{}),children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"meeting_name",control:Q.control,rules:{required:(0,l.__)("Name is required","tutor")},render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(b/* ["default"] */.Z,(0,i._)((0,a._)({},e),{label:(0,l.__)("Meeting Name","tutor"),placeholder:(0,l.__)("Enter meeting name","tutor")}))}),/*#__PURE__*/(0,s/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"meeting_summary",control:Q.control,rules:{required:(0,l.__)("Summary is required","tutor")},render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(_/* ["default"] */.Z,(0,i._)((0,a._)({},e),{label:(0,l.__)("Meeting Summary","tutor"),placeholder:(0,l.__)("Enter meeting summary","tutor"),rows:3,enableResize:true}))}),/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:U.meetingDateTimeWrapper,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"meeting_date",control:Q.control,rules:{required:(0,l.__)("Date is required","tutor")},render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(g/* ["default"] */.Z,(0,i._)((0,a._)({},e),{label:(0,l.__)("Meeting Date","tutor"),placeholder:(0,l.__)("Enter meeting date","tutor"),disabledBefore:new Date().toISOString()}))}),/*#__PURE__*/(0,s/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"meeting_time",control:Q.control,rules:{required:(0,l.__)("Time is required","tutor"),validate:I/* .invalidTimeRule */.xB},render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(y/* ["default"] */.Z,(0,i._)((0,a._)({},e),{placeholder:(0,l.__)("Start time","tutor")}))}),/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:U.meetingTimeWrapper,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"meeting_duration",control:Q.control,rules:{required:(0,l.__)("Duration is required","tutor")},render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(b/* ["default"] */.Z,(0,i._)((0,a._)({},e),{label:(0,l.__)("Meeting Duration","tutor"),placeholder:(0,l.__)("Duration","tutor"),type:"number",selectOnFocus:true}))}),/*#__PURE__*/(0,s/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"meeting_duration_unit",control:Q.control,rules:{required:(0,l.__)("Duration unit is required","tutor")},render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(M/* ["default"] */.Z,(0,i._)((0,a._)({},e),{label:/*#__PURE__*/(0,s/* .jsx */.tZ)("span",{children:" "}),options:[{label:(0,l.__)("Minutes","tutor"),value:"min"},{label:(0,l.__)("Hours","tutor"),value:"hr"}]}))})]})]}),/*#__PURE__*/(0,s/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"meeting_timezone",control:Q.control,rules:{required:(0,l.__)("Timezone is required","tutor")},render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(M/* ["default"] */.Z,(0,i._)((0,a._)({},e),{label:(0,l.__)("Timezone","tutor"),placeholder:(0,l.__)("Select timezone","tutor"),options:H,selectOnFocus:true,isSearchable:true}))}),/*#__PURE__*/(0,s/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"auto_recording",control:Q.control,rules:{required:(0,l.__)("Auto recording is required","tutor")},render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(M/* ["default"] */.Z,(0,i._)((0,a._)({},e),{label:(0,l.__)("Auto Recording","tutor"),placeholder:(0,l.__)("Select auto recording option","tutor"),options:[{label:(0,l.__)("No recordings","tutor"),value:"none"},{label:(0,l.__)("Local","tutor"),value:"local"},{label:(0,l.__)("Cloud","tutor"),value:"cloud"}]}))}),/*#__PURE__*/(0,s/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"meeting_password",control:Q.control,rules:{required:(0,l.__)("Password is required","tutor")},render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(b/* ["default"] */.Z,(0,i._)((0,a._)({},e),{label:(0,l.__)("Meeting Password","tutor"),placeholder:(0,l.__)("Enter meeting password","tutor"),type:"password",isPassword:true}))}),/*#__PURE__*/(0,s/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"meeting_host",control:Q.control,rules:{required:(0,l.__)("Meeting host is required","tutor")},render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(M/* ["default"] */.Z,(0,i._)((0,a._)({},e),{label:(0,l.__)("Meeting Host","tutor"),placeholder:(0,l.__)("Enter meeting host","tutor"),options:G,disabled:(0,N/* .isDefined */.$K)(B),selectOnFocus:true,isSearchable:true}))})]})}),/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:U.buttonWrapper({isScrolling:x}),children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{variant:"text",size:"small",onClick:t,children:(0,l.__)("Cancel","tutor")}),/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{"data-cy":"save-zoom-meeting",loading:Y.isPending,variant:"primary",size:"small",onClick:Q.handleSubmit(K),children:B||c?(0,l.__)("Update Meeting","tutor"):(0,l.__)("Create Meeting","tutor")})]})]})};/* ESM default export */const z=L;var U={container:/*#__PURE__*/(0,d/* .css */.iv)(B/* .styleUtils.display.flex */.i.display.flex("column"),"    background:",w/* .colorTokens.background.white */.Jv.background.white,";padding-block:",w/* .spacing["12"] */.W0["12"],";border-radius:",w/* .borderRadius.card */.E0.card,";box-shadow:",w/* .shadow.popover */.AF.popover,";",x/* .typography.caption */.c.caption("regular"),";* > label{font-size:",w/* .fontSize["15"] */.JB["15"],";color:",w/* .colorTokens.text.title */.Jv.text.title,";}"),formWrapper:/*#__PURE__*/(0,d/* .css */.iv)(B/* .styleUtils.display.flex */.i.display.flex("column"),";",B/* .styleUtils.overflowYAuto */.i.overflowYAuto,";padding-inline:",w/* .spacing["12"] */.W0["12"],";padding-bottom:",w/* .spacing["8"] */.W0["8"],";gap:",w/* .spacing["12"] */.W0["12"],";height:400px;"),meetingDateTimeWrapper:/*#__PURE__*/(0,d/* .css */.iv)(B/* .styleUtils.display.flex */.i.display.flex("column"),"    gap:",w/* .spacing["6"] */.W0["6"],";"),meetingTimeWrapper:/*#__PURE__*/(0,d/* .css */.iv)(B/* .styleUtils.display.flex */.i.display.flex(),"    justify-content:space-between;align-items:flex-start;gap:",w/* .spacing["6"] */.W0["6"],";"),buttonWrapper:e=>{var{isScrolling:t=false}=e;return/*#__PURE__*/(0,d/* .css */.iv)(B/* .styleUtils.display.flex */.i.display.flex(),"    padding-top:",w/* .spacing["8"] */.W0["8"],";padding-inline:",w/* .spacing["12"] */.W0["12"],";justify-content:flex-end;gap:",w/* .spacing["8"] */.W0["8"],";z-index:",w/* .zIndex.positive */.W5.positive,";",t&&(0,d/* .css */.iv)(O(),w/* .shadow.scrollable */.AF.scrollable))}}},5558:function(e,t,r){r.d(t,{Z:()=>h});/* ESM import */var n=r(58865);/* ESM import */var a=r(35944);/* ESM import */var i=r(70917);/* ESM import */var o=r(89250);/* ESM import */var s=r(19398);/* ESM import */var d=r(26815);/* ESM import */var l=r(74053);/* ESM import */var c=r(60860);/* ESM import */var u=r(76487);/* ESM import */var v=r(17106);function f(){var e=(0,n._)(["\n      transform: rotate(180deg);\n    "]);f=function t(){return e};return e}var p=e=>{var{title:t,backUrl:r,rightButton:n,isExternalUrl:i}=e;var c=(0,o/* .useNavigate */.s0)();var u=()=>{if(r){if(i){window.location.href=r;return}c(r)}else{c(-1)}};return/*#__PURE__*/(0,a/* .jsxs */.BX)("div",{css:m.wrapper,children:[/*#__PURE__*/(0,a/* .jsxs */.BX)("div",{css:m.left,children:[/*#__PURE__*/(0,a/* .jsx */.tZ)(v/* ["default"] */.Z,{when:r,children:/*#__PURE__*/(0,a/* .jsx */.tZ)(s/* ["default"] */.Z,{variant:"text",buttonCss:m.button({isRTL:l/* .isRTL */.dZ}),onClick:u,children:/*#__PURE__*/(0,a/* .jsx */.tZ)(d/* ["default"] */.Z,{name:"back",width:32,height:32})})}),/*#__PURE__*/(0,a/* .jsx */.tZ)("h6",{css:m.title,children:t})]}),n]})};/* ESM default export */const h=p;var m={wrapper:/*#__PURE__*/(0,i/* .css */.iv)("display:flex;align-items:center;justify-content:space-between;"),left:/*#__PURE__*/(0,i/* .css */.iv)("display:flex;align-items:center;gap:",c/* .spacing["16"] */.W0["16"],";"),button:e=>{var{isRTL:t}=e;return/*#__PURE__*/(0,i/* .css */.iv)("padding:0;border-radius:",c/* .borderRadius["2"] */.E0["2"],";",t&&(0,i/* .css */.iv)(f()))},title:/*#__PURE__*/(0,i/* .css */.iv)(u/* .typography.heading6 */.c.heading6("medium"),";")}},88311:function(e,t,r){r.d(t,{Z:()=>y});/* ESM import */var n=r(7409);/* ESM import */var a=r(99282);/* ESM import */var i=r(35944);/* ESM import */var o=r(20203);/* ESM import */var s=r(89459);/* ESM import */var d=r(19398);/* ESM import */var l=r(26815);/* ESM import */var c=r(74053);/* ESM import */var u=r(60860);/* ESM import */var v=r(17106);/* ESM import */var f=r(93283);/* ESM import */var p=r(70917);/* ESM import */var h=r(38003);/* ESM import */var m=/*#__PURE__*/r.n(h);/* ESM import */var g=r(52293);/* ESM import */var b=r(89250);var _=e=>{var{styleModifier:t}=e;var{steps:r,setSteps:m}=(0,s/* .useCourseNavigator */.O)();var _=(0,b/* .useNavigate */.s0)();var y=(0,f/* .useCurrentPath */.J)(o/* ["default"] */.Z);var x=(0,g/* .useFormContext */.Gc)();var Z=r.findIndex(e=>e.path===y);var k=Math.max(-1,Z-1);var E=Math.min(r.length,Z+1);var C=r[k];var M=r[E];var W=x.watch("post_title");var D=()=>{m(e=>{return e.map((e,t)=>{if(t===Z){return(0,a._)((0,n._)({},e),{isActive:false})}if(t===k){return(0,a._)((0,n._)({},e),{isActive:true})}return e})});_(C.path)};var T=()=>{m(e=>{return e.map((e,t)=>{if(t===Z){return(0,a._)((0,n._)({},e),{isActive:false})}if(t===E){return(0,a._)((0,n._)({},e),{isActive:true})}return e})});_(M.path)};return/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:[w.wrapper,t],children:[/*#__PURE__*/(0,i/* .jsx */.tZ)(v/* ["default"] */.Z,{when:Z>0,children:/*#__PURE__*/(0,i/* .jsx */.tZ)(d/* ["default"] */.Z,{variant:"tertiary",iconPosition:"right",size:"small",onClick:D,buttonCss:/*#__PURE__*/(0,p/* .css */.iv)("padding:",u/* .spacing["4"] */.W0["4"],";svg{color:",u/* .colorTokens.icon["default"] */.Jv.icon["default"],";}"),disabled:k<0,children:/*#__PURE__*/(0,i/* .jsx */.tZ)(l/* ["default"] */.Z,{name:!c/* .isRTL */.dZ?"chevronLeft":"chevronRight",height:24,width:24})})}),/*#__PURE__*/(0,i/* .jsx */.tZ)(v/* ["default"] */.Z,{when:Z<r.length-1&&W,children:/*#__PURE__*/(0,i/* .jsx */.tZ)(d/* ["default"] */.Z,{variant:"tertiary",icon:/*#__PURE__*/(0,i/* .jsx */.tZ)(l/* ["default"] */.Z,{name:!c/* .isRTL */.dZ?"chevronRight":"chevronLeft",height:24,width:24}),iconPosition:"right",size:"small",onClick:T,buttonCss:/*#__PURE__*/(0,p/* .css */.iv)("padding:",u/* .spacing["4"] */.W0["4"]," ",u/* .spacing["4"] */.W0["4"]," ",u/* .spacing["4"] */.W0["4"]," ",u/* .spacing["12"] */.W0["12"],";svg{color:",u/* .colorTokens.icon["default"] */.Jv.icon["default"],";}"),disabled:!W||E>=r.length,children:(0,h.__)("Next","tutor")})})]})};/* ESM default export */const y=_;var w={wrapper:/*#__PURE__*/(0,p/* .css */.iv)("width:100%;display:flex;justify-content:end;height:32px;align-items:center;gap:",u/* .spacing["16"] */.W0["16"],";")}},53765:function(e,t,r){// ESM COMPAT FLAG
r.r(t);// EXPORTS
r.d(t,{"default":()=>/* binding */ts});// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_object_spread.js
var n=r(7409);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_object_spread_props.js
var a=r(99282);// EXTERNAL MODULE: ./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js
var i=r(35944);// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var o=r(70917);// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
var s=r(99469);// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/useIsFetching.js
var d=r(33233);// EXTERNAL MODULE: external "wp.i18n"
var l=r(38003);// EXTERNAL MODULE: external "React"
var c=r(87363);var u=/*#__PURE__*/r.n(c);// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var v=r(52293);// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var f=r(89250);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_tagged_template_literal.js
var p=r(58865);// EXTERNAL MODULE: ./assets/react/v3/shared/config/styles.ts
var h=r(60860);// EXTERNAL MODULE: ./assets/react/v3/shared/config/typography.ts
var m=r(76487);// EXTERNAL MODULE: ./assets/react/v3/shared/controls/Show.tsx
var g=r(17106);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/SVGIcon.tsx
var b=r(26815);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/Tooltip.tsx
var _=r(58982);// CONCATENATED MODULE: ./assets/react/v3/shared/atoms/Box.tsx
function y(){var e=(0,p._)(["\n      border: 1px solid ",";\n    "]);y=function t(){return e};return e}function w(){var e=(0,p._)(["\n      border-bottom: 1px solid ",";\n      padding: "," ",";\n    "]);w=function t(){return e};return e}var x=/*#__PURE__*/u().forwardRef((e,t)=>{var{children:r,className:n,bordered:a=false,wrapperCss:o}=e;return/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{ref:t,className:n,css:[E.wrapper(a),o],children:r})});x.displayName="Box";var Z=/*#__PURE__*/u().forwardRef((e,t)=>{var{children:r,className:n,separator:a=false,tooltip:o}=e;return/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{ref:t,className:n,css:E.title(a),children:[/*#__PURE__*/(0,i/* .jsx */.tZ)("span",{children:r}),/*#__PURE__*/(0,i/* .jsx */.tZ)(g/* ["default"] */.Z,{when:o,children:/*#__PURE__*/(0,i/* .jsx */.tZ)(_/* ["default"] */.Z,{content:o,children:/*#__PURE__*/(0,i/* .jsx */.tZ)(b/* ["default"] */.Z,{name:"info",width:20,height:20})})})]})});Z.displayName="BoxTitle";var k=/*#__PURE__*/u().forwardRef((e,t)=>{var{children:r,className:n}=e;return/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{ref:t,className:n,css:E.subtitle,children:/*#__PURE__*/(0,i/* .jsx */.tZ)("span",{children:r})})});k.displayName="BoxSubtitle";var E={wrapper:e=>/*#__PURE__*/(0,o/* .css */.iv)("background-color:",h/* .colorTokens.background.white */.Jv.background.white,";border-radius:",h/* .borderRadius["8"] */.E0["8"],";padding:",h/* .spacing["12"] */.W0["12"]," ",h/* .spacing["20"] */.W0["20"]," ",h/* .spacing["20"] */.W0["20"],";",e&&(0,o/* .css */.iv)(y(),h/* .colorTokens.stroke["default"] */.Jv.stroke["default"])),title:e=>/*#__PURE__*/(0,o/* .css */.iv)(m/* .typography.body */.c.body("medium"),";color:",h/* .colorTokens.text.title */.Jv.text.title,";display:flex;gap:",h/* .spacing["4"] */.W0["4"],";align-items:center;",e&&(0,o/* .css */.iv)(w(),h/* .colorTokens.stroke.divider */.Jv.stroke.divider,h/* .spacing["12"] */.W0["12"],h/* .spacing["20"] */.W0["20"]),"    & > div{height:20px;svg{color:",h/* .colorTokens.icon.hints */.Jv.icon.hints,";}}& > span{display:inline-block;}"),subtitle:/*#__PURE__*/(0,o/* .css */.iv)(m/* .typography.caption */.c.caption(),";color:",h/* .colorTokens.text.hints */.Jv.text.hints,";")};// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/LoadingSpinner.tsx
var C=r(2613);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/ProBadge.tsx
var M=r(86766);// EXTERNAL MODULE: ./assets/react/v3/shared/molecules/EmptyState.tsx
var W=r(75857);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_object_without_properties.js + 1 modules
var D=r(98848);// EXTERNAL MODULE: ./assets/react/v3/shared/config/constants.ts
var T=r(74053);// EXTERNAL MODULE: ./assets/react/v3/shared/controls/For.tsx
var S=r(36352);// EXTERNAL MODULE: ./assets/react/v3/shared/utils/style-utils.ts
var B=r(29535);// EXTERNAL MODULE: ./assets/react/v3/shared/utils/util.ts + 4 modules
var N=r(34403);// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/useDebounce.ts
var I=r(4867);// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/usePortalPopover.tsx
var O=r(98567);// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/useSelectKeyboardNavigation.ts
var A=r(30633);// EXTERNAL MODULE: ./assets/react/v3/public/images/not-found-2x.webp
var L=r(62756);// EXTERNAL MODULE: ./assets/react/v3/public/images/not-found.webp
var z=r(78535);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormFieldWrapper.tsx
var U=r(84978);// CONCATENATED MODULE: ./assets/react/v3/shared/components/fields/FormCoursePrerequisites.tsx
function R(){var e=(0,p._)(["\n      background-color: ",";\n      border-color: ",";\n    "]);R=function t(){return e};return e}function J(){var e=(0,p._)(["\n        background-color: ",";\n        border-color: ",";\n      "]);J=function t(){return e};return e}var j=e=>{var{field:t,fieldState:r,options:o,onChange:s=N/* .noop */.ZT,handleSearchOnChange:d,label:u,placeholder:v="",disabled:f,readOnly:p,loading:h,isSearchable:_=false,helpText:y}=e;var w;var x=(w=t.value)!==null&&w!==void 0?w:[];var Z=x.map(e=>String(e.id));var k=(0,c.useRef)(null);var[E,M]=(0,c.useState)(false);var[B,R]=(0,c.useState)("");var J=(0,I/* .useDebounce */.N)(B);var j=o.filter(e=>e.title.toLowerCase().includes(J.toLowerCase())&&!Z.includes(String(e.id)));(0,c.useEffect)(()=>{if(d){d(J)}else{// Handle local filter
}},[J,d]);var{triggerRef:P,triggerWidth:F,position:Q,popoverRef:Y}=(0,O/* .usePortalPopover */.l)({isOpen:E,isDropdown:true,dependencies:[j.length]});var{activeIndex:q,setActiveIndex:H}=(0,A/* .useSelectKeyboardNavigation */.U)({options:j.map(e=>({label:e.title,value:e})),isOpen:E,selectedValue:null,onSelect:e=>{t.onChange([...x,e.value]);s([...x,e.value]);M(false);R("")},onClose:()=>{M(false);R("");R("")}});var G=e=>{if(Array.isArray(x)){var r=x.filter(t=>t.id!==e);t.onChange(r);s(r)}};(0,c.useEffect)(()=>{if(E&&q>=0&&k.current){k.current.scrollIntoView({block:"nearest",behavior:"smooth"})}},[E,q]);return/*#__PURE__*/(0,i/* .jsx */.tZ)(U/* ["default"] */.Z,{fieldState:r,field:t,label:u,disabled:f,readOnly:p,helpText:y,children:e=>{var{css:r}=e,o=(0,D._)(e,["css"]);return/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:X.mainWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{ref:P,children:/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:X.inputWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:X.leftIcon,children:/*#__PURE__*/(0,i/* .jsx */.tZ)(b/* ["default"] */.Z,{name:"search",width:24,height:24})}),/*#__PURE__*/(0,i/* .jsx */.tZ)("input",(0,a._)((0,n._)({},o),{onClick:e=>{e.stopPropagation();M(e=>!e)},onKeyDown:e=>{if(e.key==="Enter"){e.preventDefault();M(true)}if(e.key==="Tab"){M(false)}},className:"tutor-input-field",css:[r,X.input],autoComplete:"off",readOnly:p||!_,placeholder:v,value:B,onChange:e=>{R(e.target.value)}}))]})}),/*#__PURE__*/(0,i/* .jsx */.tZ)(g/* ["default"] */.Z,{when:x.length>0,fallback:/*#__PURE__*/(0,i/* .jsx */.tZ)(g/* ["default"] */.Z,{when:!h,fallback:/*#__PURE__*/(0,i/* .jsx */.tZ)(C/* .LoadingSection */.g4,{}),children:/*#__PURE__*/(0,i/* .jsx */.tZ)(W/* ["default"] */.Z,{size:"small",emptyStateImage:z,emptyStateImage2x:L,imageAltText:(0,l.__)("Illustration of a no course selected","tutor"),title:(0,l.__)("No course selected","tutor"),description:(0,l.__)("Select a course to add as a prerequisite.","tutor")})}),children:/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:X.courseList,children:/*#__PURE__*/(0,i/* .jsx */.tZ)(S/* ["default"] */.Z,{each:x,children:(e,t)=>/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:X.courseCard({onPopover:false}),children:[/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:X.imageWrapper,children:/*#__PURE__*/(0,i/* .jsx */.tZ)("img",{src:e.image,alt:e.title,css:X.image})}),/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:X.cardContent,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)("span",{css:X.cardTitle,children:e.title}),/*#__PURE__*/(0,i/* .jsx */.tZ)("p",{css:m/* .typography.tiny */.c.tiny(),children:e.id})]}),/*#__PURE__*/(0,i/* .jsx */.tZ)("button",{type:"button",css:X.removeButton,"data-visually-hidden":true,onClick:()=>G(e.id),children:/*#__PURE__*/(0,i/* .jsx */.tZ)(b/* ["default"] */.Z,{name:"times",width:14,height:14})})]},t)})})}),/*#__PURE__*/(0,i/* .jsx */.tZ)(O/* .Portal */.h,{isOpen:E,onClickOutside:()=>{M(false);R("")},onEscape:()=>{M(false);R("")},children:/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:[X.optionsWrapper,{[T/* .isRTL */.dZ?"right":"left"]:Q.left,top:Q.top,maxWidth:F}],ref:Y,children:/*#__PURE__*/(0,i/* .jsx */.tZ)("ul",{css:[X.options],children:/*#__PURE__*/(0,i/* .jsx */.tZ)(g/* ["default"] */.Z,{when:j.length>0,fallback:/*#__PURE__*/(0,i/* .jsx */.tZ)("li",{css:X.emptyOption,children:/*#__PURE__*/(0,i/* .jsx */.tZ)("p",{children:(0,l.__)("No courses found","tutor")})}),children:/*#__PURE__*/(0,i/* .jsx */.tZ)(S/* ["default"] */.Z,{each:j,children:(e,r)=>/*#__PURE__*/(0,i/* .jsx */.tZ)("li",{ref:q===r?k:null,children:/*#__PURE__*/(0,i/* .jsxs */.BX)("button",{type:"button",css:X.courseCard({onPopover:true,isActive:q===r}),onClick:()=>{t.onChange([...x,e]);s([...x,e]);M(false);R("")},onMouseOver:()=>H(r),onMouseLeave:()=>r!==q&&H(-1),onFocus:()=>H(r),"aria-selected":q===r,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:X.imageWrapper,children:/*#__PURE__*/(0,i/* .jsx */.tZ)("img",{src:e.image,alt:e.title,css:X.image})}),/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:X.cardContent,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)("span",{css:X.cardTitle,children:e.title}),/*#__PURE__*/(0,i/* .jsx */.tZ)("p",{css:m/* .typography.tiny */.c.tiny(),children:e.id})]})]})},e.id)})})})})})]})}})};/* ESM default export */const P=j;var X={mainWrapper:/*#__PURE__*/(0,o/* .css */.iv)("width:100%;"),inputWrapper:/*#__PURE__*/(0,o/* .css */.iv)("width:100%;display:flex;justify-content:space-between;align-items:center;position:relative;"),leftIcon:/*#__PURE__*/(0,o/* .css */.iv)("position:absolute;left:",h/* .spacing["8"] */.W0["8"],";top:",h/* .spacing["8"] */.W0["8"],";color:",h/* .colorTokens.icon["default"] */.Jv.icon["default"],";display:flex;"),input:/*#__PURE__*/(0,o/* .css */.iv)(m/* .typography.body */.c.body(),";width:100%;padding-right:",h/* .spacing["32"] */.W0["32"],";padding-left:",h/* .spacing["36"] */.W0["36"],";",B/* .styleUtils.textEllipsis */.i.textEllipsis,";border:1px solid ",h/* .colorTokens.stroke["default"] */.Jv.stroke["default"],";&.tutor-input-field{padding-right:",h/* .spacing["32"] */.W0["32"],";padding-left:",h/* .spacing["36"] */.W0["36"],";}"),courseList:/*#__PURE__*/(0,o/* .css */.iv)(B/* .styleUtils.display.flex */.i.display.flex("column"),"    gap:",h/* .spacing["8"] */.W0["8"],";max-height:256px;height:100%;margin-top:",h/* .spacing["8"] */.W0["8"],";",B/* .styleUtils.overflowYAuto */.i.overflowYAuto,";"),optionsWrapper:/*#__PURE__*/(0,o/* .css */.iv)("position:absolute;width:100%;"),options:/*#__PURE__*/(0,o/* .css */.iv)("z-index:",h/* .zIndex.dropdown */.W5.dropdown,";background-color:",h/* .colorTokens.background.white */.Jv.background.white,";list-style-type:none;box-shadow:",h/* .shadow.popover */.AF.popover,";padding:",h/* .spacing["4"] */.W0["4"]," 0;margin:0;max-height:400px;border-radius:",h/* .borderRadius["6"] */.E0["6"],";",B/* .styleUtils.overflowYAuto */.i.overflowYAuto,";"),courseCard:e=>{var{onPopover:t=false,isActive:r=false}=e;return/*#__PURE__*/(0,o/* .css */.iv)(B/* .styleUtils.resetButton */.i.resetButton,";width:100%;cursor:",t?"pointer":"default",";position:relative;padding:",h/* .spacing["8"] */.W0["8"],";border:1px solid transparent;border-radius:",h/* .borderRadius.card */.E0.card,";display:grid;grid-template-columns:76px 1fr;gap:",h/* .spacing["10"] */.W0["10"],";align-items:center;background-color:",h/* .colorTokens.background.white */.Jv.background.white,";[data-visually-hidden]{opacity:0;}",r&&(0,o/* .css */.iv)(R(),h/* .colorTokens.background.hover */.Jv.background.hover,h/* .colorTokens.stroke["default"] */.Jv.stroke["default"]),"    &:hover{background-color:",h/* .colorTokens.background.hover */.Jv.background.hover,";",!t&&(0,o/* .css */.iv)(J(),h/* .colorTokens.background.white */.Jv.background.white,h/* .colorTokens.stroke["default"] */.Jv.stroke["default"]),"      [data-visually-hidden]{opacity:1;}}",h/* .Breakpoint.smallTablet */.Uo.smallTablet,"{[data-visually-hidden]{opacity:1;}}")},imageWrapper:/*#__PURE__*/(0,o/* .css */.iv)("height:42px;"),image:/*#__PURE__*/(0,o/* .css */.iv)("width:100%;height:100%;border-radius:",h/* .borderRadius["4"] */.E0["4"],";object-fit:cover;object-position:center;"),cardContent:/*#__PURE__*/(0,o/* .css */.iv)("display:flex;flex-direction:column;"),cardTitle:/*#__PURE__*/(0,o/* .css */.iv)(m/* .typography.small */.c.small("medium"),";",B/* .styleUtils.text.ellipsis */.i.text.ellipsis(1),";"),removeButton:/*#__PURE__*/(0,o/* .css */.iv)(B/* .styleUtils.resetButton */.i.resetButton,";position:absolute;top:50%;right:",h/* .spacing["8"] */.W0["8"],";transform:translateY(-50%);display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:",h/* .borderRadius.circle */.E0.circle,";background:",h/* .colorTokens.background.white */.Jv.background.white,";&:focus,&:active,&:hover{background:",h/* .colorTokens.background.white */.Jv.background.white,";}svg{color:",h/* .colorTokens.icon["default"] */.Jv.icon["default"],";}:hover{svg{color:",h/* .colorTokens.icon.hover */.Jv.icon.hover,";}}:focus{box-shadow:",h/* .shadow.focus */.AF.focus,";}:focus-visible{opacity:1;}"),emptyOption:/*#__PURE__*/(0,o/* .css */.iv)(m/* .typography.caption */.c.caption("medium"),";padding:",h/* .spacing["8"] */.W0["8"],";text-align:center;")};// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormFileUploader.tsx
var F=r(86774);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormInputWithContent.tsx
var Q=r(35159);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormTextareaInput.tsx
var Y=r(3473);// EXTERNAL MODULE: ./assets/react/v3/shared/molecules/Tabs.tsx
var q=r(63189);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/Button.tsx
var H=r(19398);// EXTERNAL MODULE: ./assets/react/v3/shared/components/modals/Modal.tsx
var G=r(63260);// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/components/modals/CertificatePreviewModal.tsx
var K=e=>{var{certificates:t,selectedCertificate:r,currentCertificate:n,onSelectCertificate:a,closeModal:o}=e;var[s,d]=(0,c.useState)(r);var[u,v]=(0,c.useState)(n);var f=(0,c.useRef)(null);var p=t.findIndex(e=>e.key===u.key);var h=Math.max(-1,p-1);var m=Math.min(t.length,p+1);(0,c.useEffect)(()=>{var e=e=>{if(e.key==="ArrowLeft"){w("previous")}else if(e.key==="ArrowRight"){w("next")}else if(e.key==="Enter"){y(u)}else if(e.key==="Escape"){o({action:"CLOSE"})}};window.addEventListener("keydown",e);return()=>{window.removeEventListener("keydown",e)};// eslint-disable-next-line react-hooks/exhaustive-deps
},[p,t]);(0,c.useEffect)(()=>{if(f.current){f.current.focus()}},[]);var y=e=>{if(e.key===s){return}a(e);d(e.key)};var w=e=>{if(e==="previous"&&p>0){v(t[h])}else if(e==="next"&&p<t.length-1){v(t[m])}};return/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:$.container,children:[u&&/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:$.content,children:/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:$.certificateAndActions,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)("img",{css:$.certificate,src:u.preview_src,alt:u.name}),/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:$.actionsWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)(_/* ["default"] */.Z,{placement:"right",content:(0,l.__)("Close","tutor"),children:/*#__PURE__*/(0,i/* .jsx */.tZ)("button",{ref:f,type:"button",css:[$.actionButton,$.closeButton],onClick:()=>{o({action:"CLOSE"})},children:/*#__PURE__*/(0,i/* .jsx */.tZ)(b/* ["default"] */.Z,{name:"cross",width:40,height:40})})}),/*#__PURE__*/(0,i/* .jsx */.tZ)(g/* ["default"] */.Z,{when:u.edit_url,children:e=>/*#__PURE__*/(0,i/* .jsx */.tZ)(_/* ["default"] */.Z,{placement:"right",content:(0,l.__)("Edit in Certificate Builder","tutor"),children:/*#__PURE__*/(0,i/* .jsx */.tZ)("button",{type:"button",css:[$.actionButton,$.editButton],onClick:()=>{window.open(e,"_blank","noopener")},children:/*#__PURE__*/(0,i/* .jsx */.tZ)(b/* ["default"] */.Z,{name:"edit",width:40,height:40})})})})]})]})}),/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:$.navigatorWrapper,children:/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:$.navigator,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)("button",{type:"button",css:[$.actionButton,$.navigatorButton],onClick:()=>w("previous"),disabled:h<0,children:/*#__PURE__*/(0,i/* .jsx */.tZ)(b/* ["default"] */.Z,{name:!T/* .isRTL */.dZ?"chevronLeft":"chevronRight",width:40,height:40})}),/*#__PURE__*/(0,i/* .jsx */.tZ)(H/* ["default"] */.Z,{variant:"primary",onClick:()=>{y(u);o({action:"CONFIRM"})},disabled:s===u.key,children:s===u.key?(0,l.__)("Selected","tutor"):(0,l.__)("Select","tutor")}),/*#__PURE__*/(0,i/* .jsx */.tZ)("button",{type:"button",css:[$.actionButton,$.navigatorButton],onClick:()=>w("next"),disabled:m>t.length-1,children:/*#__PURE__*/(0,i/* .jsx */.tZ)(b/* ["default"] */.Z,{name:!T/* .isRTL */.dZ?"chevronRight":"chevronLeft",width:40,height:40})})]})})]})};/* ESM default export */const V=K;var $={container:/*#__PURE__*/(0,o/* .css */.iv)("width:100%;height:100%;",B/* .styleUtils.display.flex */.i.display.flex("column"),";justify-content:center;align-items:center;gap:",h/* .spacing["16"] */.W0["16"],";position:relative;"),content:/*#__PURE__*/(0,o/* .css */.iv)(B/* .styleUtils.display.flex */.i.display.flex("column"),";justify-content:center;align-items:center;object-fit:contain;max-width:80vw;max-height:calc(100vh - 200px);width:100%;height:100%;"),certificateAndActions:/*#__PURE__*/(0,o/* .css */.iv)("position:relative;",B/* .styleUtils.display.flex */.i.display.flex(),";justify-content:center;align-items:center;gap:",h/* .spacing["20"] */.W0["20"],";height:100%;"),certificate:/*#__PURE__*/(0,o/* .css */.iv)("width:100%;height:100%;object-fit:contain;"),actionsWrapper:/*#__PURE__*/(0,o/* .css */.iv)("position:absolute;top:0;right:-",h/* .spacing["56"] */.W0["56"],";bottom:0;",B/* .styleUtils.display.flex */.i.display.flex("column"),";justify-content:space-between;",h/* .Breakpoint.smallMobile */.Uo.smallMobile,"{right:-",h/* .spacing["32"] */.W0["32"],";}"),actionButton:/*#__PURE__*/(0,o/* .css */.iv)("place-self:center start;",B/* .styleUtils.resetButton */.i.resetButton,";display:inline-flex;align-items:center;justify-content:center;&:focus,&:active,&:hover{background:none;}svg{color:",h/* .colorTokens.action.secondary["default"] */.Jv.action.secondary["default"],";transition:color 0.3s ease-in-out;}"),closeButton:/*#__PURE__*/(0,o/* .css */.iv)("place-self:center start;"),editButton:/*#__PURE__*/(0,o/* .css */.iv)("place-self:center end;"),navigatorWrapper:/*#__PURE__*/(0,o/* .css */.iv)(),navigator:/*#__PURE__*/(0,o/* .css */.iv)(B/* .styleUtils.display.flex */.i.display.flex(),";gap:",h/* .spacing["16"] */.W0["16"],";justify-content:center;background:",h/* .colorTokens.background.white */.Jv.background.white,";padding:",h/* .spacing["12"] */.W0["12"],";border-radius:",h/* .borderRadius["8"] */.E0["8"],";"),navigatorButton:/*#__PURE__*/(0,o/* .css */.iv)("svg{color:",h/* .colorTokens.icon["default"] */.Jv.icon["default"],";}:disabled{cursor:not-allowed;svg{color:",h/* .colorTokens.icon.hints */.Jv.icon.hints,";}}")};// EXTERNAL MODULE: ./assets/react/v3/entries/course-builder/utils/utils.ts
var ee=r(14784);// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/components/additional/CertificateCard.tsx
function et(){var e=(0,p._)(["\n      [data-overlay] {\n        background: ",";\n        opacity: 0.1;\n      }\n    "]);et=function t(){return e};return e}var er=(0,ee/* .getCourseId */.z)();var en=e=>{var{selectedCertificate:t="",data:r,orientation:n,onSelectCertificate:a}=e;var{showModal:o}=(0,G/* .useModal */.d)();var d=(0,s/* .useQueryClient */.NL)();var c=d.getQueryData(["CourseDetails",er]);var u,v;var f=(v=((u=c===null||c===void 0?void 0:c.course_certificates_templates)!==null&&u!==void 0?u:[]).filter(e=>e.orientation===n&&(r.is_default?e.is_default===true:e.is_default===false)))!==null&&v!==void 0?v:[];return/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:ei.wrapper({isSelected:t===r.key,isLandScape:n==="landscape"}),children:[/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{"data-overlay":true,onClick:()=>a(r.key),onKeyDown:e=>{if(e.key==="Enter"||e.key===" "){a(r.key)}}}),/*#__PURE__*/(0,i/* .jsx */.tZ)(g/* ["default"] */.Z,{when:r.preview_src,fallback:/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:ei.emptyCard,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)(b/* ["default"] */.Z,{name:"outlineNone",width:49,height:49}),/*#__PURE__*/(0,i/* .jsx */.tZ)("span",{children:(0,l.__)("None","tutor")})]}),children:e=>{return/*#__PURE__*/(0,i/* .jsx */.tZ)("img",{css:ei.certificateImage,src:e,alt:r.name})}}),/*#__PURE__*/(0,i/* .jsx */.tZ)(g/* ["default"] */.Z,{when:r.preview_src||r.key!==t,children:/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{"data-footer-actions":true,css:ei.footerWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)(g/* ["default"] */.Z,{when:r.preview_src,children:/*#__PURE__*/(0,i/* .jsx */.tZ)(H/* ["default"] */.Z,{variant:"secondary",isOutlined:true,size:"small",onClick:()=>{o({component:V,props:{certificates:f,currentCertificate:r,selectedCertificate:t,onSelectCertificate:e=>{a(e.key)}}})},children:(0,l.__)("Preview","tutor")})}),/*#__PURE__*/(0,i/* .jsx */.tZ)(g/* ["default"] */.Z,{when:r.key!==t,children:/*#__PURE__*/(0,i/* .jsx */.tZ)(H/* ["default"] */.Z,{variant:"primary",size:"small",onClick:()=>a(r.key),children:(0,l.__)("Select","tutor")})})]})}),/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:ei.checkIcon({isSelected:t===r.key}),children:/*#__PURE__*/(0,i/* .jsx */.tZ)(b/* ["default"] */.Z,{name:"checkFilledWhite",width:32,height:32})})]})};/* ESM default export */const ea=en;var ei={wrapper:e=>{var{isSelected:t=false,isLandScape:r=false}=e;return/*#__PURE__*/(0,o/* .css */.iv)(B/* .styleUtils.centeredFlex */.i.centeredFlex,";background-color:",h/* .colorTokens.surface.courseBuilder */.Jv.surface.courseBuilder,";max-height:",r?"154px":"217px",";min-height:",r?"154px":"217px",";height:100%;position:relative;outline:",t?"2px":"1px"," solid ",t?h/* .colorTokens.stroke.brand */.Jv.stroke.brand:h/* .colorTokens.stroke["default"] */.Jv.stroke["default"],";border-radius:",h/* .borderRadius.card */.E0.card,";transition:all 0.15s ease-in-out;[data-overlay]{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:",h/* .borderRadius.card */.E0.card,";}",t&&(0,o/* .css */.iv)(et(),h/* .colorTokens.brand.blue */.Jv.brand.blue),"    &:hover,&:focus-within{border-color:",h/* .colorTokens.stroke.brand */.Jv.stroke.brand,";[data-footer-actions]{opacity:1;}[data-overlay]{background:",h/* .colorTokens.brand.blue */.Jv.brand.blue,";opacity:0.1;}}")},emptyCard:/*#__PURE__*/(0,o/* .css */.iv)(B/* .styleUtils.flexCenter */.i.flexCenter(),";flex-direction:column;height:100%;width:100%;gap:",h/* .spacing["8"] */.W0["8"],";",m/* .typography.caption */.c.caption("medium"),";svg{color:",h/* .colorTokens.color.black["20"] */.Jv.color.black["20"],";}"),certificateImage:/*#__PURE__*/(0,o/* .css */.iv)("width:100%;height:100%;object-fit:contain;border-radius:",h/* .borderRadius.card */.E0.card,";"),footerWrapper:/*#__PURE__*/(0,o/* .css */.iv)("opacity:0;position:absolute;left:0px;right:0px;bottom:0px;",B/* .styleUtils.flexCenter */.i.flexCenter(),";align-items:center;gap:",h/* .spacing["4"] */.W0["4"],";padding-block:",h/* .spacing["8"] */.W0["8"],";background:",h/* .colorTokens.bg.white */.Jv.bg.white,";border-bottom-left-radius:",h/* .borderRadius.card */.E0.card,";border-bottom-right-radius:",h/* .borderRadius.card */.E0.card,";"),checkIcon:e=>{var{isSelected:t=false}=e;return/*#__PURE__*/(0,o/* .css */.iv)("opacity:",t?1:0,";position:absolute;top:-14px;right:-14px;border-bottom-left-radius:",h/* .borderRadius.card */.E0.card,";svg{color:",h/* .colorTokens.icon.brand */.Jv.icon.brand,";}")}};// EXTERNAL MODULE: ./assets/react/v3/shared/config/config.ts
var eo=r(34039);// CONCATENATED MODULE: ./assets/react/v3/public/images/pro-placeholders/certificates-2x.webp
const es=r.p+"js/images/certificates-2x-22b8cc4e.webp";// CONCATENATED MODULE: ./assets/react/v3/public/images/pro-placeholders/certificates.webp
const ed=r.p+"js/images/certificates-4d7368cf.webp";// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/components/additional/CertificateEmptyState.tsx
var el=!!eo/* .tutorConfig.tutor_pro_url */.y.tutor_pro_url;var ec=()=>{if(el){return null}return/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:ev.emptyState,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)("img",{css:ev.placeholderImage,src:ed,srcSet:"".concat(ed," 1x, ").concat(es," 2x"),alt:(0,l.__)("Pro Placeholder","tutor")}),/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:ev.featureAndActionWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)("h5",{css:ev.title,children:(0,l.__)("Award Students with Custom Certificates","tutor")}),/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:ev.featuresWithTitle,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{children:(0,l.__)("Celebrate success with personalized certificates. Recognize student achievements with unique designs that inspire and motivate students.","tutor")}),/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:ev.features,children:[/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:ev.feature,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)(b/* ["default"] */.Z,{name:"materialCheck",width:20,height:20,style:ev.checkIcon}),/*#__PURE__*/(0,i/* .jsx */.tZ)("span",{children:(0,l.__)("Design personalized certificates that highlight their accomplishments and boost their confidence.","tutor")})]}),/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:ev.feature,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)(b/* ["default"] */.Z,{name:"materialCheck",width:20,height:20,style:ev.checkIcon}),/*#__PURE__*/(0,i/* .jsx */.tZ)("span",{children:(0,l.__)("Inspire them with a touch of credibility and recognition tailored just for them.","tutor")})]})]})]})]}),/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:ev.actionsButton,children:/*#__PURE__*/(0,i/* .jsx */.tZ)(H/* ["default"] */.Z,{variant:"primary",icon:/*#__PURE__*/(0,i/* .jsx */.tZ)(b/* ["default"] */.Z,{name:"crown",width:24,height:24}),onClick:()=>{window.open(eo/* ["default"].TUTOR_PRICING_PAGE */.Z.TUTOR_PRICING_PAGE,"_blank","noopener")},children:(0,l.__)("Get Tutor LMS Pro","tutor")})})]})};/* ESM default export */const eu=ec;var ev={emptyState:/*#__PURE__*/(0,o/* .css */.iv)("padding-bottom:",h/* .spacing["12"] */.W0["12"],";",B/* .styleUtils.display.flex */.i.display.flex("column"),"    gap:",h/* .spacing["20"] */.W0["20"],";"),placeholderImage:e=>{var{notFound:t}=e;return/*#__PURE__*/(0,o/* .css */.iv)("max-width:100%;width:100%;height:",t?"189px":"312px;",";object-fit:cover;object-position:center;border-radius:",h/* .borderRadius["6"] */.E0["6"],";")},featureAndActionWrapper:/*#__PURE__*/(0,o/* .css */.iv)(B/* .styleUtils.display.flex */.i.display.flex("column"),"    align-items:center;gap:",h/* .spacing["12"] */.W0["12"],";"),title:/*#__PURE__*/(0,o/* .css */.iv)(m/* .typography.heading5 */.c.heading5("medium"),"    color:",h/* .colorTokens.text.primary */.Jv.text.primary,";"),featuresWithTitle:/*#__PURE__*/(0,o/* .css */.iv)(B/* .styleUtils.display.flex */.i.display.flex("column"),"    max-width:500px;width:100%;gap:",h/* .spacing["8"] */.W0["8"],";",m/* .typography.body */.c.body("regular"),";"),features:/*#__PURE__*/(0,o/* .css */.iv)(B/* .styleUtils.display.flex */.i.display.flex("column"),"    gap:",h/* .spacing["8"] */.W0["8"],";"),feature:/*#__PURE__*/(0,o/* .css */.iv)(B/* .styleUtils.display.flex */.i.display.flex(),"    gap:",h/* .spacing["12"] */.W0["12"],";color:",h/* .colorTokens.text.title */.Jv.text.title,";text-wrap:pretty;"),checkIcon:/*#__PURE__*/(0,o/* .css */.iv)("flex-shrink:0;color:",h/* .colorTokens.text.success */.Jv.text.success,";"),actionsButton:/*#__PURE__*/(0,o/* .css */.iv)(B/* .styleUtils.flexCenter */.i.flexCenter(),"    margin-top:",h/* .spacing["4"] */.W0["4"],";")};// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/components/additional/Certificate.tsx
function ef(){var e=(0,p._)(["\n      grid-template-columns: 1fr;\n      place-items: center;\n    "]);ef=function t(){return e};return e}var ep=(0,ee/* .getCourseId */.z)();var eh=!!eo/* .tutorConfig.tutor_pro_url */.y.tutor_pro_url;var em=(0,N/* .isAddonEnabled */.ro)(T/* .Addons.TUTOR_CERTIFICATE */.AO.TUTOR_CERTIFICATE);var eg=e=>{var{isSidebarVisible:t}=e;var r=(0,s/* .useQueryClient */.NL)();var n=r.getQueryData(["CourseDetails",ep]);var a;var d=(a=n===null||n===void 0?void 0:n.course_certificates_templates)!==null&&a!==void 0?a:[];var u=d.filter(e=>e.is_default);var f=(0,v/* .useFormContext */.Gc)();var p=f.watch("tutor_course_certificate_template");var[y,w]=(0,c.useState)("templates");var[x,Z]=(0,c.useState)("landscape");var[k,E]=(0,c.useState)(p);var C=d.some(e=>e.orientation==="landscape"&&(y==="templates"?e.is_default:!e.is_default));var M=d.some(e=>e.orientation==="portrait"&&(y==="templates"?e.is_default:!e.is_default));(0,c.useEffect)(()=>{if(d.length){if(u.length===0){w("custom_certificates")}var e=d.some(e=>e.orientation==="landscape");if(!e&&x==="landscape"){Z("portrait")}}if(p==="none"){E(p);return}var t=d.find(e=>e.key===p);if(t){if(x!==t.orientation){Z(t.orientation)}w(t.is_default?"templates":"custom_certificates");E(t.key)}// eslint-disable-next-line react-hooks/exhaustive-deps
},[p,d]);var W=d.filter(e=>e.orientation===x&&(y==="templates"?e===null||e===void 0?void 0:e.is_default:!(e===null||e===void 0?void 0:e.is_default)));var D=e=>{w(e);var t=d.some(t=>t.orientation==="landscape"&&(e==="templates"?t.is_default:!t.is_default));var r=d.some(t=>t.orientation==="portrait"&&(e==="templates"?t.is_default:!t.is_default));Z(e=>{if(t&&r||!t&&!r){return e}return t?"landscape":"portrait"})};var N=e=>{Z(e)};var I=e=>{f.setValue("tutor_course_certificate_template",e,{shouldDirty:true});E(e)};var O=[...u.length?[{label:(0,l.__)("Templates","tutor"),value:"templates"}]:[],{label:T/* .CURRENT_VIEWPORT.isAboveSmallMobile */.iM.isAboveSmallMobile?(0,l.__)("Custom Certificates","tutor"):(0,l.__)("Certificates","tutor"),value:"custom_certificates"}];return/*#__PURE__*/(0,i/* .jsx */.tZ)(g/* ["default"] */.Z,{when:eh&&em,fallback:/*#__PURE__*/(0,i/* .jsx */.tZ)(eu,{}),children:/*#__PURE__*/(0,i/* .jsxs */.BX)(g/* ["default"] */.Z,{when:em,children:[/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:e_.tabs,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)(q/* ["default"] */.Z,{wrapperCss:e_.tabsWrapper,tabList:O,activeTab:y,onChange:D}),/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:e_.orientation,children:/*#__PURE__*/(0,i/* .jsxs */.BX)(g/* ["default"] */.Z,{when:C&&M,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)(_/* ["default"] */.Z,{delay:200,content:(0,l.__)("Landscape","tutor"),children:/*#__PURE__*/(0,i/* .jsx */.tZ)("button",{type:"button",css:[B/* .styleUtils.resetButton */.i.resetButton,e_.orientationButton({isActive:x==="landscape"})],onClick:()=>N("landscape"),children:/*#__PURE__*/(0,i/* .jsx */.tZ)(b/* ["default"] */.Z,{name:x==="landscape"?"landscapeFilled":"landscape",width:32,height:32})})}),/*#__PURE__*/(0,i/* .jsx */.tZ)(_/* ["default"] */.Z,{delay:200,content:(0,l.__)("Portrait","tutor"),children:/*#__PURE__*/(0,i/* .jsx */.tZ)("button",{type:"button",css:[B/* .styleUtils.resetButton */.i.resetButton,e_.orientationButton({isActive:x==="portrait"})],onClick:()=>N("portrait"),children:/*#__PURE__*/(0,i/* .jsx */.tZ)(b/* ["default"] */.Z,{name:x==="portrait"?"portraitFilled":"portrait",width:32,height:32})})})]})})]}),/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:e_.certificateWrapper({hasCertificates:W.length>0,isSidebarVisible:t}),children:[/*#__PURE__*/(0,i/* .jsx */.tZ)(g/* ["default"] */.Z,{when:d.length&&(u.length===0||y==="templates"),children:/*#__PURE__*/(0,i/* .jsx */.tZ)(ea,{selectedCertificate:k,onSelectCertificate:I,data:{key:"none",name:(0,l.__)("None","tutor"),preview_src:"",background_src:"",orientation:"landscape",url:""},orientation:x})}),/*#__PURE__*/(0,i/* .jsx */.tZ)(g/* ["default"] */.Z,{when:W.length>0,fallback:/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:e_.emptyState,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)("img",{css:e_.placeholderImage({notFound:true}),src:z,srcSet:"".concat(z," 1x, ").concat(L," 2x"),alt:(0,l.__)("Not Found","tutor")}),/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:e_.featureAndActionWrapper,children:/*#__PURE__*/(0,i/* .jsx */.tZ)("p",{css:/*#__PURE__*/(0,o/* .css */.iv)(m/* .typography.body */.c.body("medium"),"                      color:",h/* .colorTokens.text.subdued */.Jv.text.subdued,";"),children:(0,l.__)("You didn’t create any certificate yet!","tutor")})})]}),children:/*#__PURE__*/(0,i/* .jsx */.tZ)(S/* ["default"] */.Z,{each:W,children:e=>/*#__PURE__*/(0,i/* .jsx */.tZ)(ea,{selectedCertificate:k,onSelectCertificate:I,data:e,orientation:x},e.key)})})]})]})})};/* ESM default export */const eb=eg;var e_={tabs:/*#__PURE__*/(0,o/* .css */.iv)("position:relative;"),tabsWrapper:/*#__PURE__*/(0,o/* .css */.iv)("button{min-width:auto;}"),certificateWrapper:e=>{var{hasCertificates:t,isSidebarVisible:r}=e;return/*#__PURE__*/(0,o/* .css */.iv)("display:grid;grid-template-columns:repeat(",r?3:4,",1fr);gap:",h/* .spacing["16"] */.W0["16"],";padding-top:",h/* .spacing["12"] */.W0["12"],";",!t&&(0,o/* .css */.iv)(ef())," ",h/* .Breakpoint.smallMobile */.Uo.smallMobile,"{grid-template-columns:1fr 1fr;}")},orientation:/*#__PURE__*/(0,o/* .css */.iv)(B/* .styleUtils.display.flex */.i.display.flex(),"    gap:",h/* .spacing["8"] */.W0["8"],";position:absolute;height:32px;right:0;bottom:",h/* .spacing["4"] */.W0["4"],";"),orientationButton:e=>{var{isActive:t}=e;return/*#__PURE__*/(0,o/* .css */.iv)("display:inline-flex;color:",t?h/* .colorTokens.icon.brand */.Jv.icon.brand:h/* .colorTokens.icon["default"] */.Jv.icon["default"],";border-radius:",h/* .borderRadius["4"] */.E0["4"],";&:focus,&:active,&:hover{background:none;color:",t?h/* .colorTokens.icon.brand */.Jv.icon.brand:h/* .colorTokens.icon["default"] */.Jv.icon["default"],";}&:focus-visible{outline:2px solid ",h/* .colorTokens.stroke.brand */.Jv.stroke.brand,";outline-offset:1px;}")},emptyState:/*#__PURE__*/(0,o/* .css */.iv)("padding-block:",h/* .spacing["16"] */.W0["16"]," ",h/* .spacing["12"] */.W0["12"],";",B/* .styleUtils.display.flex */.i.display.flex("column"),"    gap:",h/* .spacing["20"] */.W0["20"],";"),placeholderImage:e=>{var{notFound:t}=e;return/*#__PURE__*/(0,o/* .css */.iv)("max-width:100%;width:100%;height:",t?"189px":"312px;",";object-fit:cover;object-position:center;border-radius:",h/* .borderRadius["6"] */.E0["6"],";")},featureAndActionWrapper:/*#__PURE__*/(0,o/* .css */.iv)(B/* .styleUtils.display.flex */.i.display.flex("column"),"    align-items:center;gap:",h/* .spacing["12"] */.W0["12"],";"),actionsButton:/*#__PURE__*/(0,o/* .css */.iv)(B/* .styleUtils.flexCenter */.i.flexCenter(),"    margin-top:",h/* .spacing["4"] */.W0["4"],";")};// CONCATENATED MODULE: ./assets/react/v3/public/images/pro-placeholders/prerequisites-2x.webp
const ey=r.p+"js/images/prerequisites-2x-dd66630e.webp";// CONCATENATED MODULE: ./assets/react/v3/public/images/pro-placeholders/prerequisites.webp
const ew=r.p+"js/images/prerequisites-63084e41.webp";// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/components/additional/CoursePrerequisitesEmptyState.tsx
var ex=!!eo/* .tutorConfig.tutor_pro_url */.y.tutor_pro_url;var eZ=()=>{return/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:eE.emptyState,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)("img",{css:eE.placeholderImage,src:ew,srcSet:"".concat(ew," 1x, ").concat(ey," 2x"),alt:(0,l.__)("Pro Placeholder","tutor")}),/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:eE.featureAndActionWrapper,children:/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:eE.featuresWithTitle,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{children:(0,l.__)("Guide Students with Course Prerequisites","tutor")}),/*#__PURE__*/(0,i/* .jsx */.tZ)(g/* ["default"] */.Z,{when:!ex,children:/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:eE.features,children:[/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:eE.feature,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)(b/* ["default"] */.Z,{name:"materialCheck",width:20,height:20,style:eE.checkIcon}),/*#__PURE__*/(0,i/* .jsx */.tZ)("span",{children:(0,l.__)("Easily set prerequisites to structure your courses and guide student progress.","tutor")})]}),/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:eE.feature,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)(b/* ["default"] */.Z,{name:"materialCheck",width:20,height:20,style:eE.checkIcon}),/*#__PURE__*/(0,i/* .jsx */.tZ)("span",{children:(0,l.__)("Offer customized learning journeys by setting multiple prerequisites for any course.","tutor")})]})]})})]})})]})};/* ESM default export */const ek=eZ;var eE={emptyState:/*#__PURE__*/(0,o/* .css */.iv)("padding:",h/* .spacing["12"] */.W0["12"]," ",h/* .spacing["12"] */.W0["12"]," ",h/* .spacing["24"] */.W0["24"]," ",h/* .spacing["12"] */.W0["12"],";",B/* .styleUtils.display.flex */.i.display.flex("column"),"    gap:",h/* .spacing["20"] */.W0["20"],";border:1px solid ",h/* .colorTokens.stroke.divider */.Jv.stroke.divider,";border-radius:",h/* .borderRadius.card */.E0.card,";background-color:",h/* .colorTokens.background.white */.Jv.background.white,";"),placeholderImage:/*#__PURE__*/(0,o/* .css */.iv)("max-width:100%;width:100%;height:112px;object-fit:cover;object-position:center;border-radius:",h/* .borderRadius["6"] */.E0["6"],";"),featureAndActionWrapper:/*#__PURE__*/(0,o/* .css */.iv)(B/* .styleUtils.display.flex */.i.display.flex("column"),"    align-items:center;gap:",h/* .spacing["12"] */.W0["12"],";padding-inline:",h/* .spacing["4"] */.W0["4"],";"),featuresWithTitle:/*#__PURE__*/(0,o/* .css */.iv)(B/* .styleUtils.display.flex */.i.display.flex("column"),"    gap:",h/* .spacing["8"] */.W0["8"],";",m/* .typography.caption */.c.caption("medium"),";"),features:/*#__PURE__*/(0,o/* .css */.iv)(B/* .styleUtils.display.flex */.i.display.flex("column"),"    gap:",h/* .spacing["8"] */.W0["8"],";"),feature:/*#__PURE__*/(0,o/* .css */.iv)(m/* .typography.small */.c.small(),";",B/* .styleUtils.display.flex */.i.display.flex(),"    gap:",h/* .spacing["12"] */.W0["12"],";color:",h/* .colorTokens.text.title */.Jv.text.title,";text-wrap:pretty;"),checkIcon:/*#__PURE__*/(0,o/* .css */.iv)("flex-shrink:0;color:",h/* .colorTokens.text.success */.Jv.text.success,";"),actionsButton:/*#__PURE__*/(0,o/* .css */.iv)(B/* .styleUtils.flexCenter */.i.flexCenter(),"    margin-top:",h/* .spacing["4"] */.W0["4"],";")};// EXTERNAL MODULE: ./assets/react/v3/shared/molecules/Popover.tsx
var eC=r(97669);// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/useAnimation.tsx
var eM=r(54354);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_async_to_generator.js
var eW=r(76150);// EXTERNAL MODULE: ./node_modules/date-fns/esm/format/index.js
var eD=r(32449);// EXTERNAL MODULE: ./assets/react/v3/shared/molecules/ConfirmationPopover.tsx
var eT=r(65361);// EXTERNAL MODULE: ./assets/react/v3/entries/course-builder/services/course.ts
var eS=r(90406);// EXTERNAL MODULE: ./assets/react/v3/entries/course-builder/components/additional/meeting/GoogleMeetForm.tsx
var eB=r(29422);// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/components/additional/meeting/GoogleMeetCard.tsx
function eN(){var e=(0,p._)(["\n      background-color: ",";\n      [data-visually-hidden] {\n        opacity: 1;\n      }\n      .date-time {\n        background: none;\n      }\n    "]);eN=function t(){return e};return e}var eI=(0,ee/* .getCourseId */.z)();var eO=e=>{var{data:t,topicId:r}=e;var[n,a]=(0,c.useState)(false);var[o,s]=(0,c.useState)(false);var d=(0,eS/* .useDeleteGoogleMeetMutation */.qN)(String(eI),{"post-id":t.ID,"event-id":t.meeting_data.id});var u=(0,c.useRef)(null);var v=(0,c.useRef)(null);var{meeting_data:f,post_title:p}=t;var m=()=>(0,eW._)(function*(){var e=yield d.mutateAsync();if(e.status_code===200){s(false)}})();var g=(0,eD["default"])(new Date(f.start_datetime),T/* .DateFormats.day */.E_.day);var _=(0,eD["default"])(new Date(f.start_datetime),T/* .DateFormats.month */.E_.month);var y=(0,eD["default"])(new Date(f.start_datetime),T/* .DateFormats.year */.E_.year);var[w,x=""]=(0,eD["default"])(new Date(f.start_datetime),T/* .DateFormats.hoursMinutes */.E_.hoursMinutes).split(" ");return/*#__PURE__*/(0,i/* .jsxs */.BX)(i/* .Fragment */.HY,{children:[/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:eL.card({isPopoverOpen:o||n}),children:[/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:eL.cardTitle,children:p}),/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:eL.cardContent,children:[/*#__PURE__*/(0,i/* .jsxs */.BX)("span",{css:eL.inlineContent,children:[(0,l.__)("Start time","tutor"),/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:eL.hyphen}),/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:eL.meetingDateTime,className:"date-time",children:[/*#__PURE__*/(0,i/* .jsx */.tZ)("span",{css:{fontWeight:h/* .fontWeight.semiBold */.Ue.semiBold},children:"".concat(g," ")}),/*#__PURE__*/(0,i/* .jsx */.tZ)("span",{children:"".concat(_," ")}),/*#__PURE__*/(0,i/* .jsx */.tZ)("span",{css:{fontWeight:h/* .fontWeight.semiBold */.Ue.semiBold},children:"".concat(y,", ")}),/*#__PURE__*/(0,i/* .jsx */.tZ)("span",{css:{fontWeight:h/* .fontWeight.semiBold */.Ue.semiBold},children:"".concat(w," ")}),/*#__PURE__*/(0,i/* .jsx */.tZ)("span",{children:"".concat(x," ")})]})]}),/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:eL.buttonWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)(H/* ["default"] */.Z,{variant:"secondary",size:"small",type:"button",onClick:()=>{window.open(f.meet_link,"_blank","noopener")},children:(0,l.__)("Start Meeting","tutor")}),/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:eL.actions,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)("button",{ref:u,type:"button",css:B/* .styleUtils.actionButton */.i.actionButton,"data-visually-hidden":true,onClick:()=>a(true),children:/*#__PURE__*/(0,i/* .jsx */.tZ)(b/* ["default"] */.Z,{name:"edit",width:24,height:24})}),/*#__PURE__*/(0,i/* .jsx */.tZ)("button",{type:"button",css:B/* .styleUtils.actionButton */.i.actionButton,"data-visually-hidden":true,onClick:()=>{s(true)},ref:v,children:/*#__PURE__*/(0,i/* .jsx */.tZ)(b/* ["default"] */.Z,{name:"delete",width:24,height:24})})]})]})]})]}),/*#__PURE__*/(0,i/* .jsx */.tZ)(eC/* ["default"] */.Z,{isOpen:n,triggerRef:u,closePopover:()=>a(false),maxWidth:"306px",children:/*#__PURE__*/(0,i/* .jsx */.tZ)(eB/* ["default"] */.Z,{data:t,topicId:r,onCancel:()=>{a(false)}})}),/*#__PURE__*/(0,i/* .jsx */.tZ)(eT/* ["default"] */.Z,{isOpen:o,triggerRef:v,closePopover:N/* .noop */.ZT,maxWidth:"258px",title:(0,l.sprintf)((0,l.__)('Delete "%s"',"tutor"),p),message:(0,l.__)("Are you sure you want to delete this meeting? This cannot be undone.","tutor"),animationType:eM/* .AnimationType.slideUp */.ru.slideUp,arrow:"auto",hideArrow:true,isLoading:d.isPending,confirmButton:{text:(0,l.__)("Delete","tutor"),variant:"text",isDelete:true},cancelButton:{text:(0,l.__)("Cancel","tutor"),variant:"text"},onConfirmation:()=>(0,eW._)(function*(){yield m()})(),onCancel:()=>{s(false)}})]})};/* ESM default export */const eA=eO;var eL={card:e=>{var{isPopoverOpen:t=false}=e;return/*#__PURE__*/(0,o/* .css */.iv)(B/* .styleUtils.display.flex */.i.display.flex("column"),"    padding:",h/* .spacing["8"] */.W0["8"]," ",h/* .spacing["12"] */.W0["12"]," ",h/* .spacing["12"] */.W0["12"]," ",h/* .spacing["12"] */.W0["12"],";gap:",h/* .spacing["8"] */.W0["8"],";border-radius:",h/* .borderRadius["6"] */.E0["6"],";transition:background 0.3s ease;[data-visually-hidden]{opacity:0;transition:opacity 0.3s ease-in-out;}",t&&(0,o/* .css */.iv)(eN(),h/* .colorTokens.background.hover */.Jv.background.hover),"    &:hover,&:focus-within{background-color:",h/* .colorTokens.background.hover */.Jv.background.hover,";[data-visually-hidden]{opacity:1;}.date-time{background:none;}}",h/* .Breakpoint.smallTablet */.Uo.smallTablet,"{[data-visually-hidden]{opacity:1;}}")},cardTitle:/*#__PURE__*/(0,o/* .css */.iv)(m/* .typography.caption */.c.caption("medium"),"    color:",h/* .colorTokens.text.title */.Jv.text.title,";"),cardContent:/*#__PURE__*/(0,o/* .css */.iv)(B/* .styleUtils.display.flex */.i.display.flex("column"),"    gap:",h/* .spacing["8"] */.W0["8"],";"),hyphen:/*#__PURE__*/(0,o/* .css */.iv)("width:5px;height:2px;background:",h/* .colorTokens.stroke["default"] */.Jv.stroke["default"],";"),inlineContent:/*#__PURE__*/(0,o/* .css */.iv)(m/* .typography.small */.c.small("regular")," ",B/* .styleUtils.display.flex */.i.display.flex(),"    align-items:center;gap:",h/* .spacing["6"] */.W0["6"],";"),meetingDateTime:/*#__PURE__*/(0,o/* .css */.iv)("padding:",h/* .spacing["4"] */.W0["4"]," ",h/* .spacing["6"] */.W0["6"],";border-radius:",h/* .borderRadius["4"] */.E0["4"],";background:",h/* .colorTokens.background.status.processing */.Jv.background.status.processing,";transition:background 0.3s ease-in-out;"),buttonWrapper:/*#__PURE__*/(0,o/* .css */.iv)(B/* .styleUtils.display.flex */.i.display.flex(),";margin-top:",h/* .spacing["8"] */.W0["8"],";justify-content:space-between;"),actions:/*#__PURE__*/(0,o/* .css */.iv)(B/* .styleUtils.display.flex */.i.display.flex(),";align-items:center;gap:",h/* .spacing["8"] */.W0["8"],";")};// EXTERNAL MODULE: ./assets/react/v3/entries/course-builder/components/additional/meeting/ZoomMeetingForm.tsx
var ez=r(81632);// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/components/additional/meeting/ZoomMeetingCard.tsx
function eU(){var e=(0,p._)(["\n      background-color: ",";\n      [data-visually-hidden] {\n        opacity: 1;\n      }\n      .date-time {\n        background: none;\n      }\n    "]);eU=function t(){return e};return e}var eR=(0,ee/* .getCourseId */.z)();var eJ=e=>{var{data:t,meetingHost:r,topicId:n}=e;var[a,o]=(0,c.useState)(false);var[s,d]=(0,c.useState)(false);var u=(0,eS/* .useDeleteZoomMeetingMutation */.m8)(String(eR));var v=(0,c.useRef)(null);var f=(0,c.useRef)(null);var{ID:p,meeting_data:m,post_title:_,meeting_starts_at:y}=t;var w=()=>(0,eW._)(function*(){var e=yield u.mutateAsync(p);if(e.success){d(false)}})();var x=(0,eD["default"])(new Date(y),T/* .DateFormats.day */.E_.day);var Z=(0,eD["default"])(new Date(y),T/* .DateFormats.month */.E_.month);var k=(0,eD["default"])(new Date(y),T/* .DateFormats.year */.E_.year);var[E,C=""]=(0,eD["default"])(new Date(y),T/* .DateFormats.hoursMinutes */.E_.hoursMinutes).split(" ");return/*#__PURE__*/(0,i/* .jsxs */.BX)(i/* .Fragment */.HY,{children:[/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:eP.card({isPopoverOpen:s||a}),children:[/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:eP.cardTitle,children:_}),/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:eP.cardContent,children:[/*#__PURE__*/(0,i/* .jsxs */.BX)("span",{css:eP.inlineContent,children:[(0,l.__)("Start time","tutor"),/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:eP.hyphen}),/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:eP.meetingDateTime,className:"date-time",children:[/*#__PURE__*/(0,i/* .jsx */.tZ)("span",{css:{fontWeight:h/* .fontWeight.semiBold */.Ue.semiBold},children:"".concat(x," ")}),/*#__PURE__*/(0,i/* .jsx */.tZ)("span",{children:"".concat(Z," ")}),/*#__PURE__*/(0,i/* .jsx */.tZ)("span",{css:{fontWeight:h/* .fontWeight.semiBold */.Ue.semiBold},children:"".concat(k,", ")}),/*#__PURE__*/(0,i/* .jsx */.tZ)("span",{css:{fontWeight:h/* .fontWeight.semiBold */.Ue.semiBold},children:"".concat(E," ")}),/*#__PURE__*/(0,i/* .jsx */.tZ)("span",{children:"".concat(C," ")})]})]}),/*#__PURE__*/(0,i/* .jsx */.tZ)(g/* ["default"] */.Z,{when:m.id,children:/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:eP.inlineContent,children:[(0,l.__)("Meeting Token","tutor"),/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:eP.hyphen}),/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{children:m.id})]})}),/*#__PURE__*/(0,i/* .jsx */.tZ)(g/* ["default"] */.Z,{when:m.password,children:/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:eP.inlineContent,children:[(0,l.__)("Password","tutor"),/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:eP.hyphen}),/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{children:m.password})]})}),/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:eP.buttonWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)(H/* ["default"] */.Z,{variant:"secondary",size:"small",type:"button",onClick:()=>{window.open(m.start_url,"_blank","noopener")},children:(0,l.__)("Start Meeting","tutor")}),/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:eP.actions,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)("button",{ref:v,type:"button",css:B/* .styleUtils.actionButton */.i.actionButton,"data-visually-hidden":true,onClick:()=>{o(true)},children:/*#__PURE__*/(0,i/* .jsx */.tZ)(b/* ["default"] */.Z,{name:"edit",width:24,height:24})}),/*#__PURE__*/(0,i/* .jsx */.tZ)("button",{type:"button",css:B/* .styleUtils.actionButton */.i.actionButton,"data-visually-hidden":true,onClick:()=>d(true),ref:f,children:/*#__PURE__*/(0,i/* .jsx */.tZ)(b/* ["default"] */.Z,{name:"delete",width:24,height:24})})]})]})]})]}),/*#__PURE__*/(0,i/* .jsx */.tZ)(eC/* ["default"] */.Z,{isOpen:a,triggerRef:v,closePopover:()=>o(false),maxWidth:"306px",children:/*#__PURE__*/(0,i/* .jsx */.tZ)(ez/* ["default"] */.Z,{data:t,meetingHost:r,topicId:n,onCancel:()=>{o(false)}})}),/*#__PURE__*/(0,i/* .jsx */.tZ)(eT/* ["default"] */.Z,{isOpen:s,triggerRef:f,closePopover:N/* .noop */.ZT,maxWidth:"258px",title:(0,l.sprintf)((0,l.__)('Delete "%s"',"tutor"),_),message:(0,l.__)("Are you sure you want to delete this meeting? This cannot be undone.","tutor"),animationType:eM/* .AnimationType.slideUp */.ru.slideUp,arrow:"auto",hideArrow:true,isLoading:u.isPending,confirmButton:{text:(0,l.__)("Delete","tutor"),variant:"text",isDelete:true},cancelButton:{text:(0,l.__)("Cancel","tutor"),variant:"text"},onConfirmation:()=>(0,eW._)(function*(){yield w()})(),onCancel:()=>{d(false)}})]})};/* ESM default export */const ej=eJ;var eP={card:e=>{var{isPopoverOpen:t=false}=e;return/*#__PURE__*/(0,o/* .css */.iv)(B/* .styleUtils.display.flex */.i.display.flex("column"),"    padding:",h/* .spacing["8"] */.W0["8"]," ",h/* .spacing["12"] */.W0["12"]," ",h/* .spacing["12"] */.W0["12"]," ",h/* .spacing["12"] */.W0["12"],";gap:",h/* .spacing["8"] */.W0["8"],";border-radius:",h/* .borderRadius["6"] */.E0["6"],";transition:background 0.3s ease;[data-visually-hidden]{opacity:0;transition:opacity 0.3s ease-in-out;}",t&&(0,o/* .css */.iv)(eU(),h/* .colorTokens.background.hover */.Jv.background.hover),"    &:hover,&:focus-within{background-color:",h/* .colorTokens.background.hover */.Jv.background.hover,";[data-visually-hidden]{opacity:1;}.date-time{background:none;}}",h/* .Breakpoint.smallTablet */.Uo.smallTablet,"{[data-visually-hidden]{opacity:1;}}")},cardTitle:/*#__PURE__*/(0,o/* .css */.iv)(m/* .typography.caption */.c.caption("medium"),"    color:",h/* .colorTokens.text.title */.Jv.text.title,";"),cardContent:/*#__PURE__*/(0,o/* .css */.iv)(B/* .styleUtils.display.flex */.i.display.flex("column"),"    gap:",h/* .spacing["8"] */.W0["8"],";"),hyphen:/*#__PURE__*/(0,o/* .css */.iv)("width:5px;height:2px;background:",h/* .colorTokens.stroke["default"] */.Jv.stroke["default"],";"),inlineContent:/*#__PURE__*/(0,o/* .css */.iv)(m/* .typography.small */.c.small("regular")," ",B/* .styleUtils.display.flex */.i.display.flex(),"    align-items:center;gap:",h/* .spacing["6"] */.W0["6"],";"),meetingDateTime:/*#__PURE__*/(0,o/* .css */.iv)("padding:",h/* .spacing["4"] */.W0["4"]," ",h/* .spacing["6"] */.W0["6"],";border-radius:",h/* .borderRadius["4"] */.E0["4"],";background:",h/* .colorTokens.background.status.processing */.Jv.background.status.processing,";transition:background 0.3s ease-in-out;"),buttonWrapper:/*#__PURE__*/(0,o/* .css */.iv)(B/* .styleUtils.display.flex */.i.display.flex(),";margin-top:",h/* .spacing["8"] */.W0["8"],";justify-content:space-between;"),actions:/*#__PURE__*/(0,o/* .css */.iv)(B/* .styleUtils.display.flex */.i.display.flex(),";align-items:center;gap:",h/* .spacing["8"] */.W0["8"],";")};// CONCATENATED MODULE: ./assets/react/v3/public/images/pro-placeholders/live-class-2x.webp
const eX=r.p+"js/images/live-class-2x-41b3c501.webp";// CONCATENATED MODULE: ./assets/react/v3/public/images/pro-placeholders/live-class.webp
const eF=r.p+"js/images/live-class-1a583217.webp";// EXTERNAL MODULE: ./assets/react/v3/shared/hoc/withVisibilityControl.tsx
var eQ=r(52357);// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/components/additional/LiveClass.tsx
function eY(){var e=(0,p._)(["\n      border: 1px solid ",";\n    "]);eY=function t(){return e};return e}function eq(){var e=(0,p._)(["\n      border-bottom: 1px solid ",";\n    "]);eq=function t(){return e};return e}function eH(){var e=(0,p._)(["\n      padding: "," ",";\n    "]);eH=function t(){return e};return e}var eG=!!eo/* .tutorConfig.tutor_pro_url */.y.tutor_pro_url;var eK=(0,N/* .isAddonEnabled */.ro)(T/* .Addons.TUTOR_ZOOM_INTEGRATION */.AO.TUTOR_ZOOM_INTEGRATION);var eV=(0,N/* .isAddonEnabled */.ro)(T/* .Addons.TUTOR_GOOGLE_MEET_INTEGRATION */.AO.TUTOR_GOOGLE_MEET_INTEGRATION);var e$=(0,ee/* .getCourseId */.z)();var e0=()=>{var e=(0,s/* .useQueryClient */.NL)();var t=e.getQueryData(["CourseDetails",e$]);var r;var n=(r=t===null||t===void 0?void 0:t.zoom_meetings)!==null&&r!==void 0?r:[];var a;var d=(a=t===null||t===void 0?void 0:t.zoom_users)!==null&&a!==void 0?a:{};var u;var v=(u=t===null||t===void 0?void 0:t.google_meet_meetings)!==null&&u!==void 0?u:[];var[f,p]=(0,c.useState)(null);var h=(0,c.useRef)(null);var m=(0,c.useRef)(null);if(eG&&!eK&&!eV){return null}return/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:e2.liveClass,children:[/*#__PURE__*/(0,i/* .jsxs */.BX)("span",{css:e2.label,children:[(0,l.__)("Schedule Live Class","tutor"),!eG&&/*#__PURE__*/(0,i/* .jsx */.tZ)(M/* ["default"] */.Z,{content:(0,l.__)("Pro","tutor")})]}),/*#__PURE__*/(0,i/* .jsx */.tZ)(g/* ["default"] */.Z,{when:eG,fallback:/*#__PURE__*/(0,i/* .jsx */.tZ)(W/* ["default"] */.Z,{size:"small",removeBorder:false,emptyStateImage:eF,emptyStateImage2x:eX,imageAltText:(0,l.__)("Tutor LMS PRO","tutor"),title:(0,l.__)("Bring your courses to life and engage students with interactive live classes.","tutor"),actions:/*#__PURE__*/(0,i/* .jsx */.tZ)(H/* ["default"] */.Z,{size:"small",icon:/*#__PURE__*/(0,i/* .jsx */.tZ)(b/* ["default"] */.Z,{name:"crown",width:24,height:24}),onClick:()=>{window.open(eo/* ["default"].TUTOR_PRICING_PAGE */.Z.TUTOR_PRICING_PAGE,"_blank","noopener")},children:(0,l.__)("Get Tutor LMS Pro","tutor")})}),children:/*#__PURE__*/(0,i/* .jsxs */.BX)(g/* ["default"] */.Z,{when:eK||eV,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)(g/* ["default"] */.Z,{when:eK,children:/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:e2.meetingsWrapper({hasMeeting:n.length>0}),children:[/*#__PURE__*/(0,i/* .jsx */.tZ)(S/* ["default"] */.Z,{each:n,children:e=>/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:e2.meeting({hasMeeting:n.length>0}),children:/*#__PURE__*/(0,i/* .jsx */.tZ)(ej,{data:e,meetingHost:d})},e.ID)}),/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:e2.meetingsFooter({hasMeeting:n.length>0}),children:/*#__PURE__*/(0,i/* .jsx */.tZ)(H/* ["default"] */.Z,{"data-cy":"create-zoom-meeting",variant:"secondary",icon:/*#__PURE__*/(0,i/* .jsx */.tZ)(b/* ["default"] */.Z,{name:"zoomColorize",width:24,height:24}),buttonCss:/*#__PURE__*/(0,o/* .css */.iv)("width:100%;"),onClick:()=>p("zoom"),ref:h,children:(0,l.__)("Create a Zoom Meeting","tutor")})})]})}),/*#__PURE__*/(0,i/* .jsx */.tZ)(g/* ["default"] */.Z,{when:eV,children:/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:e2.meetingsWrapper({hasMeeting:v.length>0}),children:[/*#__PURE__*/(0,i/* .jsx */.tZ)(S/* ["default"] */.Z,{each:v,children:e=>/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:e2.meeting({hasMeeting:v.length>0}),children:/*#__PURE__*/(0,i/* .jsx */.tZ)(eA,{data:e})},e.ID)}),/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:e2.meetingsFooter({hasMeeting:v.length>0}),children:/*#__PURE__*/(0,i/* .jsx */.tZ)(H/* ["default"] */.Z,{"data-cy":"create-google-meet-link",variant:"secondary",icon:/*#__PURE__*/(0,i/* .jsx */.tZ)(b/* ["default"] */.Z,{name:"googleMeetColorize",width:24,height:24}),buttonCss:/*#__PURE__*/(0,o/* .css */.iv)("width:100%;"),onClick:()=>p("google_meet"),ref:m,children:(0,l.__)("Create a Google Meet Link","tutor")})})]})})]})}),/*#__PURE__*/(0,i/* .jsx */.tZ)(eC/* ["default"] */.Z,{triggerRef:h,isOpen:f==="zoom",closePopover:N/* .noop */.ZT,animationType:eM/* .AnimationType.slideUp */.ru.slideUp,closeOnEscape:false,arrow:T/* .CURRENT_VIEWPORT.isAboveMobile */.iM.isAboveMobile?"auto":"absoluteCenter",hideArrow:true,children:/*#__PURE__*/(0,i/* .jsx */.tZ)(ez/* ["default"] */.Z,{data:null,meetingHost:d,onCancel:()=>{p(null)}})}),/*#__PURE__*/(0,i/* .jsx */.tZ)(eC/* ["default"] */.Z,{triggerRef:m,isOpen:f==="google_meet",closePopover:N/* .noop */.ZT,animationType:eM/* .AnimationType.slideUp */.ru.slideUp,closeOnEscape:false,arrow:T/* .CURRENT_VIEWPORT.isAboveMobile */.iM.isAboveMobile?"auto":"absoluteCenter",hideArrow:true,children:/*#__PURE__*/(0,i/* .jsx */.tZ)(eB/* ["default"] */.Z,{data:null,onCancel:()=>{p(null)}})})]})};/* ESM default export */const e1=(0,eQ/* .withVisibilityControl */.v)(e0);var e2={label:/*#__PURE__*/(0,o/* .css */.iv)(B/* .styleUtils.display.inlineFlex */.i.display.inlineFlex(),"    align-items:center;gap:",h/* .spacing["4"] */.W0["4"],";",m/* .typography.body */.c.body(),"    color:",h/* .colorTokens.text.title */.Jv.text.title,";"),liveClass:/*#__PURE__*/(0,o/* .css */.iv)(B/* .styleUtils.display.flex */.i.display.flex("column"),"    gap:",h/* .spacing["8"] */.W0["8"],";"),meetingsWrapper:e=>{var{hasMeeting:t}=e;return/*#__PURE__*/(0,o/* .css */.iv)(B/* .styleUtils.display.flex */.i.display.flex("column"),"    background-color:",h/* .colorTokens.background.white */.Jv.background.white,";border-radius:",h/* .borderRadius.card */.E0.card,";",t&&(0,o/* .css */.iv)(eY(),h/* .colorTokens.stroke["default"] */.Jv.stroke["default"]))},meeting:e=>{var{hasMeeting:t}=e;return/*#__PURE__*/(0,o/* .css */.iv)("padding:",h/* .spacing["8"] */.W0["8"]," ",h/* .spacing["8"] */.W0["8"]," ",h/* .spacing["12"] */.W0["12"]," ",h/* .spacing["8"] */.W0["8"],";",t&&(0,o/* .css */.iv)(eq(),h/* .colorTokens.stroke.divider */.Jv.stroke.divider))},meetingsFooter:e=>{var{hasMeeting:t}=e;return/*#__PURE__*/(0,o/* .css */.iv)("width:100%;",t&&(0,o/* .css */.iv)(eH(),h/* .spacing["12"] */.W0["12"],h/* .spacing["8"] */.W0["8"]))}};// EXTERNAL MODULE: ./assets/react/v3/entries/course-builder/components/CourseBuilderSlot.tsx + 3 modules
var e4=r(19646);// EXTERNAL MODULE: ./assets/react/v3/entries/course-builder/components/layouts/CanvasHead.tsx
var e3=r(5558);// EXTERNAL MODULE: ./assets/react/v3/entries/course-builder/components/layouts/Navigator.tsx
var e8=r(88311);// EXTERNAL MODULE: ./assets/react/v3/entries/course-builder/config/route-configs.ts + 1 modules
var e5=r(38032);// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/useVisibilityControl.tsx
var e6=r(72501);// EXTERNAL MODULE: ./assets/react/v3/shared/services/course.ts
var e9=r(19918);// CONCATENATED MODULE: ./assets/react/v3/public/images/pro-placeholders/attachments-2x.webp
const e7=r.p+"js/images/attachments-2x-9f304876.webp";// CONCATENATED MODULE: ./assets/react/v3/public/images/pro-placeholders/attachments.webp
const te=r.p+"js/images/attachments-e63eb8d8.webp";// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/pages/Additional.tsx
var tt=!!eo/* .tutorConfig.tutor_pro_url */.y.tutor_pro_url;var tr=(0,ee/* .getCourseId */.z)();var tn=(0,N/* .isAddonEnabled */.ro)(T/* .Addons.TUTOR_PREREQUISITES */.AO.TUTOR_PREREQUISITES);var ta=(0,N/* .isAddonEnabled */.ro)(T/* .Addons.TUTOR_COURSE_ATTACHMENTS */.AO.TUTOR_COURSE_ATTACHMENTS);var ti=(0,N/* .isAddonEnabled */.ro)(T/* .Addons.TUTOR_CERTIFICATE */.AO.TUTOR_CERTIFICATE);var to=()=>{var e;var t=(0,f/* .useNavigate */.s0)();(0,c.useEffect)(()=>{if(!tr){t(e5/* .CourseBuilderRouteConfigs.Home.buildLink */.L.Home.buildLink(),{replace:true})}},[t]);var r=(0,v/* .useFormContext */.Gc)();var o=(0,s/* .useQueryClient */.NL)();var u=(0,d/* .useIsFetching */.y)({queryKey:["CourseDetails",tr]});var p=(0,e6/* ["default"] */.Z)(T/* .VisibilityControlKeys.COURSE_BUILDER.ADDITIONAL.COURSE_BENEFITS */.j9.COURSE_BUILDER.ADDITIONAL.COURSE_BENEFITS);var h=(0,e6/* ["default"] */.Z)(T/* .VisibilityControlKeys.COURSE_BUILDER.ADDITIONAL.COURSE_TARGET_AUDIENCE */.j9.COURSE_BUILDER.ADDITIONAL.COURSE_TARGET_AUDIENCE);var m=(0,e6/* ["default"] */.Z)(T/* .VisibilityControlKeys.COURSE_BUILDER.ADDITIONAL.TOTAL_COURSE_DURATION */.j9.COURSE_BUILDER.ADDITIONAL.TOTAL_COURSE_DURATION);var b=(0,e6/* ["default"] */.Z)(T/* .VisibilityControlKeys.COURSE_BUILDER.ADDITIONAL.COURSE_MATERIALS_INCLUDES */.j9.COURSE_BUILDER.ADDITIONAL.COURSE_MATERIALS_INCLUDES);var _=(0,e6/* ["default"] */.Z)(T/* .VisibilityControlKeys.COURSE_BUILDER.ADDITIONAL.COURSE_REQUIREMENTS */.j9.COURSE_BUILDER.ADDITIONAL.COURSE_REQUIREMENTS);var y=(0,e6/* ["default"] */.Z)(T/* .VisibilityControlKeys.COURSE_BUILDER.ADDITIONAL.CERTIFICATES */.j9.COURSE_BUILDER.ADDITIONAL.CERTIFICATES);var w=(0,e6/* ["default"] */.Z)(T/* .VisibilityControlKeys.COURSE_BUILDER.ADDITIONAL.ATTACHMENTS */.j9.COURSE_BUILDER.ADDITIONAL.ATTACHMENTS);var E=o.getQueryData(["CourseDetails",tr]);var D=(E===null||E===void 0?void 0:(e=E.course_prerequisites)===null||e===void 0?void 0:e.map(e=>String(e.id)))||[];var S=(0,e9/* .useCourseListQuery */.Cp)({params:{exclude:[String(tr),...D],limit:-1},isEnabled:!!tn&&!u});if(!tr){return null}if(!tr){return null}var B=p||h||m||b||_;var I=B||!tt||y&&ti;var O=!tt||[T/* .Addons.TUTOR_PREREQUISITES */.AO.TUTOR_PREREQUISITES,T/* .Addons.TUTOR_COURSE_ATTACHMENTS */.AO.TUTOR_COURSE_ATTACHMENTS,T/* .Addons.TUTOR_ZOOM_INTEGRATION */.AO.TUTOR_ZOOM_INTEGRATION,T/* .Addons.TUTOR_GOOGLE_MEET_INTEGRATION */.AO.TUTOR_GOOGLE_MEET_INTEGRATION].some(N/* .isAddonEnabled */.ro);var A=()=>/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:td.sidebarContent,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)(g/* ["default"] */.Z,{when:!tt||tn,children:/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{children:[/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:td.label,children:[(0,l.__)("Course Prerequisites","tutor"),!tt&&/*#__PURE__*/(0,i/* .jsx */.tZ)(M/* ["default"] */.Z,{content:(0,l.__)("Pro","tutor")})]}),/*#__PURE__*/(0,i/* .jsx */.tZ)(g/* ["default"] */.Z,{when:tt&&tn,fallback:/*#__PURE__*/(0,i/* .jsx */.tZ)(ek,{}),children:/*#__PURE__*/(0,i/* .jsx */.tZ)(v/* .Controller */.Qr,{name:"course_prerequisites",control:r.control,render:e=>{var t;return/*#__PURE__*/(0,i/* .jsx */.tZ)(P,(0,a._)((0,n._)({},e),{placeholder:(0,l.__)("Search courses for prerequisites","tutor"),options:((t=S.data)===null||t===void 0?void 0:t.results)||[],isSearchable:true,loading:S.isLoading||!!u&&!e.field.value}))}})})]})}),/*#__PURE__*/(0,i/* .jsx */.tZ)(g/* ["default"] */.Z,{when:!tt||w&&ta,children:/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{children:[/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:td.label,children:[(0,l.__)("Attachments","tutor"),!tt&&/*#__PURE__*/(0,i/* .jsx */.tZ)(M/* ["default"] */.Z,{content:(0,l.__)("Pro","tutor")})]}),/*#__PURE__*/(0,i/* .jsx */.tZ)(g/* ["default"] */.Z,{when:tt&&ta,fallback:/*#__PURE__*/(0,i/* .jsx */.tZ)(g/* ["default"] */.Z,{when:!tt,children:/*#__PURE__*/(0,i/* .jsx */.tZ)(W/* ["default"] */.Z,{size:"small",removeBorder:false,emptyStateImage:te,emptyStateImage2x:e7,// prettier-ignore
    title:(0,l.__)("Provide additional resources like downloadable files and reference materials.","tutor")})}),children:/*#__PURE__*/(0,i/* .jsx */.tZ)(v/* .Controller */.Qr,{name:"course_attachments",control:r.control,render:e=>/*#__PURE__*/(0,i/* .jsx */.tZ)(F/* ["default"] */.Z,(0,a._)((0,n._)({},e),{buttonText:(0,l.__)("Upload Attachment","tutor"),selectMultiple:true}))})})]})}),/*#__PURE__*/(0,i/* .jsx */.tZ)(e1,{visibilityKey:T/* .VisibilityControlKeys.COURSE_BUILDER.ADDITIONAL.SCHEDULE_LIVE_CLASS */.j9.COURSE_BUILDER.ADDITIONAL.SCHEDULE_LIVE_CLASS}),/*#__PURE__*/(0,i/* .jsx */.tZ)(e4/* ["default"] */.Z,{section:"Additional.bottom_of_sidebar",form:r})]});return/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:td.wrapper({showSidebar:O&&I}),children:[/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:td.leftSide,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)(e3/* ["default"] */.Z,{title:(0,l.__)("Additional","tutor"),backUrl:"/curriculum"}),/*#__PURE__*/(0,i/* .jsx */.tZ)(g/* ["default"] */.Z,{when:I,children:/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:td.formWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)(g/* ["default"] */.Z,{when:B,children:/*#__PURE__*/(0,i/* .jsxs */.BX)(x,{bordered:true,children:[/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:td.titleAndSub,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)(Z,{children:(0,l.__)("Overview","tutor")}),/*#__PURE__*/(0,i/* .jsx */.tZ)(k,{children:(0,l.__)("Provide essential course information to attract and inform potential students","tutor")})]}),/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:td.fieldsWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)(v/* .Controller */.Qr,{name:"course_benefits",control:r.control,render:e=>/*#__PURE__*/(0,i/* .jsx */.tZ)(Y/* ["default"] */.Z,(0,a._)((0,n._)({},e),{label:(0,l.__)("What Will I Learn?","tutor"),placeholder:(0,l.__)("Define the key takeaways from this course (list one benefit per line)","tutor"),rows:2,enableResize:true,loading:!!u&&!e.field.value,visibilityKey:T/* .VisibilityControlKeys.COURSE_BUILDER.ADDITIONAL.COURSE_BENEFITS */.j9.COURSE_BUILDER.ADDITIONAL.COURSE_BENEFITS}))}),/*#__PURE__*/(0,i/* .jsx */.tZ)(v/* .Controller */.Qr,{name:"course_target_audience",control:r.control,render:e=>/*#__PURE__*/(0,i/* .jsx */.tZ)(Y/* ["default"] */.Z,(0,a._)((0,n._)({},e),{label:(0,l.__)("Target Audience","tutor"),// prettier-ignore
    placeholder:(0,l.__)("Specify the target audience that will benefit the most from the course. (One Line Per target audience)","tutor"),rows:2,enableResize:true,loading:!!u&&!e.field.value,visibilityKey:T/* .VisibilityControlKeys.COURSE_BUILDER.ADDITIONAL.COURSE_TARGET_AUDIENCE */.j9.COURSE_BUILDER.ADDITIONAL.COURSE_TARGET_AUDIENCE}))}),/*#__PURE__*/(0,i/* .jsx */.tZ)(g/* ["default"] */.Z,{when:m,children:/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:td.totalCourseDuration,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)(v/* .Controller */.Qr,{name:"course_duration_hours",control:r.control,render:e=>/*#__PURE__*/(0,i/* .jsx */.tZ)(Q/* ["default"] */.Z,(0,a._)((0,n._)({},e),{type:"number",label:(0,l.__)("Total Course Duration","tutor"),placeholder:"0",contentPosition:"right",content:(0,l.__)("hour(s)","tutor"),loading:!!u&&!e.field.value,visibilityKey:T/* .VisibilityControlKeys.COURSE_BUILDER.ADDITIONAL.TOTAL_COURSE_DURATION */.j9.COURSE_BUILDER.ADDITIONAL.TOTAL_COURSE_DURATION}))}),/*#__PURE__*/(0,i/* .jsx */.tZ)(v/* .Controller */.Qr,{name:"course_duration_minutes",control:r.control,render:e=>/*#__PURE__*/(0,i/* .jsx */.tZ)(Q/* ["default"] */.Z,(0,a._)((0,n._)({},e),{type:"number",placeholder:"0",contentPosition:"right",content:(0,l.__)("min(s)","tutor"),loading:!!u&&!e.field.value,visibilityKey:T/* .VisibilityControlKeys.COURSE_BUILDER.ADDITIONAL.TOTAL_COURSE_DURATION */.j9.COURSE_BUILDER.ADDITIONAL.TOTAL_COURSE_DURATION}))})]})}),/*#__PURE__*/(0,i/* .jsx */.tZ)(v/* .Controller */.Qr,{name:"course_material_includes",control:r.control,render:e=>/*#__PURE__*/(0,i/* .jsx */.tZ)(Y/* ["default"] */.Z,(0,a._)((0,n._)({},e),{label:(0,l.__)("Materials Included","tutor"),// prettier-ignore
    placeholder:(0,l.__)("A list of assets you will be providing for the students in this course (One Per Line)","tutor"),rows:4,enableResize:true,loading:!!u&&!e.field.value,visibilityKey:T/* .VisibilityControlKeys.COURSE_BUILDER.ADDITIONAL.COURSE_MATERIALS_INCLUDES */.j9.COURSE_BUILDER.ADDITIONAL.COURSE_MATERIALS_INCLUDES}))}),/*#__PURE__*/(0,i/* .jsx */.tZ)(v/* .Controller */.Qr,{name:"course_requirements",control:r.control,render:e=>/*#__PURE__*/(0,i/* .jsx */.tZ)(Y/* ["default"] */.Z,(0,a._)((0,n._)({},e),{label:(0,l.__)("Requirements/Instructions","tutor"),// prettier-ignore
    placeholder:(0,l.__)("Additional requirements or special instructions for the students (One Per Line)","tutor"),rows:2,enableResize:true,loading:!!u&&!e.field.value,visibilityKey:T/* .VisibilityControlKeys.COURSE_BUILDER.ADDITIONAL.COURSE_REQUIREMENTS */.j9.COURSE_BUILDER.ADDITIONAL.COURSE_REQUIREMENTS}))})]})]})}),/*#__PURE__*/(0,i/* .jsx */.tZ)(g/* ["default"] */.Z,{when:!tt||y&&ti,children:/*#__PURE__*/(0,i/* .jsxs */.BX)(x,{bordered:true,children:[/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:td.titleAndSub,children:[/*#__PURE__*/(0,i/* .jsxs */.BX)(Z,{css:td.titleWithBadge,children:[(0,l.__)("Certificate","tutor"),/*#__PURE__*/(0,i/* .jsx */.tZ)(g/* ["default"] */.Z,{when:!tt,children:/*#__PURE__*/(0,i/* .jsx */.tZ)(M/* ["default"] */.Z,{content:(0,l.__)("Pro","tutor")})})]}),/*#__PURE__*/(0,i/* .jsx */.tZ)(g/* ["default"] */.Z,{when:tt&&(0,N/* .isAddonEnabled */.ro)(T/* .Addons.TUTOR_CERTIFICATE */.AO.TUTOR_CERTIFICATE),children:/*#__PURE__*/(0,i/* .jsx */.tZ)(k,{children:(0,l.__)("Select a certificate to award your learners.","tutor")})})]}),/*#__PURE__*/(0,i/* .jsx */.tZ)(g/* ["default"] */.Z,{when:!u,fallback:/*#__PURE__*/(0,i/* .jsx */.tZ)(C/* .LoadingSection */.g4,{}),children:/*#__PURE__*/(0,i/* .jsx */.tZ)(eb,{isSidebarVisible:O})})]})}),/*#__PURE__*/(0,i/* .jsx */.tZ)(e4/* ["default"] */.Z,{section:"Additional.after_certificates",form:r})]})}),/*#__PURE__*/(0,i/* .jsx */.tZ)(g/* ["default"] */.Z,{when:!I&&O,children:/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:td.formWrapper,children:/*#__PURE__*/(0,i/* .jsx */.tZ)(A,{})})}),/*#__PURE__*/(0,i/* .jsx */.tZ)(g/* ["default"] */.Z,{when:T/* .CURRENT_VIEWPORT.isAboveTablet */.iM.isAboveTablet,children:/*#__PURE__*/(0,i/* .jsx */.tZ)(e8/* ["default"] */.Z,{})})]}),/*#__PURE__*/(0,i/* .jsx */.tZ)(g/* ["default"] */.Z,{when:O&&I,children:/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:td.sidebar,children:/*#__PURE__*/(0,i/* .jsx */.tZ)(A,{})})}),/*#__PURE__*/(0,i/* .jsx */.tZ)(g/* ["default"] */.Z,{when:!T/* .CURRENT_VIEWPORT.isAboveTablet */.iM.isAboveTablet,children:/*#__PURE__*/(0,i/* .jsx */.tZ)(e8/* ["default"] */.Z,{})})]})};/* ESM default export */const ts=to;var td={wrapper:e=>{var{showSidebar:t}=e;return/*#__PURE__*/(0,o/* .css */.iv)("display:grid;grid-template-columns:",t?"1fr 338px":"1fr",";width:100%;",h/* .Breakpoint.smallTablet */.Uo.smallTablet,"{grid-template-columns:1fr;gap:",h/* .spacing["24"] */.W0["24"],";}")},leftSide:/*#__PURE__*/(0,o/* .css */.iv)("padding:",h/* .spacing["32"] */.W0["32"]," ",h/* .spacing["32"] */.W0["32"]," ",h/* .spacing["32"] */.W0["32"]," 0;",B/* .styleUtils.display.flex */.i.display.flex("column"),"    gap:",h/* .spacing["32"] */.W0["32"],";",h/* .Breakpoint.smallTablet */.Uo.smallTablet,"{padding:0;padding-top:",h/* .spacing["16"] */.W0["16"],";gap:",h/* .spacing["16"] */.W0["16"],";}"),formWrapper:/*#__PURE__*/(0,o/* .css */.iv)(B/* .styleUtils.display.flex */.i.display.flex("column"),"    gap:",h/* .spacing["24"] */.W0["24"],";"),titleAndSub:/*#__PURE__*/(0,o/* .css */.iv)(B/* .styleUtils.display.flex */.i.display.flex("column"),"    gap:",h/* .spacing["4"] */.W0["4"],";margin-bottom:",h/* .spacing["20"] */.W0["20"],";"),titleWithBadge:/*#__PURE__*/(0,o/* .css */.iv)("span{",B/* .styleUtils.display.flex */.i.display.flex(),";align-items:center;gap:",h/* .spacing["4"] */.W0["4"],";}"),fieldsWrapper:/*#__PURE__*/(0,o/* .css */.iv)(B/* .styleUtils.display.flex */.i.display.flex("column"),"    gap:",h/* .spacing["24"] */.W0["24"],";"),totalCourseDuration:/*#__PURE__*/(0,o/* .css */.iv)(B/* .styleUtils.display.flex */.i.display.flex(),"    align-items:end;gap:",h/* .spacing["8"] */.W0["8"],";& > div{flex:1;}"),sidebar:/*#__PURE__*/(0,o/* .css */.iv)(B/* .styleUtils.display.flex */.i.display.flex("column"),"    padding:",h/* .spacing["32"] */.W0["32"]," 0 ",h/* .spacing["32"] */.W0["32"]," ",h/* .spacing["32"] */.W0["32"],";border-left:1px solid ",h/* .colorTokens.stroke.divider */.Jv.stroke.divider,";min-height:calc(100vh - (",h/* .headerHeight */.J9,"px + ",h/* .footerHeight */.xQ,"px));gap:",h/* .spacing["16"] */.W0["16"],";",h/* .Breakpoint.smallTablet */.Uo.smallTablet,"{padding:0;padding-top:",h/* .spacing["24"] */.W0["24"],";border-left:none;border-top:1px solid ",h/* .colorTokens.stroke.divider */.Jv.stroke.divider,";}"),label:/*#__PURE__*/(0,o/* .css */.iv)(B/* .styleUtils.display.inlineFlex */.i.display.inlineFlex(),"    align-items:center;gap:",h/* .spacing["4"] */.W0["4"],";",m/* .typography.body */.c.body("medium"),"    color:",h/* .colorTokens.text.title */.Jv.text.title,";margin-bottom:",h/* .spacing["8"] */.W0["8"],";"),sidebarContent:/*#__PURE__*/(0,o/* .css */.iv)(B/* .styleUtils.display.flex */.i.display.flex("column"),"    gap:",h/* .spacing["16"] */.W0["16"],";")}},11908:function(e,t,r){r.d(t,{AI:()=>T,Bd:()=>j,CR:()=>I,FV:()=>y,G4:()=>C,PI:()=>W,P_:()=>A,RE:()=>X,SF:()=>h,T3:()=>B,Wn:()=>x,i0:()=>R,iL:()=>m,qY:()=>z,rM:()=>b,yO:()=>k});/* ESM import */var n=r(7409);/* ESM import */var a=r(99282);/* ESM import */var i=r(24333);/* ESM import */var o=r(99469);/* ESM import */var s=r(65228);/* ESM import */var d=r(38003);/* ESM import */var l=/*#__PURE__*/r.n(d);/* ESM import */var c=r(13985);/* ESM import */var u=r(74053);/* ESM import */var v=r(82340);/* ESM import */var f=r(84225);/* ESM import */var p=r(34403);var h=(e,t,r,i,o)=>{var s,d;var l;return(0,n._)((0,a._)((0,n._)((0,a._)((0,n._)((0,a._)((0,n._)({},t&&{lesson_id:t}),{topic_id:r,title:e.title,description:e.description,thumbnail_id:(l=(s=e.thumbnail)===null||s===void 0?void 0:s.id)!==null&&l!==void 0?l:null}),e.video?Object.fromEntries(Object.entries(e.video).map(t=>{var[r,n]=t;var a;return["video[".concat(r,"]"),r==="source"&&!n?"-1":r==="poster_url"&&!((a=e.video)===null||a===void 0?void 0:a.poster)?"":n]})):{}),{"video[runtime][hours]":e.duration.hour||0,"video[runtime][minutes]":e.duration.minute||0,"video[runtime][seconds]":e.duration.second||0}),(0,p/* .isAddonEnabled */.ro)(u/* .Addons.TUTOR_COURSE_PREVIEW */.AO.TUTOR_COURSE_PREVIEW)&&{_is_preview:e.lesson_preview?1:0}),{tutor_attachments:(e.tutor_attachments||[]).map(e=>e.id)}),(0,p/* .isAddonEnabled */.ro)(u/* .Addons.CONTENT_DRIP */.AO.CONTENT_DRIP)&&i==="unlock_by_date"&&{"content_drip_settings[unlock_date]":e.content_drip_settings.unlock_date||""},(0,p/* .isAddonEnabled */.ro)(u/* .Addons.CONTENT_DRIP */.AO.CONTENT_DRIP)&&i==="specific_days"&&{"content_drip_settings[after_xdays_of_enroll]":e.content_drip_settings.after_xdays_of_enroll||"0"},(0,p/* .isAddonEnabled */.ro)(u/* .Addons.CONTENT_DRIP */.AO.CONTENT_DRIP)&&i==="after_finishing_prerequisites"&&{"content_drip_settings[prerequisites]":((d=e.content_drip_settings.prerequisites)===null||d===void 0?void 0:d.length)?e.content_drip_settings.prerequisites:""},Object.fromEntries(o.map(t=>{return[t,e[t]||""]})))};var m=(e,t,r,i,o)=>{var s;return(0,n._)((0,a._)((0,n._)({},t&&{assignment_id:t}),{topic_id:r,title:e.title,summary:e.summary,attachments:(e.attachments||[]).map(e=>e.id),"assignment_option[time_duration][time]":e.time_duration.time,"assignment_option[time_duration][value]":e.time_duration.value,"assignment_option[deadline_from_start]":e.deadline_from_start?"1":"0","assignment_option[total_mark]":e.total_mark,"assignment_option[pass_mark]":e.pass_mark,"assignment_option[upload_files_limit]":e.upload_files_limit,"assignment_option[upload_file_size_limit]":e.upload_file_size_limit}),(0,p/* .isAddonEnabled */.ro)(u/* .Addons.CONTENT_DRIP */.AO.CONTENT_DRIP)&&i==="unlock_by_date"&&{"content_drip_settings[unlock_date]":e.content_drip_settings.unlock_date||""},(0,p/* .isAddonEnabled */.ro)(u/* .Addons.CONTENT_DRIP */.AO.CONTENT_DRIP)&&i==="specific_days"&&{"content_drip_settings[after_xdays_of_enroll]":e.content_drip_settings.after_xdays_of_enroll||"0"},(0,p/* .isAddonEnabled */.ro)(u/* .Addons.CONTENT_DRIP */.AO.CONTENT_DRIP)&&i==="after_finishing_prerequisites"&&{"content_drip_settings[prerequisites]":((s=e.content_drip_settings.prerequisites)===null||s===void 0?void 0:s.length)?e.content_drip_settings.prerequisites:""},Object.fromEntries(o.map(t=>{return[t,e[t]||""]})))};var g=e=>{return v/* .wpAjaxInstance.get */.R.get(f/* ["default"].GET_COURSE_CONTENTS */.Z.GET_COURSE_CONTENTS,{params:{course_id:e}})};var b=e=>{return(0,i/* .useQuery */.a)({queryKey:["Topic",e],queryFn:()=>g(e).then(e=>{return e.data.map(e=>(0,a._)((0,n._)({},e),{contents:e.contents.map(e=>(0,a._)((0,n._)({},e),{post_type:e.quiz_type?"tutor_h5p_quiz":e.post_type}))}))}),enabled:!!e})};var _=e=>{return v/* .wpAjaxInstance.post */.R.post(f/* ["default"].SAVE_TOPIC */.Z.SAVE_TOPIC,e)};var y=()=>{var e=(0,o/* .useQueryClient */.NL)();var{showToast:t}=(0,c/* .useToast */.p)();return(0,s/* .useMutation */.D)({mutationFn:_,onSuccess:r=>{if(r.data){t({message:(0,d.__)("Topic saved successfully","tutor"),type:"success"});e.invalidateQueries({queryKey:["Topic"]})}},onError:e=>{t({type:"danger",message:(0,p/* .convertToErrorMessage */.Mo)(e)})}})};var w=e=>{return v/* .wpAjaxInstance.post */.R.post(f/* ["default"].DELETE_TOPIC */.Z.DELETE_TOPIC,{topic_id:e})};var x=e=>{var t=(0,o/* .useQueryClient */.NL)();var{showToast:r}=(0,c/* .useToast */.p)();return(0,s/* .useMutation */.D)({mutationFn:w,onSuccess:(n,a)=>{if(n.status_code===200){r({message:(0,d.__)(n.message,"tutor"),type:"success"});t.setQueryData(["Topic",e],e=>{var t=JSON.parse(JSON.stringify(e));return t.filter(e=>String(e.id)!==String(a))})}},onError:e=>{r({type:"danger",message:(0,p/* .convertToErrorMessage */.Mo)(e)});t.invalidateQueries({queryKey:["Topic"]})}})};var Z=(e,t)=>{return v/* .wpAjaxInstance.get */.R.get(f/* ["default"].GET_LESSON_DETAILS */.Z.GET_LESSON_DETAILS,{params:{topic_id:t,lesson_id:e}})};var k=(e,t)=>{return(0,i/* .useQuery */.a)({queryKey:["Lesson",e,t],queryFn:()=>Z(e,t).then(e=>e.data),enabled:!!e&&!!t})};var E=e=>{return v/* .wpAjaxInstance.post */.R.post(f/* ["default"].SAVE_LESSON */.Z.SAVE_LESSON,e)};var C=e=>{var t=(0,o/* .useQueryClient */.NL)();var{showToast:r}=(0,c/* .useToast */.p)();return(0,s/* .useMutation */.D)({mutationFn:e=>E(e),onSuccess:(n,a)=>{if(n.data){t.invalidateQueries({queryKey:["Topic",e]});t.invalidateQueries({queryKey:["Lesson",a.lesson_id,a.topic_id]});r({message:(0,d.__)("Lesson saved successfully","tutor"),type:"success"})}},onError:e=>{r({type:"danger",message:(0,p/* .convertToErrorMessage */.Mo)(e)})}})};var M=e=>{return v/* .wpAjaxInstance.post */.R.post(f/* ["default"].DELETE_TOPIC_CONTENT */.Z.DELETE_TOPIC_CONTENT,{lesson_id:e})};var W=()=>{var e=(0,o/* .useQueryClient */.NL)();var{showToast:t}=(0,c/* .useToast */.p)();return(0,s/* .useMutation */.D)({mutationFn:M,onSuccess:r=>{if(r.status_code===200){t({message:(0,d.__)(r.message,"tutor"),type:"success"});e.invalidateQueries({queryKey:["Topic"]})}},onError:e=>{t({type:"danger",message:(0,p/* .convertToErrorMessage */.Mo)(e)})}})};var D=e=>{return v/* .wpAjaxInstance.post */.R.post(f/* ["default"].UPDATE_COURSE_CONTENT_ORDER */.Z.UPDATE_COURSE_CONTENT_ORDER,e)};var T=()=>{var{showToast:e}=(0,c/* .useToast */.p)();return(0,s/* .useMutation */.D)({mutationFn:D,onError:t=>{e({type:"danger",message:(0,p/* .convertToErrorMessage */.Mo)(t)})}})};var S=(e,t)=>{return v/* .wpAjaxInstance.get */.R.get(f/* ["default"].GET_ASSIGNMENT_DETAILS */.Z.GET_ASSIGNMENT_DETAILS,{params:{topic_id:t,assignment_id:e}})};var B=(e,t)=>{return(0,i/* .useQuery */.a)({queryKey:["Assignment",e,t],queryFn:()=>S(e,t).then(e=>e.data),enabled:!!e&&!!t})};var N=e=>{return v/* .wpAjaxInstance.post */.R.post(f/* ["default"].SAVE_ASSIGNMENT */.Z.SAVE_ASSIGNMENT,e)};var I=e=>{var t=(0,o/* .useQueryClient */.NL)();var{showToast:r}=(0,c/* .useToast */.p)();return(0,s/* .useMutation */.D)({mutationFn:e=>N(e),onSuccess:(n,a)=>{if(n.status_code===200||n.status_code===201){t.invalidateQueries({queryKey:["Topic",Number(e)]});t.invalidateQueries({queryKey:["Assignment",a.assignment_id,a.topic_id]});r({message:(0,d.__)(n.message,"tutor"),type:"success"})}},onError:e=>{r({type:"danger",message:(0,p/* .convertToErrorMessage */.Mo)(e)})}})};var O=e=>{return v/* .wpAjaxInstance.post */.R.post(f/* ["default"].DUPLICATE_CONTENT */.Z.DUPLICATE_CONTENT,e)};/**
 *
 * @param quizId pass when duplicating 'answer'
 * @returns useMutation
 */var A=e=>{var t=(0,o/* .useQueryClient */.NL)();var{showToast:r}=(0,c/* .useToast */.p)();return(0,s/* .useMutation */.D)({mutationFn:O,onSuccess:(n,a)=>{if(n.status_code===200||n.status_code===201){r({message:(0,d.__)(n.message,"tutor"),type:"success"});if(["lesson","assignment","quiz","topic"].includes(a.content_type)){t.invalidateQueries({queryKey:["Topic"]});return}if(["question"].includes(a.content_type)){t.invalidateQueries({queryKey:["Quiz",e]});return}}},onError:(n,a)=>{r({message:(0,p/* .convertToErrorMessage */.Mo)(n),type:"danger"});if(["answer"].includes(a.content_type)){t.invalidateQueries({queryKey:["Quiz",e]})}}})};var L=(e,t)=>{return v/* .wpAjaxInstance.get */.R.get(f/* ["default"].GET_ZOOM_MEETING_DETAILS */.Z.GET_ZOOM_MEETING_DETAILS,{params:{meeting_id:e,topic_id:t}})};var z=(e,t)=>{return(0,i/* .useQuery */.a)({queryKey:["ZoomMeeting",e],queryFn:()=>L(e,t).then(e=>e.data),enabled:!!e&&!!t})};var U=(e,t)=>{return v/* .wpAjaxInstance.get */.R.get(f/* ["default"].GET_GOOGLE_MEET_DETAILS */.Z.GET_GOOGLE_MEET_DETAILS,{params:{meeting_id:e,topic_id:t}})};var R=(e,t)=>{return(0,i/* .useQuery */.a)({queryKey:["GoogleMeet",e],queryFn:()=>U(e,t).then(e=>e.data),enabled:!!e&&!!t})};var J=e=>{return v/* .wpAjaxInstance.post */.R.post(f/* ["default"].ADD_CONTENT_BANK_CONTENT_TO_COURSE */.Z.ADD_CONTENT_BANK_CONTENT_TO_COURSE,e)};var j=()=>{var e=(0,o/* .useQueryClient */.NL)();var{showToast:t}=(0,c/* .useToast */.p)();return(0,s/* .useMutation */.D)({mutationFn:J,onSuccess:(r,n)=>{if(r.status_code===200){t({message:(0,d.__)(r.message,"tutor"),type:"success"});e.invalidateQueries({queryKey:["Topic",n.course_id]})}},onError:e=>{t({type:"danger",message:(0,p/* .convertToErrorMessage */.Mo)(e)})}})};var P=e=>{var{topicId:t,contentId:r}=e;return v/* .wpAjaxInstance.post */.R.post(f/* ["default"].DELETE_CONTENT_BANK_CONTENT_FROM_COURSE */.Z.DELETE_CONTENT_BANK_CONTENT_FROM_COURSE,{topic_id:t,content_id:r})};var X=()=>{var e=(0,o/* .useQueryClient */.NL)();var{showToast:t}=(0,c/* .useToast */.p)();return(0,s/* .useMutation */.D)({mutationFn:P,onSuccess:r=>{if(r.status_code===200){t({message:(0,d.__)(r.message,"tutor"),type:"success"});e.invalidateQueries({queryKey:["Topic"]})}},onError:e=>{t({type:"danger",message:(0,p/* .convertToErrorMessage */.Mo)(e)})}})}},69602:function(e,t,r){r.d(t,{Z:()=>w});/* ESM import */var n=r(7409);/* ESM import */var a=r(99282);/* ESM import */var i=r(58865);/* ESM import */var o=r(35944);/* ESM import */var s=r(60860);/* ESM import */var d=r(76487);/* ESM import */var l=r(34403);/* ESM import */var c=r(70917);/* ESM import */var u=r(87363);/* ESM import */var v=/*#__PURE__*/r.n(u);function f(){var e=(0,i._)(["\n      cursor: not-allowed;\n    "]);f=function t(){return e};return e}function p(){var e=(0,i._)(["\n      color: ",";\n    "]);p=function t(){return e};return e}function h(){var e=(0,i._)(["\n        margin-right: ",";\n      "]);h=function t(){return e};return e}function m(){var e=(0,i._)(["\n        background-color: ",";\n      "]);m=function t(){return e};return e}function g(){var e=(0,i._)(["\n      & + span::before {\n        background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='2' fill='none'%3E%3Crect width='10' height='1.5' y='.25' fill='%23fff' rx='.75'/%3E%3C/svg%3E\");\n        background-repeat: no-repeat;\n        background-size: 10px;\n        background-position: center center;\n        background-color: ",";\n        border: 0.5px solid ",";\n      }\n    "]);g=function t(){return e};return e}function b(){var e=(0,i._)(["\n      & + span {\n        cursor: not-allowed;\n\n        &::before {\n          border-color: ",";\n        }\n      }\n    "]);b=function t(){return e};return e}var _=/*#__PURE__*/v().forwardRef((e,t)=>{var{id:r=(0,l/* .nanoid */.x0)(),name:i,labelCss:s,inputCss:d,label:c="",checked:u,value:f,disabled:p=false,onChange:h,onBlur:m,isIndeterminate:g=false}=e;var b=e=>{h===null||h===void 0?void 0:h(!g?e.target.checked:true,e)};var _=e=>{if(typeof e==="string"){return e}if(typeof e==="number"||typeof e==="boolean"||e===null){return String(e)}if(e===undefined){return""}if(/*#__PURE__*/v().isValidElement(e)){var t;var r=(t=e.props)===null||t===void 0?void 0:t.children;if(typeof r==="string"){return r}if(Array.isArray(r)){return r.map(e=>typeof e==="string"?e:"").filter(Boolean).join(" ")}}return""};return/*#__PURE__*/(0,o/* .jsxs */.BX)("label",{htmlFor:r,css:[y.container({disabled:p}),s],children:[/*#__PURE__*/(0,o/* .jsx */.tZ)("input",(0,a._)((0,n._)({},e),{ref:t,id:r,name:i,type:"checkbox",value:f,checked:!!u,disabled:p,"aria-invalid":e["aria-invalid"],onChange:b,onBlur:m,css:[d,y.checkbox({label:!!c,isIndeterminate:g,disabled:p})]})),/*#__PURE__*/(0,o/* .jsx */.tZ)("span",{}),/*#__PURE__*/(0,o/* .jsx */.tZ)("span",{css:[y.label({isDisabled:p}),s],title:_(c),children:c})]})});var y={container:e=>{var{disabled:t=false}=e;return/*#__PURE__*/(0,c/* .css */.iv)("position:relative;display:flex;align-items:center;cursor:pointer;user-select:none;color:",s/* .colorTokens.text.title */.Jv.text.title,";",t&&(0,c/* .css */.iv)(f()))},label:e=>{var{isDisabled:t=false}=e;return/*#__PURE__*/(0,c/* .css */.iv)(d/* .typography.caption */.c.caption(),";color:",s/* .colorTokens.text.title */.Jv.text.title,";",t&&(0,c/* .css */.iv)(p(),s/* .colorTokens.text.disable */.Jv.text.disable))},checkbox:e=>{var{label:t,isIndeterminate:r,disabled:n}=e;return/*#__PURE__*/(0,c/* .css */.iv)("position:absolute;opacity:0 !important;height:0;width:0;& + span{position:relative;cursor:pointer;display:inline-flex;align-items:center;",t&&(0,c/* .css */.iv)(h(),s/* .spacing["10"] */.W0["10"]),"}& + span::before{content:'';background-color:",s/* .colorTokens.background.white */.Jv.background.white,";border:1px solid ",s/* .colorTokens.stroke["default"] */.Jv.stroke["default"],";border-radius:3px;width:20px;height:20px;}&:checked + span::before{background-image:url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDEyIDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wLjE2NTM0NCA0Ljg5OTQ2QzAuMTEzMjM1IDQuODQ0OTcgMC4wNzE3MzQ2IDQuNzgxMTUgMC4wNDI5ODg3IDQuNzExM0MtMC4wMTQzMjk2IDQuNTU1NjQgLTAuMDE0MzI5NiA0LjM4NDQ5IDAuMDQyOTg4NyA0LjIyODg0QzAuMDcxMTU0OSA0LjE1ODY4IDAuMTEyNzIzIDQuMDk0NzUgMC4xNjUzNDQgNC4wNDA2OEwxLjAzMzgyIDMuMjAzNkMxLjA4NDkzIDMuMTQzNCAxLjE0ODkgMy4wOTU1NyAxLjIyMDk2IDMuMDYzNjlDMS4yOTAzMiAzLjAzMjEzIDEuMzY1NTQgMy4wMTU2OSAxLjQ0MTY3IDMuMDE1NDRDMS41MjQxOCAzLjAxMzgzIDEuNjA2MDUgMy4wMzAyOSAxLjY4MTU5IDMuMDYzNjlDMS43NTYyNiAzLjA5NzA3IDEuODIzODYgMy4xNDQ1NyAxLjg4MDcxIDMuMjAzNkw0LjUwMDU1IDUuODQyNjhMMTAuMTI0MSAwLjE4ODIwNUMxMC4xNzk0IDAuMTI5NTQ0IDEwLjI0NTQgMC4wODIwNTQyIDEwLjMxODQgMC4wNDgyOTA4QzEwLjM5NDEgMC4wMTU0NjYxIDEwLjQ3NTkgLTAuMDAwOTcyMDU3IDEwLjU1ODMgNC40NDIyOGUtMDVDMTAuNjM1NyAwLjAwMDQ3NTMxOCAxMC43MTIxIDAuMDE3NDc5NSAxMC43ODI0IDAuMDQ5OTI0MkMxMC44NTI3IDAuMDgyMzY4OSAxMC45MTU0IDAuMTI5NTA5IDEwLjk2NjIgMC4xODgyMDVMMTEuODM0NyAxLjAzNzM0QzExLjg4NzMgMS4wOTE0MiAxMS45Mjg4IDEuMTU1MzQgMTEuOTU3IDEuMjI1NUMxMi4wMTQzIDEuMzgxMTYgMTIuMDE0MyAxLjU1MjMxIDExLjk1NyAxLjcwNzk2QzExLjkyODMgMS43Nzc4MSAxMS44ODY4IDEuODQxNjMgMTEuODM0NyAxLjg5NjEzTDQuOTIyOCA4LjgwOTgyQzQuODcxMjkgOC44NzAyMSA0LjgwNzQ3IDguOTE4NzUgNC43MzU2NiA4Ljk1MjE1QzQuNTgyMDIgOS4wMTU5NSA0LjQwOTQ5IDkuMDE1OTUgNC4yNTU4NCA4Ljk1MjE1QzQuMTg0MDQgOC45MTg3NSA0LjEyMDIyIDguODcwMjEgNC4wNjg3MSA4LjgwOTgyTDAuMTY1MzQ0IDQuODk5NDZaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K');background-repeat:no-repeat;background-size:10px 10px;background-position:center center;border-color:transparent;background-color:",s/* .colorTokens.icon.brand */.Jv.icon.brand,";border-radius:",s/* .borderRadius["4"] */.E0["4"],";",n&&(0,c/* .css */.iv)(m(),s/* .colorTokens.icon.disable["default"] */.Jv.icon.disable["default"]),"}",r&&(0,c/* .css */.iv)(g(),s/* .colorTokens.brand.blue */.Jv.brand.blue,s/* .colorTokens.stroke.white */.Jv.stroke.white)," ",n&&(0,c/* .css */.iv)(b(),s/* .colorTokens.stroke.disable */.Jv.stroke.disable),"    &:focus-visible{& + span{border-radius:",s/* .borderRadius["2"] */.E0["2"],";outline:2px solid ",s/* .colorTokens.stroke.brand */.Jv.stroke.brand,";outline-offset:1px;}}")}};/* ESM default export */const w=_},30647:function(e,t,r){r.d(t,{Z:()=>y});/* ESM import */var n=r(58865);/* ESM import */var a=r(35944);/* ESM import */var i=r(70917);/* ESM import */var o=r(38003);/* ESM import */var s=/*#__PURE__*/r.n(o);/* ESM import */var d=r(86138);/* ESM import */var l=/*#__PURE__*/r.n(d);/* ESM import */var c=r(19398);/* ESM import */var u=r(26815);/* ESM import */var v=r(60860);/* ESM import */var f=r(76487);/* ESM import */var p=r(17106);/* ESM import */var h=r(2613);function m(){var e=(0,n._)(["\n      width: 168px;\n    "]);m=function t(){return e};return e}function g(){var e=(0,n._)(["\n      width: 168px;\n    "]);g=function t(){return e};return e}var b={large:"regular",regular:"small",small:"small"};var _=e=>{var{buttonText:t=(0,o.__)("Upload Media","tutor"),infoText:r,size:n="regular",value:s,uploadHandler:d,clearHandler:l,emptyImageCss:f,previewImageCss:m,overlayCss:g,replaceButtonText:_,loading:y,disabled:x=false,isClearAble:Z=true}=e;return/*#__PURE__*/(0,a/* .jsx */.tZ)(p/* ["default"] */.Z,{when:!y,fallback:/*#__PURE__*/(0,a/* .jsx */.tZ)("div",{css:w.emptyMedia({size:n,isDisabled:x}),children:/*#__PURE__*/(0,a/* .jsx */.tZ)(h/* .LoadingOverlay */.fz,{})}),children:/*#__PURE__*/(0,a/* .jsx */.tZ)(p/* ["default"] */.Z,{when:s===null||s===void 0?void 0:s.url,fallback:/*#__PURE__*/(0,a/* .jsxs */.BX)("div",{"aria-disabled":x,css:[w.emptyMedia({size:n,isDisabled:x}),f],onClick:e=>{e.stopPropagation();if(x){return}d()},onKeyDown:e=>{if(!x&&e.key==="Enter"){e.preventDefault();d()}},children:[/*#__PURE__*/(0,a/* .jsx */.tZ)(u/* ["default"] */.Z,{name:"addImage",width:32,height:32}),/*#__PURE__*/(0,a/* .jsx */.tZ)(c/* ["default"] */.Z,{disabled:x,size:b[n],variant:"secondary",buttonContentCss:w.buttonText,"data-cy":"upload-media",children:t}),/*#__PURE__*/(0,a/* .jsx */.tZ)(p/* ["default"] */.Z,{when:r,children:/*#__PURE__*/(0,a/* .jsx */.tZ)("p",{css:w.infoTexts,children:r})})]}),children:e=>{return/*#__PURE__*/(0,a/* .jsxs */.BX)("div",{css:[w.previewWrapper({size:n,isDisabled:x}),m],"data-cy":"media-preview",children:[/*#__PURE__*/(0,a/* .jsx */.tZ)("img",{src:e,alt:s===null||s===void 0?void 0:s.title,css:w.imagePreview}),/*#__PURE__*/(0,a/* .jsxs */.BX)("div",{css:[w.hoverPreview,g],"data-hover-buttons-wrapper":true,children:[/*#__PURE__*/(0,a/* .jsx */.tZ)(c/* ["default"] */.Z,{disabled:x,variant:"secondary",size:b[n],buttonCss:/*#__PURE__*/(0,i/* .css */.iv)("margin-top:",Z&&v/* .spacing["16"] */.W0["16"],";"),onClick:e=>{e.stopPropagation();d()},"data-cy":"replace-media",children:_||(0,o.__)("Replace Image","tutor")}),/*#__PURE__*/(0,a/* .jsx */.tZ)(p/* ["default"] */.Z,{when:Z,children:/*#__PURE__*/(0,a/* .jsx */.tZ)(c/* ["default"] */.Z,{disabled:x,variant:"text",size:b[n],onClick:e=>{e.stopPropagation();l()},"data-cy":"clear-media",children:(0,o.__)("Remove","tutor")})})]})]})}})})};/* ESM default export */const y=_;var w={emptyMedia:e=>{var{size:t,isDisabled:r}=e;return/*#__PURE__*/(0,i/* .css */.iv)("width:100%;height:168px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:",v/* .spacing["8"] */.W0["8"],";border:1px dashed ",v/* .colorTokens.stroke.border */.Jv.stroke.border,";border-radius:",v/* .borderRadius["8"] */.E0["8"],";background-color:",v/* .colorTokens.bg.white */.Jv.bg.white,";overflow:hidden;cursor:",r?"not-allowed":"pointer",";",t==="small"&&(0,i/* .css */.iv)(m()),"    svg{color:",v/* .colorTokens.icon["default"] */.Jv.icon["default"],";}&:hover svg{color:",!r&&v/* .colorTokens.brand.blue */.Jv.brand.blue,";}")},buttonText:/*#__PURE__*/(0,i/* .css */.iv)("color:",v/* .colorTokens.text.brand */.Jv.text.brand,";"),infoTexts:/*#__PURE__*/(0,i/* .css */.iv)(f/* .typography.tiny */.c.tiny(),";color:",v/* .colorTokens.text.subdued */.Jv.text.subdued,";text-align:center;"),previewWrapper:e=>{var{size:t,isDisabled:r}=e;return/*#__PURE__*/(0,i/* .css */.iv)("width:100%;height:168px;border:1px solid ",v/* .colorTokens.stroke["default"] */.Jv.stroke["default"],";border-radius:",v/* .borderRadius["8"] */.E0["8"],";overflow:hidden;position:relative;background-color:",v/* .colorTokens.bg.white */.Jv.bg.white,";",t==="small"&&(0,i/* .css */.iv)(g()),"    &:hover{[data-hover-buttons-wrapper]{display:",r?"none":"flex",";opacity:",r?0:1,";}}")},imagePreview:/*#__PURE__*/(0,i/* .css */.iv)("height:100%;width:100%;object-fit:contain;"),hoverPreview:/*#__PURE__*/(0,i/* .css */.iv)("display:flex;flex-direction:column;justify-content:center;align-items:center;gap:",v/* .spacing["8"] */.W0["8"],";opacity:0;position:absolute;inset:0;background-color:",l()(v/* .colorTokens.color.black.main */.Jv.color.black.main,.6),";button:first-of-type{box-shadow:",v/* .shadow.button */.AF.button,";}button:last-of-type:not(:only-of-type){color:",v/* .colorTokens.text.white */.Jv.text.white,";box-shadow:none;}")}},86766:function(e,t,r){r.d(t,{Z:()=>p});/* ESM import */var n=r(58865);/* ESM import */var a=r(35944);/* ESM import */var i=r(70917);/* ESM import */var o=r(60860);/* ESM import */var s=r(17106);/* ESM import */var d=r(22456);/* ESM import */var l=r(26815);function c(){var e=(0,n._)(["\n      height: ",";\n      display: inline-flex;\n      border-radius: ",";\n      align-items: center;\n      gap: ",";\n      overflow: hidden;\n      background: linear-gradient(88.9deg, #d65702 6.26%, #e5803c 91.4%);\n    "]);c=function t(){return e};return e}function u(){var e=(0,n._)(["\n        padding: 0;\n        padding-inline: ",";\n        margin: 0;\n      "]);u=function t(){return e};return e}function v(){var e=(0,n._)(["\n      display: inline-flex;\n      position: static;\n      transform: none;\n      padding: ",";\n      color: ",";\n      margin-right: ",";\n      font-size: ",";\n      line-height: ",";\n\n      ","\n    "]);v=function t(){return e};return e}var f=e=>{var{children:t,content:r,size:n="regular",textOnly:i}=e;return/*#__PURE__*/(0,a/* .jsxs */.BX)("div",{css:m.wrapper({hasChildren:(0,d/* .isDefined */.$K)(t),size:n}),children:[t,/*#__PURE__*/(0,a/* .jsx */.tZ)(s/* ["default"] */.Z,{when:!(0,d/* .isDefined */.$K)(t)&&!i,children:/*#__PURE__*/(0,a/* .jsx */.tZ)(l/* ["default"] */.Z,{name:n==="tiny"?"crownRoundedSmall":"crownRounded",width:h[n].iconSize,height:h[n].iconSize})}),/*#__PURE__*/(0,a/* .jsx */.tZ)("div",{css:m.content({hasChildren:(0,d/* .isDefined */.$K)(t),size:n,textOnly:i}),children:(0,d/* .isDefined */.$K)(t)?/*#__PURE__*/(0,a/* .jsx */.tZ)(l/* ["default"] */.Z,{name:n==="tiny"?"crownRoundedSmall":"crownRounded",width:n==="tiny"?h[n].iconSize:16}):r})]})};/* ESM default export */const p=f;var h={tiny:{borderRadius:o/* .spacing["10"] */.W0["10"],height:o/* .spacing["10"] */.W0["10"],gap:o/* .spacing["2"] */.W0["2"],iconSize:10,fontSize:"0.5rem",lineHeight:"0.625rem"},small:{borderRadius:o/* .spacing["16"] */.W0["16"],height:o/* .spacing["16"] */.W0["16"],gap:o/* .spacing["4"] */.W0["4"],iconSize:16,fontSize:o/* .fontSize["10"] */.JB["10"],lineHeight:o/* .lineHeight["16"] */.Nv["16"]},regular:{borderRadius:"22px",height:"22px",gap:"5px",iconSize:22,fontSize:o/* .fontSize["14"] */.JB["14"],lineHeight:o/* .lineHeight["18"] */.Nv["18"]},large:{borderRadius:"26px",height:"26px",gap:o/* .spacing["6"] */.W0["6"],iconSize:26,fontSize:o/* .fontSize["16"] */.JB["16"],lineHeight:o/* .lineHeight["26"] */.Nv["26"]}};var m={wrapper:e=>{var{hasChildren:t,size:r="regular"}=e;return/*#__PURE__*/(0,i/* .css */.iv)("position:relative;svg{flex-shrink:0;}",!t&&(0,i/* .css */.iv)(c(),h[r].height,h[r].borderRadius,h[r].gap))},content:e=>{var{hasChildren:t,size:r="regular",textOnly:n}=e;return/*#__PURE__*/(0,i/* .css */.iv)("position:absolute;top:0;right:0;display:flex;flex-shrink:0;transform:translateX(50%) translateY(-50%);",!t&&(0,i/* .css */.iv)(v(),o/* .spacing["2"] */.W0["2"],o/* .colorTokens.icon.white */.Jv.icon.white,h[r].gap,h[r].fontSize,h[r].lineHeight,n&&(0,i/* .css */.iv)(u(),o/* .spacing["6"] */.W0["6"])))}}},63772:function(e,t,r){r.d(t,{Z:()=>m});/* ESM import */var n=r(58865);/* ESM import */var a=r(35944);/* ESM import */var i=r(70917);/* ESM import */var o=r(87363);/* ESM import */var s=/*#__PURE__*/r.n(o);/* ESM import */var d=r(60860);/* ESM import */var l=r(76487);/* ESM import */var c=r(29535);/* ESM import */var u=r(34403);function v(){var e=(0,n._)(["\n      color: ",";\n    "]);v=function t(){return e};return e}function f(){var e=(0,n._)(["\n        margin-right: ",";\n      "]);f=function t(){return e};return e}var p=/*#__PURE__*/s().forwardRef((e,t)=>{var{name:r,checked:n,readOnly:i,disabled:o=false,labelCss:s,label:d,icon:l,value:c,onChange:v,onBlur:f,description:p}=e;var m=(0,u/* .nanoid */.x0)();return/*#__PURE__*/(0,a/* .jsxs */.BX)("div",{css:h.wrapper,children:[/*#__PURE__*/(0,a/* .jsxs */.BX)("label",{htmlFor:m,css:[h.container(o),s],children:[/*#__PURE__*/(0,a/* .jsx */.tZ)("input",{ref:t,id:m,name:r,type:"radio",checked:n,readOnly:i,value:c,disabled:o,onChange:v,onBlur:f,css:[h.radio(d)]}),/*#__PURE__*/(0,a/* .jsx */.tZ)("span",{}),l,d]}),p&&/*#__PURE__*/(0,a/* .jsx */.tZ)("p",{css:h.description,children:p})]})});var h={wrapper:/*#__PURE__*/(0,i/* .css */.iv)(c/* .styleUtils.display.flex */.i.display.flex("column"),";gap:",d/* .spacing["8"] */.W0["8"],";"),container:e=>/*#__PURE__*/(0,i/* .css */.iv)(l/* .typography.caption */.c.caption(),";display:flex;align-items:center;cursor:pointer;user-select:none;",e&&(0,i/* .css */.iv)(v(),d/* .colorTokens.text.disable */.Jv.text.disable)),radio:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return/*#__PURE__*/(0,i/* .css */.iv)("position:absolute;opacity:0;height:0;width:0;cursor:pointer;& + span{position:relative;cursor:pointer;height:18px;width:18px;background-color:",d/* .colorTokens.background.white */.Jv.background.white,";border:2px solid ",d/* .colorTokens.stroke["default"] */.Jv.stroke["default"],";border-radius:100%;",e&&(0,i/* .css */.iv)(f(),d/* .spacing["10"] */.W0["10"]),"}& + span::before{content:'';position:absolute;left:3px;top:3px;background-color:",d/* .colorTokens.background.white */.Jv.background.white,";width:8px;height:8px;border-radius:100%;}&:checked + span{border-color:",d/* .colorTokens.action.primary["default"] */.Jv.action.primary["default"],";}&:checked + span::before{background-color:",d/* .colorTokens.action.primary["default"] */.Jv.action.primary["default"],";}&:focus-visible{& + span{outline:2px solid ",d/* .colorTokens.stroke.brand */.Jv.stroke.brand,";outline-offset:1px;}}")},description:/*#__PURE__*/(0,i/* .css */.iv)(l/* .typography.small */.c.small(),";color:",d/* .colorTokens.text.hints */.Jv.text.hints,";padding-left:30px;")};/* ESM default export */const m=p},98978:function(e,t,r){r.d(t,{Z:()=>l});/* ESM import */var n=r(35944);/* ESM import */var a=r(60860);/* ESM import */var i=r(78151);/* ESM import */var o=r(70917);/* ESM import */var s=r(87363);/* ESM import */var d=/*#__PURE__*/r.n(s);var l=/*#__PURE__*/d().forwardRef((e,t)=>{var{className:r,variant:a}=e;return/*#__PURE__*/(0,n/* .jsx */.tZ)("div",{className:r,ref:t,css:u({variant:a})})});l.displayName="Separator";var c={horizontal:/*#__PURE__*/(0,o/* .css */.iv)("height:1px;width:100%;"),vertical:/*#__PURE__*/(0,o/* .css */.iv)("height:100%;width:1px;"),base:/*#__PURE__*/(0,o/* .css */.iv)("flex-shrink:0;background-color:",a/* .colorTokens.stroke.divider */.Jv.stroke.divider,";")};var u=(0,i/* .createVariation */.Y)({variants:{variant:{horizontal:c.horizontal,vertical:c.vertical}},defaultVariants:{variant:"horizontal"}},c.base)},85746:function(e,t,r){r.d(t,{Z:()=>x});/* ESM import */var n=r(58865);/* ESM import */var a=r(35944);/* ESM import */var i=r(70917);/* ESM import */var o=r(38003);/* ESM import */var s=/*#__PURE__*/r.n(o);/* ESM import */var d=r(87363);/* ESM import */var l=/*#__PURE__*/r.n(d);/* ESM import */var c=r(34039);/* ESM import */var u=r(74053);/* ESM import */var v=r(60860);/* ESM import */var f=r(29535);/* ESM import */var p=r(34403);function h(){var e=(0,n._)(["\n        ","\n      "]);h=function t(){return e};return e}function m(){var e=(0,n._)(["\n        border-top-right-radius: ",";\n      "]);m=function t(){return e};return e}function g(){var e=(0,n._)(["\n          ","\n        "]);g=function t(){return e};return e}function b(){var e=(0,n._)(["\n      .mce-tinymce.mce-container {\n        border: ",";\n        border-radius: ",";\n\n        ","\n      }\n    "]);b=function t(){return e};return e}var _=!!c/* .tutorConfig.tutor_pro_url */.y.tutor_pro_url;// Without getDefaultSettings function editor does not initiate
if(!window.wp.editor.getDefaultSettings){window.wp.editor.getDefaultSettings=()=>({})}function y(e,t,r,n,a,i,s,d,l,u,v,f,p){var h=f||(n?"bold italic underline | image | ".concat(_?"codesample":""):"formatselect bold italic underline | bullist numlist | blockquote | alignleft aligncenter alignright | link unlink | wp_more ".concat(_?" codesample":""," | wp_adv"));var m=p||"strikethrough hr | forecolor pastetext removeformat | charmap | outdent indent | undo redo | wp_help | fullscreen | tutor_button | undoRedoDropdown";h=v?h:h.replaceAll(" | "," ");return{tinymce:{wpautop:true,menubar:false,autoresize_min_height:l||200,autoresize_max_height:u||500,wp_autoresize_on:true,browser_spellcheck:!d,convert_urls:false,end_container_on_empty_block:true,entities:"38,amp,60,lt,62,gt",entity_encoding:"raw",fix_list_elements:true,indent:false,relative_urls:0,remove_script_host:0,plugins:"charmap,colorpicker,hr,lists,image,media,paste,tabfocus,textcolor,fullscreen,wordpress,wpautoresize,wpeditimage,wpemoji,wpgallery,wplink,wpdialogs,wptextpattern,wpview".concat(_?",codesample":""),skin:"light",skin_url:"".concat(c/* .tutorConfig.site_url */.y.site_url,"/wp-content/plugins/tutor/assets/lib/tinymce/light"),submit_patch:true,link_context_toolbar:false,theme:"modern",toolbar:!d,toolbar1:h,toolbar2:n?false:m,content_css:"".concat(c/* .tutorConfig.site_url */.y.site_url,"/wp-includes/css/dashicons.min.css,").concat(c/* .tutorConfig.site_url */.y.site_url,"/wp-includes/js/tinymce/skins/wordpress/wp-content.css,").concat(c/* .tutorConfig.site_url */.y.site_url,"/wp-content/plugins/tutor/assets/lib/tinymce/light/content.min.css"),statusbar:!d,branding:false,// eslint-disable-next-line @typescript-eslint/no-explicit-any
setup:a=>{a.on("init",()=>{if(e&&!d){a.getBody().focus()}if(d){a.setMode("readonly");var t=a.contentDocument.querySelector(".mce-content-body");t.style.backgroundColor="transparent";setTimeout(()=>{var e=t.scrollHeight;if(e){a.iframeElement.style.height="".concat(e,"px")}},500)}});if(!n){a.addButton("tutor_button",{text:(0,o.__)("Tutor ShortCode","tutor"),icon:false,type:"menubutton",menu:[{text:(0,o.__)("Student Registration Form","tutor"),onclick:()=>{a.insertContent("[tutor_student_registration_form]")}},{text:(0,o.__)("Instructor Registration Form","tutor"),onclick:()=>{a.insertContent("[tutor_instructor_registration_form]")}},{text:(0,o.__)("Courses","tutor"),onclick:()=>{a.windowManager.open({title:(0,o.__)("Courses Shortcode","tutor"),body:[{type:"textbox",name:"id",label:(0,o.__)("Course id, separate by (,) comma","tutor"),value:""},{type:"textbox",name:"exclude_ids",label:(0,o.__)("Exclude Course IDS","tutor"),value:""},{type:"textbox",name:"category",label:(0,o.__)("Category IDS","tutor"),value:""},{type:"listbox",name:"orderby",label:(0,o.__)("Order By","tutor"),onselect:()=>{},values:[{text:"ID",value:"ID"},{text:"title",value:"title"},{text:"rand",value:"rand"},{text:"date",value:"date"},{text:"menu_order",value:"menu_order"},{text:"post__in",value:"post__in"}]},{type:"listbox",name:"order",label:(0,o.__)("Order","tutor"),onselect:()=>{},values:[{text:"DESC",value:"DESC"},{text:"ASC",value:"ASC"}]},{type:"textbox",name:"count",label:(0,o.__)("Count","tutor"),value:"6"}],// eslint-disable-next-line @typescript-eslint/no-explicit-any
onsubmit:e=>{a.insertContent('[tutor_course id="'.concat(e.data.id,'" exclude_ids="').concat(e.data.exclude_ids,'" category="').concat(e.data.category,'" orderby="').concat(e.data.orderby,'" order="').concat(e.data.order,'" count="').concat(e.data.count,'"]'))}})}}]})}a.on("change keyup paste",()=>{t(a.getContent())});a.on("focus",()=>{r(true)});a.on("blur",()=>r(false));a.on("FullscreenStateChanged",e=>{var t=document.getElementById("tutor-course-builder");var r=document.getElementById("tutor-course-bundle-builder-root");var n=t||r;if(n){if(e.state){n.style.position="relative";n.style.zIndex="100000"}else{n.removeAttribute("style")}}s===null||s===void 0?void 0:s(e.state)})},wp_keep_scroll_position:false,wpeditimage_html5_captions:true},mediaButtons:!a&&!n&&!d,drag_drop_upload:true,quicktags:i||n||d?false:{buttons:["strong","em","block","del","ins","img","ul","ol","li","code","more","close"]}}}var w=e=>{var{value:t="",onChange:r,isMinimal:n,hideMediaButtons:i,hideQuickTags:o,autoFocus:s=false,onFullScreenChange:l,readonly:c=false,min_height:v,max_height:f,toolbar1:h,toolbar2:m}=e;var g=(0,d.useRef)(null);var{current:b}=(0,d.useRef)((0,p/* .nanoid */.x0)());var[_,w]=(0,d.useState)(s);var x=e=>{var t=e.target;r(t.value)};var k=(0,d.useCallback)(e=>{var{tinymce:t}=window;if(!t||_){return}var r=window.tinymce.get(b);if(r){if(e!==r.getContent()){r.setContent(e)}}},[b,_]);(0,d.useEffect)(()=>{k(t);// eslint-disable-next-line react-hooks/exhaustive-deps
},[t]);(0,d.useEffect)(()=>{if(typeof window.wp!=="undefined"&&window.wp.editor){window.wp.editor.remove(b);window.wp.editor.initialize(b,y(_,r,w,n,i,o,l,c,v,f,u/* .CURRENT_VIEWPORT.isAboveMobile */.iM.isAboveMobile,h,m));var e=g.current;e===null||e===void 0?void 0:e.addEventListener("change",x);e===null||e===void 0?void 0:e.addEventListener("input",x);return()=>{window.wp.editor.remove(b);e===null||e===void 0?void 0:e.removeEventListener("change",x);e===null||e===void 0?void 0:e.removeEventListener("input",x)}}// eslint-disable-next-line react-hooks/exhaustive-deps
},[c]);return/*#__PURE__*/(0,a/* .jsx */.tZ)("div",{css:Z.wrapper({hideQuickTags:o,isMinimal:n,isFocused:_,isReadOnly:c}),children:/*#__PURE__*/(0,a/* .jsx */.tZ)("textarea",{"data-cy":"tutor-tinymce",ref:g,id:b,defaultValue:t})})};/* ESM default export */const x=w;var Z={wrapper:e=>{var{hideQuickTags:t,isMinimal:r,isFocused:n,isReadOnly:a}=e;return/*#__PURE__*/(0,i/* .css */.iv)("flex:1;.wp-editor-tools{z-index:auto;}.wp-editor-container{border-top-left-radius:",v/* .borderRadius["6"] */.E0["6"],";border-bottom-left-radius:",v/* .borderRadius["6"] */.E0["6"],";border-bottom-right-radius:",v/* .borderRadius["6"] */.E0["6"],";",n&&!a&&(0,i/* .css */.iv)(h(),f/* .styleUtils.inputFocus */.i.inputFocus),":focus-within{",!a&&f/* .styleUtils.inputFocus */.i.inputFocus,"}}.wp-switch-editor{height:auto;border:1px solid #dcdcde;border-radius:0px;border-top-left-radius:",v/* .borderRadius["4"] */.E0["4"],";border-top-right-radius:",v/* .borderRadius["4"] */.E0["4"],";top:2px;padding:3px 8px 4px;font-size:13px;color:#646970;&:focus,&:active,&:hover{background:#f0f0f1;color:#646970;}}.mce-btn button{&:focus,&:active,&:hover{background:none;color:#50575e;}}.mce-toolbar-grp,.quicktags-toolbar{border-top-left-radius:",v/* .borderRadius["6"] */.E0["6"],";",(t||r)&&(0,i/* .css */.iv)(m(),v/* .borderRadius["6"] */.E0["6"]),"}.mce-top-part::before{display:none;}.mce-statusbar{border-bottom-left-radius:",v/* .borderRadius["6"] */.E0["6"],";border-bottom-right-radius:",v/* .borderRadius["6"] */.E0["6"],";}.mce-tinymce{box-shadow:none;background-color:transparent;}.mce-edit-area{background-color:unset;}",(t||r)&&(0,i/* .css */.iv)(b(),!a?"1px solid ".concat(v/* .colorTokens.stroke["default"] */.Jv.stroke["default"]):"none",v/* .borderRadius["6"] */.E0["6"],n&&!a&&(0,i/* .css */.iv)(g(),f/* .styleUtils.inputFocus */.i.inputFocus)),"    textarea{visibility:visible !important;width:100%;resize:none;border:none;outline:none;padding:",v/* .spacing["10"] */.W0["10"],";}")}}},60274:function(e,t,r){r.d(t,{Z:()=>h});/* ESM import */var n=r(7409);/* ESM import */var a=r(99282);/* ESM import */var i=r(98848);/* ESM import */var o=r(35944);/* ESM import */var s=r(69602);/* ESM import */var d=r(60860);/* ESM import */var l=r(76487);/* ESM import */var c=r(70917);/* ESM import */var u=r(26815);/* ESM import */var v=r(58982);/* ESM import */var f=r(84978);var p=e=>{var{field:t,fieldState:r,disabled:d,value:l,onChange:c,label:p,description:h,helpText:g,isHidden:b,labelCss:_}=e;return/*#__PURE__*/(0,o/* .jsx */.tZ)(f/* ["default"] */.Z,{field:t,fieldState:r,isHidden:b,children:e=>{var{css:r}=e,f=(0,i._)(e,["css"]);return/*#__PURE__*/(0,o/* .jsxs */.BX)("div",{children:[/*#__PURE__*/(0,o/* .jsxs */.BX)("div",{css:m.wrapper,children:[/*#__PURE__*/(0,o/* .jsx */.tZ)(s/* ["default"] */.Z,(0,a._)((0,n._)({},t,f),{inputCss:r,labelCss:_,value:l,disabled:d,checked:t.value,label:p,onChange:()=>{t.onChange(!t.value);if(c){c(!t.value)}}})),g&&/*#__PURE__*/(0,o/* .jsx */.tZ)(v/* ["default"] */.Z,{content:g,placement:"top",allowHTML:true,children:/*#__PURE__*/(0,o/* .jsx */.tZ)(u/* ["default"] */.Z,{name:"info",width:20,height:20})})]}),h&&/*#__PURE__*/(0,o/* .jsx */.tZ)("p",{css:m.description,children:h})]})}})};/* ESM default export */const h=p;var m={wrapper:/*#__PURE__*/(0,c/* .css */.iv)("display:flex;align-items:center;gap:",d/* .spacing["6"] */.W0["6"],";& > div{display:flex;color:",d/* .colorTokens.icon["default"] */.Jv.icon["default"],";}"),description:/*#__PURE__*/(0,c/* .css */.iv)(l/* .typography.small */.c.small(),"    color:",d/* .colorTokens.text.hints */.Jv.text.hints,";padding-left:30px;margin-top:",d/* .spacing["6"] */.W0["6"],";")}},42456:function(e,t,r){r.d(t,{Z:()=>E});/* ESM import */var n=r(7409);/* ESM import */var a=r(99282);/* ESM import */var i=r(98848);/* ESM import */var o=r(35944);/* ESM import */var s=r(70917);/* ESM import */var d=r(12274);/* ESM import */var l=r(32449);/* ESM import */var c=r(87363);/* ESM import */var u=/*#__PURE__*/r.n(c);/* ESM import */var v=r(57684);/* ESM import */var f=r(19398);/* ESM import */var p=r(26815);/* ESM import */var h=r(74053);/* ESM import */var m=r(60860);/* ESM import */var g=r(98567);/* ESM import */var b=r(29535);/* ESM import */var _=r(70165);/* ESM import */var y=r(76487);/* ESM import */var w=r(84978);// Create DayPicker formatters based on WordPress locale
var x=()=>{if(typeof window==="undefined"||!window.wp||!window.wp.date){return}var{format:e}=wp.date;return{formatMonthDropdown:t=>e("F",t),formatMonthCaption:t=>e("F",t),formatCaption:t=>e("F",t),formatWeekdayName:t=>e("D",t)}};var Z=e=>{if(!e)return undefined;return(0,d["default"])(new Date(e))?new Date(e.length===10?e+"T00:00:00":e):undefined};var k=e=>{var{label:t,field:r,fieldState:s,disabled:d,disabledBefore:u,disabledAfter:m,loading:b,placeholder:_,helpText:y,isClearable:k=true,onChange:E,dateFormat:M=h/* .DateFormats.monthDayYear */.E_.monthDayYear}=e;var W=(0,c.useRef)(null);var[D,T]=(0,c.useState)(false);var S=Z(r.value);var B=typeof window!=="undefined"&&window.wp&&window.wp.date;var N=S?B?window.wp.date.format("F j, Y",S):(0,l["default"])(S,M):"";var{triggerRef:I,position:O,popoverRef:A}=(0,g/* .usePortalPopover */.l)({isOpen:D,isDropdown:true});var L=()=>{var e;T(false);(e=W.current)===null||e===void 0?void 0:e.focus()};var z=Z(u);var U=Z(m);return/*#__PURE__*/(0,o/* .jsx */.tZ)(w/* ["default"] */.Z,{label:t,field:r,fieldState:s,disabled:d,loading:b,placeholder:_,helpText:y,children:e=>{var{css:t}=e,s=(0,i._)(e,["css"]);return/*#__PURE__*/(0,o/* .jsxs */.BX)("div",{children:[/*#__PURE__*/(0,o/* .jsxs */.BX)("div",{css:C.wrapper,ref:I,children:[/*#__PURE__*/(0,o/* .jsx */.tZ)("input",(0,a._)((0,n._)({},s),{css:[t,C.input],ref:e=>{r.ref(e);// @ts-ignore
W.current=e},type:"text",value:N,onClick:e=>{e.stopPropagation();T(e=>!e)},onKeyDown:e=>{if(e.key==="Enter"){e.preventDefault();T(e=>!e)}},autoComplete:"off","data-input":true})),/*#__PURE__*/(0,o/* .jsx */.tZ)(p/* ["default"] */.Z,{name:"calendarLine",width:30,height:32,style:C.icon}),k&&r.value&&/*#__PURE__*/(0,o/* .jsx */.tZ)(f/* ["default"] */.Z,{variant:"text",buttonCss:C.clearButton,onClick:()=>{r.onChange("")},children:/*#__PURE__*/(0,o/* .jsx */.tZ)(p/* ["default"] */.Z,{name:"times",width:12,height:12})})]}),/*#__PURE__*/(0,o/* .jsx */.tZ)(g/* .Portal */.h,{isOpen:D,onClickOutside:L,onEscape:L,children:/*#__PURE__*/(0,o/* .jsx */.tZ)("div",{css:[C.pickerWrapper,{[h/* .isRTL */.dZ?"right":"left"]:O.left,top:O.top}],ref:A,children:/*#__PURE__*/(0,o/* .jsx */.tZ)(v/* .DayPicker */._,{dir:h/* .isRTL */.dZ?"rtl":"ltr",animate:true,mode:"single",formatters:x(),disabled:[!!z&&{before:z},!!U&&{after:U}],selected:S,onSelect:e=>{if(e){var t=(0,l["default"])(e,h/* .DateFormats.yearMonthDay */.E_.yearMonthDay);r.onChange(t);L();if(E){E(t)}}},showOutsideDays:true,captionLayout:"dropdown",autoFocus:true,defaultMonth:S||new Date,startMonth:z||new Date(new Date().getFullYear()-10,0),endMonth:U||new Date(new Date().getFullYear()+10,11),weekStartsOn:B?window.wp.date.getSettings().l10n.startOfWeek:0})})})]})}})};/* ESM default export */const E=k;var C={wrapper:/*#__PURE__*/(0,s/* .css */.iv)("position:relative;&:hover,&:focus-within{& > button{opacity:1;}}"),input:/*#__PURE__*/(0,s/* .css */.iv)("&[data-input]{padding-left:",m/* .spacing["40"] */.W0["40"],";}"),icon:/*#__PURE__*/(0,s/* .css */.iv)("position:absolute;top:50%;left:",m/* .spacing["8"] */.W0["8"],";transform:translateY(-50%);color:",m/* .colorTokens.icon["default"] */.Jv.icon["default"],";"),pickerWrapper:/*#__PURE__*/(0,s/* .css */.iv)(y/* .typography.body */.c.body("regular"),";position:absolute;background-color:",m/* .colorTokens.background.white */.Jv.background.white,";box-shadow:",m/* .shadow.popover */.AF.popover,";border-radius:",m/* .borderRadius["6"] */.E0["6"],";.rdp-root{--rdp-day-height:40px;--rdp-day-width:40px;--rdp-day_button-height:40px;--rdp-day_button-width:40px;--rdp-nav-height:40px;--rdp-today-color:",m/* .colorTokens.text.title */.Jv.text.title,";--rdp-caption-font-size:",m/* .fontSize["18"] */.JB["18"],";--rdp-accent-color:",m/* .colorTokens.action.primary["default"] */.Jv.action.primary["default"],";--rdp-background-color:",m/* .colorTokens.background.hover */.Jv.background.hover,";--rdp-accent-color-dark:",m/* .colorTokens.action.primary.active */.Jv.action.primary.active,";--rdp-background-color-dark:",m/* .colorTokens.action.primary.hover */.Jv.action.primary.hover,";--rdp-selected-color:",m/* .colorTokens.text.white */.Jv.text.white,";--rdp-day_button-border-radius:",m/* .borderRadius.circle */.E0.circle,";--rdp-outside-opacity:0.5;--rdp-disabled-opacity:0.25;}.rdp-months{margin:",m/* .spacing["16"] */.W0["16"],";}.rdp-month_grid{margin:0px;}.rdp-day{padding:0px;}.rdp-nav{--rdp-accent-color:",m/* .colorTokens.text.primary */.Jv.text.primary,";button{border-radius:",m/* .borderRadius.circle */.E0.circle,";&:hover,&:focus,&:active{background-color:",m/* .colorTokens.background.hover */.Jv.background.hover,";color:",m/* .colorTokens.text.primary */.Jv.text.primary,";}&:focus-visible:not(:disabled){--rdp-accent-color:",m/* .colorTokens.text.white */.Jv.text.white,";background-color:",m/* .colorTokens.background.brand */.Jv.background.brand,";}}}.rdp-dropdown_root{.rdp-caption_label{padding:",m/* .spacing["8"] */.W0["8"],";}}.rdp-today{.rdp-day_button{font-weight:",m/* .fontWeight.bold */.Ue.bold,";}}.rdp-selected{color:var(--rdp-selected-color);background-color:var(--rdp-accent-color);border-radius:",m/* .borderRadius.circle */.E0.circle,";font-weight:",m/* .fontWeight.regular */.Ue.regular,";.rdp-day_button{&:hover,&:focus,&:active{background-color:var(--rdp-accent-color);color:",m/* .colorTokens.text.primary */.Jv.text.primary,";}&:focus-visible{outline:2px solid var(--rdp-accent-color);outline-offset:2px;}&:not(.rdp-outside){color:var(--rdp-selected-color);}}}.rdp-day_button{&:hover,&:focus,&:active{background-color:var(--rdp-background-color);color:",m/* .colorTokens.text.primary */.Jv.text.primary,";}&:focus-visible:not([disabled]){color:var(--rdp-selected-color);opacity:1;background-color:var(--rdp-accent-color);}}"),clearButton:/*#__PURE__*/(0,s/* .css */.iv)("position:absolute;top:50%;right:",m/* .spacing["4"] */.W0["4"],";transform:translateY(-50%);width:32px;height:32px;",b/* .styleUtils.flexCenter */.i.flexCenter(),";opacity:0;transition:background-color 0.3s ease-in-out,opacity 0.3s ease-in-out;border-radius:",m/* .borderRadius["2"] */.E0["2"],";:hover{background-color:",m/* .colorTokens.background.hover */.Jv.background.hover,";}")}},86774:function(e,t,r){r.d(t,{Z:()=>Z});/* ESM import */var n=r(58865);/* ESM import */var a=r(35944);/* ESM import */var i=r(70917);/* ESM import */var o=r(38003);/* ESM import */var s=/*#__PURE__*/r.n(o);/* ESM import */var d=r(19398);/* ESM import */var l=r(26815);/* ESM import */var c=r(84978);/* ESM import */var u=r(60860);/* ESM import */var v=r(76487);/* ESM import */var f=r(36352);/* ESM import */var p=r(17106);/* ESM import */var h=r(52357);/* ESM import */var m=r(43372);/* ESM import */var g=r(29535);function b(){var e=(0,n._)(["\n      background-color: ",";\n      padding: "," 0 "," ",";\n      border: 1px solid ",";\n      border-radius: ",";\n      gap: ",";\n    "]);b=function t(){return e};return e}function _(){var e=(0,n._)(["\n      margin-right: ",";\n    "]);_=function t(){return e};return e}var y={iso:["iso"],dwg:["dwg"],pdf:["pdf"],doc:["doc","docx"],csv:["csv"],xls:["xls","xlsx"],ppt:["ppt","pptx"],zip:["zip"],archive:["rar","7z","tar","gz"],txt:["txt"],rtf:["rtf"],text:["log"],jpg:["jpg"],png:["png"],image:["jpeg","gif","webp","avif"],mp3:["mp3"],fla:["fla"],audio:["ogg","wav","wma"],mp4:["mp4"],avi:["avi"],ai:["ai"],videoFile:["mkv","mpeg","flv","mov","wmv"],svg:["svg"],css:["css"],javascript:["js"],xml:["xml"],html:["html"],exe:["exe"],psd:["psd"],jsonFile:["json"],dbf:["dbf"]};var w=e=>{for(var[t,r]of Object.entries(y)){if(r.includes(e)){return t}}return"file"};var x=e=>{var{field:t,fieldState:r,label:n,helpText:i,buttonText:s=(0,o.__)("Upload Media","tutor"),selectMultiple:u=false,onChange:v,maxFileSize:h,maxFiles:b}=e;var _=t.value;var{openMediaLibrary:y,resetFiles:x}=(0,m/* ["default"] */.Z)({options:{multiple:u,maxFiles:b,maxFileSize:h},onChange:e=>{t.onChange(e);if(v){v(e)}},initialFiles:_?Array.isArray(_)?_:[_]:[]});var Z=()=>{y()};var E=e=>{x();if(u){var r=(Array.isArray(_)?_:_?[_]:[]).filter(t=>t.id!==e);t.onChange(r.length>0?r:null);if(v){v(r.length>0?r:null)}}else{t.onChange(null);if(v){v(null)}}};return/*#__PURE__*/(0,a/* .jsx */.tZ)(c/* ["default"] */.Z,{label:n,field:t,fieldState:r,helpText:i,children:()=>{return/*#__PURE__*/(0,a/* .jsx */.tZ)(p/* ["default"] */.Z,{when:_,fallback:/*#__PURE__*/(0,a/* .jsx */.tZ)(d/* ["default"] */.Z,{buttonCss:k.uploadButton,icon:/*#__PURE__*/(0,a/* .jsx */.tZ)(l/* ["default"] */.Z,{name:"attach",height:24,width:24}),variant:"secondary",onClick:Z,children:s}),children:e=>/*#__PURE__*/(0,a/* .jsxs */.BX)("div",{css:k.wrapper({hasFiles:Array.isArray(e)?e.length>0:e!==null}),children:[/*#__PURE__*/(0,a/* .jsx */.tZ)("div",{css:k.attachmentsWrapper,children:/*#__PURE__*/(0,a/* .jsx */.tZ)(f/* ["default"] */.Z,{each:Array.isArray(e)?e:[e],children:e=>/*#__PURE__*/(0,a/* .jsxs */.BX)("div",{css:k.attachmentCardWrapper,children:[/*#__PURE__*/(0,a/* .jsxs */.BX)("div",{css:k.attachmentCard,children:[/*#__PURE__*/(0,a/* .jsx */.tZ)(l/* ["default"] */.Z,{style:k.fileIcon,name:w(e.ext||"file"),height:40,width:40}),/*#__PURE__*/(0,a/* .jsxs */.BX)("div",{css:k.attachmentCardBody,children:[/*#__PURE__*/(0,a/* .jsxs */.BX)("div",{css:k.attachmentCardTitle,children:[/*#__PURE__*/(0,a/* .jsx */.tZ)("div",{title:e.title,css:g/* .styleUtils.text.ellipsis */.i.text.ellipsis(1),children:e.title}),/*#__PURE__*/(0,a/* .jsx */.tZ)("div",{css:k.fileExtension,children:".".concat(e.ext)})]}),/*#__PURE__*/(0,a/* .jsx */.tZ)("div",{css:k.attachmentCardSubtitle,children:/*#__PURE__*/(0,a/* .jsx */.tZ)("span",{children:"".concat((0,o.__)("Size","tutor"),": ").concat(e.size)})})]})]}),/*#__PURE__*/(0,a/* .jsx */.tZ)("button",{type:"button",css:k.removeButton,onClick:()=>{E(e.id)},children:/*#__PURE__*/(0,a/* .jsx */.tZ)(l/* ["default"] */.Z,{name:"cross",height:24,width:24})})]},e.id)})}),/*#__PURE__*/(0,a/* .jsx */.tZ)("div",{css:k.uploadButtonWrapper({hasFiles:Array.isArray(e)?e.length>0:e!==null}),children:/*#__PURE__*/(0,a/* .jsx */.tZ)(d/* ["default"] */.Z,{buttonCss:k.uploadButton,icon:/*#__PURE__*/(0,a/* .jsx */.tZ)(l/* ["default"] */.Z,{name:"attach",height:24,width:24}),variant:"secondary",onClick:Z,"data-cy":"upload-media",children:s})})]})})}})};/* ESM default export */const Z=(0,h/* .withVisibilityControl */.v)(x);var k={wrapper:e=>{var{hasFiles:t}=e;return/*#__PURE__*/(0,i/* .css */.iv)("display:flex;flex-direction:column;position:relative;",t&&(0,i/* .css */.iv)(b(),u/* .colorTokens.background.white */.Jv.background.white,u/* .spacing["16"] */.W0["16"],u/* .spacing["16"] */.W0["16"],u/* .spacing["16"] */.W0["16"],u/* .colorTokens.stroke["default"] */.Jv.stroke["default"],u/* .borderRadius.card */.E0.card,u/* .spacing["8"] */.W0["8"]))},attachmentsWrapper:/*#__PURE__*/(0,i/* .css */.iv)("max-height:260px;padding-right:",u/* .spacing["16"] */.W0["16"],";",g/* .styleUtils.overflowYAuto */.i.overflowYAuto,";"),attachmentCardWrapper:/*#__PURE__*/(0,i/* .css */.iv)(g/* .styleUtils.display.flex */.i.display.flex(),";justify-content:space-between;align-items:center;gap:",u/* .spacing["20"] */.W0["20"],";padding:",u/* .spacing["4"] */.W0["4"]," ",u/* .spacing["12"] */.W0["12"]," ",u/* .spacing["4"] */.W0["4"]," 0;border-radius:",u/* .borderRadius["6"] */.E0["6"],";button{opacity:0;}&:hover,&:focus-within{background:",u/* .colorTokens.background.hover */.Jv.background.hover,";button{opacity:1;}}",u/* .Breakpoint.smallTablet */.Uo.smallTablet,"{button{opacity:1;}}"),attachmentCard:/*#__PURE__*/(0,i/* .css */.iv)(g/* .styleUtils.display.flex */.i.display.flex(),";align-items:center;gap:",u/* .spacing["8"] */.W0["8"],";overflow:hidden;"),attachmentCardBody:/*#__PURE__*/(0,i/* .css */.iv)(g/* .styleUtils.display.flex */.i.display.flex("column"),";gap:",u/* .spacing["4"] */.W0["4"],";"),attachmentCardTitle:/*#__PURE__*/(0,i/* .css */.iv)(g/* .styleUtils.display.flex */.i.display.flex(),";",v/* .typography.caption */.c.caption("medium"),"    word-break:break-all;"),fileExtension:/*#__PURE__*/(0,i/* .css */.iv)("flex-shrink:0;"),attachmentCardSubtitle:/*#__PURE__*/(0,i/* .css */.iv)(v/* .typography.tiny */.c.tiny("regular")," ",g/* .styleUtils.display.flex */.i.display.flex(),";align-items:center;gap:",u/* .spacing["8"] */.W0["8"],";color:",u/* .colorTokens.text.hints */.Jv.text.hints,";svg{color:",u/* .colorTokens.icon["default"] */.Jv.icon["default"],";}"),uploadButtonWrapper:e=>{var{hasFiles:t}=e;return/*#__PURE__*/(0,i/* .css */.iv)(t&&(0,i/* .css */.iv)(_(),u/* .spacing["16"] */.W0["16"]))},uploadButton:/*#__PURE__*/(0,i/* .css */.iv)("width:100%;"),fileIcon:/*#__PURE__*/(0,i/* .css */.iv)("flex-shrink:0;color:",u/* .colorTokens.icon["default"] */.Jv.icon["default"],";"),removeButton:/*#__PURE__*/(0,i/* .css */.iv)(g/* .styleUtils.crossButton */.i.crossButton,";background:none;transition:none;flex-shrink:0;")}},44226:function(e,t,r){r.d(t,{Z:()=>x});/* ESM import */var n=r(35944);/* ESM import */var a=r(38003);/* ESM import */var i=/*#__PURE__*/r.n(a);/* ESM import */var o=r(30647);/* ESM import */var s=r(26815);/* ESM import */var d=r(36853);/* ESM import */var l=r(63260);/* ESM import */var c=r(31342);/* ESM import */var u=r(99678);/* ESM import */var v=r(34039);/* ESM import */var f=r(52357);/* ESM import */var p=r(43372);/* ESM import */var h=r(86056);/* ESM import */var m=r(95781);/* ESM import */var g=r(84978);var b;var _=!!v/* .tutorConfig.tutor_pro_url */.y.tutor_pro_url;var y=(b=v/* .tutorConfig.settings */.y.settings)===null||b===void 0?void 0:b.chatgpt_key_exist;var w=e=>{var{field:t,fieldState:r,label:i,size:v,helpText:f,buttonText:b=(0,a.__)("Upload Media","tutor"),infoText:w,onChange:x,generateWithAi:Z=false,previewImageCss:k,loading:E,onClickAiButton:C}=e;var{showModal:M}=(0,l/* .useModal */.d)();var{openMediaLibrary:W,resetFiles:D}=(0,p/* ["default"] */.Z)({options:{type:"image",multiple:false},onChange:e=>{if(e&&!Array.isArray(e)){var{id:r,url:n,title:a}=e;t.onChange({id:r,url:n,title:a});if(x){x({id:r,url:n,title:a})}}},initialFiles:t.value});var T=t.value;var S=()=>{W()};var B=()=>{D();t.onChange(null);if(x){x(null)}};var N=()=>{if(!_){M({component:c/* ["default"] */.Z,props:{image:m,image2x:h}})}else if(!y){M({component:u/* ["default"] */.Z,props:{image:m,image2x:h}})}else{M({component:d/* ["default"] */.Z,isMagicAi:true,props:{title:(0,a.__)("AI Studio","tutor"),icon:/*#__PURE__*/(0,n/* .jsx */.tZ)(s/* ["default"] */.Z,{name:"magicAiColorize",width:24,height:24}),field:t,fieldState:r}});C===null||C===void 0?void 0:C()}};return/*#__PURE__*/(0,n/* .jsx */.tZ)(g/* ["default"] */.Z,{label:i,field:t,fieldState:r,helpText:f,onClickAiButton:N,generateWithAi:Z,children:()=>{return/*#__PURE__*/(0,n/* .jsx */.tZ)("div",{children:/*#__PURE__*/(0,n/* .jsx */.tZ)(o/* ["default"] */.Z,{size:v,value:T,uploadHandler:S,clearHandler:B,buttonText:b,infoText:w,previewImageCss:k,loading:E})})}})};/* ESM default export */const x=(0,f/* .withVisibilityControl */.v)(w)},99308:function(e,t,r){r.d(t,{Z:()=>f});/* ESM import */var n=r(58865);/* ESM import */var a=r(35944);/* ESM import */var i=r(60860);/* ESM import */var o=r(70917);/* ESM import */var s=r(76487);/* ESM import */var d=r(29535);/* ESM import */var l=r(84978);function c(){var e=(0,n._)(["\n        img {\n          border-color: ",";\n        }\n      "]);c=function t(){return e};return e}function u(){var e=(0,n._)(["\n        outline-color: ",";\n      "]);u=function t(){return e};return e}var v=e=>{var{field:t,fieldState:r,label:n,options:i=[],disabled:o}=e;return/*#__PURE__*/(0,a/* .jsx */.tZ)(l/* ["default"] */.Z,{field:t,fieldState:r,label:n,disabled:o,children:()=>{return/*#__PURE__*/(0,a/* .jsx */.tZ)("div",{css:p.wrapper,children:i.map((e,r)=>/*#__PURE__*/(0,a/* .jsxs */.BX)("button",{type:"button",css:p.item(t.value===e.value),onClick:()=>{t.onChange(e.value)},disabled:o,children:[/*#__PURE__*/(0,a/* .jsx */.tZ)("img",{src:e.image,alt:e.label,width:64,height:64}),/*#__PURE__*/(0,a/* .jsx */.tZ)("p",{children:e.label})]},r))})}})};/* ESM default export */const f=v;var p={wrapper:/*#__PURE__*/(0,o/* .css */.iv)("display:grid;grid-template-columns:repeat(4,minmax(64px,1fr));gap:",i/* .spacing["12"] */.W0["12"],";margin-top:",i/* .spacing["4"] */.W0["4"],";"),item:e=>/*#__PURE__*/(0,o/* .css */.iv)(d/* .styleUtils.resetButton */.i.resetButton,";display:flex;flex-direction:column;gap:",i/* .spacing["4"] */.W0["4"],";align-items:center;width:100%;cursor:pointer;input{appearance:none;}p{",s/* .typography.small */.c.small(),";width:100%;",d/* .styleUtils.textEllipsis */.i.textEllipsis,";color:",i/* .colorTokens.text.subdued */.Jv.text.subdued,";text-align:center;}&:hover,&:focus-visible{",!e&&(0,o/* .css */.iv)(c(),i/* .colorTokens.stroke.hover */.Jv.stroke.hover),"}img{border-radius:",i/* .borderRadius["6"] */.E0["6"],";border:2px solid ",i/* .colorTokens.stroke.border */.Jv.stroke.border,";outline:2px solid transparent;outline-offset:2px;transition:border-color 0.3s ease;",e&&(0,o/* .css */.iv)(u(),i/* .colorTokens.stroke.magicAi */.Jv.stroke.magicAi),"}")}},35159:function(e,t,r){r.d(t,{Z:()=>M});/* ESM import */var n=r(7409);/* ESM import */var a=r(99282);/* ESM import */var i=r(98848);/* ESM import */var o=r(58865);/* ESM import */var s=r(35944);/* ESM import */var d=r(70917);/* ESM import */var l=r(87363);/* ESM import */var c=/*#__PURE__*/r.n(l);/* ESM import */var u=r(60860);/* ESM import */var v=r(76487);/* ESM import */var f=r(52357);/* ESM import */var p=r(29535);/* ESM import */var h=r(84978);function m(){var e=(0,o._)(["\n      border: 1px solid ",";\n      border-radius: ",";\n      box-shadow: ",";\n      background-color: ",";\n    "]);m=function t(){return e};return e}function g(){var e=(0,o._)(["\n      border-color: ",";\n      background-color: ",";\n    "]);g=function t(){return e};return e}function b(){var e=(0,o._)(["\n        border-color: ",";\n      "]);b=function t(){return e};return e}function _(){var e=(0,o._)(["\n          padding-",": ",";\n        "]);_=function t(){return e};return e}function y(){var e=(0,o._)(["\n            padding-",": ",";\n          "]);y=function t(){return e};return e}function w(){var e=(0,o._)(["\n          font-size: ",";\n          font-weight: ",";\n          height: 34px;\n          ",";\n        "]);w=function t(){return e};return e}function x(){var e=(0,o._)(["\n      ","\n    "]);x=function t(){return e};return e}function Z(){var e=(0,o._)(["\n      border-right: 1px solid ",";\n    "]);Z=function t(){return e};return e}function k(){var e=(0,o._)(["\n      ","\n    "]);k=function t(){return e};return e}function E(){var e=(0,o._)(["\n      border-left: 1px solid ",";\n    "]);E=function t(){return e};return e}var C=e=>{var{label:t,content:r,contentPosition:o="left",showVerticalBar:d=true,size:c="regular",type:u="text",field:v,fieldState:f,disabled:p,readOnly:m,loading:g,placeholder:b,helpText:_,onChange:y,onKeyDown:w,isHidden:x,wrapperCss:Z,contentCss:k,removeBorder:E=false,selectOnFocus:C=false}=e;var M=(0,l.useRef)(null);return/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{label:t,field:v,fieldState:f,disabled:p,readOnly:m,loading:g,placeholder:b,helpText:_,isHidden:x,removeBorder:E,children:e=>{var{css:t}=e,l=(0,i._)(e,["css"]);var p;return/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:[W.inputWrapper(!!f.error,E),Z],children:[o==="left"&&/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:[W.inputLeftContent(d,c),k],children:r}),/*#__PURE__*/(0,s/* .jsx */.tZ)("input",(0,a._)((0,n._)({},v,l),{type:"text",value:(p=v.value)!==null&&p!==void 0?p:"",onChange:e=>{var t=u==="number"?e.target.value.replace(/[^0-9.]/g,"").replace(/(\..*)\./g,"$1"):e.target.value;v.onChange(t);if(y){y(t)}},onKeyDown:e=>w===null||w===void 0?void 0:w(e.key),css:[t,W.input(o,d,c)],autoComplete:"off",ref:e=>{v.ref(e);// @ts-ignore
M.current=e;// this is not ideal but it is the only way to set ref to the input element
},onFocus:()=>{if(!C||!M.current){return}M.current.select()},"data-input":true})),o==="right"&&/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:[W.inputRightContent(d,c),k],children:r})]})}})};/* ESM default export */const M=(0,f/* .withVisibilityControl */.v)(C);var W={inputWrapper:(e,t)=>/*#__PURE__*/(0,d/* .css */.iv)("display:flex;align-items:center;",!t&&(0,d/* .css */.iv)(m(),u/* .colorTokens.stroke["default"] */.Jv.stroke["default"],u/* .borderRadius["6"] */.E0["6"],u/* .shadow.input */.AF.input,u/* .colorTokens.background.white */.Jv.background.white)," ",e&&(0,d/* .css */.iv)(g(),u/* .colorTokens.stroke.danger */.Jv.stroke.danger,u/* .colorTokens.background.status.errorFail */.Jv.background.status.errorFail),";&:focus-within{",p/* .styleUtils.inputFocus */.i.inputFocus,";",e&&(0,d/* .css */.iv)(b(),u/* .colorTokens.stroke.danger */.Jv.stroke.danger),"}"),input:(e,t,r)=>/*#__PURE__*/(0,d/* .css */.iv)("&[data-input]{",v/* .typography.body */.c.body(),";border:none;box-shadow:none;background-color:transparent;padding-",e,":0;",t&&(0,d/* .css */.iv)(_(),e,u/* .spacing["10"] */.W0["10"]),";",r==="large"&&(0,d/* .css */.iv)(w(),u/* .fontSize["24"] */.JB["24"],u/* .fontWeight.medium */.Ue.medium,t&&(0,d/* .css */.iv)(y(),e,u/* .spacing["12"] */.W0["12"])),"  \n      &:focus{box-shadow:none;outline:none;}}"),inputLeftContent:(e,t)=>/*#__PURE__*/(0,d/* .css */.iv)(v/* .typography.small */.c.small()," ",p/* .styleUtils.flexCenter */.i.flexCenter(),"    height:40px;min-width:48px;color:",u/* .colorTokens.icon.subdued */.Jv.icon.subdued,";padding-inline:",u/* .spacing["12"] */.W0["12"],";",t==="large"&&(0,d/* .css */.iv)(x(),v/* .typography.body */.c.body())," ",e&&(0,d/* .css */.iv)(Z(),u/* .colorTokens.stroke["default"] */.Jv.stroke["default"])),inputRightContent:(e,t)=>/*#__PURE__*/(0,d/* .css */.iv)(v/* .typography.small */.c.small()," ",p/* .styleUtils.flexCenter */.i.flexCenter(),"    height:40px;min-width:48px;color:",u/* .colorTokens.icon.subdued */.Jv.icon.subdued,";padding-inline:",u/* .spacing["12"] */.W0["12"],";",t==="large"&&(0,d/* .css */.iv)(k(),v/* .typography.body */.c.body())," ",e&&(0,d/* .css */.iv)(E(),u/* .colorTokens.stroke["default"] */.Jv.stroke["default"]))}},90097:function(e,t,r){r.d(t,{Z:()=>f});/* ESM import */var n=r(7409);/* ESM import */var a=r(99282);/* ESM import */var i=r(98848);/* ESM import */var o=r(35944);/* ESM import */var s=r(63772);/* ESM import */var d=r(60860);/* ESM import */var l=r(76487);/* ESM import */var c=r(70917);/* ESM import */var u=r(84978);var v=e=>{var{field:t,fieldState:r,label:d,options:l=[],disabled:c,wrapperCss:v,onSelect:f,onSelectRender:h}=e;return/*#__PURE__*/(0,o/* .jsx */.tZ)(u/* ["default"] */.Z,{field:t,fieldState:r,label:d,disabled:c,children:e=>{var{css:r}=e,d=(0,i._)(e,["css"]);return/*#__PURE__*/(0,o/* .jsx */.tZ)("div",{css:v,children:l.map((e,i)=>/*#__PURE__*/(0,o/* .jsxs */.BX)("div",{children:[/*#__PURE__*/(0,o/* .jsx */.tZ)(s/* ["default"] */.Z,(0,a._)((0,n._)({},d),{inputCss:r,value:e.value,label:e.label,disabled:e.disabled||c,labelCss:e.labelCss,checked:t.value===e.value,description:e.description,onChange:()=>{t.onChange(e.value);if(f){f(e)}}})),h&&t.value===e.value&&h(e),e.legend&&/*#__PURE__*/(0,o/* .jsx */.tZ)("span",{css:p.radioLegend,children:e.legend})]},i))})}})};/* ESM default export */const f=v;var p={radioLegend:/*#__PURE__*/(0,c/* .css */.iv)("margin-left:",d/* .spacing["28"] */.W0["28"],";",l/* .typography.body */.c.body(),";color:",d/* .colorTokens.text.subdued */.Jv.text.subdued,";")}},60309:function(e,t,r){r.d(t,{Z:()=>b});/* ESM import */var n=r(58865);/* ESM import */var a=r(35944);/* ESM import */var i=r(60860);/* ESM import */var o=r(76487);/* ESM import */var s=r(4867);/* ESM import */var d=r(29535);/* ESM import */var l=r(34403);/* ESM import */var c=r(70917);/* ESM import */var u=r(87363);/* ESM import */var v=/*#__PURE__*/r.n(u);/* ESM import */var f=r(84978);function p(){var e=(0,n._)(["\n      border: 1px solid ",";\n      border-radius: ",";\n      padding: "," "," "," ",";\n    "]);p=function t(){return e};return e}function h(){var e=(0,n._)(["\n      background: ",";\n    "]);h=function t(){return e};return e}function m(e,t,r,n){if(!t.current){return 0}var a=t.current.getBoundingClientRect();var i=a.width;var o=e-a.left;var s=Math.max(0,Math.min(o,i));var d=s/i*100;var l=Math.floor(r+d/100*(n-r));return l}var g=e=>{var{field:t,fieldState:r,label:n,min:i=0,max:o=100,isMagicAi:d=false,hasBorder:c=false}=e;var v=(0,u.useRef)(null);var[p,h]=(0,u.useState)(t.value);var g=(0,u.useRef)(null);var b=(0,u.useRef)(null);var y=(0,s/* .useDebounce */.N)(p);(0,u.useEffect)(()=>{t.onChange(y);// eslint-disable-next-line react-hooks/exhaustive-deps
},[y,t.onChange]);(0,u.useEffect)(()=>{var e=false;var t=t=>{if(t.target!==b.current){return}e=true;document.body.style.userSelect="none"};var r=t=>{if(!e||!g.current){return}h(m(t.clientX,g,i,o))};var n=()=>{e=false;document.body.style.userSelect="auto"};window.addEventListener("mousedown",t);window.addEventListener("mousemove",r);window.addEventListener("mouseup",n);return()=>{window.removeEventListener("mousedown",t);window.removeEventListener("mousemove",r);window.removeEventListener("mouseup",n)}},[i,o]);var w=(0,u.useMemo)(()=>{return Math.floor((p-i)/(o-i)*100)},[p,i,o]);return/*#__PURE__*/(0,a/* .jsx */.tZ)(f/* ["default"] */.Z,{field:t,fieldState:r,label:n,isMagicAi:d,children:()=>/*#__PURE__*/(0,a/* .jsxs */.BX)("div",{css:_.wrapper(c),children:[/*#__PURE__*/(0,a/* .jsxs */.BX)("div",{css:_.track,ref:g,onKeyDown:l/* .noop */.ZT,onClick:e=>{h(m(e.clientX,g,i,o))},children:[/*#__PURE__*/(0,a/* .jsx */.tZ)("div",{css:_.fill,style:{width:"".concat(w,"%")}}),/*#__PURE__*/(0,a/* .jsx */.tZ)("div",{css:_.thumb(d),style:{left:"".concat(w,"%")},ref:b})]}),/*#__PURE__*/(0,a/* .jsx */.tZ)("input",{type:"text",css:_.input,value:String(p),onChange:e=>{h(Number(e.target.value))},ref:v,onFocus:()=>{var e;(e=v.current)===null||e===void 0?void 0:e.select()}})]})})};/* ESM default export */const b=g;var _={wrapper:e=>/*#__PURE__*/(0,c/* .css */.iv)("display:grid;grid-template-columns:1fr 45px;gap:",i/* .spacing["20"] */.W0["20"],";align-items:center;",e&&(0,c/* .css */.iv)(p(),i/* .colorTokens.stroke.disable */.Jv.stroke.disable,i/* .borderRadius["6"] */.E0["6"],i/* .spacing["12"] */.W0["12"],i/* .spacing["10"] */.W0["10"],i/* .spacing["12"] */.W0["12"],i/* .spacing["16"] */.W0["16"])),track:/*#__PURE__*/(0,c/* .css */.iv)("position:relative;height:4px;background-color:",i/* .colorTokens.bg.gray20 */.Jv.bg.gray20,";border-radius:",i/* .borderRadius["50"] */.E0["50"],";width:100%;flex-shrink:0;cursor:pointer;"),fill:/*#__PURE__*/(0,c/* .css */.iv)("position:absolute;left:0;top:0;height:100%;background:",i/* .colorTokens.ai.gradient_1 */.Jv.ai.gradient_1,";width:50%;border-radius:",i/* .borderRadius["50"] */.E0["50"],";"),thumb:e=>/*#__PURE__*/(0,c/* .css */.iv)("position:absolute;top:50%;transform:translate(-50%,-50%);width:20px;height:20px;border-radius:",i/* .borderRadius.circle */.E0.circle,";&::before{content:'';position:absolute;top:50%;left:50%;width:8px;height:8px;transform:translate(-50%,-50%);border-radius:",i/* .borderRadius.circle */.E0.circle,";background-color:",i/* .colorTokens.background.white */.Jv.background.white,";cursor:pointer;}",e&&(0,c/* .css */.iv)(h(),i/* .colorTokens.ai.gradient_1 */.Jv.ai.gradient_1)),input:/*#__PURE__*/(0,c/* .css */.iv)(o/* .typography.caption */.c.caption("medium"),";height:32px;border:1px solid ",i/* .colorTokens.stroke.border */.Jv.stroke.border,";border-radius:",i/* .borderRadius["6"] */.E0["6"],";text-align:center;color:",i/* .colorTokens.text.primary */.Jv.text.primary,";&:focus-visible{",d/* .styleUtils.inputFocus */.i.inputFocus,";}")}},47778:function(e,t,r){r.d(t,{Z:()=>k});/* ESM import */var n=r(7409);/* ESM import */var a=r(99282);/* ESM import */var i=r(98848);/* ESM import */var o=r(35944);/* ESM import */var s=r(19398);/* ESM import */var d=r(26815);/* ESM import */var l=r(74053);/* ESM import */var c=r(60860);/* ESM import */var u=r(76487);/* ESM import */var v=r(98567);/* ESM import */var f=r(29535);/* ESM import */var p=r(70917);/* ESM import */var h=r(4543);/* ESM import */var m=r(37042);/* ESM import */var g=r(47041);/* ESM import */var b=r(32449);/* ESM import */var _=r(87363);/* ESM import */var y=/*#__PURE__*/r.n(_);/* ESM import */var w=r(30633);/* ESM import */var x=r(84978);var Z=e=>{var{label:t,field:r,fieldState:c,interval:u=30,disabled:f,loading:p,placeholder:y,helpText:Z,isClearable:k=true}=e;var[C,M]=(0,_.useState)(false);var W=(0,_.useRef)(null);var D=(0,_.useMemo)(()=>{var e=(0,h["default"])((0,m["default"])(new Date,0),0);var t=(0,h["default"])((0,m["default"])(new Date,23),59);var r=(0,g/* ["default"] */.Z)({start:e,end:t},{step:u});return r.map(e=>(0,b["default"])(e,l/* .DateFormats.hoursMinutes */.E_.hoursMinutes))},[u]);var{triggerRef:T,triggerWidth:S,position:B,popoverRef:N}=(0,v/* .usePortalPopover */.l)({isOpen:C,isDropdown:true});var{activeIndex:I,setActiveIndex:O}=(0,w/* .useSelectKeyboardNavigation */.U)({options:D.map(e=>({label:e,value:e})),isOpen:C,selectedValue:r.value,onSelect:e=>{r.onChange(e.value);M(false)},onClose:()=>M(false)});(0,_.useEffect)(()=>{if(C&&I>=0&&W.current){W.current.scrollIntoView({block:"nearest",behavior:"smooth"})}},[C,I]);return/*#__PURE__*/(0,o/* .jsx */.tZ)(x/* ["default"] */.Z,{label:t,field:r,fieldState:c,disabled:f,loading:p,placeholder:y,helpText:Z,children:e=>{var{css:t}=e,c=(0,i._)(e,["css"]);var u;return/*#__PURE__*/(0,o/* .jsxs */.BX)("div",{children:[/*#__PURE__*/(0,o/* .jsxs */.BX)("div",{css:E.wrapper,ref:T,children:[/*#__PURE__*/(0,o/* .jsx */.tZ)("input",(0,a._)((0,n._)({},c),{ref:r.ref,css:[t,E.input],type:"text",onClick:e=>{e.stopPropagation();M(e=>!e)},onKeyDown:e=>{if(e.key==="Enter"){e.preventDefault();M(e=>!e)}if(e.key==="Tab"){M(false)}},value:(u=r.value)!==null&&u!==void 0?u:"",onChange:e=>{var{value:t}=e.target;r.onChange(t)},autoComplete:"off","data-input":true})),/*#__PURE__*/(0,o/* .jsx */.tZ)(d/* ["default"] */.Z,{name:"clock",width:32,height:32,style:E.icon}),k&&r.value&&/*#__PURE__*/(0,o/* .jsx */.tZ)(s/* ["default"] */.Z,{variant:"text",buttonCss:E.clearButton,onClick:()=>r.onChange(""),children:/*#__PURE__*/(0,o/* .jsx */.tZ)(d/* ["default"] */.Z,{name:"times",width:12,height:12})})]}),/*#__PURE__*/(0,o/* .jsx */.tZ)(v/* .Portal */.h,{isOpen:C,onClickOutside:()=>M(false),onEscape:()=>M(false),children:/*#__PURE__*/(0,o/* .jsx */.tZ)("div",{css:[E.popover,{[l/* .isRTL */.dZ?"right":"left"]:B.left,top:B.top,maxWidth:S}],ref:N,children:/*#__PURE__*/(0,o/* .jsx */.tZ)("ul",{css:E.list,children:D.map((e,t)=>{return/*#__PURE__*/(0,o/* .jsx */.tZ)("li",{css:E.listItem,ref:I===t?W:null,"data-active":I===t,children:/*#__PURE__*/(0,o/* .jsx */.tZ)("button",{type:"button",css:E.itemButton,onClick:()=>{r.onChange(e);M(false)},onMouseOver:()=>O(t),onMouseLeave:()=>t!==I&&O(-1),onFocus:()=>O(t),children:e})},t)})})})})]})}})};/* ESM default export */const k=Z;var E={wrapper:/*#__PURE__*/(0,p/* .css */.iv)("position:relative;&:hover,&:focus-within{& > button{opacity:1;}}"),input:/*#__PURE__*/(0,p/* .css */.iv)("&[data-input]{padding-left:",c/* .spacing["40"] */.W0["40"],";}"),icon:/*#__PURE__*/(0,p/* .css */.iv)("position:absolute;top:50%;left:",c/* .spacing["8"] */.W0["8"],";transform:translateY(-50%);color:",c/* .colorTokens.icon["default"] */.Jv.icon["default"],";"),popover:/*#__PURE__*/(0,p/* .css */.iv)("position:absolute;width:100%;background-color:",c/* .colorTokens.background.white */.Jv.background.white,";box-shadow:",c/* .shadow.popover */.AF.popover,";height:380px;overflow-y:auto;border-radius:",c/* .borderRadius["6"] */.E0["6"],";"),list:/*#__PURE__*/(0,p/* .css */.iv)("list-style:none;padding:0;margin:0;"),listItem:/*#__PURE__*/(0,p/* .css */.iv)("width:100%;height:40px;cursor:pointer;display:flex;align-items:center;transition:background-color 0.3s ease-in-out;&[data-active='true']{background-color:",c/* .colorTokens.background.hover */.Jv.background.hover,";}:hover{background-color:",c/* .colorTokens.background.hover */.Jv.background.hover,";}"),itemButton:/*#__PURE__*/(0,p/* .css */.iv)(f/* .styleUtils.resetButton */.i.resetButton,";",u/* .typography.body */.c.body(),";margin:",c/* .spacing["4"] */.W0["4"]," ",c/* .spacing["12"] */.W0["12"],";width:100%;height:100%;&:focus,&:active,&:hover{background:none;color:",c/* .colorTokens.text.primary */.Jv.text.primary,";}"),clearButton:/*#__PURE__*/(0,p/* .css */.iv)("position:absolute;top:50%;right:",c/* .spacing["4"] */.W0["4"],";transform:translateY(-50%);width:32px;height:32px;",f/* .styleUtils.flexCenter */.i.flexCenter(),";opacity:0;transition:background-color 0.3s ease-in-out,opacity 0.3s ease-in-out;border-radius:",c/* .borderRadius["2"] */.E0["2"],";:hover{background-color:",c/* .colorTokens.background.hover */.Jv.background.hover,";}")}},69789:function(e,t,r){// EXPORTS
r.d(t,{Z:()=>/* binding */$});// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_async_to_generator.js
var n=r(76150);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_object_spread.js
var a=r(7409);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_object_spread_props.js
var i=r(99282);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_tagged_template_literal.js
var o=r(58865);// EXTERNAL MODULE: ./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js
var s=r(35944);// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var d=r(70917);// EXTERNAL MODULE: external "wp.i18n"
var l=r(38003);// EXTERNAL MODULE: external "React"
var c=r(87363);// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var u=r(52293);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/Button.tsx
var v=r(19398);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/ImageInput.tsx
var f=r(30647);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/LoadingSpinner.tsx
var p=r(2613);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/SVGIcon.tsx
var h=r(26815);// EXTERNAL MODULE: ./assets/react/v3/shared/config/config.ts
var m=r(34039);// EXTERNAL MODULE: ./assets/react/v3/shared/config/constants.ts
var g=r(74053);// EXTERNAL MODULE: ./assets/react/v3/shared/config/styles.ts
var b=r(60860);// EXTERNAL MODULE: ./assets/react/v3/shared/config/typography.ts
var _=r(76487);// EXTERNAL MODULE: ./assets/react/v3/shared/controls/Show.tsx
var y=r(17106);// EXTERNAL MODULE: ./assets/react/v3/shared/hoc/withVisibilityControl.tsx
var w=r(52357);// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/useAnimation.tsx
var x=r(54354);// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/useFormWithGlobalError.ts
var Z=r(37861);// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/usePortalPopover.tsx
var k=r(98567);// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/useWpMedia.ts
var E=r(43372);// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/useMutation.js
var C=r(65228);// EXTERNAL MODULE: ./assets/react/v3/shared/utils/api.ts
var M=r(82340);// EXTERNAL MODULE: ./assets/react/v3/shared/utils/endpoints.ts
var W=r(84225);// CONCATENATED MODULE: ./assets/react/v3/shared/services/video.ts
var D=e=>{return M/* .wpAjaxInstance.post */.R.post(W/* ["default"].TUTOR_YOUTUBE_VIDEO_DURATION */.Z.TUTOR_YOUTUBE_VIDEO_DURATION,{video_id:e})};var T=()=>{return(0,C/* .useMutation */.D)({mutationFn:D})};// EXTERNAL MODULE: ./assets/react/v3/shared/utils/style-utils.ts
var S=r(29535);// EXTERNAL MODULE: ./assets/react/v3/shared/utils/util.ts + 4 modules
var B=r(34403);// EXTERNAL MODULE: ./assets/react/v3/shared/utils/validation.ts
var N=r(25481);// CONCATENATED MODULE: ./assets/react/v3/shared/utils/video.ts
function I(e){return(0,n._)(function*(){var t=/^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/;var r=e.match(t);var n=r?r[5]:null;var a="https://vimeo.com/api/v2/video/".concat(n,".xml");try{var i=yield fetch(a);if(!i.ok){throw new Error((0,l.__)("Failed to fetch the video data","tutor"))}var o=yield i.text();var s=new DOMParser;var d=s.parseFromString(o,"application/xml");var c=d.getElementsByTagName("duration")[0];if(!c||!c.textContent){return null}var u=Number.parseInt(c.textContent,10);return u;// in seconds
}catch(e){// eslint-disable-next-line no-console
console.error("Error fetching video duration:",e);return null}})()}var O=e=>(0,n._)(function*(){var t=document.createElement("video");t.src=e;t.preload="metadata";return new Promise(e=>{t.onloadedmetadata=()=>{e(t.duration)}})})();var A=e=>{var t=e.match(/PT(\d+H)?(\d+M)?(\d+S)?/);if(!t){return 0}var r=t[1]?Number(t[1].replace("H","")):0;var n=t[2]?Number(t[2].replace("M","")):0;var a=t[3]?Number(t[3].replace("S","")):0;return r*3600+n*60+a};/**
 * Generates a thumbnail from different video sources
 * @param {string} source - Video source type ('youtube', 'vimeo', 'external_url', 'html5')
 * @param {string} url - Video URL
 * @returns {Promise<string>} - Base64 encoded thumbnail image
 */var L=(e,t)=>(0,n._)(function*(){if(e==="youtube"){var r=t.match(g/* .VideoRegex.YOUTUBE */.t8.YOUTUBE);var n=r&&r[7].length===11?r[7]:"";return"https://img.youtube.com/vi/".concat(n,"/maxresdefault.jpg")}if(e==="vimeo"){try{var a=t.split("/").pop();var i=yield fetch("https://vimeo.com/api/v2/video/".concat(a,".json"));var o=yield i.json();return o[0].thumbnail_large}catch(e){throw new Error("Failed to get Vimeo thumbnail. Error: ".concat(e))}}if(e==="external_url"||e==="html5"){return new Promise((e,r)=>{try{// Create video element
    var n=document.createElement("video");n.muted=true;n.style.cssText="position: fixed; left: 0; top: 0; width: 1px; height: 1px; object-fit: contain; z-index: -1;";n.crossOrigin="Anonymous";// Create canvas element
    var a=document.createElement("canvas");// Track loading states
    var i=false;var o=false;var s=false;var d=false;var c=()=>{n.src="";n.remove();a.remove();clearTimeout(v)};var u=()=>{if(i&&o&&s&&d){try{a.height=n.videoHeight;a.width=n.videoWidth;var t=a.getContext("2d");if(!t){throw new Error((0,l.__)("Failed to get canvas context","tutor"))}t.drawImage(n,0,0);var u=a.toDataURL("image/png");c();e(u)}catch(e){c();var v=e instanceof Error?e.message:(0,l.__)("Unknown error occurred","tutor");r(new Error("Thumbnail generation failed: ".concat(v)))}}};// Setup event listeners
    n.addEventListener("loadedmetadata",()=>{i=true;if(!n.currentTime||n.currentTime<2){n.currentTime=2;// Take snapshot at 2 seconds
    }});n.addEventListener("loadeddata",()=>{o=true;u()});n.addEventListener("suspend",()=>{s=true;u()});n.addEventListener("seeked",()=>{d=true;u()});n.addEventListener("error",e=>{c();r(new Error("Video loading failed: ".concat(e.message)))});// Set timeout
    // 30 seconds is a reasonable maximum time to wait for video metadata and frame capture
    var v=setTimeout(()=>{c();r(new Error((0,l.__)("Thumbnail generation timed out","tutor")))},3e4);// Add elements to DOM
    document.body.appendChild(n);document.body.appendChild(a);// Start loading the video
    n.src=t}catch(e){var f=e instanceof Error?e.message:"Unknown error occurred";r(new Error("Thumbnail generation failed: ".concat(f)))}})}throw new Error((0,l.__)("Unsupported video source","tutor"))})();// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormFieldWrapper.tsx
var z=r(84978);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormSelectInput.tsx
var U=r(82325);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormTextareaInput.tsx
var R=r(3473);// CONCATENATED MODULE: ./assets/react/v3/shared/components/fields/FormVideoInput.tsx
function J(){var e=(0,o._)(["\n      background-color: ",";\n    "]);J=function t(){return e};return e}function j(){var e=(0,o._)(["\n      ",";\n    "]);j=function t(){return e};return e}var P=m/* .tutorConfig.supported_video_sources */.y.supported_video_sources||[];var X=P.filter(e=>e.value!=="html5");var F=P.map(e=>e.value);var Q=["vimeo","youtube","html5"];var Y={youtube:(0,l.__)("Paste YouTube Video URL","tutor"),vimeo:(0,l.__)("Paste Vimeo Video URL","tutor"),external_url:(0,l.__)("Paste External Video URL","tutor"),shortcode:(0,l.__)("Paste Video Shortcode","tutor"),embedded:(0,l.__)("Paste Embedded Video Code","tutor")};var q={youtube:"youtube",vimeo:"vimeo",shortcode:"shortcode",embedded:"coding"};var H=(e,t)=>{var r={source:"",source_video_id:"",poster:"",poster_url:"",source_html5:"",source_external_url:"",source_shortcode:"",source_youtube:"",source_vimeo:"",source_embedded:""};return e?(0,a._)({},e,t):(0,a._)({},r,t)};var G={youtube:e=>{var t=e.match(g/* .VideoRegex.YOUTUBE */.t8.YOUTUBE);return t&&t[7].length===11?t[7]:null},vimeo:e=>{var t=e.match(g/* .VideoRegex.VIMEO */.t8.VIMEO);return(t===null||t===void 0?void 0:t[5])||null},shortcode:e=>{return e.match(g/* .VideoRegex.SHORTCODE */.t8.SHORTCODE)?e:null},url:e=>{return e.match(g/* .VideoRegex.EXTERNAL_URL */.t8.EXTERNAL_URL)?e:null}};var K=e=>{var{source:t,url:r,getYouTubeVideoDurationMutation:a}=e;return(0,n._)(function*(){try{var e=0;switch(t){case"vimeo":var n;e=(n=yield I(r))!==null&&n!==void 0?n:0;break;case"html5":case"external_url":var i;e=(i=yield O(r))!==null&&i!==void 0?i:0;break;case"youtube":{var o=G.youtube(r);if(o){var s=yield a.mutateAsync(o);e=A(s.data.duration)}break}}if(e){var d=(0,B/* .covertSecondsToHMS */.lL)(Math.floor(e));return d}return null}catch(e){// eslint-disable-next-line no-console
console.error("Error getting video duration:",e);return null}})()};var V=e=>{var{field:t,fieldState:r,label:o,helpText:b,buttonText:_=(0,l.__)("Upload Media","tutor"),infoText:w,onChange:C,supportedFormats:M,loading:W,onGetDuration:D}=e;var J,j,V,$,et;var er=(0,Z/* .useFormWithGlobalError */.O)({defaultValues:{videoSource:((J=X[0])===null||J===void 0?void 0:J.value)||"",videoUrl:""}});var en=T();var[ea,ei]=(0,c.useState)(false);var[eo,es]=(0,c.useState)({hours:0,minutes:0,seconds:0});var[ed,el]=(0,c.useState)("");var[ec,eu]=(0,c.useState)(false);var ev=(0,c.useRef)(null);var{popoverRef:ef,position:ep}=(0,k/* .usePortalPopover */.l)({isOpen:ec,triggerRef:ev,positionModifier:{top:((j=ev.current)===null||j===void 0?void 0:j.getBoundingClientRect().top)||0,left:0}});var eh=e=>(0,n._)(function*(){if(!e){return}var r=Array.isArray(e)?e[0]:e;var n={source:"html5",source_video_id:r.id.toString(),source_html5:r.url};t.onChange(H(t.value,n));C===null||C===void 0?void 0:C(H(t.value,n));try{ei(true);e_();var a=yield L("external_url",r.url);var i=yield O(r.url);if(!i){return}es((0,B/* .covertSecondsToHMS */.lL)(Math.floor(i)));if(D){D((0,B/* .covertSecondsToHMS */.lL)(Math.floor(i)))}if(a){el(a)}}finally{ei(false)}})();var{openMediaLibrary:em,resetFiles:eg}=(0,E/* ["default"] */.Z)({options:{type:(M===null||M===void 0?void 0:M.length)?M.map(e=>"video/".concat(e)).join(","):"video"},onChange:eh});var{openMediaLibrary:eb,resetFiles:e_}=(0,E/* ["default"] */.Z)({options:{type:"image"},onChange:e=>{if(!e){return}var r=Array.isArray(e)?e[0]:e;var n={poster:r.id.toString(),poster_url:r.url};t.onChange(H(t.value,n));C===null||C===void 0?void 0:C(H(t.value,n))},initialFiles:((V=t.value)===null||V===void 0?void 0:V.poster)?{id:Number(t.value.poster),url:t.value.poster_url,title:""}:null});var ey=er.watch("videoSource")||"";var ew=t.value;(0,c.useEffect)(()=>{var e;if(!ew){return}if(!ew.source){var r,n;er.setValue("videoSource",(r=X[0])===null||r===void 0?void 0:r.value);er.setValue("videoUrl",ew["source_".concat((n=X[0])===null||n===void 0?void 0:n.value)]||"");return}var a=F.includes(ew.source);if(!a){t.onChange(H(ew,{source:""}));return}er.setValue("videoSource",ew.source);er.setValue("videoUrl",ew["source_".concat(ew.source)]||"");if(!ew.poster_url&&Q.includes(ew.source)){var i=ew.source;ei(true);L(i,ew["source_".concat(i)]||"").then(e=>{ei(false);el(e)}).finally(()=>{ei(false)})}if(Object.values(eo).some(e=>e>0)){return}if(ew.source==="vimeo"){I(ew["source_vimeo"]||"").then(e=>{if(!e){return}es((0,B/* .covertSecondsToHMS */.lL)(Math.floor(e)));if(D){D((0,B/* .covertSecondsToHMS */.lL)(Math.floor(e)))}})}if(["external_url","html5"].includes(ew.source)){O(ew["source_".concat(ew.source)]||"").then(e=>{if(!e){return}es((0,B/* .covertSecondsToHMS */.lL)(Math.floor(e)));if(D){D((0,B/* .covertSecondsToHMS */.lL)(Math.floor(e)))}})}if(ew.source==="youtube"&&((e=m/* .tutorConfig.settings */.y.settings)===null||e===void 0?void 0:e.youtube_api_key_exist)){var o;var s=(o=G.youtube(ew["source_youtube"]||""))!==null&&o!==void 0?o:"";en.mutateAsync(s).then(e=>{var t=e.data.duration;if(!t){return}var r=A(t);es((0,B/* .covertSecondsToHMS */.lL)(Math.floor(r)));if(D){D((0,B/* .covertSecondsToHMS */.lL)(Math.floor(r)))}})}// eslint-disable-next-line react-hooks/exhaustive-deps
},[ew]);if(!F.length){return/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:ee.emptyMediaWrapper,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(y/* ["default"] */.Z,{when:o,children:/*#__PURE__*/(0,s/* .jsx */.tZ)("label",{children:o})}),/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:ee.emptyMedia({hasVideoSource:false}),children:[/*#__PURE__*/(0,s/* .jsxs */.BX)("p",{css:ee.warningText,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"info",height:20,width:20}),(0,l.__)("No video source selected","tutor")]}),/*#__PURE__*/(0,s/* .jsx */.tZ)(v/* ["default"] */.Z,{buttonCss:ee.selectFromSettingsButton,variant:"secondary",size:"small",icon:/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"linkExternal",height:24,width:24}),onClick:()=>{window.open(m/* ["default"].VIDEO_SOURCES_SETTINGS_URL */.Z.VIDEO_SOURCES_SETTINGS_URL,"_blank","noopener")},children:(0,l.__)("Select from settings","tutor")})]})]})}var ex=e=>{if(e==="video"){em();return}eb()};var eZ=e=>{var r=e==="video"?{source:"",source_video_id:"",poster:"",poster_url:""}:{poster:"",poster_url:""};var n=H(ew,r);if(e==="video"){eg()}else{e_()}t.onChange(n);el("");es({hours:0,minutes:0,seconds:0});if(C){C(n)}};var ek=()=>{if(!(ew===null||ew===void 0?void 0:ew.source)||!F.includes(ew.source)){return false}var e=ew===null||ew===void 0?void 0:ew.source;var t="source_".concat(e);return ew&&ew[t]!==""};var eE=e=>(0,n._)(function*(){ei(true);try{var{videoSource:r,videoUrl:n}=e;var a={source:r,["source_".concat(r)]:n};t.onChange(H(ew,a));C===null||C===void 0?void 0:C(H(ew,a));eu(false);var[i,o]=yield Promise.all([K({source:r,url:n,getYouTubeVideoDurationMutation:en}),Q.includes(r)?L(r,n):null]);if(i){es(i);D===null||D===void 0?void 0:D(i)}if(o){el(o)}}finally{ei(false)}})();var eC=e=>{var t=e.trim();if(ey==="embedded")return true;if(ey==="shortcode"){return G.shortcode(t)?true:(0,l.__)("Invalid Shortcode","tutor")}if(!G.url(t)){return(0,l.__)("Invalid URL","tutor")}if(ey==="youtube"&&!G.youtube(t)){return(0,l.__)("Invalid YouTube URL","tutor")}if(ey==="vimeo"&&!G.vimeo(t)){return(0,l.__)("Invalid Vimeo URL","tutor")}return true};return/*#__PURE__*/(0,s/* .jsxs */.BX)(s/* .Fragment */.HY,{children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(z/* ["default"] */.Z,{label:o,field:t,fieldState:r,helpText:b,children:()=>{return/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{ref:ev,children:/*#__PURE__*/(0,s/* .jsx */.tZ)(y/* ["default"] */.Z,{when:!W,fallback:/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:ee.emptyMedia({hasVideoSource:true}),children:/*#__PURE__*/(0,s/* .jsx */.tZ)(p/* .LoadingOverlay */.fz,{})}),children:/*#__PURE__*/(0,s/* .jsx */.tZ)(y/* ["default"] */.Z,{when:ek(),fallback:/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:ee.emptyMedia({hasVideoSource:true}),children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(y/* ["default"] */.Z,{when:F.includes("html5"),children:/*#__PURE__*/(0,s/* .jsx */.tZ)(v/* ["default"] */.Z,{"data-cy":"upload-media",size:"small",variant:"secondary",icon:/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"monitorPlay",height:24,width:24}),onClick:()=>{ex("video")},children:_})}),/*#__PURE__*/(0,s/* .jsx */.tZ)(y/* ["default"] */.Z,{when:F.filter(e=>e!=="html5").length>0,children:/*#__PURE__*/(0,s/* .jsx */.tZ)(y/* ["default"] */.Z,{when:!F.includes("html5"),fallback:/*#__PURE__*/(0,s/* .jsx */.tZ)("button",{"data-cy":"add-from-url",type:"button",css:ee.urlButton,onClick:()=>{eu(e=>!e)},children:(0,l.__)("Add from URL","tutor")}),children:/*#__PURE__*/(0,s/* .jsx */.tZ)(v/* ["default"] */.Z,{"data-cy":"add-from-url",size:"small",variant:"secondary",icon:/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"plusSquareBrand",height:24,width:24}),onClick:()=>{eu(e=>!e)},children:(0,l.__)("Add from URL","tutor")})})}),/*#__PURE__*/(0,s/* .jsx */.tZ)(y/* ["default"] */.Z,{when:F.includes("html5"),children:/*#__PURE__*/(0,s/* .jsx */.tZ)("p",{css:ee.infoTexts,children:w})})]}),children:()=>{var e;return/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:ee.previewWrapper,"data-cy":"media-preview",children:[/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:ee.videoInfoWrapper,children:[/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:ee.videoInfoCard,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:q[ew===null||ew===void 0?void 0:ew.source]||"video",height:36,width:36}),/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:ee.videoInfo,children:/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:ee.videoInfoTitle,children:/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:S/* .styleUtils.text.ellipsis */.i.text.ellipsis(1),children:Q.includes((ew===null||ew===void 0?void 0:ew.source)||"")?ew===null||ew===void 0?void 0:ew["source_".concat(ew.source)]:(e=P.find(e=>e.value===(ew===null||ew===void 0?void 0:ew.source)))===null||e===void 0?void 0:e.label})})})]}),/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:ee.actionButtons,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(y/* ["default"] */.Z,{when:ey!=="html5",children:/*#__PURE__*/(0,s/* .jsx */.tZ)("button",{type:"button",css:S/* .styleUtils.actionButton */.i.actionButton,onClick:()=>{eu(true)},children:/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"edit",height:24,width:24})})}),/*#__PURE__*/(0,s/* .jsx */.tZ)("button",{"data-cy":"remove-video",type:"button",css:S/* .styleUtils.actionButton */.i.actionButton,onClick:()=>{eZ("video")},children:/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"cross",height:24,width:24})})]})]}),/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:ee.imagePreview({hasImageInput:Q.includes((ew===null||ew===void 0?void 0:ew.source)||"")}),children:/*#__PURE__*/(0,s/* .jsxs */.BX)(y/* ["default"] */.Z,{when:Q.includes((ew===null||ew===void 0?void 0:ew.source)||""),fallback:/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:ee.urlData,children:er.watch("videoUrl")}),children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* ["default"] */.Z,{value:ew?{id:Number(ew.poster)||0,url:ew.poster_url||ed,title:""}:null,loading:ea,isClearAble:!!(ew===null||ew===void 0?void 0:ew.poster),disabled:["vimeo","youtube"].includes((ew===null||ew===void 0?void 0:ew.source)||""),uploadHandler:()=>ex("poster"),clearHandler:()=>eZ("poster"),buttonText:(0,l.__)("Upload Thumbnail","tutor"),infoText:(0,l.__)("Upload a thumbnail image for your video","tutor"),emptyImageCss:ee.thumbImage,previewImageCss:ee.thumbImage,overlayCss:ee.thumbImage,replaceButtonText:(0,l.__)("Replace Thumbnail","tutor")}),/*#__PURE__*/(0,s/* .jsx */.tZ)(y/* ["default"] */.Z,{when:eo.hours>0||eo.minutes>0||eo.seconds>0,children:/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:ee.duration,children:[eo.hours>0&&"".concat(eo.hours,"h")," ",eo.minutes,"m ",eo.seconds,"s"]})})]})})]})}})})})}}),/*#__PURE__*/(0,s/* .jsx */.tZ)(k/* .Portal */.h,{isOpen:ec,onClickOutside:()=>eu(false),onEscape:()=>eu(false),animationType:x/* .AnimationType.fadeIn */.ru.fadeIn,children:/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{ref:ef,css:[ee.popover,{[g/* .isRTL */.dZ?"right":"left"]:ep.left,top:($=ev.current)===null||$===void 0?void 0:$.getBoundingClientRect().top,maxWidth:(et=ev.current)===null||et===void 0?void 0:et.offsetWidth}],children:/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:ee.popoverContent,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(u/* .Controller */.Qr,{control:er.control,name:"videoSource",rules:(0,a._)({},(0,N/* .requiredRule */.n0)()),render:e=>{return/*#__PURE__*/(0,s/* .jsx */.tZ)(U/* ["default"] */.Z,(0,i._)((0,a._)({},e),{options:X,disabled:P.length<=1,placeholder:(0,l.__)("Select source","tutor"),hideCaret:P.length<=1}))}}),/*#__PURE__*/(0,s/* .jsx */.tZ)(u/* .Controller */.Qr,{control:er.control,name:"videoUrl",rules:(0,i._)((0,a._)({},(0,N/* .requiredRule */.n0)()),{validate:eC}),render:e=>{return/*#__PURE__*/(0,s/* .jsx */.tZ)(R/* ["default"] */.Z,(0,i._)((0,a._)({},e),{inputCss:/*#__PURE__*/(0,d/* .css */.iv)("border-style:dashed;"),rows:2,placeholder:Y[ey]||(0,l.__)("Paste Here","tutor")}))}}),/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:ee.popoverButtonWrapper,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(v/* ["default"] */.Z,{variant:"text",size:"small",onClick:()=>{eu(false)},children:(0,l.__)("Cancel","tutor")}),/*#__PURE__*/(0,s/* .jsx */.tZ)(v/* ["default"] */.Z,{"data-cy":"submit-url",variant:"secondary",size:"small",onClick:er.handleSubmit(eE),children:(0,l.__)("Ok","tutor")})]})]})})})]})};/* ESM default export */const $=(0,w/* .withVisibilityControl */.v)(V);var ee={emptyMediaWrapper:/*#__PURE__*/(0,d/* .css */.iv)(S/* .styleUtils.display.flex */.i.display.flex("column"),";gap:",b/* .spacing["4"] */.W0["4"],";label{",_/* .typography.caption */.c.caption(),";color:",b/* .colorTokens.text.title */.Jv.text.title,";}"),emptyMedia:e=>{var{hasVideoSource:t=false}=e;return/*#__PURE__*/(0,d/* .css */.iv)("width:100%;height:164px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:",b/* .spacing["8"] */.W0["8"],";border:1px dashed ",b/* .colorTokens.stroke.border */.Jv.stroke.border,";border-radius:",b/* .borderRadius["8"] */.E0["8"],";background-color:",b/* .colorTokens.background.status.warning */.Jv.background.status.warning,";",t&&(0,d/* .css */.iv)(J(),b/* .colorTokens.bg.white */.Jv.bg.white))},infoTexts:/*#__PURE__*/(0,d/* .css */.iv)(_/* .typography.tiny */.c.tiny(),";color:",b/* .colorTokens.text.subdued */.Jv.text.subdued,";"),warningText:/*#__PURE__*/(0,d/* .css */.iv)(S/* .styleUtils.display.flex */.i.display.flex(),";align-items:center;gap:",b/* .spacing["4"] */.W0["4"],";",_/* .typography.caption */.c.caption(),";color:",b/* .colorTokens.text.warning */.Jv.text.warning,";"),selectFromSettingsButton:/*#__PURE__*/(0,d/* .css */.iv)("background:",b/* .colorTokens.bg.white */.Jv.bg.white,";"),urlData:/*#__PURE__*/(0,d/* .css */.iv)(_/* .typography.caption */.c.caption(),";",S/* .styleUtils.display.flex */.i.display.flex("column"),";padding:",b/* .spacing["8"] */.W0["8"]," ",b/* .spacing["12"] */.W0["12"],";gap:",b/* .spacing["8"] */.W0["8"],";word-break:break-all;"),previewWrapper:/*#__PURE__*/(0,d/* .css */.iv)("width:100%;height:100%;border:1px solid ",b/* .colorTokens.stroke["default"] */.Jv.stroke["default"],";border-radius:",b/* .borderRadius["8"] */.E0["8"],";overflow:hidden;background-color:",b/* .colorTokens.bg.white */.Jv.bg.white,";"),videoInfoWrapper:/*#__PURE__*/(0,d/* .css */.iv)(S/* .styleUtils.display.flex */.i.display.flex(),";justify-content:space-between;align-items:center;gap:",b/* .spacing["20"] */.W0["20"],";padding:",b/* .spacing["8"] */.W0["8"]," ",b/* .spacing["12"] */.W0["12"],";"),videoInfoCard:/*#__PURE__*/(0,d/* .css */.iv)(S/* .styleUtils.display.flex */.i.display.flex(),";align-items:center;gap:",b/* .spacing["8"] */.W0["8"],";svg{flex-shrink:0;color:",b/* .colorTokens.icon.hover */.Jv.icon.hover,";}"),videoInfo:/*#__PURE__*/(0,d/* .css */.iv)(S/* .styleUtils.display.flex */.i.display.flex("column"),";gap:",b/* .spacing["4"] */.W0["4"],";"),videoInfoTitle:/*#__PURE__*/(0,d/* .css */.iv)(S/* .styleUtils.display.flex */.i.display.flex(),";",_/* .typography.caption */.c.caption("medium"),"    word-break:break-all;"),imagePreview:e=>{var{hasImageInput:t}=e;return/*#__PURE__*/(0,d/* .css */.iv)("width:100%;max-height:168px;position:relative;overflow:hidden;background-color:",b/* .colorTokens.background["default"] */.Jv.background["default"],";",!t&&(0,d/* .css */.iv)(j(),S/* .styleUtils.overflowYAuto */.i.overflowYAuto),";scrollbar-gutter:auto;&:hover{[data-hover-buttons-wrapper]{opacity:1;}}")},duration:/*#__PURE__*/(0,d/* .css */.iv)(_/* .typography.tiny */.c.tiny(),";position:absolute;bottom:",b/* .spacing["12"] */.W0["12"],";right:",b/* .spacing["12"] */.W0["12"],";background-color:rgba(0,0,0,0.5);color:",b/* .colorTokens.text.white */.Jv.text.white,";padding:",b/* .spacing["4"] */.W0["4"]," ",b/* .spacing["8"] */.W0["8"],";border-radius:",b/* .borderRadius["6"] */.E0["6"],";pointer-events:none;"),thumbImage:/*#__PURE__*/(0,d/* .css */.iv)("border-radius:0;border:none;"),urlButton:/*#__PURE__*/(0,d/* .css */.iv)(S/* .styleUtils.resetButton */.i.resetButton,";",_/* .typography.small */.c.small("medium"),";color:",b/* .colorTokens.text.brand */.Jv.text.brand,";border-radius:",b/* .borderRadius["2"] */.E0["2"],";padding:0 ",b/* .spacing["4"] */.W0["4"],";margin-bottom:",b/* .spacing["8"] */.W0["8"],";&:focus,&:active,&:hover{background:none;color:",b/* .colorTokens.text.brand */.Jv.text.brand,";}&:focus-visible{outline:2px solid ",b/* .colorTokens.stroke.brand */.Jv.stroke.brand,";outline-offset:1px;}"),actionButtons:/*#__PURE__*/(0,d/* .css */.iv)(S/* .styleUtils.display.flex */.i.display.flex(),";gap:",b/* .spacing["4"] */.W0["4"],";"),popover:/*#__PURE__*/(0,d/* .css */.iv)("position:absolute;width:100%;z-index:",b/* .zIndex.dropdown */.W5.dropdown,";background-color:",b/* .colorTokens.bg.white */.Jv.bg.white,";border-radius:",b/* .borderRadius.card */.E0.card,";box-shadow:",b/* .shadow.popover */.AF.popover,";"),popoverContent:/*#__PURE__*/(0,d/* .css */.iv)(S/* .styleUtils.display.flex */.i.display.flex("column"),";gap:",b/* .spacing["12"] */.W0["12"],";padding:",b/* .spacing["16"] */.W0["16"],";"),popoverButtonWrapper:/*#__PURE__*/(0,d/* .css */.iv)(S/* .styleUtils.display.flex */.i.display.flex(),";gap:",b/* .spacing["8"] */.W0["8"],";justify-content:flex-end;")}},3960:function(e,t,r){r.d(t,{Z:()=>R});/* ESM import */var n=r(76150);/* ESM import */var a=r(58865);/* ESM import */var i=r(35944);/* ESM import */var o=r(70917);/* ESM import */var s=r(38003);/* ESM import */var d=/*#__PURE__*/r.n(s);/* ESM import */var l=r(86138);/* ESM import */var c=/*#__PURE__*/r.n(l);/* ESM import */var u=r(87363);/* ESM import */var v=/*#__PURE__*/r.n(u);/* ESM import */var f=r(87056);/* ESM import */var p=r(19398);/* ESM import */var h=r(2613);/* ESM import */var m=r(26815);/* ESM import */var g=r(58982);/* ESM import */var b=r(85746);/* ESM import */var _=r(54273);/* ESM import */var y=r(6293);/* ESM import */var w=r(63260);/* ESM import */var x=r(31342);/* ESM import */var Z=r(99678);/* ESM import */var k=r(34039);/* ESM import */var E=r(74053);/* ESM import */var C=r(60860);/* ESM import */var M=r(36352);/* ESM import */var W=r(17106);/* ESM import */var D=r(29535);/* ESM import */var T=r(14578);/* ESM import */var S=r(43567);/* ESM import */var B=r(84978);function N(){var e=(0,a._)(["\n      overflow: hidden;\n      border-radius: ",";\n    "]);N=function t(){return e};return e}var I;var O={droip:"droipColorized",elementor:"elementorColorized",gutenberg:"gutenbergColorized",divi:"diviColorized"};var A=!!k/* .tutorConfig.tutor_pro_url */.y.tutor_pro_url;var L=(I=k/* .tutorConfig.settings */.y.settings)===null||I===void 0?void 0:I.chatgpt_key_exist;var z=e=>{var{editorUsed:t,onBackToWPEditorClick:r,onCustomEditorButtonClick:a}=e;var{showModal:o}=(0,w/* .useModal */.d)();var[d,l]=(0,u.useState)("");return/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:J.editorOverlay,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)(W/* ["default"] */.Z,{when:t.name!=="gutenberg",children:/*#__PURE__*/(0,i/* .jsx */.tZ)(p/* ["default"] */.Z,{variant:"tertiary",size:"small",buttonCss:J.editWithButton,icon:/*#__PURE__*/(0,i/* .jsx */.tZ)(m/* ["default"] */.Z,{name:"arrowLeft",height:24,width:24}),loading:d==="back_to",onClick:()=>(0,n._)(function*(){var{action:e}=yield o({component:y/* ["default"] */.Z,props:{title:(0,s.__)("Back to WordPress Editor","tutor"),description:/*#__PURE__*/(0,i/* .jsx */.tZ)(f/* ["default"] */.Z,{type:"warning",icon:"warning",children:(0,s.__)("Warning: Switching to the WordPress default editor may cause issues with your current layout, design, and content.","tutor")}),confirmButtonText:(0,s.__)("Confirm","tutor"),confirmButtonVariant:"primary"},depthIndex:C/* .zIndex.highest */.W5.highest});if(e==="CONFIRM"){try{l("back_to");yield r===null||r===void 0?void 0:r(t.name)}finally{l("")}}})(),children:(0,s.__)("Back to WordPress Editor","tutor")})}),/*#__PURE__*/(0,i/* .jsx */.tZ)(p/* ["default"] */.Z,{variant:"tertiary",size:"small",buttonCss:J.editWithButton,loading:d==="edit_with",icon:O[t.name]&&/*#__PURE__*/(0,i/* .jsx */.tZ)(m/* ["default"] */.Z,{name:O[t.name],height:24,width:24}),onClick:()=>(0,n._)(function*(){try{l("edit_with");yield a===null||a===void 0?void 0:a(t);window.location.href=t.link}finally{l("")}})(),children:/* translators: %s is the editor name */(0,s.sprintf)((0,s.__)("Edit with %s","tutor"),t===null||t===void 0?void 0:t.label)})]})};var U=e=>{var{label:t,field:r,fieldState:a,disabled:o,readOnly:d,loading:l,placeholder:c,helpText:v,onChange:f,generateWithAi:p=false,onClickAiButton:y,hasCustomEditorSupport:N=false,isMinimal:I=false,hideMediaButtons:U=false,hideQuickTags:R=false,editors:j=[],editorUsed:P={name:"classic",label:"Classic Editor",link:""},isMagicAi:X=false,autoFocus:F=false,onCustomEditorButtonClick:Q,onBackToWPEditorClick:Y,onFullScreenChange:q,min_height:H,max_height:G,toolbar1:K,toolbar2:V}=e;var $,ee,et,er,en;var{showModal:ea}=(0,w/* .useModal */.d)();var ei=(($=k/* .tutorConfig.settings */.y.settings)===null||$===void 0?void 0:$.hide_admin_bar_for_users)==="off";var eo=(et=k/* .tutorConfig.current_user */.y.current_user)===null||et===void 0?void 0:(ee=et.roles)===null||ee===void 0?void 0:ee.includes(E/* .TutorRoles.ADMINISTRATOR */.er.ADMINISTRATOR);var es=(en=k/* .tutorConfig.current_user */.y.current_user)===null||en===void 0?void 0:(er=en.roles)===null||er===void 0?void 0:er.includes(E/* .TutorRoles.TUTOR_INSTRUCTOR */.er.TUTOR_INSTRUCTOR);var[ed,el]=(0,u.useState)(null);var ec=j.filter(e=>eo||es&&ei||e.name==="droip");var eu=N&&ec.length>0;var ev=eu&&P.name!=="classic";var ef=()=>{if(!A){ea({component:x/* ["default"] */.Z,props:{image:S,image2x:T}})}else if(!L){ea({component:Z/* ["default"] */.Z,props:{image:S,image2x:T}})}else{ea({component:_/* ["default"] */.Z,isMagicAi:true,props:{title:(0,s.__)("AI Studio","tutor"),icon:/*#__PURE__*/(0,i/* .jsx */.tZ)(m/* ["default"] */.Z,{name:"magicAiColorize",width:24,height:24}),characters:1e3,field:r,fieldState:a,is_html:true}});y===null||y===void 0?void 0:y()}};var ep=/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:J.editorLabel,children:[/*#__PURE__*/(0,i/* .jsxs */.BX)("span",{css:J.labelWithAi,children:[t,/*#__PURE__*/(0,i/* .jsx */.tZ)(W/* ["default"] */.Z,{when:p,children:/*#__PURE__*/(0,i/* .jsx */.tZ)("button",{type:"button",css:J.aiButton,onClick:ef,children:/*#__PURE__*/(0,i/* .jsx */.tZ)(m/* ["default"] */.Z,{name:"magicAiColorize",width:32,height:32})})})]}),/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:J.editorsButtonWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)("span",{children:(0,s.__)("Edit with","tutor")}),/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:J.customEditorButtons,children:/*#__PURE__*/(0,i/* .jsx */.tZ)(M/* ["default"] */.Z,{each:ec,children:e=>/*#__PURE__*/(0,i/* .jsx */.tZ)(g/* ["default"] */.Z,{content:e.label,delay:200,children:/*#__PURE__*/(0,i/* .jsxs */.BX)("button",{type:"button",css:J.customEditorButton,disabled:ed===e.name,onClick:()=>(0,n._)(function*(){try{el(e.name);yield Q===null||Q===void 0?void 0:Q(e);window.location.href=e.link}finally{el(null)}})(),children:[/*#__PURE__*/(0,i/* .jsx */.tZ)(W/* ["default"] */.Z,{when:ed===e.name,children:/*#__PURE__*/(0,i/* .jsx */.tZ)(h/* .LoadingOverlay */.fz,{})}),/*#__PURE__*/(0,i/* .jsx */.tZ)(m/* ["default"] */.Z,{name:O[e.name],height:24,width:24})]})},e.name)})})]})]});return/*#__PURE__*/(0,i/* .jsx */.tZ)(B/* ["default"] */.Z,{label:eu?ep:t,field:r,fieldState:a,disabled:o,readOnly:d,placeholder:c,helpText:v,isMagicAi:X,generateWithAi:!eu&&p,onClickAiButton:ef,replaceEntireLabel:eu,children:()=>{if(l){return/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:D/* .styleUtils.flexCenter */.i.flexCenter(),children:/*#__PURE__*/(0,i/* .jsx */.tZ)(h/* ["default"] */.ZP,{size:20,color:C/* .colorTokens.icon["default"] */.Jv.icon["default"]})})}var e;return/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:J.wrapper({isOverlayVisible:ev}),children:[/*#__PURE__*/(0,i/* .jsx */.tZ)(W/* ["default"] */.Z,{when:ev,children:/*#__PURE__*/(0,i/* .jsx */.tZ)(z,{editorUsed:P,onBackToWPEditorClick:Y,onCustomEditorButtonClick:Q})}),/*#__PURE__*/(0,i/* .jsx */.tZ)(b/* ["default"] */.Z,{value:(e=r.value)!==null&&e!==void 0?e:"",onChange:e=>{r.onChange(e);if(f){f(e)}},isMinimal:I,hideMediaButtons:U,hideQuickTags:R,autoFocus:F,onFullScreenChange:q,readonly:d,min_height:H,max_height:G,toolbar1:K,toolbar2:V})]})}})};/* ESM default export */const R=U;var J={wrapper:e=>{var{isOverlayVisible:t=false}=e;return/*#__PURE__*/(0,o/* .css */.iv)("position:relative;",t&&(0,o/* .css */.iv)(N(),C/* .borderRadius["6"] */.E0["6"]))},editorLabel:/*#__PURE__*/(0,o/* .css */.iv)("display:flex;width:100%;align-items:center;justify-content:space-between;"),aiButton:/*#__PURE__*/(0,o/* .css */.iv)(D/* .styleUtils.resetButton */.i.resetButton,";",D/* .styleUtils.flexCenter */.i.flexCenter(),";width:32px;height:32px;border-radius:",C/* .borderRadius["4"] */.E0["4"],";:disabled{cursor:not-allowed;}&:focus-visible{outline:2px solid ",C/* .colorTokens.stroke.brand */.Jv.stroke.brand,";}"),labelWithAi:/*#__PURE__*/(0,o/* .css */.iv)("display:flex;align-items:center;gap:",C/* .spacing["4"] */.W0["4"],";"),editorsButtonWrapper:/*#__PURE__*/(0,o/* .css */.iv)("display:flex;align-items:center;gap:",C/* .spacing["8"] */.W0["8"],";color:",C/* .colorTokens.text.hints */.Jv.text.hints,";"),customEditorButtons:/*#__PURE__*/(0,o/* .css */.iv)("display:flex;align-items:center;gap:",C/* .spacing["4"] */.W0["4"],";"),customEditorButton:/*#__PURE__*/(0,o/* .css */.iv)(D/* .styleUtils.resetButton */.i.resetButton,"    display:flex;align-items:center;justify-content:center;position:relative;border-radius:",C/* .borderRadius.circle */.E0.circle,";&:focus-visible{outline:2px solid ",C/* .colorTokens.stroke.brand */.Jv.stroke.brand,";outline-offset:1px;}"),editorOverlay:/*#__PURE__*/(0,o/* .css */.iv)("position:absolute;height:100%;width:100%;",D/* .styleUtils.flexCenter */.i.flexCenter(),";gap:",C/* .spacing["8"] */.W0["8"],";background-color:",c()(C/* .colorTokens.background.modal */.Jv.background.modal,.6),";border-radius:",C/* .borderRadius["6"] */.E0["6"],";z-index:",C/* .zIndex.positive */.W5.positive,";backdrop-filter:blur(8px);"),editWithButton:/*#__PURE__*/(0,o/* .css */.iv)("background:",C/* .colorTokens.action.secondary["default"] */.Jv.action.secondary["default"],";color:",C/* .colorTokens.text.primary */.Jv.text.primary,";box-shadow:inset 0 -1px 0 0 ",c()("#1112133D",.24),",0 1px 0 0 ",c()("#1112133D",.8),";")}},33267:function(e,t,r){r.d(t,{R:()=>l});/* ESM import */var n=r(35944);/* ESM import */var a=r(60860);/* ESM import */var i=r(75361);/* ESM import */var o=r(70917);/* ESM import */var s=r(87363);/* ESM import */var d=/*#__PURE__*/r.n(s);var l=/*#__PURE__*/d().forwardRef((e,t)=>{var{src:r,width:a,height:o,brushSize:d,trackStack:l,pointer:u,setTrackStack:v,setPointer:f}=e;var[p,h]=(0,s.useState)(false);var[m,g]=(0,s.useState)({x:0,y:0});var b=(0,s.useRef)(null);var _=e=>{var{canvas:r,context:n}=(0,i/* .getCanvas */.o_)(t);if(!r||!n){return}var a=r.getBoundingClientRect();var o=(e.clientX-a.left)*(r.width/a.width);var s=(e.clientY-a.top)*(r.height/a.height);n.globalCompositeOperation="destination-out";n.beginPath();n.moveTo(o,s);h(true);g({x:o,y:s})};var y=e=>{var{canvas:r,context:n}=(0,i/* .getCanvas */.o_)(t);if(!r||!n||!b.current){return}var a=r.getBoundingClientRect();var o={x:(e.clientX-a.left)*(r.width/a.width),y:(e.clientY-a.top)*(r.height/a.height)};if(p){(0,i/* .drawPath */.MC)(n,o)}b.current.style.left="".concat(o.x,"px");b.current.style.top="".concat(o.y,"px")};var w=e=>{var{canvas:r,context:n}=(0,i/* .getCanvas */.o_)(t);if(!n||!r){return}h(false);n.closePath();var a=r.getBoundingClientRect();var o={x:(e.clientX-a.left)*(r.width/a.width),y:(e.clientY-a.top)*(r.height/a.height)};// Check if the mouse is just clicked but not drag for drawing a path, then draw a circle
if((0,i/* .calculateCartesianDistance */.jo)(m,o)===0){(0,i/* .drawPath */.MC)(n,{x:o.x+1,y:o.y+1})}v(e=>{var t=e.slice(0,u);return[...t,n.getImageData(0,0,1024,1024)]});f(e=>e+1)};var x=()=>{var{canvas:e,context:n}=(0,i/* .getCanvas */.o_)(t);if(!e||!n){return}var a=new Image;a.src=r;a.onload=()=>{n.clearRect(0,0,e.width,e.height);var t=a.width/a.height;var r=e.width/e.height;var i;var o;if(r>t){o=e.height;i=e.height*t}else{i=e.width;o=e.width/t}var s=(e.width-i)/2;var d=(e.height-o)/2;n.drawImage(a,s,d,i,o);if(l.length===0){v([n.getImageData(0,0,e.width,e.height)])}};n.lineJoin="round";n.lineCap="round"};var Z=()=>{if(!b.current){return}document.body.style.cursor="none";b.current.style.display="block"};var k=()=>{if(!b.current){return}document.body.style.cursor="auto";b.current.style.display="none"};(0,s.useEffect)(()=>{x();// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);return/*#__PURE__*/(0,n/* .jsxs */.BX)("div",{css:c.wrapper,children:[/*#__PURE__*/(0,n/* .jsx */.tZ)("canvas",{ref:t,width:a,height:o,onMouseDown:_,onMouseMove:y,onMouseUp:w,onMouseEnter:Z,onMouseLeave:k}),/*#__PURE__*/(0,n/* .jsx */.tZ)("div",{ref:b,css:c.customCursor(d)})]})});var c={wrapper:/*#__PURE__*/(0,o/* .css */.iv)("position:relative;"),customCursor:e=>/*#__PURE__*/(0,o/* .css */.iv)("position:absolute;width:",e,"px;height:",e,"px;border-radius:",a/* .borderRadius.circle */.E0.circle,";background:linear-gradient(\n      73.09deg,rgba(255,150,69,0.4) 18.05%,rgba(255,100,113,0.4) 30.25%,rgba(207,110,189,0.4) 55.42%,rgba(164,119,209,0.4) 71.66%,rgba(62,100,222,0.4) 97.9%\n    );border:3px solid ",a/* .colorTokens.stroke.white */.Jv.stroke.white,";pointer-events:none;transform:translate(-50%,-50%);z-index:",a/* .zIndex.highest */.W5.highest,";display:none;")}},68439:function(e,t,r){r.d(t,{$h:()=>v,DK:()=>p,_$:()=>h});/* ESM import */var n=r(7409);/* ESM import */var a=r(99282);/* ESM import */var i=r(35944);/* ESM import */var o=r(37861);/* ESM import */var s=r(38003);/* ESM import */var d=/*#__PURE__*/r.n(s);/* ESM import */var l=r(87363);/* ESM import */var c=/*#__PURE__*/r.n(l);/* ESM import */var u=r(52293);var v=[(0,s.__)("A serene classroom setting with books and a chalkboard","tutor"),(0,s.__)("An abstract representation of innovation and creativity","tutor"),(0,s.__)("A vibrant workspace with a laptop and coffee cup","tutor"),(0,s.__)("A modern design with digital learning icons","tutor"),(0,s.__)("A futuristic cityscape with a glowing pathway","tutor"),(0,s.__)("A peaceful nature scene with soft colors","tutor"),(0,s.__)("A professional boardroom with sleek visuals","tutor"),(0,s.__)("A stack of books with warm, inviting lighting","tutor"),(0,s.__)("A dynamic collage of technology and education themes","tutor"),(0,s.__)("A bold and minimalistic design with striking colors","tutor")];// eslint-disable-next-line @typescript-eslint/no-explicit-any
var f=/*#__PURE__*/c().createContext(null);var p=()=>{var e=(0,l.useContext)(f);if(!e){throw new Error("useMagicImageGeneration must be used within MagicImageGenerationProvider.")}return e};var h=e=>{var{children:t,field:r,fieldState:s,onCloseModal:d}=e;var c=(0,o/* .useFormWithGlobalError */.O)({defaultValues:{prompt:"",style:"none"}});var[v,p]=(0,l.useState)("generation");var[h,m]=(0,l.useState)("");var[g,b]=(0,l.useState)([null,null,null,null]);var _=(0,l.useCallback)(e=>{p(e)},[]);return/*#__PURE__*/(0,i/* .jsx */.tZ)(f.Provider,{value:{state:v,onDropdownMenuChange:_,images:g,setImages:b,currentImage:h,setCurrentImage:m,field:r,fieldState:s,onCloseModal:d},children:/*#__PURE__*/(0,i/* .jsx */.tZ)(u/* .FormProvider */.RV,(0,a._)((0,n._)({},c),{children:t}))})}},59355:function(e,t,r){r.d(t,{E:()=>J});/* ESM import */var n=r(76150);/* ESM import */var a=r(7409);/* ESM import */var i=r(99282);/* ESM import */var o=r(35944);/* ESM import */var s=r(53052);/* ESM import */var d=r(26815);/* ESM import */var l=r(99308);/* ESM import */var c=r(3473);/* ESM import */var u=r(60860);/* ESM import */var v=r(76487);/* ESM import */var f=r(36352);/* ESM import */var p=r(17106);/* ESM import */var h=r(15287);/* ESM import */var m=r(56096);/* ESM import */var g=r(67149);/* ESM import */var b=r(41834);/* ESM import */var _=r(42336);/* ESM import */var y=r(79608);/* ESM import */var w=r(4359);/* ESM import */var x=r(88013);/* ESM import */var Z=r(53192);/* ESM import */var k=r(48366);/* ESM import */var E=r(39071);/* ESM import */var C=r(43666);/* ESM import */var M=r(46572);/* ESM import */var W=r(13985);/* ESM import */var D=r(29535);/* ESM import */var T=r(22456);/* ESM import */var S=r(70917);/* ESM import */var B=r(38003);/* ESM import */var N=/*#__PURE__*/r.n(B);/* ESM import */var I=r(87363);/* ESM import */var O=/*#__PURE__*/r.n(I);/* ESM import */var A=r(52293);/* ESM import */var L=r(68439);/* ESM import */var z=r(45019);/* ESM import */var U=r(95754);var R=[{label:(0,B.__)("None","tutor"),value:"none",image:Z},{label:(0,B.__)("Photo","tutor"),value:"photo",image:E},{label:(0,B.__)("Neon","tutor"),value:"neon",image:x},{label:(0,B.__)("3D","tutor"),value:"3d",image:m},{label:(0,B.__)("Painting","tutor"),value:"painting",image:k},{label:(0,B.__)("Sketch","tutor"),value:"sketch",image:M},{label:(0,B.__)("Concept","tutor"),value:"concept_art",image:b},{label:(0,B.__)("Illustration","tutor"),value:"illustration",image:w},{label:(0,B.__)("Dreamy","tutor"),value:"dreamy",image:_},{label:(0,B.__)("Filmic","tutor"),value:"filmic",image:y},{label:(0,B.__)("Retro","tutor"),value:"retrowave",image:C},{label:(0,B.__)("Black & White","tutor"),value:"black-and-white",image:g}];var J=()=>{var e=(0,A/* .useForm */.cI)({defaultValues:{style:"none",prompt:""}});var{images:t,setImages:r}=(0,L/* .useMagicImageGeneration */.DK)();var u=(0,h/* .useMagicImageGenerationMutation */.QL)();var{showToast:v}=(0,W/* .useToast */.p)();var[m,g]=(0,I.useState)(t.every(e=>e===null));var[b,_]=(0,I.useState)([false,false,false,false]);var y=e.watch("style");var w=e.watch("prompt");var x=!y||!w;var Z=t.some(T/* .isDefined */.$K);(0,I.useEffect)(()=>{if(u.isError){v({type:"danger",message:u.error.response.data.message})}// eslint-disable-next-line react-hooks/exhaustive-deps
},[u.isError]);(0,I.useEffect)(()=>{e.setFocus("prompt");// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);return/*#__PURE__*/(0,o/* .jsxs */.BX)("form",{css:U/* .magicAIStyles.wrapper */.a.wrapper,onSubmit:e.handleSubmit(e=>(0,n._)(function*(){_([true,true,true,true]);g(false);try{yield Promise.all(Array.from({length:4}).map((t,n)=>{return u.mutateAsync(e).then(e=>{r(t=>{var r,a;var i=[...t];var o;i[n]=(o=(a=e.data.data)===null||a===void 0?void 0:(r=a[0])===null||r===void 0?void 0:r.b64_json)!==null&&o!==void 0?o:null;return i});_(e=>{var t=[...e];t[n]=false;return t})}).catch(e=>{_(e=>{var t=[...e];t[n]=false;return t});throw e})}))}catch(e){_([false,false,false,false]);g(true)}})()),children:[/*#__PURE__*/(0,o/* .jsx */.tZ)("div",{css:U/* .magicAIStyles.left */.a.left,children:/*#__PURE__*/(0,o/* .jsx */.tZ)(p/* ["default"] */.Z,{when:!m,fallback:/*#__PURE__*/(0,o/* .jsx */.tZ)(d/* ["default"] */.Z,{name:"magicAiPlaceholder",width:72,height:72}),children:/*#__PURE__*/(0,o/* .jsx */.tZ)("div",{css:j.images,children:/*#__PURE__*/(0,o/* .jsx */.tZ)(f/* ["default"] */.Z,{each:t,children:(e,t)=>{return/*#__PURE__*/(0,o/* .jsx */.tZ)(z/* .AiImageItem */.J,{src:e,loading:b[t],index:t},t)}})})})}),/*#__PURE__*/(0,o/* .jsxs */.BX)("div",{css:U/* .magicAIStyles.right */.a.right,children:[/*#__PURE__*/(0,o/* .jsxs */.BX)("div",{css:j.fields,children:[/*#__PURE__*/(0,o/* .jsxs */.BX)("div",{css:j.promptWrapper,children:[/*#__PURE__*/(0,o/* .jsx */.tZ)(A/* .Controller */.Qr,{control:e.control,name:"prompt",render:e=>/*#__PURE__*/(0,o/* .jsx */.tZ)(c/* ["default"] */.Z,(0,i._)((0,a._)({},e),{label:(0,B.__)("Visualize Your Course","tutor"),placeholder:(0,B.__)("Describe the image you want for your course thumbnail","tutor"),rows:4,isMagicAi:true,disabled:u.isPending,enableResize:false}))}),/*#__PURE__*/(0,o/* .jsxs */.BX)("button",{type:"button",css:j.inspireButton,onClick:()=>{var t=L/* .inspirationPrompts.length */.$h.length;var r=Math.floor(Math.random()*t);e.reset((0,i._)((0,a._)({},e.getValues()),{prompt:L/* .inspirationPrompts */.$h[r]}))},disabled:u.isPending,children:[/*#__PURE__*/(0,o/* .jsx */.tZ)(d/* ["default"] */.Z,{name:"bulbLine"}),(0,B.__)("Inspire Me","tutor")]})]}),/*#__PURE__*/(0,o/* .jsx */.tZ)(A/* .Controller */.Qr,{control:e.control,name:"style",render:e=>/*#__PURE__*/(0,o/* .jsx */.tZ)(l/* ["default"] */.Z,(0,i._)((0,a._)({},e),{label:(0,B.__)("Styles","tutor"),options:R,disabled:u.isPending}))})]}),/*#__PURE__*/(0,o/* .jsx */.tZ)("div",{css:U/* .magicAIStyles.rightFooter */.a.rightFooter,children:/*#__PURE__*/(0,o/* .jsxs */.BX)(s/* ["default"] */.Z,{type:"submit",disabled:u.isPending||x,children:[/*#__PURE__*/(0,o/* .jsx */.tZ)(d/* ["default"] */.Z,{name:Z?"reload":"magicAi",width:24,height:24}),Z?(0,B.__)("Generate Again","tutor"):(0,B.__)("Generate Now","tutor")]})})]})]})};var j={images:/*#__PURE__*/(0,S/* .css */.iv)("display:grid;grid-template-columns:repeat(2,minmax(150px,1fr));grid-template-rows:repeat(2,minmax(150px,1fr));gap:",u/* .spacing["12"] */.W0["12"],";align-self:start;padding:",u/* .spacing["24"] */.W0["24"],";width:100%;height:100%;> div{aspect-ratio:1 / 1;}"),fields:/*#__PURE__*/(0,S/* .css */.iv)("display:flex;flex-direction:column;gap:",u/* .spacing["12"] */.W0["12"],";"),promptWrapper:/*#__PURE__*/(0,S/* .css */.iv)("position:relative;textarea{padding-bottom:",u/* .spacing["40"] */.W0["40"]," !important;}"),inspireButton:/*#__PURE__*/(0,S/* .css */.iv)(D/* .styleUtils.resetButton */.i.resetButton,";",v/* .typography.small */.c.small(),";position:absolute;height:28px;bottom:",u/* .spacing["12"] */.W0["12"],";left:",u/* .spacing["12"] */.W0["12"],";border:1px solid ",u/* .colorTokens.stroke.brand */.Jv.stroke.brand,";border-radius:",u/* .borderRadius["4"] */.E0["4"],";display:flex;align-items:center;gap:",u/* .spacing["4"] */.W0["4"],";color:",u/* .colorTokens.text.brand */.Jv.text.brand,";padding-inline:",u/* .spacing["12"] */.W0["12"],";background-color:",u/* .colorTokens.background.white */.Jv.background.white,";&:hover{background-color:",u/* .colorTokens.background.brand */.Jv.background.brand,";color:",u/* .colorTokens.text.white */.Jv.text.white,";}&:focus-visible{outline:2px solid ",u/* .colorTokens.stroke.brand */.Jv.stroke.brand,";outline-offset:1px;}&:disabled{background-color:",u/* .colorTokens.background.disable */.Jv.background.disable,";color:",u/* .colorTokens.text.disable */.Jv.text.disable,";}")}},45019:function(e,t,r){r.d(t,{J:()=>D});/* ESM import */var n=r(76150);/* ESM import */var a=r(58865);/* ESM import */var i=r(35944);/* ESM import */var o=r(53052);/* ESM import */var s=r(26815);/* ESM import */var d=r(60860);/* ESM import */var l=r(76487);/* ESM import */var c=r(36352);/* ESM import */var u=r(54354);/* ESM import */var v=r(97669);/* ESM import */var f=r(15287);/* ESM import */var p=r(75361);/* ESM import */var h=r(29535);/* ESM import */var m=r(34403);/* ESM import */var g=r(70917);/* ESM import */var b=r(38003);/* ESM import */var _=/*#__PURE__*/r.n(b);/* ESM import */var y=r(87363);/* ESM import */var w=/*#__PURE__*/r.n(y);/* ESM import */var x=r(68439);function Z(){var e=(0,a._)(["\n      background-position: top left;\n    "]);Z=function t(){return e};return e}function k(){var e=(0,a._)(["\n      background-position: top right;\n      animation-delay: 0.5s;\n    "]);k=function t(){return e};return e}function E(){var e=(0,a._)(["\n      background-position: bottom left;\n      animation-delay: 1.5s;\n    "]);E=function t(){return e};return e}function C(){var e=(0,a._)(["\n      background-position: bottom right;\n      animation-delay: 1s;\n    "]);C=function t(){return e};return e}function M(){var e=(0,a._)(["\n      outline-color: ",";\n\n      [data-actions] {\n        opacity: 1;\n      }\n    "]);M=function t(){return e};return e}var W=[{label:(0,b.__)("Magic Fill","tutor"),value:"magic-fill",icon:/*#__PURE__*/(0,i/* .jsx */.tZ)(s/* ["default"] */.Z,{name:"magicWand",width:24,height:24})},// @TODO: will be implemented in the future
// {
//   label: __('Object eraser', 'tutor'),
//   value: 'magic-erase',
//   icon: <SVGIcon name="eraser" width={24} height={24} />,
// },
// {
//   label: __('Variations', 'tutor'),
//   value: 'variations',
//   icon: <SVGIcon name="reload" width={24} height={24} />,
// },
{label:(0,b.__)("Download","tutor"),value:"download",icon:/*#__PURE__*/(0,i/* .jsx */.tZ)(s/* ["default"] */.Z,{name:"download",width:24,height:24})}];var D=e=>{var{src:t,loading:r,index:a}=e;var d=(0,y.useRef)(null);var[l,h]=(0,y.useState)(false);var{onDropdownMenuChange:g,setCurrentImage:_,onCloseModal:w,field:Z}=(0,x/* .useMagicImageGeneration */.DK)();var k=(0,f/* .useStoreAIGeneratedImageMutation */.H9)();if(r||!t){return/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:S.loader(a+1)})}return/*#__PURE__*/(0,i/* .jsxs */.BX)(i/* .Fragment */.HY,{children:[/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:S.image({isActive:k.isPending}),children:[/*#__PURE__*/(0,i/* .jsx */.tZ)("img",{src:t,alt:(0,b.__)("Generated Image","tutor")}),/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{"data-actions":true,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:S.useButton,children:/*#__PURE__*/(0,i/* .jsxs */.BX)(o/* ["default"] */.Z,{variant:"primary",disabled:k.isPending,onClick:()=>(0,n._)(function*(){if(!t){return}var e=yield k.mutateAsync({image:t});if(e.data){Z.onChange(e.data);w()}})(),loading:k.isPending,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)(s/* ["default"] */.Z,{name:"download",width:24,height:24}),(0,b.__)("Use This","tutor")]})}),/*#__PURE__*/(0,i/* .jsx */.tZ)(o/* ["default"] */.Z,{variant:"primary",size:"icon",css:S.threeDots,ref:d,onClick:()=>h(true),children:/*#__PURE__*/(0,i/* .jsx */.tZ)(s/* ["default"] */.Z,{name:"threeDotsVertical",width:24,height:24})})]})]}),/*#__PURE__*/(0,i/* .jsx */.tZ)(v/* ["default"] */.Z,{triggerRef:d,isOpen:l,closePopover:()=>{h(false)},animationType:u/* .AnimationType.slideDown */.ru.slideDown,maxWidth:"160px",children:/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:S.dropdownOptions,children:/*#__PURE__*/(0,i/* .jsx */.tZ)(c/* ["default"] */.Z,{each:W,children:(e,r)=>/*#__PURE__*/(0,i/* .jsxs */.BX)("button",{type:"button",css:S.dropdownItem,onClick:()=>{switch(e.value){case"magic-fill":{_(t);g(e.value);break}case"download":{var r="".concat((0,m/* .nanoid */.x0)(),".png");(0,p/* .downloadBase64Image */.Lp)(t,r);break}default:break}h(false)},children:[e.icon,e.label]},r)})})})]})};var T=/*#__PURE__*/(0,g/* .keyframes */.F4)("		0%{opacity:0.3;}25%{opacity:0.5;}50%{opacity:0.7;}75%{opacity:0.5;}100%{opacity:0.3;}");var S={loader:e=>/*#__PURE__*/(0,g/* .css */.iv)("border-radius:",d/* .borderRadius["12"] */.E0["12"],";background:linear-gradient(\n      73.09deg,#ff9645 18.05%,#ff6471 30.25%,#cf6ebd 55.42%,#a477d1 71.66%,#3e64de 97.9%\n    );position:relative;width:100%;height:100%;background-size:612px 612px;opacity:0.3;transition:opacity 0.5s ease;animation:",T," 2s linear infinite;",e===1&&(0,g/* .css */.iv)(Z())," ",e===2&&(0,g/* .css */.iv)(k()),"		",e===3&&(0,g/* .css */.iv)(E()),"		",e===4&&(0,g/* .css */.iv)(C())),image:e=>{var{isActive:t}=e;return/*#__PURE__*/(0,g/* .css */.iv)("width:100%;height:100%;overflow:hidden;border-radius:",d/* .borderRadius["12"] */.E0["12"],";position:relative;outline:2px solid transparent;outline-offset:2px;transition:border-radius 0.3s ease;[data-actions]{opacity:0;transition:opacity 0.3s ease;}img{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;}",t&&(0,g/* .css */.iv)(M(),d/* .colorTokens.stroke.brand */.Jv.stroke.brand),"    &:hover,&:focus-within{outline-color:",d/* .colorTokens.stroke.brand */.Jv.stroke.brand,";[data-actions]{opacity:1;}}")},threeDots:/*#__PURE__*/(0,g/* .css */.iv)("position:absolute;top:",d/* .spacing["8"] */.W0["8"],";right:",d/* .spacing["8"] */.W0["8"],";border-radius:",d/* .borderRadius["4"] */.E0["4"],";"),useButton:/*#__PURE__*/(0,g/* .css */.iv)("position:absolute;left:50%;bottom:",d/* .spacing["12"] */.W0["12"],";transform:translateX(-50%);button{display:inline-flex;align-items:center;gap:",d/* .spacing["4"] */.W0["4"],";}"),dropdownOptions:/*#__PURE__*/(0,g/* .css */.iv)("display:flex;flex-direction:column;padding-block:",d/* .spacing["8"] */.W0["8"],";"),dropdownItem:/*#__PURE__*/(0,g/* .css */.iv)(l/* .typography.small */.c.small(),";",h/* .styleUtils.resetButton */.i.resetButton,";height:40px;display:flex;gap:",d/* .spacing["10"] */.W0["10"],";align-items:center;transition:background-color 0.3s ease;color:",d/* .colorTokens.text.title */.Jv.text.title,";padding-inline:",d/* .spacing["8"] */.W0["8"],";cursor:pointer;svg{color:",d/* .colorTokens.icon["default"] */.Jv.icon["default"],";}&:hover{background-color:",d/* .colorTokens.background.hover */.Jv.background.hover,";}")}},81828:function(e,t,r){r.d(t,{Z:()=>N});/* ESM import */var n=r(76150);/* ESM import */var a=r(7409);/* ESM import */var i=r(99282);/* ESM import */var o=r(35944);/* ESM import */var s=r(53052);/* ESM import */var d=r(26815);/* ESM import */var l=r(98978);/* ESM import */var c=r(60309);/* ESM import */var u=r(3473);/* ESM import */var v=r(60860);/* ESM import */var f=r(76487);/* ESM import */var p=r(17106);/* ESM import */var h=r(4867);/* ESM import */var m=r(37861);/* ESM import */var g=r(15287);/* ESM import */var b=r(75361);/* ESM import */var _=r(29535);/* ESM import */var y=r(34403);/* ESM import */var w=r(70917);/* ESM import */var x=r(38003);/* ESM import */var Z=/*#__PURE__*/r.n(x);/* ESM import */var k=r(87363);/* ESM import */var E=/*#__PURE__*/r.n(k);/* ESM import */var C=r(52293);/* ESM import */var M=r(33267);/* ESM import */var W=r(68439);/* ESM import */var D=r(95754);var T=620;var S=620;var B=()=>{var e=(0,m/* .useFormWithGlobalError */.O)({defaultValues:{brush_size:40,prompt:""}});var t=(0,g/* .useMagicFillImageMutation */.vN)();var r=(0,k.useRef)(null);var{onDropdownMenuChange:v,currentImage:f,field:_,onCloseModal:Z}=(0,W/* .useMagicImageGeneration */.DK)();var E=(0,g/* .useStoreAIGeneratedImageMutation */.H9)();var B=(0,h/* .useDebounce */.N)(e.watch("brush_size",40));var[N,I]=(0,k.useState)([]);var[A,L]=(0,k.useState)(1);var z=(0,k.useCallback)((e,t)=>{var n;var a=(n=r.current)===null||n===void 0?void 0:n.getContext("2d");if(!a){return}for(var i of t.slice(0,e)){a.putImageData(i,0,0)}},[]);(0,k.useEffect)(()=>{var e;var t=(e=r.current)===null||e===void 0?void 0:e.getContext("2d");if(!t){return}t.lineWidth=B},[B]);(0,k.useEffect)(()=>{var e=e=>{if(e.metaKey){if(e.shiftKey&&e.key.toUpperCase()==="Z"){z(A+1,N);L(e=>Math.min(e+1,N.length));return}if(e.key.toUpperCase()==="Z"){z(A-1,N);L(e=>Math.max(e-1,1));return}}};window.addEventListener("keydown",e);return()=>{window.removeEventListener("keydown",e)}},[A,N,z]);if(!f){return null}return/*#__PURE__*/(0,o/* .jsxs */.BX)("form",{css:D/* .magicAIStyles.wrapper */.a.wrapper,onSubmit:e.handleSubmit(e=>(0,n._)(function*(){var n=r.current;var a=n===null||n===void 0?void 0:n.getContext("2d");if(!n||!a){return}var i={prompt:e.prompt,image:(0,b/* .getImageData */.n$)(n)};var o=yield t.mutateAsync(i);if(o){var s=new Image;s.onload=()=>{n.width=T;n.height=S;a.drawImage(s,0,0,n.width,n.height);a.lineWidth=B;a.lineJoin="round";a.lineCap="round"};s.src=o}})()),children:[/*#__PURE__*/(0,o/* .jsx */.tZ)("div",{css:D/* .magicAIStyles.left */.a.left,children:/*#__PURE__*/(0,o/* .jsxs */.BX)("div",{css:O.leftWrapper,children:[/*#__PURE__*/(0,o/* .jsxs */.BX)("div",{css:O.actionBar,children:[/*#__PURE__*/(0,o/* .jsxs */.BX)("div",{css:O.backButtonWrapper,children:[/*#__PURE__*/(0,o/* .jsx */.tZ)("button",{type:"button",css:O.backButton,onClick:()=>v("generation"),children:/*#__PURE__*/(0,o/* .jsx */.tZ)(d/* ["default"] */.Z,{name:"arrowLeft"})}),(0,x.__)("Magic Fill","tutor")]}),/*#__PURE__*/(0,o/* .jsxs */.BX)("div",{css:O.actions,children:[/*#__PURE__*/(0,o/* .jsx */.tZ)(s/* ["default"] */.Z,{variant:"ghost",disabled:N.length===0,onClick:()=>{z(1,N);I(N.slice(0,1));L(1)},children:(0,x.__)("Revert to Original","tutor")}),/*#__PURE__*/(0,o/* .jsx */.tZ)(l/* .Separator */.Z,{variant:"vertical",css:/*#__PURE__*/(0,w/* .css */.iv)("min-height:16px;")}),/*#__PURE__*/(0,o/* .jsxs */.BX)("div",{css:O.undoRedo,children:[/*#__PURE__*/(0,o/* .jsx */.tZ)(s/* ["default"] */.Z,{variant:"ghost",size:"icon",disabled:A<=1,onClick:()=>{z(A-1,N);L(e=>Math.max(e-1,1))},children:/*#__PURE__*/(0,o/* .jsx */.tZ)(d/* ["default"] */.Z,{name:"undo",width:20,height:20})}),/*#__PURE__*/(0,o/* .jsx */.tZ)(s/* ["default"] */.Z,{variant:"ghost",size:"icon",disabled:A===N.length,onClick:()=>{z(A+1,N);L(e=>Math.min(e+1,N.length))},children:/*#__PURE__*/(0,o/* .jsx */.tZ)(d/* ["default"] */.Z,{name:"redo",width:20,height:20})})]})]})]}),/*#__PURE__*/(0,o/* .jsxs */.BX)("div",{css:O.canvasAndLoading,children:[/*#__PURE__*/(0,o/* .jsx */.tZ)(M/* .DrawingCanvas */.R,{ref:r,width:T,height:S,src:f,brushSize:B,trackStack:N,pointer:A,setTrackStack:I,setPointer:L}),/*#__PURE__*/(0,o/* .jsx */.tZ)(p/* ["default"] */.Z,{when:t.isPending,children:/*#__PURE__*/(0,o/* .jsx */.tZ)("div",{css:O.loading})})]}),/*#__PURE__*/(0,o/* .jsx */.tZ)("div",{css:O.footerActions,children:/*#__PURE__*/(0,o/* .jsx */.tZ)("div",{css:O.footerActionsLeft,children:/*#__PURE__*/(0,o/* .jsx */.tZ)(s/* ["default"] */.Z,{variant:"secondary",onClick:()=>{var e="".concat((0,y/* .nanoid */.x0)(),".png");var{canvas:t}=(0,b/* .getCanvas */.o_)(r);if(!t)return;(0,b/* .downloadBase64Image */.Lp)((0,b/* .getImageData */.n$)(t),e)},children:/*#__PURE__*/(0,o/* .jsx */.tZ)(d/* ["default"] */.Z,{name:"download",width:24,height:24})})})})]})}),/*#__PURE__*/(0,o/* .jsxs */.BX)("div",{css:D/* .magicAIStyles.right */.a.right,children:[/*#__PURE__*/(0,o/* .jsxs */.BX)("div",{css:O.fields,children:[/*#__PURE__*/(0,o/* .jsx */.tZ)(C/* .Controller */.Qr,{control:e.control,name:"brush_size",render:e=>/*#__PURE__*/(0,o/* .jsx */.tZ)(c/* ["default"] */.Z,(0,i._)((0,a._)({},e),{label:"Brush Size",min:1,max:100,isMagicAi:true,hasBorder:true}))}),/*#__PURE__*/(0,o/* .jsx */.tZ)(C/* .Controller */.Qr,{control:e.control,name:"prompt",render:e=>/*#__PURE__*/(0,o/* .jsx */.tZ)(u/* ["default"] */.Z,(0,i._)((0,a._)({},e),{label:(0,x.__)("Describe the Fill","tutor"),placeholder:(0,x.__)("Write 5 words to describe...","tutor"),rows:4,isMagicAi:true}))})]}),/*#__PURE__*/(0,o/* .jsx */.tZ)("div",{css:[D/* .magicAIStyles.rightFooter */.a.rightFooter,/*#__PURE__*/(0,w/* .css */.iv)("margin-top:auto;")],children:/*#__PURE__*/(0,o/* .jsxs */.BX)("div",{css:O.footerButtons,children:[/*#__PURE__*/(0,o/* .jsxs */.BX)(s/* ["default"] */.Z,{type:"submit",disabled:t.isPending||!e.watch("prompt"),children:[/*#__PURE__*/(0,o/* .jsx */.tZ)(d/* ["default"] */.Z,{name:"magicWand",width:24,height:24}),(0,x.__)("Generative Erase","tutor")]}),/*#__PURE__*/(0,o/* .jsx */.tZ)(s/* ["default"] */.Z,{variant:"primary_outline",disabled:t.isPending,loading:E.isPending,onClick:()=>(0,n._)(function*(){var{canvas:e}=(0,b/* .getCanvas */.o_)(r);if(!e)return;var t=yield E.mutateAsync({image:(0,b/* .getImageData */.n$)(e)});if(t.data){_.onChange(t.data);Z()}})(),children:(0,x.__)("Use Image","tutor")})]})})]})]})};/* ESM default export */const N=B;var I={loading:/*#__PURE__*/(0,w/* .keyframes */.F4)("0%{opacity:0;}50%{opacity:0.6;}100%{opacity:0;}"),walker:/*#__PURE__*/(0,w/* .keyframes */.F4)("0%{left:0%;}100%{left:100%;}")};var O={canvasAndLoading:/*#__PURE__*/(0,w/* .css */.iv)("position:relative;z-index:",v/* .zIndex.positive */.W5.positive,";"),loading:/*#__PURE__*/(0,w/* .css */.iv)("position:absolute;top:0;left:0;width:100%;height:100%;background:",v/* .colorTokens.ai.gradient_1 */.Jv.ai.gradient_1,";opacity:0.6;transition:0.5s ease opacity;animation:",I.loading," 1s linear infinite;z-index:0;&::before{content:'';position:absolute;top:0;left:0;width:200px;height:100%;background:linear-gradient(\n        270deg,rgba(255,255,255,0) 0%,rgba(255,255,255,0.6) 51.13%,rgba(255,255,255,0) 100%\n      );animation:",I.walker," 1s linear infinite;}"),actionBar:/*#__PURE__*/(0,w/* .css */.iv)("display:flex;align-items:center;justify-content:space-between;"),fields:/*#__PURE__*/(0,w/* .css */.iv)("display:flex;flex-direction:column;gap:",v/* .spacing["12"] */.W0["12"],";"),leftWrapper:/*#__PURE__*/(0,w/* .css */.iv)("display:flex;flex-direction:column;gap:",v/* .spacing["8"] */.W0["8"],";padding-block:",v/* .spacing["16"] */.W0["16"],";"),footerButtons:/*#__PURE__*/(0,w/* .css */.iv)("display:flex;flex-direction:column;gap:",v/* .spacing["8"] */.W0["8"],";"),footerActions:/*#__PURE__*/(0,w/* .css */.iv)("display:flex;justify-content:space-between;"),footerActionsLeft:/*#__PURE__*/(0,w/* .css */.iv)("display:flex;align-items:center;gap:",v/* .spacing["12"] */.W0["12"],";"),actions:/*#__PURE__*/(0,w/* .css */.iv)("display:flex;align-items:center;gap:",v/* .spacing["16"] */.W0["16"],";"),undoRedo:/*#__PURE__*/(0,w/* .css */.iv)("display:flex;align-items:center;gap:",v/* .spacing["12"] */.W0["12"],";"),backButtonWrapper:/*#__PURE__*/(0,w/* .css */.iv)("display:flex;align-items:center;gap:",v/* .spacing["8"] */.W0["8"],";",f/* .typography.body */.c.body("medium"),";color:",v/* .colorTokens.text.title */.Jv.text.title,";"),backButton:/*#__PURE__*/(0,w/* .css */.iv)(_/* .styleUtils.resetButton */.i.resetButton,";width:24px;height:24px;border-radius:",v/* .borderRadius["4"] */.E0["4"],";border:1px solid ",v/* .colorTokens.stroke["default"] */.Jv.stroke["default"],";display:flex;align-items:center;justify-content:center;"),image:/*#__PURE__*/(0,w/* .css */.iv)("width:492px;height:498px;position:relative;img{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;}"),canvasWrapper:/*#__PURE__*/(0,w/* .css */.iv)("position:relative;"),customCursor:e=>/*#__PURE__*/(0,w/* .css */.iv)("position:absolute;width:",e,"px;height:",e,"px;border-radius:",v/* .borderRadius.circle */.E0.circle,";background:linear-gradient(\n      73.09deg,rgba(255,150,69,0.4) 18.05%,rgba(255,100,113,0.4) 30.25%,rgba(207,110,189,0.4) 55.42%,rgba(164,119,209,0.4) 71.66%,rgba(62,100,222,0.4) 97.9%\n    );border:3px solid ",v/* .colorTokens.stroke.white */.Jv.stroke.white,";pointer-events:none;transform:translate(-50%,-50%);z-index:",v/* .zIndex.highest */.W5.highest,";display:none;")}},95754:function(e,t,r){r.d(t,{a:()=>i});/* ESM import */var n=r(60860);/* ESM import */var a=r(70917);var i={wrapper:/*#__PURE__*/(0,a/* .css */.iv)("min-width:1000px;display:grid;grid-template-columns:1fr 330px;",n/* .Breakpoint.tablet */.Uo.tablet,"{min-width:auto;grid-template-columns:1fr;width:100%;}"),left:/*#__PURE__*/(0,a/* .css */.iv)("display:flex;justify-content:center;align-items:center;background-color:#f7f7f7;z-index:",n/* .zIndex.level */.W5.level,";"),right:/*#__PURE__*/(0,a/* .css */.iv)("padding:",n/* .spacing["20"] */.W0["20"],";display:flex;flex-direction:column;align-items:space-between;z-index:",n/* .zIndex.positive */.W5.positive,";"),rightFooter:/*#__PURE__*/(0,a/* .css */.iv)("display:flex;flex-direction:column;gap:",n/* .spacing["8"] */.W0["8"],";margin-top:auto;padding-top:80px;")}},36853:function(e,t,r){r.d(t,{Z:()=>c});/* ESM import */var n=r(35944);/* ESM import */var a=r(68439);/* ESM import */var i=r(59355);/* ESM import */var o=r(81828);/* ESM import */var s=r(22128);function d(){var{state:e}=(0,a/* .useMagicImageGeneration */.DK)();switch(e){case"generation":return/*#__PURE__*/(0,n/* .jsx */.tZ)(i/* .ImageGeneration */.E,{});case"magic-fill":return/*#__PURE__*/(0,n/* .jsx */.tZ)(o/* ["default"] */.Z,{});default:return null}}var l=e=>{var{title:t,icon:r,closeModal:i,field:o,fieldState:l}=e;return/*#__PURE__*/(0,n/* .jsx */.tZ)(s/* ["default"] */.Z,{onClose:i,title:t,icon:r,maxWidth:1e3,children:/*#__PURE__*/(0,n/* .jsx */.tZ)(a/* .MagicImageGenerationProvider */._$,{field:o,fieldState:l,onCloseModal:i,children:/*#__PURE__*/(0,n/* .jsx */.tZ)(d,{})})})};/* ESM default export */const c=l},4867:function(e,t,r){r.d(t,{N:()=>i});/* ESM import */var n=r(87363);/* ESM import */var a=/*#__PURE__*/r.n(n);var i=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:300;var[r,a]=(0,n.useState)(e);(0,n.useEffect)(()=>{var r=setTimeout(()=>{a(e)},t);return()=>{clearTimeout(r)}},[e,t]);return r}},41819:function(e,t,r){r.d(t,{a:()=>d});/* ESM import */var n=r(7409);/* ESM import */var a=r(22456);/* ESM import */var i=r(87363);/* ESM import */var o=/*#__PURE__*/r.n(i);var s={defaultValue:false};var d=e=>{var t=(0,i.useRef)(null);var r=(0,n._)({},s,e);var[o,d]=(0,i.useState)(r.defaultValue);(0,i.useEffect)(()=>{if(!(0,a/* .isDefined */.$K)(t.current)){return}if(t.current.scrollHeight<=t.current.clientHeight){d(false);return}var e=e=>{var t=e.target;if(t.scrollTop+t.clientHeight>=t.scrollHeight){d(false);return}d(t.scrollTop>=0)};t.current.addEventListener("scroll",e);return()=>{var r;(r=t.current)===null||r===void 0?void 0:r.removeEventListener("scroll",e)};// eslint-disable-next-line react-hooks/exhaustive-deps
},[t.current]);return{ref:t,isScrolling:o}}},43372:function(e,t,r){r.d(t,{Z:()=>u});/* ESM import */var n=r(7409);/* ESM import */var a=r(99282);/* ESM import */var i=r(38003);/* ESM import */var o=/*#__PURE__*/r.n(i);/* ESM import */var s=r(87363);/* ESM import */var d=/*#__PURE__*/r.n(s);/* ESM import */var l=r(13985);var c=e=>{var{options:t={},onChange:r,initialFiles:o}=e;var{showToast:d}=(0,l/* .useToast */.p)();var c=(0,s.useMemo)(()=>o?Array.isArray(o)?o:[o]:[],[o]);var u=(0,s.useMemo)(()=>(0,a._)((0,n._)({},t,t.type?{library:{type:t.type}}:{}),{multiple:t.multiple?t.multiple===true?"add":t.multiple:false}),[t]);var[v,f]=(0,s.useState)(c);(0,s.useEffect)(()=>{if(c&&!v.length){f(c)}},[v,c]);var p=(0,s.useCallback)(()=>{var e;if(!((e=window.wp)===null||e===void 0?void 0:e.media)){// eslint-disable-next-line no-console
console.error("WordPress media library is not available");return}var t=window.wp.media(u);t.on("close",()=>{if(t.$el){t.$el.parent().parent().remove()}});t.on("open",()=>{var e=t.state().get("selection");t.$el.attr("data-focus-trap","true");e.reset();v.forEach(t=>{var r=window.wp.media.attachment(t.id);if(r){r.fetch();e.add(r)}})});t.on("select",()=>{var e=t.state().get("selection").toJSON();var n=new Set(e.map(e=>e.id));var a=v.filter(e=>n.has(e.id));var o=e.reduce((e,t)=>{if(a.some(e=>e.id===t.id)){return e}if(u.maxFileSize&&t.filesizeInBytes>u.maxFileSize){d({// translators: %s is the file title
message:(0,i.sprintf)((0,i.__)("%s size exceeds the maximum allowed size","tutor"),t.title),type:"danger"});return e}var r={id:t.id,title:t.title,url:t.url,name:t.title,size:t.filesizeHumanReadable,size_bytes:t.filesizeInBytes,ext:t.filename.split(".").pop()||""};e.push(r);return e},[]);var s=u.multiple?[...a,...o]:o.slice(0,1);if(u.maxFiles&&s.length>u.maxFiles){d({// translators: %d is the maximum number of files allowed
message:(0,i.sprintf)((0,i.__)("Cannot select more than %d files","tutor"),u.maxFiles),type:"warning"});return}f(s);r===null||r===void 0?void 0:r(u.multiple?s:s[0]||null);t.close()});t.open()},[u,r,v,d]);var h=(0,s.useCallback)(()=>{f([]);r===null||r===void 0?void 0:r(u.multiple?[]:null)},[u.multiple,r]);return{openMediaLibrary:p,existingFiles:v,resetFiles:h}};/* ESM default export */const u=c},65361:function(e,t,r){r.d(t,{Z:()=>b});/* ESM import */var n=r(58865);/* ESM import */var a=r(35944);/* ESM import */var i=r(19398);/* ESM import */var o=r(74053);/* ESM import */var s=r(60860);/* ESM import */var d=r(76487);/* ESM import */var l=r(54354);/* ESM import */var c=r(98567);/* ESM import */var u=r(29535);/* ESM import */var v=r(70917);/* ESM import */var f=r(38003);/* ESM import */var p=/*#__PURE__*/r.n(f);function h(){var e=(0,n._)(["\n        content: '';\n        position: absolute;\n        border: "," solid transparent;\n\n        ","\n        ","\n        ","\n        ","\n      "]);h=function t(){return e};return e}function m(){var e=(0,n._)(["\n      button:last-of-type {\n        color: ",";\n      }\n    "]);m=function t(){return e};return e}var g=e=>{var{arrow:t,triggerRef:r,isOpen:n,title:s,message:d,onConfirmation:u,onCancel:v,isLoading:p=false,gap:h,maxWidth:m,closePopover:g,animationType:b=l/* .AnimationType.slideLeft */.ru.slideLeft,hideArrow:y=false,confirmButton:w,cancelButton:x,positionModifier:Z}=e;var{position:k,triggerWidth:E,popoverRef:C}=(0,c/* .usePortalPopover */.l)({triggerRef:r,isOpen:n,arrow:t,gap:h,positionModifier:Z});var M,W,D,T,S;return/*#__PURE__*/(0,a/* .jsx */.tZ)(c/* .Portal */.h,{isOpen:n,onClickOutside:g,animationType:b,children:/*#__PURE__*/(0,a/* .jsx */.tZ)("div",{css:[_.wrapper(t?k.arrowPlacement:undefined,y),{[o/* .isRTL */.dZ?"right":"left"]:k.left,top:k.top,maxWidth:m!==null&&m!==void 0?m:E}],ref:C,children:/*#__PURE__*/(0,a/* .jsxs */.BX)("div",{css:_.content,children:[/*#__PURE__*/(0,a/* .jsxs */.BX)("div",{css:_.body,children:[/*#__PURE__*/(0,a/* .jsx */.tZ)("div",{css:_.title,children:s}),/*#__PURE__*/(0,a/* .jsx */.tZ)("p",{css:_.description,children:d})]}),/*#__PURE__*/(0,a/* .jsxs */.BX)("div",{css:_.footer({isDelete:(M=w===null||w===void 0?void 0:w.isDelete)!==null&&M!==void 0?M:false}),children:[/*#__PURE__*/(0,a/* .jsx */.tZ)(i/* ["default"] */.Z,{variant:(W=x===null||x===void 0?void 0:x.variant)!==null&&W!==void 0?W:"text",size:"small",onClick:v!==null&&v!==void 0?v:g,children:(D=x===null||x===void 0?void 0:x.text)!==null&&D!==void 0?D:(0,f.__)("Cancel","tutor")}),/*#__PURE__*/(0,a/* .jsx */.tZ)(i/* ["default"] */.Z,{"data-cy":"confirm-button",variant:(T=w===null||w===void 0?void 0:w.variant)!==null&&T!==void 0?T:"text",onClick:()=>{u();g()},loading:p,size:"small",children:(S=w===null||w===void 0?void 0:w.text)!==null&&S!==void 0?S:(0,f.__)("Ok","tutor")})]})]})})})};/* ESM default export */const b=g;var _={wrapper:(e,t)=>/*#__PURE__*/(0,v/* .css */.iv)("position:absolute;width:100%;z-index:",s/* .zIndex.dropdown */.W5.dropdown,";&::before{",e&&!t&&(0,v/* .css */.iv)(h(),s/* .spacing["8"] */.W0["8"],e==="left"&&_.arrowLeft,e==="right"&&_.arrowRight,e==="top"&&_.arrowTop,e==="bottom"&&_.arrowBottom),"}"),arrowLeft:/*#__PURE__*/(0,v/* .css */.iv)("border-right-color:",s/* .colorTokens.surface.tutor */.Jv.surface.tutor,";top:50%;transform:translateY(-50%);left:-",s/* .spacing["16"] */.W0["16"],";"),arrowRight:/*#__PURE__*/(0,v/* .css */.iv)("border-left-color:",s/* .colorTokens.surface.tutor */.Jv.surface.tutor,";top:50%;transform:translateY(-50%);right:-",s/* .spacing["16"] */.W0["16"],";"),arrowTop:/*#__PURE__*/(0,v/* .css */.iv)("border-bottom-color:",s/* .colorTokens.surface.tutor */.Jv.surface.tutor,";left:50%;transform:translateX(-50%);top:-",s/* .spacing["16"] */.W0["16"],";"),arrowBottom:/*#__PURE__*/(0,v/* .css */.iv)("border-top-color:",s/* .colorTokens.surface.tutor */.Jv.surface.tutor,";left:50%;transform:translateX(-50%);bottom:-",s/* .spacing["16"] */.W0["16"],";"),content:/*#__PURE__*/(0,v/* .css */.iv)("background-color:",s/* .colorTokens.surface.tutor */.Jv.surface.tutor,";box-shadow:",s/* .shadow.popover */.AF.popover,";border-radius:",s/* .borderRadius["6"] */.E0["6"],";::-webkit-scrollbar{background-color:",s/* .colorTokens.surface.tutor */.Jv.surface.tutor,";width:10px;}::-webkit-scrollbar-thumb{background-color:",s/* .colorTokens.action.secondary["default"] */.Jv.action.secondary["default"],";border-radius:",s/* .borderRadius["6"] */.E0["6"],";}"),title:/*#__PURE__*/(0,v/* .css */.iv)(d/* .typography.small */.c.small("medium"),";color:",s/* .colorTokens.text.primary */.Jv.text.primary,";"),description:/*#__PURE__*/(0,v/* .css */.iv)(d/* .typography.small */.c.small(),";color:",s/* .colorTokens.text.subdued */.Jv.text.subdued,";"),body:/*#__PURE__*/(0,v/* .css */.iv)("padding:",s/* .spacing["16"] */.W0["16"]," ",s/* .spacing["20"] */.W0["20"]," ",s/* .spacing["12"] */.W0["12"],";",u/* .styleUtils.display.flex */.i.display.flex("column"),";gap:",s/* .spacing["8"] */.W0["8"],";"),footer:e=>{var{isDelete:t=false}=e;return/*#__PURE__*/(0,v/* .css */.iv)(u/* .styleUtils.display.flex */.i.display.flex(),";padding:",s/* .spacing["4"] */.W0["4"]," ",s/* .spacing["16"] */.W0["16"]," ",s/* .spacing["8"] */.W0["8"],";justify-content:end;gap:",s/* .spacing["10"] */.W0["10"],";",t&&(0,v/* .css */.iv)(m(),s/* .colorTokens.text.error */.Jv.text.error))}}},75857:function(e,t,r){r.d(t,{Z:()=>b});/* ESM import */var n=r(58865);/* ESM import */var a=r(35944);/* ESM import */var i=r(70917);/* ESM import */var o=r(60860);/* ESM import */var s=r(76487);/* ESM import */var d=r(17106);/* ESM import */var l=r(22456);function c(){var e=(0,n._)(["\n      border: 1px solid ",";\n      border-radius: ",";\n      background-color: ",";\n    "]);c=function t(){return e};return e}function u(){var e=(0,n._)(["\n      gap: ",";\n      padding: ",";\n      padding-bottom: ",";\n    "]);u=function t(){return e};return e}function v(){var e=(0,n._)(["\n        max-width: 282px;\n      "]);v=function t(){return e};return e}function f(){var e=(0,n._)(["\n      gap: ",";\n    "]);f=function t(){return e};return e}function p(){var e=(0,n._)(["\n      ",";\n      color: ",";\n    "]);p=function t(){return e};return e}function h(){var e=(0,n._)(["\n      ",";\n      color: ",";\n    "]);h=function t(){return e};return e}function m(){var e=(0,n._)(["\n      gap: ",";\n      margin-top: ",";\n    "]);m=function t(){return e};return e}var g=e=>{var{emptyStateImage:t,emptyStateImage2x:r,imageAltText:n,title:i,size:o="medium",description:s,actions:c,removeBorder:u=true,wrapperCss:v}=e;return/*#__PURE__*/(0,a/* .jsxs */.BX)("div",{css:[_.bannerWrapper(o,u,!!(0,l/* .isDefined */.$K)(t)),v],children:[/*#__PURE__*/(0,a/* .jsx */.tZ)(d/* ["default"] */.Z,{when:t,children:/*#__PURE__*/(0,a/* .jsx */.tZ)("img",{src:t,alt:n,srcSet:r?"".concat(r," 2x"):""})}),/*#__PURE__*/(0,a/* .jsxs */.BX)("div",{css:_.messageWrapper(o),children:[/*#__PURE__*/(0,a/* .jsx */.tZ)("h5",{css:_.title(o),children:i}),/*#__PURE__*/(0,a/* .jsx */.tZ)(d/* ["default"] */.Z,{when:s,children:/*#__PURE__*/(0,a/* .jsx */.tZ)("p",{css:_.description(o),children:s})}),/*#__PURE__*/(0,a/* .jsx */.tZ)(d/* ["default"] */.Z,{when:c,children:/*#__PURE__*/(0,a/* .jsx */.tZ)("div",{"data-actions":true,css:_.actionWrapper(o),children:c})})]})]})};/* ESM default export */const b=g;var _={bannerWrapper:(e,t,r)=>/*#__PURE__*/(0,i/* .css */.iv)("display:grid;place-items:center;justify-content:center;gap:",o/* .spacing["36"] */.W0["36"],";padding:",r?"".concat(o/* .spacing["16"] */.W0["16"]," ").concat(o/* .spacing["20"] */.W0["20"]):"".concat(o/* .spacing["20"] */.W0["20"]),";",!t&&(0,i/* .css */.iv)(c(),o/* .colorTokens.stroke.divider */.Jv.stroke.divider,o/* .borderRadius.card */.E0.card,o/* .colorTokens.background.white */.Jv.background.white)," ",e==="small"&&(0,i/* .css */.iv)(u(),o/* .spacing["12"] */.W0["12"],r?o/* .spacing["12"] */.W0["12"]:o/* .spacing["16"] */.W0["16"],r?o/* .spacing["24"] */.W0["24"]:undefined),"    & img{max-width:640px;width:100%;height:auto;border-radius:",e==="small"?o/* .borderRadius["6"] */.E0["6"]:o/* .borderRadius["10"] */.E0["10"],";overflow:hidden;object-position:center;object-fit:cover;",e==="small"&&(0,i/* .css */.iv)(v()),"}"),messageWrapper:e=>/*#__PURE__*/(0,i/* .css */.iv)("display:flex;flex-direction:column;max-width:566px;width:100%;gap:",o/* .spacing["12"] */.W0["12"],";text-align:center;",e==="small"&&(0,i/* .css */.iv)(f(),o/* .spacing["8"] */.W0["8"])),title:e=>/*#__PURE__*/(0,i/* .css */.iv)(s/* .typography.heading5 */.c.heading5(),";color:",o/* .colorTokens.text.primary */.Jv.text.primary,";",e==="small"&&(0,i/* .css */.iv)(p(),s/* .typography.caption */.c.caption("medium"),o/* .colorTokens.text.primary */.Jv.text.primary)),description:e=>/*#__PURE__*/(0,i/* .css */.iv)(s/* .typography.body */.c.body(),";color:",o/* .colorTokens.text.hints */.Jv.text.hints,";",e==="small"&&(0,i/* .css */.iv)(h(),s/* .typography.tiny */.c.tiny(),o/* .colorTokens.text.hints */.Jv.text.hints)),actionWrapper:e=>/*#__PURE__*/(0,i/* .css */.iv)("margin-top:",o/* .spacing["20"] */.W0["20"],";display:flex;justify-content:center;align-items:center;gap:",o/* .spacing["12"] */.W0["12"],";",e==="small"&&(0,i/* .css */.iv)(m(),o/* .spacing["8"] */.W0["8"],o/* .spacing["8"] */.W0["8"]))}},63189:function(e,t,r){r.d(t,{Z:()=>h});/* ESM import */var n=r(58865);/* ESM import */var a=r(35944);/* ESM import */var i=r(60860);/* ESM import */var o=r(29535);/* ESM import */var s=r(70917);/* ESM import */var d=r(87363);/* ESM import */var l=/*#__PURE__*/r.n(d);function c(){var e=(0,n._)(["\n      flex-direction: column;\n      align-items: start;\n      box-shadow: none;\n    "]);c=function t(){return e};return e}function u(){var e=(0,n._)(["\n      width: 3px;\n      height: ","px;\n      top: ","px;\n      bottom: auto;\n      border-radius: 0 "," "," 0;\n    "]);u=function t(){return e};return e}function v(){var e=(0,n._)(["\n      width: 100%;\n      border-bottom: 1px solid ",";\n      justify-content: flex-start;\n\n      &:hover,\n      &:focus,\n      &:active {\n        border-bottom: 1px solid ",";\n      }\n    "]);v=function t(){return e};return e}function f(){var e=(0,n._)(["\n      &,\n      &:hover,\n      &:focus,\n      &:active {\n        background-color: ",";\n        color: ",";\n      }\n\n      & > span {\n        color: ",";\n      }\n\n      & > svg {\n        color: ",";\n      }\n    "]);f=function t(){return e};return e}var p=e=>{var{activeTab:t,onChange:r,tabList:n,orientation:i="horizontal",disabled:o=false,wrapperCss:s}=e;var l=(0,d.useRef)(n.map(()=>/*#__PURE__*/(0,d.createRef)()));var[c,u]=(0,d.useState)();(0,d.useEffect)(()=>{var e=n.reduce((e,t,r)=>{var n,a,i,o;var s=l.current[r];var d={width:((n=s.current)===null||n===void 0?void 0:n.offsetWidth)||0,height:((a=s.current)===null||a===void 0?void 0:a.offsetHeight)||0,left:((i=s.current)===null||i===void 0?void 0:i.offsetLeft)||0,top:((o=s.current)===null||o===void 0?void 0:o.offsetTop)||0};e[t.value]=d;return e},{});u(e)},[n]);return/*#__PURE__*/(0,a/* .jsxs */.BX)("div",{css:m.container,children:[/*#__PURE__*/(0,a/* .jsx */.tZ)("div",{css:[m.wrapper(i),s],role:"tablist",children:n.map((e,n)=>{return/*#__PURE__*/(0,a/* .jsxs */.BX)("button",{onClick:()=>{r(e.value)},css:m.tabButton({isActive:t===e.value,orientation:i}),disabled:o||e.disabled,type:"button",role:"tab","aria-selected":t===e.value?"true":"false",ref:l.current[n],children:[e.icon,e.label,e.count!==undefined&&/*#__PURE__*/(0,a/* .jsxs */.BX)("span",{children:[" (",e.count<10&&e.count>0?"0".concat(e.count):e.count,")"]}),e.activeBadge&&/*#__PURE__*/(0,a/* .jsx */.tZ)("span",{css:m.activeBadge})]},n)})}),/*#__PURE__*/(0,a/* .jsx */.tZ)("span",{css:m.indicator((c===null||c===void 0?void 0:c[t])||{width:0,height:0,left:0,top:0},i)})]})};/* ESM default export */const h=p;var m={container:/*#__PURE__*/(0,s/* .css */.iv)("position:relative;width:100%;"),wrapper:e=>/*#__PURE__*/(0,s/* .css */.iv)("width:100%;display:flex;justify-items:left;align-items:center;flex-wrap:wrap;box-shadow:",i/* .shadow.tabs */.AF.tabs,";",e==="vertical"&&(0,s/* .css */.iv)(c())),indicator:(e,t)=>/*#__PURE__*/(0,s/* .css */.iv)("width:",e.width,"px;height:3px;position:absolute;left:",e.left,"px;bottom:0;background:",i/* .colorTokens.brand.blue */.Jv.brand.blue,";border-radius:",i/* .borderRadius["4"] */.E0["4"]," ",i/* .borderRadius["4"] */.E0["4"]," 0 0;transition:all 0.3s cubic-bezier(0.4,0,0.2,1) 0ms;:dir(rtl){left:auto;right:",e.left,"px;}",t==="vertical"&&(0,s/* .css */.iv)(u(),e.height,e.top,i/* .borderRadius["4"] */.E0["4"],i/* .borderRadius["4"] */.E0["4"])),tabButton:e=>{var{isActive:t,orientation:r}=e;return/*#__PURE__*/(0,s/* .css */.iv)(o/* .styleUtils.resetButton */.i.resetButton,";font-size:",i/* .fontSize["15"] */.JB["15"],";line-height:",i/* .lineHeight["20"] */.Nv["20"],";display:flex;justify-content:center;align-items:center;gap:",i/* .spacing["6"] */.W0["6"],";padding:",i/* .spacing["12"] */.W0["12"]," ",i/* .spacing["20"] */.W0["20"],";color:",i/* .colorTokens.text.subdued */.Jv.text.subdued,";min-width:130px;position:relative;transition:color 0.3s ease-in-out;border-radius:0px;&:hover,&:focus,&:active{background-color:transparent;color:",i/* .colorTokens.text.subdued */.Jv.text.subdued,";box-shadow:none;}& > svg{color:",i/* .colorTokens.icon["default"] */.Jv.icon["default"],";}",r==="vertical"&&(0,s/* .css */.iv)(v(),i/* .colorTokens.stroke.border */.Jv.stroke.border,i/* .colorTokens.stroke.border */.Jv.stroke.border)," ",t&&(0,s/* .css */.iv)(f(),i/* .colorTokens.background.white */.Jv.background.white,i/* .colorTokens.text.primary */.Jv.text.primary,i/* .colorTokens.text.subdued */.Jv.text.subdued,i/* .colorTokens.icon.brand */.Jv.icon.brand),"    &:disabled{color:",i/* .colorTokens.text.disable */.Jv.text.disable,";&::before{background:",i/* .colorTokens.text.disable */.Jv.text.disable,";}}&:focus-visible{outline:2px solid ",i/* .colorTokens.stroke.brand */.Jv.stroke.brand,";outline-offset:-2px;border-radius:",i/* .borderRadius["4"] */.E0["4"],";}")},activeBadge:/*#__PURE__*/(0,s/* .css */.iv)("display:inline-block;height:8px;width:8px;border-radius:",i/* .borderRadius.circle */.E0.circle,";background-color:",i/* .colorTokens.color.success["80"] */.Jv.color.success["80"],";")}},19918:function(e,t,r){r.d(t,{Cp:()=>c,Fv:()=>v});/* ESM import */var n=r(7409);/* ESM import */var a=r(24333);/* ESM import */var i=r(49982);/* ESM import */var o=r(65228);/* ESM import */var s=r(82340);/* ESM import */var d=r(84225);var l=e=>{return s/* .wpAjaxInstance.get */.R.get(d/* ["default"].GET_COURSE_LIST */.Z.GET_COURSE_LIST,{params:e})};var c=e=>{var{params:t,isEnabled:r}=e;return(0,a/* .useQuery */.a)({queryKey:["PrerequisiteCourses",t],queryFn:()=>l((0,n._)({exclude:t.exclude,limit:t.limit,offset:t.offset,filter:t.filter},t.post_status&&{post_status:t.post_status})).then(e=>e.data),placeholderData:i/* .keepPreviousData */.Wk,enabled:r})};var u=e=>{var{courseId:t,builder:r}=e;return s/* .wpAjaxInstance.post */.R.post(d/* ["default"].TUTOR_UNLINK_PAGE_BUILDER */.Z.TUTOR_UNLINK_PAGE_BUILDER,{course_id:t,builder:r})};var v=()=>{return(0,o/* .useMutation */.D)({mutationFn:u})};var f=e=>{return wpAjaxInstance.get(endpoints.BUNDLE_LIST,{params:e})};var p=e=>{var{params:t,isEnabled:r}=e;return useQuery({queryKey:["PrerequisiteCourses",t],queryFn:()=>f(_object_spread({exclude:t.exclude,limit:t.limit,offset:t.offset,filter:t.filter},t.post_status&&{post_status:t.post_status})).then(e=>e.data),placeholderData:keepPreviousData,enabled:r})}},75361:function(e,t,r){r.d(t,{Lp:()=>o,MC:()=>n,jo:()=>a,n$:()=>l,o_:()=>d});function n(e,t){e.lineTo(t.x,t.y);e.stroke()}function a(e,t){var r=t.x-e.x;var n=t.y-e.y;return Math.sqrt(r*r+n*n)}function i(e){var t=atob(e.split(",")[1]);var r=e.split(",")[0].split(":")[1].split(";")[0];var n=new ArrayBuffer(t.length);var a=new Uint8Array(n);for(var i=0;i<t.length;i++){a[i]=t.charCodeAt(i)}return new Blob([n],{type:r})}function o(e,t){var r=i(e);var n=document.createElement("a");n.href=URL.createObjectURL(r);n.download=t;document.body.appendChild(n);n.click();document.body.removeChild(n)}function s(e,t){var r=document.createElement("canvas");r.width=1024;r.height=1024;var n=r.getContext("2d");n===null||n===void 0?void 0:n.putImageData(e,0,0);n===null||n===void 0?void 0:n.drawImage(r,0,0,1024,1024);return new Promise(e=>{r.toBlob(r=>{if(!r){e(null);return}e(new File([r],t,{type:"image/png"}))})})}var d=e=>{if(e&&typeof e!=="function"&&e.current){var t=e.current;var r=t.getContext("2d");return{canvas:t,context:r}}return{canvas:null,context:null}};var l=e=>{return e.toDataURL("image/png")}},53754:function(){/**
 * The symbol to access the `TZDate`'s function to construct a new instance from
 * the provided value. It helps date-fns to inherit the time zone.
 */const e=Symbol.for("constructDateFrom")},26402:function(e,t,r){r.d(t,{N:()=>i});/* ESM import */var n=r(1493);/* ESM import */var a=r(91336);class i extends a/* .TZDateMini */.Z{//#region static
static tz(e,...t){return t.length?new i(...t,e):new i(Date.now(),e)}//#endregion
//#region representation
toISOString(){const[e,t,r]=this.tzComponents();const n=`${e}${t}:${r}`;return this.internal.toISOString().slice(0,-1)+n}toString(){// "Tue Aug 13 2024 07:50:19 GMT+0800 (Singapore Standard Time)";
return`${this.toDateString()} ${this.toTimeString()}`}toDateString(){// toUTCString returns RFC 7231 ("Mon, 12 Aug 2024 23:36:08 GMT")
const[e,t,r,n]=this.internal.toUTCString().split(" ");// "Tue Aug 13 2024"
return`${e?.slice(0,-1)} ${r} ${t} ${n}`}toTimeString(){// toUTCString returns RFC 7231 ("Mon, 12 Aug 2024 23:36:08 GMT")
const e=this.internal.toUTCString().split(" ")[4];const[t,r,a]=this.tzComponents();// "07:42:23 GMT+0800 (Singapore Standard Time)"
return`${e} GMT${t}${r}${a} (${(0,n/* .tzName */.P)(this.timeZone,this)})`}toLocaleString(e,t){return Date.prototype.toLocaleString.call(this,e,{...t,timeZone:t?.timeZone||this.timeZone})}toLocaleDateString(e,t){return Date.prototype.toLocaleDateString.call(this,e,{...t,timeZone:t?.timeZone||this.timeZone})}toLocaleTimeString(e,t){return Date.prototype.toLocaleTimeString.call(this,e,{...t,timeZone:t?.timeZone||this.timeZone})}//#endregion
//#region private
tzComponents(){const e=this.getTimezoneOffset();const t=e>0?"-":"+";const r=String(Math.floor(Math.abs(e)/60)).padStart(2,"0");const n=String(Math.abs(e)%60).padStart(2,"0");return[t,r,n]}//#endregion
withTimeZone(e){return new i(+this,e)}//#region date-fns integration
[Symbol.for("constructDateFrom")](e){return new i(+new Date(e),this.timeZone)}}},91336:function(e,t,r){r.d(t,{Z:()=>a});/* ESM import */var n=r(4973);class a extends Date{//#region static
constructor(...e){super();if(e.length>1&&typeof e[e.length-1]==="string"){this.timeZone=e.pop()}this.internal=new Date;if(isNaN((0,n/* .tzOffset */.I)(this.timeZone,this))){this.setTime(NaN)}else{if(!e.length){this.setTime(Date.now())}else if(typeof e[0]==="number"&&(e.length===1||e.length===2&&typeof e[1]!=="number")){this.setTime(e[0])}else if(typeof e[0]==="string"){this.setTime(+new Date(e[0]))}else if(e[0]instanceof Date){this.setTime(+e[0])}else{this.setTime(+new Date(...e));d(this,NaN);o(this)}}}static tz(e,...t){return t.length?new a(...t,e):new a(Date.now(),e)}//#endregion
//#region time zone
withTimeZone(e){return new a(+this,e)}getTimezoneOffset(){const e=-(0,n/* .tzOffset */.I)(this.timeZone,this);// Remove the seconds offset
// use Math.floor for negative GMT timezones and Math.ceil for positive GMT timezones.
return e>0?Math.floor(e):Math.ceil(e)}//#endregion
//#region time
setTime(e){Date.prototype.setTime.apply(this,arguments);o(this);return+this}//#endregion
//#region date-fns integration
[Symbol.for("constructDateFrom")](e){return new a(+new Date(e),this.timeZone)}}// Assign getters and setters
const i=/^(get|set)(?!UTC)/;Object.getOwnPropertyNames(Date.prototype).forEach(e=>{if(!i.test(e))return;const t=e.replace(i,"$1UTC");// Filter out methods without UTC counterparts
if(!a.prototype[t])return;if(e.startsWith("get")){// Delegate to internal date's UTC method
a.prototype[e]=function(){return this.internal[t]()}}else{// Assign regular setter
a.prototype[e]=function(){Date.prototype[t].apply(this.internal,arguments);s(this);return+this};// Assign UTC setter
a.prototype[t]=function(){Date.prototype[t].apply(this,arguments);o(this);return+this}}});/**
 * Function syncs time to internal date, applying the time zone offset.
 *
 * @param {Date} date - Date to sync
 */function o(e){e.internal.setTime(+e);e.internal.setUTCSeconds(e.internal.getUTCSeconds()-Math.round(-(0,n/* .tzOffset */.I)(e.timeZone,e)*60))}/**
 * Function syncs the internal date UTC values to the date. It allows to get
 * accurate timestamp value.
 *
 * @param {Date} date - The date to sync
 */function s(e){// First we transpose the internal values
Date.prototype.setFullYear.call(e,e.internal.getUTCFullYear(),e.internal.getUTCMonth(),e.internal.getUTCDate());Date.prototype.setHours.call(e,e.internal.getUTCHours(),e.internal.getUTCMinutes(),e.internal.getUTCSeconds(),e.internal.getUTCMilliseconds());// Now we have to adjust the date to the system time zone
d(e)}/**
 * Function adjusts the date to the system time zone. It uses the time zone
 * differences to calculate the offset and adjust the date.
 *
 * @param {Date} date - Date to adjust
 */function d(e){// Save the time zone offset before all the adjustments
const t=(0,n/* .tzOffset */.I)(e.timeZone,e);// Remove the seconds offset
// use Math.floor for negative GMT timezones and Math.ceil for positive GMT timezones.
const r=t>0?Math.floor(t):Math.ceil(t);//#region System DST adjustment
// The biggest problem with using the system time zone is that when we create
// a date from internal values stored in UTC, the system time zone might end
// up on the DST hour:
//
//   $ TZ=America/New_York node
//   > new Date(2020, 2, 8, 1).toString()
//   'Sun Mar 08 2020 01:00:00 GMT-0500 (Eastern Standard Time)'
//   > new Date(2020, 2, 8, 2).toString()
//   'Sun Mar 08 2020 03:00:00 GMT-0400 (Eastern Daylight Time)'
//   > new Date(2020, 2, 8, 3).toString()
//   'Sun Mar 08 2020 03:00:00 GMT-0400 (Eastern Daylight Time)'
//   > new Date(2020, 2, 8, 4).toString()
//   'Sun Mar 08 2020 04:00:00 GMT-0400 (Eastern Daylight Time)'
//
// Here we get the same hour for both 2 and 3, because the system time zone
// has DST beginning at 8 March 2020, 2 a.m. and jumps to 3 a.m. So we have
// to adjust the internal date to reflect that.
//
// However we want to adjust only if that's the DST hour the change happenes,
// not the hour where DST moves to.
// We calculate the previous hour to see if the time zone offset has changed
// and we have landed on the DST hour.
const a=new Date(+e);// We use UTC methods here as we don't want to land on the same hour again
// in case of DST.
a.setUTCHours(a.getUTCHours()-1);// Calculate if we are on the system DST hour.
const i=-new Date(+e).getTimezoneOffset();const o=-new Date(+a).getTimezoneOffset();const s=i-o;// Detect the DST shift. System DST change will occur both on
const d=Date.prototype.getHours.apply(e)!==e.internal.getUTCHours();// Move the internal date when we are on the system DST hour.
if(s&&d)e.internal.setUTCMinutes(e.internal.getUTCMinutes()+s);//#endregion
//#region System diff adjustment
// Now we need to adjust the date, since we just applied internal values.
// We need to calculate the difference between the system and date time zones
// and apply it to the date.
const l=i-r;if(l)Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+l);//#endregion
//#region Seconds System diff adjustment
const c=new Date(+e);// Set the UTC seconds to 0 to isolate the timezone offset in seconds.
c.setUTCSeconds(0);// For negative systemOffset, invert the seconds.
const u=i>0?c.getSeconds():(c.getSeconds()-60)%60;// Calculate the seconds offset based on the timezone offset.
const v=Math.round(-((0,n/* .tzOffset */.I)(e.timeZone,e)*60))%60;if(v||u){e.internal.setUTCSeconds(e.internal.getUTCSeconds()+v);Date.prototype.setUTCSeconds.call(e,Date.prototype.getUTCSeconds.call(e)+v+u)}//#endregion
//#region Post-adjustment DST fix
const f=(0,n/* .tzOffset */.I)(e.timeZone,e);// Remove the seconds offset
// use Math.floor for negative GMT timezones and Math.ceil for positive GMT timezones.
const p=f>0?Math.floor(f):Math.ceil(f);const h=-new Date(+e).getTimezoneOffset();const m=h-p;const g=p!==r;const b=m-l;if(g&&b){Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+b);// Now we need to check if got offset change during the post-adjustment.
// If so, we also need both dates to reflect that.
const t=(0,n/* .tzOffset */.I)(e.timeZone,e);// Remove the seconds offset
// use Math.floor for negative GMT timezones and Math.ceil for positive GMT timezones.
const r=t>0?Math.floor(t):Math.ceil(t);const a=p-r;if(a){e.internal.setUTCMinutes(e.internal.getUTCMinutes()+a);Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+a)}}//#endregion
}},58184:function(e,t,r){r.d(t,{N9:()=>/* reexport safe */a.N});/* ESM import */var n=r(53754);/* ESM import */var a=r(26402);/* ESM import */var i=r(91336);/* ESM import */var o=r(20981)},20981:function(e,t,r){/* ESM import */var n=r(26402);/**
 * The function creates accepts a time zone and returns a function that creates
 * a new `TZDate` instance in the time zone from the provided value. Use it to
 * provide the context for the date-fns functions, via the `in` option.
 *
 * @param timeZone - Time zone name (IANA or UTC offset)
 *
 * @returns Function that creates a new `TZDate` instance in the time zone
 */const a=e=>t=>TZDate.tz(e,+new Date(t))},1493:function(e,t,r){r.d(t,{P:()=>n});/**
 * Time zone name format.
 *//**
 * The function returns the time zone name for the given date in the specified
 * time zone.
 *
 * It uses the `Intl.DateTimeFormat` API and by default outputs the time zone
 * name in a long format, e.g. "Pacific Standard Time" or
 * "Singapore Standard Time".
 *
 * It is possible to specify the format as the third argument using one of the following options
 *
 * - "short": e.g. "EDT" or "GMT+8".
 * - "long": e.g. "Eastern Daylight Time".
 * - "shortGeneric": e.g. "ET" or "Singapore Time".
 * - "longGeneric": e.g. "Eastern Time" or "Singapore Standard Time".
 *
 * These options correspond to TR35 tokens `z..zzz`, `zzzz`, `v`, and `vvvv` respectively: https://www.unicode.org/reports/tr35/tr35-dates.html#dfst-zone
 *
 * @param timeZone - Time zone name (IANA or UTC offset)
 * @param date - Date object to get the time zone name for
 * @param format - Optional format of the time zone name. Defaults to "long". Can be "short", "long", "shortGeneric", or "longGeneric".
 *
 * @returns Time zone name (e.g. "Singapore Standard Time")
 */function n(e,t,r="long"){return new Intl.DateTimeFormat("en-US",{// Enforces engine to render the time. Without the option JavaScriptCore omits it.
hour:"numeric",timeZone:e,timeZoneName:r}).format(t).split(/\s/g)// Format.JS uses non-breaking spaces
.slice(2)// Skip the hour and AM/PM parts
.join(" ")}},4973:function(e,t,r){r.d(t,{I:()=>i});const n={};const a={};/**
 * The function extracts UTC offset in minutes from the given date in specified
 * time zone.
 *
 * Unlike `Date.prototype.getTimezoneOffset`, this function returns the value
 * mirrored to the sign of the offset in the time zone. For Asia/Singapore
 * (UTC+8), `tzOffset` returns 480, while `getTimezoneOffset` returns -480.
 *
 * @param timeZone - Time zone name (IANA or UTC offset)
 * @param date - Date to check the offset for
 *
 * @returns UTC offset in minutes
 */function i(e,t){try{const r=n[e]||=new Intl.DateTimeFormat("en-US",{timeZone:e,timeZoneName:"longOffset"}).format;const i=r(t).split("GMT")[1];if(i in a)return a[i];return s(i,i.split(":"))}catch{// Fallback to manual parsing if the runtime doesn't support ±HH:MM/±HHMM/±HH
// See: https://github.com/nodejs/node/issues/53419
if(e in a)return a[e];const t=e?.match(o);if(t)return s(e,t.slice(1));return NaN}}const o=/([+-]\d\d):?(\d\d)?/;function s(e,t){const r=+(t[0]||0);const n=+(t[1]||0);// Convert seconds to minutes by dividing by 60 to keep the function return in minutes.
const i=+(t[2]||0)/60;return a[e]=r*60+n>0?r*60+n+i:r*60-n-i}},33233:function(e,t,r){r.d(t,{y:()=>o});/* ESM import */var n=r(87363);/* ESM import */var a=r(93242);/* ESM import */var i=r(99469);"use client";// src/useIsFetching.ts
function o(e,t){const r=(0,i/* .useQueryClient */.NL)(t);const o=r.getQueryCache();return n.useSyncExternalStore(n.useCallback(e=>o.subscribe(a/* .notifyManager.batchCalls */.Vr.batchCalls(e)),[o]),()=>r.isFetching(e),()=>r.isFetching(e))}//# sourceMappingURL=useIsFetching.js.map
},57684:function(e,t,r){r.d(t,{_:()=>C});/* ESM import */var n=r(87363);/* ESM import */var a=r(58184);/* ESM import */var i=r(6156);/* ESM import */var o=r(79237);/* ESM import */var s=r(65469);/* ESM import */var d=r(48834);/* ESM import */var l=r(52395);/* ESM import */var c=r(18296);/* ESM import */var u=r(54054);/* ESM import */var v=r(45734);/* ESM import */var f=r(54908);/* ESM import */var p=r(71264);/* ESM import */var h=r(64347);/* ESM import */var m=r(77614);/* ESM import */var g=r(62464);/* ESM import */var b=r(58100);/* ESM import */var _=r(84332);/* ESM import */var y=r(30833);/* ESM import */var w=r(5293);/* ESM import */var x=r(35625);/* ESM import */var Z=r(70162);/* ESM import */var k=r(94232);/* ESM import */var E=r(20311);/**
 * Renders the DayPicker calendar component.
 *
 * @param initialProps - The props for the DayPicker component.
 * @returns The rendered DayPicker component.
 * @group DayPicker
 * @see https://daypicker.dev
 */function C(e){let t=e;if(t.timeZone){t={...e};if(t.today){t.today=new a/* .TZDate */.N9(t.today,t.timeZone)}if(t.month){t.month=new a/* .TZDate */.N9(t.month,t.timeZone)}if(t.defaultMonth){t.defaultMonth=new a/* .TZDate */.N9(t.defaultMonth,t.timeZone)}if(t.startMonth){t.startMonth=new a/* .TZDate */.N9(t.startMonth,t.timeZone)}if(t.endMonth){t.endMonth=new a/* .TZDate */.N9(t.endMonth,t.timeZone)}if(t.mode==="single"&&t.selected){t.selected=new a/* .TZDate */.N9(t.selected,t.timeZone)}else if(t.mode==="multiple"&&t.selected){t.selected=t.selected?.map(e=>new a/* .TZDate */.N9(e,t.timeZone))}else if(t.mode==="range"&&t.selected){t.selected={from:t.selected.from?new a/* .TZDate */.N9(t.selected.from,t.timeZone):undefined,to:t.selected.to?new a/* .TZDate */.N9(t.selected.to,t.timeZone):undefined}}}const{components:r,formatters:C,labels:M,dateLib:W,locale:D,classNames:T}=(0,n.useMemo)(()=>{const e={...o/* .enUS */._,...t.locale};const r=new s/* .DateLib */.Z1({locale:e,weekStartsOn:t.broadcastCalendar?1:t.weekStartsOn,firstWeekContainsDate:t.firstWeekContainsDate,useAdditionalWeekYearTokens:t.useAdditionalWeekYearTokens,useAdditionalDayOfYearTokens:t.useAdditionalDayOfYearTokens,timeZone:t.timeZone,numerals:t.numerals},t.dateLib);return{dateLib:r,components:(0,c/* .getComponents */.O)(t.components),formatters:(0,f/* .getFormatters */._)(t.formatters),labels:{...b,...t.labels},locale:e,classNames:{...(0,v/* .getDefaultClassNames */.U)(),...t.classNames}}},[t.locale,t.broadcastCalendar,t.weekStartsOn,t.firstWeekContainsDate,t.useAdditionalWeekYearTokens,t.useAdditionalDayOfYearTokens,t.timeZone,t.numerals,t.dateLib,t.components,t.formatters,t.labels,t.classNames]);const{captionLayout:S,mode:B,navLayout:N,numberOfMonths:I=1,onDayBlur:O,onDayClick:A,onDayFocus:L,onDayKeyDown:z,onDayMouseEnter:U,onDayMouseLeave:R,onNextClick:J,onPrevClick:j,showWeekNumber:P,styles:X}=t;const{formatCaption:F,formatDay:Q,formatMonthDropdown:Y,formatWeekNumber:q,formatWeekNumberHeader:H,formatWeekdayName:G,formatYearDropdown:K}=C;const V=(0,y/* .useCalendar */.G)(t,W);const{days:$,months:ee,navStart:et,navEnd:er,previousMonth:en,nextMonth:ea,goToMonth:ei}=V;const eo=(0,d/* .createGetModifiers */.H)($,t,et,er,W);const{isSelected:es,select:ed,selected:el}=(0,Z/* .useSelection */.c)(t,W)??{};const{blur:ec,focused:eu,isFocusTarget:ev,moveFocus:ef,setFocused:ep}=(0,x/* .useFocus */.K)(t,V,eo,es??(()=>false),W);const{labelDayButton:eh,labelGridcell:em,labelGrid:eg,labelMonthDropdown:eb,labelNav:e_,labelPrevious:ey,labelNext:ew,labelWeekday:ex,labelWeekNumber:eZ,labelWeekNumberHeader:ek,labelYearDropdown:eE}=M;const eC=(0,n.useMemo)(()=>(0,m/* .getWeekdays */.D)(W,t.ISOWeek),[W,t.ISOWeek]);const eM=B!==undefined||A!==undefined;const eW=(0,n.useCallback)(()=>{if(!en)return;ei(en);j?.(en)},[en,ei,j]);const eD=(0,n.useCallback)(()=>{if(!ea)return;ei(ea);J?.(ea)},[ei,ea,J]);const eT=(0,n.useCallback)((e,t)=>r=>{r.preventDefault();r.stopPropagation();ep(e);ed?.(e.date,t,r);A?.(e.date,t,r)},[ed,A,ep]);const eS=(0,n.useCallback)((e,t)=>r=>{ep(e);L?.(e.date,t,r)},[L,ep]);const eB=(0,n.useCallback)((e,t)=>r=>{ec();O?.(e.date,t,r)},[ec,O]);const eN=(0,n.useCallback)((e,r)=>n=>{const a={ArrowLeft:[n.shiftKey?"month":"day",t.dir==="rtl"?"after":"before"],ArrowRight:[n.shiftKey?"month":"day",t.dir==="rtl"?"before":"after"],ArrowDown:[n.shiftKey?"year":"week","after"],ArrowUp:[n.shiftKey?"year":"week","before"],PageUp:[n.shiftKey?"year":"month","before"],PageDown:[n.shiftKey?"year":"month","after"],Home:["startOfWeek","before"],End:["endOfWeek","after"]};if(a[n.key]){n.preventDefault();n.stopPropagation();const[e,t]=a[n.key];ef(e,t)}z?.(e.date,r,n)},[ef,z,t.dir]);const eI=(0,n.useCallback)((e,t)=>r=>{U?.(e.date,t,r)},[U]);const eO=(0,n.useCallback)((e,t)=>r=>{R?.(e.date,t,r)},[R]);const eA=(0,n.useCallback)(e=>t=>{const r=Number(t.target.value);const n=W.setMonth(W.startOfMonth(e),r);ei(n)},[W,ei]);const eL=(0,n.useCallback)(e=>t=>{const r=Number(t.target.value);const n=W.setYear(W.startOfMonth(e),r);ei(n)},[W,ei]);const{className:ez,style:eU}=(0,n.useMemo)(()=>({className:[T[i.UI.Root],t.className].filter(Boolean).join(" "),style:{...X?.[i.UI.Root],...t.style}}),[T,t.className,t.style,X]);const eR=(0,u/* .getDataAttributes */.P)(t);const eJ=(0,n.useRef)(null);(0,_/* .useAnimation */._)(eJ,Boolean(t.animate),{classNames:T,months:ee,focused:eu,dateLib:W});const ej={dayPickerProps:t,selected:el,select:ed,isSelected:es,months:ee,nextMonth:ea,previousMonth:en,goToMonth:ei,getModifiers:eo,components:r,classNames:T,styles:X,labels:M,formatters:C};return n.createElement(w/* .dayPickerContext.Provider */.Z.Provider,{value:ej},n.createElement(r.Root,{rootRef:t.animate?eJ:undefined,className:ez,style:eU,dir:t.dir,id:t.id,lang:t.lang,nonce:t.nonce,title:t.title,role:t.role,"aria-label":t["aria-label"],...eR},n.createElement(r.Months,{className:T[i.UI.Months],style:X?.[i.UI.Months]},!t.hideNavigation&&!N&&n.createElement(r.Nav,{"data-animated-nav":t.animate?"true":undefined,className:T[i.UI.Nav],style:X?.[i.UI.Nav],"aria-label":e_(),onPreviousClick:eW,onNextClick:eD,previousMonth:en,nextMonth:ea}),ee.map((e,a)=>{const o=(0,p/* .getMonthOptions */.d)(e.date,et,er,C,W);const s=(0,g/* .getYearOptions */.h)(et,er,C,W);return n.createElement(r.Month,{"data-animated-month":t.animate?"true":undefined,className:T[i.UI.Month],style:X?.[i.UI.Month],key:a,displayIndex:a,calendarMonth:e},N==="around"&&!t.hideNavigation&&a===0&&n.createElement(r.PreviousMonthButton,{type:"button",className:T[i.UI.PreviousMonthButton],tabIndex:en?undefined:-1,"aria-disabled":en?undefined:true,"aria-label":ey(en),onClick:eW,"data-animated-button":t.animate?"true":undefined},n.createElement(r.Chevron,{disabled:en?undefined:true,className:T[i.UI.Chevron],orientation:t.dir==="rtl"?"right":"left"})),n.createElement(r.MonthCaption,{"data-animated-caption":t.animate?"true":undefined,className:T[i.UI.MonthCaption],style:X?.[i.UI.MonthCaption],calendarMonth:e,displayIndex:a},S?.startsWith("dropdown")?n.createElement(r.DropdownNav,{className:T[i.UI.Dropdowns],style:X?.[i.UI.Dropdowns]},S==="dropdown"||S==="dropdown-months"?n.createElement(r.MonthsDropdown,{className:T[i.UI.MonthsDropdown],"aria-label":eb(),classNames:T,components:r,disabled:Boolean(t.disableNavigation),onChange:eA(e.date),options:o,style:X?.[i.UI.Dropdown],value:W.getMonth(e.date)}):n.createElement("span",null,Y(e.date,W)),S==="dropdown"||S==="dropdown-years"?n.createElement(r.YearsDropdown,{className:T[i.UI.YearsDropdown],"aria-label":eE(W.options),classNames:T,components:r,disabled:Boolean(t.disableNavigation),onChange:eL(e.date),options:s,style:X?.[i.UI.Dropdown],value:W.getYear(e.date)}):n.createElement("span",null,K(e.date,W)),n.createElement("span",{role:"status","aria-live":"polite",style:{border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"}},F(e.date,W.options,W))):n.createElement(r.CaptionLabel,{className:T[i.UI.CaptionLabel],role:"status","aria-live":"polite"},F(e.date,W.options,W))),N==="around"&&!t.hideNavigation&&a===I-1&&n.createElement(r.NextMonthButton,{type:"button",className:T[i.UI.NextMonthButton],tabIndex:ea?undefined:-1,"aria-disabled":ea?undefined:true,"aria-label":ew(ea),onClick:eD,"data-animated-button":t.animate?"true":undefined},n.createElement(r.Chevron,{disabled:ea?undefined:true,className:T[i.UI.Chevron],orientation:t.dir==="rtl"?"left":"right"})),a===I-1&&N==="after"&&!t.hideNavigation&&n.createElement(r.Nav,{"data-animated-nav":t.animate?"true":undefined,className:T[i.UI.Nav],style:X?.[i.UI.Nav],"aria-label":e_(),onPreviousClick:eW,onNextClick:eD,previousMonth:en,nextMonth:ea}),n.createElement(r.MonthGrid,{role:"grid","aria-multiselectable":B==="multiple"||B==="range","aria-label":eg(e.date,W.options,W)||undefined,className:T[i.UI.MonthGrid],style:X?.[i.UI.MonthGrid]},!t.hideWeekdays&&n.createElement(r.Weekdays,{"data-animated-weekdays":t.animate?"true":undefined,className:T[i.UI.Weekdays],style:X?.[i.UI.Weekdays]},P&&n.createElement(r.WeekNumberHeader,{"aria-label":ek(W.options),className:T[i.UI.WeekNumberHeader],style:X?.[i.UI.WeekNumberHeader],scope:"col"},H()),eC.map((e,t)=>n.createElement(r.Weekday,{"aria-label":ex(e,W.options,W),className:T[i.UI.Weekday],key:t,style:X?.[i.UI.Weekday],scope:"col"},G(e,W.options,W)))),n.createElement(r.Weeks,{"data-animated-weeks":t.animate?"true":undefined,className:T[i.UI.Weeks],style:X?.[i.UI.Weeks]},e.weeks.map((e,a)=>{return n.createElement(r.Week,{className:T[i.UI.Week],key:e.weekNumber,style:X?.[i.UI.Week],week:e},P&&n.createElement(r.WeekNumber,{week:e,style:X?.[i.UI.WeekNumber],"aria-label":eZ(e.weekNumber,{locale:D}),className:T[i.UI.WeekNumber],scope:"row",role:"rowheader"},q(e.weekNumber,W)),e.days.map(e=>{const{date:a}=e;const o=eo(e);o[i/* .DayFlag.focused */.BE.focused]=!o.hidden&&Boolean(eu?.isEqualTo(e));o[i/* .SelectionState.selected */.fP.selected]=es?.(a)||o.selected;if((0,E/* .isDateRange */.Ws)(el)){// add range modifiers
const{from:e,to:t}=el;o[i/* .SelectionState.range_start */.fP.range_start]=Boolean(e&&t&&W.isSameDay(a,e));o[i/* .SelectionState.range_end */.fP.range_end]=Boolean(e&&t&&W.isSameDay(a,t));o[i/* .SelectionState.range_middle */.fP.range_middle]=(0,k/* .rangeIncludesDate */.C)(el,a,true,W)}const s=(0,h/* .getStyleForModifiers */.D)(o,X,t.modifiersStyles);const d=(0,l/* .getClassNamesForModifiers */.k)(o,T,t.modifiersClassNames);const c=!eM&&!o.hidden?em(a,o,W.options,W):undefined;return n.createElement(r.Day,{key:`${W.format(a,"yyyy-MM-dd")}_${W.format(e.displayMonth,"yyyy-MM")}`,day:e,modifiers:o,className:d.join(" "),style:s,role:"gridcell","aria-selected":o.selected||undefined,"aria-label":c,"data-day":W.format(a,"yyyy-MM-dd"),"data-month":e.outside?W.format(a,"yyyy-MM"):undefined,"data-selected":o.selected||undefined,"data-disabled":o.disabled||undefined,"data-hidden":o.hidden||undefined,"data-outside":e.outside||undefined,"data-focused":o.focused||undefined,"data-today":o.today||undefined},!o.hidden&&eM?n.createElement(r.DayButton,{className:T[i.UI.DayButton],style:X?.[i.UI.DayButton],type:"button",day:e,modifiers:o,disabled:o.disabled||undefined,tabIndex:ev(e)?0:-1,"aria-label":eh(a,o,W.options,W),onClick:eT(e,o),onBlur:eB(e,o),onFocus:eS(e,o),onKeyDown:eN(e,o),onMouseEnter:eI(e,o),onMouseLeave:eO(e,o)},Q(a,W.options,W)):!o.hidden&&Q(e.date,W.options,W))}))}))))})),t.footer&&n.createElement(r.Footer,{className:T[i.UI.Footer],style:X?.[i.UI.Footer],role:"status","aria-live":"polite"},t.footer)))}//# sourceMappingURL=DayPicker.js.map
},6156:function(e,t,r){r.d(t,{BE:()=>a,UI:()=>n,fP:()=>i,fw:()=>o});/**
 * Enum representing the UI elements composing DayPicker. These elements are
 * mapped to {@link CustomComponents}, {@link ClassNames}, and {@link Styles}.
 *
 * Some elements are extended by flags and modifiers.
 */var n;(function(e){/** The root component displaying the months and the navigation bar. */e["Root"]="root";/** The Chevron SVG element used by navigation buttons and dropdowns. */e["Chevron"]="chevron";/**
     * The grid cell with the day's date. Extended by {@link DayFlag} and
     * {@link SelectionState}.
     */e["Day"]="day";/** The button containing the formatted day's date, inside the grid cell. */e["DayButton"]="day_button";/** The caption label of the month (when not showing the dropdown navigation). */e["CaptionLabel"]="caption_label";/** The container of the dropdown navigation (when enabled). */e["Dropdowns"]="dropdowns";/** The dropdown element to select for years and months. */e["Dropdown"]="dropdown";/** The container element of the dropdown. */e["DropdownRoot"]="dropdown_root";/** The root element of the footer. */e["Footer"]="footer";/** The month grid. */e["MonthGrid"]="month_grid";/** Contains the dropdown navigation or the caption label. */e["MonthCaption"]="month_caption";/** The dropdown with the months. */e["MonthsDropdown"]="months_dropdown";/** Wrapper of the month grid. */e["Month"]="month";/** The container of the displayed months. */e["Months"]="months";/** The navigation bar with the previous and next buttons. */e["Nav"]="nav";/**
     * The next month button in the navigation. *
     *
     * @since 9.1.0
     */e["NextMonthButton"]="button_next";/**
     * The previous month button in the navigation.
     *
     * @since 9.1.0
     */e["PreviousMonthButton"]="button_previous";/** The row containing the week. */e["Week"]="week";/** The group of row weeks in a month (`tbody`). */e["Weeks"]="weeks";/** The column header with the weekday. */e["Weekday"]="weekday";/** The row grouping the weekdays in the column headers. */e["Weekdays"]="weekdays";/** The cell containing the week number. */e["WeekNumber"]="week_number";/** The cell header of the week numbers column. */e["WeekNumberHeader"]="week_number_header";/** The dropdown with the years. */e["YearsDropdown"]="years_dropdown"})(n||(n={}));/** Enum representing flags for the {@link UI.Day} element. */var a;(function(e){/** The day is disabled. */e["disabled"]="disabled";/** The day is hidden. */e["hidden"]="hidden";/** The day is outside the current month. */e["outside"]="outside";/** The day is focused. */e["focused"]="focused";/** The day is today. */e["today"]="today"})(a||(a={}));/**
 * Enum representing selection states that can be applied to the {@link UI.Day}
 * element in selection mode.
 */var i;(function(e){/** The day is at the end of a selected range. */e["range_end"]="range_end";/** The day is at the middle of a selected range. */e["range_middle"]="range_middle";/** The day is at the start of a selected range. */e["range_start"]="range_start";/** The day is selected. */e["selected"]="selected"})(i||(i={}));/**
 * Enum representing different animation states for transitioning between
 * months.
 */var o;(function(e){/** The entering weeks when they appear before the exiting month. */e["weeks_before_enter"]="weeks_before_enter";/** The exiting weeks when they disappear before the entering month. */e["weeks_before_exit"]="weeks_before_exit";/** The entering weeks when they appear after the exiting month. */e["weeks_after_enter"]="weeks_after_enter";/** The exiting weeks when they disappear after the entering month. */e["weeks_after_exit"]="weeks_after_exit";/** The entering caption when it appears after the exiting month. */e["caption_after_enter"]="caption_after_enter";/** The exiting caption when it disappears after the entering month. */e["caption_after_exit"]="caption_after_exit";/** The entering caption when it appears before the exiting month. */e["caption_before_enter"]="caption_before_enter";/** The exiting caption when it disappears before the entering month. */e["caption_before_exit"]="caption_before_exit"})(o||(o={}));//# sourceMappingURL=UI.js.map
},77827:function(e,t,r){r.d(t,{X:()=>a});/* ESM import */var n=r(65469);/**
 * Represents a day displayed in the calendar.
 *
 * In DayPicker, a `CalendarDay` is a wrapper around a `Date` object that
 * provides additional information about the day, such as whether it belongs to
 * the displayed month.
 */class a{constructor(e,t,r=n/* .defaultDateLib */.zk){this.date=e;this.displayMonth=t;this.outside=Boolean(t&&!r.isSameMonth(e,t));this.dateLib=r}/**
     * Checks if this day is equal to another `CalendarDay`, considering both the
     * date and the displayed month.
     *
     * @param day The `CalendarDay` to compare with.
     * @returns `true` if the days are equal, otherwise `false`.
     */isEqualTo(e){return this.dateLib.isSameDay(e.date,this.date)&&this.dateLib.isSameMonth(e.displayMonth,this.displayMonth)}}//# sourceMappingURL=CalendarDay.js.map
},50644:function(e,t,r){r.d(t,{C:()=>n});/**
 * Represents a month in a calendar year.
 *
 * A `CalendarMonth` contains the weeks within the month and the date of the
 * month.
 */class n{constructor(e,t){this.date=e;this.weeks=t}}//# sourceMappingURL=CalendarMonth.js.map
},26046:function(e,t,r){r.d(t,{u:()=>n});/**
 * Represents a week in a calendar month.
 *
 * A `CalendarWeek` contains the days within the week and the week number.
 */class n{constructor(e,t){this.days=t;this.weekNumber=e}}//# sourceMappingURL=CalendarWeek.js.map
},65469:function(e,t,r){r.d(t,{Z1:()=>z,zk:()=>U});/* ESM import */var n=r(58184);/* ESM import */var a=r(55722);/* ESM import */var i=r(636);/* ESM import */var o=r(46263);/* ESM import */var s=r(90423);/* ESM import */var d=r(23279);/* ESM import */var l=r(36430);/* ESM import */var c=r(83475);/* ESM import */var u=r(13470);/* ESM import */var v=r(28353);/* ESM import */var f=r(41041);/* ESM import */var p=r(45827);/* ESM import */var h=r(17989);/* ESM import */var m=r(65719);/* ESM import */var g=r(11854);/* ESM import */var b=r(22431);/* ESM import */var _=r(12347);/* ESM import */var y=r(18474);/* ESM import */var w=r(32880);/* ESM import */var x=r(46695);/* ESM import */var Z=r(17522);/* ESM import */var k=r(40756);/* ESM import */var E=r(26098);/* ESM import */var C=r(5618);/* ESM import */var M=r(20831);/* ESM import */var W=r(19706);/* ESM import */var D=r(16614);/* ESM import */var T=r(51066);/* ESM import */var S=r(44459);/* ESM import */var B=r(12432);/* ESM import */var N=r(19397);/* ESM import */var I=r(35523);/* ESM import */var O=r(79237);/* ESM import */var A=r(11548);/* ESM import */var L=r(29726);/**
 * A wrapper class around [date-fns](http://date-fns.org) that provides utility
 * methods for date manipulation and formatting.
 *
 * @since 9.2.0
 * @example
 *   const dateLib = new DateLib({ locale: es });
 *   const newDate = dateLib.addDays(new Date(), 5);
 */class z{/**
     * Creates an instance of `DateLib`.
     *
     * @param options Configuration options for the date library.
     * @param overrides Custom overrides for the date library functions.
     */constructor(e,t){/**
         * Reference to the built-in Date constructor.
         *
         * @deprecated Use `newDate()` or `today()`.
         */this.Date=Date;/**
         * Creates a new `Date` object representing today's date.
         *
         * @since 9.5.0
         * @returns A `Date` object for today's date.
         */this.today=()=>{if(this.overrides?.today){return this.overrides.today()}if(this.options.timeZone){return n/* .TZDate.tz */.N9.tz(this.options.timeZone)}return new this.Date};/**
         * Creates a new `Date` object with the specified year, month, and day.
         *
         * @since 9.5.0
         * @param year The year.
         * @param monthIndex The month (0-11).
         * @param date The day of the month.
         * @returns A new `Date` object.
         */this.newDate=(e,t,r)=>{if(this.overrides?.newDate){return this.overrides.newDate(e,t,r)}if(this.options.timeZone){return new n/* .TZDate */.N9(e,t,r,this.options.timeZone)}return new Date(e,t,r)};/**
         * Adds the specified number of days to the given date.
         *
         * @param date The date to add days to.
         * @param amount The number of days to add.
         * @returns The new date with the days added.
         */this.addDays=(e,t)=>{return this.overrides?.addDays?this.overrides.addDays(e,t):(0,a/* .addDays */.E)(e,t)};/**
         * Adds the specified number of months to the given date.
         *
         * @param date The date to add months to.
         * @param amount The number of months to add.
         * @returns The new date with the months added.
         */this.addMonths=(e,t)=>{return this.overrides?.addMonths?this.overrides.addMonths(e,t):(0,i/* .addMonths */.z)(e,t)};/**
         * Adds the specified number of weeks to the given date.
         *
         * @param date The date to add weeks to.
         * @param amount The number of weeks to add.
         * @returns The new date with the weeks added.
         */this.addWeeks=(e,t)=>{return this.overrides?.addWeeks?this.overrides.addWeeks(e,t):(0,o/* .addWeeks */.j)(e,t)};/**
         * Adds the specified number of years to the given date.
         *
         * @param date The date to add years to.
         * @param amount The number of years to add.
         * @returns The new date with the years added.
         */this.addYears=(e,t)=>{return this.overrides?.addYears?this.overrides.addYears(e,t):(0,s/* .addYears */.B)(e,t)};/**
         * Returns the number of calendar days between the given dates.
         *
         * @param dateLeft The later date.
         * @param dateRight The earlier date.
         * @returns The number of calendar days between the dates.
         */this.differenceInCalendarDays=(e,t)=>{return this.overrides?.differenceInCalendarDays?this.overrides.differenceInCalendarDays(e,t):(0,d/* .differenceInCalendarDays */.w)(e,t)};/**
         * Returns the number of calendar months between the given dates.
         *
         * @param dateLeft The later date.
         * @param dateRight The earlier date.
         * @returns The number of calendar months between the dates.
         */this.differenceInCalendarMonths=(e,t)=>{return this.overrides?.differenceInCalendarMonths?this.overrides.differenceInCalendarMonths(e,t):(0,l/* .differenceInCalendarMonths */.T)(e,t)};/**
         * Returns the months between the given dates.
         *
         * @param interval The interval to get the months for.
         */this.eachMonthOfInterval=e=>{return this.overrides?.eachMonthOfInterval?this.overrides.eachMonthOfInterval(e):(0,c/* .eachMonthOfInterval */.R)(e)};/**
         * Returns the end of the broadcast week for the given date.
         *
         * @param date The original date.
         * @returns The end of the broadcast week.
         */this.endOfBroadcastWeek=e=>{return this.overrides?.endOfBroadcastWeek?this.overrides.endOfBroadcastWeek(e):(0,A/* .endOfBroadcastWeek */.r)(e,this)};/**
         * Returns the end of the ISO week for the given date.
         *
         * @param date The original date.
         * @returns The end of the ISO week.
         */this.endOfISOWeek=e=>{return this.overrides?.endOfISOWeek?this.overrides.endOfISOWeek(e):(0,u/* .endOfISOWeek */.g)(e)};/**
         * Returns the end of the month for the given date.
         *
         * @param date The original date.
         * @returns The end of the month.
         */this.endOfMonth=e=>{return this.overrides?.endOfMonth?this.overrides.endOfMonth(e):(0,v/* .endOfMonth */.V)(e)};/**
         * Returns the end of the week for the given date.
         *
         * @param date The original date.
         * @returns The end of the week.
         */this.endOfWeek=(e,t)=>{return this.overrides?.endOfWeek?this.overrides.endOfWeek(e,t):(0,f/* .endOfWeek */.v)(e,this.options)};/**
         * Returns the end of the year for the given date.
         *
         * @param date The original date.
         * @returns The end of the year.
         */this.endOfYear=e=>{return this.overrides?.endOfYear?this.overrides.endOfYear(e):(0,p/* .endOfYear */.w)(e)};/**
         * Formats the given date using the specified format string.
         *
         * @param date The date to format.
         * @param formatStr The format string.
         * @returns The formatted date string.
         */this.format=(e,t,r)=>{const n=this.overrides?.format?this.overrides.format(e,t,this.options):(0,h/* .format */.WU)(e,t,this.options);if(this.options.numerals&&this.options.numerals!=="latn"){return this.replaceDigits(n)}return n};/**
         * Returns the ISO week number for the given date.
         *
         * @param date The date to get the ISO week number for.
         * @returns The ISO week number.
         */this.getISOWeek=e=>{return this.overrides?.getISOWeek?this.overrides.getISOWeek(e):(0,m/* .getISOWeek */.l)(e)};/**
         * Returns the month of the given date.
         *
         * @param date The date to get the month for.
         * @returns The month.
         */this.getMonth=(e,t)=>{return this.overrides?.getMonth?this.overrides.getMonth(e,this.options):(0,g/* .getMonth */.j)(e,this.options)};/**
         * Returns the year of the given date.
         *
         * @param date The date to get the year for.
         * @returns The year.
         */this.getYear=(e,t)=>{return this.overrides?.getYear?this.overrides.getYear(e,this.options):(0,b/* .getYear */.S)(e,this.options)};/**
         * Returns the local week number for the given date.
         *
         * @param date The date to get the week number for.
         * @returns The week number.
         */this.getWeek=(e,t)=>{return this.overrides?.getWeek?this.overrides.getWeek(e,this.options):(0,_/* .getWeek */.Q)(e,this.options)};/**
         * Checks if the first date is after the second date.
         *
         * @param date The date to compare.
         * @param dateToCompare The date to compare with.
         * @returns True if the first date is after the second date.
         */this.isAfter=(e,t)=>{return this.overrides?.isAfter?this.overrides.isAfter(e,t):(0,y/* .isAfter */.A)(e,t)};/**
         * Checks if the first date is before the second date.
         *
         * @param date The date to compare.
         * @param dateToCompare The date to compare with.
         * @returns True if the first date is before the second date.
         */this.isBefore=(e,t)=>{return this.overrides?.isBefore?this.overrides.isBefore(e,t):(0,w/* .isBefore */.R)(e,t)};/**
         * Checks if the given value is a Date object.
         *
         * @param value The value to check.
         * @returns True if the value is a Date object.
         */this.isDate=e=>{return this.overrides?.isDate?this.overrides.isDate(e):(0,x/* .isDate */.J)(e)};/**
         * Checks if the given dates are on the same day.
         *
         * @param dateLeft The first date to compare.
         * @param dateRight The second date to compare.
         * @returns True if the dates are on the same day.
         */this.isSameDay=(e,t)=>{return this.overrides?.isSameDay?this.overrides.isSameDay(e,t):(0,Z/* .isSameDay */.K)(e,t)};/**
         * Checks if the given dates are in the same month.
         *
         * @param dateLeft The first date to compare.
         * @param dateRight The second date to compare.
         * @returns True if the dates are in the same month.
         */this.isSameMonth=(e,t)=>{return this.overrides?.isSameMonth?this.overrides.isSameMonth(e,t):(0,k/* .isSameMonth */.x)(e,t)};/**
         * Checks if the given dates are in the same year.
         *
         * @param dateLeft The first date to compare.
         * @param dateRight The second date to compare.
         * @returns True if the dates are in the same year.
         */this.isSameYear=(e,t)=>{return this.overrides?.isSameYear?this.overrides.isSameYear(e,t):(0,E/* .isSameYear */.F)(e,t)};/**
         * Returns the latest date in the given array of dates.
         *
         * @param dates The array of dates to compare.
         * @returns The latest date.
         */this.max=e=>{return this.overrides?.max?this.overrides.max(e):(0,C/* .max */.F)(e)};/**
         * Returns the earliest date in the given array of dates.
         *
         * @param dates The array of dates to compare.
         * @returns The earliest date.
         */this.min=e=>{return this.overrides?.min?this.overrides.min(e):(0,M/* .min */.V)(e)};/**
         * Sets the month of the given date.
         *
         * @param date The date to set the month on.
         * @param month The month to set (0-11).
         * @returns The new date with the month set.
         */this.setMonth=(e,t)=>{return this.overrides?.setMonth?this.overrides.setMonth(e,t):(0,W/* .setMonth */.q)(e,t)};/**
         * Sets the year of the given date.
         *
         * @param date The date to set the year on.
         * @param year The year to set.
         * @returns The new date with the year set.
         */this.setYear=(e,t)=>{return this.overrides?.setYear?this.overrides.setYear(e,t):(0,D/* .setYear */.M)(e,t)};/**
         * Returns the start of the broadcast week for the given date.
         *
         * @param date The original date.
         * @returns The start of the broadcast week.
         */this.startOfBroadcastWeek=(e,t)=>{return this.overrides?.startOfBroadcastWeek?this.overrides.startOfBroadcastWeek(e,this):(0,L/* .startOfBroadcastWeek */.i)(e,this)};/**
         * Returns the start of the day for the given date.
         *
         * @param date The original date.
         * @returns The start of the day.
         */this.startOfDay=e=>{return this.overrides?.startOfDay?this.overrides.startOfDay(e):(0,T/* .startOfDay */.b)(e)};/**
         * Returns the start of the ISO week for the given date.
         *
         * @param date The original date.
         * @returns The start of the ISO week.
         */this.startOfISOWeek=e=>{return this.overrides?.startOfISOWeek?this.overrides.startOfISOWeek(e):(0,S/* .startOfISOWeek */.T)(e)};/**
         * Returns the start of the month for the given date.
         *
         * @param date The original date.
         * @returns The start of the month.
         */this.startOfMonth=e=>{return this.overrides?.startOfMonth?this.overrides.startOfMonth(e):(0,B/* .startOfMonth */.N)(e)};/**
         * Returns the start of the week for the given date.
         *
         * @param date The original date.
         * @returns The start of the week.
         */this.startOfWeek=(e,t)=>{return this.overrides?.startOfWeek?this.overrides.startOfWeek(e,this.options):(0,N/* .startOfWeek */.z)(e,this.options)};/**
         * Returns the start of the year for the given date.
         *
         * @param date The original date.
         * @returns The start of the year.
         */this.startOfYear=e=>{return this.overrides?.startOfYear?this.overrides.startOfYear(e):(0,I/* .startOfYear */.e)(e)};this.options={locale:O/* .enUS */._,...e};this.overrides=t}/**
     * Generates a mapping of Arabic digits (0-9) to the target numbering system
     * digits.
     *
     * @since 9.5.0
     * @returns A record mapping Arabic digits to the target numerals.
     */getDigitMap(){const{numerals:e="latn"}=this.options;// Use Intl.NumberFormat to create a formatter with the specified numbering system
const t=new Intl.NumberFormat("en-US",{numberingSystem:e});// Map Arabic digits (0-9) to the target numerals
const r={};for(let e=0;e<10;e++){r[e.toString()]=t.format(e)}return r}/**
     * Replaces Arabic digits in a string with the target numbering system digits.
     *
     * @since 9.5.0
     * @param input The string containing Arabic digits.
     * @returns The string with digits replaced.
     */replaceDigits(e){const t=this.getDigitMap();return e.replace(/\d/g,e=>t[e]||e)}/**
     * Formats a number using the configured numbering system.
     *
     * @since 9.5.0
     * @param value The number to format.
     * @returns The formatted number as a string.
     */formatNumber(e){return this.replaceDigits(e.toString())}}/** The default locale (English). *//**
 * The default date library with English locale.
 *
 * @since 9.2.0
 */const U=new z;/**
 * @ignore
 * @deprecated Use `defaultDateLib`.
 */const R=/* unused pure expression or super */null&&U;//# sourceMappingURL=DateLib.js.map
},77204:function(e,t,r){r.d(t,{z:()=>a});/* ESM import */var n=r(87363);/**
 * Render the button elements in the calendar.
 *
 * @private
 * @deprecated Use `PreviousMonthButton` or `@link NextMonthButton` instead.
 */function a(e){return n.createElement("button",{...e})}//# sourceMappingURL=Button.js.map
},91293:function(e,t,r){r.d(t,{i:()=>a});/* ESM import */var n=r(87363);/**
 * Render the label in the month caption.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){return n.createElement("span",{...e})}//# sourceMappingURL=CaptionLabel.js.map
},1745:function(e,t,r){r.d(t,{T:()=>a});/* ESM import */var n=r(87363);/**
 * Render the chevron icon used in the navigation buttons and dropdowns.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){const{size:t=24,orientation:r="left",className:a}=e;return n.createElement("svg",{className:a,width:t,height:t,viewBox:"0 0 24 24"},r==="up"&&n.createElement("polygon",{points:"6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28"}),r==="down"&&n.createElement("polygon",{points:"6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72"}),r==="left"&&n.createElement("polygon",{points:"16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20"}),r==="right"&&n.createElement("polygon",{points:"8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20"}))}//# sourceMappingURL=Chevron.js.map
},60442:function(e,t,r){r.d(t,{J:()=>a});/* ESM import */var n=r(87363);/**
 * Render a grid cell for a specific day in the calendar.
 *
 * Handles interaction and focus for the day. If you only need to change the
 * content of the day cell, consider swapping the `DayButton` component
 * instead.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){const{day:t,modifiers:r,...a}=e;return n.createElement("td",{...a})}//# sourceMappingURL=Day.js.map
},17431:function(e,t,r){r.d(t,{b:()=>a});/* ESM import */var n=r(87363);/**
 * Render a button for a specific day in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){const{day:t,modifiers:r,...a}=e;const i=n.useRef(null);n.useEffect(()=>{if(r.focused)i.current?.focus()},[r.focused]);return n.createElement("button",{ref:i,...a})}//# sourceMappingURL=DayButton.js.map
},26031:function(e,t,r){r.d(t,{L:()=>i});/* ESM import */var n=r(87363);/* ESM import */var a=r(6156);/**
 * Render a dropdown component for navigation in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function i(e){const{options:t,className:r,components:i,classNames:o,...s}=e;const d=[o[a.UI.Dropdown],r].join(" ");const l=t?.find(({value:e})=>e===s.value);return n.createElement("span",{"data-disabled":s.disabled,className:o[a.UI.DropdownRoot]},n.createElement(i.Select,{className:d,...s},t?.map(({value:e,label:t,disabled:r})=>n.createElement(i.Option,{key:e,value:e,disabled:r},t))),n.createElement("span",{className:o[a.UI.CaptionLabel],"aria-hidden":true},l?.label,n.createElement(i.Chevron,{orientation:"down",size:18,className:o[a.UI.Chevron]})))}//# sourceMappingURL=Dropdown.js.map
},58581:function(e,t,r){r.d(t,{Z:()=>a});/* ESM import */var n=r(87363);/**
 * Render the navigation dropdowns for the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){return n.createElement("div",{...e})}//# sourceMappingURL=DropdownNav.js.map
},50947:function(e,t,r){r.d(t,{$:()=>a});/* ESM import */var n=r(87363);/**
 * Render the footer of the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){return n.createElement("div",{...e})}//# sourceMappingURL=Footer.js.map
},18149:function(e,t,r){r.d(t,{m:()=>a});/* ESM import */var n=r(87363);/**
 * Render the grid with the weekday header row and the weeks for a specific
 * month.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){const{calendarMonth:t,displayIndex:r,...a}=e;return n.createElement("div",{...a},e.children)}//# sourceMappingURL=Month.js.map
},78136:function(e,t,r){r.d(t,{h:()=>a});/* ESM import */var n=r(87363);/**
 * Render the caption for a month in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){const{calendarMonth:t,displayIndex:r,...a}=e;return n.createElement("div",{...a})}//# sourceMappingURL=MonthCaption.js.map
},51601:function(e,t,r){r.d(t,{A:()=>a});/* ESM import */var n=r(87363);/**
 * Render the grid of days for a specific month.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){return n.createElement("table",{...e})}//# sourceMappingURL=MonthGrid.js.map
},28299:function(e,t,r){r.d(t,{z:()=>a});/* ESM import */var n=r(87363);/**
 * Render a container wrapping the month grids.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){return n.createElement("div",{...e})}//# sourceMappingURL=Months.js.map
},43498:function(e,t,r){r.d(t,{c:()=>i});/* ESM import */var n=r(87363);/* ESM import */var a=r(5293);/**
 * Render a dropdown to navigate between months in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function i(e){const{components:t}=(0,a/* .useDayPicker */.k)();return n.createElement(t.Dropdown,{...e})}//# sourceMappingURL=MonthsDropdown.js.map
},30841:function(e,t,r){r.d(t,{J:()=>o});/* ESM import */var n=r(87363);/* ESM import */var a=r(6156);/* ESM import */var i=r(5293);/**
 * Render the navigation toolbar with buttons to navigate between months.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function o(e){const{onPreviousClick:t,onNextClick:r,previousMonth:o,nextMonth:s,...d}=e;const{components:l,classNames:c,labels:{labelPrevious:u,labelNext:v}}=(0,i/* .useDayPicker */.k)();const f=(0,n.useCallback)(e=>{if(s){r?.(e)}},[s,r]);const p=(0,n.useCallback)(e=>{if(o){t?.(e)}},[o,t]);return n.createElement("nav",{...d},n.createElement(l.PreviousMonthButton,{type:"button",className:c[a.UI.PreviousMonthButton],tabIndex:o?undefined:-1,"aria-disabled":o?undefined:true,"aria-label":u(o),onClick:p},n.createElement(l.Chevron,{disabled:o?undefined:true,className:c[a.UI.Chevron],orientation:"left"})),n.createElement(l.NextMonthButton,{type:"button",className:c[a.UI.NextMonthButton],tabIndex:s?undefined:-1,"aria-disabled":s?undefined:true,"aria-label":v(s),onClick:f},n.createElement(l.Chevron,{disabled:s?undefined:true,orientation:"right",className:c[a.UI.Chevron]})))}//# sourceMappingURL=Nav.js.map
},60296:function(e,t,r){r.d(t,{b:()=>i});/* ESM import */var n=r(87363);/* ESM import */var a=r(5293);/**
 * Render the button to navigate to the next month in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function i(e){const{components:t}=(0,a/* .useDayPicker */.k)();return n.createElement(t.Button,{...e})}//# sourceMappingURL=NextMonthButton.js.map
},93073:function(e,t,r){r.d(t,{W:()=>a});/* ESM import */var n=r(87363);/**
 * Render an `option` element.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){return n.createElement("option",{...e})}//# sourceMappingURL=Option.js.map
},92348:function(e,t,r){r.d(t,{U:()=>i});/* ESM import */var n=r(87363);/* ESM import */var a=r(5293);/**
 * Render the button to navigate to the previous month in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function i(e){const{components:t}=(0,a/* .useDayPicker */.k)();return n.createElement(t.Button,{...e})}//# sourceMappingURL=PreviousMonthButton.js.map
},24618:function(e,t,r){r.d(t,{f:()=>a});/* ESM import */var n=r(87363);/**
 * Render the root element of the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){const{rootRef:t,...r}=e;return n.createElement("div",{...r,ref:t})}//# sourceMappingURL=Root.js.map
},59145:function(e,t,r){r.d(t,{P:()=>a});/* ESM import */var n=r(87363);/**
 * Render a `select` element.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){return n.createElement("select",{...e})}//# sourceMappingURL=Select.js.map
},60287:function(e,t,r){r.d(t,{H:()=>a});/* ESM import */var n=r(87363);/**
 * Render a table row representing a week in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){const{week:t,...r}=e;return n.createElement("tr",{...r})}//# sourceMappingURL=Week.js.map
},63914:function(e,t,r){r.d(t,{M:()=>a});/* ESM import */var n=r(87363);/**
 * Render a table cell displaying the number of the week.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){const{week:t,...r}=e;return n.createElement("th",{...r})}//# sourceMappingURL=WeekNumber.js.map
},78351:function(e,t,r){r.d(t,{o:()=>a});/* ESM import */var n=r(87363);/**
 * Render the header cell for the week numbers column.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){return n.createElement("th",{...e})}//# sourceMappingURL=WeekNumberHeader.js.map
},12620:function(e,t,r){r.d(t,{O:()=>a});/* ESM import */var n=r(87363);/**
 * Render a table header cell with the name of a weekday (e.g., "Mo", "Tu").
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){return n.createElement("th",{...e})}//# sourceMappingURL=Weekday.js.map
},56053:function(e,t,r){r.d(t,{o:()=>a});/* ESM import */var n=r(87363);/**
 * Render the table row containing the weekday names.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){return n.createElement("thead",{"aria-hidden":true},n.createElement("tr",{...e}))}//# sourceMappingURL=Weekdays.js.map
},51615:function(e,t,r){r.d(t,{B:()=>a});/* ESM import */var n=r(87363);/**
 * Render the container for the weeks in the month grid.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){return n.createElement("tbody",{...e})}//# sourceMappingURL=Weeks.js.map
},38678:function(e,t,r){r.d(t,{T:()=>i});/* ESM import */var n=r(87363);/* ESM import */var a=r(5293);/**
 * Render a dropdown to navigate between years in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function i(e){const{components:t}=(0,a/* .useDayPicker */.k)();return n.createElement(t.Dropdown,{...e})}//# sourceMappingURL=YearsDropdown.js.map
},73840:function(e,t,r){r.r(t);r.d(t,{Button:()=>/* reexport safe */n.z,CaptionLabel:()=>/* reexport safe */a.i,Chevron:()=>/* reexport safe */i.T,Day:()=>/* reexport safe */o.J,DayButton:()=>/* reexport safe */s.b,Dropdown:()=>/* reexport safe */d.L,DropdownNav:()=>/* reexport safe */l.Z,Footer:()=>/* reexport safe */c.$,Month:()=>/* reexport safe */u.m,MonthCaption:()=>/* reexport safe */v.h,MonthGrid:()=>/* reexport safe */f.A,Months:()=>/* reexport safe */p.z,MonthsDropdown:()=>/* reexport safe */h.c,Nav:()=>/* reexport safe */m.J,NextMonthButton:()=>/* reexport safe */g.b,Option:()=>/* reexport safe */b.W,PreviousMonthButton:()=>/* reexport safe */_.U,Root:()=>/* reexport safe */y.f,Select:()=>/* reexport safe */w.P,Week:()=>/* reexport safe */x.H,WeekNumber:()=>/* reexport safe */E.M,WeekNumberHeader:()=>/* reexport safe */C.o,Weekday:()=>/* reexport safe */Z.O,Weekdays:()=>/* reexport safe */k.o,Weeks:()=>/* reexport safe */M.B,YearsDropdown:()=>/* reexport safe */W.T});/* ESM import */var n=r(77204);/* ESM import */var a=r(91293);/* ESM import */var i=r(1745);/* ESM import */var o=r(60442);/* ESM import */var s=r(17431);/* ESM import */var d=r(26031);/* ESM import */var l=r(58581);/* ESM import */var c=r(50947);/* ESM import */var u=r(18149);/* ESM import */var v=r(78136);/* ESM import */var f=r(51601);/* ESM import */var p=r(28299);/* ESM import */var h=r(43498);/* ESM import */var m=r(30841);/* ESM import */var g=r(60296);/* ESM import */var b=r(93073);/* ESM import */var _=r(92348);/* ESM import */var y=r(24618);/* ESM import */var w=r(59145);/* ESM import */var x=r(60287);/* ESM import */var Z=r(12620);/* ESM import */var k=r(56053);/* ESM import */var E=r(63914);/* ESM import */var C=r(78351);/* ESM import */var M=r(51615);/* ESM import */var W=r(38678);//# sourceMappingURL=custom-components.js.map
},2957:function(e,t,r){r.d(t,{I:()=>i,O:()=>a});/* ESM import */var n=r(65469);/**
 * Formats the caption of the month.
 *
 * @defaultValue `LLLL y` (e.g., "November 2022").
 * @param month The date representing the month.
 * @param options Configuration options for the date library.
 * @param dateLib The date library to use for formatting. If not provided, a new
 *   instance is created.
 * @returns The formatted caption as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function a(e,t,r){return(r??new n/* .DateLib */.Z1(t)).format(e,"LLLL y")}/**
 * @private
 * @deprecated Use {@link formatCaption} instead.
 * @group Formatters
 */const i=a;//# sourceMappingURL=formatCaption.js.map
},29187:function(e,t,r){r.d(t,{f:()=>a});/* ESM import */var n=r(65469);/**
 * Formats the day date shown in the day cell.
 *
 * @defaultValue `d` (e.g., "1").
 * @param date The date to format.
 * @param options Configuration options for the date library.
 * @param dateLib The date library to use for formatting. If not provided, a new
 *   instance is created.
 * @returns The formatted day as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function a(e,t,r){return(r??new n/* .DateLib */.Z1(t)).format(e,"d")}//# sourceMappingURL=formatDay.js.map
},6906:function(e,t,r){r.d(t,{E:()=>a});/* ESM import */var n=r(65469);/**
 * Formats the month for the dropdown option label.
 *
 * @defaultValue The localized full month name.
 * @param month The date representing the month.
 * @param dateLib The date library to use for formatting. Defaults to
 *   `defaultDateLib`.
 * @returns The formatted month name as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function a(e,t=n/* .defaultDateLib */.zk){return t.format(e,"LLLL")}//# sourceMappingURL=formatMonthDropdown.js.map
},67221:function(e,t,r){r.d(t,{z:()=>a});/* ESM import */var n=r(65469);/**
 * Formats the week number.
 *
 * @defaultValue The week number as a string, with a leading zero for single-digit numbers.
 * @param weekNumber The week number to format.
 * @param dateLib The date library to use for formatting. Defaults to
 *   `defaultDateLib`.
 * @returns The formatted week number as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function a(e,t=n/* .defaultDateLib */.zk){if(e<10){return t.formatNumber(`0${e.toLocaleString()}`)}return t.formatNumber(`${e.toLocaleString()}`)}//# sourceMappingURL=formatWeekNumber.js.map
},7655:function(e,t,r){r.d(t,{I:()=>n});/**
 * Formats the header for the week number column.
 *
 * @defaultValue An empty string `""`.
 * @returns The formatted week number header as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function n(){return``}//# sourceMappingURL=formatWeekNumberHeader.js.map
},69583:function(e,t,r){r.d(t,{T:()=>a});/* ESM import */var n=r(65469);/**
 * Formats the name of a weekday to be displayed in the weekdays header.
 *
 * @defaultValue `cccccc` (e.g., "Mo" for Monday).
 * @param weekday The date representing the weekday.
 * @param options Configuration options for the date library.
 * @param dateLib The date library to use for formatting. If not provided, a new
 *   instance is created.
 * @returns The formatted weekday name as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function a(e,t,r){return(r??new n/* .DateLib */.Z1(t)).format(e,"cccccc")}//# sourceMappingURL=formatWeekdayName.js.map
},41614:function(e,t,r){r.d(t,{N:()=>i,P:()=>a});/* ESM import */var n=r(65469);/**
 * Formats the year for the dropdown option label.
 *
 * @param year The year to format.
 * @param dateLib The date library to use for formatting. Defaults to
 *   `defaultDateLib`.
 * @returns The formatted year as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function a(e,t=n/* .defaultDateLib */.zk){return t.format(e,"yyyy")}/**
 * @private
 * @deprecated Use `formatYearDropdown` instead.
 * @group Formatters
 */const i=a;//# sourceMappingURL=formatYearDropdown.js.map
},27790:function(e,t,r){r.r(t);r.d(t,{formatCaption:()=>/* reexport safe */n.O,formatDay:()=>/* reexport safe */a.f,formatMonthCaption:()=>/* reexport safe */n.I,formatMonthDropdown:()=>/* reexport safe */i.E,formatWeekNumber:()=>/* reexport safe */o.z,formatWeekNumberHeader:()=>/* reexport safe */s.I,formatWeekdayName:()=>/* reexport safe */d.T,formatYearCaption:()=>/* reexport safe */l.N,formatYearDropdown:()=>/* reexport safe */l.P});/* ESM import */var n=r(2957);/* ESM import */var a=r(29187);/* ESM import */var i=r(6906);/* ESM import */var o=r(67221);/* ESM import */var s=r(7655);/* ESM import */var d=r(69583);/* ESM import */var l=r(41614);//# sourceMappingURL=index.js.map
},79173:function(e,t,r){r.d(t,{k:()=>o});/* ESM import */var n=r(6156);var a;(function(e){e[e["Today"]=0]="Today";e[e["Selected"]=1]="Selected";e[e["LastFocused"]=2]="LastFocused";e[e["FocusedModifier"]=3]="FocusedModifier"})(a||(a={}));/**
 * Determines if a day is focusable based on its modifiers.
 *
 * A day is considered focusable if it is not disabled, hidden, or outside the
 * displayed month.
 *
 * @param modifiers The modifiers applied to the day.
 * @returns `true` if the day is focusable, otherwise `false`.
 */function i(e){return!e[n/* .DayFlag.disabled */.BE.disabled]&&!e[n/* .DayFlag.hidden */.BE.hidden]&&!e[n/* .DayFlag.outside */.BE.outside]}/**
 * Calculates the focus target day based on priority.
 *
 * This function determines the day that should receive focus in the calendar,
 * prioritizing days with specific modifiers (e.g., "focused", "today") or
 * selection states.
 *
 * @param days The array of `CalendarDay` objects to evaluate.
 * @param getModifiers A function to retrieve the modifiers for a given day.
 * @param isSelected A function to determine if a day is selected.
 * @param lastFocused The last focused day, if any.
 * @returns The `CalendarDay` that should receive focus, or `undefined` if no
 *   focusable day is found.
 */function o(e,t,r,o){let s;let d=-1;for(const l of e){const e=t(l);if(i(e)){if(e[n/* .DayFlag.focused */.BE.focused]&&d<a.FocusedModifier){s=l;d=a.FocusedModifier}else if(o?.isEqualTo(l)&&d<a.LastFocused){s=l;d=a.LastFocused}else if(r(l.date)&&d<a.Selected){s=l;d=a.Selected}else if(e[n/* .DayFlag.today */.BE.today]&&d<a.Today){s=l;d=a.Today}}}if(!s){// Return the first day that is focusable
s=e.find(e=>i(t(e)))}return s}//# sourceMappingURL=calculateFocusTarget.js.map
},48834:function(e,t,r){r.d(t,{H:()=>i});/* ESM import */var n=r(6156);/* ESM import */var a=r(52804);/**
 * Creates a function to retrieve the modifiers for a given day.
 *
 * This function calculates both internal and custom modifiers for each day
 * based on the provided calendar days and DayPicker props.
 *
 * @private
 * @param days The array of `CalendarDay` objects to process.
 * @param props The DayPicker props, including modifiers and configuration
 *   options.
 * @param dateLib The date library to use for date manipulation.
 * @returns A function that retrieves the modifiers for a given `CalendarDay`.
 */function i(e,t,r,i,o){const{disabled:s,hidden:d,modifiers:l,showOutsideDays:c,broadcastCalendar:u,today:v}=t;const{isSameDay:f,isSameMonth:p,startOfMonth:h,isBefore:m,endOfMonth:g,isAfter:b}=o;const _=r&&h(r);const y=i&&g(i);const w={[n/* .DayFlag.focused */.BE.focused]:[],[n/* .DayFlag.outside */.BE.outside]:[],[n/* .DayFlag.disabled */.BE.disabled]:[],[n/* .DayFlag.hidden */.BE.hidden]:[],[n/* .DayFlag.today */.BE.today]:[]};const x={};for(const t of e){const{date:e,displayMonth:r}=t;const n=Boolean(r&&!p(e,r));const i=Boolean(_&&m(e,_));const h=Boolean(y&&b(e,y));const g=Boolean(s&&(0,a/* .dateMatchModifiers */.W)(e,s,o));const Z=Boolean(d&&(0,a/* .dateMatchModifiers */.W)(e,d,o))||i||h||// Broadcast calendar will show outside days as default
!u&&!c&&n||u&&c===false&&n;const k=f(e,v??o.today());if(n)w.outside.push(t);if(g)w.disabled.push(t);if(Z)w.hidden.push(t);if(k)w.today.push(t);// Add custom modifiers
if(l){Object.keys(l).forEach(r=>{const n=l?.[r];const i=n?(0,a/* .dateMatchModifiers */.W)(e,n,o):false;if(!i)return;if(x[r]){x[r].push(t)}else{x[r]=[t]}})}}return e=>{// Initialize all the modifiers to false
const t={[n/* .DayFlag.focused */.BE.focused]:false,[n/* .DayFlag.disabled */.BE.disabled]:false,[n/* .DayFlag.hidden */.BE.hidden]:false,[n/* .DayFlag.outside */.BE.outside]:false,[n/* .DayFlag.today */.BE.today]:false};const r={};// Find the modifiers for the given day
for(const r in w){const n=w[r];t[r]=n.some(t=>t===e)}for(const t in x){r[t]=x[t].some(t=>t===e)}return{...t,// custom modifiers should override all the previous ones
...r}}}//# sourceMappingURL=createGetModifiers.js.map
},11548:function(e,t,r){r.d(t,{r:()=>i});/* ESM import */var n=r(59582);/* ESM import */var a=r(29726);/**
 * Returns the end date of the week in the broadcast calendar.
 *
 * The broadcast week ends on the last day of the last broadcast week for the
 * given date.
 *
 * @since 9.4.0
 * @param date The date for which to calculate the end of the broadcast week.
 * @param dateLib The date library to use for date manipulation.
 * @returns The end date of the broadcast week.
 */function i(e,t){const r=(0,a/* .startOfBroadcastWeek */.i)(e,t);const i=(0,n/* .getBroadcastWeeksInMonth */.I)(e,t);const o=t.addDays(r,i*7-1);return o}//# sourceMappingURL=endOfBroadcastWeek.js.map
},59582:function(e,t,r){r.d(t,{I:()=>i});const n=5;const a=4;/**
 * Returns the number of weeks to display in the broadcast calendar for a given
 * month.
 *
 * The broadcast calendar may have either 4 or 5 weeks in a month, depending on
 * the start and end dates of the broadcast weeks.
 *
 * @since 9.4.0
 * @param month The month for which to calculate the number of weeks.
 * @param dateLib The date library to use for date manipulation.
 * @returns The number of weeks in the broadcast calendar (4 or 5).
 */function i(e,t){// Get the first day of the month
const r=t.startOfMonth(e);// Get the day of the week for the first day of the month (1-7, where 1 is Monday)
const i=r.getDay()>0?r.getDay():7;const o=t.addDays(e,-i+1);const s=t.addDays(o,n*7-1);const d=t.getMonth(e)===t.getMonth(s)?n:a;return d}//# sourceMappingURL=getBroadcastWeeksInMonth.js.map
},52395:function(e,t,r){r.d(t,{k:()=>a});/* ESM import */var n=r(6156);/**
 * Returns the class names for a day based on its modifiers.
 *
 * This function combines the base class name for the day with any class names
 * associated with active modifiers.
 *
 * @param modifiers The modifiers applied to the day.
 * @param classNames The base class names for the calendar elements.
 * @param modifiersClassNames The class names associated with specific
 *   modifiers.
 * @returns An array of class names for the day.
 */function a(e,t,r={}){const i=Object.entries(e).filter(([,e])=>e===true).reduce((e,[a])=>{if(r[a]){e.push(r[a])}else if(t[n/* .DayFlag */.BE[a]]){e.push(t[n/* .DayFlag */.BE[a]])}else if(t[n/* .SelectionState */.fP[a]]){e.push(t[n/* .SelectionState */.fP[a]])}return e},[t[n.UI.Day]]);return i}//# sourceMappingURL=getClassNamesForModifiers.js.map
},18296:function(e,t,r){r.d(t,{O:()=>a});/* ESM import */var n=r(73840);/**
 * Merges custom components from the props with the default components.
 *
 * This function ensures that any custom components provided in the props
 * override the default components.
 *
 * @param customComponents The custom components provided in the DayPicker
 *   props.
 * @returns An object containing the merged components.
 */function a(e){return{...n,...e}}//# sourceMappingURL=getComponents.js.map
},54054:function(e,t,r){r.d(t,{P:()=>n});/**
 * Extracts `data-` attributes from the DayPicker props.
 *
 * This function collects all `data-` attributes from the props and adds
 * additional attributes based on the DayPicker configuration.
 *
 * @param props The DayPicker props.
 * @returns An object containing the `data-` attributes.
 */function n(e){const t={"data-mode":e.mode??undefined,"data-required":"required"in e?e.required:undefined,"data-multiple-months":e.numberOfMonths&&e.numberOfMonths>1||undefined,"data-week-numbers":e.showWeekNumber||undefined,"data-broadcast-calendar":e.broadcastCalendar||undefined,"data-nav-layout":e.navLayout||undefined};Object.entries(e).forEach(([e,r])=>{if(e.startsWith("data-")){t[e]=r}});return t}//# sourceMappingURL=getDataAttributes.js.map
},11732:function(e,t,r){r.d(t,{i:()=>n});/**
 * Returns all the dates to display in the calendar.
 *
 * This function calculates the range of dates to display based on the provided
 * display months, constraints, and calendar configuration.
 *
 * @param displayMonths The months to display in the calendar.
 * @param maxDate The maximum date to include in the range.
 * @param props The DayPicker props, including calendar configuration options.
 * @param dateLib The date library to use for date manipulation.
 * @returns An array of dates to display in the calendar.
 */function n(e,t,r,n){const a=e[0];const i=e[e.length-1];const{ISOWeek:o,fixedWeeks:s,broadcastCalendar:d}=r??{};const{addDays:l,differenceInCalendarDays:c,differenceInCalendarMonths:u,endOfBroadcastWeek:v,endOfISOWeek:f,endOfMonth:p,endOfWeek:h,isAfter:m,startOfBroadcastWeek:g,startOfISOWeek:b,startOfWeek:_}=n;const y=d?g(a,n):o?b(a):_(a);const w=d?v(i):o?f(p(i)):h(p(i));const x=c(w,y);const Z=u(i,a)+1;const k=[];for(let e=0;e<=x;e++){const r=l(y,e);if(t&&m(r,t)){break}k.push(r)}// If fixed weeks is enabled, add the extra dates to the array
const E=d?35:42;const C=E*Z;if(s&&k.length<C){const e=C-k.length;for(let t=0;t<e;t++){const e=l(k[k.length-1],1);k.push(e)}}return k}//# sourceMappingURL=getDates.js.map
},84517:function(e,t,r){r.d(t,{g:()=>n});/**
 * Returns all the days belonging to the calendar by merging the days in the
 * weeks for each month.
 *
 * @param calendarMonths The array of calendar months.
 * @returns An array of `CalendarDay` objects representing all the days in the
 *   calendar.
 */function n(e){const t=[];return e.reduce((e,r)=>{const n=r.weeks.reduce((e,t)=>{return[...e,...t.days]},t);return[...e,...n]},t)}//# sourceMappingURL=getDays.js.map
},45734:function(e,t,r){r.d(t,{U:()=>a});/* ESM import */var n=r(6156);/**
 * Returns the default class names for the UI elements.
 *
 * This function generates a mapping of default class names for various UI
 * elements, day flags, selection states, and animations.
 *
 * @returns An object containing the default class names.
 * @group Utilities
 */function a(){const e={};for(const t in n.UI){e[n.UI[t]]=`rdp-${n.UI[t]}`}for(const t in n/* .DayFlag */.BE){e[n/* .DayFlag */.BE[t]]=`rdp-${n/* .DayFlag */.BE[t]}`}for(const t in n/* .SelectionState */.fP){e[n/* .SelectionState */.fP[t]]=`rdp-${n/* .SelectionState */.fP[t]}`}for(const t in n/* .Animation */.fw){e[n/* .Animation */.fw[t]]=`rdp-${n/* .Animation */.fw[t]}`}return e}//# sourceMappingURL=getDefaultClassNames.js.map
},6341:function(e,t,r){r.d(t,{b:()=>n});/**
 * Returns the months to display in the calendar.
 *
 * @param firstDisplayedMonth The first month currently displayed in the
 *   calendar.
 * @param calendarEndMonth The latest month the user can navigate to.
 * @param props The DayPicker props, including `numberOfMonths`.
 * @param dateLib The date library to use for date manipulation.
 * @returns An array of dates representing the months to display.
 */function n(e,t,r,n){const{numberOfMonths:a=1}=r;const i=[];for(let r=0;r<a;r++){const a=n.addMonths(e,r);if(t&&a>t){break}i.push(a)}return i}//# sourceMappingURL=getDisplayMonths.js.map
},9025:function(e,t,r){r.d(t,{N:()=>n});/**
 * Calculates the next date that should be focused in the calendar.
 *
 * This function determines the next focusable date based on the movement
 * direction, constraints, and calendar configuration.
 *
 * @param moveBy The unit of movement (e.g., "day", "week").
 * @param moveDir The direction of movement ("before" or "after").
 * @param refDate The reference date from which to calculate the next focusable
 *   date.
 * @param navStart The earliest date the user can navigate to.
 * @param navEnd The latest date the user can navigate to.
 * @param props The DayPicker props, including calendar configuration options.
 * @param dateLib The date library to use for date manipulation.
 * @returns The next focusable date.
 */function n(e,t,r,n,a,i,o){const{ISOWeek:s,broadcastCalendar:d}=i;const{addDays:l,addMonths:c,addWeeks:u,addYears:v,endOfBroadcastWeek:f,endOfISOWeek:p,endOfWeek:h,max:m,min:g,startOfBroadcastWeek:b,startOfISOWeek:_,startOfWeek:y}=o;const w={day:l,week:u,month:c,year:v,startOfWeek:e=>d?b(e,o):s?_(e):y(e),endOfWeek:e=>d?f(e):s?p(e):h(e)};let x=w[e](r,t==="after"?1:-1);if(t==="before"&&n){x=m([n,x])}else if(t==="after"&&a){x=g([a,x])}return x}//# sourceMappingURL=getFocusableDate.js.map
},54908:function(e,t,r){r.d(t,{_:()=>a});/* ESM import */var n=r(27790);/**
 * Merges custom formatters from the props with the default formatters.
 *
 * @param customFormatters The custom formatters provided in the DayPicker
 *   props.
 * @returns The merged formatters object.
 */function a(e){if(e?.formatMonthCaption&&!e.formatCaption){e.formatCaption=e.formatMonthCaption}if(e?.formatYearCaption&&!e.formatYearDropdown){e.formatYearDropdown=e.formatYearCaption}return{...n,...e}}//# sourceMappingURL=getFormatters.js.map
},82283:function(e,t,r){r.d(t,{Z:()=>n});/**
 * Determines the initial month to display in the calendar based on the provided
 * props.
 *
 * This function calculates the starting month, considering constraints such as
 * `startMonth`, `endMonth`, and the number of months to display.
 *
 * @param props The DayPicker props, including navigation and date constraints.
 * @param dateLib The date library to use for date manipulation.
 * @returns The initial month to display.
 */function n(e,t,r,n){const{month:a,defaultMonth:i,today:o=n.today(),numberOfMonths:s=1}=e;let d=a||i||o;const{differenceInCalendarMonths:l,addMonths:c,startOfMonth:u}=n;if(r&&l(r,d)<s-1){const e=-1*(s-1);d=c(r,e)}if(t&&l(d,t)<0){d=t}return u(d)}//# sourceMappingURL=getInitialMonth.js.map
},71264:function(e,t,r){r.d(t,{d:()=>n});/**
 * Returns the months to show in the dropdown.
 *
 * This function generates a list of months for the current year, formatted
 * using the provided formatter, and determines whether each month should be
 * disabled based on the navigation range.
 *
 * @param displayMonth The currently displayed month.
 * @param navStart The start date for navigation.
 * @param navEnd The end date for navigation.
 * @param formatters The formatters to use for formatting the month labels.
 * @param dateLib The date library to use for date manipulation.
 * @returns An array of dropdown options representing the months, or `undefined`
 *   if no months are available.
 */function n(e,t,r,n,a){const{startOfMonth:i,startOfYear:o,endOfYear:s,eachMonthOfInterval:d,getMonth:l}=a;const c=d({start:o(e),end:s(e)});const u=c.map(e=>{const o=n.formatMonthDropdown(e,a);const s=l(e);const d=t&&e<i(t)||r&&e>i(r)||false;return{value:s,label:o,disabled:d}});return u}//# sourceMappingURL=getMonthOptions.js.map
},97018:function(e,t,r){r.d(t,{w:()=>o});/* ESM import */var n=r(77827);/* ESM import */var a=r(26046);/* ESM import */var i=r(50644);/**
 * Returns the months to display in the calendar.
 *
 * This function generates `CalendarMonth` objects for each month to be
 * displayed, including their weeks and days, based on the provided display
 * months and dates.
 *
 * @param displayMonths The months (as dates) to display in the calendar.
 * @param dates The dates to display in the calendar.
 * @param props Options from the DayPicker props context.
 * @param dateLib The date library to use for date manipulation.
 * @returns An array of `CalendarMonth` objects representing the months to
 *   display.
 */function o(e,t,r,o){const{addDays:s,endOfBroadcastWeek:d,endOfISOWeek:l,endOfMonth:c,endOfWeek:u,getISOWeek:v,getWeek:f,startOfBroadcastWeek:p,startOfISOWeek:h,startOfWeek:m}=o;const g=e.reduce((e,g)=>{const b=r.broadcastCalendar?p(g,o):r.ISOWeek?h(g):m(g);const _=r.broadcastCalendar?d(g):r.ISOWeek?l(c(g)):u(c(g));/** The dates to display in the month. */const y=t.filter(e=>{return e>=b&&e<=_});const w=r.broadcastCalendar?35:42;if(r.fixedWeeks&&y.length<w){const e=t.filter(e=>{const t=w-y.length;return e>_&&e<=s(_,t)});y.push(...e)}const x=y.reduce((e,t)=>{const i=r.ISOWeek?v(t):f(t);const s=e.find(e=>e.weekNumber===i);const d=new n/* .CalendarDay */.X(t,g,o);if(!s){e.push(new a/* .CalendarWeek */.u(i,[d]))}else{s.days.push(d)}return e},[]);const Z=new i/* .CalendarMonth */.C(g,x);e.push(Z);return e},[]);if(!r.reverseMonths){return g}else{return g.reverse()}}//# sourceMappingURL=getMonths.js.map
},38540:function(e,t,r){r.d(t,{P:()=>n});/**
 * Returns the start and end months for calendar navigation.
 *
 * @param props The DayPicker props, including navigation and layout options.
 * @param dateLib The date library to use for date manipulation.
 * @returns A tuple containing the start and end months for navigation.
 */function n(e,t){let{startMonth:r,endMonth:n}=e;const{startOfYear:a,startOfDay:i,startOfMonth:o,endOfMonth:s,addYears:d,endOfYear:l,newDate:c,today:u}=t;// Handle deprecated code
const{fromYear:v,toYear:f,fromMonth:p,toMonth:h}=e;if(!r&&p){r=p}if(!r&&v){r=t.newDate(v,0,1)}if(!n&&h){n=h}if(!n&&f){n=c(f,11,31)}const m=e.captionLayout==="dropdown"||e.captionLayout==="dropdown-years";if(r){r=o(r)}else if(v){r=c(v,0,1)}else if(!r&&m){r=a(d(e.today??u(),-100))}if(n){n=s(n)}else if(f){n=c(f,11,31)}else if(!n&&m){n=l(e.today??u())}return[r?i(r):r,n?i(n):n]}//# sourceMappingURL=getNavMonth.js.map
},84110:function(e,t,r){r.d(t,{j:()=>o});/* ESM import */var n=r(77827);/* ESM import */var a=r(52804);/* ESM import */var i=r(9025);/**
 * Determines the next focusable day in the calendar.
 *
 * This function recursively calculates the next focusable day based on the
 * movement direction and modifiers applied to the days.
 *
 * @param moveBy The unit of movement (e.g., "day", "week").
 * @param moveDir The direction of movement ("before" or "after").
 * @param refDay The currently focused day.
 * @param calendarStartMonth The earliest month the user can navigate to.
 * @param calendarEndMonth The latest month the user can navigate to.
 * @param props The DayPicker props, including modifiers and configuration
 *   options.
 * @param dateLib The date library to use for date manipulation.
 * @param attempt The current recursion attempt (used to limit recursion depth).
 * @returns The next focusable day, or `undefined` if no focusable day is found.
 */function o(e,t,r,s,d,l,c,u=0){if(u>365){// Limit the recursion to 365 attempts
return undefined}const v=(0,i/* .getFocusableDate */.N)(e,t,r.date,s,d,l,c);const f=Boolean(l.disabled&&(0,a/* .dateMatchModifiers */.W)(v,l.disabled,c));const p=Boolean(l.hidden&&(0,a/* .dateMatchModifiers */.W)(v,l.hidden,c));const h=v;const m=new n/* .CalendarDay */.X(v,h,c);if(!f&&!p){return m}// Recursively attempt to find the next focusable date
return o(e,t,m,s,d,l,c,u+1)}//# sourceMappingURL=getNextFocus.js.map
},22663:function(e,t,r){r.d(t,{f:()=>n});/**
 * Returns the next month the user can navigate to, based on the given options.
 *
 * The next month is not always the next calendar month:
 *
 * - If it is after the `calendarEndMonth`, it returns `undefined`.
 * - If paged navigation is enabled, it skips forward by the number of displayed
 *   months.
 *
 * @param firstDisplayedMonth The first month currently displayed in the
 *   calendar.
 * @param calendarEndMonth The latest month the user can navigate to.
 * @param options Navigation options, including `numberOfMonths` and
 *   `pagedNavigation`.
 * @param dateLib The date library to use for date manipulation.
 * @returns The next month, or `undefined` if navigation is not possible.
 */function n(e,t,r,n){if(r.disableNavigation){return undefined}const{pagedNavigation:a,numberOfMonths:i=1}=r;const{startOfMonth:o,addMonths:s,differenceInCalendarMonths:d}=n;const l=a?i:1;const c=o(e);if(!t){return s(c,l)}const u=d(t,e);if(u<i){return undefined}return s(c,l)}//# sourceMappingURL=getNextMonth.js.map
},88490:function(e,t,r){r.d(t,{S:()=>n});/**
 * Returns the previous month the user can navigate to, based on the given
 * options.
 *
 * The previous month is not always the previous calendar month:
 *
 * - If it is before the `calendarStartMonth`, it returns `undefined`.
 * - If paged navigation is enabled, it skips back by the number of displayed
 *   months.
 *
 * @param firstDisplayedMonth The first month currently displayed in the
 *   calendar.
 * @param calendarStartMonth The earliest month the user can navigate to.
 * @param options Navigation options, including `numberOfMonths` and
 *   `pagedNavigation`.
 * @param dateLib The date library to use for date manipulation.
 * @returns The previous month, or `undefined` if navigation is not possible.
 */function n(e,t,r,n){if(r.disableNavigation){return undefined}const{pagedNavigation:a,numberOfMonths:i}=r;const{startOfMonth:o,addMonths:s,differenceInCalendarMonths:d}=n;const l=a?i??1:1;const c=o(e);if(!t){return s(c,-l)}const u=d(c,t);if(u<=0){return undefined}return s(c,-l)}//# sourceMappingURL=getPreviousMonth.js.map
},64347:function(e,t,r){r.d(t,{D:()=>a});/* ESM import */var n=r(6156);/**
 * Returns the computed style for a day based on its modifiers.
 *
 * This function merges the base styles for the day with any styles associated
 * with active modifiers.
 *
 * @param dayModifiers The modifiers applied to the day.
 * @param styles The base styles for the calendar elements.
 * @param modifiersStyles The styles associated with specific modifiers.
 * @returns The computed style for the day.
 */function a(e,t={},r={}){let i={...t?.[n.UI.Day]};Object.entries(e).filter(([,e])=>e===true).forEach(([e])=>{i={...i,...r?.[e]}});return i}//# sourceMappingURL=getStyleForModifiers.js.map
},77614:function(e,t,r){r.d(t,{D:()=>n});/**
 * Generates a series of 7 days, starting from the beginning of the week, to use
 * for formatting weekday names (e.g., Monday, Tuesday, etc.).
 *
 * @param dateLib The date library to use for date manipulation.
 * @param ISOWeek Whether to use ISO week numbering (weeks start on Monday).
 * @param broadcastCalendar Whether to use the broadcast calendar (weeks start
 *   on Monday, but may include adjustments for broadcast-specific rules).
 * @returns An array of 7 dates representing the weekdays.
 */function n(e,t,r){const n=e.today();const a=r?e.startOfBroadcastWeek(n,e):t?e.startOfISOWeek(n):e.startOfWeek(n);const i=[];for(let t=0;t<7;t++){const r=e.addDays(a,t);i.push(r)}return i}//# sourceMappingURL=getWeekdays.js.map
},60049:function(e,t,r){r.d(t,{K:()=>n});/**
 * Returns an array of calendar weeks from an array of calendar months.
 *
 * @param months The array of calendar months.
 * @returns An array of calendar weeks.
 */function n(e){const t=[];return e.reduce((e,t)=>{return[...e,...t.weeks]},t)}//# sourceMappingURL=getWeeks.js.map
},62464:function(e,t,r){r.d(t,{h:()=>n});/**
 * Returns the years to display in the dropdown.
 *
 * This function generates a list of years between the navigation start and end
 * dates, formatted using the provided formatter.
 *
 * @param navStart The start date for navigation.
 * @param navEnd The end date for navigation.
 * @param formatters The formatters to use for formatting the year labels.
 * @param dateLib The date library to use for date manipulation.
 * @returns An array of dropdown options representing the years, or `undefined`
 *   if `navStart` or `navEnd` is not provided.
 */function n(e,t,r,n){if(!e)return undefined;if(!t)return undefined;const{startOfYear:a,endOfYear:i,addYears:o,getYear:s,isBefore:d,isSameYear:l}=n;const c=a(e);const u=i(t);const v=[];let f=c;while(d(f,u)||l(f,u)){v.push(f);f=o(f,1)}return v.map(e=>{const t=r.formatYearDropdown(e,n);return{value:s(e),label:t,disabled:false}})}//# sourceMappingURL=getYearOptions.js.map
},29726:function(e,t,r){r.d(t,{i:()=>n});/**
 * Returns the start date of the week in the broadcast calendar.
 *
 * The broadcast week starts on Monday. If the first day of the month is not a
 * Monday, this function calculates the previous Monday as the start of the
 * broadcast week.
 *
 * @since 9.4.0
 * @param date The date for which to calculate the start of the broadcast week.
 * @param dateLib The date library to use for date manipulation.
 * @returns The start date of the broadcast week.
 */function n(e,t){const r=t.startOfMonth(e);const n=r.getDay();if(n===1){return r}else if(n===0){return t.addDays(r,-1*6)}else{return t.addDays(r,-1*(n-1))}}//# sourceMappingURL=startOfBroadcastWeek.js.map
},50717:function(e,t,r){r.d(t,{O:()=>a});/* ESM import */var n=r(87363);/**
 * A custom hook for managing both controlled and uncontrolled component states.
 *
 * This hook allows a component to support both controlled and uncontrolled
 * states by determining whether the `controlledValue` is provided. If it is
 * undefined, the hook falls back to using the internal state.
 *
 * @example
 *   // Uncontrolled usage
 *   const [value, setValue] = useControlledValue(0, undefined);
 *
 *   // Controlled usage
 *   const [value, setValue] = useControlledValue(0, props.value);
 *
 * @template T - The type of the value.
 * @param defaultValue The initial value for the uncontrolled state.
 * @param controlledValue The value for the controlled state. If undefined, the
 *   component will use the uncontrolled state.
 * @returns A tuple where the first element is the current value (either
 *   controlled or uncontrolled) and the second element is a setter function to
 *   update the value.
 */function a(e,t){const[r,a]=(0,n.useState)(e);const i=t===undefined?r:t;return[i,a]}//# sourceMappingURL=useControlledValue.js.map
},58100:function(e,t,r){r.r(t);r.d(t,{labelCaption:()=>/* reexport safe */n.D,labelDay:()=>/* reexport safe */i.Q,labelDayButton:()=>/* reexport safe */i.l,labelGrid:()=>/* reexport safe */n.v,labelGridcell:()=>/* reexport safe */a.R,labelMonthDropdown:()=>/* reexport safe */s.N,labelNav:()=>/* reexport safe */o.g,labelNext:()=>/* reexport safe */d.T,labelPrevious:()=>/* reexport safe */l.b,labelWeekNumber:()=>/* reexport safe */u.j,labelWeekNumberHeader:()=>/* reexport safe */v.E,labelWeekday:()=>/* reexport safe */c.O,labelYearDropdown:()=>/* reexport safe */f.I});/* ESM import */var n=r(80782);/* ESM import */var a=r(54428);/* ESM import */var i=r(95490);/* ESM import */var o=r(88234);/* ESM import */var s=r(60327);/* ESM import */var d=r(96368);/* ESM import */var l=r(55341);/* ESM import */var c=r(79231);/* ESM import */var u=r(58095);/* ESM import */var v=r(82779);/* ESM import */var f=r(58634);//# sourceMappingURL=index.js.map
},95490:function(e,t,r){r.d(t,{Q:()=>i,l:()=>a});/* ESM import */var n=r(65469);/**
 * Generates the ARIA label for a day button.
 *
 * Use the `modifiers` argument to provide additional context for the label,
 * such as indicating if the day is "today" or "selected."
 *
 * @defaultValue The formatted date.
 * @param date - The date to format.
 * @param modifiers - The modifiers providing context for the day.
 * @param options - Optional configuration for the date formatting library.
 * @param dateLib - An optional instance of the date formatting library.
 * @returns The ARIA label for the day button.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function a(e,t,r,a){let i=(a??new n/* .DateLib */.Z1(r)).format(e,"PPPP");if(t.today)i=`Today, ${i}`;if(t.selected)i=`${i}, selected`;return i}/**
 * @ignore
 * @deprecated Use `labelDayButton` instead.
 */const i=a;//# sourceMappingURL=labelDayButton.js.map
},80782:function(e,t,r){r.d(t,{D:()=>i,v:()=>a});/* ESM import */var n=r(65469);/**
 * Generates the ARIA label for the month grid, which is announced when entering
 * the grid.
 *
 * @defaultValue `LLLL y` (e.g., "November 2022").
 * @param date - The date representing the month.
 * @param options - Optional configuration for the date formatting library.
 * @param dateLib - An optional instance of the date formatting library.
 * @returns The ARIA label for the month grid.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function a(e,t,r){return(r??new n/* .DateLib */.Z1(t)).format(e,"LLLL y")}/**
 * @ignore
 * @deprecated Use {@link labelGrid} instead.
 */const i=a;//# sourceMappingURL=labelGrid.js.map
},54428:function(e,t,r){r.d(t,{R:()=>a});/* ESM import */var n=r(65469);/**
 * Generates the label for a day grid cell when the calendar is not interactive.
 *
 * @param date - The date to format.
 * @param modifiers - Optional modifiers providing context for the day.
 * @param options - Optional configuration for the date formatting library.
 * @param dateLib - An optional instance of the date formatting library.
 * @returns The label for the day grid cell.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function a(e,t,r,a){let i=(a??new n/* .DateLib */.Z1(r)).format(e,"PPPP");if(t?.today){i=`Today, ${i}`}return i}//# sourceMappingURL=labelGridcell.js.map
},60327:function(e,t,r){r.d(t,{N:()=>n});/**
 * Generates the ARIA label for the months dropdown.
 *
 * @defaultValue `"Choose the Month"`
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the months dropdown.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function n(e){return"Choose the Month"}//# sourceMappingURL=labelMonthDropdown.js.map
},88234:function(e,t,r){r.d(t,{g:()=>n});/**
 * Generates the ARIA label for the navigation toolbar.
 *
 * @defaultValue `""`
 * @returns The ARIA label for the navigation toolbar.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function n(){return""}//# sourceMappingURL=labelNav.js.map
},96368:function(e,t,r){r.d(t,{T:()=>n});/**
 * Generates the ARIA label for the "next month" button.
 *
 * @defaultValue `"Go to the Next Month"`
 * @param month - The date representing the next month, or `undefined` if there
 *   is no next month.
 * @returns The ARIA label for the "next month" button.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function n(e){return"Go to the Next Month"}//# sourceMappingURL=labelNext.js.map
},55341:function(e,t,r){r.d(t,{b:()=>n});/**
 * Generates the ARIA label for the "previous month" button.
 *
 * @defaultValue `"Go to the Previous Month"`
 * @param month - The date representing the previous month, or `undefined` if
 *   there is no previous month.
 * @returns The ARIA label for the "previous month" button.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function n(e){return"Go to the Previous Month"}//# sourceMappingURL=labelPrevious.js.map
},58095:function(e,t,r){r.d(t,{j:()=>n});/**
 * Generates the ARIA label for the week number cell (the first cell in a row).
 *
 * @defaultValue `Week ${weekNumber}`
 * @param weekNumber - The number of the week.
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the week number cell.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function n(e,t){return`Week ${e}`}//# sourceMappingURL=labelWeekNumber.js.map
},82779:function(e,t,r){r.d(t,{E:()=>n});/**
 * Generates the ARIA label for the week number header element.
 *
 * @defaultValue `"Week Number"`
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the week number header.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function n(e){return"Week Number"}//# sourceMappingURL=labelWeekNumberHeader.js.map
},79231:function(e,t,r){r.d(t,{O:()=>a});/* ESM import */var n=r(65469);/**
 * Generates the ARIA label for a weekday column header.
 *
 * @defaultValue `"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"`
 * @param date - The date representing the weekday.
 * @param options - Optional configuration for the date formatting library.
 * @param dateLib - An optional instance of the date formatting library.
 * @returns The ARIA label for the weekday column header.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function a(e,t,r){return(r??new n/* .DateLib */.Z1(t)).format(e,"cccc")}//# sourceMappingURL=labelWeekday.js.map
},58634:function(e,t,r){r.d(t,{I:()=>n});/**
 * Generates the ARIA label for the years dropdown.
 *
 * @defaultValue `"Choose the Year"`
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the years dropdown.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function n(e){return"Choose the Year"}//# sourceMappingURL=labelYearDropdown.js.map
},13796:function(e,t,r){r.d(t,{R:()=>a});/* ESM import */var n=r(50717);/**
 * Hook to manage multiple-date selection in the DayPicker component.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns An object containing the selected dates, a function to select dates,
 *   and a function to check if a date is selected.
 */function a(e,t){const{selected:r,required:a,onSelect:i}=e;const[o,s]=(0,n/* .useControlledValue */.O)(r,i?r:undefined);const d=!i?o:r;const{isSameDay:l}=t;const c=e=>{return d?.some(t=>l(t,e))??false};const{min:u,max:v}=e;const f=(e,t,r)=>{let n=[...d??[]];if(c(e)){if(d?.length===u){// Min value reached, do nothing
return}if(a&&d?.length===1){// Required value already selected do nothing
return}n=d?.filter(t=>!l(t,e))}else{if(d?.length===v){// Max value reached, reset the selection to date
n=[e]}else{// Add the date to the selection
n=[...n,e]}}if(!i){s(n)}i?.(n,e,t,r);return n};return{selected:d,select:f,isSelected:c}}//# sourceMappingURL=useMulti.js.map
},9998:function(e,t,r){r.d(t,{C:()=>s});/* ESM import */var n=r(50717);/* ESM import */var a=r(16257);/* ESM import */var i=r(99217);/* ESM import */var o=r(94232);/**
 * Hook to manage range selection in the DayPicker component.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns An object containing the selected range, a function to select a
 *   range, and a function to check if a date is within the range.
 */function s(e,t){const{disabled:r,excludeDisabled:s,selected:d,required:l,onSelect:c}=e;const[u,v]=(0,n/* .useControlledValue */.O)(d,c?d:undefined);const f=!c?u:d;const p=e=>f&&(0,o/* .rangeIncludesDate */.C)(f,e,false,t);const h=(n,o,d)=>{const{min:u,max:p}=e;const h=n?(0,a/* .addToRange */.n)(n,f,u,p,l,t):undefined;if(s&&r&&h?.from&&h.to){if((0,i/* .rangeContainsModifiers */.C)({from:h.from,to:h.to},r,t)){// if a disabled days is found, the range is reset
h.from=n;h.to=undefined}}if(!c){v(h)}c?.(h,n,o,d);return h};return{selected:f,select:h,isSelected:p}}//# sourceMappingURL=useRange.js.map
},67413:function(e,t,r){r.d(t,{G:()=>a});/* ESM import */var n=r(50717);/**
 * Hook to manage single-date selection in the DayPicker component.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns An object containing the selected date, a function to select a date,
 *   and a function to check if a date is selected.
 */function a(e,t){const{selected:r,required:a,onSelect:i}=e;const[o,s]=(0,n/* .useControlledValue */.O)(r,i?r:undefined);const d=!i?o:r;const{isSameDay:l}=t;const c=e=>{return d?l(d,e):false};const u=(e,t,r)=>{let n=e;if(!a&&d&&d&&l(e,d)){// If the date is the same, clear the selection.
n=undefined}if(!i){s(n)}if(a){i?.(n,e,t,r)}else{i?.(n,e,t,r)}return n};return{selected:d,select:u,isSelected:c}}//# sourceMappingURL=useSingle.js.map
},84332:function(e,t,r){r.d(t,{_:()=>v});/* ESM import */var n=r(87363);/* ESM import */var a=r(6156);const i=e=>{if(e instanceof HTMLElement)return e;return null};const o=e=>[...e.querySelectorAll("[data-animated-month]")??[]];const s=e=>i(e.querySelector("[data-animated-month]"));const d=e=>i(e.querySelector("[data-animated-caption]"));const l=e=>i(e.querySelector("[data-animated-weeks]"));const c=e=>i(e.querySelector("[data-animated-nav]"));const u=e=>i(e.querySelector("[data-animated-weekdays]"));/**
 * Handles animations for transitioning between months in the DayPicker
 * component.
 *
 * @private
 * @param rootElRef - A reference to the root element of the DayPicker
 *   component.
 * @param enabled - Whether animations are enabled.
 * @param options - Configuration options for the animation, including class
 *   names, months, focused day, and the date utility library.
 */function v(e,t,{classNames:r,months:i,focused:v,dateLib:f}){const p=(0,n.useRef)(null);const h=(0,n.useRef)(i);const m=(0,n.useRef)(false);(0,n.useLayoutEffect)(()=>{// get previous months before updating the previous months ref
const n=h.current;// update previous months ref for next effect trigger
h.current=i;if(!t||!e.current||// safety check because the ref can be set to anything by consumers
!(e.current instanceof HTMLElement)||// validation required for the animation to work as expected
i.length===0||n.length===0||i.length!==n.length){return}const g=f.isSameMonth(i[0].date,n[0].date);const b=f.isAfter(i[0].date,n[0].date);const _=b?r[a/* .Animation.caption_after_enter */.fw.caption_after_enter]:r[a/* .Animation.caption_before_enter */.fw.caption_before_enter];const y=b?r[a/* .Animation.weeks_after_enter */.fw.weeks_after_enter]:r[a/* .Animation.weeks_before_enter */.fw.weeks_before_enter];// get previous root element snapshot before updating the snapshot ref
const w=p.current;// update snapshot for next effect trigger
const x=e.current.cloneNode(true);if(x instanceof HTMLElement){// if this effect is triggered while animating, we need to clean up the new root snapshot
// to put it in the same state as when not animating, to correctly animate the next month change
const e=o(x);e.forEach(e=>{if(!(e instanceof HTMLElement))return;// remove the old month snapshots from the new root snapshot
const t=s(e);if(t&&e.contains(t)){e.removeChild(t)}// remove animation classes from the new month snapshots
const r=d(e);if(r){r.classList.remove(_)}const n=l(e);if(n){n.classList.remove(y)}});p.current=x}else{p.current=null}if(m.current||g||// skip animation if a day is focused because it can cause issues to the animation and is better for a11y
v){return}const Z=w instanceof HTMLElement?o(w):[];const k=o(e.current);if(k&&k.every(e=>e instanceof HTMLElement)&&Z&&Z.every(e=>e instanceof HTMLElement)){m.current=true;const t=[];// set isolation to isolate to isolate the stacking context during animation
e.current.style.isolation="isolate";// set z-index to 1 to ensure the nav is clickable over the other elements being animated
const n=c(e.current);if(n){n.style.zIndex="1"}k.forEach((i,o)=>{const s=Z[o];if(!s){return}// animate new displayed month
i.style.position="relative";i.style.overflow="hidden";const c=d(i);if(c){c.classList.add(_)}const v=l(i);if(v){v.classList.add(y)}// animate new displayed month end
const f=()=>{m.current=false;if(e.current){e.current.style.isolation=""}if(n){n.style.zIndex=""}if(c){c.classList.remove(_)}if(v){v.classList.remove(y)}i.style.position="";i.style.overflow="";if(i.contains(s)){i.removeChild(s)}};t.push(f);// animate old displayed month
s.style.pointerEvents="none";s.style.position="absolute";s.style.overflow="hidden";s.setAttribute("aria-hidden","true");// hide the weekdays container of the old month and only the new one
const p=u(s);if(p){p.style.opacity="0"}const h=d(s);if(h){h.classList.add(b?r[a/* .Animation.caption_before_exit */.fw.caption_before_exit]:r[a/* .Animation.caption_after_exit */.fw.caption_after_exit]);h.addEventListener("animationend",f)}const g=l(s);if(g){g.classList.add(b?r[a/* .Animation.weeks_before_exit */.fw.weeks_before_exit]:r[a/* .Animation.weeks_after_exit */.fw.weeks_after_exit])}i.insertBefore(s,i.firstChild)})}})}//# sourceMappingURL=useAnimation.js.map
},30833:function(e,t,r){r.d(t,{G:()=>p});/* ESM import */var n=r(87363);/* ESM import */var a=r(11732);/* ESM import */var i=r(84517);/* ESM import */var o=r(6341);/* ESM import */var s=r(82283);/* ESM import */var d=r(97018);/* ESM import */var l=r(38540);/* ESM import */var c=r(22663);/* ESM import */var u=r(88490);/* ESM import */var v=r(60049);/* ESM import */var f=r(50717);/**
 * Provides the calendar object to work with the calendar in custom components.
 *
 * @private
 * @param props - The DayPicker props related to calendar configuration.
 * @param dateLib - The date utility library instance.
 * @returns The calendar object containing displayed days, weeks, months, and
 *   navigation methods.
 */function p(e,t){const[r,p]=(0,l/* .getNavMonths */.P)(e,t);const{startOfMonth:h,endOfMonth:m}=t;const g=(0,s/* .getInitialMonth */.Z)(e,r,p,t);const[b,_]=(0,f/* .useControlledValue */.O)(g,// initialMonth is always computed from props.month if provided
e.month?g:undefined);(0,n.useEffect)(()=>{const n=(0,s/* .getInitialMonth */.Z)(e,r,p,t);_(n);// eslint-disable-next-line react-hooks/exhaustive-deps
},[e.timeZone]);/** The months displayed in the calendar. */const y=(0,o/* .getDisplayMonths */.b)(b,p,e,t);/** The dates displayed in the calendar. */const w=(0,a/* .getDates */.i)(y,e.endMonth?m(e.endMonth):undefined,e,t);/** The Months displayed in the calendar. */const x=(0,d/* .getMonths */.w)(y,w,e,t);/** The Weeks displayed in the calendar. */const Z=(0,v/* .getWeeks */.K)(x);/** The Days displayed in the calendar. */const k=(0,i/* .getDays */.g)(x);const E=(0,u/* .getPreviousMonth */.S)(b,r,e,t);const C=(0,c/* .getNextMonth */.f)(b,p,e,t);const{disableNavigation:M,onMonthChange:W}=e;const D=e=>Z.some(t=>t.days.some(t=>t.isEqualTo(e)));const T=e=>{if(M){return}let t=h(e);// if month is before start, use the first month instead
if(r&&t<h(r)){t=h(r)}// if month is after endMonth, use the last month instead
if(p&&t>h(p)){t=h(p)}_(t);W?.(t)};const S=e=>{// is this check necessary?
if(D(e)){return}T(e.date)};const B={months:x,weeks:Z,days:k,navStart:r,navEnd:p,previousMonth:E,nextMonth:C,goToMonth:T,goToDay:S};return B}//# sourceMappingURL=useCalendar.js.map
},5293:function(e,t,r){r.d(t,{Z:()=>a,k:()=>i});/* ESM import */var n=r(87363);/** @ignore */const a=(0,n.createContext)(undefined);/**
 * Provides access to the DayPicker context, which includes properties and
 * methods to interact with the DayPicker component. This hook must be used
 * within a custom component.
 *
 * @template T - Use this type to refine the returned context type with a
 *   specific selection mode.
 * @returns The context to work with DayPicker.
 * @throws {Error} If the hook is used outside of a DayPicker provider.
 * @group Hooks
 * @see https://daypicker.dev/guides/custom-components
 */function i(){const e=(0,n.useContext)(a);if(e===undefined){throw new Error("useDayPicker() must be used within a custom component.")}return e}//# sourceMappingURL=useDayPicker.js.map
},35625:function(e,t,r){r.d(t,{K:()=>o});/* ESM import */var n=r(87363);/* ESM import */var a=r(79173);/* ESM import */var i=r(84110);/**
 * Manages focus behavior for the DayPicker component, including setting,
 * moving, and blurring focus on calendar days.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param calendar - The calendar object containing the displayed days and
 *   months.
 * @param getModifiers - A function to retrieve modifiers for a given day.
 * @param isSelected - A function to check if a date is selected.
 * @param dateLib - The date utility library instance.
 * @returns An object containing focus-related methods and the currently focused
 *   day.
 */function o(e,t,r,o,s){const{autoFocus:d}=e;const[l,c]=(0,n.useState)();const u=(0,a/* .calculateFocusTarget */.k)(t.days,r,o||(()=>false),l);const[v,f]=(0,n.useState)(d?u:undefined);const p=()=>{c(v);f(undefined)};const h=(r,n)=>{if(!v)return;const a=(0,i/* .getNextFocus */.j)(r,n,v,t.navStart,t.navEnd,e,s);if(!a)return;t.goToDay(a);f(a)};const m=e=>{return Boolean(u?.isEqualTo(e))};const g={isFocusTarget:m,setFocused:f,focused:v,blur:p,moveFocus:h};return g}//# sourceMappingURL=useFocus.js.map
},70162:function(e,t,r){r.d(t,{c:()=>o});/* ESM import */var n=r(13796);/* ESM import */var a=r(9998);/* ESM import */var i=r(67413);/**
 * Determines the appropriate selection hook to use based on the selection mode
 * and returns the corresponding selection object.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns The selection object for the specified mode, or `undefined` if no
 *   mode is set.
 */function o(e,t){const r=(0,i/* .useSingle */.G)(e,t);const o=(0,n/* .useMulti */.R)(e,t);const s=(0,a/* .useRange */.C)(e,t);switch(e.mode){case"single":return r;case"multiple":return o;case"range":return s;default:return undefined}}//# sourceMappingURL=useSelection.js.map
},16257:function(e,t,r){r.d(t,{n:()=>a});/* ESM import */var n=r(65469);/**
 * Adds a date to an existing range, considering constraints like minimum and
 * maximum range size.
 *
 * @param date - The date to add to the range.
 * @param initialRange - The initial range to which the date will be added.
 * @param min - The minimum number of days in the range.
 * @param max - The maximum number of days in the range.
 * @param required - Whether the range must always include at least one date.
 * @param dateLib - The date utility library instance.
 * @returns The updated date range, or `undefined` if the range is cleared.
 * @group Utilities
 */function a(e,t,r=0,i=0,o=false,s=n/* .defaultDateLib */.zk){const{from:d,to:l}=t||{};const{isSameDay:c,isAfter:u,isBefore:v}=s;let f;if(!d&&!l){// the range is empty, add the date
f={from:e,to:r>0?undefined:e}}else if(d&&!l){// adding date to an incomplete range
if(c(d,e)){// adding a date equal to the start of the range
if(o){f={from:d,to:undefined}}else{f=undefined}}else if(v(e,d)){// adding a date before the start of the range
f={from:e,to:d}}else{// adding a date after the start of the range
f={from:d,to:e}}}else if(d&&l){// adding date to a complete range
if(c(d,e)&&c(l,e)){// adding a date that is equal to both start and end of the range
if(o){f={from:d,to:l}}else{f=undefined}}else if(c(d,e)){// adding a date equal to the the start of the range
f={from:d,to:r>0?undefined:e}}else if(c(l,e)){// adding a dare equal to the end of the range
f={from:e,to:r>0?undefined:e}}else if(v(e,d)){// adding a date before the start of the range
f={from:e,to:l}}else if(u(e,d)){// adding a date after the start of the range
f={from:d,to:e}}else if(u(e,l)){// adding a date after the end of the range
f={from:d,to:e}}else{throw new Error("Invalid range")}}// check for min / max
if(f?.from&&f?.to){const t=s.differenceInCalendarDays(f.to,f.from);if(i>0&&t>i){f={from:e,to:undefined}}else if(r>1&&t<r){f={from:e,to:undefined}}}return f}//# sourceMappingURL=addToRange.js.map
},52804:function(e,t,r){r.d(t,{W:()=>o});/* ESM import */var n=r(65469);/* ESM import */var a=r(94232);/* ESM import */var i=r(20311);/**
 * Checks if a given date matches at least one of the specified {@link Matcher}.
 *
 * @param date - The date to check.
 * @param matchers - The matchers to check against.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the date matches any of the matchers, otherwise `false`.
 * @group Utilities
 */function o(e,t,r=n/* .defaultDateLib */.zk){const s=!Array.isArray(t)?[t]:t;const{isSameDay:d,differenceInCalendarDays:l,isAfter:c}=r;return s.some(t=>{if(typeof t==="boolean"){return t}if(r.isDate(t)){return d(e,t)}if((0,i/* .isDatesArray */.jA)(t,r)){return t.includes(e)}if((0,i/* .isDateRange */.Ws)(t)){return(0,a/* .rangeIncludesDate */.C)(t,e,false,r)}if((0,i/* .isDayOfWeekType */.U4)(t)){if(!Array.isArray(t.dayOfWeek)){return t.dayOfWeek===e.getDay()}return t.dayOfWeek.includes(e.getDay())}if((0,i/* .isDateInterval */.Zl)(t)){const r=l(t.before,e);const n=l(t.after,e);const a=r>0;const i=n<0;const o=c(t.before,t.after);if(o){return i&&a}else{return a||i}}if((0,i/* .isDateAfterType */.FZ)(t)){return l(e,t.after)>0}if((0,i/* .isDateBeforeType */.Vp)(t)){return l(t.before,e)>0}if(typeof t==="function"){return t(e)}return false})}/**
 * @private
 * @deprecated Use {@link dateMatchModifiers} instead.
 */const s=/* unused pure expression or super */null&&o;//# sourceMappingURL=dateMatchModifiers.js.map
},7493:function(e,t,r){r.d(t,{L:()=>a});/* ESM import */var n=r(65469);/**
 * Checks if a date range contains one or more specified days of the week.
 *
 * @since 9.2.2
 * @param range - The date range to check.
 * @param dayOfWeek - The day(s) of the week to check for (`0-6`, where `0` is
 *   Sunday).
 * @param dateLib - The date utility library instance.
 * @returns `true` if the range contains the specified day(s) of the week,
 *   otherwise `false`.
 * @group Utilities
 */function a(e,t,r=n/* .defaultDateLib */.zk){const i=!Array.isArray(t)?[t]:t;let o=e.from;const s=r.differenceInCalendarDays(e.to,e.from);// iterate at maximum one week or the total days if the range is shorter than one week
const d=Math.min(s,6);for(let e=0;e<=d;e++){if(i.includes(o.getDay())){return true}o=r.addDays(o,1)}return false}//# sourceMappingURL=rangeContainsDayOfWeek.js.map
},99217:function(e,t,r){r.d(t,{C:()=>l});/* ESM import */var n=r(65469);/* ESM import */var a=r(52804);/* ESM import */var i=r(7493);/* ESM import */var o=r(94232);/* ESM import */var s=r(1297);/* ESM import */var d=r(20311);/**
 * Checks if a date range contains dates that match the given modifiers.
 *
 * @since 9.2.2
 * @param range - The date range to check.
 * @param modifiers - The modifiers to match against.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the range contains matching dates, otherwise `false`.
 * @group Utilities
 */function l(e,t,r=n/* .defaultDateLib */.zk){const c=Array.isArray(t)?t:[t];// Defer function matchers evaluation as they are the least performant.
const u=c.filter(e=>typeof e!=="function");const v=u.some(t=>{if(typeof t==="boolean")return t;if(r.isDate(t)){return(0,o/* .rangeIncludesDate */.C)(e,t,false,r)}if((0,d/* .isDatesArray */.jA)(t,r)){return t.some(t=>(0,o/* .rangeIncludesDate */.C)(e,t,false,r))}if((0,d/* .isDateRange */.Ws)(t)){if(t.from&&t.to){return(0,s/* .rangeOverlaps */.z)(e,{from:t.from,to:t.to},r)}return false}if((0,d/* .isDayOfWeekType */.U4)(t)){return(0,i/* .rangeContainsDayOfWeek */.L)(e,t.dayOfWeek,r)}if((0,d/* .isDateInterval */.Zl)(t)){const n=r.isAfter(t.before,t.after);if(n){return(0,s/* .rangeOverlaps */.z)(e,{from:r.addDays(t.after,1),to:r.addDays(t.before,-1)},r)}return(0,a/* .dateMatchModifiers */.W)(e.from,t,r)||(0,a/* .dateMatchModifiers */.W)(e.to,t,r)}if((0,d/* .isDateAfterType */.FZ)(t)||(0,d/* .isDateBeforeType */.Vp)(t)){return(0,a/* .dateMatchModifiers */.W)(e.from,t,r)||(0,a/* .dateMatchModifiers */.W)(e.to,t,r)}return false});if(v){return true}const f=c.filter(e=>typeof e==="function");if(f.length){let t=e.from;const n=r.differenceInCalendarDays(e.to,e.from);for(let e=0;e<=n;e++){if(f.some(e=>e(t))){return true}t=r.addDays(t,1)}}return false}//# sourceMappingURL=rangeContainsModifiers.js.map
},94232:function(e,t,r){r.d(t,{C:()=>a});/* ESM import */var n=r(65469);/**
 * Checks if a given date is within a specified date range.
 *
 * @since 9.0.0
 * @param range - The date range to check against.
 * @param date - The date to check.
 * @param excludeEnds - If `true`, the range's start and end dates are excluded.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the date is within the range, otherwise `false`.
 * @group Utilities
 */function a(e,t,r=false,i=n/* .defaultDateLib */.zk){let{from:o,to:s}=e;const{differenceInCalendarDays:d,isSameDay:l}=i;if(o&&s){const e=d(s,o)<0;if(e){[o,s]=[s,o]}const n=d(t,o)>=(r?1:0)&&d(s,t)>=(r?1:0);return n}if(!r&&s){return l(s,t)}if(!r&&o){return l(o,t)}return false}/**
 * @private
 * @deprecated Use {@link rangeIncludesDate} instead.
 */const i=(e,t)=>a(e,t,false,defaultDateLib);//# sourceMappingURL=rangeIncludesDate.js.map
},1297:function(e,t,r){r.d(t,{z:()=>i});/* ESM import */var n=r(65469);/* ESM import */var a=r(94232);/**
 * Determines if two date ranges overlap.
 *
 * @since 9.2.2
 * @param rangeLeft - The first date range.
 * @param rangeRight - The second date range.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the ranges overlap, otherwise `false`.
 * @group Utilities
 */function i(e,t,r=n/* .defaultDateLib */.zk){return(0,a/* .rangeIncludesDate */.C)(e,t.from,false,r)||(0,a/* .rangeIncludesDate */.C)(e,t.to,false,r)||(0,a/* .rangeIncludesDate */.C)(t,e.from,false,r)||(0,a/* .rangeIncludesDate */.C)(t,e.to,false,r)}//# sourceMappingURL=rangeOverlaps.js.map
},20311:function(e,t,r){r.d(t,{FZ:()=>i,U4:()=>s,Vp:()=>o,Ws:()=>a,Zl:()=>n,jA:()=>d});/**
 * Checks if the given value is of type {@link DateInterval}.
 *
 * @param matcher - The value to check.
 * @returns `true` if the value is a {@link DateInterval}, otherwise `false`.
 * @group Utilities
 */function n(e){return Boolean(e&&typeof e==="object"&&"before"in e&&"after"in e)}/**
 * Checks if the given value is of type {@link DateRange}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DateRange}, otherwise `false`.
 * @group Utilities
 */function a(e){return Boolean(e&&typeof e==="object"&&"from"in e)}/**
 * Checks if the given value is of type {@link DateAfter}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DateAfter}, otherwise `false`.
 * @group Utilities
 */function i(e){return Boolean(e&&typeof e==="object"&&"after"in e)}/**
 * Checks if the given value is of type {@link DateBefore}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DateBefore}, otherwise `false`.
 * @group Utilities
 */function o(e){return Boolean(e&&typeof e==="object"&&"before"in e)}/**
 * Checks if the given value is of type {@link DayOfWeek}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DayOfWeek}, otherwise `false`.
 * @group Utilities
 */function s(e){return Boolean(e&&typeof e==="object"&&"dayOfWeek"in e)}/**
 * Checks if the given value is an array of valid dates.
 *
 * @private
 * @param value - The value to check.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the value is an array of valid dates, otherwise `false`.
 */function d(e,t){return Array.isArray(e)&&e.every(t.isDate)}//# sourceMappingURL=typeguards.js.map
},51805:function(e,t,r){r.d(t,{r:()=>n});function n(e,t){const r=e<0?"-":"";const n=Math.abs(e).toString().padStart(t,"0");return r+n}},92639:function(e,t,r){r.d(t,{j:()=>a});let n={};function a(){return n}function i(e){n=e}},46083:function(e,t,r){r.d(t,{$:()=>u});/* ESM import */var n=r(29750);/* ESM import */var a=r(65719);/* ESM import */var i=r(74155);/* ESM import */var o=r(12347);/* ESM import */var s=r(7898);/* ESM import */var d=r(51805);/* ESM import */var l=r(12471);const c={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"};/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */const u={// Era
G:function(e,t,r){const n=e.getFullYear()>0?1:0;switch(t){// AD, BC
case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"});// A, B
case"GGGGG":return r.era(n,{width:"narrow"});// Anno Domini, Before Christ
case"GGGG":default:return r.era(n,{width:"wide"})}},// Year
y:function(e,t,r){// Ordinal number
if(t==="yo"){const t=e.getFullYear();// Returns 1 for 1 BC (which is year 0 in JavaScript)
const n=t>0?t:1-t;return r.ordinalNumber(n,{unit:"year"})}return l/* .lightFormatters.y */.o.y(e,t)},// Local week-numbering year
Y:function(e,t,r,n){const a=(0,s/* .getWeekYear */.c)(e,n);// Returns 1 for 1 BC (which is year 0 in JavaScript)
const i=a>0?a:1-a;// Two digit year
if(t==="YY"){const e=i%100;return(0,d/* .addLeadingZeros */.r)(e,2)}// Ordinal number
if(t==="Yo"){return r.ordinalNumber(i,{unit:"year"})}// Padding
return(0,d/* .addLeadingZeros */.r)(i,t.length)},// ISO week-numbering year
R:function(e,t){const r=(0,i/* .getISOWeekYear */.L)(e);// Padding
return(0,d/* .addLeadingZeros */.r)(r,t.length)},// Extended year. This is a single number designating the year of this calendar system.
// The main difference between `y` and `u` localizers are B.C. years:
// | Year | `y` | `u` |
// |------|-----|-----|
// | AC 1 |   1 |   1 |
// | BC 1 |   1 |   0 |
// | BC 2 |   2 |  -1 |
// Also `yy` always returns the last two digits of a year,
// while `uu` pads single digit years to 2 characters and returns other years unchanged.
u:function(e,t){const r=e.getFullYear();return(0,d/* .addLeadingZeros */.r)(r,t.length)},// Quarter
Q:function(e,t,r){const n=Math.ceil((e.getMonth()+1)/3);switch(t){// 1, 2, 3, 4
case"Q":return String(n);// 01, 02, 03, 04
case"QQ":return(0,d/* .addLeadingZeros */.r)(n,2);// 1st, 2nd, 3rd, 4th
case"Qo":return r.ordinalNumber(n,{unit:"quarter"});// Q1, Q2, Q3, Q4
case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"});// 1, 2, 3, 4 (narrow quarter; could be not numerical)
case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});// 1st quarter, 2nd quarter, ...
case"QQQQ":default:return r.quarter(n,{width:"wide",context:"formatting"})}},// Stand-alone quarter
q:function(e,t,r){const n=Math.ceil((e.getMonth()+1)/3);switch(t){// 1, 2, 3, 4
case"q":return String(n);// 01, 02, 03, 04
case"qq":return(0,d/* .addLeadingZeros */.r)(n,2);// 1st, 2nd, 3rd, 4th
case"qo":return r.ordinalNumber(n,{unit:"quarter"});// Q1, Q2, Q3, Q4
case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"});// 1, 2, 3, 4 (narrow quarter; could be not numerical)
case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});// 1st quarter, 2nd quarter, ...
case"qqqq":default:return r.quarter(n,{width:"wide",context:"standalone"})}},// Month
M:function(e,t,r){const n=e.getMonth();switch(t){case"M":case"MM":return l/* .lightFormatters.M */.o.M(e,t);// 1st, 2nd, ..., 12th
case"Mo":return r.ordinalNumber(n+1,{unit:"month"});// Jan, Feb, ..., Dec
case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"});// J, F, ..., D
case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});// January, February, ..., December
case"MMMM":default:return r.month(n,{width:"wide",context:"formatting"})}},// Stand-alone month
L:function(e,t,r){const n=e.getMonth();switch(t){// 1, 2, ..., 12
case"L":return String(n+1);// 01, 02, ..., 12
case"LL":return(0,d/* .addLeadingZeros */.r)(n+1,2);// 1st, 2nd, ..., 12th
case"Lo":return r.ordinalNumber(n+1,{unit:"month"});// Jan, Feb, ..., Dec
case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"});// J, F, ..., D
case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});// January, February, ..., December
case"LLLL":default:return r.month(n,{width:"wide",context:"standalone"})}},// Local week of year
w:function(e,t,r,n){const a=(0,o/* .getWeek */.Q)(e,n);if(t==="wo"){return r.ordinalNumber(a,{unit:"week"})}return(0,d/* .addLeadingZeros */.r)(a,t.length)},// ISO week of year
I:function(e,t,r){const n=(0,a/* .getISOWeek */.l)(e);if(t==="Io"){return r.ordinalNumber(n,{unit:"week"})}return(0,d/* .addLeadingZeros */.r)(n,t.length)},// Day of the month
d:function(e,t,r){if(t==="do"){return r.ordinalNumber(e.getDate(),{unit:"date"})}return l/* .lightFormatters.d */.o.d(e,t)},// Day of year
D:function(e,t,r){const a=(0,n/* .getDayOfYear */.B)(e);if(t==="Do"){return r.ordinalNumber(a,{unit:"dayOfYear"})}return(0,d/* .addLeadingZeros */.r)(a,t.length)},// Day of week
E:function(e,t,r){const n=e.getDay();switch(t){// Tue
case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"});// T
case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});// Tu
case"EEEEEE":return r.day(n,{width:"short",context:"formatting"});// Tuesday
case"EEEE":default:return r.day(n,{width:"wide",context:"formatting"})}},// Local day of week
e:function(e,t,r,n){const a=e.getDay();const i=(a-n.weekStartsOn+8)%7||7;switch(t){// Numerical value (Nth day of week with current locale or weekStartsOn)
case"e":return String(i);// Padded numerical value
case"ee":return(0,d/* .addLeadingZeros */.r)(i,2);// 1st, 2nd, ..., 7th
case"eo":return r.ordinalNumber(i,{unit:"day"});case"eee":return r.day(a,{width:"abbreviated",context:"formatting"});// T
case"eeeee":return r.day(a,{width:"narrow",context:"formatting"});// Tu
case"eeeeee":return r.day(a,{width:"short",context:"formatting"});// Tuesday
case"eeee":default:return r.day(a,{width:"wide",context:"formatting"})}},// Stand-alone local day of week
c:function(e,t,r,n){const a=e.getDay();const i=(a-n.weekStartsOn+8)%7||7;switch(t){// Numerical value (same as in `e`)
case"c":return String(i);// Padded numerical value
case"cc":return(0,d/* .addLeadingZeros */.r)(i,t.length);// 1st, 2nd, ..., 7th
case"co":return r.ordinalNumber(i,{unit:"day"});case"ccc":return r.day(a,{width:"abbreviated",context:"standalone"});// T
case"ccccc":return r.day(a,{width:"narrow",context:"standalone"});// Tu
case"cccccc":return r.day(a,{width:"short",context:"standalone"});// Tuesday
case"cccc":default:return r.day(a,{width:"wide",context:"standalone"})}},// ISO day of week
i:function(e,t,r){const n=e.getDay();const a=n===0?7:n;switch(t){// 2
case"i":return String(a);// 02
case"ii":return(0,d/* .addLeadingZeros */.r)(a,t.length);// 2nd
case"io":return r.ordinalNumber(a,{unit:"day"});// Tue
case"iii":return r.day(n,{width:"abbreviated",context:"formatting"});// T
case"iiiii":return r.day(n,{width:"narrow",context:"formatting"});// Tu
case"iiiiii":return r.day(n,{width:"short",context:"formatting"});// Tuesday
case"iiii":default:return r.day(n,{width:"wide",context:"formatting"})}},// AM or PM
a:function(e,t,r){const n=e.getHours();const a=n/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(a,{width:"wide",context:"formatting"})}},// AM, PM, midnight, noon
b:function(e,t,r){const n=e.getHours();let a;if(n===12){a=c.noon}else if(n===0){a=c.midnight}else{a=n/12>=1?"pm":"am"}switch(t){case"b":case"bb":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(a,{width:"wide",context:"formatting"})}},// in the morning, in the afternoon, in the evening, at night
B:function(e,t,r){const n=e.getHours();let a;if(n>=17){a=c.evening}else if(n>=12){a=c.afternoon}else if(n>=4){a=c.morning}else{a=c.night}switch(t){case"B":case"BB":case"BBB":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(a,{width:"wide",context:"formatting"})}},// Hour [1-12]
h:function(e,t,r){if(t==="ho"){let t=e.getHours()%12;if(t===0)t=12;return r.ordinalNumber(t,{unit:"hour"})}return l/* .lightFormatters.h */.o.h(e,t)},// Hour [0-23]
H:function(e,t,r){if(t==="Ho"){return r.ordinalNumber(e.getHours(),{unit:"hour"})}return l/* .lightFormatters.H */.o.H(e,t)},// Hour [0-11]
K:function(e,t,r){const n=e.getHours()%12;if(t==="Ko"){return r.ordinalNumber(n,{unit:"hour"})}return(0,d/* .addLeadingZeros */.r)(n,t.length)},// Hour [1-24]
k:function(e,t,r){let n=e.getHours();if(n===0)n=24;if(t==="ko"){return r.ordinalNumber(n,{unit:"hour"})}return(0,d/* .addLeadingZeros */.r)(n,t.length)},// Minute
m:function(e,t,r){if(t==="mo"){return r.ordinalNumber(e.getMinutes(),{unit:"minute"})}return l/* .lightFormatters.m */.o.m(e,t)},// Second
s:function(e,t,r){if(t==="so"){return r.ordinalNumber(e.getSeconds(),{unit:"second"})}return l/* .lightFormatters.s */.o.s(e,t)},// Fraction of second
S:function(e,t){return l/* .lightFormatters.S */.o.S(e,t)},// Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
X:function(e,t,r){const n=e.getTimezoneOffset();if(n===0){return"Z"}switch(t){// Hours and optional minutes
case"X":return f(n);// Hours, minutes and optional seconds without `:` delimiter
// Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
// so this token always has the same output as `XX`
case"XXXX":case"XX":return p(n);// Hours, minutes and optional seconds with `:` delimiter
// Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
// so this token always has the same output as `XXX`
case"XXXXX":case"XXX":default:return p(n,":")}},// Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
x:function(e,t,r){const n=e.getTimezoneOffset();switch(t){// Hours and optional minutes
case"x":return f(n);// Hours, minutes and optional seconds without `:` delimiter
// Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
// so this token always has the same output as `xx`
case"xxxx":case"xx":return p(n);// Hours, minutes and optional seconds with `:` delimiter
// Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
// so this token always has the same output as `xxx`
case"xxxxx":case"xxx":default:return p(n,":")}},// Timezone (GMT)
O:function(e,t,r){const n=e.getTimezoneOffset();switch(t){// Short
case"O":case"OO":case"OOO":return"GMT"+v(n,":");// Long
case"OOOO":default:return"GMT"+p(n,":")}},// Timezone (specific non-location)
z:function(e,t,r){const n=e.getTimezoneOffset();switch(t){// Short
case"z":case"zz":case"zzz":return"GMT"+v(n,":");// Long
case"zzzz":default:return"GMT"+p(n,":")}},// Seconds timestamp
t:function(e,t,r){const n=Math.trunc(+e/1e3);return(0,d/* .addLeadingZeros */.r)(n,t.length)},// Milliseconds timestamp
T:function(e,t,r){return(0,d/* .addLeadingZeros */.r)(+e,t.length)}};function v(e,t=""){const r=e>0?"-":"+";const n=Math.abs(e);const a=Math.trunc(n/60);const i=n%60;if(i===0){return r+String(a)}return r+String(a)+t+(0,d/* .addLeadingZeros */.r)(i,2)}function f(e,t){if(e%60===0){const t=e>0?"-":"+";return t+(0,d/* .addLeadingZeros */.r)(Math.abs(e)/60,2)}return p(e,t)}function p(e,t=""){const r=e>0?"-":"+";const n=Math.abs(e);const a=(0,d/* .addLeadingZeros */.r)(Math.trunc(n/60),2);const i=(0,d/* .addLeadingZeros */.r)(n%60,2);return r+a+t+i}},12471:function(e,t,r){r.d(t,{o:()=>a});/* ESM import */var n=r(51805);/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */const a={// Year
y(e,t){// From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
// | Year     |     y | yy |   yyy |  yyyy | yyyyy |
// |----------|-------|----|-------|-------|-------|
// | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
// | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
// | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
// | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
// | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
const r=e.getFullYear();// Returns 1 for 1 BC (which is year 0 in JavaScript)
const a=r>0?r:1-r;return(0,n/* .addLeadingZeros */.r)(t==="yy"?a%100:a,t.length)},// Month
M(e,t){const r=e.getMonth();return t==="M"?String(r+1):(0,n/* .addLeadingZeros */.r)(r+1,2)},// Day of the month
d(e,t){return(0,n/* .addLeadingZeros */.r)(e.getDate(),t.length)},// AM or PM
a(e,t){const r=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},// Hour [1-12]
h(e,t){return(0,n/* .addLeadingZeros */.r)(e.getHours()%12||12,t.length)},// Hour [0-23]
H(e,t){return(0,n/* .addLeadingZeros */.r)(e.getHours(),t.length)},// Minute
m(e,t){return(0,n/* .addLeadingZeros */.r)(e.getMinutes(),t.length)},// Second
s(e,t){return(0,n/* .addLeadingZeros */.r)(e.getSeconds(),t.length)},// Fraction of second
S(e,t){const r=t.length;const a=e.getMilliseconds();const i=Math.trunc(a*Math.pow(10,r-3));return(0,n/* .addLeadingZeros */.r)(i,t.length)}}},15475:function(e,t,r){r.d(t,{G:()=>o});const n=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}};const a=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}};const i=(e,t)=>{const r=e.match(/(P+)(p+)?/)||[];const i=r[1];const o=r[2];if(!o){return n(e,t)}let s;switch(i){case"P":s=t.dateTime({width:"short"});break;case"PP":s=t.dateTime({width:"medium"});break;case"PPP":s=t.dateTime({width:"long"});break;case"PPPP":default:s=t.dateTime({width:"full"});break}return s.replace("{{date}}",n(i,t)).replace("{{time}}",a(o,t))};const o={p:a,P:i}},29486:function(e,t,r){r.d(t,{D:()=>a});/* ESM import */var n=r(28898);/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */function a(e){const t=(0,n/* .toDate */.Q)(e);const r=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));r.setUTCFullYear(t.getFullYear());return+e-+r}},90457:function(e,t,r){r.d(t,{d:()=>a});/* ESM import */var n=r(85941);function a(e,...t){const r=n/* .constructFrom.bind */.L.bind(null,e||t.find(e=>typeof e==="object"));return t.map(r)}},15176:function(e,t,r){r.d(t,{T:()=>a});/* ESM import */var n=r(90457);function a(e,t){const[r,a]=(0,n/* .normalizeDates */.d)(e,t.start,t.end);return{start:r,end:a}}},69814:function(e,t,r){r.d(t,{DD:()=>d,Do:()=>s,Iu:()=>o});const n=/^D+$/;const a=/^Y+$/;const i=["D","DD","YY","YYYY"];function o(e){return n.test(e)}function s(e){return a.test(e)}function d(e,t,r){const n=l(e,t,r);console.warn(n);if(i.includes(e))throw new RangeError(n)}function l(e,t,r){const n=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}},55722:function(e,t,r){r.d(t,{E:()=>i});/* ESM import */var n=r(85941);/* ESM import */var a=r(28898);/**
 * The {@link addDays} function options.
 *//**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be added.
 * @param options - An object with options
 *
 * @returns The new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */function i(e,t,r){const i=(0,a/* .toDate */.Q)(e,r?.in);if(isNaN(t))return(0,n/* .constructFrom */.L)(r?.in||e,NaN);// If 0 days, no-op to avoid changing times in the hour before end of DST
if(!t)return i;i.setDate(i.getDate()+t);return i}// Fallback for modularized imports:
/* unused ESM default export */var o=/* unused pure expression or super */null&&i},636:function(e,t,r){r.d(t,{z:()=>i});/* ESM import */var n=r(85941);/* ESM import */var a=r(28898);/**
 * The {@link addMonths} function options.
 *//**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of months to be added.
 * @param options - The options object
 *
 * @returns The new date with the months added
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 *
 * // Add one month to 30 January 2023:
 * const result = addMonths(new Date(2023, 0, 30), 1)
 * //=> Tue Feb 28 2023 00:00:00
 */function i(e,t,r){const i=(0,a/* .toDate */.Q)(e,r?.in);if(isNaN(t))return(0,n/* .constructFrom */.L)(r?.in||e,NaN);if(!t){// If 0 months, no-op to avoid changing times in the hour before end of DST
return i}const o=i.getDate();// The JS Date object supports date math by accepting out-of-bounds values for
// month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
// new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
// want except that dates will wrap around the end of a month, meaning that
// new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
// we'll default to the end of the desired month by adding 1 to the desired
// month and using a date of 0 to back up one day to the end of the desired
// month.
const s=(0,n/* .constructFrom */.L)(r?.in||e,i.getTime());s.setMonth(i.getMonth()+t+1,0);const d=s.getDate();if(o>=d){// If we're already at the end of the month, then this is the correct date
// and we're done.
return s}else{// Otherwise, we now know that setting the original day-of-month value won't
// cause an overflow, so set the desired day-of-month. Note that we can't
// just set the date of `endOfDesiredMonth` because that object may have had
// its time changed in the unusual case where where a DST transition was on
// the last day of the month and its local time was in the hour skipped or
// repeated next to a DST transition.  So we use `date` instead which is
// guaranteed to still have the original time.
i.setFullYear(s.getFullYear(),s.getMonth(),o);return i}}// Fallback for modularized imports:
/* unused ESM default export */var o=/* unused pure expression or super */null&&i},46263:function(e,t,r){r.d(t,{j:()=>a});/* ESM import */var n=r(55722);/**
 * The {@link addWeeks} function options.
 *//**
 * @name addWeeks
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of weeks to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of weeks to be added.
 * @param options - An object with options
 *
 * @returns The new date with the weeks added
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * const result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */function a(e,t,r){return(0,n/* .addDays */.E)(e,t*7,r)}// Fallback for modularized imports:
/* unused ESM default export */var i=/* unused pure expression or super */null&&a},90423:function(e,t,r){r.d(t,{B:()=>a});/* ESM import */var n=r(636);/**
 * The {@link addYears} function options.
 *//**
 * @name addYears
 * @category Year Helpers
 * @summary Add the specified number of years to the given date.
 *
 * @description
 * Add the specified number of years to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type.
 *
 * @param date - The date to be changed
 * @param amount - The amount of years to be added.
 * @param options - The options
 *
 * @returns The new date with the years added
 *
 * @example
 * // Add 5 years to 1 September 2014:
 * const result = addYears(new Date(2014, 8, 1), 5)
 * //=> Sun Sep 01 2019 00:00:00
 */function a(e,t,r){return(0,n/* .addMonths */.z)(e,t*12,r)}// Fallback for modularized imports:
/* unused ESM default export */var i=/* unused pure expression or super */null&&a},22050:function(e,t,r){r.d(t,{I7:()=>C,dP:()=>d,jE:()=>s});/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 *//**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */const n=7;/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occurs every 4 years, except for years that are divisible by 100 and not divisible by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */const a=365.2425;/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "./constants/date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */const i=Math.pow(10,8)*24*60*60*1e3;/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "./constants/date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */const o=/* unused pure expression or super */null&&-i;/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */const s=6048e5;/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */const d=864e5;/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */const l=6e4;/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */const c=36e5;/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */const u=1e3;/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */const v=525600;/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */const f=43200;/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */const p=1440;/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */const h=60;/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */const m=3;/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */const g=12;/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */const b=4;/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */const _=3600;/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */const y=60;/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */const w=/* unused pure expression or super */null&&_*24;/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */const x=/* unused pure expression or super */null&&w*7;/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */const Z=/* unused pure expression or super */null&&w*a;/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */const k=/* unused pure expression or super */null&&Z/12;/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */const E=/* unused pure expression or super */null&&k*3;/**
 * @constant
 * @name constructFromSymbol
 * @summary Symbol enabling Date extensions to inherit properties from the reference date.
 *
 * The symbol is used to enable the `constructFrom` function to construct a date
 * using a reference date and a value. It allows to transfer extra properties
 * from the reference date to the new date. It's useful for extensions like
 * [`TZDate`](https://github.com/date-fns/tz) that accept a time zone as
 * a constructor argument.
 */const C=Symbol.for("constructDateFrom")},85941:function(e,t,r){r.d(t,{L:()=>a});/* ESM import */var n=r(22050);/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * Starting from v3.7.0, it allows to construct a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from "./constructFrom/date-fns";
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date>(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use constructor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   );
 * }
 */function a(e,t){if(typeof e==="function")return e(t);if(e&&typeof e==="object"&&n/* .constructFromSymbol */.I7 in e)return e[n/* .constructFromSymbol */.I7](t);if(e instanceof Date)return new e.constructor(t);return new Date(t)}// Fallback for modularized imports:
/* unused ESM default export */var i=/* unused pure expression or super */null&&a},23279:function(e,t,r){r.d(t,{w:()=>s});/* ESM import */var n=r(29486);/* ESM import */var a=r(90457);/* ESM import */var i=r(22050);/* ESM import */var o=r(51066);/**
 * The {@link differenceInCalendarDays} function options.
 *//**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - The options object
 *
 * @returns The number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */function s(e,t,r){const[s,d]=(0,a/* .normalizeDates */.d)(r?.in,e,t);const l=(0,o/* .startOfDay */.b)(s);const c=(0,o/* .startOfDay */.b)(d);const u=+l-(0,n/* .getTimezoneOffsetInMilliseconds */.D)(l);const v=+c-(0,n/* .getTimezoneOffsetInMilliseconds */.D)(c);// Round the number of days to the nearest integer because the number of
// milliseconds in a day is not constant (e.g. it's different in the week of
// the daylight saving time clock shift).
return Math.round((u-v)/i/* .millisecondsInDay */.dP)}// Fallback for modularized imports:
/* unused ESM default export */var d=/* unused pure expression or super */null&&s},36430:function(e,t,r){r.d(t,{T:()=>a});/* ESM import */var n=r(90457);/**
 * The {@link differenceInCalendarMonths} function options.
 *//**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of calendar months
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */function a(e,t,r){const[a,i]=(0,n/* .normalizeDates */.d)(r?.in,e,t);const o=a.getFullYear()-i.getFullYear();const s=a.getMonth()-i.getMonth();return o*12+s}// Fallback for modularized imports:
/* unused ESM default export */var i=/* unused pure expression or super */null&&a},83475:function(e,t,r){r.d(t,{R:()=>i});/* ESM import */var n=r(15176);/* ESM import */var a=r(85941);/**
 * The {@link eachMonthOfInterval} function options.
 *//**
 * The {@link eachMonthOfInterval} function result type. It resolves the proper data type.
 *//**
 * @name eachMonthOfInterval
 * @category Interval Helpers
 * @summary Return the array of months within the specified time interval.
 *
 * @description
 * Return the array of months within the specified time interval.
 *
 * @typeParam IntervalType - Interval type.
 * @typeParam Options - Options type.
 *
 * @param interval - The interval.
 * @param options - An object with options.
 *
 * @returns The array with starts of months from the month of the interval start to the month of the interval end
 *
 * @example
 * // Each month between 6 February 2014 and 10 August 2014:
 * const result = eachMonthOfInterval({
 *   start: new Date(2014, 1, 6),
 *   end: new Date(2014, 7, 10)
 * })
 * //=> [
 * //   Sat Feb 01 2014 00:00:00,
 * //   Sat Mar 01 2014 00:00:00,
 * //   Tue Apr 01 2014 00:00:00,
 * //   Thu May 01 2014 00:00:00,
 * //   Sun Jun 01 2014 00:00:00,
 * //   Tue Jul 01 2014 00:00:00,
 * //   Fri Aug 01 2014 00:00:00
 * // ]
 */function i(e,t){const{start:r,end:i}=(0,n/* .normalizeInterval */.T)(t?.in,e);let o=+r>+i;const s=o?+r:+i;const d=o?i:r;d.setHours(0,0,0,0);d.setDate(1);let l=t?.step??1;if(!l)return[];if(l<0){l=-l;o=!o}const c=[];while(+d<=s){c.push((0,a/* .constructFrom */.L)(r,d));d.setMonth(d.getMonth()+l)}return o?c.reverse():c}// Fallback for modularized imports:
/* unused ESM default export */var o=/* unused pure expression or super */null&&i},13470:function(e,t,r){r.d(t,{g:()=>a});/* ESM import */var n=r(41041);/**
 * The {@link endOfISOWeek} function options.
 *//**
 * @name endOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the end of an ISO week for the given date.
 *
 * @description
 * Return the end of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of an ISO week
 *
 * @example
 * // The end of an ISO week for 2 September 2014 11:55:00:
 * const result = endOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Sep 07 2014 23:59:59.999
 */function a(e,t){return(0,n/* .endOfWeek */.v)(e,{...t,weekStartsOn:1})}// Fallback for modularized imports:
/* unused ESM default export */var i=/* unused pure expression or super */null&&a},28353:function(e,t,r){r.d(t,{V:()=>a});/* ESM import */var n=r(28898);/**
 * The {@link endOfMonth} function options.
 *//**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a month
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */function a(e,t){const r=(0,n/* .toDate */.Q)(e,t?.in);const a=r.getMonth();r.setFullYear(r.getFullYear(),a+1,0);r.setHours(23,59,59,999);return r}// Fallback for modularized imports:
/* unused ESM default export */var i=/* unused pure expression or super */null&&a},41041:function(e,t,r){r.d(t,{v:()=>i});/* ESM import */var n=r(92639);/* ESM import */var a=r(28898);/**
 * The {@link endOfWeek} function options.
 *//**
 * @name endOfWeek
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a week
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 23:59:59.999
 */function i(e,t){const r=(0,n/* .getDefaultOptions */.j)();const i=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0;const o=(0,a/* .toDate */.Q)(e,t?.in);const s=o.getDay();const d=(s<i?-7:0)+6-(s-i);o.setDate(o.getDate()+d);o.setHours(23,59,59,999);return o}// Fallback for modularized imports:
/* unused ESM default export */var o=/* unused pure expression or super */null&&i},45827:function(e,t,r){r.d(t,{w:()=>a});/* ESM import */var n=r(28898);/**
 * The {@link endOfYear} function options.
 *//**
 * @name endOfYear
 * @category Year Helpers
 * @summary Return the end of a year for the given date.
 *
 * @description
 * Return the end of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The end of a year
 *
 * @example
 * // The end of a year for 2 September 2014 11:55:00:
 * const result = endOfYear(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Wed Dec 31 2014 23:59:59.999
 */function a(e,t){const r=(0,n/* .toDate */.Q)(e,t?.in);const a=r.getFullYear();r.setFullYear(a+1,0,0);r.setHours(23,59,59,999);return r}// Fallback for modularized imports:
/* unused ESM default export */var i=/* unused pure expression or super */null&&a},17989:function(e,t,r){r.d(t,{WU:()=>h});/* ESM import */var n=r(79237);/* ESM import */var a=r(92639);/* ESM import */var i=r(46083);/* ESM import */var o=r(15475);/* ESM import */var s=r(69814);/* ESM import */var d=r(1173);/* ESM import */var l=r(28898);// Rexports of internal for libraries to use.
// See: https://github.com/date-fns/date-fns/issues/3638#issuecomment-1877082874
// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const c=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const u=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;const v=/^'([^]*?)'?$/;const f=/''/g;const p=/[a-zA-Z]/;/**
 * The {@link format} function options.
 *//**
 * @name format
 * @alias formatDate
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear](https://date-fns.org/docs/getISOWeekYear)
 *    and [getWeekYear](https://date-fns.org/docs/getWeekYear)).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param date - The original date
 * @param format - The string of tokens
 * @param options - An object with options
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 * @throws `options.locale` must contain `localize` property
 * @throws `options.locale` must contain `formatLong` property
 * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */function h(e,t,r){const v=(0,a/* .getDefaultOptions */.j)();const f=r?.locale??v.locale??n/* .enUS */._;const h=r?.firstWeekContainsDate??r?.locale?.options?.firstWeekContainsDate??v.firstWeekContainsDate??v.locale?.options?.firstWeekContainsDate??1;const g=r?.weekStartsOn??r?.locale?.options?.weekStartsOn??v.weekStartsOn??v.locale?.options?.weekStartsOn??0;const b=(0,l/* .toDate */.Q)(e,r?.in);if(!(0,d/* .isValid */.J)(b)){throw new RangeError("Invalid time value")}let _=t.match(u).map(e=>{const t=e[0];if(t==="p"||t==="P"){const r=o/* .longFormatters */.G[t];return r(e,f.formatLong)}return e}).join("").match(c).map(e=>{// Replace two single quote characters with one single quote character
if(e==="''"){return{isToken:false,value:"'"}}const t=e[0];if(t==="'"){return{isToken:false,value:m(e)}}if(i/* .formatters */.$[t]){return{isToken:true,value:e}}if(t.match(p)){throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`")}return{isToken:false,value:e}});// invoke localize preprocessor (only for french locales at the moment)
if(f.localize.preprocessor){_=f.localize.preprocessor(b,_)}const y={firstWeekContainsDate:h,weekStartsOn:g,locale:f};return _.map(n=>{if(!n.isToken)return n.value;const a=n.value;if(!r?.useAdditionalWeekYearTokens&&(0,s/* .isProtectedWeekYearToken */.Do)(a)||!r?.useAdditionalDayOfYearTokens&&(0,s/* .isProtectedDayOfYearToken */.Iu)(a)){(0,s/* .warnOrThrowProtectedError */.DD)(a,t,String(e))}const o=i/* .formatters */.$[a[0]];return o(b,a,f.localize,y)}).join("")}function m(e){const t=e.match(v);if(!t){return e}return t[1].replace(f,"'")}// Fallback for modularized imports:
/* unused ESM default export */var g=/* unused pure expression or super */null&&h},29750:function(e,t,r){r.d(t,{B:()=>o});/* ESM import */var n=r(23279);/* ESM import */var a=r(35523);/* ESM import */var i=r(28898);/**
 * The {@link getDayOfYear} function options.
 *//**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @param date - The given date
 * @param options - The options
 *
 * @returns The day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * const result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */function o(e,t){const r=(0,i/* .toDate */.Q)(e,t?.in);const o=(0,n/* .differenceInCalendarDays */.w)(r,(0,a/* .startOfYear */.e)(r));const s=o+1;return s}// Fallback for modularized imports:
/* unused ESM default export */var s=/* unused pure expression or super */null&&o},12309:function(e,t,r){r.d(t,{N:()=>i});/* ESM import */var n=r(85941);/* ESM import */var a=r(28898);/**
 * The {@link getDaysInMonth} function options.
 *//**
 * @name getDaysInMonth
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date, considering the context if provided.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The number of days in a month
 *
 * @example
 * // How many days are in February 2000?
 * const result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */function i(e,t){const r=(0,a/* .toDate */.Q)(e,t?.in);const i=r.getFullYear();const o=r.getMonth();const s=(0,n/* .constructFrom */.L)(r,0);s.setFullYear(i,o+1,0);s.setHours(0,0,0,0);return s.getDate()}// Fallback for modularized imports:
/* unused ESM default export */var o=/* unused pure expression or super */null&&i},65719:function(e,t,r){r.d(t,{l:()=>s});/* ESM import */var n=r(22050);/* ESM import */var a=r(44459);/* ESM import */var i=r(47926);/* ESM import */var o=r(28898);/**
 * The {@link getISOWeek} function options.
 *//**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The given date
 * @param options - The options
 *
 * @returns The ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */function s(e,t){const r=(0,o/* .toDate */.Q)(e,t?.in);const s=+(0,a/* .startOfISOWeek */.T)(r)-+(0,i/* .startOfISOWeekYear */.E)(r);// Round the number of weeks to the nearest integer because the number of
// milliseconds in a week is not constant (e.g. it's different in the week of
// the daylight saving time clock shift).
return Math.round(s/n/* .millisecondsInWeek */.jE)+1}// Fallback for modularized imports:
/* unused ESM default export */var d=/* unused pure expression or super */null&&s},74155:function(e,t,r){r.d(t,{L:()=>o});/* ESM import */var n=r(85941);/* ESM import */var a=r(44459);/* ESM import */var i=r(28898);/**
 * The {@link getISOWeekYear} function options.
 *//**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The given date
 *
 * @returns The ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */function o(e,t){const r=(0,i/* .toDate */.Q)(e,t?.in);const o=r.getFullYear();const s=(0,n/* .constructFrom */.L)(r,0);s.setFullYear(o+1,0,4);s.setHours(0,0,0,0);const d=(0,a/* .startOfISOWeek */.T)(s);const l=(0,n/* .constructFrom */.L)(r,0);l.setFullYear(o,0,4);l.setHours(0,0,0,0);const c=(0,a/* .startOfISOWeek */.T)(l);if(r.getTime()>=d.getTime()){return o+1}else if(r.getTime()>=c.getTime()){return o}else{return o-1}}// Fallback for modularized imports:
/* unused ESM default export */var s=/* unused pure expression or super */null&&o},11854:function(e,t,r){r.d(t,{j:()=>a});/* ESM import */var n=r(28898);/**
 * The {@link getMonth} function options.
 *//**
 * @name getMonth
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The month index (0-11)
 *
 * @example
 * // Which month is 29 February 2012?
 * const result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */function a(e,t){return(0,n/* .toDate */.Q)(e,t?.in).getMonth()}// Fallback for modularized imports:
/* unused ESM default export */var i=/* unused pure expression or super */null&&a},12347:function(e,t,r){r.d(t,{Q:()=>s});/* ESM import */var n=r(22050);/* ESM import */var a=r(19397);/* ESM import */var i=r(86009);/* ESM import */var o=r(28898);/**
 * The {@link getWeek} function options.
 *//**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The week
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * const result = getWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * const result = getWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */function s(e,t){const r=(0,o/* .toDate */.Q)(e,t?.in);const s=+(0,a/* .startOfWeek */.z)(r,t)-+(0,i/* .startOfWeekYear */.v)(r,t);// Round the number of weeks to the nearest integer because the number of
// milliseconds in a week is not constant (e.g. it's different in the week of
// the daylight saving time clock shift).
return Math.round(s/n/* .millisecondsInWeek */.jE)+1}// Fallback for modularized imports:
/* unused ESM default export */var d=/* unused pure expression or super */null&&s},7898:function(e,t,r){r.d(t,{c:()=>s});/* ESM import */var n=r(92639);/* ESM import */var a=r(85941);/* ESM import */var i=r(19397);/* ESM import */var o=r(28898);/**
 * The {@link getWeekYear} function options.
 *//**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The local week-numbering year
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * const result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */function s(e,t){const r=(0,o/* .toDate */.Q)(e,t?.in);const s=r.getFullYear();const d=(0,n/* .getDefaultOptions */.j)();const l=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??d.firstWeekContainsDate??d.locale?.options?.firstWeekContainsDate??1;const c=(0,a/* .constructFrom */.L)(t?.in||e,0);c.setFullYear(s+1,0,l);c.setHours(0,0,0,0);const u=(0,i/* .startOfWeek */.z)(c,t);const v=(0,a/* .constructFrom */.L)(t?.in||e,0);v.setFullYear(s,0,l);v.setHours(0,0,0,0);const f=(0,i/* .startOfWeek */.z)(v,t);if(+r>=+u){return s+1}else if(+r>=+f){return s}else{return s-1}}// Fallback for modularized imports:
/* unused ESM default export */var d=/* unused pure expression or super */null&&s},22431:function(e,t,r){r.d(t,{S:()=>a});/* ESM import */var n=r(28898);/**
 * The {@link getYear} function options.
 *//**
 * @name getYear
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The year
 *
 * @example
 * // Which year is 2 July 2014?
 * const result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */function a(e,t){return(0,n/* .toDate */.Q)(e,t?.in).getFullYear()}// Fallback for modularized imports:
/* unused ESM default export */var i=/* unused pure expression or super */null&&a},18474:function(e,t,r){r.d(t,{A:()=>a});/* ESM import */var n=r(28898);/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @param date - The date that should be after the other one to return true
 * @param dateToCompare - The date to compare with
 *
 * @returns The first date is after the second date
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * const result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */function a(e,t){return+(0,n/* .toDate */.Q)(e)>+(0,n/* .toDate */.Q)(t)}// Fallback for modularized imports:
/* unused ESM default export */var i=/* unused pure expression or super */null&&a},32880:function(e,t,r){r.d(t,{R:()=>a});/* ESM import */var n=r(28898);/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @param date - The date that should be before the other one to return true
 * @param dateToCompare - The date to compare with
 *
 * @returns The first date is before the second date
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * const result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */function a(e,t){return+(0,n/* .toDate */.Q)(e)<+(0,n/* .toDate */.Q)(t)}// Fallback for modularized imports:
/* unused ESM default export */var i=/* unused pure expression or super */null&&a},46695:function(e,t,r){r.d(t,{J:()=>n});/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param value - The value to check
 *
 * @returns True if the given value is a date
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */function n(e){return e instanceof Date||typeof e==="object"&&Object.prototype.toString.call(e)==="[object Date]"}// Fallback for modularized imports:
/* unused ESM default export */var a=/* unused pure expression or super */null&&n},17522:function(e,t,r){r.d(t,{K:()=>i});/* ESM import */var n=r(90457);/* ESM import */var a=r(51066);/**
 * The {@link isSameDay} function options.
 *//**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same day (and year and month)
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */function i(e,t,r){const[i,o]=(0,n/* .normalizeDates */.d)(r?.in,e,t);return+(0,a/* .startOfDay */.b)(i)===+(0,a/* .startOfDay */.b)(o)}// Fallback for modularized imports:
/* unused ESM default export */var o=/* unused pure expression or super */null&&i},40756:function(e,t,r){r.d(t,{x:()=>a});/* ESM import */var n=r(90457);/**
 * The {@link isSameMonth} function options.
 *//**
 * @name isSameMonth
 * @category Month Helpers
 * @summary Are the given dates in the same month (and year)?
 *
 * @description
 * Are the given dates in the same month (and year)?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same month (and year)
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 *
 * @example
 * // Are 2 September 2014 and 25 September 2015 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2015, 8, 25))
 * //=> false
 */function a(e,t,r){const[a,i]=(0,n/* .normalizeDates */.d)(r?.in,e,t);return a.getFullYear()===i.getFullYear()&&a.getMonth()===i.getMonth()}// Fallback for modularized imports:
/* unused ESM default export */var i=/* unused pure expression or super */null&&a},26098:function(e,t,r){r.d(t,{F:()=>a});/* ESM import */var n=r(90457);/**
 * The {@link isSameYear} function options.
 *//**
 * @name isSameYear
 * @category Year Helpers
 * @summary Are the given dates in the same year?
 *
 * @description
 * Are the given dates in the same year?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same year
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same year?
 * const result = isSameYear(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 */function a(e,t,r){const[a,i]=(0,n/* .normalizeDates */.d)(r?.in,e,t);return a.getFullYear()===i.getFullYear()}// Fallback for modularized imports:
/* unused ESM default export */var i=/* unused pure expression or super */null&&a},1173:function(e,t,r){r.d(t,{J:()=>i});/* ESM import */var n=r(46695);/* ESM import */var a=r(28898);/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate](https://date-fns.org/docs/toDate)
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param date - The date to check
 *
 * @returns The date is valid
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertible into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */function i(e){return!(!(0,n/* .isDate */.J)(e)&&typeof e!=="number"||isNaN(+(0,a/* .toDate */.Q)(e)))}// Fallback for modularized imports:
/* unused ESM default export */var o=/* unused pure expression or super */null&&i},96018:function(e,t,r){r.d(t,{l:()=>n});function n(e){return (t={})=>{// TODO: Remove String()
const r=t.width?String(t.width):e.defaultWidth;const n=e.formats[r]||e.formats[e.defaultWidth];return n}}},23495:function(e,t,r){r.d(t,{Y:()=>n});/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 *//**
 * The map of localized values for each width.
 *//**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 *//**
 * Converts the unit value to the tuple of values.
 *//**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 *//**
 * The tuple of localized quarter values. The first element represents Q1.
 *//**
 * The tuple of localized day values. The first element represents Sunday.
 *//**
 * The tuple of localized month values. The first element represents January.
 */function n(e){return(t,r)=>{const n=r?.context?String(r.context):"standalone";let a;if(n==="formatting"&&e.formattingValues){const t=e.defaultFormattingWidth||e.defaultWidth;const n=r?.width?String(r.width):t;a=e.formattingValues[n]||e.formattingValues[t]}else{const t=e.defaultWidth;const n=r?.width?String(r.width):e.defaultWidth;a=e.values[n]||e.values[t]}const i=e.argumentCallback?e.argumentCallback(t):t;// @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
return a[i]}}},46588:function(e,t,r){r.d(t,{t:()=>n});function n(e){return(t,r={})=>{const n=r.width;const o=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth];const s=t.match(o);if(!s){return null}const d=s[0];const l=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth];const c=Array.isArray(l)?i(l,e=>e.test(d)):a(l,e=>e.test(d));let u;u=e.valueCallback?e.valueCallback(c):c;u=r.valueCallback?r.valueCallback(u):u;const v=t.slice(d.length);return{value:u,rest:v}}}function a(e,t){for(const r in e){if(Object.prototype.hasOwnProperty.call(e,r)&&t(e[r])){return r}}return undefined}function i(e,t){for(let r=0;r<e.length;r++){if(t(e[r])){return r}}return undefined}},12931:function(e,t,r){r.d(t,{y:()=>n});function n(e){return(t,r={})=>{const n=t.match(e.matchPattern);if(!n)return null;const a=n[0];const i=t.match(e.parsePattern);if(!i)return null;let o=e.valueCallback?e.valueCallback(i[0]):i[0];// [TODO] I challenge you to fix the type
o=r.valueCallback?r.valueCallback(o):o;const s=t.slice(a.length);return{value:o,rest:s}}}},79237:function(e,t,r){r.d(t,{_:()=>d});/* ESM import */var n=r(71953);/* ESM import */var a=r(87049);/* ESM import */var i=r(20040);/* ESM import */var o=r(15318);/* ESM import */var s=r(57113);/**
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
 * @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
 */const d={code:"en-US",formatDistance:n/* .formatDistance */.B,formatLong:a/* .formatLong */.W,formatRelative:i/* .formatRelative */.l,localize:o/* .localize */.N,match:s/* .match */.E,options:{weekStartsOn:0/* Sunday */,firstWeekContainsDate:1}};// Fallback for modularized imports:
/* unused ESM default export */var l=/* unused pure expression or super */null&&d},71953:function(e,t,r){r.d(t,{B:()=>a});const n={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};const a=(e,t,r)=>{let a;const i=n[e];if(typeof i==="string"){a=i}else if(t===1){a=i.one}else{a=i.other.replace("{{count}}",t.toString())}if(r?.addSuffix){if(r.comparison&&r.comparison>0){return"in "+a}else{return a+" ago"}}return a}},87049:function(e,t,r){r.d(t,{W:()=>s});/* ESM import */var n=r(96018);const a={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"};const i={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"};const o={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"};const s={date:(0,n/* .buildFormatLongFn */.l)({formats:a,defaultWidth:"full"}),time:(0,n/* .buildFormatLongFn */.l)({formats:i,defaultWidth:"full"}),dateTime:(0,n/* .buildFormatLongFn */.l)({formats:o,defaultWidth:"full"})}},20040:function(e,t,r){r.d(t,{l:()=>a});const n={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};const a=(e,t,r,a)=>n[e]},15318:function(e,t,r){r.d(t,{N:()=>u});/* ESM import */var n=r(23495);const a={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]};const i={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]};// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const o={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]};const s={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]};const d={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}};const l={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}};const c=(e,t)=>{const r=Number(e);// If ordinal numbers depend on context, for example,
// if they are different for different grammatical genders,
// use `options.unit`.
//
// `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
// 'day', 'hour', 'minute', 'second'.
const n=r%100;if(n>20||n<10){switch(n%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}}return r+"th"};const u={ordinalNumber:c,era:(0,n/* .buildLocalizeFn */.Y)({values:a,defaultWidth:"wide"}),quarter:(0,n/* .buildLocalizeFn */.Y)({values:i,defaultWidth:"wide",argumentCallback:e=>e-1}),month:(0,n/* .buildLocalizeFn */.Y)({values:o,defaultWidth:"wide"}),day:(0,n/* .buildLocalizeFn */.Y)({values:s,defaultWidth:"wide"}),dayPeriod:(0,n/* .buildLocalizeFn */.Y)({values:d,defaultWidth:"wide",formattingValues:l,defaultFormattingWidth:"wide"})}},57113:function(e,t,r){r.d(t,{E:()=>g});/* ESM import */var n=r(46588);/* ESM import */var a=r(12931);const i=/^(\d+)(th|st|nd|rd)?/i;const o=/\d+/i;const s={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i};const d={any:[/^b/i,/^(a|c)/i]};const l={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i};const c={any:[/1/i,/2/i,/3/i,/4/i]};const u={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i};const v={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]};const f={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i};const p={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]};const h={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i};const m={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}};const g={ordinalNumber:(0,a/* .buildMatchPatternFn */.y)({matchPattern:i,parsePattern:o,valueCallback:e=>parseInt(e,10)}),era:(0,n/* .buildMatchFn */.t)({matchPatterns:s,defaultMatchWidth:"wide",parsePatterns:d,defaultParseWidth:"any"}),quarter:(0,n/* .buildMatchFn */.t)({matchPatterns:l,defaultMatchWidth:"wide",parsePatterns:c,defaultParseWidth:"any",valueCallback:e=>e+1}),month:(0,n/* .buildMatchFn */.t)({matchPatterns:u,defaultMatchWidth:"wide",parsePatterns:v,defaultParseWidth:"any"}),day:(0,n/* .buildMatchFn */.t)({matchPatterns:f,defaultMatchWidth:"wide",parsePatterns:p,defaultParseWidth:"any"}),dayPeriod:(0,n/* .buildMatchFn */.t)({matchPatterns:h,defaultMatchWidth:"any",parsePatterns:m,defaultParseWidth:"any"})}},5618:function(e,t,r){r.d(t,{F:()=>i});/* ESM import */var n=r(85941);/* ESM import */var a=r(28898);/**
 * The {@link max} function options.
 *//**
 * @name max
 * @category Common Helpers
 * @summary Return the latest of the given dates.
 *
 * @description
 * Return the latest of the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param dates - The dates to compare
 *
 * @returns The latest of the dates
 *
 * @example
 * // Which of these dates is the latest?
 * const result = max([
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * ])
 * //=> Sun Jul 02 1995 00:00:00
 */function i(e,t){let r;let i=t?.in;e.forEach(e=>{// Use the first date object as the context function
if(!i&&typeof e==="object")i=n/* .constructFrom.bind */.L.bind(null,e);const t=(0,a/* .toDate */.Q)(e,i);if(!r||r<t||isNaN(+t))r=t});return(0,n/* .constructFrom */.L)(i,r||NaN)}// Fallback for modularized imports:
/* unused ESM default export */var o=/* unused pure expression or super */null&&i},20831:function(e,t,r){r.d(t,{V:()=>i});/* ESM import */var n=r(85941);/* ESM import */var a=r(28898);/**
 * The {@link min} function options.
 *//**
 * @name min
 * @category Common Helpers
 * @summary Returns the earliest of the given dates.
 *
 * @description
 * Returns the earliest of the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param dates - The dates to compare
 *
 * @returns The earliest of the dates
 *
 * @example
 * // Which of these dates is the earliest?
 * const result = min([
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * ])
 * //=> Wed Feb 11 1987 00:00:00
 */function i(e,t){let r;let i=t?.in;e.forEach(e=>{// Use the first date object as the context function
if(!i&&typeof e==="object")i=n/* .constructFrom.bind */.L.bind(null,e);const t=(0,a/* .toDate */.Q)(e,i);if(!r||r>t||isNaN(+t))r=t});return(0,n/* .constructFrom */.L)(i,r||NaN)}// Fallback for modularized imports:
/* unused ESM default export */var o=/* unused pure expression or super */null&&i},19706:function(e,t,r){r.d(t,{q:()=>o});/* ESM import */var n=r(85941);/* ESM import */var a=r(12309);/* ESM import */var i=r(28898);/**
 * The {@link setMonth} function options.
 *//**
 * @name setMonth
 * @category Month Helpers
 * @summary Set the month to the given date.
 *
 * @description
 * Set the month to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param month - The month index to set (0-11)
 * @param options - The options
 *
 * @returns The new date with the month set
 *
 * @example
 * // Set February to 1 September 2014:
 * const result = setMonth(new Date(2014, 8, 1), 1)
 * //=> Sat Feb 01 2014 00:00:00
 */function o(e,t,r){const o=(0,i/* .toDate */.Q)(e,r?.in);const s=o.getFullYear();const d=o.getDate();const l=(0,n/* .constructFrom */.L)(r?.in||e,0);l.setFullYear(s,t,15);l.setHours(0,0,0,0);const c=(0,a/* .getDaysInMonth */.N)(l);// Set the earlier date, allows to wrap Jan 31 to Feb 28
o.setMonth(t,Math.min(d,c));return o}// Fallback for modularized imports:
/* unused ESM default export */var s=/* unused pure expression or super */null&&o},16614:function(e,t,r){r.d(t,{M:()=>i});/* ESM import */var n=r(85941);/* ESM import */var a=r(28898);/**
 * The {@link setYear} function options.
 *//**
 * @name setYear
 * @category Year Helpers
 * @summary Set the year to the given date.
 *
 * @description
 * Set the year to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param year - The year of the new date
 * @param options - An object with options.
 *
 * @returns The new date with the year set
 *
 * @example
 * // Set year 2013 to 1 September 2014:
 * const result = setYear(new Date(2014, 8, 1), 2013)
 * //=> Sun Sep 01 2013 00:00:00
 */function i(e,t,r){const i=(0,a/* .toDate */.Q)(e,r?.in);// Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date
if(isNaN(+i))return(0,n/* .constructFrom */.L)(r?.in||e,NaN);i.setFullYear(t);return i}// Fallback for modularized imports:
/* unused ESM default export */var o=/* unused pure expression or super */null&&i},51066:function(e,t,r){r.d(t,{b:()=>a});/* ESM import */var n=r(28898);/**
 * The {@link startOfDay} function options.
 *//**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */function a(e,t){const r=(0,n/* .toDate */.Q)(e,t?.in);r.setHours(0,0,0,0);return r}// Fallback for modularized imports:
/* unused ESM default export */var i=/* unused pure expression or super */null&&a},44459:function(e,t,r){r.d(t,{T:()=>a});/* ESM import */var n=r(19397);/**
 * The {@link startOfISOWeek} function options.
 *//**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */function a(e,t){return(0,n/* .startOfWeek */.z)(e,{...t,weekStartsOn:1})}// Fallback for modularized imports:
/* unused ESM default export */var i=/* unused pure expression or super */null&&a},47926:function(e,t,r){r.d(t,{E:()=>o});/* ESM import */var n=r(85941);/* ESM import */var a=r(74155);/* ESM import */var i=r(44459);/**
 * The {@link startOfISOWeekYear} function options.
 *//**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of an ISO week-numbering year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * const result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */function o(e,t){const r=(0,a/* .getISOWeekYear */.L)(e,t);const o=(0,n/* .constructFrom */.L)(t?.in||e,0);o.setFullYear(r,0,4);o.setHours(0,0,0,0);return(0,i/* .startOfISOWeek */.T)(o)}// Fallback for modularized imports:
/* unused ESM default export */var s=/* unused pure expression or super */null&&o},12432:function(e,t,r){r.d(t,{N:()=>a});/* ESM import */var n=r(28898);/**
 * The {@link startOfMonth} function options.
 *//**
 * @name startOfMonth
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date. The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments.
 * Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed,
 * or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a month
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * const result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */function a(e,t){const r=(0,n/* .toDate */.Q)(e,t?.in);r.setDate(1);r.setHours(0,0,0,0);return r}// Fallback for modularized imports:
/* unused ESM default export */var i=/* unused pure expression or super */null&&a},19397:function(e,t,r){r.d(t,{z:()=>i});/* ESM import */var n=r(92639);/* ESM import */var a=r(28898);/**
 * The {@link startOfWeek} function options.
 *//**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */function i(e,t){const r=(0,n/* .getDefaultOptions */.j)();const i=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0;const o=(0,a/* .toDate */.Q)(e,t?.in);const s=o.getDay();const d=(s<i?7:0)+s-i;o.setDate(o.getDate()-d);o.setHours(0,0,0,0);return o}// Fallback for modularized imports:
/* unused ESM default export */var o=/* unused pure expression or super */null&&i},86009:function(e,t,r){r.d(t,{v:()=>s});/* ESM import */var n=r(92639);/* ESM import */var a=r(85941);/* ESM import */var i=r(7898);/* ESM import */var o=r(19397);/**
 * The {@link startOfWeekYear} function options.
 *//**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week-numbering year
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * const result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */function s(e,t){const r=(0,n/* .getDefaultOptions */.j)();const s=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1;const d=(0,i/* .getWeekYear */.c)(e,t);const l=(0,a/* .constructFrom */.L)(t?.in||e,0);l.setFullYear(d,0,s);l.setHours(0,0,0,0);const c=(0,o/* .startOfWeek */.z)(l,t);return c}// Fallback for modularized imports:
/* unused ESM default export */var d=/* unused pure expression or super */null&&s},35523:function(e,t,r){r.d(t,{e:()=>a});/* ESM import */var n=r(28898);/**
 * The {@link startOfYear} function options.
 *//**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */function a(e,t){const r=(0,n/* .toDate */.Q)(e,t?.in);r.setFullYear(r.getFullYear(),0,1);r.setHours(0,0,0,0);return r}// Fallback for modularized imports:
/* unused ESM default export */var i=/* unused pure expression or super */null&&a},28898:function(e,t,r){r.d(t,{Q:()=>a});/* ESM import */var n=r(85941);/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * Starting from v3.7.0, it clones a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */function a(e,t){// [TODO] Get rid of `toDate` or `constructFrom`?
return(0,n/* .constructFrom */.L)(t||e,e)}// Fallback for modularized imports:
/* unused ESM default export */var i=/* unused pure expression or super */null&&a}}]);