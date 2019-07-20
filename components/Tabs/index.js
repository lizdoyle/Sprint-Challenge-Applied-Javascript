// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// Axios to pull the data
axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(data => {
        console.log('The Topics API is working Correctly', data)
        const apiData = data.data;
        Tabs.appendChild(createTab(apiData));

    } )
    .catch(error => {
        console.log("Error, not able to pull the Topics API Information", error);
    })


    const Tabs = document.querySelector('.tabs');


    const tabArray = [];
    tabArray.forEach(tabLink =>  {
        axios.get(`https://lambda-times-backend.herokuapp.com/${tabLink}`)
        .then(data => {
            console.log('The Topics API is working Correctly', data);
            const apiData = data.data;
            Tabs.appendChild(createTab(apiData));
            
        })
        .catch(error => {
            console.log("Error, not able to pull the Topics API Information", error);
        })

    })


    function createTab(topic) {
        // structure
       
        const tabTopic = document.createElement('div');
        const tabButton = document.createElement('button');
        const tabTitle = document.createElement('span');


        // classlist
        tabTopic.classList.add('topics');
        tabButton.classList.add('tab');

        // text content
        tabTopic.textContent = `${topic}`;


        // append
        tab.appendChild(tabTopic);
        tab.appendChild(tabTitle);
        tab.appendChild(tabButton);
        
        return createTab
    }