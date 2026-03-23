import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Zap, Users, Smartphone, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Personalized Learning",
    description:
      "Customized lesson plans tailored to each student's learning style and pace.",
  },
  {
    icon: Users,
    title: "Expert Tutors",
    description:
      "Highly qualified educators with years of experience in their subjects.",
  },
  {
    icon: Smartphone,
    title: "Technology-Enabled",
    description:
      "Interactive online sessions with real-time collaboration tools.",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description:
      "Students see measurable improvements in grades and understanding.",
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="why"
      className="section-padding px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Why Choose Zelphyn?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We're committed to delivering excellence in education through
            innovation, dedication, and student success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index}>
                <CardHeader>
                  <div className="mb-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg w-fit">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
