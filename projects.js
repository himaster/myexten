var sites = {
	"direkt\/at": {
		"test": "http:\/\/test.teile-direkt.at"
	},
	"direkt\/ch": {
		"test": "http:\/\/test.teile-direkt.ch"
	},
	"direkt\/de": {
		"test": "http:\/\/test.autoteiledirekt.de",
		"prod": "http:\/\/autoteiledirekt.de"
	},
	"direkt\/dk": {
		"test": "http:\/\/test.autodeleshop.dk"
	},
	"direkt\/en": {
		"test": "http:\/\/en.autoteiledirekt.de"
	},
	"direkt\/es": {
		"test": "http:\/\/es.autoteiledirekt.de"
	},
	"direkt\/fi": {
		"test": "http:\/\/test.topautoosat.fi"
	},
	"direkt\/fr": {
		"test": "http:\/\/fr.autoteiledirekt.de"
	},
	"direkt\/it": {
		"test": "http:\/\/it.autoteiledirekt.de"
	},
	"direkt\/nl": {
		"test": "http:\/\/test.besteonderdelen.nl"
	},
	"direkt\/no": {
		"test": "http:\/\/test.reservedeler24.co.no"
	},
	"direkt\/pt": {
		"test": "http:\/\/test.pecasauto24.pt"
	},
	"direkt\/se": {
		"test": "http:\/\/test.reservdelar24.se"
	},

	"ersatz\/at": {
		"test": "http:\/\/at.autoersatzteile.de"
	},
	"ersatz\/ch": {
		"test": "http:\/\/ch.autoersatzteile.de"
	},
	"ersatz\/dk": {
		"test": "http:\/\/dk.autoersatzteile.de"
	},
	"ersatz\/de": {
		"test": "http:\/\/new.autoersatzteile.de",
		"prod": "http:\/\/autoersatzteile.de"
	},
	"ersatz\/en": {
		"test": "http:\/\/test.sparepartstore24.co.uk",
		"prod": "http:\/\/sparepartstore24.co.uk"
	},
	"ersatz\/es": {
		"test": "http:\/\/test.repuestoscoches24.es",
		"prod": "http:\/\/repuestoscoches24.es"
	},
	"ersatz\/it": {
		"test": "http:\/\/test.pezzidiricambio24.it",
		"prod": "http:\/\/pezzidiricambio24.it"
	},
	"ersatz\/fi": {
		"test": "http:\/\/fi.autoersatzteile.de"
	},
	"ersatz\/fr": {
		"test": "http:\/\/test.piecesdiscount24.fr",
		"prod": "http:\/\/piecesdiscount24.fr"
	},
	"ersatz\/nl": {
		"test": "http:\/\/nl.autoersatzteile.de"
	},
	"ersatz\/no": {
		"test": "http:\/\/no.autoersatzteile.de"
	},
	"ersatz\/pt": {
		"test": "http:\/\/pt.autoersatzteile.de"
	},
	"ersatz\/se": {
		"test": "http:\/\/se.autoersatzteile.de"
	},

	"pkw\/at": {
		"test": "http:\/\/at.pkwteile.de"
	},
	"pkw\/ch": {
		"test": "http:\/\/test.pkwteile.ch"
	},
	"pkw\/dk": {
		"test": "http:\/\/dk.pkwteile.de"
	},
	"pkw\/en": {
		"test": "http:\/\/test.buycarparts.co.uk",
		"prod": "http:\/\/buycarparts.co.uk"
	},
	"pkw\/es": {
		"test": "http:\/\/test.recambioscoches.es",
		"prod": "http:\/\/recambioscoches.es"
	},
	"pkw\/fi": {
		"test": "http:\/\/fi.pkwteile.de"
	},
	"pkw\/fr": {
		"test": "http:\/\/test.piecesauto24.com",
		"prod": "http:\/\/piecesauto24.com"
	},
	"pkw\/it": {
		"test": "http:\/\/test.autoparti.it",
		"prod": "http:\/\/autoparti.it"
	},
	"pkw\/nl": {
		"test": "http:\/\/nl.pkwteile.de"
	},
	"pkw\/no": {
		"test": "http:\/\/no.pkwteile.de"
	},
	"pkw\/pt": {
		"test": "http:\/\/pt.pkwteile.de"
	},
	"pkw\/se": {
		"test": "http:\/\/se.pkwteile.de"
	},

	"xxl\/at": {
		"test": "http:\/\/test.autoteilexxl.at"
	},
	"xxl\/ch": {
		"test": "http:\/\/test.autoteilexxl.ch"
	},
	"xxl\/de": {
		"test": "http:\/\/test.autoteilexxl.de",
		"prod": "http:\/\/autoteilexxl.de"
	},
	"xxl\/dk": {
		"test": "http:\/\/dk.autoteilexxl.de"
	},
	"xxl\/en": {
		"test": "http:\/\/test.bestpartstore.co.uk",
		"prod": "http:\/\/bestpartstore.co.uk"
	},
	"xxl\/es": {
		"test": "http:\/\/test.repuestosauto.es",
		"prod": "http:\/\/repuestosauto.es"
	},
	"xxl\/fi": {
		"test": "http:\/\/fi.autoteilexxl.de"
	},
	"xxl\/fr": {
		"test": "http:\/\/test.24piecesauto.fr",
		"prod": "http:\/\/24piecesauto.fr"
	},
	"xxl\/it": {
		"test": "http:\/\/test.tuttiautopezzi.it",
		"prod": "http:\/\/tuttiautopezzi.it"
	},
	"xxl\/nl": {
		"test": "http:\/\/nl.autoteilexxl.de"
	},
	"xxl\/no": {
		"test": "http:\/\/no.autoteilexxl.de"
	},
	"xxl\/pt": {
		"test": "http:\/\/pt.autoteilexxl.de"
	},
	"xxl\/se": {
		"test": "http:\/\/se.autoteilexxl.de"
	}
};

