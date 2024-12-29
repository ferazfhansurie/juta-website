import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";


interface CaseStudy {
  name: string;
  description: string;
  challenges: string[];
  solutions: string[];
  outcomes: string[];
  imageUrl: string;
}

const caseStudies: CaseStudy[] = [
  {
    name: "Beana Home Quran",
    description: "Quran learning online & center",
    challenges: [
      "Send reminders for monthly invoices to their 500+ customers.",
      "Low closing rate due to only 4 WhatsApp access.",
      "Dependent on team member's availability to onboard new customers."
    ],
    solutions: [
      "Automated personalized weekly reminders for 500+ customers.",
      "Unlimited WhatsApp access for team members.",
      "Automated onboarding process with A.I."
    ],
    outcomes: [
      "Increase 20% invoice collections success rate monthly.",
      "Increase 10% closing rate via FB Ads."
    ],
    imageUrl: "https://assets.cdn.filesafe.space/LckX7xmrOUBw8j9G2nUr/media/66ab34c8e33315b9eca1ef66.png"
  },
  {
    name: "Callabio Manufacturing SDN BHD",
    description: "Manufactures & sells OEM product",
    challenges: [
      "Low response rate due to slow response.",
      "Limited team members with high inquiry rate.",
      "5% unattended leads."
    ],
    solutions: [
      "Automated responses.",
      "Unlimited WhatsApp access for team members."
    ],
    outcomes: [
      "Increase 10% closing rate via FB Ads.",
      "Increase 30% response rate.",
      "100% attended leads."
    ],
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/onboarding-a5fcb.appspot.com/o/Image%20with%20removed%20background.png?alt=media&token=6491f11f-6241-4fea-b331-b421b9833468"
  },
  {
    name: "Go Luxury Travel",
    description: "Luxury travel agency",
    challenges: [
      "Dependent on team member's availability to onboard new customers.",
      "Low response rate.",
      "5% unattended leads."
    ],
    solutions: [
      "Automated onboarding process with A.I.",
      "Unlimited WhatsApp access for team members."
    ],
    outcomes: [
      "Increase 20% response rate.",
      "Increase 10% closing rate.",
      "100% attended leads."
    ],
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/onboarding-a5fcb.appspot.com/o/Image%20with%20removed%20background%20(1).png?alt=media&token=f30075ad-bc33-4d00-aadd-273cb35f1750"
  },
  {
    name: "Billert Global (M) SDN BHD",
    description: "Cooperative Personal Financing",
    challenges: [
      "Dependent on team member's availability to onboard new customers.",
      "Only 4 WhatsApp access.",
      "Unorganized WhatsApp contacts & conversations."
    ],
    solutions: [
      "Automated onboarding process.",
      "Unlimited WhatsApp access for team members.",
      "Assign conversation to team members by tags.",
      "Organized Pipelines."
    ],
    outcomes: [
      "Increase team's productivity."
    ],
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/onboarding-a5fcb.appspot.com/o/Upload%20Image%20removebg-preview.png?alt=media&token=4bc39adc-63f2-41e9-889f-187d612ba12c"
  },
  {
    name: "Sunz Holding SDN BHD",
    description: "Window Tinting Service",
    challenges: [
      "High inquiry rate.",
      "Unorganized appointment tracker.",
      "Low show rate.",
      "Unorganized WhatsApp contacts & conversations."
    ],
    solutions: [
      "Automated answers.",
      "Organized calendar for appointments.",
      "Assign conversation to team members by tags."
    ],
    outcomes: [
      "Increase team's productivity.",
      "Increase show rate."
    ],
    imageUrl: "https://assets.cdn.filesafe.space/LckX7xmrOUBw8j9G2nUr/media/66ab36268899dc12dc80f4c1.png"
  },
  {
    name: "SQD Forex Academy",
    description: "Offers courses in forex trading",
    challenges: [
      "SQD Forex Academy needed a way to quickly answer student queries, streamline sign-ups, and manage course payments."
    ],
    solutions: [
      "A WhatsApp bot that can answer questions, process enrollments and payments directly in the app, and alert the team about new deposits."
    ],
    outcomes: [],
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/onboarding-a5fcb.appspot.com/o/RemoveBG%20Preview.png?alt=media&token=bd9e20c7-4644-4fb9-b618-f71269f1900e"
  },
  {
    name: "Management & Science University",
    description: "Higher Education Institution",
    challenges: [
      "High inquiry rate.",
      "Unorganized WhatsApp contacts & conversations."
    ],
    solutions: [
      "Automated messaging system to engage leads from the landing page",
      "Automatic sending of personalized Conditional Offer Letters and brochures",
      "Consistent and timely follow-ups using AI automation"
    ],
    outcomes: [
      "Increase 10% in lead quality and engagement",
      "Reduce manual workload for the admissions team by 20%",
      "Boost 5% enrollment rate through improved communication"
    ],
    imageUrl: "https://assets.cdn.filesafe.space/LckX7xmrOUBw8j9G2nUr/media/66ab40fea7243b020ee1f58f.png"
  }
];

const CaseStudyCard: React.FC<{ study: CaseStudy }> = ({ study }) => (
  <Card className="flex flex-col h-full">
    <div className="p-4 flex justify-center items-center bg-slate-500 dark:bg-gray-900">
      <img 
        src={study.imageUrl} 
        alt={study.name} 
        className="w-32 h-32 object-contain"
      />
    </div>
    <CardHeader>
      <CardTitle className="text-xl">{study.name}</CardTitle>
      <CardDescription>{study.description}</CardDescription>
    </CardHeader>
    <CardContent className="flex-grow">
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold mb-2">Challenges:</h4>
          <ul className="list-disc pl-5 space-y-1">
            {study.challenges.map((challenge, index) => (
              <li key={index} className="text-sm text-muted-foreground">{challenge}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Solutions:</h4>
          <ul className="list-disc pl-5 space-y-1">
            {study.solutions.map((solution, index) => (
              <li key={index} className="text-sm text-muted-foreground">{solution}</li>
            ))}
          </ul>
        </div>
        {study.outcomes.length > 0 && (
          <div>
            <h4 className="font-semibold mb-2">Outcomes:</h4>
            <ul className="list-disc pl-5 space-y-1">
              {study.outcomes.map((outcome, index) => (
                <li key={index} className="text-sm text-muted-foreground">{outcome}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </CardContent>
  </Card>
);

export const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Our{' '}
        <span className="bg-gradient-to-r from-blue-300 to-blue-700 text-transparent bg-clip-text">
          Case Studies
        </span>
      </h2>
      <p className="text-xl text-center text-muted-foreground mb-8">
        Real-world examples of how our solutions have helped businesses succeed
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((study, index) => (
          <CaseStudyCard key={index} study={study} />
        ))}
      </div>
    </section>
  );
};