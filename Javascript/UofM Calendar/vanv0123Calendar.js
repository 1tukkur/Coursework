var clear = function(element){
	document.getElementById(element).innerHTML = "";
	document.getElementById(element).classList.remove('w3-animate-right');
}


var getMonday = function(){

	clear("DayEvents");
	clear("imageRow");

	document.getElementById('DayEvents').innerHTML = 
	"Events Today: 9:45-11:00 Comm3401 Nicholson 155 --- 4:15-6:00 Mus3480 TCF Bank Stadium";

	document.getElementById('DayEvents').className += 'w3-animate-right';

	var Nicholson = document.createElement("img");
	Nicholson.src = "img/NicholsonHall.jpg";
	Nicholson.style.width = '525px';
	document.getElementById("imageRow").appendChild(Nicholson);

	var tcf = document.createElement("img");
	tcf.src = "img/tcfbankstadium.jpg";
	tcf.style.width = '525px';
	document.getElementById("imageRow").appendChild(tcf);
}

var getTuesday = function(){

	clear("DayEvents");
	clear("imageRow");

	document.getElementById('DayEvents').innerHTML = 
	"Events Today: 11:15-12:30 Writ3221W Nolte 229 --- 1:00-2:15 Csci4707 Fraser 101 --- 2:30-3:45 Csci4131 Bruininks 230 --- 4:15-6:00 Mus3480 TCF Bank Stadium";

	document.getElementById('DayEvents').className += 'w3-animate-right';

	var Nolte = document.createElement("img");
	Nolte.src = "img/noltecenter.jpg";
	Nolte.style.width = "262px";
	document.getElementById("imageRow").appendChild(Nolte);

	var Fraser = document.createElement("img");
	Fraser.src = "img/fraserhall.jpg";
	Fraser.style.width = "262px";
	document.getElementById("imageRow").appendChild(Fraser);

	var Bruininks = document.createElement("img");
	Bruininks.src = "img/bruininks.jpg";
	Bruininks.style.width = "263px";
	document.getElementById("imageRow").appendChild(Bruininks);

	var tcf = document.createElement("img");
	tcf.src = "img/tcfbankstadium.jpg";
	tcf.style.width = "263px";
	document.getElementById("imageRow").appendChild(tcf);
}

var getWednesday = function(){
	clear("DayEvents");
	clear("imageRow");

	document.getElementById('DayEvents').innerHTML = 
	"Events Today: 9:45-11:00 Comm3401 Nicholson 155 --- 4:15-6:00 Mus3480 TCF Bank Stadium --- 7:00-10:00 Mus3480 TCF Bank Stadium";

	document.getElementById('DayEvents').className += 'w3-animate-right';

	var Nicholson = document.createElement("img");
	Nicholson.src = "img/NicholsonHall.jpg";
	Nicholson.style.width = '525px';
	document.getElementById("imageRow").appendChild(Nicholson);

	var tcf = document.createElement("img");
	tcf.src = "img/tcfbankstadium.jpg";
	tcf.style.width = '525px';
	document.getElementById("imageRow").appendChild(tcf);
}

var getThursday = function(){
	clear("DayEvents");
	clear("imageRow");

	document.getElementById('DayEvents').innerHTML = 
	"Events Today: 11:15-12:30 Writ3221W Nolte 229 --- 1:00-2:15 Csci4707 Fraser 101 --- 2:30-3:45 Csci4131 Bruininks 230 --- 4:15-6:00 Mus3480 TCF Bank Stadium";

	document.getElementById('DayEvents').className += 'w3-animate-right';

	var Nolte = document.createElement("img");
	Nolte.src = "img/noltecenter.jpg";
	Nolte.style.width = "262px";
	document.getElementById("imageRow").appendChild(Nolte);

	var Fraser = document.createElement("img");
	Fraser.src = "img/fraserhall.jpg";
	Fraser.style.width = "262px";
	document.getElementById("imageRow").appendChild(Fraser);

	var Bruininks = document.createElement("img");
	Bruininks.src = "img/bruininks.jpg";
	Bruininks.style.width = "263px";
	document.getElementById("imageRow").appendChild(Bruininks);

	var tcf = document.createElement("img");
	tcf.src = "img/tcfbankstadium.jpg";
	tcf.style.width = "263px";
	document.getElementById("imageRow").appendChild(tcf);
}

var getFriday = function(){
	clear("DayEvents");
	clear("imageRow");

	document.getElementById("DayEvents").innerHTML = "Events Today: 6:30-8:30 Mus3480 TCF Bank Stadium";

	document.getElementById('DayEvents').className += 'w3-animate-right';

	var tcf = document.createElement("img");
	tcf.src = "img/tcfbankstadium.jpg";
	tcf.style.width = "1050px";
	document.getElementById("imageRow").appendChild(tcf);


}

