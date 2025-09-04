import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,  
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { useState, useEffect } from 'react';

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number | string;
  setupFee: number;
  supportFee: number;
  messagePrice: number;
  originalPrice?: number;
  description: string;
  buttonText: string;
  benefitList: string[];
  checkoutLink: string;
  addOns: {
    name: string;
    price: number;
    description: string;
  }[];
}

const pricingList: PricingProps[] = [
  {
    title: "Pay-as-you-go",
    popular: PopularPlanType.NO,
    price: 0,
    setupFee: 0,
    supportFee: 0,
    messagePrice: 0.10,
    description: "Perfect for getting started. Pay only for what you use with full access to all system features.",
    buttonText: "Register",
    checkoutLink: "https://web.jutateknologi.com/register",
    benefitList: [
      "Pay per AI Response",
      "AI Follow-Up System",
      "AI Booking System",
      "AI Tagging System",
      "AI Assign System",
      "Mobile App Access",
      "Desktop App Access",
    ],
    addOns: [],
  },
  {
    title: "Premium Support Plan",
    popular: PopularPlanType.YES,
    price: 950,
    setupFee: 0,
    supportFee: 0,
    messagePrice: 0,
    description: "Premium support with 5,000 AI responses monthly. We handle your prompting, follow-ups, AI setup, and maintenance.",
    buttonText: "Start",
    checkoutLink: "https://web.jutateknologi.com/register",
    benefitList: [
      "5,000 AI Responses Monthly",
      "AI Setup & Maintenance",
      "AI Follow-Up System",
      "AI Booking System",
      "AI Tagging System",
      "AI Assign System",
      "Mobile App Access",
      "Desktop App Access",
    ],
    addOns: [],
  },
  {
    title: "Enterprise Plan",
    popular: PopularPlanType.NO,
    price: "XXXX+",
    setupFee: 0,
    supportFee: 0,
    messagePrice: 0,
    description: "Complete solution with 20,000 AI responses, custom automations, AI setup and maintenance included.",
    buttonText: "Start",
    checkoutLink: "https://web.jutateknologi.com/register",
    benefitList: [
      "20,000 AI Responses Monthly",
      "AI Setup & Maintenance",
      "Custom Automations",
      "AI Follow-Up System",
      "AI Booking System",
      "AI Tagging System",
      "AI Assign System",
      "Mobile App Access",
      "Desktop App Access",
    ],
    addOns: [],
  },
];

