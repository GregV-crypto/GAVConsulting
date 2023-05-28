import "./App.css";
import HomePage from "./components/HomePage";
import ContactForm from "./components/ContactForm";
import * as React from "react";

function App() {
  return (
    <div className="content-container">
      <HomePage />
      <ContactForm />
    </div>
  );
}

export default App;
