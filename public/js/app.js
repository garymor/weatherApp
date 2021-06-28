const weatherform = document.getElementById('Fweather')
const locationField = document.getElementById('location')
const Jweather = document.getElementById('Jweather')
let displayJson = '' ;
weatherform.addEventListener('submit',(e)=>{
    e.preventDefault();
    fetch(`/weather?location=${locationField.value}`).then(val => val.json()).then(data => {
         spread(JSON.parse(data))
    })
})

function spread(data){
    displayJson = ''
    Object.entries(data.current).forEach(obj => {
        currntTxt = ''
        Object.values(obj).forEach((val,indx) =>{
           symbol = indx == 0 ? '-' : "\n" ;
            currntTxt += ` ${val}  ${symbol} `
        })
        displayJson += currntTxt ;
    })
    Jweather.innerText = displayJson;
    Jweather.style.display="block"

}