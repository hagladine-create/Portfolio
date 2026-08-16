/* ==========================================================
   SITE LOGIC
   Most of the time you should not need to edit this file.
========================================================== */

const qs = (selector, root = document) => root.querySelector(selector);
const qsa = (selector, root = document) => [...root.querySelectorAll(selector)];

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function safeExternalUrl(url = "") {
  const trimmed = String(url).trim();
  if (!trimmed || trimmed === "#") return "";
  try {
    const parsed = new URL(trimmed);
    return ["http:", "https:"].includes(parsed.protocol) ? parsed.href : "";
  } catch {
    return "";
  }
}

function soundCloudEmbedUrl(url) {
  return `https://w.soundcloud.com/player/?url=${encodeURIComponent(
    url
  )}&color=%23141414&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&visual=false`;
}

function getYouTubeId(url) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace("www.", "");

    if (host === "youtu.be") {
      return parsed.pathname.split("/").filter(Boolean)[0] || "";
    }

    if (host === "youtube.com" || host === "m.youtube.com") {
      if (parsed.pathname === "/watch") {
        return parsed.searchParams.get("v") || "";
      }

      const parts = parsed.pathname.split("/").filter(Boolean);
      if (["embed", "shorts", "live"].includes(parts[0])) {
        return parts[1] || "";
      }
    }
  } catch {
    return "";
  }

  return "";
}

function metaLine(project) {
  return [project.type, project.year].filter(Boolean).map(escapeHtml).join(" · ");
}

function tagsMarkup(tags = []) {
  if (!tags.length) return "";
  return `
    <ul class="tag-list" aria-label="Project tags">
      ${tags.map(tag => `<li>${escapeHtml(tag)}</li>`).join("")}
    </ul>
  `;
}

function creditsMarkup(credits = []) {
  if (!credits.length) return "";
  return `
    <dl class="credits">
      ${credits.map(item => `
        <div>
          <dt>${escapeHtml(item.label)}</dt>
          <dd>${escapeHtml(item.value)}</dd>
        </div>
      `).join("")}
    </dl>
  `;
}

function projectLinkMarkup(url) {
  const safeUrl = safeExternalUrl(url);
  if (!safeUrl) return "";
  return `
    <a class="project-link" href="${escapeHtml(safeUrl)}" target="_blank" rel="noreferrer">
      Project link ↗
    </a>
  `;
}

function audioCard(project) {
  const hasValidUrl = safeExternalUrl(project.soundcloudUrl);

  return `
    <article class="audio-card">
      <div class="card-copy">
        ${metaLine(project) ? `<span class="meta">${metaLine(project)}</span>` : ""}
        <h3>${escapeHtml(project.title)}</h3>
        ${project.description ? `<p>${escapeHtml(project.description)}</p>` : ""}
        ${tagsMarkup(project.tags)}
        ${creditsMarkup(project.credits)}
        ${projectLinkMarkup(project.externalUrl)}
      </div>

      <div class="embed-shell">
        ${
          hasValidUrl
            ? `<iframe
                class="soundcloud-frame"
                title="SoundCloud player for ${escapeHtml(project.title)}"
                loading="lazy"
                allow="autoplay"
                src="${escapeHtml(project.soundcloudUrl)}"
              </iframe>`
            : `<div class="embed-error">Add a valid SoundCloud URL in <code>content.js</code>.</div>`
        }
      </div>
    </article>
  `;
}

function videoCard(project) {
  const videoId = getYouTubeId(project.youtubeUrl);

  return `
    <article class="video-card">
      <div class="video-frame">
        ${
          videoId
            ? `<iframe
                title="YouTube video for ${escapeHtml(project.title)}"
                loading="lazy"
                src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen>
              </iframe>`
            : `<div class="embed-error">Add a valid YouTube URL in <code>content.js</code>.</div>`
        }
      </div>

      <div class="video-copy">
        ${metaLine(project) ? `<span class="meta">${metaLine(project)}</span>` : ""}
        <h3>${escapeHtml(project.title)}</h3>
        ${project.description ? `<p>${escapeHtml(project.description)}</p>` : ""}
        ${tagsMarkup(project.tags)}
        ${creditsMarkup(project.credits)}
        ${projectLinkMarkup(project.externalUrl)}
      </div>
    </article>
  `;
}

