let characters = []

let fatherElement = document.querySelector("#container-row")

fetch(`https://swapi.dev/api/people`)
  .then(response => response.json())
  .then(data => characters = data.results)
 //.then(()=>printCharacters())


let printCharacters= () => {
   characters.forEach((element) => { 
    // console.log(element)
   //  infoCard.innerHTML =`<div>${element.name}</div>`
   //infoCard
  //  <img src="" alt="">
  //  <div class="overlay"></div>
  //  <div class="text"></div>
   let infoCardElement = document.createElement('div')
   let imgElement = document.createElement('img')
   let overlayElement = document.createElement('div')
   let textElement = document.createElement('div')

   infoCardElement.setAttribute('id', 'infoCard') 
   infoCardElement.classList.add('card'); 
   imgElement.classList.add('efectoImg')
   imgElement.src = './img/sw2.jpg'
   overlayElement.classList.add('overlay')
   textElement.setAttribute('id' , 'infotext')
   textElement.classList.add('text' , 'col-10')
   textElement.innerHTML = element.name 

   fatherElement.appendChild(infoCardElement)
   infoCardElement.appendChild(imgElement)
   infoCardElement.appendChild(overlayElement)
   overlayElement.appendChild(textElement)

     })
  // console.log(characters)
}



/** 
let printCharacters= () => {
      characters.forEach((element) => {
        console.log(characters)

        let characters = document.createElement('li')
        let colLeft = document.createElement('div')
        let colRigth = document.createElement('div')

        colLeft.innerText = element.name
        colRigth.innerText = element

        list.appendChild(characters)
        character.appendChild(colLeft)
        character.appendChild(colRigth)
    })
   }*/




