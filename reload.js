function reload(){
	var i=localStorage.length/7;
	for(var j=0;j<i;j++){
		var insert=document.createElement("div");
		insert.innerHTML=insert.innerHTML+"<div id = 'List"++"' class = 'list' onclick = 'switchMenu(this, 'ListDetail4')'>"
	}
}
window.addEventListener("load",reload(),false);