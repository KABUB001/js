//Fonction de résolution déquation du second dégré
export function equ2Degre(a, b, c){
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);


    const discr = (b * b) - (4  * a * c);

    if(discr < 0){
        console.log("L'équation n'admet pas de solution dans R")
    }
    else if(discr > 0){
        let x = (-b - Math.sqrt(discr)) / (2 * a);
        let y = (-b + Math.sqrt(discr)) / (2 * a);
        console.log("Cette équation admet deux solutions dans R qui sont: " + x + " et " + y);
    }
    else {
        let x = (-b) / (2 * a);
        console.log("Cette équation admet une unique solution qui est: " + x);
    }
}

//Fonction de recupération de saisie pour la fonction equ2Degre
export function catchNum(){
    var tab = [];

for(var i = 0; i < 3; i++){
    do {
        tab[i] = parseInt(prompt("Veuillez entrer le " + (i + 1) + "e nombre entier svp!"));
    }
    while(isNaN(tab[i]))
    
}
return tab;
}




/////Fonction d'affichage d'une addition au travers du DOM
export function afficherCalc(){
    var x = document.getElementById("num1");
    var y = document.getElementById("num2");
    var z = document.getElementById("num3");
    var para = document.getElementById("para");
    
    y.addEventListener('input', function(event){
      var n2 = event.target.value;
      var n1 = x.value;
      var n3 = z.value;
      if (n1 !== "" && n2 !== "" && n3 !== "") {
    
        para.textContent = parseInt(n1) + parseInt(n2) + parseInt(n3)
      }
      else para.textContent = 0;
    })
    x.addEventListener('input', function(event){
        var n1 = event.target.value;
        var n2 = y.value;
        var n3 = z.value;
        if (n1 !== "" && n2 !== "" && n3 !== "") {
      
          para.textContent = parseInt(n1) + parseInt(n2) + parseInt(n3)
        }
        else para.textContent = 0;
    })
    z.addEventListener('input', function(event){
        var n3 = event.target.value;
        var n2 = y.value;
        var n1 = x.value;
        if (n1 !== "" && n2 !== "" && n3 !== "") {
      
          para.textContent = parseInt(n1) + parseInt(n2) + parseInt(n3)
        }
        else para.textContent = 0;
    })
}

///////FOnction d'affichage d'une équation du second dégré
export function afficherCalc2(){
    var x = document.getElementById("num1");
    var y = document.getElementById("num2");
    var z = document.getElementById("num3");
    var para = document.getElementById("para");
    
    y.addEventListener('input', function(event){
      var n2 = event.target.value;
      var n1 = x.value;
      var n3 = z.value;
      if ((n1 !== "" && n2 !== "") && n3 !== "") {
    
        para.textContent = equ2Degre(n1, n2, n3);
      }
      else para.textContent = 0;
    })
    x.addEventListener('input', function(event){
        var n1 = event.target.value;
        var n2 = y.value;
        var n3 = z.value;
        if ((n1 !== "" && n2 !== "") && n3 !== "") {
      
          para.textContent = equ2Degre(n1, n2, n3);
        }
        else para.textContent = 0;
    })
    z.addEventListener('input', function(event){
        var n3 = event.target.value;
        var n2 = y.value;
        var n1 = x.value;
        if ((n1 !== "" && n2 !== "") && n3 !== "") {
      
          para.textContent = equ2Degre(n1, n2, n3);
        }
        else para.textContent = 0;
    })
}


///////FOnction d'affichage d'une couleur renseignée

export function affCoul(){
  var texte = document.getElementById("texte");
  var dv = document.getElementById("dv");
  
  
  texte.addEventListener('input', function(e){
  
      var couleur = e.target.value;
      couleur = couleur.toLowerCase();
      console.log(couleur);
      switch(couleur){
          case 'bleu' : dv.style.backgroundColor = 'blue'
          break;
          case 'rouge' : dv.style.backgroundColor = 'red'
          break;
          case 'noir' : dv.style.backgroundColor = 'black'
          break;
          case 'vert' : dv.style.backgroundColor = 'green'
          break;
          default : ;
      }
      
  }) 
}


export function factorielle(num){
  if (num < 0){
    alert("Veuillez entrer un nombre positif svp");
  }
  else{
    var result = 1;
    for (var i = 2; i <= num; i++){
      result *= i;
      
    }
    return result;
  }
  
  
}



export function factorielle2(num){
  if (num == 0){
    return 1;
  }
  else if (num > 0){
    var result = num * factorielle2((num - 1));
    return result;
    }
    
  else alert("Veuillez entrer un nombre positif svp")
  
}
