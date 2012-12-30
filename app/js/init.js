function init () {

    var tiles = document.querySelectorAll("a.tile");
    for (var i = 0; i < tiles.length; i++) {
        tiles[i].onclick = function (e) {
            ui.control(this);
            return false;
        }
    }


}

window.onload = init;