# Node.js API Base Project

A minimal Express.js project scaffolding the 5 endpoints seen in the Postman collection:

| Method | Endpoint         | File                       |
|--------|------------------|----------------------------|
| POST   | `/login`         | `routes/userRoutes.js`     |
| GET    | `/view`          | `routes/userRoutes.js`     |
| GET    | `/search`         | `routes/userRoutes.js`     |
| PUT    | `/updateprofile` | `routes/userRoutes.js`     |
| DELETE | `/del`           | `routes/userRoutes.js`     |

Server runs on **port 5000**, matching `localhost:5000` from the Postman screenshot.

## Setup

```bash
npm install
npm start
```

Or with auto-restart on file changes (requires `nodemon`, included as a dev dependency):

```bash
npm run dev
```

## Testing in Postman

Once running, you can hit:

- `POST localhost:5000/login`
- `GET localhost:5000/view`
- `GET localhost:5000/search`
- `PUT localhost:5000/updateprofile`
- `DELETE localhost:5000/del`

Each currently returns a JSON placeholder response (e.g. `{ "message": "INSIDE DELETE API" }`) and logs to the console, so you can confirm routing works before adding real logic.

## Project structure

```
nodejs-api-base/
├── package.json
├── server.js          # App entry point, mounts routes, starts server on :5000
├── routes/
│   └── userRoutes.js  # All 5 endpoint handlers
└── README.md
```

## Next steps

This is just the routing skeleton. To make it a real API you'll likely want to add:

- A database (e.g. MongoDB + Mongoose, or PostgreSQL + Prisma) for storing users/profiles
- Real authentication in `/login` (password hashing with `bcrypt`, sessions or JWT)
- Auth middleware to protect `/view`, `/search`, `/updateprofile`, `/del`
- Input validation (e.g. `express-validator` or `zod`)

Let me know if you'd like any of these added.
