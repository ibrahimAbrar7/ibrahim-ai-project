import { GoogleGenAI } from '@google/genai';
import { NextResponse } from 'next/server';

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(req: Request) {
  const body = await req.json();
  const { name, education, interests, question } = body;

  const tools = [{ googleSearch: {} }];
  const config = { thinkingConfig: { thinkingBudget: -1 }, tools };
  const model = 'gemini-2.5-pro';

  // Compose prompt using the form data
  const prompt = `
You are a helpful career guidance counselor. Provide personalized, clear, and practical career advice.

Details about the person:
Name: ${name}
Education: ${education}
Interests: ${interests}

User's question:
${question}
`;

  const contents = [
    {
      role: 'user',
      parts: [{ text: prompt }],
    },
  ];

  try {
    const response = await ai.models.generateContentStream({
      model,
      config,
      contents,
    });

    let fullResponse = '';
    for await (const chunk of response) {
      fullResponse += chunk.text;
    }

    return NextResponse.json({ reply: fullResponse });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
