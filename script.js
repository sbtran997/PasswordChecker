// Initialize Map
var map = L.map('map').setView([40.7128, -74.0060], 10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// AI Chatbot
async function askAI() {
    const inputText = document.getElementById("userInput").value;
    console.log("Input received:", inputText); // Log the input for debugging
    document.getElementById("response").innerText = "Thinking...";

    try {
        const ai = new WebLLM.ChatModule();
        await ai.init();
        const response = await ai.chat(inputText);
        console.log("AI Response:", response); // Log the response for debugging
        document.getElementById("response").innerText = response;
    } catch (error) {
        console.error("Error communicating with the AI:", error);
        document.getElementById("response").innerText = "There was an error processing your request.";
    }
}

// Simulated AI response (for testing if AI is taking too long)
        // async function askAI() {
        //     const inputText = document.getElementById("userInput").value;
        //     console.log("Input received:", inputText); // Log the input for debugging
        //     document.getElementById("response").innerText = "Thinking...";
        //     setTimeout(() => {
        //         document.getElementById("response").innerText = "This is a sample AI response!";
        //     }, 1000);
        // }
