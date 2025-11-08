var express = require('express');
var router = express.Router();

// Home page
router.get('/', function(req, res) {
  res.render('index', { title: "Home" });
});

// About page
router.get('/about', function(req, res) {
  res.render('about', { title: "About Me" });
});

// Projects page
router.get('/projects', function(req, res) {
  res.render('projects', { title: "Projects" });
});

router.get('/project1', (req, res) => {
  res.render('project1', { title: "Project One" });
});

router.get('/project2', (req, res) => {
  res.render('project2', { title: "Project Two" });
});

router.get('/project3', (req, res) => {
  res.render('project3', { title: "Project Three" });
});

// Contact page
router.get('/contact', function(req, res) {
  res.render('contact', { title: "Contact Me" });
});

module.exports = router;


