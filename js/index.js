const openNav = () => {
  document.getElementById("mySidenav").style.width = "400px";
  document.querySelector('.burger-menu-icon').style.display = 'none';
}

const closeNav = () => {
  document.getElementById("mySidenav").style.width = "0";
  setTimeout(() => {
    document.querySelector('.burger-menu-icon').style.display = 'block';
  }, 500)
}