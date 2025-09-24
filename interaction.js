
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
  this.xStart = 0;
  this.yStart = 0;
  this.xEnd = 0;
  this.yEnd = 0;
  this.isDragging = false;
  this.interactor = interactor;


  this.press = function (evt) {
    var pos = getMousePosition(canvas, evt);
    this.xStart = pos.x;
    this.yStart = pos.y;
    this.isDragging = true;
    //console.log("Pression souris (" + this.xStart + ", " + this.yStart + ")");
    this.interactor.onInteractionStart(this);
  }.bind(this);

  this.move = function (evt) {
    if (this.isDragging) {
      var pos = getMousePosition(canvas, evt);
      this.xEnd = pos.x;
      this.yEnd = pos.y;
      //console.log("Déplacement souris (" + this.xEnd + ", " + this.yEnd + ")");
      this.interactor.onInteractionUpdate(this);
    }
  }.bind(this);

  this.release = function (evt) {
    if (this.isDragging) {
      var pos = getMousePosition(canvas, evt);
      this.xEnd = pos.x;
      this.yEnd = pos.y;
      this.isDragging = false;
      //console.log("Relâchement souris (" + this.xEnd + ", " + this.yEnd + ")");
      this.interactor.onInteractionEnd(this);
    }
  }.bind(this);

  // Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.press, false);
  canvas.addEventListener('mousemove', this.move, false);
  canvas.addEventListener('mouseup', this.release, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



