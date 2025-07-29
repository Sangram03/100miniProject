import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectDB } from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import 'dotenv/config';

// ✅ Get __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 4000;

// ✅ Middlewares
app.use(cors());
app.use(express.json());

// ✅ API Routes
app.use('/user', userRoutes);

// ✅ Define frontend path
// ✅ Define frontendPath BEFORE using it
const frontendPath = path.join(__dirname, '../frontend');

// ✅ Serve static files
app.use(express.static(frontendPath));

// ✅ Fallback route for SPA (must be last)
app.use((req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

// ✅ Connect MongoDB
connectDB();

// ✅ Start server
app.listen(port, () => console.log(`🚀 Server started on port ${port}`));
