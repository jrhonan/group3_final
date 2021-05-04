document.addEventListener("DOMContentLoaded", function (e) {

	const item_rows = document.querySelectorAll(".calculator .row");

	item_rows.forEach(function (row) {
		const select = row.querySelector("input");
		select.addEventListener("change", item_input_listener)
	});
});

function item_input_listener(e) {
	const this_input = e.target;
	const row = this_input.closest(".row");

	row.classList.add("active");
}

const select_menu = document.querySelectorAll(".filter");

select_menu.addEventListener("change", function (e) {
	const item_type = e.target.value;
	const active_item = document.querySelectorAll(".item.active");

	active_items.forEach(function (item) {
		item.classList.remove("active");
	});

	const stoop_items = document.querySelectorAll(`.item.${item_type}`);

	stoop_items.forEach(function (item) {
		item.classList.add("active");
	});
});