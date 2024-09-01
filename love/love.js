const button=document.querySelector("button");
button.addEventListener("click",set);
function set(){
    var mname=document.querySelector("#mname");
    var fname=document.querySelector("#fname");
    api(mname.value,fname.value);
}

async function api(mname,fname){
var url = `https://love-calculator.p.rapidapi.com/getPercentage?sname=${mname}&fname=${fname}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '16653eedb7mshff1ece59777a676p1a7186jsne24f7e7dc1fb',
		'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
    document.getElementById("percentage").innerText="Love percentage = "+result.percentage;
    document.getElementById("comment").innerText=result.result;
} catch (error) {
	console.error(error);
}
}
