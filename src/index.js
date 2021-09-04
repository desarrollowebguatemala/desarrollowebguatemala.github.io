import texto from "/src/type.js";
import menu from "/src/menu.js"
window.addEventListener("DOMContentLoaded", texto())
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });
