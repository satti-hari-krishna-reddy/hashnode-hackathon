const axios = require('axios');

const fetchData = async () => {
  const url = ' https://gql.hashnode.com';
  const query = `
    query Publication {
      publication(host: "blog.developerdao.com") {
        posts(first: 0) {
          edges {
            node {
              title
              brief
              url
              id
            }
          }
        }
      }
    }
  `;

  try {
    const response = await axios.post(url, { query });

    // Handle the response data here
    console.log(response.data.data.publication.posts.edges);
  } catch (error) {
    // Handle errors
    console.error('Error fetching data:', error);
  }
};

fetchData();
