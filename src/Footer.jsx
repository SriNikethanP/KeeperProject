import React from "react";

function Footer() {
    let nowYear = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright ⓒ {nowYear}</p>
        </footer>
    )
}

export default Footer;