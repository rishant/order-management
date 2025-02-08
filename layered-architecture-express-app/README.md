order-management-layered/
│── node_modules/
│── src/
│   ├── config/
│   │   ├── config.js
│   ├── controllers/
│   │   ├── order.controller.js
│   ├── routes/
│   │   ├── order.routes.js
│   ├── services/
│   │   ├── order.service.js
│   ├── repositories/
│   │   ├── order.repository.js
│   ├── models/
│   │   ├── order.model.js
│   ├── app.js
├── server.js
│── .env
│── package.json
│── nodemon.json

curl --location --request GET 'http://localhost:4000/api/orders'

curl --location --request POST 'http://localhost:4000/api/orders' \
--header 'Content-Type: application/json' \
--data-raw ' {
    "customerName": "rishantgupta007@gmail.com",
    "product": "Dell Laptop",
    "quantity": 2,
    "status": "Pending"
  }'