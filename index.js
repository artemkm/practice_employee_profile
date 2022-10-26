import React from "react"
import ReactDOM from "react-dom"


export default function App() {
    return (
        <div className="container">
            <nav><img src="/images/photo.png" /></nav>
            <main>
                <h1 className="person-name">Laura Smith</h1>
                <div className="position">Frontend Developer</div>
                <div className="place">laurasmith.website</div>
            </main>
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
            <footer>
                <img src="/images/twitter_pic.png" />
                <img src="/images/facebook_pic.png" />
                <img src="/images/insta_pic.png" />
                <img src="/images/github_pic.png" />
            </footer>
        </div>
    )
}


ReactDOM.render(<App />,document.getElementById("root"))