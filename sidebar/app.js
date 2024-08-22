const toggle=document.querySelector(".sidebar-toggle");
const close = document.getElementById("c");
const sidebar = document.querySelector(".sidebar");

toggle.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});

close.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});