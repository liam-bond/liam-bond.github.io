// Full-size photo viewer for entry pages.
// Click a photo to open it; use the arrow keys or buttons to move
// between photos; press Esc or click outside the photo to close.
(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll("[data-lightbox]"));
  if (!links.length || typeof HTMLDialogElement === "undefined") return;

  var icon = function (d) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="' + d + '"/></svg>';
  };

  var dialog = document.createElement("dialog");
  dialog.className = "lightbox";
  dialog.setAttribute("aria-label", "Photo viewer");
  dialog.innerHTML =
    '<figure class="lightbox__figure"><img alt=""><figcaption class="lightbox__count"></figcaption></figure>' +
    '<button class="lightbox__btn lightbox__close" type="button" aria-label="Close">' + icon("M6 6l12 12M18 6L6 18") + "</button>" +
    '<button class="lightbox__btn lightbox__prev" type="button" aria-label="Previous photo">' + icon("M15 6l-6 6 6 6") + "</button>" +
    '<button class="lightbox__btn lightbox__next" type="button" aria-label="Next photo">' + icon("M9 6l6 6-6 6") + "</button>";
  document.body.appendChild(dialog);

  var img = dialog.querySelector("img");
  var count = dialog.querySelector(".lightbox__count");
  var current = 0;

  if (links.length === 1) dialog.setAttribute("data-single", "");

  function show(i) {
    current = (i + links.length) % links.length;
    var link = links[current];
    var thumb = link.querySelector("img");
    img.src = link.href;
    img.alt = thumb ? thumb.alt : "";
    count.textContent = links.length > 1 ? (current + 1) + " of " + links.length : "";
  }

  links.forEach(function (link, i) {
    link.addEventListener("click", function (event) {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
      event.preventDefault();
      show(i);
      dialog.showModal();
    });
  });

  dialog.querySelector(".lightbox__close").addEventListener("click", function () { dialog.close(); });
  dialog.querySelector(".lightbox__prev").addEventListener("click", function () { show(current - 1); });
  dialog.querySelector(".lightbox__next").addEventListener("click", function () { show(current + 1); });

  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) dialog.close();
  });

  dialog.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") { event.preventDefault(); show(current - 1); }
    if (event.key === "ArrowRight") { event.preventDefault(); show(current + 1); }
  });

  dialog.addEventListener("close", function () {
    img.removeAttribute("src");
    if (links[current]) links[current].focus();
  });
})();
