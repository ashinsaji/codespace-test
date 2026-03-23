import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ananya Sharma",
    class: "Class 10",
    subject: "Mathematics",
    improvement: "+15 grade points",
    quote:
      "Zelphyn's personalized approach completely transformed my understanding of mathematics. My tutor tailored lessons exactly to my pace and learning style.",
    rating: 5,
  },
  {
    name: "Arjun Kumar",
    class: "Class 12",
    subject: "Physics",
    improvement: "97% in board exam",
    quote:
      "The one-on-one sessions gave me the confidence to tackle complex physics concepts. I went from struggling to scoring 97% in my board exams!",
    rating: 5,
  },
  {
    name: "Priya Patel",
    class: "Class 9",
    subject: "English",
    improvement: "A+ grade achieved",
    quote:
      "My English writing improved dramatically. The interactive sessions and personalized feedback made learning engaging and effective.",
    rating: 5,
  },
  {
    name: "Rohan Singh",
    class: "Class 11",
    subject: "Chemistry",
    improvement: "Improved from C to A",
    quote:
      "I was struggling with chemistry, but Zelphyn matched me with an amazing tutor who broke down complex topics beautifully.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="section-padding px-4 sm:px-6 lg:px-8">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Student Success Stories
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            See how Zelphyn has helped students achieve their academic goals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                  "{testimonial.quote}"
                </p>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.class} • {testimonial.subject}
                  </p>
                  <p className="text-sm font-medium text-green-600 dark:text-green-400 mt-2">
                    {testimonial.improvement}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
