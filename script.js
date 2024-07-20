function add() {
    var input = document.getElementById("input").value;
    var listinput = document.getElementById("listinput");
    if (input !== '') {
        var li = document.createElement("li");
        var span = document.createElement("span");
        span.textContent = input;
        span.className = "ispan";
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "DELETE";
        deleteButton.className = "delete-btn";
        deleteButton.onclick = function () {
            listinput.removeChild(li);
        };
        li.appendChild(span);
        li.appendChild(deleteButton);
        listinput.appendChild(li);
        document.getElementById("input").value="";
    }  
}
  