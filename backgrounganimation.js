var getPathLength;
         
$( document ).ready(function() {
  getPathLength = function (o) {
    var path = jquery("." + o).get(0);
    var length = path.getTotalLength();
    return length;
  };

  var controller = new ScrollMagic.Controller();
  var tl = new TimelineMax();
  tl.
  addLabel("start").
  to("#scroll", 1, { opacity: 0 }, "start").
  to([".st0", ".st1", ".st2", ".st3", ".st4", ".st5"], 1, { strokeDashoffset: 0, ease: Linear.easeNone }, "start").
  addLabel("blaz").
  to(".st0", 1, { fill: "#fff" }, "blaz").
  to(".st1", 1, { fill: "#fff" }, "blaz").
  to(".st2", 1, { fill: "#fff" }, "blaz").
  to(".st3", 1, { fill: "#fff" }, "blaz").
  to(".st4", 1, { fill: "#fff" }, "blaz").
  to(".st5", 1, { fill: "#fff" }, "blaz");

  var scene = new ScrollMagic.Scene({
    triggerElement: "#scene",
    triggerHook: "onLeave",
    duration: 900 }).

  setTween(tl).
  addIndicators().
  addTo(controller).
  setPin("#scene");
});