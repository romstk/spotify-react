async function requestAPI(searchTerm){

    let url = `http://localhost:3000/artists?name_like=${searchTerm}`;

    //Se o searchTerm for vaizio altera a url 
    if(searchTerm === ''){
        url = `http://localhost:3000/artists`;
    }
    
    const result  = await fetch(url);
   
    
    const resultJson = await result.json();
   
    return resultJson;
}