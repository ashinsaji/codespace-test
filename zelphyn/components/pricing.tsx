import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingTiers = [
  {
    name: "Starter",
    price: "₹999",
    period: "/month",
    description: "Perfect for trying out our service",
    features: [
      "4 sessions per month",
      "30-min sessions",
      "One subject",
      "Basic progress tracking",
      "Email support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: "₹2,499",
    period: "/month",
    description: "Most popular choice for serious learners",
    features: [
      "8 sessions per month",
      "45-min sessions",
      "Two subjects",
      "Advanced progress tracking",
      "Priority email support",
      "Monthly progress report",
      "Flexible scheduling",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Premium",
    price: "₹4,999",
    period: "/month",
    description: "For comprehensive support and acceleration",
    features: [
      "Unlimited sessions",
      "60-min sessions",
      "Four subjects",
      "Personalized curriculum",
      "24/7 priority support",
      "Weekly progress calls",
      "Flexible scheduling",
      "Performance guarantee",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="section-padding px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingTiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all ${
                tier.popular ? "ring-2 ring-blue-600 dark:ring-blue-500 lg:scale-105" : ""
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-xs font-semibold rounded-bl-lg">
                  POPULAR
                </div>
              )}

              <CardHeader>
                <CardTitle>{tier.name}</CardTitle>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {tier.description}
                </p>
                <div className="mt-4">
                  <span className="text-3xl font-bold">{tier.price}</span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {tier.period}
                  </span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  className={`w-full ${
                    tier.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "border border-gray-300 dark:border-gray-600"
                  }`}
                  variant={tier.popular ? "default" : "outline"}
                >
                  {tier.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
