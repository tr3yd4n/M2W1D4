
window.onload();{
    let listOfNames = []
    const nameInput = document.querySelector("#name")
    const addButton = document.querySelector("#addButton")
    addButton.addEventListener("click", function(){

        const value = nameInput.value
        const cleanedValue = value.trim()
        if (cleanedValue.length !==0){
            const listedName = document.createElement("li")
            listedName.className = "inputed-Name"
            listedName.innerText = cleanedValue
            listedName.appendChild(listedName)
        }
    })
}    




{/* <label for="fname">Enter name</label><br>
    <input type="text" id="name" name="name"><br>
    <button><a href="" onclick="addNameToArray()">Submit</a></button><br></br> */}



const counter = document.getElementById("clickme"),
    count = 0
    counter.onclick = function() {
    count += 1
    counter.innerHTML = count
    }


