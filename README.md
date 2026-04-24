<p align="center">
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Django-3.0.7-092E20?style=for-the-badge&logo=django&logoColor=white" alt="Django" />
  <img src="https://img.shields.io/badge/Python-3.8-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
  <img src="https://img.shields.io/badge/License-GPL--3.0-blue?style=for-the-badge" alt="License" />
</p>

<h1 align="center">🎓 Workshop Booking — FOSSEE, IIT Bombay</h1>

<p align="center">
  <strong>A modern platform for coordinators to book FOSS workshops — redesigned with React for a premium, mobile-first experience.</strong>
</p>

---

## 🎬 Demo

https://github.com/user-attachments/assets/a634868a-308e-4caf-aa54-4125097c577a

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 📅 **Workshop Booking** | Coordinators can propose workshop dates that suit their institution's schedule |
| 📊 **Live Statistics** | Track workshops on a live map of India with pie charts and monthly counts |
| ✅ **Instant Status** | Know whether your workshop is confirmed, pending, or postponed in real-time |
| 🔔 **Email Reminders** | Automated reminders sent to coordinators and instructors before every session |
| 👤 **Profile Management** | View/post comments on coordinator profiles with full instructor statistics |
| 🗺️ **India Map View** | Workshops taken across the map of India with region-level breakdowns |

---

## 🚀 Local Setup Instructions

### Prerequisites
- **Python 3.8+** with `pip`
- **Node.js 16+** with `npm`

### Backend (Django)

```bash
# 1. Clone the repository
git clone https://github.com/chirag-433/workshop_booking.git
cd workshop_booking

# 2. Install Python dependencies
pip install -r requirements.txt

# 3. Generate and apply database migrations
python manage.py makemigrations cms teams
python manage.py makemigrations
python manage.py migrate

# 4. (Optional) Create a superuser for the admin panel
python manage.py createsuperuser

# 5. Start the Django development server
python manage.py runserver
```

### Frontend (React)

```bash
# 6. In a new terminal, navigate to the frontend directory
cd frontend

# 7. Install React dependencies
npm install

# 8. Start the React development server
npm start
```

### 🌐 Access the App

| Service | URL |
|---------|-----|
| React Frontend | [http://localhost:3000](http://localhost:3000) |
| Django Backend | [http://localhost:8000](http://localhost:8000) |
| Admin Panel | [http://localhost:8000/admin](http://localhost:8000/admin) |

> 📝 **Note:** Check [`docs/Getting_Started.md`](./docs/Getting_Started.md) for more detailed info on initial group and permission configuration.

---

## 📸 Visual Showcase

Below are screenshots highlighting the modern UI/UX improvements, improved responsiveness, and overall functionality of the redesigned React frontend.

### 🏠 Home Page
*Rich hero section with floating workshop cards, statistics bar, feature grid, and clear calls-to-action.*

<p align="center">
  <img src="https://github.com/user-attachments/assets/212fdcdb-9b3c-4f17-913c-000b9ed69ce9" alt="Home Page" width="90%" />
</p>

### 🔐 Login Page
*Minimalist authentication form with high contrast and accessibility.*

<p align="center">
  <img src="https://github.com/user-attachments/assets/920d4491-746b-4b92-a79f-e3bfed69744a" alt="Login Page" width="90%" />
</p>

### 📋 Registration Page
*Comprehensive coordinator registration form with organized two-column layout.*

<p align="center">
  <img src="https://github.com/user-attachments/assets/3f0c1f84-eef9-464b-a2a3-f65655ae6aeb" alt="Registration Page" width="90%" />
</p>

### 📝 Propose a Workshop
*Intuitive proposal form with step-by-step guidance sidebar for coordinators.*

<p align="center">
  <img src="https://github.com/user-attachments/assets/2fde2dc8-0f97-4543-9050-f0fd4167bf17" alt="Propose Workshop" width="90%" />
</p>

### 📊 Workshop Status Dashboard
*Modern dashboard with status summary cards, filterable data table, and search.*

<p align="center">
  <img src="https://github.com/user-attachments/assets/a0bd3709-d97c-4bc2-81f1-57082af36a96" alt="Workshop Status Dashboard" width="90%" />
</p>

> 🎬 **See the full walkthrough in the [Demo Video](#-demo) above!**

---

## 💭 Project Reflection

### What design principles guided your improvements?

My improvements were guided by a focus on creating a **rich, dynamic, and clean user experience**. I emphasized clear visual hierarchy and modern aesthetics — using the `Syne` font for bold headings and `DM Sans` for readable body text. By introducing interactive elements (hover animations, floating cards, status badges) and refining the layout with a consistent design system (CSS custom properties, reusable components), I aimed to make the interface feel responsive and intuitive, providing users with a more engaging and seamless experience.

### How did you ensure responsiveness across devices?

Responsiveness was ensured by adopting a **mobile-first design approach** and leveraging flexible CSS layouts (Flexbox and CSS Grid) alongside responsive design utilities. Key strategies included:
- Using `clamp()` for fluid typography scaling
- Implementing responsive breakpoints at `640px` for mobile optimizations
- Ensuring all interactive elements meet the `44px` minimum touch target size
- Using `overflow-x: auto` for data tables on small screens

This guarantees that UI components and page layouts scale appropriately, maintaining their structural integrity, legibility, and alignment across various screen sizes and devices (from mobile to desktop).

### What trade-offs did you make between the design and performance?

Introducing dynamic, state-driven interactions and smoother CSS transitions adds a marginal amount of rendering overhead compared to a purely static layout. However, this minor performance trade-off was intentionally made because the **micro-animations and polished styling significantly elevate the premium feel**, usability, and aesthetic quality of the application. Specific choices included:
- Using CSS transitions (`200ms cubic-bezier`) instead of JavaScript animations for GPU-accelerated performance
- Loading Google Fonts with `display=swap` to prevent layout shifts
- Keeping the component tree shallow to minimize React re-renders

### What was the most challenging part of the task and how did you approach it?

The most challenging part was implementing the dynamic styling and responsive behaviors **without breaking the existing component structure** or over-complicating the logic. The original Django templates had deeply coupled styling, and migrating to a React-based component architecture required careful abstraction. This was solved by:
1. Creating a centralized design system in `global.css` with CSS custom properties
2. Building reusable component classes (`.btn`, `.card`, `.badge`, `.form-input`)
3. Applying conditional styling that triggers smooth CSS transitions to gracefully alter the layout across different states and screen sizes

---
