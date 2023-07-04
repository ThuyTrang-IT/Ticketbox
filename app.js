const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./Ticketbox.json'); // thay đổi đường dẫn và tên file nếu cần thiết

const app = express();

app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
