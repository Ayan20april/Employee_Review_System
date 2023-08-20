//imports the Express.js framework, 
//which allows you to create and manage your server and routes.
const express = require('express');
//Body-parser is middleware that helps 
//parse incoming request bodies, particularly for forms.
const bodyParser = require('body-parser');

//Creates an instance of the Express application.
const app = express();
const port = 3000;

//Sets the view engine to EJS, 
//which is used to render dynamic HTML templates.
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// A simple array to store submitted feedback
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

