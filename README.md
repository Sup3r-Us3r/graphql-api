<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Description

GraphQL API Example

## GraphQL Queries and Mutations Documentation

### Mutation: Create Todo

Creates a new `Todo` item with the provided fields, including assigning it to a user by `assignedToId`.

```graphql
mutation CreateTodo {
  createTodo(
    createTodoInput: {
      title: "Estudar GraphQL"
      description: "Revisar resolvers e Prisma"
      status: PENDING
      tags: ["graphql", "prisma"]
      assignedToId: 1
    }
  ) {
    id
    title
    description
    status
    tags
    assignedTo {
      id
      name
      email
    }
    createdAt
    updatedAt
  }
}
```

### Query: Fetch All Todos

Fetches a list of all `Todo` items along with their details, including subtasks and assigned users.

```graphql
query FetchTodos {
  todos {
    id
    title
    description
    status
    tags
    isUrgent
    priority
    subTasks {
      id
      title
    }
    assignedTo {
      id
      name
      email
    }
    createdAt
    updatedAt
  }
}
```

### Query: Get Todo

Fetches a specific `Todo` item by its ID, including its subtasks and assigned user.

```graphql
query GetTodo {
  todo(id: 5) {
    id
    title
    description
    status
    tags
    isUrgent
    priority
    subTasks {
      id
      title
    }
    assignedTo {
      id
      name
      email
    }
    createdAt
    updatedAt
  }
}
```

### Mutation: Update Todo

Updates a `Todo` item by its ID with new values for title, description, status, tags, and other fields.

```graphql
mutation UpdateTodo {
  updateTodo(
    updateTodoInput: {
      id: 6
      title: "Estudar Prisma e GraphQL"
      description: "Fazer ajustes no projeto"
      status: IN_PROGRESS
      tags: ["graphql", "prisma", "nestjs"]
    }
  ) {
    id
    title
    description
    status
    tags
    assignedTo {
      id
      name
      email
    }
    createdAt
    updatedAt
  }
}
```

### Mutation: Remove Todo

Deletes a `Todo` item by its ID and returns the ID and title of the removed `Todo`.

```graphql
mutation RemoveTodo {
  removeTodo(id: 3) {
    id
    title
  }
}
```

### Notes:

- The `status` field accepts values such as `PENDING`, `IN_PROGRESS`, and `COMPLETED`.
- The `assignedTo` field returns information about the user assigned to the `Todo`.
- The `subTasks` field lists subtasks related to the `Todo` item.

## Project setup

```bash
$ npm install
```

## Run seed

```bash
$ npm run prisma:seed
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## License

Nest is [MIT licensed](LICENSE).
