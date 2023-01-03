const my_page_visit = parseInt(localStorage.getItem('citizen_visit_count'));
if (localStorage.getItem('citizen_visit_count') === null) {
  localStorage.setItem('citizen_first_visit', new Date(Date.now()).toLocaleString());
  localStorage.setItem('citizen_visit_count', 1);
}
else if (my_page_visit !== 0 && sessionStorage.getItem('citizen_visited_today') !== "1") {
  localStorage.setItem('citizen_visit_count', my_page_visit + 1);
}
const session_today = parseInt(sessionStorage.getItem('citizen_visited_today'));
if (sessionStorage.getItem('citizen_visited_today') === null) {
  sessionStorage.setItem('session_start', new Date(Date.now()).toLocaleString());
  sessionStorage.setItem('citizen_visited_today', 1);
}