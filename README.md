# Back-End-SocialNetwork

## Description

The Social Network API is a backend application designed to support a social networking platform where users can share their thoughts, react to friends’ thoughts, and maintain a list of friends. The application utilizes MongoDB for database management, leveraging its speed and flexibility in handling large amounts of unstructured data. The API is built using Express.js for routing and the Mongoose ODM for seamless interaction with the MongoDB database.

## Features

- **User Management**: Create, update, delete, and retrieve users.
- **Thought Management**: Create, update, delete, and retrieve thoughts posted by users.
- **Reactions**: Add and remove reactions to thoughts.
- **Friend List**: Add and remove friends from a user's friend list.
- **Data Validation**: Ensure data integrity with Mongoose schema validation.
- **Virtuals**: Use Mongoose virtuals to dynamically calculate fields like friend count and reaction count.
- **Timestamps**: Format timestamps for user-friendly display using getter methods.

## Usage

To use this API, you will need to have MongoDB installed on your machine. You can interact with the API endpoints using a tool like Insomnia or Postman. Here are some example routes and their functionalities:

### Users

- **GET** `/api/users`: Retrieve all users.
- **GET** `/api/users/:userId`: Retrieve a single user by ID, including their thoughts and friends.
- **POST** `/api/users`: Create a new user.
- **PUT** `/api/users/:userId`: Update a user by ID.
- **DELETE** `/api/users/:userId`: Delete a user by ID (bonus: associated thoughts are also deleted).

### Friends

- **POST** `/api/users/:userId/friends/:friendId`: Add a friend to a user's friend list.
- **DELETE** `/api/users/:userId/friends/:friendId`: Remove a friend from a user's friend list.

### Thoughts

- **GET** `/api/thoughts`: Retrieve all thoughts.
- **GET** `/api/thoughts/:thoughtId`: Retrieve a single thought by ID.
- **POST** `/api/thoughts`: Create a new thought.
- **PUT** `/api/thoughts/:thoughtId`: Update a thought by ID.
- **DELETE** `/api/thoughts/:thoughtId`: Delete a thought by ID.

### Reactions

- **POST** `/api/thoughts/:thoughtId/reactions`: Add a reaction to a thought.
- **DELETE** `/api/thoughts/:thoughtId/reactions/:reactionId`: Remove a reaction from a thought.

## Walkthrough Video

For a detailed demonstration of the API's functionality, please refer to the [walkthrough video](https://drive.google.com/file/d/1y33mSGdn0AuYcyGtCrm5PfLWekhy46qb/view).

## License

This project is not licensed and is intended for educational purposes only.
