// The ID of the search bar must be "searchBar" and the button to run the search "searcher"
const atendees = [
    // ALWAYS USE LOWERCASE
    {name:"elbio ferri", table:"la principal"},
    {name:"maria rosa gallo", table:"la principal"},
    {name:"bernardino toledo", table:"la principal"},
    {name:"daniela toledo", table:"la principal"},
    {name:"roberto ayala", table:"la principal"},
    {name:"lina", table:"la principal"},
    {name:"enzo ferri", table:"la principal"},
    {name:"mary ferri", table:"la principal"},
    {name:"jose luis gallo", table:"la principal"},
    {name:"david ferri", table:"la 1"},
    {name:"mayra castells", table:"la 1"},
    {name:"cristian bretto", table:"la 1"},
    {name:"luz bretto", table:"la 1"},
    {name:"luciana chiarelli", table:"la 1"},
    {name:"emanuel belmonte", table:"la 1"},
    {name:"fiorella ferri", table:"la 1"},
    {name:"giovanni ferri", table:"la 1"},
    {name:"renata ferri", table:"la 1"},
    {name:"giuliana ferri", table:"la 1"},
    {name:"natalia ferri", table:"la 2"},
    {name:"damian lorenzale", table:"la 2"},
    {name:"mirta lorenzale", table:"la 2"},
    {name:"javier lorenzale", table:"la 2"},
    {name:"laura ferri", table:"la 2"},
    {name:"matias olguin", table:"la 2"},
    {name:"juan jose gallo", table:"la 2"},
    {name:"martin leguizamon", table:"la 3"},
    {name:"nombre", table:"la 3"},
    {name:"nombre", table:"la 3"},
    {name:"nombre", table:"la 3"},
    {name:"nombre", table:"la 3"},
    {name:"nombre", table:"la 3"},
    {name:"nombre", table:"la 3"},
    {name:"luciana ferri", table:"la 4"},
    {name:"valeria ferri", table:"la 4"},
    {name:"noelia ferri", table:"la 4"},
    {name:"nombre", table:"la 5"},
    {name:"leandro di leonardi", table:"la 6"},
    {name:"carla belingheri", table:"la 6"},
    {name:"nombre", table:"la 7"},
    {name:"nombre", table:"la 8"},
    {name:"nombre", table:"la 9"},
    {name:"nombre", table:"la 10"},
    {name:"nombre", table:"la 11"},
    {name:"nombre", table:"la 12"},
    {name:"nombre", table:"la 13"},
    {name:"nombre", table:"la 14"},
    {name:"nombre", table:"la 15"},
    {name:"nombre", table:"la 16"},
    {name:"nombre", table:"la 17"},
]
const searcher = ()=>{
    // gets input value in lowercase without spaces
    let atendant = document.getElementById("searchBar").value.toLowerCase().replace(/\s/g, '');
    // searches value in atendees array matching object name
    for(let i=0; i<atendees.length; i++){
        if(atendees[i].name.replace(/\s/g, '') === atendant){
            alert(`Su número de mesa es ${atendees[i].table}.`)
            break;
        } else if (i===atendees.length-1){
            alert("Su nombre no figura en la lista de invitados.")
        }
    }
}
document.getElementById("searcher").addEventListener("click", (e)=>{
    e.preventDefault();
    searcher();
})