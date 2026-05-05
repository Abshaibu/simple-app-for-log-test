const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

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
