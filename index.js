const eventAPI = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2308-ACC-PT-WEB-PT-A"
const events = [];
async function getEvents() {
    try{
        const response = await fetch(eventAPI+"/events");
        const data = await response.json();
        for (let index = data.data.length -10; index < data.data.length; index++) {
            events.push(data.data[index]);
        }
        events.forEach(element => {
            createEventsElements(element);
        });
        console.log(events);
    }catch(err){
        console.log(err);
    }
};

getEvents();
render();
function render(){
    createEventsElements();
}
function createEventsElements(event){
    // Create a new <article> element
    const articleElement = document.createElement("article");
    // You can set attributes and content for the <article> if needed
    articleElement.id = event.id;
    
    // Create an <h2> element
    const h2Element = document.createElement("h2");
    h2Element.textContent = `Event Name: ${event.name}`; 
    articleElement.appendChild(h2Element);
    const pDate = document.createElement("p");
    pDate.textContent = `Date :  ${new Intl.DateTimeFormat('en-US',
        { year: 'numeric', month: 'short', day: 'numeric' })
        .format(new Date(event.date))}`;
    articleElement.appendChild(pDate);
    const pLocation = document.createElement("p");
    pLocation.textContent = `Location :  ${event.location}`;
    articleElement.appendChild(pLocation);
    const pDescription = document.createElement("p");
    pDescription.textContent = `Description :  ${event.description}`;
    articleElement.appendChild(pDescription);
    document.body.appendChild(articleElement);
}
