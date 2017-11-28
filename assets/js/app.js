var menu = document.getElementById("menu");
var dropdownMenu = document.getElementById("dropdownMenu");


/* Creando menú */
var appearsDropdownMenu = (function(father, child) {
  father.addEventListener("click", function(){
    child.classList.toggle("invisible");
  });
});

appearsDropdownMenu(menu, dropdownMenu);