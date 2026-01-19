import { GoogleGenAI, Type } from "@google/genai";
import { Flashcard } from '../types';

// Initialize the API client
// Note: We create a function to get the client to ensure we pick up the latest API key if it changes (though here it's likely static env)
const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API Key is missing. Using mock data or failing gracefully.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateFlashcards = async (topic: string, count: number = 5): Promise<Flashcard[]> => {
  const ai = getAiClient();
  if (!ai) {
    throw new Error("Gemini API Key is missing. Please ensure it is set.");
  }

  const prompt = `Generate ${count} distinct, precise flashcard questions and answers for a Grade 12 STEM Capstone/Research exam.
  Focus specifically on the topic: "${topic}".
  Ensure the questions are academic, precise, and suitable for a high-school senior research curriculum (Practical Research 2).
  Avoid generic questions. Include questions about statistical tools, methodology, APA formatting, or specific research terminology if relevant to the topic.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              question: { type: Type.STRING },
              answer: { type: Type.STRING },
              category: { type: Type.STRING },
            },
            required: ["question", "answer", "category"],
          },
        },
      },
    });

    const text = response.text;
    if (!text) return [];

    const rawData = JSON.parse(text);
    
    // Map to our Flashcard type with unique IDs
    return rawData.map((item: any, index: number) => ({
      id: `gen-${Date.now()}-${index}`,
      question: item.question,
      answer: item.answer,
      category: item.category,
    }));

  } catch (error) {
    console.error("Error generating flashcards:", error);
    throw error;
  }
};
