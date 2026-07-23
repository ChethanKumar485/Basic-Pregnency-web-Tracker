# 🌸 Bloom v2 — Maternal Wellness Platform

A premium, research-backed pregnancy wellness web application. Bloom v2 is a complete redesign featuring an "organic luxury" aesthetic (Cormorant Garamond + Outfit typography), a full **12-month nutrition plan** with separate **vegetarian and non-vegetarian** meal tracks, visual SVG sleep-position diagrams, and 9 fully functional modules.

---

## ✨ What's New in v2

- **Complete visual redesign** — warm clay/sage/cream palette, Cormorant Garamond display font, refined cards, badges, and tabs
- **12-Month Nutrition Plan** — every month from conception to postpartum (Month 11–12), each with:
  - Fetal development summary
  - Key nutrients & extra calorie target
  - Full **Vegetarian** meal plan (breakfast/lunch/dinner/snacks)
  - Full **Non-Vegetarian** meal plan (breakfast/lunch/dinner/snacks)
  - "Avoid this month" food list
  - Auto-opens to your current month based on your LMP
- **Research-based Food Safety tables** — mercury levels, Listeria risk, pathogen risk, with citations (ACOG, NHS, FDA, WHO, RCOG, Lancet, NEJM, FASEB studies)
- **Visual SVG Sleep Position Guide** — illustrated diagrams for left-side (SOS), right-side, back-sleeping risk, and semi-reclined positions
- **New: Birth Plan & Hospital Bag** — printable checklists (mom/baby/partner) + birth preferences worksheet
- **AI Advisor** (renamed from Image Analyzer) — mode-card selector UI, personalised with your week/trimester

---

## 🗂️ Project Structure

```
bloom-v2/
├── index.html                   # Dashboard — profile, hero, modules, daily tips
├── css/
│   └── main.css                 # Complete v2 design system
├── js/
│   ├── core.js                  # Profile, BMI, week/trimester math, utilities
│   └── nutrition-data.js         # 12-month meal plan data (veg & non-veg)
└── pages/
    ├── timeline.html             # Trimester checklists, fetal milestones, kick counter
    ├── nutrition.html             # 12-month plan, nutrients, food safety, brain foods
    ├── weight.html                # BMI-based weight tracker with chart
    ├── activity.html              # 150-min tracker, Kegel timer, safe exercises
    ├── sleep.html                 # SVG sleep position diagrams + comfort hacks
    ├── warnings.html              # Emergency symptom checker
    ├── postpartum.html            # Fourth trimester recovery, lochia, mental health
    ├── birth-plan.html            # NEW: Hospital bag + birth preferences (printable)
    └── ai-advisor.html            # AI image analysis (food/exercise photos)
```

---
<img width="1881" height="680" alt="image" src="https://github.com/user-attachments/assets/35ee3b28-ef33-4928-9b99-60511bf51cd0" />

---
<img width="1640" height="768" alt="image" src="https://github.com/user-attachments/assets/7e5e1825-bc30-4024-8f0a-7ba20427c84e" />

---
<img width="1308" height="805" alt="image" src="https://github.com/user-attachments/assets/4fe6417e-e0ee-4307-ab91-21a7cf7206db" />

---
<img width="1492" height="827" alt="image" src="https://github.com/user-attachments/assets/59bdfcb7-6d50-4481-80da-86c85e9688aa" />

---
<img width="705" height="829" alt="image" src="https://github.com/user-attachments/assets/bd071a7c-4923-465a-af0c-4d67c977b0e4" />

---
<img width="484" height="818" alt="image" src="https://github.com/user-attachments/assets/c306eba8-b775-4225-9b79-bce02f3b6c3a" />

---
<img width="528" height="846" alt="image" src="https://github.com/user-attachments/assets/cb965d17-b14e-426b-ba39-8af3bc82dfdf" />

---
<img width="519" height="725" alt="image" src="https://github.com/user-attachments/assets/4c1e8498-75d0-47a5-8a9a-97d18acf3a9e" />


---
<img width="473" height="432" alt="image" src="https://github.com/user-attachments/assets/313a240e-ef5b-4a75-8a42-c8a81e939438" />

---
<img width="999" height="728" alt="image" src="https://github.com/user-attachments/assets/c4d69c71-9eab-4b08-af92-b82615fe1e74" />

---
<img width="466" height="520" alt="image" src="https://github.com/user-attachments/assets/dedf6730-6195-406f-8dd4-d855332250b3" />

---
## 🌐 Live Demo

🔗 **Try the application here:**  

https://chethankumar485.github.io/Basic-Pregnency-web-Tracker/

> **Direct Link:** https://chethankumar485.github.io/Basic-Pregnency-web-Tracker/
> 
---

## 🚀 Getting Started

1. Unzip the project
2. Open `index.html` in any modern browser — no build step required
3. Enter your profile (LMP, weight, height, diet preference) on the dashboard
4. Navigate to **Nutrition** — your current month auto-expands with the right meal plan for your diet type

