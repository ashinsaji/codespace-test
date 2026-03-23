import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="section-padding px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950">
      <div className="container-custom text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Ready to Transform Your Child's Learning?
        </h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          Join 250+ students who are already experiencing the Zelphyn difference.
          Start with a free demo today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 dark:bg-white dark:text-blue-600 dark:hover:bg-gray-100 w-full sm:w-auto"
          >
            Book Free Demo
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white/20 dark:border-white dark:text-white dark:hover:bg-white/20 w-full sm:w-auto"
          >
            Sign Up Now
          </Button>
        </div>
      </div>
    </section>
  );
}
