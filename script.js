// ---------------------------------------------------------
// Edgar Maurel - portfolio interactions (vanilla JS)
// ---------------------------------------------------------

// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Nav border on scroll
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 8);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Project filtering
const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll("#grid .card");

filters.forEach((btn) => {
  btn.addEventListener("click", () => {
    filters.forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");

    const f = btn.dataset.filter;
    cards.forEach((card) => {
      const cats = (card.dataset.cat || "").split(" ");
      const show = f === "all" || cats.includes(f);
      card.classList.toggle("is-hidden", !show);
    });
  });
});

// Reveal-on-scroll for sections
const revealables = document.querySelectorAll(".section, .hero__inner");
revealables.forEach((el) => el.classList.add("reveal"));

if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.08 }
  );
  revealables.forEach((el) => io.observe(el));
} else {
  revealables.forEach((el) => el.classList.add("is-in"));
}
