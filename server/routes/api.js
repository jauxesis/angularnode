const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios'); //for communication web servers
const API = 'https://jsonplaceholder.typicode.com';
var n = 1;
/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

router.get('/incr',(req,res)=>{
	setInterval(()=>{
			n = n + 1;
	},2000);
	res.status(200).json(n);
})

module.exports = router;