import "../styles/footer.css"
import "../styles/navbar.css"
import "../styles/privacy.css"

import Navbar from "../components/navbar"
import Footer from "../components/footer"

export const metadata = {
  title: "Privacy Policy | Typing Champion",
  description: "Read Typing Champion's Privacy Policy to understand how we collect, use, store, and protect your personal information, typing test results, cookies, and website usage data.",
};

function PrivacyPolicy() {

  return (
    <>
    
    <Navbar/>

    <div className="privacyContainer">
      <h1 className="privacyHead">Privacy Policy</h1>

      <p className="privacyPara">Welcome to <strong>Typing Champion.</strong> Your privacy is important to us. This Privacy Policy explains what information we collect, how we use it, and the choices you have regarding your personal information.</p>

      <h2 className="privacySubHead">1. Information We Collect</h2>

      <h3 className="privacyShortHead">Personal Information</h3>
      <p className="privacyPara">When you create an account or contact us, we may collect information such as:</p>

      <ul className="privacyUlist">
        <li className="privacyList">Name</li>
        <li className="privacyList">Email Address</li>
        <li className="privacyList">Messages submitted through the Contact Form</li>
      </ul>

      <h3 className="privacyShortHead">Typing Test Information</h3>
      <p className="privacyPara">When you use our typing tests, we may store:</p>

      <ul className="privacyUlist">
        <li className="privacyList">Typing speed (Words Per Minute)</li>
        <li className="privacyList">Typing accuracy</li>
        <li className="privacyList">Test duration</li>
        <li className="privacyList">Typing history (if you are logged in)</li>
      </ul>

      <h3 className="privacyShortHead">Automatically Collected Information</h3>
      <p className="privacyPara">We may automatically collect information such as:</p>

      <ul className="privacyUlist">
        <li className="privacyList">IP Address</li>
        <li className="privacyList">Browser Type</li>
        <li className="privacyList">Device Information</li>
        <li className="privacyList">Operating System</li>
        <li className="privacyList">Pages Visited</li>
        <li className="privacyList">Time Spent on the Website</li>
      </ul>

      <h2 className="privacySubHead">2. Cookies</h2>
      <p className="privacyPara">We may use cookies and similar technologies to improve your browsing experience, remember your preferences, and analyze website traffic. You can disable cookies through your browser settings.</p>

      <h2 className="privacySubHead">3. How We Use Your Information</h2>

      <p className="privacyPara">We use your information to:</p>

      <ul className="privacyUlist">
        <li className="privacyList">Provide typing practice and typing tests.</li>
        <li className="privacyList">Maintain your account.</li>
        <li className="privacyList">Display your typing results.</li>
        <li className="privacyList">Improve website performance.</li>
        <li className="privacyList">Respond to your inquiries.</li>
        <li className="privacyList">Prevent fraud and misuse.</li>
      </ul>

      <h2 className="privacySubHead">4. Google Analytics</h2>

      <p className="privacyPara">We may use Google Analytics to understand how visitors interact with our website. Google Analytics may collect anonymous usage information such as visited pages, session duration, and device information.</p>

      <h2 className="privacySubHead">5. Advertising</h2>

      <p className="privacyPara">We may display advertisements through third-party advertising partners.These partners may use cookies or similar technologies to show relevant advertisements based on your interests.</p>

      <h2 className="privacySubHead">6. Third-Party Services</h2>

      <p className="privacyPara">We may use trusted third-party services including:</p>

      <ul className="privacyUlist">
        <li className="privacyList">EmailJS (Contact Form)</li>
        <li className="privacyList">Google Analytics</li>
        <li className="privacyList">Advertising Networks</li>
      </ul>

      <p className="privacyPara">These services have their own privacy policies governing the handling of your information.</p>

      <h2 className="privacySubHead">7. Data Security</h2>

      <p className="privacyPara">We take reasonable measures to protect your information from unauthorized access, loss, or misuse. However, no internet transmission is completely secure.</p>

      <h2 className="privacySubHead">8. Children's Privacy</h2>

      <p className="privacyPara">Our website is intended for users of all ages. We do not knowingly collect personal information from children without appropriate consent where required by law.</p>

      <h2 className="privacySubHead">9. Your Rights</h2>

      <p className="privacyPara">You may have the right to:</p>

      <ul className="privacyUlist">
        <li className="privacyList">Access your personal information.</li>
        <li className="privacyList">Request correction of inaccurate information.</li>
        <li className="privacyList">Request deletion of your personal information.</li>
        <li className="privacyList">Contact us with privacy-related questions.</li>
      </ul>

      <h2 className="privacySubHead">10. Changes to This Privacy Policy</h2>

      <p className="privacyPara">We may update this Privacy Policy from time to time. Any changes will be posted on this page along with the updated revision date.</p>

      <h2 className="privacySubHead">11. Contact Us</h2>

      <p className="privacyPara">If you have any questions regarding this Privacy Policy, please contact us through our Contact page.</p>

      <h2 className="privacySubHead">12. Consent</h2>

      <p className="privacyPara">By using Typing Champion, you agree to the collection and use of information in accordance with this Privacy Policy.</p>
    </div>

    <Footer/>
    </>
  );
}

export default PrivacyPolicy