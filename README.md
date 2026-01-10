# 🎟️ Microservice Ticketing Platform

A scalable **microservices-based ticket marketplace** that allows users to **sell and purchase tickets securely**.  
Built with **Node.js, TypeScript, Next.js, Docker, Kubernetes and an event-driven architecture**, following real-world production practices.

---

## 📌 Project Overview

This project is a **distributed ticketing platform** where any authenticated user can act as both a **seller** and a **buyer**.

Key features:

- Users can create, sell, and purchase tickets
- Tickets are **locked for 15 minutes** during purchase attempts
- Only one user can reserve a ticket at a time
- Automatic order cancellation if payment fails or time expires
- Fully event-driven communication between services
- Optimistic concurrency control for safe updates
- Secure payment handling workflow
- Server-side rendering with Next.js
- Shared code and types across services

The system is designed to be **scalable, fault-tolerant, and cloud-ready** using Kubernetes.

---

## 🧠 Business Rules

- Any user can sell or purchase tickets
- Ticket price **can be edited only if the ticket is not locked**
- When a user starts purchasing a ticket:
  - The ticket is locked for **15 minutes**
  - No other user can purchase or modify it
- The buyer must complete payment within 15 minutes
- If payment succeeds → order is completed
- If payment fails or time expires → order is cancelled and the ticket is unlocked

---

## 🧱 Microservices Architecture

The platform is composed of the following independent services:

### 🔐 Auth Service

Handles everything related to users:

- User signup
- User signin
- User signout
- (Shared JWT Secret) authentication & authorization
- Allow multiple services to trust the same JWT.

Token Strategy

- Access Token (short-lived, used for APIs)

- Refresh Token (long-lived, used only to get new access tokens)

| Token         | Lifetime  | Stored In        | Usage              |
| ------------- | --------- | ---------------- | ------------------ |
| Access Token  | 15 min    | HTTP-only cookie | API auth           |
| Refresh Token | 7–30 days | HTTP-only cookie | Renew access token |

Auth Flow Summary:

- Signup → Hash Password → Generate JWT → Store in Cookie
- Signin → Validate Password → Generate JWT → Store in Cookie
- Protected Route → Verify JWT → Allow Access
- Signout → Clear Cookie

---

### 🎫 Ticket Service

Manages ticket lifecycle:

- Create tickets
- Edit ticket details (title, price)
- Prevent updates when tickets are reserved
- Publish ticket creation and update events

---

### 🛒 Orders Service

Manages ticket reservations:

- Create orders
- Track order states (Created, Cancelled, Completed)
- Ensure a ticket is reserved by only one user
- Emit order-related events

---

### ⏱️ Expiration Service

Handles order timeouts:

- Listens for newly created orders
- Starts a **15-minute expiration timer**
- Automatically cancels expired orders
- Publishes expiration events

---

### 💳 Payments Service

Handles payment processing:

- Process credit card payments
- Complete orders on successful payment
- Cancel orders on payment failure
- Emit payment and completion events

### Client Service



---

## 🛠️ Tech Stack

### Backend

- Node.js
- Express
- TypeScript

### FrontEnd

- Next.js (Server-Side Rendering)

### Infrastructure & DevOps

- Docker
- Kubernetes (K8s)
- CI/CD pipeline for automated testing and deployment
- Event Bus: NATS Streaming Server
- Dev Workflow: Skaffold
- NGINX Ingress Controller

### Communication & Security

- NATS (Event Bus)
- JWT Authentication

---

## 🧩 Architecture Highlights

- Event-driven microservices using **NATS**
- Loose coupling between services
- Automatic order expiration handling
- Secure authentication using JWT
- Kubernetes-based deployment
- Production-ready development workflow
- Consistent Error Structure

## 👨‍💻 Author

**Ahmed Heikal**  
Backend Engineer


project in progress...