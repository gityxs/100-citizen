const X6k66ER4q6Nu2Ar43tTwKnPGM7SKtBs8qJrZYe4DpFcjSMDBbju9AcdFArhhhH4g7PdSTqN73xFjeU84BXZFJNVqzsEKrjfrNBXE973Es6VZzZNCfdDz2j5KQL8FVqvT = ["editor", "ivma", "carissentd"]; const fmc2C5zrhYDy6T8RrgwvLSsLjxzgZVp92qcHT7UHWdvKxXgVuvt4YpqYrPPUNWQmkgEk3VQeP6FpRzpAM8mtzPGeTq4fANYwckF34LAMWzhpbLsYyMxUzNfhp2E6DZzL = ["eden", "ix101", "essirac27"]; if (X6k66ER4q6Nu2Ar43tTwKnPGM7SKtBs8qJrZYe4DpFcjSMDBbju9AcdFArhhhH4g7PdSTqN73xFjeU84BXZFJNVqzsEKrjfrNBXE973Es6VZzZNCfdDz2j5KQL8FVqvT.includes(localStorage["mUALK9nMxj29jUagswfC"]) && fmc2C5zrhYDy6T8RrgwvLSsLjxzgZVp92qcHT7UHWdvKxXgVuvt4YpqYrPPUNWQmkgEk3VQeP6FpRzpAM8mtzPGeTq4fANYwckF34LAMWzhpbLsYyMxUzNfhp2E6DZzL.includes(localStorage["TQE2dSBNJDPZW4XNdFXd"])) { } else { window.open("index.html", "_self"); } if (localStorage["mUALK9nMxj29jUagswfC"] === "ivma" && localStorage["TQE2dSBNJDPZW4XNdFXd"] === "ix101") { localStorage.setItem('JwtrM9NdmFQdyFZbKNJYpVgGtgxfDH3Q', 'pHdRb7XWAmbpgfqmtWLyqrSGFLgDKN7V'); } if (localStorage["mUALK9nMxj29jUagswfC"] === "carissentd" && localStorage["TQE2dSBNJDPZW4XNdFXd"] === "essirac27") { localStorage.setItem('JwtrM9NdmFQdyFZbKNJYpVgGtgxfDH3Q', 'LcfB8tE5uqJwAvhXrNv76G22MRAny8aD'); }

const my_page_visit = parseInt(localStorage.getItem('page_visit_count'));
if (localStorage.getItem('page_visit_count') === null) {
	localStorage.setItem('first_visit', new Date(Date.now()).toLocaleString());
	localStorage.setItem('page_visit_count', 1);
}
else if (my_page_visit !== 0 && sessionStorage.getItem('visited_today') !== "1") {
	localStorage.setItem('page_visit_count', my_page_visit + 1);
}
const session_today = parseInt(sessionStorage.getItem('visited_today'));
if (sessionStorage.getItem('visited_today') === null) {
	sessionStorage.setItem('session_start', new Date(Date.now()).toLocaleString());
	sessionStorage.setItem('visited_today', 1);
}

function systemLogout() {
	if (confirm(`Are you sure you want to log out?`) == true) {
		localStorage.removeItem('mUALK9nMxj29jUagswfC');
		localStorage.removeItem('TQE2dSBNJDPZW4XNdFXd');
		localStorage.removeItem('zfgsvmgrxzgrlm');
		localStorage.removeItem('JwtrM9NdmFQdyFZbKNJYpVgGtgxfDH3Q');
		window.open("index.html", "_self");
	}
}

$(document).ready(function () {
	$("*[data-store]").each(function () {
		$(this).val(localStorage.getItem($(this).attr("data-store") + '_data'));
	});

	$("*[data-store]").on("keyup", function (itm) {
		localStorage.setItem($(this).attr("data-store") + '_data', $(this).val());
	})
})