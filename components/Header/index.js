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

 function Header() {

    const header = document.createElement('div');
    header.classList.add('header');


    const date = document.createElement('span');
    const headerTitle = document.createElement('h1');
    const temp = document.createElement('span');

    
    date.textContent = "MARCH 28, 2019";
    headerTitle.textContent = "Lambda Times";
    temp.textContent = "98°";

   
   
    date.classList.add('date');
    headerTitle.classList.add('h1');
    temp.classList.add('temp');

    
    header.appendChild('date');
    header.appendChild('headerTitle');
    header.appendChild('temp');



return Header
}

const nav = document.querySelector('.header-container');
nav.appendChild(Header());

console.log(nav);

