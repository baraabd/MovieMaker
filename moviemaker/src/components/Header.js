import React from 'react';

function Header(props) {
    return (
        <div className="topnav">
            <a className="logo" href="/">Movie Maker </a>
            <div className=" searchContainer">
                <form>
                    <a href="/">Add Movie</a>
                    <input type="text" placeholder="Search.." name="search"/>
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>

            </div>
        </div>
    );
}

export default Header;