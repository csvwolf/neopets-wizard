// ==UserScript==
// @name         Neopets Event Guard
// @namespace    https://github.com/csvwolf/neopets-wizard
// @version      1.0
// @description  Watch specific pages and Give Notice if changed
// @author       SkyAo
// @match        http://www.neopets.com/freebies/tarlastoolbar.phtml
// @match        http://www.neopets.com/magma/pool.phtml
// @match        http://www.neopets.com/halloween/garage.phtml
// @license      MIT
// @supportURL   https://github.com/csvwolf/neopets-wizard/issues
// @grant        none
// ==/UserScript==

(function() {
  'use strict'
  const notice = function(ok, word, reloadInterval) {
    if (ok) {
      let shaking = false
      setInterval(() => {
        if (shaking) document.title = `[Notification] ${word}!!`
        else document.title = word
        shaking = !shaking
      }, 200)
    } else {
      setTimeout(() => {
        window.location.reload()
      }, reloadInterval)
    }
  }

  const path = window.location.pathname
  const isTreasure = path.includes('/freebies/tarlastoolbar.phtml')
  const isMagma = path.includes('/magma/pool.phtml')
  const isAttic = path.includes('/halloween/garage.phtml')

  if (isTreasure) {
    const notHere = document.querySelector('.content').innerText.includes('Check back later to see if she\'s here!')
    notice(!notHere, 'Tarla is here now', 5000)
  }

  if (isMagma) {
    const notHere = document.querySelector('.content').innerText.includes('Learn more and try again later.')
    notice(!notHere, 'Magma pool is open', 1000 * 20)
    // Magma Pool time record to console
    if (!notHere) {
      console.info(new Date())
    }
  }

  if (isAttic) {
    const notHere = document.querySelector('.content').innerText.includes('Oops')
    notice(!notHere, 'Attic has stocks', 10000)
  }
})()
