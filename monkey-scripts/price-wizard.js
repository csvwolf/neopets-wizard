// ==UserScript==
// @name         Neopets Price Wizard
// @namespace    https://github.com/csvwolf/neopets-wizard
// @version      1.0
// @description  Price Wizard To Get the Recommended Retail Price
// @author       SkyAo
// @match        http://www.neopets.com/*
// @license      MIT
// @supportURL   https://github.com/csvwolf/neopets-wizard/issues
// @grant        none
// ==/UserScript==

/**
 * Current Support:
 * 1. Employment Agency
 * 2. Igloo Garage Sale
 * 3. Normal Shops
 */
(function() {
    'use strict';
    function npToNumber(priceString) {
        return Number(priceString.replace('NP', '').replace(',', ''))
    }

    const isEmployment = window.location.pathname.includes('employment.phtml')
    if (isEmployment) {
        const itemNodes = [
            ...document.querySelectorAll('#content > table > tbody > tr .content table tr')
        ].filter(node => node.innerText.includes("Find"))
        const REGEXP = /^Find (\d) of: (.+)Time: (\d+) minutes\s+Base Reward: (.+)$/i
        for (const node of itemNodes) {
            const result = REGEXP.exec(node.textContent)
            const itemNumber = Number(result[1])
            const itemName = result[2]
            const minute = Number(result[3])
            const reward = npToNumber(result[4])

            fetch(`http://localhost:8090/price?item=${itemName}`)
                .then(resp => resp.json())
                .then(data => {
                    const priceString = data.price
                    const price = npToNumber(priceString)
                    if (reward > price * itemNumber && minute >= 40 && reward > 3000) {
                        // Recommend Color
                        node.style = "background-color: rgb(201 255 233);"
                    }

                    node.firstElementChild.innerHTML += `
<br/>Wizard Price: ${priceString} Total Price: ${price * itemNumber} NP
<br/><b style="color: red;">Diff Price: ${reward - price * itemNumber} NP</b>
`
                })
        }
    } else {
        const items = [...document.querySelectorAll('form[name=items_for_sale] tr > td a')].map(a => a.parentNode)
        if (items.length === 0) {
            return
        }
        for (const node of items) {
            const name = node.querySelector('b').textContent
            const sellPrice = npToNumber(node.textContent.match(/[0-9,]+ NP/)[0])
            fetch(`http://localhost:8090/price?item=${name}`)
                .then(resp => resp.json())
                .then(data => {
                    const priceString = data.price
                    const price = npToNumber(priceString)
                    if (sellPrice < price) {
                        // Recommend Color
                        node.style = "background-color: rgb(201 255 233);"
                    }

                    node.firstElementChild.innerHTML += `Wizard Price: ${priceString}<br/>`
                })
        }
    }
})();