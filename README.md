# Node.js News API

This project is a Node.js application that fetches and formats news articles using the News API. It provides a simple API to retrieve news articles based on user preferences and categories.

## Table of Contents

- [Installation](#installation)
- [File Structure](#file-structure)
- [Endpoints](#endpoints)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   cd nodejs-news-api

## File Structure
nodejs-news-api/
├── src/
│   ├── middleware/
│   │   └── verifyToken.js
│   ├── news/
│   │   ├── controller/
│   │   │   └── newsController.js
│   │   ├── routes/
│   │   │   └── newsRoutes.js
│   │   └── model/
│   │       └── newsModel.js
│   ├── user/
│   │   ├── controller/
│   │   │   └── userController.js
│   │   ├── routes/
│   │   │   └── userRoutes.js
│   │   └── model/
│   │       └── userModel.js
│   ├── app.js
│   └── .env.example
├── .gitignore
├── package.json
└── README.md

## Environment Variables

- `NEWS_API_KEY`: Your API key for the News API.

## Endpoints

### User Routes:

- `POST /register`: Register a new user.
- `POST /login`: Login a user.
- `GET /preferences`: Get user preferences (requires authentication).
- `PUT /preferences`: Update user preferences (requires authentication).

### News Routes:

- `GET /`: Get formatted news articles (requires authentication).

## Contributing

Contributions are welcome! If you find any issues or improvements, feel free to create a pull request or submit an issue in the repository.

## License

This project is licensed under the MIT License.