### AI Advisor Setup
The AI Advisor calls `https://api.anthropic.com/v1/messages` directly with vision input. For production use, set up a backend proxy (see below) to protect your API key.

```javascript
// server.js (Node/Express)
const express = require('express');
const app = express();
app.use(express.json({ limit: '20mb' }));
app.post('/api/analyze', async (req, res) => {
  const r = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify(req.body)
  });
  res.json(await r.json());
});
app.listen(3001);
```
Then point the fetch URL in `ai-advisor.html` to `http://localhost:3001/api/analyze`.

---

## 🥗 12-Month Nutrition Plan — Data Source

| Month | Weeks | Trimester | Focus |
|---|---|---|---|
| 1 | 1–4 | T1 | Implantation, neural tube — folic acid critical |
| 2 | 5–8 | T1 | Organ formation — iron, B12, iodine |
| 3 | 9–13 | T1 | Fetal growth begins — protein, Vit D |
| 4 | 14–17 | T2 | Honeymoon phase — iron, calcium, DHA |
| 5 | 18–21 | T2 | Anatomy scan — DHA, zinc |
| 6 | 22–26 | T2 | Viability milestone — choline, magnesium |
| 7 | 27–30 | T3 | Brain growth surge — DHA, choline, iodine |
| 8 | 31–35 | T3 | Rapid weight gain — iron, calcium, fibre |
| 9 | 36–39 | T3 | Preparing for birth — dates, Vitamin K |
| 10 | 40+ | T3 | Due date — light meals, hydration |
| 11 | PP 0–4wk | Postpartum | Recovery & breastfeeding — lactation foods |
| 12 | PP 4–12wk | Postpartum | Fourth trimester — iron repletion, DHA |

Each month includes **separate complete meal plans** for vegetarian and non-vegetarian diets, based on:
- **ACOG** (American College of Obstetricians and Gynecologists)
- **WHO** maternal nutrition guidelines
- **NHS** UK pregnancy nutrition guidance
- **ICMR** (Indian Council of Medical Research) — for Indian dietary patterns (ragi, dal, paneer, etc.)
- **IOM** (Institute of Medicine) weight gain guidelines

---

## 🚫 Food Safety — Evidence Cited

| Category | Key Findings | Source |
|---|---|---|
| High-mercury fish | Swordfish, shark, king mackerel, bigeye tuna, tilefish — avoid entirely | FDA/EPA advisory |
| Unpasteurised dairy | Listeria risk → miscarriage, stillbirth, neonatal meningitis | NHS, ACOG |
| Raw/undercooked protein | Toxoplasma, Salmonella, E. coli — cook to 74°C | FDA Food Code |
| Raw/unripe papaya | Papain causes uterine contractions | Multiple peri-natal studies |
| Dates (6/day, last 4–6 wks) | 3 RCTs show reduced labour induction need | O Nahas et al., Al-Kuran et al. |
| Licorice root | Glycyrrhizin → placental enzyme disruption, offspring cognitive effects | Finnish birth cohort (Räikkönen et al.) |
| Caffeine &gt;200mg/day | Associated with miscarriage, low birth weight | RCOG meta-analysis |
| Alcohol | No safe level — FASD | CDC, WHO |

---

## 🧠 Brain Development Nutrients — Cited Research

- **Choline**: Caudill et al., *FASEB J* 2018 — maternal supplementation improved infant cognitive processing
- **DHA**: Hibbeln et al., *Lancet* 2007 (ALSPAC study) — low seafood/DHA intake linked to lower verbal IQ
- **Iodine**: Bath et al., *Lancet* 2013 — mild deficiency linked to 8–10 point IQ reduction
- **Iron**: Lozoff et al., *NEJM* 1991 — iron-deficiency anaemia causes persistent cognitive deficits

---

## 🌙 Sleep Position Guide

All positions are illustrated with custom SVG diagrams:
- **Left side (SOS)** — best for placental blood flow ★★★
- **Right side** — acceptable alternative ★★
- **Semi-reclined (45°)** — helps heartburn/breathlessness
- **Back sleeping (after week 28)** — illustrated with vena cava compression warning 🚫

---

## 🛠️ Technology Stack

- **HTML5 / CSS3** — custom design system, no framework
- **Vanilla JavaScript** — all logic, localStorage persistence
- **Chart.js** (CDN) — weight tracker
- **Anthropic Claude API** — AI image analysis
- **Inline SVG** — sleep position illustrations (no external images)
- **Google Fonts** — Cormorant Garamond + Outfit

---

## ⚠️ Disclaimer

This application is for educational purposes only and does not constitute medical advice. Always consult a qualified OB/GYN, midwife, or registered dietitian for personalised guidance. In emergencies, call 112/911 immediately.

---
## 👨‍💻 Author
Chethan Kumar

GitHub: @ChethanKumar485

---
## ⭐ Support

If you like this project, give it a ⭐ on GitHub!" 🚀
