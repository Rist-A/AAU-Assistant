const express = require('express');
const router = express.Router();
const { default: createModelClient, isUnexpected } = require("@azure-rest/ai-inference");
const { AzureKeyCredential } = require("@azure/core-auth");
require('dotenv').config();

const endpoint = process.env.AZURE_AI_ENDPOINT || "https://models.github.ai/inference";
const credential = new AzureKeyCredential(process.env.AZURE_AI_KEY);
const client = createModelClient(endpoint, credential);
const modelName = process.env.AZURE_AI_MODEL || "openai/gpt-4.1";

// POST /api/openai/generate
router.post('/generate', async (req, res) => {
  try {
    const { messages, temperature = 0.7, max_tokens = 300 } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Messages array is required" });
    }

    const response = await client.path("/chat/completions").post({
      body: {
        messages,
        temperature,
        max_tokens,
        model: modelName
      }
    });

    if (isUnexpected(response)) {
        console.error("Azure API Error:", response.body);
      throw new Error(response.body?.error?.message || "API request failed");
    }

    res.json({
      result: response.body.choices[0]?.message?.content?.trim() || "No response generated"
    });

  } catch (err) {
    console.error('API Error:', err);
    res.status(500).json({
      error: err.message || "Processing failed",
      details: err.body || null
    });
  }
});

module.exports = router;
