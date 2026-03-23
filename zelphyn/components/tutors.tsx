import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Star, Award } from "lucide-react";

const tutors = [
  {
    name: "Dr. Rahul Sharma",
    specialty: "Mathematics (Class 11-12)",
    experience: "8 years",
    rating: 4.9,
    students: 45,
    bio: "Expert in competitive exam prep with proven track record.",
  },
  {
    name: "Ms. Neha Desai",
    specialty: "Science & Physics",
    experience: "6 years",
    rating: 4.8,
    students: 38,
    bio: "Makes complex physics concepts simple and understandable.",
  },
  {
    name: "Mr. Amit Patel",
    specialty: "English Literature",
    experience: "7 years",
    rating: 4.9,
    students: 42,
    bio: "Passionate about developing strong communication skills.",
  },
  {
    name: "Ms. Priya Singh",
    specialty: "Chemistry",
    experience: "5 years",
    rating: 4.7,
    students: 35,
    bio: "Interactive approach to organic and inorganic chemistry.",
  },
  {
    name: "Dr. Vikram Gupta",
    specialty: "Biology",
    experience: "9 years",
    rating: 4.9,
    students: 48,
    bio: "Specializes in NEET preparation with 90%+ success rate.",
  },
  {
    name: "Ms. Ananya Verma",
    specialty: "Social Studies",
    experience: "6 years",
    rating: 4.8,
    students: 36,
    bio: "Makes history and geography engaging and memorable.",
  },
];

export function Tutors() {
  return (
    <section id="about" className="section-padding px-4 sm:px-6 lg:px-8">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Meet Our Expert Tutors
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Carefully selected professionals dedicated to your success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutors.map((tutor, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{tutor.name}</CardTitle>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                  {tutor.specialty}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {tutor.bio}
                </p>

                <div className="space-y-2 pb-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {tutor.experience} experience
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {tutor.rating} rating ({tutor.students} students)
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
