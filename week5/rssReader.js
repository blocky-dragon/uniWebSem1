
var downloadedRss = null;



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
    getRssData();

});

//get data
async function getRssData(){
    //get data
    const response = await fetch("http://feeds.bbci.co.uk/news/england/london/rss.xml");
    const data = await response.text();
    console.log(data);
    return data;
}