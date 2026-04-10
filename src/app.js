import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';
import cursoRoutes from './routes/curso.routes.js';

const app = express();

const corsOptions = {
  origin: ['https://proyectocursos-frontend.vercel.app', 'http://localhost:5173/'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions)); // ✅ suficiente
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/cursos', cursoRoutes);

// Middleware de error
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ message: err.message || 'Error del servidor' });
});

export default app;