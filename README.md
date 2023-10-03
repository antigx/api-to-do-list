## API Documentation

Welcome to the API documentation for your ToDo application! This API allows you to manage ToDo items, including creating, retrieving, updating, and deleting tasks.

### Endpoints

#### Get ToDos

```http
GET /todos
```

Retrieve a list of all ToDo items.

##### Response

- `200 OK` - Successfully retrieved the list of ToDo items.

```json
[
  {
    "id": "unique-id",
    "title": "Task Title",
    "text": "Task Description",
    "color": "#FFFFFF",
    "favorite": false
  }
  // ...more ToDo items
]
```

#### Create ToDo

```http
POST /todos
```

Create a new ToDo item.

##### Request Body

- `title` (string, required): The title of the task.
- `text` (string): The description of the task.
- `color` (string): The color code for the task (optional).
- `favorite` (boolean): Whether the task is marked as a favorite (optional).

##### Response

- `201 Created` - Successfully created the ToDo item.

#### Delete ToDo

```http
DELETE /todos/:id
```

Delete a ToDo item by its ID.

##### Parameters

- `id` (string, required): The ID of the ToDo item to delete.

##### Response

- `200 OK` - Successfully deleted the ToDo item.

#### Update ToDo

```http
PATCH /todos/:id
```

Update a ToDo item by its ID.

##### Parameters

- `id` (string, required): The ID of the ToDo item to update.

##### Request Body

- `title` (string): The updated title of the task.
- `text` (string): The updated description of the task.
- `color` (string): The updated color code for the task.
- `favorite` (boolean): The updated favorite status of the task.

##### Response

- `200 OK` - Successfully updated the ToDo item.

### Error Handling

- `400 Bad Request` - Invalid request format or missing required parameters.
- `404 Not Found` - Resource not found (for example, when deleting or updating a non-existing ToDo item).
- `500 Internal Server Error` - Server error occurred while processing the request.

  ## Local Setup

To run the ToDo application locally on your machine, follow these steps:

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (usually comes bundled with Node.js)

### Clone the Repository

```
git clone https://github.com/antigx/api-to-do-list.git
cd api-to-do-list
```

### Install Dependencies

```
npm install
```

### Start the Development Server

```
npm start
```

The application will be available at http://localhost:5000. You can access the API endpoints described above locally using this base URL.

### Explore the API

You can use tools like Postman to interact with the API endpoints locally. Make requests to http://localhost:3000/todos for managing ToDo items.
