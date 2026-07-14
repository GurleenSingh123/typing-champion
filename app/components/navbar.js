function Navbar(){

    return(
        <>
        <div>
            <nav id="navBar">
                <a className="siteName">Typing Website</a>

                <div>
                    <a className="navSubHead" href="/">Home</a>
                    <a className="navSubHead" href="/about">About Us</a>
                    <a className="navSubHead" href="/contact">Contact Us</a>
                </div>
                
            </nav>
        </div>
        </>
    )
}

export default Navbar