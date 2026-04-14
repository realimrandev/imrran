// Lightweight replacement for the previous GSAP SplitText/ScrollSmoother setup.
// The original template used GSAP trial plugins (SplitText / ScrollSmoother) which
// require private registry access. To keep the project buildable for everyone,
// we provide a safe no-op (and optional simple splitting).

export default function setSplitText() {
  // Optional: if elements have data-split="chars", wrap each character in a span.
  const nodes = document.querySelectorAll<HTMLElement>("[data-split='chars']");
  nodes.forEach((el) => {
    if (el.dataset.splitted === "true") return;
    const text = el.textContent || "";
    el.textContent = "";
    const frag = document.createDocumentFragment();
    for (const ch of text) {
      const span = document.createElement("span");
      span.textContent = ch;
      span.style.display = "inline-block";
      frag.appendChild(span);
    }
    el.appendChild(frag);
    el.dataset.splitted = "true";
  });
}
