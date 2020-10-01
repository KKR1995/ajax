console.log("ajax demo ");

let fetchbtn = document.getElementById('fetchbtn');
fetchbtn.addEventListener('click', buttonClickHandeler);

function buttonClickHandeler() {
	console.log('clicked fetchbtn');

	const xhttp = new XMLHttpRequest();

	//open object 
	xhttp.open('GET','http://dummy.restapiexample.com/api/v1/employees',true);

	//on process
	 xhttp.onprogress = function(){
	 	console.log('on progress');
	 }
	 //what to do whwn responce is ready 
	 xhttp.onload = function(){
	 	//if(this.status===200){
	 		var data = JSON.parse(this.responseText);
	 		for(x in data['data']){
	 			document.getElementById("kh").innerHTML += data['data'][x].id+" "+data['data'][x].employee_name+" "+data['data'][x].employee_salary+'<br>';
	 			console.log(data['data'][x]);
	 			// console.log(x['employees_name']);
	 			// console.log(x['employee_salary']);
	 		} 
	 	//}
	 	//else{
	 	//	console.log("some error occured")
	 	//}
	 }
	 //send request
	 xhttp.send();
	 //console.log
}
