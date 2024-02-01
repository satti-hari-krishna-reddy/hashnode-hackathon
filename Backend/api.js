const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const { getPublicationId } = require('./getPublicationid');
const { getPostById } = require('./getPostid');
const { createWebhook } = require('./webhookCreater');
const {getOpenAICompletion} = require('./chatGpt')
const {tweet} = require('./tweet')


const publicationId = await getPublicationId();

console.log('Publication ID:', publicationId);

await createWebhook();
const app = express();
const PORT = 3000;
app.use(cors());
app.use(bodyParser.json());


app.post('/fetch-blogs', (req, res) => {
  const scheduledBlogs = data.scheduledBlogs;
  res.json(scheduledBlogs);
});


app.post('/save-blog', (req, res) => {
  const { blog, selectedPlatforms, scheduledTime } = req.body;

  const newBlog = {
    ...blog,
    selectedPlatforms,
    scheduledTime,
  };
  data.scheduledBlogs.push(newBlog);


  saveData();

  res.json({ message: 'Blog saved successfully', blog: newBlog });
});

app.post('/webhook-endpoint', async (req, res) => {
  try {
   
    const webhookId = req.body.data.createWebhook.webhook.id;
    const data = await getPostById(webhookId);
    const message = await getOpenAICompletion(data);
    tweet(message);

    res.status(200).send('Webhook ID received successfully.');
  } catch (error) {
    console.error('Error processing webhook:', error);
    res.status(500).send('Internal Server Error');
  }
});



function saveData() {
  const updatedData = JSON.stringify(data, null, 2);
  fs.writeFileSync('db.json', updatedData);
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
