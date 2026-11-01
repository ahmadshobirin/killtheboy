// Site content. Edit this file only; index.html renders it.
// status: "live" | "planned" | "stopped"
window.KTB = {
  owner: "Shob",
  // Professional site / resume. Shown in the footer when set.
  resumeUrl: "",
  links: [
    // { label: "GitLab", url: "https://gitlab.com/..." },
  ],

  // The scene the site is named after (YouTube id).
  scene: { id: "NMrz93vxJRU", credit: "Maester Aemon to Jon Snow · Game of Thrones S05E05" },

  // The boy / the man table. Visitors tap a row to kill the boy in it.
  boy: [
    { topic: "Choices", boy: "Waits until everyone agrees, then calls it consensus.", man: "Picks the least bad option today and lives with it." },
    { topic: "Being liked", boy: "Needs every client call to end with a smile.", man: "Says the unpopular true thing early." },
    { topic: "Failure", boy: "Blames the deadline, the server, the spec.", man: "Owns the outage and writes the postmortem." },
    { topic: "Comfort", boy: "Keeps a stack because it already works.", man: "Treats whatever feels easy as the next thing to outgrow." },
    { topic: "Readiness", boy: "Ships when it is perfect, which is never.", man: "Ships the first honest version and improves it in public." },
  ],

  // What runs on the home server and the tools being built.
  // image: a .jpg in assets/ with NAME-800.webp and NAME-1600.webp beside it (or add webp: false),
  // or panel: "log" | "swap" for a drawn fragment.
  lab: [
    { name: "This page", kind: "Live, public", host: "killtheboy.my.id", url: "https://killtheboy.my.id", status: "live", image: "assets/server-rack.jpg", pos: "50% 30%" },
    { name: "Status", kind: "Planned, public", host: "status.killtheboy.my.id", status: "planned", image: "assets/server-rack.jpg", pos: "50% 80%" },
    { name: "Grafana", kind: "Planned, private", host: "grafana.killtheboy.my.id", status: "planned", image: "assets/server-rack.jpg", pos: "20% 55%" },
    { name: "Log reader", kind: "Planned tool", host: "Paste access logs, see who knocked", status: "planned", panel: "log" },
    { name: "Swap calc", kind: "Planned tool", host: "Swap and memory limits for small VPSes", status: "planned", panel: "swap" },
  ],

  // Off duty.
  offDuty: [
    { title: "Career mode", role: "Playing", text: "EA FC, far too many seasons with the same club and a transfer budget I never respect.", image: "assets/football.jpg", pos: "40% 50%" },
    { title: "Sastra Indonesia", role: "Reading", text: "Indonesian novels and short stories, read between deploys and long builds.", image: "assets/old-books.jpg", pos: "50% 50%" },
    { title: "Card games", role: "Playing", text: "Anything with a deck, a table and a little strategy.", image: "assets/playing-card.jpg", pos: "100% 40%", zoom: 1.3 },
    { title: "Season five", role: "Rewatching", text: "Game of Thrones, mostly for one conversation at Castle Black.", image: "assets/snow-night.jpg", pos: "50% 50%" },
  ],
};
