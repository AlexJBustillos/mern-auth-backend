require('dotenv').config();
const express = require('express')
const app = express()
const cors = require('cors')
const passport = require('passport')
const PORT = process.env.PORT || 8000;

// MIddleware
app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Smile, you are being watched by the Backend Engineerin Team'})
})

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
} )