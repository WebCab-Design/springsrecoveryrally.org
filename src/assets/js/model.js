Jenie.services.tabModel = {
	tabs: [
		{
			name: "Event Details",
			body: "HELLO CONTENT"
		},
		{
			name: "Event Details 2",
			body: "HELLO CONTENT"
		},
		{
			name: "Event Details 3",
			body: "HELLO CONTENT"
		}
	],
	selected: function () {
		var box = document.querySelectorAll('.box');

		for (var i = 0; i < box.length; i++) {
			var boxes = box[i];

			boxes.classList.toggle('active');

		}
	}
}
