import logo from "../assets/logo.png";

export const Footer = () => {
  return (
    <footer id="footer" className="bg-muted/50">
      <div className="container py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <a
              rel="noreferrer noopener"
              href="/"
              className="font-bold text-xl flex items-center"
            >
               <img src={logo} alt="Logo" className="w-12 h-12" />
              Juta Teknologi
            </a>
            <p className="mt-4 text-muted-foreground">
              Revolutionizing WhatsApp Business with AI-powered chatbots and automation solutions.
            </p>
            <p className="mt-4 text-muted-foreground">
              Office Address: NO 27­1 JALAN NEUTRON Q U16/Q DENAI ALAM, SEKSYEN U16 40160 SHAH ALAM SELANGOR MALAYSIA
            </p>
            <p className="text-muted-foreground">Office Phone: +601121677672</p>
            <p className="text-muted-foreground">Email: team@jutateknologi.com</p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Product</h3>
            <a href="#features" className="text-muted-foreground hover:text-primary">Features</a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary">Pricing</a>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Resources</h3>
            <a href="#guide" className="text-muted-foreground hover:text-primary">Guide</a>
            <a href="#faq" className="text-muted-foreground hover:text-primary">FAQ</a>
            <a href="/case-studies" className="text-muted-foreground hover:text-primary">Case Studies</a>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Company</h3>
            <a href="#about" className="text-muted-foreground hover:text-primary">About Us</a>
            <a href="#" className="text-muted-foreground hover:text-primary">Careers</a>
            <a href="#" className="text-muted-foreground hover:text-primary">Contact</a>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Legal</h3>
            <a href="/policy" className="text-muted-foreground hover:text-primary">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary">Terms of Service</a>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer noopener" className="text-muted-foreground hover:text-primary">
                <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.325v21.351C0 23.405.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.325-.595 1.325-1.324V1.325C24 .595 23.405 0 22.675 0z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer noopener" className="text-muted-foreground hover:text-primary">
                <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.548.334 3.465 1.417 2.382 2.5 2.176 3.723 2.118 5.004.06 6.284.048 6.693.048 12s.012 5.716.07 6.996c.058 1.281.264 2.504 1.347 3.587 1.083 1.083 2.306 1.289 3.587 1.347 1.28.058 1.689.07 6.996.07s5.716-.012 6.996-.07c1.281-.058 2.504-.264 3.587-1.347 1.083-1.083 1.289-2.306 1.347-3.587.058-1.28.07-1.689.07-6.996s-.012-5.716-.07-6.996c-.058-1.281-.264-2.504-1.347-3.587C20.504.264 19.281.058 18 .07 16.72.012 16.311 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com" target="_blank" rel="noreferrer noopener" className="text-muted-foreground hover:text-primary">
                <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.75 2.25v12.75a3.75 3.75 0 1 1-3.75-3.75h1.5a2.25 2.25 0 1 0 2.25 2.25V0h2.25a6.75 6.75 0 0 0 6.75 6.75v2.25a9 9 0 0 1-9-9H9.75z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-14 text-center border-t border-muted-foreground/20 pt-8">
        <p className="text-muted-foreground">
          &copy; {new Date().getFullYear()} Juta Teknologi Sdn Bhd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};