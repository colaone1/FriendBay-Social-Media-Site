# FriendBay Social Media Site

FriendBay is a modern, accessible social media platform built with Next.js and React. It allows users to create posts, react to others' posts, and search for content, all with a clean, responsive UI and persistent state using localStorage and MongoDB (optional).

## Project Scope & Functionality
- **Create, edit, and delete posts**
- **React to posts** with like, love, and laugh reactions
- **Search** posts by username or content
- **User profiles** with avatars
- **Responsive, accessible UI** using Tailwind CSS
- **Persistent state** using localStorage (and MongoDB for backend)
- **Unit tested** with React Testing Library and Jest

## Technologies Used
- Next.js (React framework)
- React
- Tailwind CSS
- MongoDB (optional, for backend persistence)
- Jest & React Testing Library (for unit testing)

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/friendbay-social-media-site.git
   cd friendbay-social-media-site
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Running the App
- **Frontend (Next.js):**
  ```sh
  npm run dev
  ```
  Visit [http://localhost:3000](http://localhost:3000) in your browser.

- **Backend (Express/MongoDB, optional):**
  ```sh
  npm run server
  ```
  Visit [http://localhost:5000](http://localhost:5000) for the API.

### Running Tests
```sh
npm test
```

## Project Structure
```
friendbay-social-media-site/
├── src/
│   ├── components/   # Reusable React components
│   ├── pages/        # Next.js pages
│   ├── styles/       # Tailwind CSS and global styles
│   └── ...
├── public/           # Static assets
├── server.js         # Express backend (optional)
├── package.json      # Project metadata and scripts
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── README.md
```

## Accessibility & UX
- Semantic HTML and ARIA roles
- Keyboard navigation and skip links
- Responsive design for all devices
- High-contrast, visually appealing UI

## Deployment
- The app can be deployed to Vercel, Netlify, or GitHub Pages (static export)
- Ensure environment variables are set for MongoDB if using backend

## License
This project is licensed under the ISC License.

## Author
Sam Connor (colaone1)

---

**For more information or to contribute, please open an issue or pull request on GitHub.** 