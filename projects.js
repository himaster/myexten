var sites = {
	"direkt\/de": {
		"test": "http:\/\/test.autoteiledirekt.de",
		"prod": "http:\/\/autoteiledirekt.de"
	},
	"ersatz\/de": {
		"test": "http:\/\/new.autoersatzteile.de",
		"prod": "http:\/\/autoersatzteile.de"
	},
	"ersatz\/fr": {
		"test": "http:\/\/test.piecesdiscount24.fr",
		"prod": "http:\/\/piecesdiscount24.fr"
	},
	"ersatz\/en": {
		"test": "http:\/\/test.sparepartstore24.co.uk",
		"prod": "http:\/\/sparepartstore24.co.uk"
	},
	"ersatz\/it": {
		"test": "http:\/\/test.pezzidiricambio24.it",
		"prod": "http:\/\/pezzidiricambio24.it"
	},
	"ersatz\/es": {
		"test": "http:\/\/test.repuestoscoches24.es",
		"prod": "http:\/\/repuestoscoches24.es"
	},
	"pkw\/fr": {
		"test": "http:\/\/test.piecesauto24.com",
		"prod": "http:\/\/piecesauto24.com"
	},
	"pkw\/en": {
		"test": "http:\/\/test.buycarparts.co.uk",
		"prod": "http:\/\/buycarparts.co.uk"
	},
	"pkw\/it": {
		"test": "http:\/\/test.autoparti.it",
		"prod": "http:\/\/autoparti.it"
	},
	"pkw\/es": {
		"test": "http:\/\/test.recambioscoches.es",
		"prod": "http:\/\/recambioscoches.es"
	},
	"xxl\/de": {
		"test": "http:\/\/test.autoteilexxl.de",
		"prod": "http:\/\/autoteilexxl.de"
	},
	"xxl\/fr": {
		"test": "http:\/\/test.24piecesauto.fr",
		"prod": "http:\/\/24piecesauto.fr"
	},
	"xxl\/en": {
		"test": "http:\/\/test.bestpartstore.co.uk",
		"prod": "http:\/\/bestpartstore.co.uk"
	},
	"xxl\/it": {
		"test": "http:\/\/test.tuttiautopezzi.it",
		"prod": "http:\/\/tuttiautopezzi.it"
	},
	"xxl\/es": {
		"test": "http:\/\/test.repuestosauto.es",
		"prod": "http:\/\/repuestosauto.es"
	},
	"direkt\/fr": {
		"test": "http:\/\/fr.autoteiledirekt.de"
	},
	"direkt\/en": {
		"test": "http:\/\/en.autoteiledirekt.de"
	},
	"direkt\/it": {
		"test": "http:\/\/it.autoteiledirekt.de"
	},
	"direkt\/es": {
		"test": "http:\/\/es.autoteiledirekt.de"
	},
	"direkt\/at": {
		"test": "http:\/\/test.teile-direkt.at"
	},
	"direkt\/ch": {
		"test": "http:\/\/test.teile-direkt.ch"
	},
	"direkt\/pt": {
		"test": "http:\/\/test.pecasauto24.pt"
	},
	"direkt\/nl": {
		"test": "http:\/\/test.besteonderdelen.nl"
	},
	"direkt\/dk": {
		"test": "http:\/\/test.autodeleshop.dk"
	},
	"direkt\/no": {
		"test": "http:\/\/test.reservedeler24.co.no"
	},
	"direkt\/fi": {
		"test": "http:\/\/test.topautoosat.fi"
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
	"ersatz\/nl": {
		"test": "http:\/\/nl.autoersatzteile.de"
	},
	"ersatz\/pt": {
		"test": "http:\/\/pt.autoersatzteile.de"
	},
	"ersatz\/se": {
		"test": "http:\/\/se.autoersatzteile.de"
	},
	"ersatz\/fi": {
		"test": "http:\/\/fi.autoersatzteile.de"
	},
	"ersatz\/no": {
		"test": "http:\/\/no.autoersatzteile.de"
	},
	"pkw\/ch": {
		"test": "http:\/\/test.pkwteile.ch"
	},
	"pkw\/at": {
		"test": "http:\/\/at.pkwteile.de"
	},
	"pkw\/dk": {
		"test": "http:\/\/dk.pkwteile.de"
	},
	"pkw\/nl": {
		"test": "http:\/\/nl.pkwteile.de"
	},
	"pkw\/pt": {
		"test": "http:\/\/pt.pkwteile.de"
	},
	"pkw\/se": {
		"test": "http:\/\/se.pkwteile.de"
	},
	"pkw\/fi": {
		"test": "http:\/\/fi.pkwteile.de"
	},
	"pkw\/no": {
		"test": "http:\/\/no.pkwteile.de"
	},
	"xxl\/at": {
		"test": "http:\/\/test.autoteilexxl.at"
	},
	"xxl\/ch": {
		"test": "http:\/\/test.autoteilexxl.ch"
	},
	"xxl\/dk": {
		"test": "http:\/\/dk.autoteilexxl.de"
	},
	"xxl\/nl": {
		"test": "http:\/\/nl.autoteilexxl.de"
	},
	"xxl\/pt": {
		"test": "http:\/\/pt.autoteilexxl.de"
	},
	"xxl\/se": {
		"test": "http:\/\/se.autoteilexxl.de"
	},
	"xxl\/fi": {
		"test": "http:\/\/fi.autoteilexxl.de"
	},
	"xxl\/no": {
		"test": "http:\/\/no.autoteilexxl.de"
	}
};

// console.log(sites);
// alert(sites);

document.addEventListener('DOMContentLoaded', function () {
	var table = document.getElementById('project-list');
	// log(chrome.tabs);
	// console.log(chrome.tabs);

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
					// tab.url(url);
				});
				// chrome.console.log(typeof chrome.tabs);
			});

			return link;
		};

		var row = document.createElement('tr');

		/*
		var cell = document.createElement('td');
		var projectTitle = document.createElement('span');
		projectTitle.appendChild(document.createTextNode(project));
		cell.appendChild(projectTitle);
		cell.appendChild(document.createTextNode('\u00A0'));

		for (var env in projectSites) {
			cell.appendChild(createLink(env, projectSites[env]));
			cell.appendChild(document.createTextNode('\u00A0'));
		}
		row.appendChild(cell);
		*/

		// var cells = [];
		var projectCell = document.createElement('td');
		var projectTitle = document.createElement('span');
		projectTitle.appendChild(document.createTextNode(project));
		projectCell.appendChild(projectTitle);
		row.appendChild(projectCell);
		// cell.appendChild(document.createTextNode('\u00A0'));

		var environmentalCell = document.createElement('td');
		var brackets = false;
		// if ((typeof projectSites.test !== "undefined") || (typeof projectSites.prod !== "undefined")) {
		// }
		var links = [];
		var testCell = document.createElement('td');
		if ((typeof projectSites.test) !== "undefined") {
			brackets = true;
			testCell.appendChild(createLink("Test", projectSites.test));
			links.push(document.createTextNode('('));
			links.push(createLink("Test", projectSites.test));
		}
		// row.appendChild(testCell);

		var productionCell = document.createElement('td');
		if ((typeof projectSites.prod) !== "undefined") {
			brackets = true;
			productionCell.appendChild(createLink("Production", projectSites.prod));
			if (links.length) {
				links.push(document.createTextNode('\u00A0/\u00A0'));
			} else {
				links.push(document.createTextNode('('));
			}
			links.push(createLink("Production", projectSites.prod));
		}
		links.push(document.createTextNode(')'));
		// row.appendChild(productionCell);

		for (var i = 0; i < links.length; i++) {
			environmentalCell.appendChild(links[i]);
		}
		row.appendChild(environmentalCell);
		/*
		for (var env in projectSites) {
			var environmentalCell = document.createElement('td');
			environmentalCell.appendChild(createLink(env, projectSites[env]));
			row.appendChild(environmentalCell);
		}
		*/

		// row.appendChild(cell);


		/*
		var cells = [];
		var projectCell = (function () {
			var cell = document.createElement('td');
			var projectTitle = document.createElement('span');
			projectTitle.appendChild(document.createTextNode(project));
			cell.appendChild(projectTitle);

			return cell;
		})();
		cells.push(projectCell);

		for (var environment in projectSites) {
			var environmentalCell = document.createElement('td');
			environmentalCell.appendChild(createLink(environment, projectSites[environment]));
			// environmentalCell.appendChild(document.createTextNode('\u00A0'));
			cells.push(environmentalCell);
		}

		for (var i = 0; i < cell.length; i++) {
			row.appendChild(cells[i]);
		}
		*/

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
