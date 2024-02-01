
import { OpenAI } from "openai";

const openai = new OpenAI({ apiKey: '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' });

const getOpenAICompletion = async (inputText) => {
    const title = inputText.title;
    const brief= inputText.brief;
    const url= inputText.url;
    const prompt = 'hey gpt write short post which is having a tile '+title+'and a brief with'+brief+'and an url'+url+'include this url at last saying for more details click on this url';
    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: prompt }],
        });

        return completion.data.choices[0].content;
    } catch (error) {
        console.error('OpenAI completion failed:', error);
        throw error;
    }
};
 
module.exports = {getOpenAICompletion};