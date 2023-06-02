var results = ["IRIDESSA 1623B", 
"VIDIA 1809 S",
"FAWN 2830 B", "KIAAN 22SAN", "CHAHAT KB 1622"]



 

document.querySelector("#option1").addEventListener("click", function(){
	let n = Math.floor(Math.random()*results.length)
	
	document.getElementById("results").textContent=results[n]
})

document.querySelector("#option2").addEventListener("click", function(){
	let n = Math.floor(Math.random()*results.length)
	
	document.getElementById("results").textContent=results[n]
})

document.querySelector("#option3").addEventListener("click", function(){
	let n = Math.floor(Math.random()*results.length)
	
	document.getElementById("results").textContent=results[n]
})

document.querySelector("#option4").addEventListener("click", function(){
	let n = Math.floor(Math.random()*results.length)
	
	document.getElementById("results").textContent=results[n]
})


