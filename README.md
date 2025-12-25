# SaveMom UI Project

React.js project implementing the Figma design for **SaveMom Virtual Maternal Healthcare**.

---

## Project Description
- Fully responsive UI
- Dynamic components with reusable structure
- Designed according to Figma design
- Optional: data can be fetched from backend API

---

## How to Run Locally

### 1️. Clone the Repository
Open your terminal and run:

```bash
git clone https://github.com/9042266920/Savemom.git
````

This will download the project to your local machine.

---

### 2️. Navigate to the Project Folder

```bash
cd Savemom
```

---

### 3️. Install Frontend Dependencies

```bash
npm install
```

This will install:

* React
* Vite
* Other required frontend libraries

---

### 4. Run the Frontend Application

```bash
npm run dev
```

The frontend will start on:

```
http://localhost:5173
```

Open this URL in your browser.

---


### 5. Navigate to Backend Folder

```bash
cd savemom-backend
```

### 6. Install Backend Dependencies

```bash
npm install
```

This installs backend packages such as:

* Express / Node.js
* Database libraries (if used)
* API utilities

### 7. Run the Backend Server

```bash
npm start
```

*or (if using nodemon):*

```bash
npm run dev
```

The backend server will typically run on:

```
http://localhost:5000
```

(or whichever port is configured)

---

## 🔗 Running Frontend & Backend Together

You need **two terminals**:

**Terminal 1 (Frontend)**

```bash
cd Savemom
npm run dev
```

**Terminal 2 (Backend)**

```bash
cd Savemom/savemom-backend
npm start
```

Now you can access:

* Frontend → [http://localhost:5173](http://localhost:5173)
* Backend → [http://localhost:5000](http://localhost:5000)


