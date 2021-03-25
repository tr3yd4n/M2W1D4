let listOfNames = []


function addNameToArray(){
    let submitName = document.getElementById("name")
    listOfNames.push(submitName)
    
}

const counter = document.getElementById("clickme"),
    count = 0
    counter.onclick = function() {
    count += 1
    counter.innerHTML = count
    }
