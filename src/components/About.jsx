import { useState } from "react";

export default function About() {

    return (
        <>

            <section className="about" id="about">

                <div className="about-content ">

                    <div className="main">
                        <h2>ABOUT US</h2>
                    </div>

                    <div className="about-txt-content row">

                        <div className="about-txt col-md-6">

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <ul>
                                <li><i className='bx bx-check-double' ></i>Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                                <li><i className='bx bx-check-double' ></i>Duis aute irure dolor in reprehenderit in voluptate velit</li>
                                <li><i className='bx bx-check-double' ></i>Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                            </ul>

                        </div>

                        <div className="about-btn col-md-6">
                            <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <a href="">Learn More</a>
                        </div>

                    </div>

                </div>

            </section>

        </>
    )

}