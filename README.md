# killtheboy.my.id

One-page personal site and home lab, named after Maester Aemon's line to Jon Snow:
*kill the boy and let the man be born* (Game of Thrones, S05E05).

## Run

```bash
docker compose up -d   # nginx on 127.0.0.1:8080, serving ./site
```

The ThinkCentre exposes it through a Cloudflare Tunnel that runs on the host as the
`cloudflared` systemd service. Because `./site` is a bind mount, update it by
replacing the files inside it. Renaming the folder leaves the container on the old one.

## Edit

Content lives in `site/data.js`: the boy/man table, lab services and tools,
off-duty items, footer links. `site/index.html` renders it.

## Design

Built with the [taste-skill](https://github.com/Leonxlnx/taste-skill) `design-taste-frontend`
Claude Code skill (direction "pinned poster"). Restore the skill with
`npx skills experimental_install` (reads `skills-lock.json`).

Pictures come from Wikimedia Commons under CC BY, CC BY-SA, CC0 or public domain.
Credits are in the page footer and `site/assets/credits.json`. Game of Thrones
belongs to HBO; the scene is embedded from YouTube.
