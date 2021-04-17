const express = require('express');
const mongoose = require('mongoose');
const buttonRoutes = require('./routes/buttonRoutes');

const PORT = process.env.PORT || 3000;
const app = express();
const dbURI =
  'mongodb+srv://moderator:password1234@cluster0.c2kji.mongodb.net/saratovsky-rsv?retryWrites=true&w=majority';

app.use(buttonRoutes);
app.use(express.urlencoded({ extended: true }));

async function start() {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.listen(PORT, () => {
      console.log('Server has been started...');
    });
  } catch (e) {
    console.log(e);
  }
}

start();
