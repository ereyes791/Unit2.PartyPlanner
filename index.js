const eventAPI = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2308-ACC-PT-WEB-PT-A"

async function getEvents() {
    try{
        const response = await fetch(eventAPI+"/events");
        const data = await response.json();
        console.log(data);
    }catch(err){
        console.log(err);
    }
};
getEvents();