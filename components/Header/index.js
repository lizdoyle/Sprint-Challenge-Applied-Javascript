// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component
const nav = document.querySelector('.header-container');
const dateText = "SMARCH 28, 2019";
const headerTitleText = "Lambda Times";
const headerTempText = "98°";

nav.appendChild(Header(dateText, headerTitleText, headerTempText));


 function Header(dateText, headerTitleText, headerTempText) {

    const header = document.createElement('div');
    


    const date = document.createElement('span');
    const headerTitle = document.createElement('h1');
    const temp = document.createElement('span');

    header.appendChild(date);
    header.appendChild(headerTitle);
    header.appendChild(temp);

    
    date.textContent = dateText;
    headerTitle.textContent = headerTitleText;
    temp.textContent = headerTempText;

   
    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');



return header
}



