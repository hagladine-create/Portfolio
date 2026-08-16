/* ==========================================================
   CONTENT.JS
   This is the main file you will edit most often.

   You can safely leave the layout files alone and add/update content here.
========================================================== */

const SITE = {
  name: "Hanne Gladiné",
  role: "Sound Technician · Sound Designer · Video Editor",
  headline: "Portfolio of Hanne",
  intro:
    "A love everything to do with sound. From live mixing to sounddesign.",

  email: "Hagladine@gmail.com",
  contactNote:
    "For project enquiries, collaborations, commissions, or other work, email me directly.",

  about: [
    "I studied composition at the conservatory of Antwerp under Wim Henderickx for 2 years and that same love for music, sound and creation got me to explore and brought me toward sound technics and sounddesign.",
    /*"This second paragraph can cover your creative approach, recent work, location, availability, or anything else that gives context to the portfolio."*/
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
    type: "Soundscape",
    year: "2025",
    description:
      "A soundscape of baking brownies. Everything in here was recorded and edited by me.",

    soundcloudUrl:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2339051357%3Fsecret_token%3Ds-N90MhlDQZqJ&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",

    tags: ["Soundscape", "Sound Design", "Foley"],
    featured: true,
    externalUrl: "",
  },
  {
    title: "Cooking with Hanne",
    type: "Cooking Soundscape",
    year: "2025",
    description:
      "A soundscape of baking brownies. Everything in here was recorded and edited by me.",

    soundcloudUrl:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2339045480%3Fsecret_token%3Ds-juG0kptzAzr&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",

    tags: ["Soundscape", "Sound Design", "Foley"],
    externalUrl: "",
  },

  {
    title: "GlitchBitch Festival",
    type: "Radio Commercial",
    year: "2025",
    description:
      "A radiocommercial for a fictive music festival. The voiceover is recorded by me, further this is all cutting.",
    soundcloudUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2339045480%3Fsecret_token%3Ds-juG0kptzAzr&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",

    tags: ["Sound Design"],

    featured: true,

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

    tags: ["Promovideo", "Sounddesign", "Foley"],
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

    tags: ["Music Video", "Video Postproduction", "Promovideo"],
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
  description: "A youth political program KDG recorded for CD&V. My tasks included: Setting up audio equipment, Live Mixing, occasionally booming,syncing all episodes and audio postproduction for the intro and episode 2 and 3",
  youtubeUrl: "https://youtu.be/pnO3FlTGHhs",

  tags: ["Audio Recording", "Audio Postproduction", "Audio Chef", "Live Mixing", "Sound technics"],
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

  tags: ["Audio Postproduction", "Sounddesign", "Video Postproduction", "Audio Chef"],
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
  description: "A youth political program KDG recorded for CD&V. My tasks included: Setting up audio equipment, Live Mixing, occasionally booming,syncing all episodes and audio postproduction for the intro and episode 2 and 3",
  youtubeUrl: "https://youtu.be/pnO3FlTGHhs",

  tags: ["Foley", "Audio Postproduction", "Audio Chef"],
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
  description: "A Live Gameshow our class made for a school project. My task: The technics for the band setup, mixing table routing, setting up audio equipment in general, Live Mixing for the live audience (the mixing for the live stream was done by someone else)",
  youtubeUrl: "https://www.youtube.com/live/7S1sFLS_5a8",

  tags: ["Audio Technics", "Live Mixing"],
  featured: false,

  credits: [
    { label: "Role", value: "Audio Assistent" }
  ],

  

  externalUrl: ""
},
{
  title: "Achter de boeken",
  type: "Podcast",
  year: "2025",
  description: "A live podcast about student time, halloween edition, made for a school project. Here I was Audio Chef and I made a few of the assets.",
  youtubeUrl: "https://youtu.be/7cACavvHp6o",

  tags: ["Live Mixing", "Audio Technics", "Audio Chef", "Audio Assets"],
  featured: false,

  credits: [
    { label: "Role", value: "Audio Chef" }
  ],

  externalUrl: ""
}
];
