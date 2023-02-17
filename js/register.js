var nm = document.getElementById("name");
var mail = document.getElementById("mail");
var mdp = document.getElementById("password");
var rmdp = document.getElementById("rpassword");

nm.addEventListener("input", function(e){
    localStorage.setItem('name', e.target.value)
})
mail.addEventListener("input", function(e){
    localStorage.setItem('mail', e.target.value)
})
mdp.addEventListener("input", function(e){
    localStorage.setItem('password', e.target.value)
})
rmdp.addEventListener("input", function(e){
    localStorage.setItem('rpassword', e.target.value)
})