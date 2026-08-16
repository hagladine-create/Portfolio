# Comprehensive Portfolio Base

This is a static, dependency-free portfolio foundation built around two primary media types:

- SoundCloud audio embeds
- YouTube video embeds

The goal is to give you a structure you can keep for a long time, even if the visual design changes completely later.

## Project structure

```text
portfolio-base-comprehensive/
├── index.html
├── content.js
├── script.js
├── styles.css
├── site.webmanifest
├── robots.txt
└── README.md
```

## The one file you will edit most often

Use `content.js`.

It contains:

- basic site information
- about copy
- contact details
- social links
- audio projects
- video projects

The layout and rendering logic live elsewhere so you do not need to keep editing HTML every time you add something.

---

## Add an audio project

Open `content.js` and copy an object inside `AUDIO_PROJECTS`.

```js
{
  title: "Project Name",
  type: "Original Score",
  year: "2026",
  description: "A short description.",
  soundcloudUrl: "https://soundcloud.com/your-account/your-track",

  tags: ["Score", "Film"],
  featured: true,

  credits: [
    { label: "Role", value: "Composer" }
  ],

  externalUrl: ""
}
```

The only strictly important fields are `title` and `soundcloudUrl`.

A SoundCloud track or playlist URL can be used.

---

## Add a video project

Copy an object inside `VIDEO_PROJECTS`.

```js
{
  title: "Project Name",
  type: "Short Film",
  year: "2026",
  description: "A short description.",
  youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID",

  tags: ["Film", "Editing"],
  featured: false,

  credits: [
    { label: "Role", value: "Editor" }
  ],

  externalUrl: ""
}
```

Accepted YouTube URL formats include normal watch links, `youtu.be` links, Shorts, live links, and embed links.

---

## Featured work

Set:

```js
featured: true
```

on any audio or video project.

It will automatically appear in the Featured section.

---

## Filters

The Audio and Video sections automatically create filter buttons from your project `tags`.

For example:

```js
tags: ["Score", "Documentary"]
```

If several projects use those tags, visitors can filter the section without you doing anything else.

---

## Credits

Each project can have an optional credits list:

```js
credits: [
  { label: "Role", value: "Composer" },
  { label: "Director", value: "Jane Example" },
  { label: "Production", value: "Example Studio" }
]
```

This is useful for collaborative work.

---

## External project links

If a project also has a case study, production page, article, IMDb page, festival page, etc., put it in:

```js
externalUrl: "https://example.com/project"
```

Leave it as an empty string if you do not need it.

---

## What is already handled

The base currently includes:

- responsive layout
- mobile navigation
- SoundCloud embeds
- YouTube privacy-enhanced embeds
- lazy-loaded media embeds
- featured project section
- tag filtering
- project credits
- optional external project links
- separate Audio and Video sections
- About section
- Contact section
- social links
- keyboard focus states
- skip-to-content link
- reduced-motion support
- basic SEO/social meta tags
- current-year footer
- placeholder manifest and robots file
- graceful messages for invalid embed URLs
- no frameworks
- no package manager
- no build process

---

## Preview locally

You can simply open `index.html` in a browser.

Or start a tiny local web server from the folder:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

---

## Hosting

Because this is a static website, it can be hosted almost anywhere:

- GitHub Pages
- Netlify
- Cloudflare Pages
- Vercel
- traditional web hosting
- your own server

No server-side code or database is required.

---

## Later customization

When you are ready to make the site visually yours, the safest order is:

1. Change the variables at the top of `styles.css`.
2. Change typography and spacing.
3. Redesign individual cards/sections.
4. Add imagery, animation, or additional pages if needed.

You should not need to change the project data model just to redesign the site.
