import { factorielle } from '../EXO1/fonctions.js';
import { factorielle2 } from '../EXO1/fonctions.js';
var inp1 = document.getElementById("numb");
var inp2 = document.getElementById('texte');

inp1.addEventListener("input", function(e){
    var val = e.target.value
    inp2.value = factorielle2(val);
 
})




