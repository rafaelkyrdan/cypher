function init () {

    ui.context = document.querySelector('#content');

    var tiles = ui.context.querySelectorAll("a.tile");
    for (var i = 0; i < tiles.length; i++) {
        tiles[i].onclick = function (e) {
            ui.control(this);
            return false;
        }
    }

    ui.context.querySelector("div.changeDirection").onclick = function (e) {
        ui.changeDirection();
        return false;
    }

    var spans = ui.context.querySelectorAll(".tools > span");
    for (var i = 0; i < spans.length; i++) {
        spans[i].onclick = function (e) {
            ui.manageText(this);
            return false;
        }
    }

}

window.onload = init;

function w (a,b,c,d) {
     console.log(a,b,c,d);
}