const my_page_visit = parseInt(localStorage.getItem('island_visit_count'));
if (localStorage.getItem('island_visit_count') === null) {
  localStorage.setItem('first_visit', new Date(Date.now()).toLocaleString());
  localStorage.setItem('island_visit_count', 1);
}
else if (my_page_visit !== 0 && sessionStorage.getItem('visited_today') !== "1") {
  localStorage.setItem('island_visit_count', my_page_visit + 1);
}
const session_today = parseInt(sessionStorage.getItem('visited_today'));
if (sessionStorage.getItem('visited_today') === null) {
  sessionStorage.setItem('session_start', new Date(Date.now()).toLocaleString());
  sessionStorage.setItem('visited_today', 1);
}