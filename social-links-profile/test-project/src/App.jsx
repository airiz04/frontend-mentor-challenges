import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <main>
      <img src="./assets/images/avatar-jessica.jpeg" />
      <h1>Jessica Randall</h1>
      <p className="location">London, United Kingdom</p>
      <p className="description">"Front-end developer and avid reader."</p>
      <section className="links">
        <p className="link-tab">GitHub</p>
        <p className="link-tab">Frontend Mentor</p>
        <p className="link-tab">LinkedIn</p>
        <p className="link-tab">Twitter</p>
        <p className="link-tab">Instagram</p>
      </section>
    </main>
  )
}

export default App
