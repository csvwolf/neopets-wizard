// ==UserScript==
// @name         Neopets Potato Count
// @namespace    https://github.com/csvwolf/neopets-wizard
// @version      1.0
// @description  Fast potato count to get np.
// @author       SkyAo
// @match        http://www.neopets.com/medieval/potatocounter.phtml
// @license      MIT
// @supportURL   https://github.com/csvwolf/neopets-wizard/issues
// @grant        none
// ==/UserScript==

(function() {
  'use strict'
  // avoid to block user account, pls submit by yourself
  document.querySelector('#content > table > tbody > tr > td.content > center > form > input[type=text]').value = [...document.querySelectorAll('#content > table > tbody > tr > td.content > table td')].filter(td => td.querySelector('img')).length
})()
