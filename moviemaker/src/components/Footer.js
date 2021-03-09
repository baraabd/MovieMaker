import React from 'react';

function Footer(props) {
    return (
        <div className= "footer">
            <p>Copyright &Copy; Movie Maker {new Date().getFullYear()} </p>
        </div>
    );
}

export default Footer;