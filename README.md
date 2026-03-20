Delivery Guard - Parametric Insurance for Delivery Workers
Guidewire DEVTrails 2026 - Phase 1 Submission (March 20, 2026)
Team Details
•	Team Name: CyberForge
•	Team Members: Prachurya Nanda, Jyotiraditya Pati, Nisigandha Mallick, Ayushman Mishra, Sukruti Nag.
•	Project Focus: Helping delivery partners (Swiggy, Zomato, Dunzo) get instant money when stuck in bad weather.
1. Requirement & Persona-Based Scenarios + Workflow
Our app gives automatic insurance money to delivery workers when they are trapped in heavy rain, flood or extreme weather. No paperwork, no waiting, money comes in 2 minutes.
Real Personas we studied:
•	Rahul (25 years) – Bike rider in Mumbai. Earns ₹800 per day. One heavy rain day = zero earnings + danger on road. Lives in small room, supports family.
•	Priya (32 years) – Woman delivery partner in Bangalore. Worries about safety in floods. Needs quick money so she can go home safely.
•	Amit (40 years) – Family man in Delhi. Has kids. If stuck in red-alert weather, he loses whole day income.
Simple Workflow (step by step):
1.	Delivery partner opens the mobile app and registers with phone number + Aadhaar (takes 1 minute).
2.	App runs in background and checks live location + weather every 5 minutes.
3.	If weather is red-alert in his area AND he is inside the zone AND movement stopped → automatic payout of ₹200–₹500 straight to wallet.
4.	Worker gets SMS + money. No forms needed.
This solves the big pain: delivery workers lose money every time it rains.
2. Weekly Premium Model + Parametric Triggers + Platform Choice
•	Weekly Premium: Only ₹49 per week (auto deducted from their delivery wallet). Very cheap so everyone can join.
•	Parametric Triggers (what makes payout happen automatically):
o	Location inside red-alert weather zone (using live GPS)
o	Weather data from 3 sources (IMD + OpenWeather + local API)
o	Partner movement stopped for more than 10 minutes
o	All three must match → instant payout
Why we chose Mobile App (not Web): Delivery partners are always on bike/scooter in traffic. Mobile app works offline, uses phone sensors (GPS, accelerometer), and is fast. We are using React Native so same code works on Android and iOS. Web would be slow and useless on the road.
3. AI/ML Integration (Premium Calculation, Fraud Detection and more)
We use simple AI to make the app fair and safe.
•	Dynamic Premium Calculation: AI looks at past data and reduces premium by ₹10 per week if the partner works only in safe zones (less risk = lower price).
•	Fraud Detection: Full details in the new section below.
Adversarial Defense & Anti-Spoofing Strategy
Our platform uses smart AI/ML to stop cheaters who fake GPS location. Simple GPS is now dead, so we added multi-layer protection.
1. The Differentiation: How our AI tells real stranded worker from bad actor spoofing We use “multi-sensor fusion” i.e. AI checks many phone things together, not just GPS.
•	Real worker stuck in rain: phone moves at 20-40 km/h earlier, road vibration (accelerometer), using mobile data, light sensor shows dark/wet, battery drains normally.
•	Cheater at home: phone completely still (no vibration), sudden location jump without travel history, using home WiFi, battery drains faster because of spoofing apps.
AI gives every claim a Trust Score (0-100). Score below 60 = flagged as suspicious. This clearly separates genuine workers from fakers.
2. The Data: What extra data points (beyond GPS) we analyze to catch coordinated fraud ring We check 8 things to catch 500-person Telegram groups:
•	Phone sensors: accelerometer, gyroscope, light sensor, battery level & temperature
•	Network data: IP address, WiFi vs mobile data, signal strength
•	Group behaviour: 50+ people claiming at same time from same tiny area but phones show no real movement
•	Weather cross-check: compare with 3 real weather APIs
•	Device fingerprint: phone model + OS version (must match past weeks)
•	Time & location history: sudden “teleport” impossible 
•	App usage pattern: sudden spike in claims
•	Historical behavior: honest workers have normal pattern, cheaters show sudden changes
Our ML model (trained on real + fake examples) detects the whole ring in seconds.
3. The UX Balance: How we handle flagged claims without punishing honest workers We never block honest delivery partners (especially if network drops in rain).
•	If flagged: App shows friendly message – “Looks like network issue in heavy rain? Quick 5-second photo of the road or 3-second voice note to release money fast.”
•	Honest worker: Takes photo/voice → money in 2 minutes. No penalty.
•	Cheater: After 2 flags, account goes to manual review.
•	Even on flagged claims we give small ₹50 “good faith” micro-payout so real workers never feel cheated.
This keeps honest gig workers happy and stops big fraud rings fast.
4. Tech Stack & Development Plan
Tech Stack:
•	Frontend: React Native (mobile app)
•	Backend: Firebase (fast and free)
•	AI/ML: TensorFlow Lite (runs on phone) + simple cloud model
•	Weather APIs: IMD + OpenWeather
•	Database: Firebase Firestore
•	Version control: GitHub
Development Plan (what we did till now):
•	Week 1-2: Research personas, made Figma screens, planned workflow (already done)
•	Today (20 March): Added full Anti-Spoofing section because of Market Crash
•	Next 2 days (start of Phase 2): Build registration, premium calculation and basic claims flow

GitHub Repo Link: https://github.com/Prince-333-hub/DeliveryGuard
Anything else relevant: We focus on zero-touch claims so delivery partners never lose even one day’s income. The app is simple, fair and fraud-proof. Ready for Phase 2 tomorrow.
