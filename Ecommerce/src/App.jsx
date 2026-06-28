import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <header className="header">
        <h1>Ecommerce Store</h1>
      </header>
      <main>
        <section className="hero">
          <h2>Welcome to Our Store</h2>
          <p>Browse and shop our amazing products</p>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Ecommerce Store. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App