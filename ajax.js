function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("ajax").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "ajax.txt", true);
  xhttp.send();
}

window.onload=function(){
	document.getElementsByTagName("button")[0].addEventListener("click", function(){
		loadDoc();
	});
};