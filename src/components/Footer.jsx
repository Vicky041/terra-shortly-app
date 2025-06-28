import Boost from './Boost'

function Footer() {
  return (
    <footer>
    <Boost />
    <div className='footer-container'>
        <div className='img-container'>
            <img src="/assets/logo.svg" alt="Logo" className='footer-logo' />
        </div>
        <div class="middle-links">
            <ul class="features">
               <li>Features</li>
               <li>Link Shortening</li>
               <li>Branded Links</li> 
               <li>Analytics</li> 
            </ul>
            <ul className="resources">
                <li>Resources</li>
                <li>Blog</li>
                <li>Developers</li>
                <li>Support</li>
            </ul>
            <ul className="company">
                <li>About</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className='icons'>
            <img src="src/assets/images/icon-facebook.svg" alt=""/>
            <img src="src/assets/images/icon-twitter.svg" alt=""/>
            <img src="src/assets/images/icon-pinterest.svg" alt=""/>
            <img src="src/assets/images/icon-instagram.svg" alt=""/>
        </div>
    
    </div>
    </footer>
  )
}

export default Footer