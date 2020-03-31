var wybor;
function npr(x){
	
	wybor = x;
	if(x == undefined){
		document.getElementById("myImage").src = "https://i.imged.pl/metin2-diumar-wojownik-99-103-pro-eq-okazja-1451133.jpg";
		wybor = "null";
	}
	
	if(x == 1){
		document.getElementById("myImage").src = "https://i.imged.pl/metin2-diumar-wojownik-99-103-pro-eq-okazja-1451133.jpg";
		document.getElementById("fdg").innerHTML = "WOJOWNIK";
	}
	
	if(x == 2){
		document.getElementById("myImage").src = "https://archiwum.allegro.pl/image//imagesNEW/big/0f933ffb9b023eeea01c72781ce6212ee777214c5558ebd77fc89a91fdf1a1a7";
		document.getElementById("fdg").innerHTML = "NINJA";
	}
	
	if(x == 3){
		document.getElementById("myImage").src = "https://a.allegroimg.com/s1024/0c9227/8d9cde064704a7c848a99cfff989";
		document.getElementById("fdg").innerHTML = "SURA";
	}


	if(x == 4){
		document.getElementById("myImage").src = "https://0.allegroimg.com/s1024/0c1c01/c0f83fcd44139deb8bc0584330f0";
		document.getElementById("fdg").innerHTML = "SZAMAN";
	}
}

var wybornazwa;
function wybierz() {
	
	if(wybor == 1){wybornazwa = "Wojownik";}
	if(wybor == 2){wybornazwa = "Ninja";}
	if(wybor == 3){wybornazwa = "Sura";}
	if(wybor == 4){wybornazwa = "Szaman";}
	
	
	if(wybor == "null" || wybor == null){
		alert("Wybierz klase postaci");
		return;
	}
	alert("Wybrałeś klase: " + wybornazwa + " o id:" + wybor);
}