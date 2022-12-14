require('dotenv').config();
const OpenAI = require('openai-api');
const openai = new OpenAI(process.env.OPENAI_API_KEY);
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent] });
    let prompt = ""    
const PREFIX = '!';    
client.on("messageCreate", function (message) {
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;
    prompt += `You: ${message.content}\n`;
    (async () => {
        const gptResponse = await openai.complete({
            engine: 'text-davinci-003',
            prompt: prompt,
            maxTokens:  2000,
            temperature: 0.3,
            topP: 0.3,
            presencePenalty: 0,
            frequencyPenalty: 0.5,
            bestOf: 1,
            n: 1,
            stream: false,
        });
        var msg_length = gptResponse.data.choices[0].text.length;
        prompt += `${gptResponse.data.choices[0].text}\n`;
        if(msg_length > 2000) {
          while(msg_length > 2000) {
            msg_length = gptResponse.data.choices[0].text.length;
            var content = gptResponse.data.choices[0].text.substring(0,2000);
            gptResponse.data.choices[0].text = gptResponse.data.choices[0].text.substring(2000,msg_length);
            message.reply(`${content}`);
          }
        }
        message.reply(`${gptResponse.data.choices[0].text}`);
        prompt += `${gptResponse.data.choices[0].text}\n`;
    })();
 });

client.login(process.env.BOT_TOKEN);
