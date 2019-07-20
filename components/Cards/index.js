// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then( data => {
        console.log('The Cards API is working Correctly', data);
        const apiData = data.data;
        Cards.appendChild(createCard(apiData))
    } )
    .catch( error => {
        console.log("Error, not able to pull the Cards API Information", error);
    })

    const Cards = document.querySelector('.cards-container');



    const cardArray = [];
    cardArray.forEach(cardLink =>  {
        axios.get(`https://lambda-times-backend.herokuapp.com/${cardLink}`)
        .then( data => {
            console.log('The Cards API is working Correctly', data)
            const apiData = data.data;
            Cards.appendChild(createCard(apiData))
            
        })
        .catch( error => {
            console.log("Error, not able to pull the Cards API Information", error);
        })

    })

    function createCard(card) {


const newCard = document.createElement('div');
newCard.classList.add('card');

const headline = document.createElement('div');
const author = document.createElement('div');
const imgContainer = document.createElement('div');
const img = document.createElement('img');
const byauthor = document.createElement('span');

headline.textContent = `{}`;
author.textContent = `{}`;
imgContainer.textContent = `{}`;
img.src = `{}`;
byauthor.textContent = `{}`;

headline.classList.add('headline');
author.classList.add('author');
imgContainer.classList.add('img-container');
img.classList.add('img');
byauthor.classList.add('span');

newCard.appendChild()



        return createCard
    }