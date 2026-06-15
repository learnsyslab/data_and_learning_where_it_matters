/* reveal-on-scroll + play videos only while visible (saves bandwidth) */
(function () {
  "use strict";

  // ---- reveal on scroll ----
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var revObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          revObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { revObs.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  // ---- autoplay videos only while on screen ----
  var vids = document.querySelectorAll("video[data-autoplay]");
  if ("IntersectionObserver" in window) {
    var vidObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var v = e.target;
        if (e.isIntersecting) {
          if (v.preload === "none") v.preload = "auto";
          var p = v.play();
          if (p && p.catch) p.catch(function () {/* autoplay blocked — poster stays */});
        } else {
          v.pause();
        }
      });
    }, { threshold: 0.35 });
    vids.forEach(function (v) { vidObs.observe(v); });
  }

  // ---- click-to-toggle for videos without native controls ----
  vids.forEach(function (v) {
    if (v.hasAttribute("controls")) return;
    v.style.cursor = "pointer";
    v.addEventListener("click", function () {
      if (v.paused) { v.play().catch(function () {}); } else { v.pause(); }
    });
  });
})();
