import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 max-w-2xl mx-auto">
          Ready to Revolutionize Your
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            {" "}
            WhatsApp Business{" "}
          </span>
          Experience?
        </h2>
        
        <Button 
          size="lg" 
          className="w-full sm:w-auto text-xl py-6 px-8 text-2xl"
          onClick={() => window.open("https://wa.me/601121677672?text=Hi%20Faeez%20and%20Juta!%20I%20want%20to%20buy", "_blank")}
        >
          Get Started Now
        </Button>
      </div>
    </section>
  );
};