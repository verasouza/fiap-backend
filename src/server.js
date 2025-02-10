const app = require('./app');


const PORT = process.env.PORT || 8081;

app.listen(PORT, function () {
    console.log(`Server running on http://localhost:${PORT}`);
  });
