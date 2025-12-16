import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { neon } from '@neondatabase/serverless';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:5173',
    'https://portfolio-gold-ten-35.vercel.app'
  ],
  credentials: true
}));
app.use(express.json());

// Database connection
const sql = neon(process.env.DATABASE_URL);

// Initialize database tables
async function initDB() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS projects (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        image_url TEXT,
        tech_stack TEXT[],
        live_url TEXT,
        github_url TEXT,
        featured BOOLEAN DEFAULT false,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    
    await sql`
      CREATE TABLE IF NOT EXISTS skills (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        category VARCHAR(50),
        proficiency INTEGER DEFAULT 80,
        icon VARCHAR(50)
      )
    `;
    
    await sql`
      CREATE TABLE IF NOT EXISTS experiences (
        id SERIAL PRIMARY KEY,
        company VARCHAR(255) NOT NULL,
        position VARCHAR(255) NOT NULL,
        description TEXT,
        start_date DATE,
        end_date DATE,
        current BOOLEAN DEFAULT false
      )
    `;
    
    await sql`
      CREATE TABLE IF NOT EXISTS messages (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        read BOOLEAN DEFAULT false,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    
    console.log('✅ Database tables initialized');
  } catch (error) {
    console.error('❌ Database initialization error:', error);
  }
}

// Routes

// Get all projects
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await sql`SELECT * FROM projects ORDER BY created_at DESC`;
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get featured projects
app.get('/api/projects/featured', async (req, res) => {
  try {
    const projects = await sql`SELECT * FROM projects WHERE featured = true ORDER BY created_at DESC`;
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a project
app.post('/api/projects', async (req, res) => {
  try {
    const { title, description, image_url, tech_stack, live_url, github_url, featured } = req.body;
    const project = await sql`
      INSERT INTO projects (title, description, image_url, tech_stack, live_url, github_url, featured)
      VALUES (${title}, ${description}, ${image_url}, ${tech_stack}, ${live_url}, ${github_url}, ${featured})
      RETURNING *
    `;
    res.json(project[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all skills
app.get('/api/skills', async (req, res) => {
  try {
    const skills = await sql`SELECT * FROM skills ORDER BY category, proficiency DESC`;
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a skill
app.post('/api/skills', async (req, res) => {
  try {
    const { name, category, proficiency, icon } = req.body;
    const skill = await sql`
      INSERT INTO skills (name, category, proficiency, icon)
      VALUES (${name}, ${category}, ${proficiency}, ${icon})
      RETURNING *
    `;
    res.json(skill[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all experiences
app.get('/api/experiences', async (req, res) => {
  try {
    const experiences = await sql`SELECT * FROM experiences ORDER BY start_date DESC`;
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add experience
app.post('/api/experiences', async (req, res) => {
  try {
    const { company, position, description, start_date, end_date, current } = req.body;
    const experience = await sql`
      INSERT INTO experiences (company, position, description, start_date, end_date, current)
      VALUES (${company}, ${position}, ${description}, ${start_date}, ${end_date}, ${current})
      RETURNING *
    `;
    res.json(experience[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Submit contact message
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const msg = await sql`
      INSERT INTO messages (name, email, message)
      VALUES (${name}, ${email}, ${message})
      RETURNING *
    `;
    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all messages (admin)
app.get('/api/messages', async (req, res) => {
  try {
    const messages = await sql`SELECT * FROM messages ORDER BY created_at DESC`;
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Serve static files in production
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  initDB();
});
