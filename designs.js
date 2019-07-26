var color;
var height;
var width;
var canvas
var submitBtn = document.getElementById('submit');

// When size is submitted by the user, call makeGrid()
submitBtn.addEventListener('click', function () {
    height = document.getElementById('inputHeight').value;
    width = document.getElementById('inputWidth').value;
    makeGrid();
    event.preventDefault();
});

function makeGrid() {
    canvas = document.getElementById("pixelCanvas");
    canvas.innerHTML = null;
    var row = document.createElement('row');
    var columnn = document.createElement('col');
    for(var i = 0; i < height; i++ ) {
        row = canvas.insertRow(i);
        for (var j = 0; j < width; j++) {
            cell = row.insertCell(j);
            canvas.appendChild(columnn);
            cell.addEventListener("click",function (event) {
                color = document.getElementById('colorPicker').value;
                    event.target.style.backgroundColor = color;
            });
        }
    }
}
