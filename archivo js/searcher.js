// The ID of the search bar must be "searchBar" and the button to run the search "searcher"
const atendees = [
    // ALWAYS USE LOWERCASE
    {name:"elbio ferri", table:"la principal"},
    {name:"maria rosa gallo", table:"la principal"},
    {name:"bernardino toledo", table:"la principal"},
    {name:"daniela toledo", table:"la principal"},
    {name:"roberto ayala", table:"la principal"},
    {name:"lina machuca", table:"la principal"},
    {name:"enzo ferri", table:"la principal"},
    {name:"mary bogarin", table:"la principal"},
    {name:"jose gallo", table:"la principal"},
    {name:"bernadino toledo", table:"la principal"},
    {name:"emanuel toledo", table:"la principal"},

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
    {name:"mirta mocciaro", table:"la 2"},
    {name:"javier lorenzale", table:"la 2"},
    {name:"juan jose gallo", table:"la 2"},
    {name:"emma lorenzale", table:"la 2"},
    {name:"saimon lorenzale", table:"la 2"},

    {name:"martin leguizamon", table:"la 3"},
    {name:"nancy rodriguez", table:"la 3"},
    {name:"belen gauto", table:"la 3"},
    {name:"jeremias block", table:"la 3"},
    {name:"nadia montero", table:"la 3"},
    {name:"bastian block", table:"la 3"},
    {name:"laura ferri", table:"la 3"},
    {name:"matias olguin", table:"la 3"},
    {name:"valeria ferri", table:"la 3"},
    {name:"merida olguin", table:"la 3"},

    {name:"dora oitana", table:"la 4"},
    {name:"victoria petrecone", table:"la 4"},
    {name:"abril gomez", table:"la 4"},
    {name:"alexis castillo", table:"la 4"},
    {name:"andres gomez", table:"la 4"},
    {name:"ruben romero", table:"la 4"},
    {name:"bibiana pensato", table:"la 4"},
    {name:"marina triberti", table:"la 4"},
    {name:"andrea castells", table:"la 4"},
    {name:"gaston castells", table:"la 4"},
    {name:"jesica gonzalez", table:"la 4"},
    {name:"pilar castells", table:"la 4"},

    {name:"alejandra ferri", table:"la 5"},
    {name:"ismael cejas", table:"la 5"},
    {name:"luciana ferri", table:"la 5"},
    {name:"juan hadad", table:"la 5"},
    {name:"dante hadad", table:"la 5"},
    {name:"roman hadad", table:"la 5"},
    {name:"noelia ferri", table:"la 5"},
    {name:"gaston pent", table:"la 5"},
    {name:"jeronimo pent", table:"la 5"},
    {name:"fausto pent", table:"la 5"},
    {name:"martino pent", table:"la 5"},

    {name:"marina karlen", table:"la 6"},
    {name:"martin marino", table:"la 6"},
    {name:"florencia vasconcelos", table:"la 6"},
    {name:"dante marino", table:"la 6"},
    {name:"manuel marino", table:"la 6"},
    {name:"eugenia marino", table:"la 6"},
    {name:"sebastian osudar", table:"la 6"},
    {name:"monica perez", table:"la 6"},
    {name:"miguel blati", table:"la 6"},

    {name:"francisco gallo", table:"la 7"},
    {name:"sandra colavita", table:"la 7"},
    {name:"guillermo gallo", table:"la 7"},
    {name:"francisco gallo junior", table:"la 7"},
    {name:"fernando gallo", table:"la 7"},
    {name:"ian gallo", table:"la 7"},
    {name:"abigail duarte", table:"la 7"},
    {name:"mariana gallo", table:"la 7"},
    {name:"nicole gallo", table:"la 7"},
    {name:"catalina gallo", table:"la 7"},
    {name:"briana gallo", table:"la 7"},

    {name:"martin canton", table:"la 8"},
    {name:"joana cardoso", table:"la 8"},
    {name:"gabriel denegri", table:"la 8"},
    {name:"elias denegri", table:"la 8"},
    {name:"agustin garay", table:"la 8"},
    {name:"cristian marchetti", table:"la 8"},
    {name:"jean messeroux", table:"la 8"},
    {name:"ornella messeroux", table:"la 8"},
    {name:"nicolas parisi", table:"la 8"},
    {name:"mailen luna", table:"la 8"},
    {name:"leandro di leonardi", table:"la 8"},
    {name:"carla belingheri", table:"la 8"},

    {name:"ana ayala", table:"la 9"},
    {name:"julian caleri", table:"la 9"},
    {name:"paola toledo", table:"la 9"},
    {name:"axel toledo", table:"la 9"},
    {name:"rossana toledo", table:"la 9"},
    {name:"thiago toledo", table:"la 9"},
    {name:"luz ayala", table:"la 9"},
    {name:"victor piñanez", table:"la 9"},
    {name:"ruben piñanez", table:"la 9"},
    {name:"francisco piñanez", table:"la 9"},

    {name:"miguel piñanez toledo", table:"la 10"},
    {name:"evelyn paniagua", table:"la 10"},
    {name:"eloy ibalo", table:"la 10"},
    {name:"sofia piñanez", table:"la 10"},
    {name:"idalina piñanez", table:"la 10"},
    {name:"walter alfonso", table:"la 10"},
    {name:"helena alfonso", table:"la 10"},
    {name:"vitalina toledo", table:"la 10"},
    {name:"santiago bogado", table:"la 10"},
    {name:"lucas bogado", table:"la 10"},
    {name:"mateo bogado", table:"la 10"},

    
    {name:"miguel toledo", table:"la 11"},
    {name:"cristina lopez", table:"la 11"},
    {name:"kevin lopez", table:"la 11"},
    {name:"tamara lopez", table:"la 11"},
    {name:"micaela toledo", table:"la 11"},
    {name:"lautaro lopez", table:"la 11"},
    {name:"maria lopez", table:"la 11"},
    {name:"marido maria", table:"la 11"},
    {name:"hijo 1 maria", table:"la 11"},
    {name:"hijo 2 maria", table:"la 11"},

    {name:"sonia pera", table:"la 12"},
    {name:"nahuel toledo", table:"la 12"},
    
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