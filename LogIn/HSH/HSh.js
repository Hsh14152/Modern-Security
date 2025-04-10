'use strict';

let link = '../LOGIN.html';

let LogOut = document.getElementById('LogOut');
LogOut.addEventListener('click', function () {
  location.replace(link);
});
