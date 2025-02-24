var page1Content = document.querySelector("#page1-content");
var cursor = document.querySelector("#cursor");

page1Content.addEventListener("mousemove", (dets) => {
  // console.log(e.screenX, e.screenY);
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    delay: 0.1,
    // ease: "power2.inOut",
  });
});

var path = `M 10 100 Q 500 100 990 100`;
var finalPath = `M 10 100 Q 500 100 990 100`;

var string = document.querySelector("#string");
string.addEventListener("mousemove", (dets) => {
  path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`;
  gsap.to("svg path", {
    attr: {
      d: path,
    },
    duration: 0.2,
    ease: "power3.out",
  });
  // console.log(path);
  // console.log(dets.x, dets.y);
});
// string.addEventListener("mouseleave", () => {
//   console.log("Leaved");
// });

string.addEventListener("mouseleave", () => {
  gsap.to("svg path", {
    attr: {
      d: finalPath,
    },
    duration: 1.5,
    ease: "elastic.out(1,0.1)",
  });
});
