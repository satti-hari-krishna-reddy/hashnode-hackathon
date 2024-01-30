const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.post('/save-blog', (req, res) => {
  const newBlog = req.body;

  // Read existing data from db.json
  const rawData = fs.readFileSync('db.json');
  const data = JSON.parse(rawData);

  // Append the new blog to scheduledBlogs array
  data.scheduledBlogs.push(newBlog);

  // Save updated data back to db.json
  const updatedData = JSON.stringify(data, null, 2);
  fs.writeFileSync('db.json', updatedData);

  res.json({ message: 'Blog saved successfully', blog: newBlog });
});
