# VAT Validation Application

This is a simple Express.js application that validates VAT numbers using the European Commission's VIES VAT number validation API.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm

### Installing

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the server with `npm start`

## Usage

The application exposes a single endpoint at `/api` that accepts POST requests. The request body should be a JSON object containing the VAT number to be validated.

Example request body:

```json
{
	"countryCode": "DE",
	"vatNumber": "123456789"
}
```

The application will then send a request to the VIES API to validate the VAT number and return the response.

### Built With

- [Express.js](https://expressjs.com/) - The web framework used
- [cors](https://www.npmjs.com/package/cors) - Middleware to enable CORS

### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details