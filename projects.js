// 0.8.5 - added old shop urls
// 0.8.6 - added direkt-at and direkt-ch production urls
// 0.8.7 - added direkt-dk, direkt-fi, direkt-nl, direkt-no, direkt-pt, direkt-se production urls
// 0.8.8 - added new test domains for pkw
// 0.9.0 - added search (ivashkin)

var sites = {
	"direkt\/AT": {
		"test": "http:\/\/test.teile-direkt.at",
		"prod": "http:\/\/www.teile-direkt.at"
	},
	"direkt\/CH": {
		"test": "http:\/\/test.teile-direkt.ch",
		"prod": "http:\/\/www.teile-direkt.ch"
	},
	"direkt\/DE": {
		"test": "http:\/\/test.autoteiledirekt.de",
		"prod": "http:\/\/autoteiledirekt.de"
	},
	"direkt\/DK": {
		"test": "http:\/\/test.autodeleshop.dk",
		"prod": "http:\/\/www.autodeleshop.dk"
	},
	"direkt\/EN": {
		"test": "http:\/\/en.autoteiledirekt.de"
	},
	"direkt\/EN [old]": {
		"test": "http:\/\/test.onlinecarparts.co.uk",
		"prod": "http:\/\/www.onlinecarparts.co.uk"
	},
	"direkt\/ES": {
		"test": "http:\/\/es.autoteiledirekt.de"
	},
	"direkt\/ES [old]": {
		"test": "http:\/\/test.recambioscoche.es",
		"prod": "http:\/\/www.recambioscoche.es"
	},
	"direkt\/FI": {
		"test": "http:\/\/test.topautoosat.fi",
		"prod": "http:\/\/www.topautoosat.fi"
	},
	"direkt\/FR": {
		"test": "http:\/\/fr.autoteiledirekt.de"
	},
	"direkt\/FR [old]": {
		"test": "http:\/\/test.piecesauto.fr",
		"prod": "http:\/\/www.piecesauto.fr"
	},
	"direkt\/IT": {
		"test": "http:\/\/it.autoteiledirekt.de"
	},
	"direkt\/IT [old]": {
		"test": "http:\/\/test.tuttoautoricambi.it",
		"prod": "http:\/\/www.tuttoautoricambi.it"
	},
	"direkt\/NL": {
		"test": "http:\/\/test.besteonderdelen.nl",
		"prod": "http:\/\/www.besteonderdelen.nl"
	},
	"direkt\/NO": {
		"test": "http:\/\/test.reservedeler24.co.no",
		"prod": "http:\/\/www.reservedeler24.co.no"
	},
	"direkt\/PT": {
		"test": "http:\/\/test.pecasauto24.pt",
		"prod": "http:\/\/www.pecasauto24.pt"
	},
	"direkt\/SE": {
		"test": "http:\/\/test.reservdelar24.se",
		"prod": "http:\/\/www.reservdelar24.se"
	},

	"ersatz\/AT": {
		"test": "http:\/\/at.autoersatzteile.de"
	},
	"ersatz\/CH": {
		"test": "http:\/\/ch.autoersatzteile.de"
	},
	"ersatz\/DK": {
		"test": "http:\/\/dk.autoersatzteile.de"
	},
	"ersatz\/DE": {
		"test": "http:\/\/new.autoersatzteile.de",
		"prod": "http:\/\/autoersatzteile.de"
	},
	"ersatz\/EN": {
		"test": "http:\/\/test.sparepartstore24.co.uk",
		"prod": "http:\/\/sparepartstore24.co.uk"
	},
	"ersatz\/ES": {
		"test": "http:\/\/test.repuestoscoches24.es",
		"prod": "http:\/\/repuestoscoches24.es"
	},
	"ersatz\/FI": {
		"test": "http:\/\/fi.autoersatzteile.de"
	},
	"ersatz\/FR": {
		"test": "http:\/\/test.piecesdiscount24.fr",
		"prod": "http:\/\/piecesdiscount24.fr"
	},
	"ersatz\/IT": {
		"test": "http:\/\/test.pezzidiricambio24.it",
		"prod": "http:\/\/pezzidiricambio24.it"
	},
	"ersatz\/NL": {
		"test": "http:\/\/nl.autoersatzteile.de"
	},
	"ersatz\/NO": {
		"test": "http:\/\/no.autoersatzteile.de"
	},
	"ersatz\/PT": {
		"test": "http:\/\/pt.autoersatzteile.de"
	},
	"ersatz\/SE": {
		"test": "http:\/\/se.autoersatzteile.de"
	},

	"pkw\/AT": {
		"test": "http:\/\/new.pkwteile.at"
	},
	"pkw\/AT [old]": {
		"test": "http:\/\/test.pkwteile.at",
		"prod": "http:\/\/www.pkwteile.at"
	},
	"pkw\/CH": {
		"test": "http:\/\/test.pkwteile.ch"
	},
	"pkw\/DK": {
		"test": "http:\/\/test.bildeleshop.dk"
	},
	"pkw\/DE": {
		"test": "http:\/\/new.pkwteile.de"
	},
	"pkw\/DE [old]": {
		"test": "http:\/\/test.pkwteile.de",
		"prod": "http:\/\/www.pkwteile.de"
	},
	"pkw\/EN": {
		"test": "http:\/\/test.buycarparts.co.uk",
		"prod": "http:\/\/buycarparts.co.uk"
	},
	"pkw\/ES": {
		"test": "http:\/\/test.recambioscoches.es",
		"prod": "http:\/\/recambioscoches.es"
	},
	"pkw\/FI": {
		"test": "http:\/\/test.autonvaraosat24.fi"
	},
	"pkw\/FR": {
		"test": "http:\/\/test.piecesauto24.com",
		"prod": "http:\/\/piecesauto24.com"
	},
	"pkw\/IT": {
		"test": "http:\/\/test.autoparti.it",
		"prod": "http:\/\/autoparti.it"
	},
	"pkw\/NL": {
		"test": "http:\/\/test.auto-onderdelen24.nl"
	},
	"pkw\/NO": {
		"test": "http:\/\/test.autodeler.co.no"
	},
	"pkw\/PT": {
		"test": "http:\/\/test.autopecasonline24.pt"
	},
	"pkw\/SE": {
		"test": "http:\/\/test.bildelaronline24.se"
	},

	"xxl\/AT": {
		"test": "http:\/\/test.autoteilexxl.at"
	},
	"xxl\/CH": {
		"test": "http:\/\/test.autoteilexxl.ch"
	},
	"xxl\/DE": {
		"test": "http:\/\/test.autoteilexxl.de",
		"prod": "http:\/\/autoteilexxl.de"
	},
	"xxl\/DK": {
		"test": "http:\/\/dk.autoteilexxl.de"
	},
	"xxl\/EN": {
		"test": "http:\/\/test.bestpartstore.co.uk",
		"prod": "http:\/\/bestpartstore.co.uk"
	},
	"xxl\/ES": {
		"test": "http:\/\/test.repuestosauto.es",
		"prod": "http:\/\/repuestosauto.es"
	},
	"xxl\/FI": {
		"test": "http:\/\/fi.autoteilexxl.de"
	},
	"xxl\/FR": {
		"test": "http:\/\/test.24piecesauto.fr",
		"prod": "http:\/\/24piecesauto.fr"
	},
	"xxl\/IT": {
		"test": "http:\/\/test.tuttiautopezzi.it",
		"prod": "http:\/\/tuttiautopezzi.it"
	},
	"xxl\/NL": {
		"test": "http:\/\/nl.autoteilexxl.de"
	},
	"xxl\/NO": {
		"test": "http:\/\/no.autoteilexxl.de"
	},
	"xxl\/PT": {
		"test": "http:\/\/pt.autoteilexxl.de"
	},
	"xxl\/SE": {
		"test": "http:\/\/se.autoteilexxl.de"
	}
};

