//Enter your code here..
const btn = document.getElementById("btnGet")
btn.onclick = function() {pullData()};

async function pullData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users")
        let data = await response.json()
        document.querySelector("#message").innerHTML = "<h2>List of Users</h2>"
        data.map((ele,index) =>{
            document.querySelector('#message').innerHTML += `<div class='player' id='box${index}'></div>`
            document.querySelector("#box"+index).innerHTML += `<p class='strength'>Name: ${ele.name}</p>`
            document.querySelector("#box"+index).innerHTML += `<p>Email: ${ele.email}</p>`
            document.querySelector("#box"+index).innerHTML += `<p>Phone: ${ele.phone}</p>`
            document.querySelector("#box"+index).innerHTML += `<p>Website: ${ele.website}</p>`
            document.querySelector("#box"+index).innerHTML += `<p>Company: ${ele.company.name}</p>`
            document.querySelector("#box"+index).innerHTML += `<p>City: ${ele.address.city}</p>`
            document.querySelector("#box"+index).innerHTML += `<p>Zipcode: ${ele.address.zipcode}</p>`
        })
    }
    catch (error) {
        console.log('Promise rejected');
        console.log(error);
    }
}