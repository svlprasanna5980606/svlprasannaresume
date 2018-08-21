//function loadjson(file,callback){
//	var xhr = new XMLHttpRequest();
//	xhr.overrideMimeType("application/json") 
//	xhr.open("GET",file,true);
//	xhr.onreadystatechange=function(){
//		if(xhr.readyState === 4 && xhr.status =="200"){
//			callback(xhr.responseText);
//		}
//	};
//	xhr.send(null);
//}

//loadjson("data.json",function(text){
//var data = JSON.parse(text);
//console.log(data);
//basics(data.details);
//careerinfo(data.career);
//educationinfo(data.education);
//techInfo(data.skills);
//achievements(data.achieve);
//});


function loadjson(file){

	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}
			else{
				reject(new Error('error'));
			}
		})
	})
}
var newfile=loadjson("data.json");
newfile.then(data=>{
	console.log(data);
	basics(data.details);
	careerinfo(data.career);
	educationinfo(data.education);
	techInfo(data.skills);
	achievements(data.achieve);
})


var left1=document.querySelector(".left");
function basics(argument){
	
	var img = document.createElement("img");
    img.src = argument.image;
    left1.appendChild(img);
    
    var name1 = document.createElement("h2");
    name1.textContent = argument.name;
    left1.appendChild(name1);
    
    var phno=document.createElement("h2");
    phno.textContent = argument.phoneno;
    left1.appendChild(phno);
    
    var email1= document.createElement("a");
    email1.href = "svlprasanna99@gmail.com";
    email1.textContent=argument.email;
    left1.appendChild(email1);
    
    var add = document.createElement("h1");
    add.textContent="Address";
    left1.appendChild(add);
    
    var line = document.createElement("hr");
    left1.appendChild(line);
    
    var addr = document.createElement("h2");
    addr.textContent=argument.address;
    left1.appendChild(addr);
}

var right1 = document.querySelector(".right");
function careerinfo(argument){
	
	var care = document.createElement("h1");
	care.textContent="Career Objectives";
	right1.appendChild(care);
	
	var line0 = document.createElement("hr");
	right1.appendChild(line0);
	
	var car = document.createElement("p");
	car.textContent = argument.info;
	right1.appendChild(car);
}
function educationinfo(q){

	var edu = document.createElement("h1");
	edu.textContent="Educational Qualifications:";
	right1.appendChild(edu);
	
	var line1 = document.createElement("hr");
	right1.appendChild(line1);

	var table = document.createElement("table");
	table.border="2";
	right1.appendChild(table);

	tabledata ="";
	for(i=0;i<q.length;i++)
	{
		tabledata+="<tr><td>"+q[i].qualification+"</td><td>"+q[i].institute+"</td><td>"+q[i].year+"</td><td>"+q[i].percentage+"</td></tr>";
	}
	table.innerHTML=tabledata;
}
function techInfo(p){
	var tec = document.createElement("h4");
	tec.textContent="Technical Qualification";
	right1.appendChild(tec);
	
	var line2=document.createElement("hr");
	right1.appendChild(line2);

	for(i=0;i<p.length;i++){
		var s=document.createElement("h3");
		s.textContent=p[i].title;
		right1.appendChild(s);

		var ul1=document.createElement("ul");
		var li1=document.createElement("li");
		li1.textContent=p[i].info;
		ul1.appendChild(li1);
		right1.appendChild(ul1);

	}	
}
function achievements(p) {
		
		var obj1=document.createElement("h5");
		obj1.textContent="Achievements";
		right1.appendChild(obj1);

		var head2=document.createElement("hr");
		right1.appendChild(head2);

		for(i=0;i<p.length;i++){
			var ul2=document.createElement("ul");
			var li2=document.createElement("li");
			li2.textContent=p[i];
			ul2.appendChild(li2);
			right1.appendChild(ul2);

		}
}
function openpage(){
	window.open("resume.html","_self",true);
}