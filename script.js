var date = new Date();
var hours = date.getHours();
var r = document.querySelector(':root');
var newformat = hours >= 12 ? 'PM' : 'AM'; 

if (newformat == 'PM') {
    changeTheme();
}

function changeTheme() {
    r.style.setProperty('--one', 'rgb(20, 20, 20)');
    r.style.setProperty('--two', 'rgb(240, 240, 240)');
    r.style.setProperty('--three', 'rgb(170, 170, 170)');
    document.querySelector('meta[name="theme-color"]').setAttribute("content", "#323232");
}