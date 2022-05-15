import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <>
            <div className="container">
                <div style={{textAlign:"center"}}>
                    <h2>Contact Us</h2>
                    <p>Swing by for a cup of coffee, or leave us a message:</p>
                </div>
                <div className="row">
                    <div className="column">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sqm.com%2Fwp-content%2Fuploads%2F2018%2F04%2Fshutterstock_711824767-1024x534.jpg&f=1&nofb=1" alt='img' style={{width:"100%"}} />
                    </div>
                    <div className="column">
                    <form action="/action_page.php" >
                        <label for="fname">First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                        <label for="lname">Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                        <label for="country">Country</label>
                        <select id="country" name="country">
                            <option value="australia">Australia</option>
                            <option value="canada">Canada</option>
                            <option value="usa">USA</option>
                        </select>
                        <label for="subject">Subject</label>
                        <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"170px"}}></textarea>
                         <input type="submit" value="Submit" />
                    </form>
                </div>
                </div>
            </div>
        </>
    )   
}

export default Contact