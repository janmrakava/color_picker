const form = document.getElementById('form-section')
const inputColor = document.getElementById('select-color')
const pickMode = document.getElementById('picker')
const colorsDiv = document.getElementById('colors')
const hexValues = document.getElementById('hex')


form.addEventListener('submit', (e) =>{
    e.preventDefault()  
    let data = {
        col: inputColor.value,
        mode: pickMode.value
    }    
    data.col = data.col.substring(1) 


    fetch(`https://www.thecolorapi.com/scheme?hex=${data.col}&mode=${data.mode}`)
        .then(res => res.json())
        .then(data => {
          console.log(data.colors)
          let html = []  
          let html2 = []
          for (let col of data.colors){            
            html += `
            <div class='column' style="background-color:${col.hex.value}">${col.name.value}</div>
             `
             html2 += `
             <div id='hexval'>${col.hex.value}</div>
             `
           
          }
            
            // console.log(data.colors[0].name.value)
            // {data.colors[0].hex.value
            colorsDiv.innerHTML = html
            hexValues.innerHTML = html2 
            
        })
        
})