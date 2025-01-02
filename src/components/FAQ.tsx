import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is Juta Teknologi's AI Chatbot Service?",
    answer: "Our AI chatbot service provides customized, intelligent chatbots that automate customer interactions, business processes, and enhance customer satisfaction. We specialize in creating chatbots tailored to your specific business needs.",
    value: "item-1",
  },
  {
    question: "Can the chatbot handle multiple languages?",
    answer: "Yes, the chatbots are designed to support multiple languages, ensuring you can communicate effectively with your diverse customer base.",
    value: "item-2",
  },
  {
    question: "How do unlimited blasting messages work?",
    answer: "Our service allows you to send unlimited broadcast messages to reach a large audience efficiently. Whether it's promotions, updates, or important notifications, you can communicate with all your contacts without restrictions.",
    value: "item-3",
  },
  {
    question: "How does the unlimited device connection work?",
    answer: "Our AI chatbot solution allows you to connect unlimited devices to a single number without needing an official API. This means that all your team members can access and interact with the chatbot simultaneously.",
    value: "item-4",
  },
  {
    question: "Can the chatbot integrate with the current systems we use?",
    answer: "If the current system has API access, we can integrate the chatbot with the tools you already use. We offer custom integrations across your business processes.",
    value: "item-5",
  },
  {
    question: "Can I customize the chatbot's responses and functionalities?",
    answer: "Yes, the chatbots are highly customizable. We work with you to tailor the chatbot's responses and functionalities to match your specific business processes and requirements. This ensures that the chatbot aligns perfectly with your business goals.",
    value: "item-6",
  },
  {
    question: "What kind of support do you offer after the chatbot is set up?",
    answer: "We provide comprehensive support, including regular updates, troubleshooting, and performance monitoring. Our team is always available to help you with any questions or issues you might have.",
    value: "item-7",
  },
  {
    question: "What should I do if my WhatsApp account gets banned?",
    answer: "If your WhatsApp account gets banned, our support team will assist you in understanding the cause and taking the necessary steps to resolve the issue. We will help you review your usage practices and make adjustments to prevent future bans. Additionally, we offer an unban service to help reinstate your chatbot as quickly as possible.",
    value: "item-8",
  },
  {
    question: "How can we avoid getting banned on WhatsApp?",
    answer: "Our team will advise you on message frequency, content guidelines, and other key factors to keep your WhatsApp account running.",
    value: "item-9",
  },
  {
    question: "How long does it take to set up the AI chatbot?",
    answer: "The initial setup and customization typically take 3-10 days. We work closely with you during this period to ensure the chatbot meets your specific needs. After setup & launch, we offer ongoing maintenance and support to keep everything running smoothly.",
    value: "item-10",
  },
  {
    question: "Do I need technical knowledge to start?",
    answer: "No technical knowledge is required. Our team handles the complete setup and integration of the chatbot into your existing systems. We also provide training and support to ensure you can use the chatbot effectively.",
    value: "item-11",
  },
  {
    question: "How do I get started?",
    answer: "Getting started is easy! Simply contact us for a consultation. We'll discuss your business needs and create a tailored plan to implement the perfect AI chatbot solution for you.",
    value: "item-12",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
         <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-300 to-blue-700 text-transparent bg-clip-text">
                  You have Questions
                </span>{" "}
                We Have Answers
              </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
         href="https://wa.link/5gmtr9" target="_blank"
          className="bg-gradient-to-r from-blue-300 to-blue-700 text-transparent bg-clip-text transition-all border-primary hover:border-b-2"
        >
          WhatsApp Our AI
        </a>
      </h3>
    </section>
  );
};
