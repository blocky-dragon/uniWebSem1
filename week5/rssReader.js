var myRss = null;
var rssSource = "https://moxie.foxnews.com/google-publisher/latest.xml";

var currentSource = 0;
var sources = ["https://moxie.foxnews.com/google-publisher/latest.xml", "https://moxie.foxnews.com/google-publisher/politics.xml"]


document.addEventListener('DOMContentLoaded', function() {
    // Create a new div element

    


    const div = document.createElement('div');

    // Set the innerHTML of the div to some basic HTML
    div.innerHTML = `
            <h1>RSS Parser</h1>
            <p>Current example: Fox news</p>
    `;

    // Append the div to the body of the HTML document
    document.body.appendChild(div);

    // Create a new button element
    const button = document.createElement('button');
    button.innerHTML = 'Change RSS Source';

    const rssContainer = document.createElement('div');
    rssContainer.id = 'rssContainer';


    // Add a click event listener to the button
    button.addEventListener('click', function() {
        // Change the RSS source

        if(currentSource == 0){
            currentSource = 1;
        }
        else{
            currentSource = 0;
        }


        rssSource = sources[currentSource];

        div.innerHTML = `
            <h1>RSS Parser</h1>
            <p>Current example: ${rssSource}</p>
        `;


        // Call the flow function to update the RSS feed
        flow();
    });

    // Append the button to the body of the HTML document
    document.body.appendChild(button);

    // Append the RSS container to the body of the HTML document
    document.body.appendChild(rssContainer);


    flow();
});

//get data
async function getRssData(){
    //get data
    
    const response = await fetch(rssSource);
    const data = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, "text/xml");
    const items = xmlDoc.querySelectorAll("item");
    const itemArray = [];
    for(let i = 0; i < items.length; i++){
        var currentItem = items[i];
        const title = currentItem.querySelector("title").textContent;
        const description = currentItem.querySelector("description").textContent;
        const link = currentItem.querySelector("link").textContent;
        console.log(title);
        itemArray.push({title, description, link});
    }
    return itemArray;

}

async function flow(){
    myRss = await getRssData();
    generateSite();

}


async function generateSite(){



    const rssContainer = document.getElementById('rssContainer');

    rssContainer.innerHTML = "";

    for(var i = 0; i < myRss.length; i++){
        var currentItem = myRss[i];
        var title = currentItem.title;
        var description = currentItem.description;
        var link = currentItem.link;
        var html = `
        <div class="card">
            <div class="card-body">
                <p class="card-title">${title}</p>
                <p class="card-text">${description}</p>
                <a href="${link}" class="btn btn-primary">Read More</a>
            </div>
        </div>
        `;
        rssContainer.innerHTML += html;
    }
}