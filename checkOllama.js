const axios = require('axios');

async function checkOllama() {
    try {
        const response = await axios.post('http://127.0.0.1:11434/api/generate', {
            model: 'llama3.2:latest',
            prompt: 'test',
            stream: false
            // authToken: 'Gox9SpWLEzKzqoTRP3czYyhW5GZrSYLHpvfjFq4TA73S'
        });
        console.log('Ollama is running:', response.data);
    } catch (error) {
        console.error('Error connecting to Ollama:', error.message);
    }
}

checkOllama();
