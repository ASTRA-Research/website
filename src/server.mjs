import express from 'express';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
app.use(cors()); // Enable CORS
app.use(bodyParser.json());

// Use the provided Discord webhook URL
const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1264513868500308040/wi6RpslNDlKATgIF-JzCI1vgKp07fIzOHiNmFFYx_gz4caBsabdYZ37m5Pu1aV3Otqk3';

app.post('/send', async (req, res) => {
  const { name, email, message } = req.body;

  const payload = {
    content: `New contact form submission:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  try {
    const response = await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      res.status(200).send('Message sent successfully');
    } else {
      const text = await response.text(); // Get response text for debugging
      console.error('Failed to send message:', text);
      res.status(500).send('Failed to send message');
    }
  } catch (error) {
    console.error('Error:', error); // Log detailed error
    res.status(500).send('Failed to send message');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
