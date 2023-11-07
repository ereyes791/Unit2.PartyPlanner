const eventAPI = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2308-ACC-PT-WEB-PT-A"
let events = [];
async function getEvents() {
    try{
        const response = await fetch(eventAPI+"/events");
        const data = await response.json();
        //get the  last 10 events and push it to the events array
        for(let i = data.data.length-1; i > data.data.length-11; i--){
            events.push(data.data[i]);
        }
        console.log(events);
        console.log(data);
    }catch(err){
        console.log(err);
    }
};
getEvents();
render();
function render(){
// create an article element and add it a p using date,location and descriotion and name in a function called render events
    const article = document.createElement('article');
    article.classList.add('event');
    const p = document.createElement('p');
    p.innerText = `${events[0].date} ${events[0].location} ${events[0].description} ${events[0].name}`;
    article.appendChild(p);
    document.querySelector('body').appendChild(article);
}