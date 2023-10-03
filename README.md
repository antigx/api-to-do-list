## API Documentation

Welcome to the API documentation for your ToDo application! This API allows you to manage ToDo items, including creating, retrieving, updating, and deleting tasks.

### Endpoints

#### Get ToDos

\```http
GET /todos
\```

Retrieve a list of all ToDo items.

##### Response

- \`200 OK\` - Successfully retrieved the list of ToDo items.

\```json
[
  {
    "id": "unique-id",
    "title": "Task Title",
    "text": "Task Description",
    "color": "#FFFFFF",
    "favorite": false
  },
  // ...more ToDo items
]
\```

#### Create ToDo

\```http
POST /todos
\```

Create a new ToDo item.

##### Request Body

- \`title\` (string, required): The title of the task.
- \`text\` (string): The description of the task.
- \`color\` (string): The color code for the task (optional).
- \`favorite\` (boolean): Whether the task is marked as a favorite (optional).

##### Response

- \`201 Created\` - Successfully created the ToDo item.

#### Delete ToDo

\```http
DELETE /todos/:id
\```

Delete a ToDo item by its ID.

##### Parameters

- \`id\` (string, required): The ID of the ToDo item to delete.

##### Response

- \`200 OK\` - Successfully deleted the ToDo item.

#### Update ToDo

\```http
PATCH /todos/:id
\```

Update a ToDo item by its ID.

##### Parameters

- \`id\` (string, required): The ID of the ToDo item to update.

##### Request Body

- \`title\` (string): The updated title of the task.
- \`text\` (string): The updated description of the task.
- \`color\` (string): The updated color code for the task.
- \`favorite\` (boolean): The updated favorite status of the task.

##### Response

- \`200 OK\` - Successfully updated the ToDo item.

### Error Handling

- \`400 Bad Request\` - Invalid request format or missing required parameters.
- \`404 Not Found\` - Resource not found (for example, when deleting or updating a non-existing ToDo item).
- \`500 Internal Server Error\` - Server error occurred while processing the request.

