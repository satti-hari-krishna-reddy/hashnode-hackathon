const axios = require('axios');

const getPublicationId = async () => {
  try {
    const hashnodeApiEndpoint = 'https://gql.hashnode.com';

    const meQuery = `
      query Me {
        me {
          id
        }
      }
    `;

    const response = await axios.post(
      hashnodeApiEndpoint,
      {
        query: meQuery,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const publicationId = response.data.data.me.id;
    return publicationId;
  } catch (error) {
    console.error('Error fetching publication ID:', error.message);
   
  }
};

module.exports = { getPublicationId };
