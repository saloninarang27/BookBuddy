# Book Buddy

Book Buddy is a full-stack web application designed to manage a library system, facilitating book lending, student management, and administrative tasks. It provides a comprehensive platform for both administrators and students to interact with the library's resources efficiently.

## Features

**Administrator Features:**
*   Add, update, and delete books.
*   Manage student registrations and profiles.
*   Handle book issuance and returns.
*   Monitor pending requests and records.
*   Manage library seating (if `Seat` module implies this).
*   View feedback (if `Feedback.js` implies this).

**Student Features:**
*   View available books.
*   Request books for issuance.
*   View personal book issuance history.
*   Check pending requests.
*   Manage profile.
*   Request/book seats (if `Seat` module implies this).

## Technologies Used

### Backend
*   **Java:** Programming Language
*   **Spring Boot:** Framework for building robust RESTful APIs.
*   **Maven:** Dependency management and build automation tool.
*   **Spring Data JPA:** For database interaction and object-relational mapping.
*   **Database:** (Implicitly, needs to be configured in `application.properties`, likely H2, MySQL, or PostgreSQL)

### Frontend
*   **React.js:** JavaScript library for building user interfaces.
*   **Node.js & npm:** JavaScript runtime and package manager for frontend dependencies.
*   **HTML/CSS:** For structuring and styling the web pages.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   Java Development Kit (JDK) 8 or higher
*   Maven 3.x
*   Node.js and npm (or Yarn)
*   A preferred IDE (e.g., IntelliJ IDEA, VS Code)

### Setup Instructions

#### 1. Clone the repository

```bash
git clone https://github.com/saloninarang27/BookBuddy.git
cd BookBuddy/Book_Buddy
```

#### 2. Backend Setup

Navigate to the `Book_Buddy` directory (where `pom.xml` is located) and build the Spring Boot application:

```bash
cd C:\Springboot\Book_Buddy\Book_Buddy
mvn clean install
```

Configure your database connection in `src/main/resources/application.properties`.

To run the backend application:

```bash
mvn spring-boot:run
```
The backend API will typically run on `http://localhost:8080` (or as configured in `application.properties`).

#### 3. Frontend Setup

Navigate to the `frontend` directory:

```bash
cd C:\Springboot\Book_Buddy\Book_Buddy\frontend
```

Install the necessary npm packages:

```bash
npm install
```

To start the React development server:

```bash
npm start
```
The frontend application will typically run on `http://localhost:3000`.

## Usage

Once both the backend and frontend servers are running:
1.  Open your web browser and navigate to `http://localhost:3000`.
2.  Use the administrator or student login pages to access the respective functionalities.

## Project Structure

*   `Book_Buddy/`: Main project directory.
    *   `frontend/`: Contains the React.js client-side application.
        *   `public/`: Static assets.
        *   `src/`: React components, styles, and assets.
            *   `Admin/`: Components related to administrative tasks.
            *   `Pages/`: Core application pages (e.g., Home, Login).
            *   `Student/`: Components related to student functionalities.
    *   `src/main/java/com/example/Book_Buddy/`: Spring Boot backend source code.
        *   `Controller/`: REST API endpoints.
        *   `Module/`: Data models/entities.
        *   `Repository/`: Spring Data JPA repositories for database access.
    *   `src/main/resources/`: Spring Boot configuration and static resources.
    *   `pom.xml`: Maven project configuration for the backend.
    *   `application.properties`: Backend application settings.


