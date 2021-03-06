
document.addEventListener("DOMContentLoaded", function () {
	function unifyStorageKey(key) {
		return "pkw-selector." + key;
	}

	
	// https://developer.chrome.com/extensions/storage.html#method-StorageArea-get
	// http://developer.chrome.com/extensions/manifest.html
	// http://developer.chrome.com/extensions/manifestVersion.html
	// http://stackoverflow.com/questions/7573191/can-i-access-a-property-from-my-manifest-json-in-my-extensions-javascript-files

	$.get(
		"http://aws.pkwteile.de/ce/listSites",
		{},
		function (sitesHtml) {
			$(".sites-list").html(sitesHtml);
			var selectedSkin = localStorage.getItem(unifyStorageKey('skin'));

			if (selectedSkin !== null) {
				$("#sites li a[data-skin=\"" + selectedSkin + "\"]").click();
			}

            // $(".site-url").click(function (e) {
                // e.preventDefault();
                // if (e.altKey) {
                    // var ind = $(this).parents('td').index();
                    // $(this).parents('table').find('tr').each(function(){
                        // var link = $(this).find('td:eq('+ind+') a').attr('href');
                        // 
                    // });
// 
                // } else {
                    // 
                // }
            // });

			$("#sites li a").on("click", function () {
				localStorage.setItem(unifyStorageKey("skin"), $(this).data("skin"));
			});
		}
	);

	$.get(
		"http://aws.pkwteile.de/ce/listServers",
		{},
		function (serversHtml) {
			$(".server-deployment").html(serversHtml);
		}
	);

});
