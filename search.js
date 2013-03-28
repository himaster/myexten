$(function() {
	$("#projects").on("keyup", "#search", function() {
		var keyword = $.trim($(this).val());

		if (keyword.length > 0) {
			search(keyword);
		} else {
			$("#project-list tr").fadeIn(300);
		}
	});

	$("#projects").on("click", "#clear", function() {
		$("#search").val("");
		$("#project-list tr").fadeIn(300);
	});

	function search(keyword) {
		$("#project-list tr").each(function() {
			var $this = $(this);

			if (($this.data("skin").indexOf(keyword) !== -1) || ($this.data("lang").indexOf(keyword) !== -1)) {
				$this.fadeIn(300);
			} else {
				$this.fadeOut(300);
			}
		});
	}
});
