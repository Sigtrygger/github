function Drawing() {

    this.shapes = new Map();

};

function Shape(x1, x2, color, thickness) {
    this.x1 = x1;
    this.x2 = x2;
    this.color = color || '#000000';
    this.thickness = thickness || 1;
}

function Line(x1, y1, x2, y2, color, thickness) {
    Shape.call(this, x1, x2, color, thickness);

    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;

    this.getInfo = function () {
        return "Line (" + this.x1 + ", " + this.y1 +
            ") -> (" + this.x2 + ", " + this.y2 +
            "), color=" + this.color +
            ", thickness=" + this.thickness;
    };
}

function Rectangle(xHautGauche, yHautGauche, largeur, longueur, color, thickness) {
    Shape.call(this, xHautGauche, yHautGauche, color, thickness);
    this.xHautGauche = xHautGauche;
    this.yHautGauche = yHautGauche;
    this.largeur = largeur;
    this.longueur = longueur;

    this.getInfo = function () {
        return "Rectangle (x:" + this.xHautGauche + ", y:" + this.yHautGauche +
            ", Largeur:" + this.largeur + ", Longueur:" + this.longueur +
            "), color=" + this.color + ", thickness=" + this.thickness;
    };
}


