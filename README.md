Title :-CelebrateMate

Automated Birthday & Anniversary Reminder System

CelebrateMate is a full-stack web application that helps users remember important occasions such as birthdays and anniversaries by sending automated Email and SMS reminders.
It is built using React + Vite for the frontend and Spring Boot for the backend with MySQL as the primary database (MongoDB supported).

Features :-

User registration and authentication

Add, update, and delete birthdays & anniversaries

Automatic reminder system

Email notifications

SMS notifications

RESTful API architecture

Scalable backend design

Database flexibility (MySQL / MongoDB)

Tech Stack used -

Frontend :- 

React.js + Vite

HTML5, CSS3, JavaScript

Axios (API communication)

Backend :-

Java

Spring Boot

Spring Data JPA

Spring Scheduler

Database :-

MySQL (default)

MongoDB etc. (optional / configurable)

Other Tools & Services :-

Email service (SMTP / Email API) :-

SMS Gateway API

🏗 System Architecture :-

User interacts with the React frontend

Frontend communicates with Spring Boot REST APIs

Backend handles business logic and stores data in the database

A scheduled task runs daily to check upcoming events

Email and SMS reminders are triggered automatically


Project Structure (Simplified)

CelebrateMate/
│
├── frontend/        # React + Vite application
│
├── backend/         # Spring Boot application
│   ├── controller/ # REST controllers
│   ├── service/    # Business logic
│   ├── repository/ # Database access
│   ├── model/      # Entity classes
│
└── database/        # MySQL / MongoDB configuration


Installation & Setup
Prerequisites

Java 17+

Node.js 18+

MySQL Server

Maven

Git


Database Support

MySQL is used for relational data storage

Can be switched to MongoDB by updating:


Database dependency

Repository layer

Configuration files

This makes the application scalable and flexible.



Reminder Logic

Spring Scheduler runs a daily job

Checks for events matching the current date

Sends Email and SMS notifications

Ensures reminders are sent only once per event


Future Enhancements

WhatsApp notifications

Mobile application (Android / iOS)

Role-based access control

Cloud deployment (AWS / Azure)

Advanced reminder scheduling (1 day before, 1 week before)



 Author

Chandan Mathur

GitHub: https://github.com/CHANDANMATHUR


 License

This project is for educational and learning purposes.
You are free to use and modify it.
