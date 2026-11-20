"use strict";

const segments = window.rehearsalProgram.segments;
const byId = id => document.getElementById(id);
const order = byId("slide-list");
const scripts = byId("segments");
const speakerFilter = byId("speaker");
const previous = byId("previous");
const next = byId("next");
const demoViews = new Map([
  [7, { fragment: "healthcare", label: "Open healthcare breakdown" }],
  [8, { fragment: "covetrus", label: "Open Covetrus loans" }],
  [10, { fragment: "provider-maturities", label: "Open maturity schedule" }]
]);
let current = 0;

function makeElement(tag, text, className) {
  const node = document.createElement(tag);
  if (text) node.textContent = text;
  if (className) node.className = className;
  return node;
}

function showSlide(index) {
  if (index < 0 || index >= segments.length) return;
  current = index;
  const slide = segments[index];
  const image = byId("slide-image");
  image.src = "slides/slide-" + slide.slide + ".png";
  image.alt = "Slide " + slide.slide + ". " + slide.title;
  byId("slide-count").textContent = "Slide " + slide.slide + " of " + segments.length;
  byId("read-script").href = "#script-" + slide.slide;
  previous.disabled = index === 0;
  next.disabled = index === segments.length - 1;
  Array.from(order.children).forEach((item, i) => {
    const button = item.querySelector("button");
    if (i === index) button.setAttribute("aria-current", "step");
    else button.removeAttribute("aria-current");
  });
  const activeItem = order.children[index];
  if (activeItem && order.scrollHeight > order.clientHeight) {
    const itemRect = activeItem.getBoundingClientRect();
    const listRect = order.getBoundingClientRect();
    if (itemRect.top < listRect.top) order.scrollTop += itemRect.top - listRect.top;
    else if (itemRect.bottom > listRect.bottom) order.scrollTop += itemRect.bottom - listRect.bottom;
  }
}

function filterScripts(name) {
  speakerFilter.value = name;
  let count = 0;
  for (const article of scripts.children) {
    article.hidden = Boolean(name) && article.dataset.speaker !== name;
    if (!article.hidden) count++;
  }
  byId("filter-status").textContent = count + (count === 1 ? " section" : " sections") + " shown.";
}

function makeOrderItem(slide, index) {
  const item = makeElement("li");
  const button = makeElement("button", "", "order-button");
  button.type = "button";
  button.setAttribute("aria-label", "Slide " + slide.slide + ", " + slide.title + ", " + slide.speaker + ", starts at " + slide.start);
  button.append(
    makeElement("span", slide.start, "order-time"),
    makeElement("span", slide.title, "order-title"),
    makeElement("span", slide.speaker, "order-speaker")
  );
  button.addEventListener("click", () => {
    showSlide(index);
    if (window.matchMedia("(max-width:660px)").matches) byId("viewer").scrollIntoView({block:"start"});
  });
  item.append(button);
  return item;
}

function makeScriptSection(slide) {
  const article = makeElement("article", "", "segment");
  article.id = "script-" + slide.slide;
  article.dataset.speaker = slide.speaker;
  article.setAttribute("aria-labelledby", "script-title-" + slide.slide);

  const meta = makeElement("div", "", "segment-meta");
  const view = makeElement("a", "View slide " + slide.slide, "view-link");
  view.href = "#slide-" + slide.slide;
  meta.append(makeElement("p", slide.speaker, "speaker"), makeElement("p", slide.start + "–" + slide.end, "time"), view);
  const demoView = demoViews.get(slide.slide);
  if (demoView) {
    const demo = makeElement("a", demoView.label, "demo-link");
    demo.href = "explorer.html#" + demoView.fragment;
    demo.target = "_blank";
    demo.rel = "noopener";
    meta.append(demo);
  }

  const copy = makeElement("div", "", "copy");
  const heading = makeElement("h3", slide.title);
  heading.id = "script-title-" + slide.slide;
  copy.append(heading);
  for (const part of slide.parts) {
    const paragraph = makeElement("p", "", part.type);
    if (part.type === "cue" || part.type === "handoff") {
      paragraph.append(makeElement("span", part.type === "handoff" ? "Handoff" : "Cue", "part-label"));
    }
    paragraph.append(document.createTextNode(part.text));
    copy.append(paragraph);
  }
  article.append(meta, copy);
  return article;
}

for (const [index, slide] of segments.entries()) {
  order.append(makeOrderItem(slide,index));
  scripts.append(makeScriptSection(slide));
}
for (const speaker of new Set(segments.map(slide => slide.speaker))) {
  speakerFilter.add(new Option(speaker,speaker));
}
previous.addEventListener("click", () => showSlide(current - 1));
next.addEventListener("click", () => showSlide(current + 1));
function speakerSlug(name) {
  return name.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/-$/, "");
}

speakerFilter.addEventListener("change", () => {
  const active = speakerFilter.value;
  filterScripts(active);
  if (active) showSlide(segments.findIndex(slide => slide.speaker === active));
  history.replaceState(null, "", active ? "#speaker-" + speakerSlug(active) : "#script");
});
byId("read-script").addEventListener("click", () => {
  if (speakerFilter.value && speakerFilter.value !== segments[current].speaker) filterScripts("");
  byId("script-" + segments[current].slide).scrollIntoView({block:"start"});
});
byId("viewer").addEventListener("keydown", event => {
  if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
    event.preventDefault();
    showSlide(current + (event.key === "ArrowRight" ? 1 : -1));
  }
});

function followFragment(hash) {
  if (hash.startsWith("#speaker-")) {
    const index = segments.findIndex(slide => "#speaker-" + speakerSlug(slide.speaker) === hash);
    if (index >= 0) {
      filterScripts(segments[index].speaker);
      showSlide(index);
      byId("script").scrollIntoView({block:"start"});
    }
    return;
  }
  const match = /^#(slide|script)-(\d+)$/.exec(hash);
  if (!match) return;
  const index = segments.findIndex(slide => slide.slide === Number(match[2]));
  if (index < 0) return;
  showSlide(index);
  if (match[1] === "slide") {
    byId("viewer").focus({preventScroll:true});
    byId("viewer").scrollIntoView({block:"start"});
  } else {
    if (speakerFilter.value && speakerFilter.value !== segments[index].speaker) filterScripts("");
    byId("script-" + segments[index].slide).scrollIntoView({block:"start"});
  }
}
scripts.addEventListener("click", event => {
  const link = event.target.closest(".view-link");
  if (!link) return;
  event.preventDefault();
  if (link.hash !== location.hash) history.pushState(null, "", link.hash);
  followFragment(link.hash);
});
window.addEventListener("hashchange", () => followFragment(location.hash));
showSlide(0);
followFragment(location.hash);
