# Image Processing API  
A TypeScript / Node.js API for dynamic image resizing and caching.  
Built as an assignment for the Full‑Stack Development Nanodegree (EGFWD).

---

## 🎯 Purpose  
This project was created as part of the EGFWD Full‑Stack Development program.  
It provides a backend service that:  
- Accepts a request for an existing image file by name + width + height.  
- Resizes the image using the `sharp` library.  
- Caches the resized version for future requests (to improve performance).  
- Serves the processed image.  

---

## 💡 Learning Takeaways  
Working on this project helped me:  
- Get hands‑on with **TypeScript** in a Node/Express backend.  
- Use the `sharp` image‑processing library for resizing and caching logic.  
- Structure an API with clear separation (routes → controllers → services).  
- Set up and run unit tests using **Jasmine**.  
- Understand build tooling and production readiness for TypeScript projects.

---

## 🧩 Technologies Used  
- **TypeScript**  
- **Node.js**  
- **Express**  
- **sharp** (image processing & caching)  
- **Jasmine** (unit testing)  
- **ESLint / Prettier** (code quality & formatting)  

---

## 🚀 Getting Started  
1. Clone the repository:  
   ```bash
   git clone https://github.com/Ibrahim-Rezq/egfwd-image-processing-api.git
    ````

2. Navigate into the project folder:

   ```bash
   cd egfwd-image-processing-api
   ```
3. Install dependencies:

   ```bash
   npm install
   ```

### Running Locally

* Development mode (watch / auto-restart):

  ```bash
  npm run start-dev
  ```
* Production build & start:

  ```bash
  npm run start
  ```

### Testing & Linting

* Run tests:

  ```bash
  npm run test
  ```
* Lint code:

  ```bash
  npm run lint
  ```
* Format code:

  ```bash
  npm run formate
  ```

---

## 📂 Usage

### API Endpoint

`GET /api/images`

### Query Parameters

* `filename` (string, required) — name of the source image file (in `assets/images/full/`)
* `width` (integer, required) — desired width in pixels
* `height` (integer, required) — desired height in pixels

### Example Request

```
http://localhost:3000/api/images?filename=santamonica&width=300&height=200
```

If a cached version exists for that size, it’s returned; otherwise the image is resized, saved to cache (e.g., `assets/images/thumb/`), then returned.

---

## 🏗 Project Structure

```
├── assets/
│   ├── images/
│   │   ├── full/      ← original high-res images
│   │   └── thumb/     ← cached resized images
├── src/
│   ├── controllers/   ← route handlers
│   ├── routes/        ← Express routes
│   ├── services/      ← image processing logic
│   └── index.ts       ← app entry point
├── spec/              ← unit tests
├── tsconfig.json
├── package.json
└── README.md
```

---

## ✍️ Credits

Developed by **Ibrahim Rezq** for the EGFWD nanodegree.
Assignment: build an image-processing API with caching and dynamic resizing.

