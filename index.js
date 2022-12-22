const pages = document.getElementById("pages");
const items = document.querySelectorAll(".list-item");

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function () {
    let active = document.querySelectorAll(".active");
    active[0].className = active[0].className.replace("active", "");
    this.className += " active";
//     console.log(this.className);
  });
}
