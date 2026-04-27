# 🚀 CodePulse – Full Stack Blog Platform

CodePulse is a full-stack blog management platform built using **Angular** and **ASP.NET Core Web API**. It allows users to create, manage, and view blog posts and categories through a clean and responsive interface.

---

## 📌 Features

### 📝 Blog Management

* Create, update, delete blog posts
* View list of all blog posts
* Rich content handling with structured data

### 🏷️ Category Management

* Add and manage categories
* Assign categories to blog posts
* Organized content structure

### 🔄 Full CRUD Operations

* RESTful APIs built with ASP.NET Core
* Integrated frontend with Angular services

---

## 🏗️ Project Structure

```plaintext
CodePulse/
├── API2/        # ASP.NET Core Web API (Backend)
├── UI2/         # Angular Application (Frontend)
```

---

## ⚙️ Tech Stack

### 🔹 Frontend

* Angular
* TypeScript
* HTML, CSS, Bootstrap

### 🔹 Backend

* ASP.NET Core Web API
* Entity Framework Core
* SQL Server

---

## 🧠 Key Concepts Used

* Clean Architecture (separation of concerns)
* DTO (Data Transfer Objects)
* Repository Pattern
* Dependency Injection
* REST API Design
* Reactive Programming (Angular)

---

## 🚀 Getting Started

### 🔧 Backend Setup (ASP.NET Core)

1. Navigate to backend folder:

```bash
cd API2/CodePulse.API
```

2. Run the API:

```bash
dotnet run
```

3. API will start on:

```
https://localhost:xxxx
```

---

### 💻 Frontend Setup (Angular)

1. Navigate to frontend folder:

```bash
cd UI2/CodePulse
```

2. Install dependencies:

```bash
npm install
```

3. Run Angular app:

```bash
ng serve
```

4. Open in browser:

```
http://localhost:4200
```

---

## 🔗 API Endpoints (Sample)

| Method | Endpoint            | Description        |
| ------ | ------------------- | ------------------ |
| GET    | /api/blogposts      | Get all blog posts |
| POST   | /api/blogposts      | Create blog post   |
| PUT    | /api/blogposts/{id} | Update blog post   |
| DELETE | /api/blogposts/{id} | Delete blog post   |

---

## 📸 Screenshots

*(Add screenshots here after running the project)*

---

## 📈 Future Improvements

* Authentication & Authorization (JWT)
* Rich text editor for blog content
* Image upload support
* Pagination & filtering
* Deployment (Azure / Vercel)

---

## 👨‍💻 Author

**Sesadri Nayak**

* GitHub: https://github.com/sesadri1

---

## ⭐ Acknowledgements

This project was built as part of full-stack development practice to strengthen skills in Angular and ASP.NET Core.

---

## 📬 Feedback

If you have suggestions or feedback, feel free to open an issue or connect with me!

---
