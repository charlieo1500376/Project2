function reload(){
	var i=localStorage.length/7;
	for(var j=0;j<i;j++){
		var insert=document.createElement("div");
		var a=j+5;
		insert.id="List"+a;
		inser.class="list";
		insert.onclick = "switchMenu(this, 'ListDetail'+)"
		insert.innerHTML=insert.innerHTML+""
	}
}
window.addEventListener("load",reload(),false);