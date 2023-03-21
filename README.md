# Members API

-   [Introduction](#introduction)
-   [Endpoints](#endpoints)
-   [Tech Stack](#tech-stack)
-   [How to Run API Locally](#how-to-run-api-locally)
-   [Contributing](#contributing)
-   [License](#license)

## Introduction

Members API is a simple REST API that serves information about members. It allows you to manage member data by providing basic CRUD (Create, Read, Update, Delete) functionality. The API is built using Node.js and Express.js, and uses MongoDB with the Mongoose library for data storage.

## Tech Stack

-   Node.js
-   Express.js
-   MongoDB
-   Mongoose

## Endpoints

### `/members`

-   `GET`: Gets all members in the database.
-   `POST`: Adds a new member to the database.

### `/members/:id`

-   `GET`: Gets the member with the specified `id`.
-   `PATCH`: Updates the member with the specified `id`.
-   `DELETE`: Deletes the member with the specified `id`.

## How to run API locally

To run the API locally, follow these steps:

1. Fork the repository by clicking the "Fork" button in the upper right corner of the repository page.

2. Clone the forked repository to your local machine using the following command in your terminal:

```bash
git clone https://github.com/[your-username]/members_api.git
```

3. Change into the cloned directory using the following command:

```bash
cd members_api
```

4. Install the dependencies by running the following command:

```bash
npm install
```

5. Rename the `.env.example` file to `.env` using the following command:

```bash
mv .env.example .env
```

6. Update the `MONGO_URL` variable in the `.env` file with your MongoDB connection string.
7. Start your local MongoDB server if you haven't already done so.
8. Start the API server using the following command:

```bash
npm run dev
```

The API server should now be running on `http://localhost:3000`. You can test the API endpoints using tools such as [Postman](https://www.postman.com/product/rest-client/) or [Insomnia](https://insomnia.rest/).

## Contribution

If you find any bugs or want to contribute to the project, feel free to open an issue or a pull request.

## License

This project is licensed under the MIT License.
