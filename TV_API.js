document.querySelector("button").addEventListener("click",res);

let con = document.querySelector(".container");

let row = document.querySelector(".second");

let col = document.createElement("div");
col.className = "col-lg-4";


async function res(){
try{
	let text = document.getElementById("text").value;
	let data = await fetch(`https://api.tvmaze.com/search/shows?q=${text}`);
	//let data1 = data.then((resolve)=>resolve.json());
	//let data2 = data1.then((resolve)=>console.log(resolve));
	let arr = await data.json();
	console.log(arr);

	col.innerHTML = `<div class="card" style="width: 18rem;margin:20px;">
  <img src="${arr[0].show.image.medium}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${arr[0].show.name}</h5>
	<p><b>Genre : </b>${arr[0].show.genres}</p>
	<p><b>Premiered : </b>${arr[0].show.premiered}</p>
	<p><b>Rating : </b>${arr[0].show.rating.average}</p>
	<p><b>Runtime : </b>${arr[0].show.runtime}</p>
	<p><b>Show Shedule : </b>${arr[0].show.schedule.days},${arr[0].show.schedule.time}</p>
	<p><b>Official site : </b>${arr[0].show.officialSite}</p>
	<p><b>Network : </b>${arr[0].show.network.name}</p>
    <p class="card-text"><b> Summary : </b>${arr[0].show.summary}</p>
  </div>
</div>`;
	row.append(col);
	con.append(row);
}
catch (error){
}
}