
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Rectangle.prototype.paint = function (ctx) {
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.thickness;
    ctx.strokeRect(this.xHautGauche, this.yHautGauche, this.largeur, this.longueur);
}

Line.prototype.paint = function (ctx) {
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.thickness;
    ctx.beginPath();
    ctx.moveTo(this.x1, this.y1);
    ctx.lineTo(this.x2, this.y2);
    ctx.stroke();
}

Drawing.prototype.paint = function (ctx, canvas) {
    ctx.fillStyle = '#F0F0F0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.shapes.forEach(function (shape) {
        shape.paint(ctx);
    });
};


function updateShapeList(index, shape) {
    document.getElementById("shapeList").insertAdjacentHTML('beforeend',
        '<div id="shape' + index + '">\
            ' + shape.getInfo() + '\
            <button id="remove' + index + '">X</button>\
        </div>');
}