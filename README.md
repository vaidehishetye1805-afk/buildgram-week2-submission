# BuildGram Frontend

## Project Overview

BuildGram Frontend is a simplified Instagram-style application built using React, TypeScript, and Vite.

The application demonstrates core React concepts including:

* Component-based architecture
* Props
* State management using useState
* React Router navigation
* Dynamic rendering using map()
* Mock data integration
* User profiles
* Like, Save, and Comment functionality

---

## Features

### Feed Page

* Displays a list of posts
* Shows user information, images, captions, likes, and comments

### Like Functionality

* Toggle like/unlike on a post
* Updates likes count dynamically

### Save Functionality

* Save and unsave posts

### Comment Functionality

* Add new comments to posts
* Comments appear instantly without page refresh

### Profile Page

* Navigate to user profiles
* Display user information and posts

---

## Tech Stack

* React
* TypeScript
* Vite
* React Router

---

## Project Structure

src/

├── components/

│ ├── Feed.tsx

│ ├── Navbar.tsx

│ ├── Post.tsx

│ ├── PostActions.tsx

│ ├── PostComments.tsx

│ ├── PostHeader.tsx

│ └── PostImage.tsx

├── pages/

│ └── ProfilePage.tsx

├── mockData.ts

├── types.ts

├── App.tsx

└── main.tsx

---

## Installation

### Prerequisites

* Node.js
* npm

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

The application will run at:

```text
http://localhost:5173
```

---

## Routing

| Route              | Description       |
| ------------------ | ----------------- |
| /                  | Home Feed         |
| /profile/:username | User Profile Page |

---

## Concepts Demonstrated

* React Components
* Props
* State (useState)
* React Router
* useParams
* Dynamic Rendering with map()
* TypeScript Interfaces
* Event Handling
* Conditional Rendering

---

## Author

Vaidehi Shetye
