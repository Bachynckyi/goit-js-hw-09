!function(){var t=document.querySelector(".buttonStart"),e=document.querySelector(".buttonStop"),r=document.querySelector("body");t.addEventListener("click",(function(){timerId=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));r.style.backgroundColor=t}),1e3),t.setAttribute("disabled",!0),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){clearInterval(timerId),e.setAttribute("disabled",!0),t.removeAttribute("disabled")})),e.setAttribute("disabled",!0)}();
//# sourceMappingURL=01-color-switcher.c55a213f.js.map