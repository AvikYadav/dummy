# Sample hosted app (reference layout)

This folder shows the **exact layout a GitHub repo must have** to be hostable.

```
settings.json          <- MUST be in the repo root
frontend/              <- the "root" declared in settings.json
  index.html           <- first entrypoint (default page)
  about.html           <- second entrypoint
  css/style.css
  js/app.js
  assets/logo.svg      <- whole directory pulled via dependencies.directories
```

## To verify the GitHub flow

1. Create a new **public** GitHub repo.
2. Copy `settings.json` and the `frontend/` folder into the repo root and push.
3. In the admin panel → **Host New App**, paste the repo URL.

Files are saved with the `root` prefix (`frontend/`) stripped, so the app is
served at `/host/<name>/` with relative links (`css/style.css`, `js/app.js`,
`assets/logo.svg`, `about.html`) intact.
