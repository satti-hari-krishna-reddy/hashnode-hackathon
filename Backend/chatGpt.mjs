import {OpenAI} from "openai"
const openai = new OpenAI({apiKey:''});

const completion = await openai.chat.completions.create({
    model:"gpt-3.5-turbo",
    messages:[{role:"user",content:"hiiii"}]}).then(res=>console.log(res.data.choices[0].content))

 