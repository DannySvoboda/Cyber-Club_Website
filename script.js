function openNav() {
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  document.getElementById("mySidenav").style.width = "40%";
}

function closeNav() {
  document.body.style.backgroundColor = "mediumpurple";
  document.getElementById("mySidenav").style.width = "0";
}

function openNavNoCChange() {
  document.getElementById("mySidenav").style.width = "40%";
}

function closeNavNoCChange() {
  document.getElementById("mySidenav").style.width = "0";
}

function checkCode() {
  const key = "124a"
  if (key == document.getElementById("Code").value.toLowerCase()){
    document.getElementById("gate").style.display = "block";
  }
}