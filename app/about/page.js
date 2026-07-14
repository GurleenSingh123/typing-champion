import "../styles/footer.css"
import "../styles/navbar.css"
import "../styles/about.css"


import Navbar from "../components/navbar"
import Footer from "../components/footer"

function about(){

    return(
        <>  

        <Navbar />
        <div id="aboutSection">
            <h2 className='head'>About Us</h2>
            <p className='para'>Welcome to TypingStart, your trusted platform for improving typing speed, accuracy, and confidence.

            We believe that typing is one of the most valuable skills in today's digital world. Whether you're a student completing assignments, a job seeker preparing for typing tests, a programmer writing code, an office professional handling documents, or simply someone who wants to type faster, our goal is to help you become a better typist through simple and effective practice.</p>

            <h2 className="head">Our Mission</h2>
            <p className="para">Our mission is to make typing practice free, accessible, and enjoyable for everyone. We aim to provide a distraction-free learning environment where users can practice regularly, monitor their progress, and build confidence with every session.</p>

            <h2 className="head">Who Can Use TypingStart?</h2>

            <p className="para">TypingStart is designed for everyone, including:</p>

            <ul className="para">
                <li>Students</li>
                <li>Teachers</li>
                <li>Data entry operators</li>
                <li>Programmers and developers</li>
                <li>Anyone who wants to improve keyboard skills</li>
            </ul>

            <p className="para">No matter your current typing speed, regular practice can help you improve over time.</p>

            <h2 className="head">Our Vision</h2>
            <p className="para">Our vision is to become one of the most trusted online typing practice platforms by providing useful tools, reliable performance, and an excellent user experience. We continuously work to improve our website by adding new practice modes, better performance tracking, and more learning resources.</p>

            <h2 className="head">Get in Touch</h2>
            <p className="para">We value your feedback and suggestions. If you have questions, ideas, or encounter any issues while using our website, we'd love to hear from you. Your feedback helps us improve and build a better typing experience for everyone.

            Thank you for choosing TypingStart. We hope our platform helps you type faster, improve your accuracy, and achieve your personal and professional goals.</p>
        </div>

        <Footer />
        </>
    )

}

export default about