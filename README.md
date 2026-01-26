🧠 Mood Check AI – Real-Time Sentiment Analysis Web App

Mood Check AI is a real-time sentiment analysis web application that analyzes user-entered text and determines whether the sentiment is Positive, Negative, or Neutral using a Large Language Model (LLM).

The project features a simple chat-style interface with light/dark mode and instant AI-powered feedback.

🚀 Features

Real-time sentiment prediction
Chat-style user interface
Dark / Light mode toggle
Clean and responsive design
AI-powered text classification
Instant results with sentiment badges

🛠️ Tech Stack

Frontend: HTML, CSS, JavaScript
AI Model API: Groq API (LLaMA 3.3 – 70B)

📂 Project Structure
Mood-Check-AI/
│
├── index.html
├── styles.css
└── script.js

⚙️ How It Works

User enters a sentence in the input field
JavaScript sends the text to the Groq API
The LLM analyzes the sentiment
AI returns one label: POSITIVE, NEGATIVE, or NEUTRAL
Result is displayed as a colored badge

🔑 API Setup

Create an account at Groq Cloud
Generate an API key
Open script.js
Replace:
const API_KEY = "YOUR_API_KEY_HERE";

▶️ Run Locally

Download or clone this repository
Open index.html in your browser
Enter text and click Send
No server setup required.

⚠️ Security Note

For demo purposes, the API key is used on the frontend.
In production, API calls should be routed through a backend server to protect credentials.

📌 Future Improvements

Add Node.js + Express backend
Store sentiment history
Show confidence scores
Multi-language support
User authentication


📜 License

This project is open-source and available under the MIT License.
