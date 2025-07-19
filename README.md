# 🚀 ProElite Landing Page - React + Vite

This project is a modern landing page built using **React + Vite**, featuring smooth **scroll-based animations** using `AOS` and `Framer Motion`, and designed with **Tailwind CSS** for fast UI development.

---

## 🛠️ Features

- ⚡ Vite + React setup for lightning-fast dev experience
- 🎨 Tailwind CSS for utility-first styling
- 🧠 Animations using:
  - `AOS` (Animate On Scroll) for lightweight scroll-in effects
  - `framer-motion` + `react-intersection-observer` for precise scroll enter/exit control
- 📱 Responsive layout for all devices
- ✉️ Working contact form UI
- 📦 Clean component structure (Hero, About, Features, Contact, Footer, etc.)

---

## 📦 Tech Stack

- **React**
- **Vite**
- **Tailwind CSS**
- **Lucide React Icons**
- **AOS** for entry animations
- **Framer Motion** for scroll animations
- **React Intersection Observer**

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/proelite-landing-page.git
cd proelite-landing-page
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

### 📁 Project Structure

```
src/
├── assets/ #images, logos
├── components/ #Hero, About, Contact, Footer, etc.
├── App.jsx
├── main.jsx
```

### Framer Motion + Intersection Observer

Used for more interactive, scroll-aware animations like fade-up, slide-left, etc.

```
npm install framer-motion react-intersection-observer
```

### Reusable animation wrapper example:

```
<motion.div
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
  variants={...}
>
  {/* content */}
</motion.div>
```

### 📄 ESLint & Formatting

This template includes ESLint preconfigured for React. To customize or expand rules, refer to `.eslintrc.`

### 📃 License

MIT – free to use, customize, and extend.

### 🙏 Credits

Built with ❤️ using React, Vite, Tailwind, and Framer Motion + Intersection Observer.
