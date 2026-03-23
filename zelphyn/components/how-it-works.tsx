"use client";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Sign Up",
      description: "Create your account and tell us about your learning goals.",
    },
    {
      number: "02",
      title: "Match with Tutor",
      description: "We connect you with an expert tutor suited to your needs.",
    },
    {
      number: "03",
      title: "Start Learning",
      description: "Begin personalized one-on-one sessions on your schedule.",
    },
    {
      number: "04",
      title: "Track Progress",
      description: "Monitor improvements and achieve your academic goals.",
    },
  ];

  return (
    <section className="section-padding px-4 sm:px-6 lg:px-8">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Simple, straightforward, and designed for your success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Number box */}
              <div className="mb-6 p-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg w-fit">
                <span className="text-2xl font-bold text-white">
                  {step.number}
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
