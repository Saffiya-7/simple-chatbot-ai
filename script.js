// Define chatbot responses
const responses = {
    "hello": "Hi! How can I help you today?",
    "hi": "Hello! What's on your mind?",
    "how are you": "I'm good, thanks! How about you?",
    "what is your name": "I'm a chatbot, nice to meet you!",
    "default": "Sorry, I didn't understand that. Can you please rephrase?"
};

// Get chat body and user input elements
const chatBody = document.getElementById("chat-body");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Add event listener to send button
sendBtn.addEventListener("click", () => {
    // Get user input
    const userMessage = userInput.value.trim();

    // Check if user input is not empty
    if (userMessage !== "") {
        // Display user message
        const userMessageElement = document.createElement("div");
        userMessageElement.textContent = `You: ${userMessage}`;
        userMessageElement.style.marginBottom = "10px";
        chatBody.appendChild(userMessageElement);

        // Get chatbot response
        let chatbotResponse = responses[userMessage.toLowerCase()];
        if (!chatbotResponse) {
            chatbotResponse = responses["default"];
        }

        // Display chatbot response
        const chatbotResponseElement = document.createElement("div");
        chatbotResponseElement.textContent = `Chatbot: ${chatbotResponse}`;
        chatbotResponseElement.style.marginBottom = "10px";
        chatBody.appendChild(chatbotResponseElement);

        // Clear user input
        userInput.value = "";
    }
});
