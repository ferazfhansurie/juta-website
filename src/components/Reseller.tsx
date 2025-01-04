import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Button } from "./ui/button";
import { useEffect } from "react";

export const Reseller = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-primary dark:text-white">
        Reseller Programs
      </h2>
      <p className="text-lg text-center mb-12 text-muted-foreground dark:text-gray-400">
        2 Flexible Options. Tailored to fit your business model.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700 rounded-lg">
          <CardHeader className="bg-gradient-to-r from-blue-400 to-blue-700 text-white p-6 rounded-t-lg">
            <CardTitle className="text-2xl font-extrabold text-center text-white">Monthly Recurring</CardTitle>
            <CardDescription className="text-center mt-4 text-white">Earn consistently over time</CardDescription>
          </CardHeader>
          <CardContent className="p-6 bg-white dark:bg-gray-800">
            <p className="text-lg">
            <li>Promote Juta Teknologi products to your network.</li>
              <li>Earn a recurring monthly earnings.</li>
              <li>Earnings are dependent on customer retention.</li>
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700 rounded-lg">
          <CardHeader className="bg-gradient-to-r from-green-500 to-green-700 text-white p-6 rounded-t-lg">
            <CardTitle className="text-2xl font-extrabold text-center">Per-Sale</CardTitle>
            <CardDescription className="text-center mt-4 text-white">Immediate earnings for each sale</CardDescription>
          </CardHeader>
          <CardContent className="p-6 bg-white dark:bg-gray-800">
            <p className="text-lg">
            <li>Promote Juta Teknologi products to your network.</li>
              <li>Earn your one-time earnings.</li>
              <li>Earnings are fixed and does not depend on customer retention.</li>
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-16">

        <h3 className="text-3xl font-bold mt-16 mb-6 text-center text-primary dark:text-white">Onboarding Steps</h3>
        <ol className="list-decimal list-inside space-y-2 text-lg bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
          <li>Sign-Up: Choose your preferred reseller program.</li>
          <li>Promote: Use the provided tools and resources to market Juta Teknologi products.</li>
          <li>Earn: Start earning based on your selected program.</li>
        </ol>
        

        <h3 className="text-3xl font-bold mt-16 mb-6 text-center text-primary dark:text-white">Team Support</h3>
        <ul className="list-disc list-inside space-y-2 text-lg bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
          <li>Dedicated Account Manager: To assist with any questions or challenges.</li>
          <li>Marketing Tools: Ready-to-use promotional materials, including presentations, copywriting templates, and videos.</li>
        </ul>

        <div className="mt-16 text-center">
          <p className="text-xl text-primary dark:text-white">Ready to join the Juta Teknologi reseller program?</p>
          <a href="https://api.whatsapp.com/send?phone=601121677672&text=Hi%20Faeez%20%26%20Juta,%20I%20would%20like%20to%20learn%20more%20about%20The%20Reseller%20Program" target="_blank" rel="noopener noreferrer">
            <Button className="mt-4 px-8 py-4 bg-primary text-white rounded-lg shadow-md hover:bg-primary-dark transition-colors">
              Contact Us
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}; 