document.addEventListener("DOMContentLoaded", function () {
	var table = document.getElementById("project-list");

	function createRow(project, projectSites) {
		var projectData = project.split("/");
		var skin = projectData[0];
		var lang = projectData[1];

		var createLink = function (title, url) {
			var link = document.createElement("a");
			link.setAttribute("href", url);
			link.appendChild(document.createTextNode(title));
			link.addEventListener("click", function () {
				var newTab = {
					url : url
				};
				chrome.tabs.create(newTab, function (tab) {
				});
			});

			return link;
		};

		var addEmptyLink = function(links) {
			var emElement = document.createElement("em");
			var textNode = document.createTextNode("None");
			emElement.appendChild(textNode);
			links.push(emElement);
		};

		var row = document.createElement("tr");
		var projectCell = document.createElement("td");
		var projectTitle = document.createElement("span");
		row.setAttribute("data-skin",skin);
		row.setAttribute("data-lang",lang);

		projectTitle.appendChild(document.createTextNode(project));
		projectCell.appendChild(projectTitle);
		row.appendChild(projectCell);

		var environmentalCell = document.createElement("td");
		var links = [document.createTextNode("(")];
		if ((typeof projectSites.test) !== "undefined") {
			links.push(createLink("Test", projectSites.test));
		} else {
			addEmptyLink(links);
		}
		links.push(document.createTextNode("\u00A0/\u00A0"));

		if ((typeof projectSites.prod) !== "undefined") {
			links.push(createLink("Production", projectSites.prod));
		} else {
			addEmptyLink(links);
		}
		links.push(document.createTextNode(")"));

		for (var i = 0; i < links.length; i++) {
			environmentalCell.appendChild(links[i]);
		}
		row.appendChild(environmentalCell);

		return row;
	}

	for (var project in sites) {
		table.appendChild(createRow(project, sites[project]));
	}

	/*
	// @todo maybe add markdown markup - but it will be loaded from somewhere
	var converter = new Showdown.converter();
	$(".markdown-compiled").html(converter.makeHtml($(".markdown-source").text()));
	*/


	// $(".main-tabs .active a").tab("show");
	// $(".main-tabs a").click(function (e) {
	// 	e.preventDefault();
	// 	$(this).tab("show");
	// });

	$(".action-tabs a[data-toggle=\"tab\"]").on("shown", function (e) {
		var closedTab		= $(e.relatedTarget);
		var selectedTab		= $(e.target);
		var closedClass		= "#" + closedTab.data("content-id");
		var selectedClass	= "#" + selectedTab.data("content-id");
		$(selectedClass).insertAfter(closedClass).show();
		$(closedClass).appendTo(".tabs-content").hide();
	});

});
