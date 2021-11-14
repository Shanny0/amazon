import React from 'react'
import "./Sidebar_style.scss"

export default function Sidebar() {
    return (
        <div>
            <div className="sidebar_container">

                {/* fare il fetching della lista, utilizzare anche per la select */}
                <ul className="ul_list">
                    <li>Categories</li>
                    <li>Echo & Alexa</li>
                    <li>Kindle</li>
                    <li>Books</li>
                    <li>Electronics</li>
                    <li>Home & Garden</li>
                    <li>Fashion</li>
                    <li>Health</li>
                    <li>Sport</li>
                    <li>Gaming</li>
                    <li>Film & Music</li>
                    <li>Hobby</li>
                    <li>Gift Cards</li>
                    <li>Sell on Amazon</li>
                    <li>Help</li>

                </ul>
                <div className="logout">
                    <h1>Logout</h1>
                </div>


            </div>
        </div>
    )
}