export const Pricing = () => {
  const [currencySymbol, setCurrencySymbol] = useState('RM');
  

  useEffect(() => {
    const detectCountry = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        console.log('Location data:', data);
        const countryCode = data.country_code;
        setCurrencySymbol(countryCode === 'MY' ? 'RM' : 'USD');
      } catch (error) {
        console.error('Error fetching location:', error);
        // Fallback to manually set the currency for testing
        setCurrencySymbol('RM'); // Set to 'RM' for testing purposes
      }
    };
    detectCountry();
  }, []);







  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center pb-8">
        Our{' '}
        <span className="bg-gradient-to-r from-blue-300 to-blue-700 text-transparent bg-clip-text">
           Offers
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingList.map((pricing: PricingProps) => {

          return (
            <Card
              key={pricing.title}
              className={`w-full ${
                pricing.popular === PopularPlanType.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-2 border-primary scale-105"
                  : "border border-gray-200 dark:border-gray-700"
              }`}
            >
              <CardHeader>
                {pricing.popular === PopularPlanType.YES && (
                  <div className="text-center mb-2">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-center mb-4">{pricing.title}</h3>
                
                {/* Monthly Price */}
                <div className="mt-4 text-center">
                  <div className="text-5xl font-bold text-white">
                    {typeof pricing.price === 'number' ? (pricing.price === 0 ? (pricing.title === "Pay-as-you-go" ? "RM 0.10" : "Free") : `${currencySymbol} ${pricing.price}`) : `${currencySymbol} ${pricing.price}`}
                  </div>
                  <div className="text-xl text-muted-foreground">
                    {typeof pricing.price === 'number' ? (pricing.price === 0 ? (pricing.title === "Pay-as-you-go" ? "/AI response" : "") : "/month") : ""}
                  </div>
                </div>
                <hr className="w-4/5 m-auto mb-4" />
                <CardDescription>{pricing.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-col gap-2">
                  <Button 
                    className="w-full bg-transparent border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500 transition-colors" 
                    asChild
                  >
                    <a 
                      href={pricing.checkoutLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {pricing.buttonText}
                    </a>
                  </Button>
             
                </div>
              </CardContent>

              <hr className="w-4/5 m-auto mb-4" />

              <CardFooter className="flex">
                <div className="space-y-4">
                  {pricing.benefitList.map((benefit: string) => (
                    <span
                      key={benefit}
                      className="flex items-center"
                    >
                      <Check className="text-green-500 mr-2" />
                      <h3 className={
                        benefit.startsWith("Standard AI Plan") || benefit.startsWith("Team Inbox Plan")
                          ? "bg-gradient-to-r from-blue-800/80 to-blue-400/80 p-2 rounded-lg text-white flex-1" 
                          : benefit.includes("AI Responses Monthly")
                          ? "ml-2 font-semibold text-base text-blue-400 dark:text-blue-300"
                          : benefit === "AI Setup & Maintenance" || benefit === "Custom Automations"
                          ? "ml-2 font-semibold text-base text-blue-400 dark:text-blue-300"
                          : "ml-2"
                      }>
                        {benefit}
                      </h3>
                    </span>
                  ))}

                  {/* Add-ons section */}
                  {pricing.addOns.length > 0 && (
                    <>
                      <div className="mt-6 pt-6 border-t">
                        <h3 className="font-semibold mb-4">Available Add-ons:</h3>
                        {pricing.addOns.map((addon) => (
                          <div key={addon.name} className="mb-3">
                            <div>{addon.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {addon.description}
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>

            {/* Add-ons Section */}
      <div className="mt-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Full AI Agent Setup */}
          <Card className="border border-gray-200 dark:border-gray-700">
            <CardHeader className="text-center">
              <h3 className="text-2xl font-bold">Custom Automations</h3>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-bold text-blue-400 dark:text-blue-300 mb-2">
                Custom Pricing
              </div>
              <p className="text-muted-foreground mb-4">
                Based on your specific requirements
              </p>
              <Button 
                className="bg-transparent border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500 transition-colors" 
                asChild
              >
                <a 
                  href="https://web.jutateknologi.com/register" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Get Quote
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* AI Response Top-up */}
          <Card className="border border-gray-200 dark:border-gray-700">
            <CardHeader className="text-center">
              <h3 className="text-2xl font-bold">AI Response Top-up</h3>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-bold text-blue-400 dark:text-blue-300 mb-2">
                RM 10 per 100 AI Responses
              </div>
              <p className="text-muted-foreground mb-4">
                Top up anytime, regardless of your plan
              </p>
              <Button 
                className="bg-transparent border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500 transition-colors" 
                asChild
              >
                <a 
                  href="https://web.jutateknologi.com/register" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Get Top-up
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Plan Comparison Table */}
      <div className="mt-16 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-8">Plan Comparison</h3>
        <Card className="border border-gray-200 dark:border-gray-700">
          <CardContent className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-4 px-4 font-semibold text-lg">Feature</th>
                    <th className="text-center py-4 px-4 font-semibold text-lg">Pay-as-you-go</th>
                    <th className="text-center py-4 px-4 font-semibold text-lg">Premium Support</th>
                    <th className="text-center py-4 px-4 font-semibold text-lg">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-4 px-4 font-medium">AI Responses</td>
                    <td className="text-center py-4 px-4">Pay per use</td>
                    <td className="text-center py-4 px-4">5,000/month</td>
                    <td className="text-center py-4 px-4">20,000/month</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-4 px-4 font-medium">Contacts</td>
                    <td className="text-center py-4 px-4">Unlimited</td>
                    <td className="text-center py-4 px-4">Unlimited</td>
                    <td className="text-center py-4 px-4">Unlimited</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-4 px-4 font-medium">AI Systems</td>
                    <td className="text-center py-4 px-4">
                      <Check className="text-green-500 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <Check className="text-green-500 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <Check className="text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-4 px-4 font-medium">Mobile & Desktop Access</td>
                    <td className="text-center py-4 px-4">
                      <Check className="text-green-500 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <Check className="text-green-500 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <Check className="text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-4 px-4 font-medium">AI Setup & Maintenance</td>
                    <td className="text-center py-4 px-4">
                      <span className="text-red-500 text-2xl">×</span>
                    </td>
                    <td className="text-center py-4 px-4">
                      <Check className="text-green-500 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <Check className="text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium">Custom Automations</td>
                    <td className="text-center py-4 px-4">
                      <span className="text-red-500 text-2xl">×</span>
                    </td>
                    <td className="text-center py-4 px-4">
                      <span className="text-red-500 text-2xl">×</span>
                    </td>
                    <td className="text-center py-4 px-4">
                      <Check className="text-green-500 mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
