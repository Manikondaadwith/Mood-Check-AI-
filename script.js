const API_KEY = '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'; 
const API_URL = 'https://api.groq.com/openai/v1/chat/completions';

const chatDisplay = document.getElementById('chatDisplay');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const themeBtn = document.getElementById('themeBtn');

// --- THEME TOGGLE LOGIC ---
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Change icon based on mode
    if (document.body.classList.contains('dark-mode')) {
        themeBtn.textContent = '☀️';
    } else {
        themeBtn.textContent = '🌙';
    }
});

// --- CHAT LOGIC ---
function addMessage(text, sender, sentiment = null) {
    const div = document.createElement('div');
    div.classList.add('bubble', sender === 'user' ? 'user-msg' : 'ai-msg');
    
    let content = `<div>${text}</div>`;
    if (sentiment) {
        content += `<span class="badge ${sentiment}">${sentiment}</span>`;
    }
    
    div.innerHTML = content;
    chatDisplay.appendChild(div);
    chatDisplay.scrollTop = chatDisplay.scrollHeight;
}

async function handleAnalysis() {
    const text = userInput.value.trim();
    if (!text) return;

    addMessage(text, 'user');
    userInput.value = '';
    sendBtn.disabled = true;

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: "llama-3.3-70b-versatile",
                messages: [
                    { role: "system", content: "Analyze sentiment. Reply only with: POSITIVE, NEGATIVE, or NEUTRAL." },
                    { role: "user", content: text }
                ]
            })
        });

        const data = await response.json();
        const result = data.choices[0].message.content.trim().toUpperCase().replace(/[^A-Z]/g, "");

        addMessage("Analysis complete:", 'ai', result);

    } catch (error) {
        addMessage("Error connecting to AI.", 'ai');
    } finally {
        sendBtn.disabled = false;
    }
}

sendBtn.addEventListener('click', handleAnalysis);
userInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleAnalysis(); });