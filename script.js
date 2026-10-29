/*
1 meter = 3.281 feet
1 liter = 0.264 gallon 
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("btn-el")
const lenEl = document.getElementById("len-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const feetMeter = 3.281
const gallonLiter = 0.264
const kiloPound = 2.204

btnEl.addEventListener("click", function() {
    const value = Number(inputEl.value)
    lenEl.innerHTML = `
        ${value} meters = ${(value * feetMeter).toFixed(3)} feet |
        ${value} feet = ${(value / feetMeter).toFixed(3)} meters
    `
    volumeEl.innerHTML = `
        ${value} liters = ${(value * gallonLiter).toFixed(3)} gallons |
        ${value} gallons = ${(value / gallonLiter).toFixed(3)} liters
    `
    massEl.innerHTML = `
        ${value} kilos = ${(value * kiloPound).toFixed(3)} pounds |
        ${value} pounds = ${(value / kiloPound).toFixed(3)} kilos
    `
})