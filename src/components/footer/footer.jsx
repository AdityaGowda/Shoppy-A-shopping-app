import React from 'react';
import '../../App.css';



function Footer(){
    return(
        <footer className="ending">
          <div className="e1">
             <h3>Extra Links</h3>
             <li>Account Info</li>
             <li>privacy Policy</li>
             <li>Payment Method</li>
             <li>Our Services</li>
             </div>
             <div className="e1">
                <h3>Quick Links</h3>
                <li>Home</li>
                <li>blog</li>
                <li>Contact</li>
                <li>About</li>
                </div>
  
                   <div className="e1">
                      <h3>Resource</h3>
                      <li>Guide</li>
                      <li>Research</li>
                      <li>Expert</li>
                      <li>Marketing Service</li>
                      </div>
  
                      <div className="e1"> 
                         <h3>Contact Info</h3>
                         <li> +123-456-7890 </li>
                         <li>+111-222-3333 </li>
                         <li>adhimakkimane@gmail.com </li>
       
                     </div>
                      <div className="e1">
                         <h3>News Letter</h3>
                         <p>You can trust us .We only send promo offers</p>
                         <div class="emailid">
                            <input type="text" placeholder="your email id"/>
                            <a href="#" class="click">Subscribe</a>
                            </div>
                         </div>
  </footer> 
  

)
}

export default Footer;