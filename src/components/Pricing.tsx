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
  addOns: {
    name: string;
    price: number;
    description: string;
  }[];
}

const pricingList: PricingProps[] = [
  {
    title: "Team Inbox",
    popular: PopularPlanType.NO,
    price: 50,
    description: "Get started with our Team Inbox for a single number - perfect for small-scale collaboration.",
    buttonText: "Start Team Inbox",
    checkoutLink: "https://web.jutasoftware.co/register",
    benefitList: [
      "7 Days Free Trial",
      "1 WhatsApp Connection",
      "Scan QR Code Integration",
      "Unlimited Users",
      "Unlimited Messages",
      "Unlimited Blast Messages",
      "Unlimited Follow Up",
      "Assign Users & Tag Contacts",
      "Export & Import Existing Contacts",
      "View & Update Existing Conversations",
      "Multi-User Number Management",
      "Centralized Multi-Number Control",
      "Mobile App Access",
      "Desktop Access",
    ],
    addOns: [],
  },

  {
    title: "Standard AI Plan",
    popular: PopularPlanType.NO,
    price: 218,
    description: "Enterprise-grade solution with 500 free AI responses monthly. Additional responses at RM10 per 100 responses.",
    buttonText: "Start Standard AI Plan",
    checkoutLink: "https://web.jutasoftware.co/register", // You'll need to update this
    benefitList: [
      "7 Days Free Trial",
      "Team Inbox Plan Included",
      "Done For You AI Setup & Maintenance",
      "Google Calendar Integration",
      "Chat-GPT 4.0 Answers (Text, Voice, Images & Documents)",
      "Automated Blasting",
      "Automated Follow-Up",
      "Automated Booking System",
      "Automated Tagging",
      "Automated Assign",
      "24/7 Support",
    ],
    addOns: [
      {
        name: "Google Sheets/Excel Integration",
        price: 150,
        description: "One-time payment"
      },
      {
        name: "Website Integration",
        price: 250,
        description: "One-time payment"
      },
      {
        name: "Other CRM Integration",
        price: 500,
        description: "One-time payment"
      }
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
      "Standard AI Plan Included",
      "Unlimited AI Responses",
      "Up to 3 Numbers Connection",
      "Done For You Setup & Maintenance",
      "Custom Integration To Existing Systems (Google Excel & Other CRM System)",
    ],
    addOns: [],
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
