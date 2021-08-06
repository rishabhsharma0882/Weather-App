/*
PROGRAMMER:-RISHABH SHARMA, Prashant Rajput,Pawan Kumar
                         
*/
let input = document.querySelector('#city')
let button = document.querySelector('#search')
let span1 = document.querySelector('#sheher')
let span2 = document.querySelector('#celcius')
let display = document.querySelector('.display')

let container = document.querySelector('.container')
button.addEventListener('click', function () {

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=c938df59955d239bb1d620cbb66a7842`)
        .then((res) => {
            console.log(res.data.main)
            let value = res.data.main.temp
            value = value - 273.15 + " deg Celcius"
            let el = document.querySelector('#new')
            el && el.remove()
            span1.innerHTML = `<b> ${input.value.toUpperCase()} </b>`
            span2.innerHTML = `<b> ${value} </b>`
            span1.style.color = "gold"
            span2.style.color = "white"

        })
        .catch(err => {

            console.log("Error Occurred due to ", err)
            let el = document.createElement('div')
            el.innerHTML = `Sorry Could Not find the Weather of ${input.value} try another city Please`
            el.id = "new"
            el.style.color = "white"
            display.appendChild(el);
            span1.innerHTML = ``
            span2.innerHTML = ``

        })


})
function randomColor() {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return `rgb(${r},${g},${b})`;
}

// setInterval(() => {
//     container.style.boxShadow = `5px 5px  2px 17px  ${randomColor()}`

// }, 2000)