# 🇨🇾 Island EDU App

Bridging the gap between educators and families in the Cyprus community.
---
Cyprus School Finder is a full-stack application built to solve a real-world problem I identified during my career in education: the difficulty of finding centralized, accessible school data. 
This project demonstrates a professional transition from classroom leadership to software engineering, focusing on clean code, maintainable architecture, and user-centric design.


## ✨ Mission

As a former educator in Cyprus, I saw firsthand how fragmented information impacts parental decisions and school accessibility. This tool provides a centralized directory where users can search, filter, and view school data through a modern, responsive interface.


## 🚀 Key Features

- Concept Hero: A landing page explaining the mission and the "Why" behind the tool.
- School Directory: Real-time data fetching from a custom Express API.
- Atomic UI Library: A custom set of reusable components designed for consistency.
- Full CRUD Potential: A backend structure ready for Create, Read, Update, and Delete operations.
- Error Handling: Custom 404 "Class Disrupted" pages and API error boundaries.

## 🧱 Tech Stack

## Frontend
- React.js (v19) – Functional components and modern hooks.
- React Router v7 – Utilizing Data Loaders for efficient, "render-as-you-fetch" data management.
- Tailwind CSS – Responsive design with a focus on cross-browser compatibility.
## Backend
- Node.js & Express.js – A RESTful API designed to serve structured school data.
- JSON Integration – Handling web data formats.

## 📌 RESTFul Routes
- Action	HTTP Verb	Route	Description
- Index	GET	/api/schools	Retrieve all schools in Cyprus
- Show	GET	/api/schools/:id	Get detailed info for a specific school
- Create	POST	/api/schools	Add a new school to the directory
- Update	PUT	/api/schools/:id	Edit existing school information
- Delete	DELETE	/api/schools/:id	Remove a school from the directory

## 🚀 Future Improvements
Interactive Map view using Google Maps API for Cyprus districts.
Multi-language support (Greek & English) to better serve the local community.

## 📁 Project Structure

```txt
cyprus-school-finder/
├── client/               
│   ├── src/
│   │   ├── components/    
│   │   │   ├── atoms/     
│   │   │   ├── molecules/ 
│   │   │   ├── organisms/
│   │   │   └── templates/
│   │   ├── pages/
│   │   ├── App.jsx        
│   │   └── main.jsx       
│   └── package.json
├── server/                
│   ├── models/              
│   ├── seeds/           
│   ├── server.js          
│   └── package.json
└── README.md              
```
