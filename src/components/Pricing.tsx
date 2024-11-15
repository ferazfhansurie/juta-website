import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { pixelEvent } from '../utils/pixel';

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  originalPrice?: number;
  description: string;
  buttonText: string;
  benefitList: string[];
  checkoutLink: string;
}

const pricingList: PricingProps[] = [
  {
    title: "WhatsApp Blaster",
    popular: PopularPlanType.NO,
    price: 50,
    description: "Get started with our WhatsApp Blaster for a single number - perfect for small-scale campaigns.",
    buttonText: "Start Blaster Plan",
    checkoutLink: "https://web.jutasoftware.co/register",
    benefitList: [
      "7 Days Free Trial",
      "1 WhatsApp Connection",
      "Unlimited Messages",
      "Basic Blaster Features",
      "Scan QR Code Integration",
      "View & Update Existing Conversations",
    ],
  },

  {
    title: "Standard AI Plan",
    popular: PopularPlanType.NO,
    price: 168,
    description: "Enterprise-grade solution with 500 free messages monthly. Additional messages at RM10 per 100 messages.",
    buttonText: "Start Standard AI Plan",
    checkoutLink: "https://web.jutasoftware.co/register", // You'll need to update this
    benefitList: [
      "7 Days Free Trial",
      "500 Free Messages Monthly",
      "Additional Messages: RM10/100 msgs",
      "Limited Users",
      "1 WhatsApp Connection",
      "Build Your Own AI",
      "Limited Automations",
      "Scan QR Code Integration",
      "View & Update Existing Conversations",
    ],
  },
  {
    title: "Unlimited Plan with Custom Solutions",
    popular: PopularPlanType.YES,
    price: 688,
    description: "Enjoy everything unlimited with up to 3 numbers connection. Get our service for complete setup and custom solutions in 10 days.",
    buttonText: "Start Unlimited Plan",
    checkoutLink: "https://wa.link/ng0obn",
    benefitList: [
      "7 Days Free Trial",
      "Unlimited Users",
      "Unlimited Messages",
      "Unlimited Follow-Up",
      "Done For You Integration",
      "Up to 3 Numbers Connection",
      "Custom Solutions in 10 Days",
      "Personal WhatsApp Connection",
      "Scan QR Code Integration",
      "Unlimited Blast Messages",
      "Export & Import Existing Contacts",
      "View & Update Existing Conversations",
      "Automated Follow-Up",
      "Chat-GPT 4.0 Answers",
      "Automated Booking System",
      "Multi-User Number Management",
      "Centralized Multi-Number Control",
    ],
  },
];

export const Pricing = () => {
  const handlePricingClick = (planName: string, price: number) => {
    pixelEvent('ViewContent', {
      content_type: 'product',
      content_name: planName,
      currency: 'MYR',
      value: price
    });
  };

  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center pb-8">
        Our{' '}
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
           Offers
        </span>
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={`w-full md:w-1/2 max-w-md ${
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }`}
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
            
              </CardTitle>
              
              <div className="flex items-baseline">
                <span className="text-3xl font-bold">RM {pricing.price}</span>
                {pricing.originalPrice && (
                  <span className="ml-2 text-xl text-red-500 line-through">RM {pricing.originalPrice}</span>
                )}
                <span className="ml-2 text-muted-foreground"> /month</span>
              </div>
              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full" asChild>
                <a 
                  href={pricing.checkoutLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => handlePricingClick(pricing.title, pricing.price)}
                >
                  {pricing.buttonText}
                </a>
              </Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span
                    key={benefit}
                    className="flex"
                  >
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
