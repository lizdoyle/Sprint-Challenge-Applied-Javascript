// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector('.topics');
// Axios to pull the data
axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(data => {
        data.data.topics.forEach(element => {
            topics.appendChild(createTab(element));
        })
        console.log('The Topics API is working Correctly', data)
        // const apiData = data.data;
        // Tabs.appendChild(createTab(apiData));

    } )
    .catch(error => {
        console.log("Error, not able to pull the Topics API Information", error);
    })




    // const tabArray = [apiData];
    // tabArray.forEach( tabLink =>  {
    //     axios.get('https://lambda-times-backend.herokuapp.com/topics')
    //     .then(data => {
    //         console.log('The Topics API is working Correctly', data);
    //         const apiData = data.data;
    //         Tabs.appendChild(createTab(apiData));
            
    //     })
    //     .catch(error => {
    //         console.log("Error, not able to pull the Topics API Information", error);
    //     })

    // })


    function createTab(tabTopic) {
        // structure
        
        const tab = document.createElement('div');


        // classlist
        tab.classList.add('tab');

        // text content
        tab.textContent = tabTopic;

        tab.addEventListener('click', e => {
            e.target.classList.add('active-tab');

        })




        
        return tab
    }

    const cards = document.querySelectorAll('.card');
    const tabs = document.querySelectorAll('.tabs');