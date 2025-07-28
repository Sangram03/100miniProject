import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectDB } from './config/db.js';
import userRouters from './routes/userRoutes.js';
import 'dotenv/config';

// Required for ES Modules to get __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();   // ✅ Declare app first

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Serve frontend (static HTML/JS)
app.use(express.static(path.join(__dirname, '../frontend')));

// ✅ API Routes
app.use('/user', userRouters);

// ✅ MongoDB Connect
connectDB();

// ✅ Test API Route
app.get('/', (req, res) => {
  res.send('API Working');
});

// ✅ Start Server
app.listen(3000, () => console.log('🚀 Server running on http://localhost:3000'));
