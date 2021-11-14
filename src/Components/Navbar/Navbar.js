import React from 'react'
import "./Navbar_style.scss"

export default function Navbar() {
    return (
        <div>
            <div className="nav_container">
                <div className="logo">
                    <img src="\media\vippng.com-amazon-png-3550734.png" alt="" />
                </div>


                <div className="search_area">
                    <form action="">
                        <input type="text" name="" id="" className="input_field" />
                        <select className="select">
                            <option value="volvo">Category</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                        </select>
                      

                        <button className="btn_submit">
                            Click me
                        </button>

                    </form>

                </div>

                <div className="icons">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                    <div className="user">
                       
                     </div>
                </div>

                

            </div>


        </div>
    )
}
