import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I get started?",
    answer:
      "Sign up on our platform, complete your profile, and we'll match you with the perfect tutor within 24 hours. It's that simple!",
  },
  {
    question: "What subjects do you cover?",
    answer:
      "We cover all major subjects for classes 6-12 including Math, Science, English, Social Studies, Hindi, and more. We also offer specialized coaching for competitive exams.",
  },
  {
    question: "How are tutors selected?",
    answer:
      "All our tutors are vetted professionals with subject expertise and proven teaching experience. They undergo rigorous screening and background checks.",
  },
  {
    question: "What if I'm not satisfied?",
    answer:
      "We offer a 100% satisfaction guarantee. If you're not happy with your tutor, we'll match you with a different tutor at no extra cost.",
  },
  {
    question: "Can I adjust my schedule?",
    answer:
      "Yes! Our platform is designed for flexibility. You can schedule sessions at times that work best for you and adjust your timetable anytime.",
  },
  {
    question: "How are sessions conducted?",
    answer:
      "Sessions are conducted online through our interactive learning platform. You'll need a computer or tablet with internet access.",
  },
];

export function FAQ() {
  return (
    <section className="section-padding px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Have questions? We've got answers.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
