# Image Processing API

An Express API from the EGFWD fullstack track. Ask for an image by name with a width and height, and it resizes the original with sharp, caches the result, and serves it. Ask for the same size again and you get the cached file instead of a fresh resize.

## The endpoint

```
GET /api/images?filename=santamonica&width=300&height=200
```

Three query params, all required: `filename` (a file in `assets/images/full/`), `width`, and `height` in pixels. Resized copies land in `assets/images/thumb/`.

## Running it

```bash
git clone https://github.com/Ibrahim-Rezq/egfwd-image-processing-api.git
cd egfwd-image-processing-api
npm install
npm run start-dev   # dev mode with auto-restart
npm run start       # production build and start
```

Tests and linting:

```bash
npm run test      # Jasmine suite
npm run lint      # ESLint
npm run formate   # Prettier (yes, the script name has a typo, it's historical at this point)
```

## How it's laid out

```
├── assets/images/
│   ├── full/    # original images
│   └── thumb/   # cached resizes
└── src/
    ├── routes/       # Express routes
    ├── controllers/  # route handlers
    ├── services/     # the sharp resize + cache logic
    └── index.ts
```

## Stack

TypeScript, Node, Express, sharp for the image work, Jasmine for tests.
