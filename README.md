# 🚀 Developer Portfolio

A stunning, creative, and stylish portfolio built with modern technologies.

![Portfolio Preview](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200)

## ✨ Features

- **Stunning Animations** - Framer Motion & GSAP powered animations
- **Custom Cursor** - Interactive cursor that follows mouse movement
- **Particle Background** - Dynamic particle system with connections
- **Glass Morphism** - Modern frosted glass UI effects
- **Responsive Design** - Looks great on all devices
- **Dark Theme** - Beautiful dark mode with gradient accents
- **Contact Form** - Connected to PostgreSQL database
- **Skills Showcase** - Filterable skills with progress bars
- **Project Gallery** - Filterable project cards with hover effects
- **Timeline Experience** - Animated work history

## 🛠️ Tech Stack

### Frontend

- **React 18** - UI Library
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **GSAP** - Advanced Animations
- **Lucide React** - Icons

### Backend

- **Node.js** - Runtime
- **Express** - Web Framework
- **Neon PostgreSQL** - Serverless Database

## 📦 Installation

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd portfolio
```

### 2. Set up Neon PostgreSQL

1. Go to [Neon.tech](https://neon.tech) and create a free account
2. Create a new project
3. Copy your connection string

### 3. Configure environment variables

```bash
# In the server folder, create a .env file
cd server
cp .env.example .env
```

Edit `.env` and add your Neon connection string:

```env
DATABASE_URL=postgresql://username:password@ep-xxx.region.aws.neon.tech/neondb?sslmode=require
PORT=5000
```

### 4. Install dependencies

```bash
# From the root folder
npm install
npm run install:all
```

### 5. Run the development servers

```bash
# Run both frontend and backend
npm run dev
```

Or run them separately:

```bash
# Terminal 1 - Backend
cd server && npm run dev

# Terminal 2 - Frontend
cd client && npm run dev
```

### 6. Open in browser

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:5000](http://localhost:5000)

## 📁 Project Structure

```
portfolio/
├── client/                 # React Frontend
│   ├── public/
│   │   └── favicon.svg
│   ├── src/
│   │   ├── components/
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── CustomCursor.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ParticleBackground.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Skills.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── server/                 # Express Backend
│   ├── index.js
│   ├── package.json
│   ├── .env.example
│   └── .env
│
├── package.json
└── README.md
```

## 🎨 Customization

### Update Personal Info

1. **Hero Section** - Edit `client/src/components/Hero.jsx`

   - Change name, titles, and description

2. **About Section** - Edit `client/src/components/About.jsx`

   - Update bio and fun facts

3. **Skills** - Edit `client/src/components/Skills.jsx`

   - Modify the `skills` array

4. **Projects** - Edit `client/src/components/Projects.jsx`

   - Update the `projects` array with your work

5. **Experience** - Edit `client/src/components/Experience.jsx`

   - Update the `experiences` array

6. **Contact** - Edit `client/src/components/Contact.jsx`
   - Update contact information

### Change Colors

Edit `client/tailwind.config.js` to customize the color palette:

```js
colors: {
  accent: {
    purple: '#a855f7',  // Primary accent
    pink: '#ec4899',    // Secondary accent
    cyan: '#06b6d4',    // Tertiary accent
    emerald: '#10b981', // Success color
  }
}
```

## 🔌 API Endpoints

| Method | Endpoint                 | Description           |
| ------ | ------------------------ | --------------------- |
| GET    | `/api/projects`          | Get all projects      |
| GET    | `/api/projects/featured` | Get featured projects |
| POST   | `/api/projects`          | Add a project         |
| GET    | `/api/skills`            | Get all skills        |
| POST   | `/api/skills`            | Add a skill           |
| GET    | `/api/experiences`       | Get all experiences   |
| POST   | `/api/experiences`       | Add an experience     |
| POST   | `/api/contact`           | Submit contact form   |
| GET    | `/api/messages`          | Get all messages      |
| GET    | `/api/health`            | Health check          |

## 🚀 Deployment

### Frontend (Vercel)

1. Push your code to GitHub
2. Connect to Vercel
3. Deploy!

### Backend (Railway/Render)

1. Create a new project
2. Connect your GitHub repo
3. Add environment variables
4. Deploy!

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 🙏 Credits

- Icons by [Lucide](https://lucide.dev)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Database by [Neon](https://neon.tech)

---

Made with ❤️ by Your Name
