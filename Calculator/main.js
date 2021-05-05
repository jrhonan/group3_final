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