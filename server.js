const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

// Importing database
const connectDB = require('./config/db');

// Importing routes
const aboutRoutes = require('./routes/aboutRoute');
const adminRoutes = require('./routes/adminRoutes');
const contactRoutes = require('./routes/contactRoute');
const educationRoutes = require('./routes/educationRoute');
const experienceRoutes = require('./routes/experienceRoute');
const getContactRoutes = require('./routes/getContactRoute');
const homeRoutes = require('./routes/homeRoute');
const projectsRoutes = require('./routes/projectRoute');
const servicesRoutes = require('./routes/servicesRoute');
const technicalSkillsRoutes = require('./routes/technicalSkillsRoute');

// Middleware
app.use(express.json());
app.use(cors());

// Mounting routes
app.use('/about', aboutRoutes);
app.use('/admin', adminRoutes);
app.use('/contact', contactRoutes);
app.use('/education', educationRoutes);
app.use('/experience', experienceRoutes);
app.use('/getContact', getContactRoutes);
app.use('/home', homeRoutes);
app.use('/projects', projectsRoutes);
app.use('/services', servicesRoutes);
app.use('/technicalSkills', technicalSkillsRoutes); 

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server is runing on port: http://localhost:${port}`)
    connectDB();
});