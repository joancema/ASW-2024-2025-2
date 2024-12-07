import Groq from 'groq-sdk';

interface IQuestion {
  question: string,
  answer: string
}

const text:IQuestion[] = [
{
  question:'mi nombre es',
  answer: 'John'
},
{
  question:'mi asignatura es',
  answer: 'programación web',
},
{
  question: 'mis clases son a las',
  answer: '5:30',
},
{
  question:'en los siguientes días:',
  answer: 'los lunes y miércoles',
},
{
  question:'mi especialidad como profesional es',
  answer: 'el desarrollo de aplicaciones web y móviles'
},
{
  question:'los porcentaje que tienen las actividades de mi asignatura son:',
  answer: 'examen 25%, proyecto 25%, tarea 25%, participación 25%'
},
{
  question:'mi correo es',
  answer: 'john.cevallos@uleam.edu.ec'
},
{
  question:'los horarios en los que trabajo son:',
  answer: 'en la mañana desde las 9:00 hasta las 12:00 y en la tarde desde las 14:00 hasta las 18:00'
},
{
  question:'mi número de teléfono es',
  answer: 'privado lastimosamente'
},
{
  question:'La temática de mi asignatura es',
  answer: 'CSS, HTML, JavaScript, React, Node.js, MongoDB, Express, Firebase, entre otros'
},
{
  question:'me pueden encontrar en',
  answer: 'la sala de profesores de la parte baja o en mi oficina de titulación ya que soy responsable de esa área'
},
{
  question:'la rúbrica de las exposiciones es',
  answer: ' 1. Introducción 10%, 2. Desarrollo 30%, 3. Conclusión 10%, 4. Preguntas 10%, 5. Material 20%, 6. Tiempo 10%, 7. Participación 10%'
}
]

const generateContext= (parametro:IQuestion[], pregunta:string) => {
  let context = `Soy un docente universitario, 
  y quisiera darte el siguiente contexto: `;
  parametro.forEach((element) => {
    context += ` ${element.question} ${element.answer}`;
  });
  context += ` por lo tanto como responderías si un alumno me hace la siguiente pregunta: ${pregunta}
  sin volver a repetir el mismo texto que te he proporcionado sino más bien solo dar la respuesta precisa, breve y plana.`;
  return context;
} 


const client = new Groq({
//   apiKey: process.env['GROQ_API_KEY'], 
  apiKey: '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', 
});

async function main() {
  const chatCompletion = await client.chat.completions.create({
    messages: [
  { role: 'user'
    , content: generateContext(text,'tengo una exposición pero desconozco la rúbrica')
  }
  ]
    ,model: 'llama3-8b-8192',
  });

  console.log(chatCompletion.choices[0].message.content);
}

main();