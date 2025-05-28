# EduSuit AI-Powered ERP + LMS System

> A next-gen, AI-integrated Educational ERP + LMS solution designed to simplify and enhance operations for schools, colleges, and coaching institutions. Built with MERN Stack and modular microservices, this platform supports administration, learning, communication, mentorship, analytics, and more all in one place.

## Live Preview

[ Visit Demo Site ↗️](#)  

(Coming Soon – Deployment in Progress)



##  Key Highlights

-  **Role-Based Dashboards** for Admins, Teachers, Students, and Parents
-  **AI-Powered Features**: Career Guidance, Mentorship Matchmaking, Predictive Analytics, Smart Content Recommendations, Voice Assistant, Auto-Summarizer
-  **Advanced LMS**: SCORM support, virtual classroom integration, auto-recording, assignments, assessments
-  **Data-Driven Insights**: Custom Reports, Heatmaps, KPIs
-  **Decentralized Academic Records** (Blockchain-lite)
-  **Gamification Engine**: Progress badges, XP, leaderboards
-  **Mental Health Module**: Mood tracker, wellness dashboard
-  **Multi-Branch + Localization**: Language, currency, calendar support

##  Project Structure

```

/client            => Frontend (React + Tailwind)
/components      => Reusable UI components
/pages           => Role-specific pages (Admin, Student, etc.)
/services        => Axios API calls
/assets          => Static images, icons, fonts

/server            => Backend (Node + Express)
/routes          => REST API Routes
/controllers     => Business logic
/models          => MongoDB schemas
/middleware      => Auth, validators
/config          => DB and env config

/ai-services       => Python microservices (ML/NLP)
/career-guidance
/summarizer
/dropout-detector

/public            => Static files
.env               => Environment variables
README.md

````



## Features by Module

### Core ERP Features
- Pre-Admission, Admissions, Fee Management, Attendance (Biometric), Exams, Transport, Hostel, HR, Payroll, Inventory

### LMS Features
- Lesson Plans, Assignments, Video Lectures, Online Tests, Virtual Classrooms (Zoom/MS Teams Embed), SCORM/TinCan support

### Communication & Portals
- Student/Parent Web & Mobile Portals
- Chat & Announcements
- Notifications (Email, SMS, Push)

### AI Features
- Career Guidance Engine
- Smart Learning Suggestions
- Mentorship Matching Algorithm
- Dropout Prediction & Early Warning
- Voice Assistant Integration
- AI-Based Summarization of Notes
- Sentiment Analysis & Mood Logs

## Upcoming Enhancements

- [ ] Offline Mode / Low-Bandwidth Support
- [ ] Virtual Campus Tour (WebAR)
- [ ] E-signature Integration
- [ ] Progressive Web App (PWA) support
- [ ] CI/CD pipeline with GitHub Actions


##  Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/your-username/erp-lms-ai.git
cd erp-lms-ai
````

2. **Set up client and server**

```bash
cd client
npm install
npm run dev

cd ../server
npm install
npm run dev
```

3. **Configure Environment**

* Create `.env` files in `/server`, `/ai-services`, and `/client` with your API keys and DB configs

4. **Start AI microservices (optional for advanced features)**

```bash
cd ai-services/career-guidance
python app.py
```


## Project Mission

> To empower institutions with a digitally intelligent platform that not only manages school operations but also nurtures growth through mentorship, AI automation, and simplicity. Our goal is to reduce unnecessary complexity, support non-technical users, and build a connected, future-ready educational environment.



##  Contact

For demo requests or collaborations:

- 📧 Email: [Contact Me](mailto:deepakcode21@gmail.com)
- 🌐 Website: [Visit My Porfolio](https://deepakcode.vercel.app/)


