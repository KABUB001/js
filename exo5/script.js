var selector = document.getElementById("couleurs");
var dv = document.getElementById("dv");

selector.addEventListener('click', function(){
    selector.addEventListener('change', function(){
        switch(selector.value){
            case "blue" : dv.style.backgroundColor = 'blue'
            break;
            case "red" : dv.style.backgroundColor = 'red'
            break;
            case "black" : dv.style.backgroundColor = 'black'
            break;
            case "green" : dv.style.backgroundColor = 'green'
            break;
            case "pink" : dv.style.backgroundColor = 'pink'
            break;
            case "yellow" : dv.style.backgroundColor = 'yellow'
            break;
            default : ;
        }
    })
})

var texte = document.getElementById("texte");
texte.addEventListener('input', function(e){
    var taille = e.target.value + 'px'
    dv.style.height = taille;
    dv.style.width = taille;
   /* while(parseInt(e.target.value) < 2000) {
        var tail = parseInt(e.target.value) - 100;

    }*/
})
