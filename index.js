const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Temporary data store for feedback
let feedbackData = [];

// Routes
app.get('/', (req, res) => {
    res.render('index', { feedbackData });
});

app.post('/submit-feedback', (req, res) => {
    const { sender, receiver, feedback } = req.body;
    feedbackData.push({ sender, receiver, feedback });
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

