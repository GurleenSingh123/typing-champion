import "../styles/footer.css"
import "../styles/navbar.css"
import "../styles/terms.css"

import Navbar from "../components/navbar"
import Footer from "../components/footer"

export const metadata = {
  title: "Terms and Conditions | Typing Champion",
  description:"Read the Terms and Conditions of Typing Champion to understand the rules, responsibilities, acceptable use, user accounts, intellectual property, and other terms governing the use of our typing practice website.",
};

function TermsCondition() {

  return (
    <>
    <Navbar/>

    <div className="termsContainer">
      <h1 className="termsHead">Terms and Conditions</h1>

      <p className="termsPara">Welcome to <strong>Typing Champion</strong>. By accessing or using our website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website.</p>

      <h2 className="termsSubHead">1. Acceptance of Terms</h2>

      <p className="termsPara">By using Typing Champion, you confirm that you have read, understood, and to comply with these Terms and Conditions and our Privacy Policy.</p>

      <h2 className="termsSubHead">2. Use of the Website</h2>

      <p className="termsPara">You agree to use the website only for lawful purposes.</p>

      <ul className="termsUlist">
        <li className="termsList">Do not attempt to hack or damage the website.</li>
        <li className="termsList">Do not interfere with website functionality.</li>
        <li className="termsList">Do not use automated tools to abuse the service.</li>
        <li className="termsList">Do not upload harmful or malicious content.</li>
      </ul>

      <h2 className="termsSubHead">3. User Accounts</h2>

      <p className="termsPara">Some features may require you to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>

      <h2 className="termsSubHead">4. Typing Test Results</h2>

      <p className="termsPara">Typing Champion provides typing speed and accuracy results for practice and informational purposes. While we strive for accurate calculations, we do not guarantee that results will be free from errors under all circumstances.</p>

      <h2 className="termsSubHead">5. Intellectual Property</h2>

      <p className="termsPara">All website content, including text, graphics, logos, design, and software, is owned by or licensed to Typing Champion unless otherwise stated. You may not copy, reproduce, distribute, or modify our content without prior written permission.</p>

      <h2 className="termsSubHead">6. User Conduct</h2>

      <p className="termsPara">Users must not:</p>

      <ul className="termsUlist">
        <li className="termsList">Use the website for illegal activities.</li>
        <li className="termsList">Attempt unauthorized access to our systems.</li>
        <li className="termsList">Disrupt other users' experience.</li>
        <li className="termsList">Transmit viruses, malware, or harmful code.</li>
        <li className="termsList">Impersonate another person or organization.</li>
      </ul>

      <h2 className="termsSubHead">7. Third-Party Services</h2>

      <p className="termsPara"> Our website may use third-party services such as analytics, authentication, email services, or advertising providers. Your use of those services may also be subject to their respective terms and privacy policies. </p>

      <h2 className="termsSubHead">8. Advertisements</h2>

      <p className="termsPara"> We may display advertisements from third-party advertising partners. We are not responsible for the content, products, or services offered through third-party advertisements or linked websites. </p>

      <h2 className="termsSubHead">9. Disclaimer</h2>

      <p className="termsPara">Typing Champion is provided on an "as is" and "as available" basis. While we strive to keep the website accurate and available, we make no warranties regarding uninterrupted access, accuracy, reliability, or suitability for any particular purpose. </p>

      <h2 className="termsSubHead">10. Limitation of Liability</h2>

      <p className="termsPara">To the fullest extent permitted by law, Typing Champion shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from your use of the website.</p>

      <h2 className="termsSubHead">11. Termination</h2>

      <p className="termsPara">We reserve the right to suspend or terminate access to the website at any time if these Terms and Conditions are violated or if required to protect the security and integrity of the website.</p>

      <h2 className="termsSubHead">12. Changes to These Terms</h2>

      <p className="termsPara"> We may update these Terms and Conditions from time to time. Any changes will be posted on this page with the revised "Last Updated" date. Continued use of the website after changes become effective constitutes acceptance of the updated terms.</p>

      <h2 className="termsSubHead">13. Governing Law</h2>

      <p className="termsPara"> These Terms and Conditions shall be governed by and interpreted in accordance with the applicable laws of your jurisdiction.</p>

      <h2 className="termsSubHead">14. Contact Us</h2>

      <p className="termsPara"> If you have any questions regarding these Terms and Conditions, please contact us through our Contact page.</p>

    </div>

    <Footer/>
    </>
  )
}

export default TermsCondition