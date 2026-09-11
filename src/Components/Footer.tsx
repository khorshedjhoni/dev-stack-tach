
import footerImg from '../assets/logo-text.png'

function Footer() {
    return (
        <div>
            <footer className="footer mt-10 sm:footer-horizontal  text-base-content p-10">
  <aside>
        <img src={footerImg} alt="" width="100" height="150" className="fill-current"/>
    <p>Curated tools, technologies, and resources for developers building <br />
         modern software.</p>
         
         <div className='flex justify-around gap-2 items-start font-semibold mt-10'>
            <a href="">Github</a>
            <a href="">Twitter</a>
            <a href="">Linkedin</a>
         </div>
  </aside>
  <nav>
    <h6 className="footer-title">Product</h6>
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Technology</a>
    <a className="link link-hover">Project</a>
    
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Career</a>
    
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of service</a>
    <a className="link link-hover">Privacy policy</a>
   
  </nav>
        
</footer>
<div className='flex justify-between gap-4 px-10 text-gray-500'>
     <p>Copyright © {new Date().getFullYear()} - Dev Stack. All rights reserved.</p>
     <div className='flex justify-between gap-4 '>
        <p>Privacy</p>
        <p>Terms</p>
     </div>
</div>

        </div>
    );
}

export default Footer;