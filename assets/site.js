/* =============================================================================
   site.js — rendering engine. You normally do NOT edit this; content is in
   assets/data.js.
   ============================================================================= */
(function () {
  "use strict";
  var DATA = window.SITE || {};

  function $(s, r) { return (r || document).querySelector(s); }
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function reEsc(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }

  /* bold the author's name — matches any alias (see meAliases in data.js),
     longest first, and never double-wraps. */
  function boldName(authors) {
    var s = esc(authors);
    var aliases = (DATA.meAliases && DATA.meAliases.length)
      ? DATA.meAliases.slice()
      : [DATA.me, (DATA.me || "").split(" ")[0]];
    aliases = aliases.filter(Boolean).sort(function (a, b) { return b.length - a.length; });
    aliases.forEach(function (name) {
      var re = new RegExp("(^|[^\\w<>])(" + reEsc(esc(name)) + ")(?![\\w])", "g");
      s = s.replace(re, function (m, pre, hit) { return pre + "<strong>" + hit + "</strong>"; });
    });
    return s;
  }

  /* ---------- brand icons (paths from simpleicons.org) ---------- */
  var ICONS = {
    email: 'M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z',
    github: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
    linkedin: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    googlescholar: 'M5.242 13.769 0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.547 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z',
    x: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.39-6.933zm-1.29 19.5h2.039L6.486 3.24H4.298L17.61 20.653z',
    youtube: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
    researchgate: 'M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.346 3.346 0 0 0-.113.438 7.86 7.86 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.12 31.12 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.94 7.94 0 0 0 .077.53h-.005a3.32 3.32 0 0 0 .113.438c.243.743.65 1.303 1.213 1.68.565.376 1.255.564 2.075.564.81 0 1.518-.197 2.105-.592a3.575 3.575 0 0 0 1.31-1.609 4.602 4.602 0 0 0 .115-.345l.053-.189a8.7 8.7 0 0 0 .137-.788 9.31 9.31 0 0 0 .075-1.16l-.001-.057a9.79 9.79 0 0 0-.075-1.16 8.7 8.7 0 0 0-.137-.788 4.6 4.6 0 0 0-.168-.534 3.575 3.575 0 0 0-1.31-1.608C21.104.197 20.396 0 19.586 0zm0 1.155c.576 0 1.013.124 1.35.353.336.23.581.6.748 1.117.043.13.078.27.106.422.027.151.05.318.063.5.014.181.025.39.033.622.006.235.008.5.008.799 0 .298-.002.563-.008.798a8.88 8.88 0 0 1-.033.623 4.12 4.12 0 0 1-.063.5 2.683 2.683 0 0 1-.106.421c-.167.518-.412.888-.749 1.118-.336.23-.773.353-1.349.353-.575 0-1.012-.124-1.348-.353-.337-.23-.582-.6-.75-1.118a2.683 2.683 0 0 1-.105-.421 4.12 4.12 0 0 1-.064-.5 8.88 8.88 0 0 1-.033-.623 21.51 21.51 0 0 1-.008-.798c0-.299.003-.564.008-.799.008-.232.019-.44.033-.622.014-.182.036-.349.064-.5.027-.152.062-.292.105-.422.168-.518.413-.887.75-1.117.336-.23.773-.353 1.348-.353zM8.217 5.301c-1.453 0-2.7.252-3.722.745-1.023.494-1.808 1.196-2.354 2.08C1.595 9.01 1.32 10.052 1.32 11.262c0 1.244.283 2.31.836 3.183.554.874 1.347 1.542 2.376 1.99 1.03.447 2.265.67 3.69.67.674 0 1.343-.056 2.005-.168a14.43 14.43 0 0 0 1.865-.44V9.863H8.342v4.494h1.587v1.682a4.73 4.73 0 0 1-.715.124 8.16 8.16 0 0 1-.881.045c-.79 0-1.466-.155-2.022-.464-.557-.31-.98-.76-1.27-1.346-.29-.587-.434-1.297-.434-2.127 0-.82.16-1.524.48-2.106.32-.582.778-1.026 1.371-1.328.594-.302 1.302-.453 2.122-.453.5 0 .963.044 1.389.131a6.46 6.46 0 0 1 1.146.336l.49-1.439a6.6 6.6 0 0 0-1.354-.39 9.6 9.6 0 0 0-1.733-.142z',
    orcid: 'M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c2.359 0 3.588-1.444 3.588-3.722 0-2.016-1.075-3.722-3.588-3.722h-2.297z',
  };
  var LABELS = {
    email: "Email", github: "GitHub", linkedin: "LinkedIn",
    googlescholar: "Google Scholar", x: "X", youtube: "YouTube",
    researchgate: "ResearchGate", orcid: "ORCID",
  };
  function svgIcon(net) {
    var d = ICONS[net]; if (!d) return "";
    return '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">' +
           '<path fill="currentColor" d="' + d + '"/></svg>';
  }

  function renderSocials() {
    var list = DATA.socials || [];
    document.querySelectorAll("[data-socials]").forEach(function (box) {
      var excl = (box.getAttribute("data-socials-exclude") || "")
        .split(",").map(function (s) { return s.trim(); }).filter(Boolean);
      box.innerHTML = list
        .filter(function (s) { return ICONS[s.network] && excl.indexOf(s.network) === -1; })
        .map(function (s) {
          var label = LABELS[s.network] || s.network;
          var off = (!s.url || s.url === "#");
          return '<a class="social' + (off ? " social--off" : "") + '" href="' + esc(s.url || "#") + '"' +
            (off ? "" : ' target="_blank" rel="noopener"') +
            ' aria-label="' + esc(label) + '" title="' + esc(label) + '">' + svgIcon(s.network) + "</a>";
        }).join("");
    });
  }

  /* ---------- publications ---------- */
  function pubLink(label, url) {
    if (url && url !== "#")
      return '<a href="' + esc(url) + '" target="_blank" rel="noopener">' + label + "</a>";
    return '<span class="off" aria-disabled="true" title="' + label + ' — not available">' + label + "</span>";
  }
  /* year goes right after the main venue, before extras like "also … Workshop" */
  function venueLine(p) {
    var parts = String(p.venue || "").split(" · ").filter(Boolean);
    if (p.year) parts.splice(Math.min(1, parts.length), 0, String(p.year));
    return parts.map(esc).join(" · ");
  }
  function pubCard(p, idx) {
    // buttons: Paper (arXiv if there is one, else the publisher link) and Code
    // always (greyed when empty); Poster and Vlog/Video only when available.
    function has(u) { return u && u !== "#"; }
    var links = pubLink("Paper", has(p.arxiv) ? p.arxiv : p.paper) + pubLink("Code", p.code);
    if (has(p.poster)) links += pubLink("Poster", p.poster);
    var vid = (p.links || []).filter(function (l) { return l && has(l.url) && /^(vlog|video)$/i.test(l.label); })[0];
    var extra = vid ? '<a href="' + esc(vid.url) + '" target="_blank" rel="noopener">' + esc(vid.label) + "</a>" : "";
    var cite = p.bibtex ? '<button class="pub__cite" type="button" data-cite="' + idx + '">Cite</button>' : "";
    var bib = p.bibtex ? '<pre class="pub__bibtex" id="bibtex-' + idx + '" hidden>' + esc(p.bibtex) + "</pre>" : "";
    return '<li class="pub">' +
        '<span class="pub__badge">' + esc(p.badge || p.year || "") + "</span>" +
        '<div class="pub__body">' +
          '<h3 class="pub__title">' + esc(p.title) + "</h3>" +
          '<p class="pub__authors">' + boldName(p.authors) + "</p>" +
          '<p class="pub__venue">' + venueLine(p) + "</p>" +
          '<div class="pub__links">' + links + extra + cite + "</div>" + bib +
        "</div></li>";
  }

  function renderPublications() {
    var box = $("#pub-list");
    if (!box) return;
    var all = (DATA.publications || []).slice().sort(function (a, b) { return (b.year || 0) - (a.year || 0); });
    var limit = parseInt(box.getAttribute("data-limit"), 10);
    var grouped = box.getAttribute("data-group") === "year";

    if (grouped) {
      var byYear = {};
      all.forEach(function (p) { (byYear[p.year] = byYear[p.year] || []).push(p); });
      box.innerHTML = Object.keys(byYear).sort(function (a, b) { return b - a; }).map(function (y) {
        return '<div class="year-group"><h2 class="year-group__label">' + esc(y) + "</h2>" +
          '<ol class="pubs">' + byYear[y].map(function (p) { return pubCard(p, all.indexOf(p)); }).join("") + "</ol></div>";
      }).join("");
    } else {
      var shown = isNaN(limit) ? all : all.slice(0, limit);
      box.innerHTML = '<ol class="pubs">' + shown.map(function (p) { return pubCard(p, all.indexOf(p)); }).join("") + "</ol>";
      if (!isNaN(limit)) {
        var more = document.createElement("div");
        more.className = "more";
        more.innerHTML = '<a class="btn" href="publications.html">All publications →</a>';
        box.appendChild(more);
      }
    }
  }

  /* ---------- Cite popup (modal) ---------- */
  var openCiteId = null;
  function ensureModal() {
    var m = $("#cite-modal");
    if (m) return m;
    m = document.createElement("div");
    m.id = "cite-modal"; m.className = "modal"; m.hidden = true;
    m.innerHTML =
      '<div class="modal__backdrop" data-close></div>' +
      '<div class="modal__dialog" role="dialog" aria-modal="true" aria-label="BibTeX citation">' +
        '<div class="modal__head">' +
          '<span class="modal__title">BibTeX</span>' +
          '<button class="modal__copy" type="button">Copy</button>' +
          '<button class="modal__close" type="button" aria-label="Close" data-close>×</button>' +
        "</div>" +
        '<pre class="modal__pre"></pre>' +
      "</div>";
    document.body.appendChild(m);
    m.addEventListener("click", function (e) { if (e.target.closest("[data-close]")) closeModal(); });
    m.querySelector(".modal__copy").addEventListener("click", function () {
      copyText(m.querySelector(".modal__pre").textContent, this);
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeModal(); });
    return m;
  }
  function openModal(text, id) {
    var m = ensureModal();
    m.querySelector(".modal__pre").textContent = text;
    m.querySelector(".modal__copy").textContent = "Copy";
    m.querySelector(".modal__copy").classList.remove("is-copied");
    m.hidden = false;
    document.body.classList.add("modal-open");
    openCiteId = id;
  }
  function closeModal() {
    var m = $("#cite-modal"); if (m) m.hidden = true;
    document.body.classList.remove("modal-open");
    openCiteId = null;
  }
  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-cite]");
    if (!btn) return;
    var id = btn.getAttribute("data-cite");
    if (openCiteId === id) { closeModal(); return; }   // click Cite again to close
    var pre = $("#bibtex-" + id);
    openModal(pre ? pre.textContent : "", id);
  });

  function copyText(text, btn) {
    if (!text) return;
    var done = function () {
      if (!btn) return;
      var old = btn.getAttribute("data-label") || btn.textContent;
      btn.setAttribute("data-label", old);
      btn.textContent = "Copied!"; btn.classList.add("is-copied");
      setTimeout(function () { btn.textContent = old; btn.classList.remove("is-copied"); }, 1600);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, fallback);
    } else { fallback(); }
    function fallback() {
      try {
        var ta = document.createElement("textarea");
        ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
        document.body.appendChild(ta); ta.select(); document.execCommand("copy");
        document.body.removeChild(ta); done();
      } catch (e) {}
    }
  }

  /* ---------- news ---------- */
  function newsItem(n) {
    return '<li class="news__item"><span class="news__date">' + esc(n.date) + "</span>" +
      '<span class="news__text">' + (n.html || "") + "</span></li>";
  }
  function renderNews() {
    var box = $("#news-list");
    if (!box) return;
    var all = DATA.news || [];
    var limit = parseInt(box.getAttribute("data-limit"), 10);
    var grouped = box.getAttribute("data-group") === "year";

    if (grouped) {
      var byYear = {};
      all.forEach(function (n) { (byYear[n.year] = byYear[n.year] || []).push(n); });
      box.innerHTML = Object.keys(byYear).sort(function (a, b) { return b - a; }).map(function (y) {
        return '<div class="year-group"><h2 class="year-group__label">' + esc(y) + "</h2>" +
          '<ul class="news">' + byYear[y].map(newsItem).join("") + "</ul></div>";
      }).join("");
      return;
    }
    var shown = isNaN(limit) ? all : all.slice(0, limit);
    box.innerHTML = '<ul class="news">' + shown.map(newsItem).join("") + "</ul>";
    if (!isNaN(limit)) {
      var more = document.createElement("div");
      more.className = "more";
      more.innerHTML = '<a class="btn" href="news.html">More →</a>';
      box.appendChild(more);
    }
  }

  /* ---------- academic service ---------- */
  function renderService() {
    var box = $("#service-list");
    if (!box) return;
    box.innerHTML = (DATA.service || []).map(function (g) {
      var items = (g.items || []).map(function (i) { return "<span>" + esc(i) + "</span>"; }).join("");
      return '<div class="service"><h3 class="service__role">' + esc(g.role) + "</h3>" +
        '<div class="service__items">' + items + "</div></div>";
    }).join("");
  }

  /* ---------- journey (timeline) ---------- */
  function renderJourney() {
    var box = $("#journey-list");
    if (!box) return;
    var items = DATA.journey || [];
    box.className = "timeline";
    box.innerHTML = items.map(function (x, i) {
      var pts = (x.points || []).map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("");
      var kind = x.kind ? '<span class="tl-kind">' + esc(x.kind) + "</span>" : "";
      return '<div class="tl-item ' + (i % 2 ? "tl-item--right" : "tl-item--left") + '">' +
        '<div class="tl-dot" aria-hidden="true"></div>' +
        '<div class="tl-card">' +
          '<div class="tl-meta"><span class="tl-period">' + esc(x.period) + "</span>" + kind + "</div>" +
          '<h3 class="tl-role">' + esc(x.role) + "</h3>" +
          '<p class="tl-org">' + esc(x.org) +
            (x.location ? ' · <span class="tl-loc">' + esc(x.location) + "</span>" : "") + "</p>" +
          (pts ? '<ul class="tl-points">' + pts + "</ul>" : "") +
        "</div></div>";
    }).join("");
  }

  /* ---------- teaching (tiles) ---------- */
  function renderTeaching() {
    var box = $("#teaching-list");
    if (!box) return;
    box.className = "tiles";
    box.innerHTML = (DATA.teaching || []).map(function (t) {
      var pts = (t.points || []).map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("");
      var link = (t.url && t.url !== "#")
        ? '<a class="tile__link" href="' + esc(t.url) + '" target="_blank" rel="noopener">Course page →</a>' : "";
      return '<article class="tile"><span class="tile__term">' + esc(t.term) + "</span>" +
        '<h3 class="tile__course">' + esc(t.course) + "</h3>" +
        '<p class="tile__meta">' + esc(t.role) + (t.institution ? " · " + esc(t.institution) : "") + "</p>" +
        (pts ? '<ul class="tile__points">' + pts + "</ul>" : "") + link + "</article>";
    }).join("");
  }

  /* ---------- chrome: theme toggle + year ---------- */
  function initChrome() {
    var y = $("#year"); if (y) y.textContent = new Date().getFullYear();
    var root = document.documentElement, btn = $("#theme-toggle");
    if (!btn) return;
    function setIcon() {
      var isDark = root.getAttribute("data-theme") === "dark";
      var ic = btn.querySelector(".theme-toggle__icon"); if (ic) ic.textContent = isDark ? "☀" : "🌙";
      var label = isDark ? "Switch to light mode" : "Switch to dark mode";
      btn.setAttribute("aria-pressed", String(isDark));
      btn.setAttribute("aria-label", label); btn.setAttribute("title", label);
    }
    setIcon();
    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      setIcon();
    });
  }

  function init() {
    initChrome();
    renderSocials();
    renderPublications();
    renderNews();
    renderService();
    renderJourney();
    renderTeaching();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
