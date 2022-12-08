import React from "react";
import './ContactUs.css';


function ContactUs(){
    return(
        <div>
            <div className="container">
                <center><h2>Contact Cybersquare</h2></center>
                <form action="/action_page.php">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                    <label htmlFor="country">Country</label>
                    <select id="country" name="country">
                    <option value="india">India</option>
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                    <option value="uae">UAE</option>
                    </select>

                    <label for="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>

                    <input type="button" value="Submit"/>
                </form>
            </div>
        </div>
    );
}

export default ContactUs;






