const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

const validateVat = async (data) => {
  const resp = await fetch("https://ec.europa.eu/taxation_customs/vies/rest-api//check-vat-number", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error:", error);
      });
      console.log(resp);

  return resp
}

app.post('/api', async (req, res) => {
  // Handle the POST request here
  console.log('Received POST request:', req.body);
  const vatCheck = await validateVat(req.body);
  res.json(vatCheck);
});

app.get('/test', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
