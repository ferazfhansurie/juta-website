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

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [

  {
    title: "AI-Powered CRM System",
    popular: PopularPlanType.YES,
    price: 688,
    description: `Ready to turn your WhatsApp chaos into a well-oiled machine? Say hello to your new digital sidekick! Our AI-Powered CRM System is like having a super-smart assistant who never sleeps, never complains, and always remembers to follow up. It's time to kiss goodbye to missed messages, forgotten follow-ups, and that nagging feeling that you're drowning in a sea of chats. With our Team Inbox, you'll be sailing smooth seas, captain! 🚀💬`,
    buttonText: "Start Your Chaos-Free Trial",
    benefitList: [
      "Unlimited Users (Yep, invite the whole crew!)",
      "Unlimited Messages (Chat till the cows come home)",
      "Unlimited Follow-Up (Never forget a lead again)",
      "Done For You Integration (We set it up, you take the credit)",
      "Personal WhatsApp Connection (Your number, our superpowers)",
      "Scan QR Code Integration (As easy as taking a selfie)",
      "Unlimited Blast Messages (Spread the word like wildfire)",
      "Export & Import Existing Contacts (Bring your friends, they're welcome)",
      "View & Update Existing Conversations (Time travel not included)",
      "Automated Follow-Up (Like a persistent puppy, but less annoying)",
      "Chat-GPT 4.0 Answers (AI so smart, it might outsmart you)",
      "Automated Booking System (Your 24/7 appointment ninja)",
    ],
  },

];

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center pb-8">
        Our{' '}
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
           Offer
        </span>
      </h2>

      <div className="flex justify-center">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
            
              </CardTitle>
              
              <div>
                <span className="text-3xl font-bold">RM {pricing.price}</span>
                <span className="text-muted-foreground"> /month</span>
              </div>
              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
            <Button className="w-full" asChild>
                <a href="https://web.jutasoftware.co/register" target="_blank" rel="noopener noreferrer">
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
