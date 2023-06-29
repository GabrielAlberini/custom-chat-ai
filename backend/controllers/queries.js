import cohere from "cohere-ai";
import dotenv from "dotenv";

dotenv.config();
cohere.init(process.env.API_KEY);

const generateResponse = async (prompt) => {
  try {
    const response = await cohere.generate({
      model: "command",
      prompt,
      max_tokens: 300,
      temperature: 0.9,
      k: 0,
      stop_sequences: [],
      return_likelihoods: "NONE",
    });
    return response.body.generations[0].text;
  } catch (error) {
    throw new Error("Error al generar la respuesta: " + error.message);
  }
};

export const sendRequest = async (req, res) => {
  const body = req.body;
  try {
    const prediction = await generateResponse(body.query);
    res.json({ prediction });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