document.addEventListener('DOMContentLoaded', function () {
	var table = document.getElementById('project-list');

	function createRow(project, projectSites) {
		var createLink = function (title, url) {
			var link = document.createElement('a');
			link.setAttribute('href', url);
			link.appendChild(document.createTextNode(title));
			link.addEventListener('click', function () {
				var newTab = {
					url : url
				};
				chrome.tabs.create(newTab, function (tab) {
				});
			});

			return link;
		};

		var addEmptyLink = function(links) {
			var emElement = document.createElement('em');
			var textNode = document.createTextNode('None');
			emElement.appendChild(textNode);
			links.push(emElement);
		};

		var row = document.createElement('tr');
		var projectCell = document.createElement('td');
		var projectTitle = document.createElement('span');
		projectTitle.appendChild(document.createTextNode(project));
		projectCell.appendChild(projectTitle);
		row.appendChild(projectCell);

		var environmentalCell = document.createElement('td');
		var links = [document.createTextNode('(')];
		if ((typeof projectSites.test) !== "undefined") {
			links.push(createLink("Test", projectSites.test));
		} else {
			addEmptyLink(links);
		}
		links.push(document.createTextNode('\u00A0/\u00A0'));

		if ((typeof projectSites.prod) !== "undefined") {
			links.push(createLink("Production", projectSites.prod));
		} else {
			addEmptyLink(links);
		}
		links.push(document.createTextNode(')'));

		for (var i = 0; i < links.length; i++) {
			environmentalCell.appendChild(links[i]);
		}
		row.appendChild(environmentalCell);

		return row;
	}

	for (var project in sites) {
		table.appendChild(createRow(project, sites[project]));
	}

	// $('.main-tabs .active a').tab('show');
	// $('.main-tabs a').click(function (e) {
	// 	e.preventDefault();
	// 	$(this).tab('show');
	// });

	$('.action-tabs a[data-toggle="tab"]').on('shown', function (e) {
		var closedTab		= $(e.relatedTarget);
		var selectedTab		= $(e.target);
		var closedClass		= '#' + closedTab.data('content-id');
		var selectedClass	= '#' + selectedTab.data('content-id');
		$(selectedClass).insertAfter(closedClass).show();
		$(closedClass).appendTo('.tabs-content').hide();
	});

});
