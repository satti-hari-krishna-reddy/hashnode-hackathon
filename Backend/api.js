const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 3000;
app.use(cors());
app.use(bodyParser.json());

// Your existing data structure
let data = {
  apiKeys: {
    hashnode: "your_hashnode_api_key",
    secret: "your_secret_key",
    twitter: "your_twitter_key",
    linkedin: "your_linkedin_key",
  },
  scheduledBlogs: [],
  otherData: [],
};

// Your existing route to handle fetching data
app.post('/fetch-blogs', (req, res) => {
  const scheduledBlogs = data.scheduledBlogs;
  res.json(scheduledBlogs);
});

// Updated route to handle saving blogs with additional info
app.post('/save-blog', (req, res) => {
  const { blog, selectedPlatforms, scheduledTime } = req.body;

  // Add the new blog with additional info to the scheduledBlogs array
  const newBlog = {
    ...blog,
    selectedPlatforms,
    scheduledTime,
  };
  data.scheduledBlogs.push(newBlog);

  // Save updated data back to db.json
  saveData();

  res.json({ message: 'Blog saved successfully', blog: newBlog });
});

// Function to save the updated data back to db.json
function saveData() {
  const updatedData = JSON.stringify(data, null, 2);
  fs.writeFileSync('db.json', updatedData);
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
