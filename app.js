const express = require('express');
const authRoutes = require('./routes/auth-routes')

const app = express();

// set up view engine
app.set('view engine', 'ejs');

// set up routes
app.use('/auth', authRoutes);

// create home route
app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3000, () => {
    console.log('App listening on port 3000!');
})