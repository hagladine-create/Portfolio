/* ==========================================================
   CONTENT.JS
   This is the main file you will edit most often.

   You can safely leave the layout files alone and add/update content here.
========================================================== */

const SITE = {
  name: "Hanne Gladiné",
  role: "Sound Technician · Sound Designer · Video Editor",
  headline: "A flexible home for your work.",
  intro:
    "A short introduction to what you do, the kind of work you make, and the kinds of projects you want to be hired for.",

  email: "Hagladine@gmail.com",
  contactNote:
    "For project enquiries, collaborations, commissions, or other work, email me directly.",

  about: [
    "Replace this paragraph with a concise bio. You can mention your background, current practice, specialties, and the kinds of collaborators or clients you work with.",
    "This second paragraph can cover your creative approach, recent work, location, availability, or anything else that gives context to the portfolio."
  ],

  facts: [
    { label: "Based in", value: "Belgium - Antwerp" },
    { label: "Available for", value: "Freelance / commissions / collaborations" },
    { label: "Focus", value: "Audio, sound, film, and related creative work" }
  ],

  socials: [
    { label: "Instagram", url: "#" },
    { label: "LinkedIn", url: "#" },
    { label: "SoundCloud", url: "#" },
    { label: "YouTube", url: "#" }
  ]
};


/* ==========================================================
   AUDIO PROJECTS

   Required:
   - title
   - soundcloudUrl

   Optional:
   - type
   - year
   - description
   - tags
   - featured
   - credits
   - externalUrl
========================================================== */

const AUDIO_PROJECTS = [
  {
    title: "Cooking with Hanne",
    type: "Cooking Soundscape",
    year: "2025",
    description:
      "A soundscape of baking brownies. Everything in here was recorded and edited by me.",

    soundcloudUrl:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2339051357%3Fsecret_token%3Ds-N90MhlDQZqJ&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",

    tags: ["Soundscape", "Sound Design", "Own SFX"],
    featured: true,
    externalUrl: "",
  },

  {
    title: "RadioSpot",
    type: "Sound Design",
    year: "2025",
    description:
      "A radiocommercial for a fictive music festival. The voiceover is recorded by me, further this is all cutting.",
    soundcloudUrl: "https://soundcloud.com/hanne-gladine/radiospot-2024-2025/s-juG0kptzAzr?si=ca7e003649c84f548b4eb87d2a37a099&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",

    tags: ["Sound Design"],

    featured: true,

    credits: [
      { label: "Role", value: "Sound Designer" }
    ],

    externalUrl: ""
  }
];


/* ==========================================================
   VIDEO PROJECTS

   Required:
   - title
   - youtubeUrl

   Optional:
   - type
   - year
   - description
   - tags
   - featured
   - credits
   - externalUrl

   Accepted YouTube URLs include:
   - youtube.com/watch?v=...
   - youtu.be/...
   - youtube.com/shorts/...
   - youtube.com/live/...
   - youtube.com/embed/...
========================================================== */

const VIDEO_PROJECTS = [
  {
    title: "Ipjeshoeve",
    type: "Promovideo",
    year: "2026",
    description:
      "Een promovideo met Ciara Vangestel als cameravrouw en video editor voor de paarden manège Ipjeshoeve.",
    youtubeUrl: "https://youtu.be/mWy1UjQIj3o",

    tags: ["Promovideo", "Sounddesign", "Own SFX"],
    featured: true,

    credits: [
      { label: "Role", value: "Sound Director" }
    ],

    externalUrl: ""
  },

  {
    title: "Gaga - geluidshuis",
    type: "Studio Performance Video",
    year: "2026",
    description:
      "A video edited for het geluidshuis with delivered video footage and audio where I mixed the live recording onto the finished song.",
    youtubeUrl: "https://youtu.be/7dfJd7P7le0",

    tags: ["Music Video", "Mixing", "Video Editing", "Post Production", "Promovideo"],
    featured: false,

    credits: [
      { label: "Role", value: "Editor" }
    ],

    externalUrl: ""
  },

  {
  title: "Op Slot",
  type: "Tv Program",
  year: "2026",
  description: "A youth political program KDG recorded for CD&V. My tasks included: Setting up audio equipment, live mixing, occasionally booming,syncing all episodes and audio postproduction for the intro and episode 2 and 3",
  youtubeUrl: "https://youtu.be/pnO3FlTGHhs",

  tags: ["Audio Recording", "Audio Postproduction", "Audio Director", "Live mixing", "Sound technicics"],
  featured: false,

  credits: [
    { label: "Role", value: "Sound Director" }
  ],

  

  externalUrl: ""
},

{
  title: "Breathe Eaze",
  type: "Promo Video",
  year: "2025",
  description: "A sort of apocalyptic promovideo about canned fresh air, made as a school task.",
  youtubeUrl: "https://youtu.be/OJLyC3yFc0M",

  tags: ["Audio Recording", "Audio Postproduction", "Video Postproduction"],
  featured: false,

  credits: [
    { label: "Role", value: "Director" }
  ],

  

  externalUrl: ""
},

{
  title: "Willy Wonka",
  type: "Promo Video",
  year: "2026",
  description: "A youth political program KDG recorded for CD&V. My tasks included: Setting up audio equipment, live mixing, occasionally booming,syncing all episodes and audio postproduction for the intro and episode 2 and 3",
  youtubeUrl: "https://youtu.be/pnO3FlTGHhs",

  tags: ["Audio Recording", "Audio Postproduction", "Audio Director", "Live mixing", "Sound technicics"],
  featured: false,

  credits: [
    { label: "Role", value: "Editor" }
  ],

  

  externalUrl: ""
},

{
  title: "Rad van fortuin",
  type: "Live Game Show",
  year: "2026",
  description: "A Live Gameshow our class made for a school project. My task: The technics for the band setup, mixing table routing, setting up audio equipment in general, live mixing for the live audience (the mixing for the live stream was done by someone else)",
  youtubeUrl: "https://www.youtube.com/live/7S1sFLS_5a8",

  tags: ["Audio Technics", "Live mixing"],
  featured: false,

  credits: [
    { label: "Role", value: "Audio Assistent" }
  ],

  

  externalUrl: ""
}
];
