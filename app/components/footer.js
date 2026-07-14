import "../styles/footer.css"

function Footer(){

    return(
        <>
        <div id="footer">

            <div className="footerSubHead">
                <a className="footerHead" href="/">Home</a>
                <a className="footerHead" href='/about'>About Us</a>
                <a className="footerHead" href="/contact">Contact Us</a>
            </div>

            <div className="footerSubHead">
                <a className="footerHead">Privacy Policy</a>
                <a className="footerHead">Terms and Conditions</a>
            </div>

        </div>
        </>
    )

}

export default Footer