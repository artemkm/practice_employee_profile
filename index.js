import React from "react"
import ReactDOM from "react-dom"
import Header from "./components/Header"
import Middle from "./components/Middle"
import Footer from "./components/Footer"

export default function App() {
    return (
        <div className="container">
            <Header />
            <Middle />
            <Footer />
        </div>
    )
}


ReactDOM.render(<App />,document.getElementById("root"))