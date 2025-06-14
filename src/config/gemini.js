// const apiKey = "";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyDNzQNV9IMmDva6hBdYVcq3QvV4Dbv8iaQ" });

async function runChat(prop) {
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prop,
    });
  
    return response.text;
}   

export default runChat;