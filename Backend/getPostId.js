const axios = require('axios');

const getPostById = async (postId) => {
  try {
    const hashnodeApiEndpoint = 'https://gql.hashnode.com';

    const getPostQuery = `
      query Post($id: ID!) {
        post(id: $id) {
          title
          brief
          url
        }
      }
    `;

    const getPostVariables = {
      id: postId,
    };

    const response = await axios.post(
      hashnodeApiEndpoint,
      {
        query: getPostQuery,
        variables: getPostVariables,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const postData = response.data.data.post;
    return {
      title: postData.title,
      brief: postData.brief,
      url: postData.url,
    };
  } catch (error) {
    console.error('Error fetching post:', error.message);
    
  }
};

module.exports = { getPostById };
