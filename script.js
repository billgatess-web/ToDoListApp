const inputBox = document.getElementsByTagName("input")[0];
const listContainer = document.getElementsByTagName("ul")[0];

function addTask() {
    if (inputBox.value.trim()  === "") {
        alert("You Must Write something! ")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function (e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask();