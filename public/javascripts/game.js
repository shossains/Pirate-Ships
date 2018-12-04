var id = 0;

function grid() {
    var tb1 = document.getElementById("tb1");

    for (var r = 0; r < 10; r++) {
        var row = document.createElement("tr");

        for (var c = 0; c < 10; c++) {
            var cell = document.createElement("td");
            cell.width = "50px";
            cell.height = "50px";
            cell.id = id++;

            row.appendChild(cell);
            cell.innerHTML = id;
        }

        tb1.appendChild(row);
    }
}