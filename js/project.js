document.addEventListener("DOMContentLoaded", function () {
	function unifyStorageKey(key) {
		return 'pkw-selector.' + key;
	}

	var extensionVersion = chrome.runtime.getManifest().version;
	$('.crx-version').text(extensionVersion);
	// https://developer.chrome.com/extensions/storage.html#method-StorageArea-get
	// http://developer.chrome.com/extensions/manifest.html
	// http://developer.chrome.com/extensions/manifestVersion.html
	// http://stackoverflow.com/questions/7573191/can-i-access-a-property-from-my-manifest-json-in-my-extensions-javascript-files

	$('.loaddata').on('click', '');

	$.ajax({
		url: "http://test.piecesauto24.com/crx-selector-api/index.php?/listSites",
		success: function(data){
			$(".loaddata").html(data);
			var selectedSkin = localStorage.getItem(unifyStorageKey('skin'));

			console.log(unifyStorageKey('skin'), selectedSkin);

			if (selectedSkin !== null) {
				$("#sites li a[data-skin=\"" + selectedSkin + "\"]").click();
			}

			$(".site-url").click(function (e) {
				e.preventDefault();
				chrome.tabs.create({url : $(this).attr('href')});
			});
			$("#sites li a").on("click", function() {
				localStorage.setItem(unifyStorageKey('skin'), $(this).data('skin'));
			});
		}
	});
});
