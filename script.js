function getFormvalue() {
    //Write your code here
	let inp = document.querySelectorAll(input);
	let first_Name = inp[0].value;
	let last_Name = inp[1].value;
	let full_Name = first_Name +" "+last_Name;
	alert(full_Name);
}
