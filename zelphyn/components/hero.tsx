import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950">
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Where Personalized Tuition Meets Excellence
        </h1>

        <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Redefining the way students learn with personal attention, technology,
          and a clear path to success. For Classes 6 to 12.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
            Explore Courses
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white/20 dark:border-white dark:text-white dark:hover:bg-white/20 w-full sm:w-auto"
          >
            Sign Up
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 pt-12 border-t border-blue-400/30">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white">
              250+
            </div>
            <p className="text-blue-100 text-sm mt-2">Happy Students</p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white">
              19+
            </div>
            <p className="text-blue-100 text-sm mt-2">Expert Tutors</p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white">
              1,000+
            </div>
            <p className="text-blue-100 text-sm mt-2">Live Hours</p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white">
              7+
            </div>
            <p className="text-blue-100 text-sm mt-2">Countries</p>
          </div>
        </div>
      </div>
    </section>
  );
}
