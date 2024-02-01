const axios = require('axios');

const createWebhook = async () => {
  try {
    const hashnodeApiEndpoint = 'https://gql.hashnode.com';
    const publicationId = '4';
    const url = 'https://your-webhook-url.com/webhook-endpoint';
    const events = ['POST_PUBLISHED'];
    const secret = 'af-e3jef9onk'; 

    const createWebhookMutation = `
      mutation CreateWebhook($input: CreateWebhookInput!) {
        createWebhook(input: $input) {
          webhook {
            id
            publication {
              ...PublicationFragment
            }
            url
            events
            secret
            createdAt
            updatedAt
            messages {
              ...WebhookMessageConnectionFragment
            }
          }
        }
      }
    `;

    const createWebhookVariables = {
      input: {
        publicationId,
        url,
        events,
        secret,
      },
    };

    
    const createWebhookResponse = await axios.post(
      hashnodeApiEndpoint,
      {
        query: createWebhookMutation,
        variables: createWebhookVariables,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return createWebhookResponse.data.data.createWebhook.webhook.id;
  } catch (error) {
    console.error('Error creating webhook:', error.message);
     
  }
};

module.exports = { createWebhook };
