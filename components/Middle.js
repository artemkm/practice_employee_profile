import React from "react"
import ReactDOM from "react-dom"

export default function Header() {
    return (
        <div>
            <div className="pic-section">
                <button className="email-btn"><img src="/images/email_icon.png" className="icon" /> Email</button>
                <button className="linkedin-btn"><img src="/images/linkedin.png" className="icon" /> LinkedIn</button>
            </div>
            <div className="person-description">
                <h2>About</h2>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h2>Interests</h2>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </div>
          )
}