var square, db, pos;

function setup() {
    createCanvas(500, 500);
    square = createSprite(250, 250, 10, 10);
    square.shapeColor = "red";

    db = firebase.database();
    db_t = db.ref("/");
    db_t.on("value", position);

}

function draw() {
    background(0);
    if (keyDown("a")) {
        writepos(-5, 0);
    }
    else if (keyDown("d")) {
        writepos(5, 0);
    }
    else if (keyDown("w")) {
        writepos(0, -5);
    }
    else if (keyDown("s")) {
        writepos(0, +5);
    }
    drawSprites();
}

function writepos(x, y) {
    db_t.set({ x: pos.x + x, y: pos.y + y})
}

function position(d) {
    pos = d.val();
    square.x = pos.x;
    square.y = pos.y;
}
