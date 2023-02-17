var dv = document.getElementById("dv");
//dv.style.height = '';
//dv.style.width = '';
//var ber = 0;
//dv.style.backgroubndColor = '';
var inp = document.getElementById("text");


let color = ['blue', 'red', 'green', 'orange', 'yellow', 'pink', 'brown', 'purple']
let inter = null;

inp.addEventListener('input', function(e){
    console.log(e.target.value);
    let seco = parseInt(e.target.value);
    clearInterval(inter);
    inter = setInterval(function(){
        var ran = Math.floor(Math.random() * 200 + 100) + 'px';
        
        var gen = Math.floor(Math.random() * color.length);
        
    
        dv.style.backgroundColor = color[gen];
        dv.style.height = ran;
        dv.style.width = ran;
    
    }, seco*100)
})






/*setInterval(function flashDiv(){
    //dv.style.height = dv.style.height == '100px' ? '300px' : '100px';
    //dv.style.width = dv.style.width == '100px' ? '300px' : '100px';
    ber += 1;
    switch(ber){
        case 1 : dv.style.backgroundColor = 'blue';
           dv.style.height = '100px';
           dv.style.width = '100px';
        break;
        case 2 : dv.style.backgroundColor = 'orange'
        dv.style.height = '125px';
           dv.style.width = '125px';
        break;
        case 3 : dv.style.backgroundColor = 'green';
        dv.style.height = '150px';
           dv.style.width = '150px';
        break;
        case 4 : dv.style.backgroundColor = 'brown';
        dv.style.height = '175px';
           dv.style.width = '175px';
        break;
        case 5 : dv.style.backgroundColor = 'red';
        dv.style.height = '200px';
           dv.style.width = '200px';
        break;
        default : ber = 0 ;

    }

}, 500);*/





