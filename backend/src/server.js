import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import emailRoutes from './routes/emailRoutes.js';

const app = express();

const pass = process.env.EMAIL_PASS;
const user = process.env.EMAIL_USER;



// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', emailRoutes);

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
    console.log(pass);
    console.log(user);
    
  console.log(`Server running on port ${PORT}`);
}); 