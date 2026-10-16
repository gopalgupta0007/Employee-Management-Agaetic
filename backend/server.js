
const express = require('express');
const cors = require('cors');
const { readEmployees, addEmployee, deleteEmployeeById } = require('./DB_Connection_Configuration/db_connection_config');


const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors())
// connect()

app.get('/', (req, res) => {
    res.send('Hello! API is working.');
});

// app.get('/employees', (req, res) => {
//     res.json([
//         {
//             "id": 1,
//             "name": "Mukesh",
//             "email": "mukesh@gmail.com",
//             "role": "Frontend Developer"
//         },
//         {
//             "id": 2,
//             "name": "Raju",
//             "email": "raju@gmail.com",
//             "role": "Full Stack Developer"
//         }
//     ]);
// });

app.get('/employees', (req, res) => {
    res.json(readEmployees());
});

// app.get('/employees/:id', (req, res) => {
//     res.json(
//         {
//             "id": 1,
//             "name": "Mukesh",
//             "email": "mukesh@gmail.com",
//             "role": "Frontend Developer"
//         }
//     );
// });

app.post('/employees', (req, res) => {
    const {name, email, role} = req.body;

    addEmployee({name, email, role})

    res.send({
        status:"Success",
        message: "employee created successfully."
    });
});

app.get('/employees/delete/:id', (req, res) => {
    const id = req.params.id;

    deleteEmployeeById(id)

    res.send({
        status:"Success",
        message: "employee delete successfully."
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
