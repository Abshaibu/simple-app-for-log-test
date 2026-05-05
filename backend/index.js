const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Function to generate random logs
const generateRandomLogs = () => {
    const logLevels = ['INFO', 'WARN', 'ERROR', 'DEBUG'];
    const messages = [
        'Database connection established',
        'Cache cleared',
        'User session expired',
        'API request timeout',
        'Memory usage threshold reached',
        'Background job started',
        'Task queue processed',
        'File upload completed',
        'Email notification sent',
        'Authentication service unavailable'
    ];
    
    const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
    
    for (let i = 0; i < 10; i++) {
        const timestamp = new Date().toISOString();
        const level = getRandomElement(logLevels);
        const message = getRandomElement(messages);
        console.log(`[${timestamp}] [${level}] ${message}`);
    }
};

// Generate random logs every 2 minutes (120,000 ms)
setInterval(generateRandomLogs, 2 * 60 * 1000);

// Middleware to output a standard log entry
app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    const method = req.method;
    const url = req.originalUrl;
    
    // Using a standard format: [TIMESTAMP] [LEVEL] MESSAGE
    console.log(`[${timestamp}] [INFO] Request received: ${method} ${url}`);
    next();
});

// Helper to simulate endpoint responses
const handleEndpoint = (endpointName) => {
    return (req, res) => {
        res.json({
            message: `Successfully accessed ${endpointName} endpoint`,
            endpoint: endpointName,
            status: 'success'
        });
    };
};

// Endpoints
app.get('/login', handleEndpoint('login'));
app.post('/login', handleEndpoint('login'));

app.get('/signup', handleEndpoint('signup'));
app.post('/signup', handleEndpoint('signup'));

app.get('/dashboard', handleEndpoint('dashboard'));
app.post('/dashboard', handleEndpoint('dashboard'));

app.get('/otp', handleEndpoint('otp'));
app.post('/otp', handleEndpoint('otp'));

app.get('/reset-password', handleEndpoint('reset-password'));
app.post('/reset-password', handleEndpoint('reset-password'));

// Fallback for all other routes
app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint not found' });
});

app.listen(PORT, () => {
    console.log(`[${new Date().toISOString()}] [INFO] Backend server is running on http://localhost:${PORT}`);
});
