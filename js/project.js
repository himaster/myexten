// workaround for local tests
if (chrome.runtime === undefined) {
	chrome.runtime = {getManifest : function () { return {version : 'local-dev'}; }};
}

document.addEventListener("DOMContentLoaded", function () {
	function unifyStorageKey(key) {
		return "pkw-selector." + key;
	}

	$(".crx-version").text(chrome.runtime.getManifest().version);
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

			$(".site-url").click(function (e) {
				e.preventDefault();
				chrome.tabs.create({url : $(this).attr('href')});
			});
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
