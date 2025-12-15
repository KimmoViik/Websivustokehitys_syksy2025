/*W3Schoolista, mutta Years osuus on itse tehty muokkaus
https://www.w3schools.com/js/tryit.asp?filename=tryjs_timing_clock*/

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  const clockEl = document.getElementById('Clock');
  if (clockEl) {
    clockEl.textContent = (h + ":" + m + "  " + s + " sec");
  }
  setTimeout(startTime, 1000);
}
let _yearsToggle = false;

function printYear() {
  const today = new Date();
  const y = today.getFullYear();
  const years = y - 2012;
  const el = document.getElementById('Years');
  if (el) {
    el.textContent = years + " years ago";
    el.classList.remove('years--1', 'years--2');
    // Toggle color: when _yearsToggle is true -> blue, false -> red
    el.classList.add(_yearsToggle ? 'years--1' : 'years--2');
  }
  _yearsToggle = !_yearsToggle;
  setTimeout(printYear, 4000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i}; 
  return i;
}