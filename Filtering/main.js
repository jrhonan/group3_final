document.addEventListener("DOMContentLoaded", function () {
  const select_menu = document.querySelector(".filter");

  select_menu.addEventListener("change", function(e){
    const stoop_type_class = e.target.value;
    const active_items = document.querySelectorAll(".item.active");

    active_items.forEach(function(item){
      item.classList.remove("active");
    });

    const stoop_items = document.querySelectorAll(`.item.${stoop_type_class}`);

    stoop_items.forEach(function(item){
      item.classList.add("active");
    });
  });
});
