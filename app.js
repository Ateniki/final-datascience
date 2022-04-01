let characters = []

let fatherElement = document.querySelector("#container-row")
let serch = document.querySelector('#serch')

serch.addEventListener("keyup", (event) => {
  fatherElement.innerHTML = '';
  if(event.target.value.toLocaleLowerCase() === "" ){
    printCharacters(characters)
  } else {
    let searching = characters.filter(({name}) => 
    name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()));
    printCharacters(searching)
  }
})




fetch(`https://swapi.dev/api/people`)
  .then(response => response.json())
  .then(data => characters = data.results)
  .then(()=>printCharacters(characters))

let printCharacters= (characters) => {
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
   let textListElement = document.createElement('div')
   let textGenderElement = document.createElement('div')
   let textHeightElement = document.createElement('div')
   let textMassElement = document.createElement('div')
   let textHairElement = document.createElement('div')
   let textSkinElement = document.createElement('div')
   let textBirthElement = document.createElement('div')

   infoCardElement.setAttribute('id', 'infoCard') 
   infoCardElement.classList.add('card'); 
   imgElement.classList.add('efectoImg')
   imgElement.src = './img/sw2.jpg'
   overlayElement.classList.add('overlay')
   textElement.setAttribute('id' , 'infotext')
   textElement.classList.add('name-card')
   textElement.innerHTML = element.name 
   textListElement.classList.add('text-container')
   textGenderElement.setAttribute('id' , 'text-gender')
   textGenderElement.classList.add('text')
   textGenderElement.innerHTML = 'Gender: ' + element.gender
   textHeightElement.setAttribute('id' , 'text-height')
   textHeightElement.classList.add('text')
   textHeightElement.innerHTML = 'Height: ' + element.height
   textMassElement.setAttribute('id' , 'text-mass')
   textMassElement.classList.add('text')
   textMassElement.innerHTML = 'Mass: ' + element.mass
   textHairElement.setAttribute('id' , 'text-hair')
   textHairElement.classList.add('text')
   textHairElement.innerHTML = 'Hair: ' + element.hair_color
   textSkinElement.setAttribute('id' , 'text-skin')
   textSkinElement.classList.add('text')
   textSkinElement.innerHTML = 'Skink: ' + element.skin_color
   textBirthElement.setAttribute('id' , 'text-birth')
   textBirthElement.classList.add('text')
   textBirthElement.innerHTML = 'Birth year: ' + element.birth_year 


   fatherElement.appendChild(infoCardElement)
   infoCardElement.appendChild(imgElement)
   infoCardElement.appendChild(overlayElement)
   overlayElement.appendChild(textElement)
   overlayElement.appendChild(textListElement)
   textListElement.appendChild(textGenderElement)
   textListElement.appendChild(textHeightElement)
   textListElement.appendChild(textMassElement)
   textListElement.appendChild(textHairElement)
   textListElement.appendChild(textSkinElement)
   textListElement.appendChild(textBirthElement)





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




