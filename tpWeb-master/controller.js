
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	document.getElementById('butRect').onclick = function () {
		this.currEditingMode = editingMode.rect;
	}.bind(this);
	document.getElementById('butLine').onclick = function () {
		this.currEditingMode = editingMode.line;
	}.bind(this);
	document.getElementById('spinnerWidth').onchange = (e) => {
		this.currLineWidth = e.target.value;
	}
	document.getElementById('colour').onchange = (e) => {
		this.currColour = e.target.value;
	}

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

	this.onInteractionStart = function (DnD) {


	}.bind(this);

	this.onInteractionUpdate = function (DnD) {
		//console.log("test");

		if (this.currEditingMode === editingMode.line) {
			this.currentShape = new Line(DnD.xStart, DnD.yStart, DnD.xEnd, DnD.yEnd, this.currColour, this.currLineWidth);

		}
		else if (this.currEditingMode === editingMode.rect) {
			this.currentShape = new Rectangle(DnD.xStart, DnD.yStart, DnD.xEnd - DnD.xStart, DnD.yEnd - DnD.yStart, this.currColour, this.currLineWidth);

		}

		drawing.paint(ctx, canvas);
		this.currentShape.paint(ctx);

	}.bind(this);

	this.onInteractionEnd = function (DnD) {

		var uuid = generateUUID();
		drawing.shapes.set(uuid, this.currentShape);
		drawing.paint(ctx, canvas);
		updateShapeList(uuid, this.currentShape);
		document.getElementById("remove" + uuid).onclick = () => {
			remove(drawing, uuid, ctx, canvas);

		}
		this.currentShape = null;

	}.bind(this);

};

function remove(drawing, index, ctx, canvas) {
	console.log("remove : " + index);
	drawing.shapes.delete(index);
	document.getElementById("shape" + index).remove();
	drawing.paint(ctx, canvas);
}

function generateUUID() { // Public Domain/MIT
	var d = new Date().getTime();//Timestamp
	var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		var r = Math.random() * 16;//random number between 0 and 16
		if (d > 0) {//Use timestamp until depleted
			r = (d + r) % 16 | 0;
			d = Math.floor(d / 16);
		} else {//Use microseconds since page-load if supported
			r = (d2 + r) % 16 | 0;
			d2 = Math.floor(d2 / 16);
		}
		return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
	});
}


