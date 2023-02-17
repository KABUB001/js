var para1 = document.getElementById("para1");
var para2 = document.getElementById("para2");
var para3 = document.getElementById("para3");
var numbers = [1, 2, 3, 4, 5, 6];
//var div = document.getElementsByTagName("div");
let timeCompte = 100;
let inter = null;

function interval(time){
    clearInterval(inter);
    inter = setInterval(()=>{
        para1.textContent = numbers[Math.floor(Math.random() * numbers.length())];
        para2.textContent = numbers[Math.floor(Math.random() * numbers.length())];
        para3.textContent = numbers[Math.floor(Math.random() * numbers.length())];
      },timeCompte)

}

function timeOut(){
    setTimeout(()=>{
       timeCompte += 100;
       clearInterval(inter);
    
       timeOut();
    }, 300)
}
timeOut()



