
var myRss = null;



document.addEventListener('DOMContentLoaded', function() {
    // BEGIN: abpxx6d04wxr
    // create a new div element
    const div = document.createElement('div');

    // set the innerHTML of the div to some basic HTML
    div.innerHTML = `
            <h1>Hello World!</h1>
            <p>This is some basic HTML created using JavaScript.</p>
    `;

    // append the div to the body of the HTML document
    document.body.appendChild(div);
    // END: abpxx6d04wxr
    flow();

});

//get data
async function getRssData(){
    //get data
    
    const response = await fetch("https://moxie.foxnews.com/google-publisher/latest.xml");
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
    for(var i = 0; i < myRss.length; i++){
        var currentItem = myRss[i];
        var title = currentItem.title;
        var description = currentItem.description;
        var link = currentItem.link;
        var html = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${description}</p>
                <a href="${link}" class="btn btn-primary">Read More</a>
            </div>
        </div>
        `;
        document.body.innerHTML += html;
    }
}