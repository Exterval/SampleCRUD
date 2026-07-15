# SampleCRUD

A simple RESTful CRUD API for managing tasks, built with Express.js and documented with Swagger UI.

## Install & Run

```bash
npm install && npm start
```

The server starts on **http://localhost:3000**. Open **http://localhost:3000/docs** for interactive Swagger UI.

## Endpoints

| Method   | Endpoint      | Description              | Body                        |
|----------|---------------|--------------------------|-----------------------------|
| `GET`    | `/tasks`      | List all tasks           | —                           |
| `GET`    | `/tasks/:id`  | Get a task by ID         | —                           |
| `POST`   | `/tasks`      | Create a new task        | `{ "title": "Buy milk" }`   |
| `PUT`    | `/tasks/:id`  | Update a task            | `{ "title": "...", "done": true }` |
| `DELETE` | `/tasks/:id`  | Delete a task            | —                           |

## Example: List All Tasks

```
GET /tasks
```

```http
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 155
ETag: W/"9b-Ap//aJbBB9GgrKY43TFu3Pp4N1E"
Date: Wed, 15 Jul 2026 15:36:15 GMT
Connection: keep-alive
Keep-Alive: timeout=5

[{"id":2,"title":"Pooping in the toilet","done":false},{"id":3,"title":"Push to GitHub","done":true},{"id":4,"title":"Naming mg git message","done":false}]
```

## Swagger UI

<!-- TODO: Add screenshot of Swagger UI -->
