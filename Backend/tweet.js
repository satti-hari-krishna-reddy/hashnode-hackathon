const { TwitterApi } = require('twitter-api-v2');

const client = new TwitterApi({
    appKey: 'S8Pgg1jqOR9XBzeoN7MMEBq0o',
    appSecret: '5xdTsjwrlMEb7SyE22RLvZfIKqjk2HZbLvWQmwOSrsGo3lCkA9',
    accessToken: '1752691190787686400-PbJVFnSo5UPTLbyZdFJJY2EDIL4iaX',
    accessSecret: '4F4CfBfXJ8YIWu49j2WfttUXmXceQEufeNVPA8Z5efORj',
    
});


const tweet = async () => {
    try {
        const response = await client.v2.tweet({
            text: 'testing it again2',
        });
        console.log('Tweet successful:', response.data);
    } catch (error) {
        console.error('Tweet failed:', error);
    }
};

tweet();