function featuredCard(project, mediaType) {
  const label = mediaType === "audio" ? "Audio" : "Video";
  const target = mediaType === "audio" ? "#audio" : "#video";

  return `
    <article class="featured-card">
      <span class="meta">${label}${project.year ? ` · ${escapeHtml(project.year)}` : ""}</span>
      <h3>${escapeHtml(project.title)}</h3>
      ${project.description ? `<p>${escapeHtml(project.description)}</p>` : ""}
      ${tagsMarkup(project.tags)}
      <a class="project-link" href="${target}">View in ${label.toLowerCase()} section ↓</a>
    </article>
  `;
}

function uniqueTags(projects) {
  return [...new Set(projects.flatMap(project => project.tags || []))]
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b));
}

function renderFilters(container, projects, renderFn, target) {
  const tags = uniqueTags(projects);

  if (!tags.length) {
    container.hidden = true;
    return;
  }

  container.innerHTML = [
    `<button class="filter-button is-active" type="button" data-filter="all">All</button>`,
    ...tags.map(tag => `
      <button class="filter-button" type="button" data-filter="${escapeHtml(tag)}">
        ${escapeHtml(tag)}
      </button>
    `)
  ].join("");

  container.addEventListener("click", event => {
    const button = event.target.closest("button[data-filter]");
    if (!button) return;

    qsa("button", container).forEach(btn => btn.classList.remove("is-active"));
    button.classList.add("is-active");

    const filter = button.dataset.filter;
    const filtered =
      filter === "all"
        ? projects
        : projects.filter(project => (project.tags || []).includes(filter));

    target.innerHTML = filtered.map(renderFn).join("");
  });
}

function renderSiteContent() {
  qs("#site-name").textContent = SITE.name;
  qs("#footer-name").textContent = SITE.name;
  qs("#site-role").textContent = SITE.role;
  qs("#hero-title").textContent = SITE.headline;
  qs("#site-intro").textContent = SITE.intro;

  const email = String(SITE.email || "").trim();
  const emailLink = qs("#email-link");
  emailLink.textContent = email || "Add your email";
  emailLink.href = email ? `mailto:${email}` : "#contact";

  qs("#contact-note").textContent = SITE.contactNote || "";

  qs("#about-copy").innerHTML = (SITE.about || [])
    .map(paragraph => `<p>${escapeHtml(paragraph)}</p>`)
    .join("");

  qs("#fact-list").innerHTML = (SITE.facts || [])
    .map(item => `
      <div>
        <dt>${escapeHtml(item.label)}</dt>
        <dd>${escapeHtml(item.value)}</dd>
      </div>
    `)
    .join("");

  qs("#social-links").innerHTML = (SITE.socials || [])
    .map(item => {
      const url = safeExternalUrl(item.url);
      if (!url) return "";
      return `<a href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${escapeHtml(item.label)}</a>`;
    })
    .join("");
}

function renderProjects() {
  const audioList = qs("#audio-list");
  const videoGrid = qs("#video-grid");
  const featuredGrid = qs("#featured-grid");

  audioList.innerHTML = AUDIO_PROJECTS.length
    ? AUDIO_PROJECTS.map(audioCard).join("")
    : `<p class="empty-state">No audio projects added yet.</p>`;

  videoGrid.innerHTML = VIDEO_PROJECTS.length
    ? VIDEO_PROJECTS.map(videoCard).join("")
    : `<p class="empty-state">No video projects added yet.</p>`;

  const featured = [
    ...AUDIO_PROJECTS.filter(project => project.featured).map(project => ({ ...project, mediaType: "audio" })),
    ...VIDEO_PROJECTS.filter(project => project.featured).map(project => ({ ...project, mediaType: "video" }))
  ];

  featuredGrid.innerHTML = featured.length
    ? featured.map(project => featuredCard(project, project.mediaType)).join("")
    : `<p class="empty-state">Mark projects with <code>featured: true</code> to show them here.</p>`;

  renderFilters(qs("#audio-filters"), AUDIO_PROJECTS, audioCard, audioList);
  renderFilters(qs("#video-filters"), VIDEO_PROJECTS, videoCard, videoGrid);
}

function setupMobileMenu() {
  const button = qs(".menu-button");
  const nav = qs("#site-nav");

  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("is-open", !expanded);
  });

  qsa("a", nav).forEach(link => {
    link.addEventListener("click", () => {
      button.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    });
  });
}

renderSiteContent();
renderProjects();
setupMobileMenu();

qs("#year").textContent = new Date().getFullYear();
