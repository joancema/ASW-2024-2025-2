import Groq from 'groq-sdk';

const client = new Groq({
//   apiKey: process.env['GROQ_API_KEY'], 
  apiKey: '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', 
});

async function main() {
  const chatCompletion = await client.chat.completions.create({
    messages: [{ role: 'user', content: 'if I just have time to work out 2 day a week 2 hours a day, I wanna lost weight. What excersises do you recommend me?' }],
    model: 'llama3-8b-8192',
  });

  console.log(chatCompletion.choices[0].message.content);
}

main();