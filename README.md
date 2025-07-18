# 🧠 MockMate – Interviews in Your Pocket

MockMate is an AI-powered interview preparation platform that simulates **real-time voice-based interviews** using conversational agents. Designed to help candidates prepare smarter and faster, MockMate enables users to **generate customized interview sessions** and practice them interactively — all from the comfort of their browser.

---

## 🚀 Features

- 🎤 **Voice-Driven Interaction** – Simulated job interviews via two-way voice conversations using Vapi AI.
- 🧹 **Dynamic Interview Generation** – Interviews are tailored based on your role, experience level, tech stack, and preferred question types.
- 💡 **Custom Workflows with Vapi** – Personalized voice workflows to conduct interviews like a real human.
- 🛆 **Tech Stack**
  - **Frontend:** Next.js, Tailwind CSS
  - **Database:** Firebase
  - **AI Voice Agent:** Vapi
  - **Authentication:** Firebase Auth
---

## 🌟 Why MockMate?

> “Because preparing for interviews should feel like *talking to a person*, not solving a Google Doc.”

MockMate takes traditional mock interviews to the next level by offering:
- Real-time **AI voice conversations**
- Smart question generation via your preferences
- Workflow-based design that mimics actual interview dynamics

---

## 📸 UI Screenshots

Check out the live link attached with this repository to test.

![HomePage](/public/screenshot1.png)  
![InterviewPage](/public/screenshot2.png)  
![FeedbackPage](/public/screenshot3.png)  
---

## 🛠️ Installation & Setup

### Prerequisites
- Node.js
- Firebase project with necessary environment variables
- Vapi account with a configured workflow

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/mockmate.git
cd mockmate
```
### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment
Create a .env.local file and add:
```
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
NEXT_PUBLIC_VAPI_WORKFLOW_ID=your_workflow_id
NEXT_PUBLIC_VAPI_WEB_TOKEN=your_vapi_token
```

### 4. Run and Enjoy
```bash
npm run dev
```

## 💬 Feedback
Found a bug or want to contribute?
Open an issue or submit a pull request!

