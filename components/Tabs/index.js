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
        tabs.appendChild(createTab(apiData));

    } )
    .catch(error => {
        console.log("Error, not able to pull the Topics API Information", error);
    })



    const tabs = document.querySelector('.tabs');


    const tabArray = [];
    tabArray.forEach(tabLink =>  {
        axios.get(`https://lambda-times-backend.herokuapp.com/${topics}`)
        .then(data => {
            console.log('The Topics API is working Correctly', data);
            const apiData = data.data;
            tabs.appendChild(createTab(apiData));
            
        })
        .catch(err => {
            console.log("Error, not able to pull the Topics API Information", err);
        })

    })


    





    function createTab(topic) {
        // structure
       
        const tabTopic = document.createElement('div');
        const tab = document.createElement('button');
        const tabTitle = document.createElement('span');


        // classlist
        tabTopic.classList.add('topics');
        tab.classList.add('tab');

        // text content
        tabTopic.textContent = `${topic}`;


        // append
        
        return createTab
    }