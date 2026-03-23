import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const coursesByLevel = [
  {
    level: "Classes 6-8",
    subjects: [
      { name: "Mathematics", tutors: 8 },
      { name: "Science", tutors: 7 },
      { name: "English", tutors: 6 },
      { name: "Social Studies", tutors: 5 },
      { name: "Hindi", tutors: 4 },
    ],
  },
  {
    level: "Classes 9-10",
    subjects: [
      { name: "Mathematics", tutors: 10 },
      { name: "Science (Physics, Chemistry, Biology)", tutors: 9 },
      { name: "English", tutors: 8 },
      { name: "Social Studies", tutors: 7 },
      { name: "Hindi", tutors: 6 },
    ],
  },
  {
    level: "Classes 11-12",
    subjects: [
      { name: "Mathematics", tutors: 12 },
      { name: "Physics", tutors: 10 },
      { name: "Chemistry", tutors: 10 },
      { name: "Biology", tutors: 8 },
      { name: "English", tutors: 8 },
      { name: "Economics", tutors: 6 },
    ],
  },
];

export function Courses() {
  return (
    <section id="courses" className="section-padding px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Our Courses & Subjects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive coverage of all major subjects for classes 6-12.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coursesByLevel.map((levelGroup, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-blue-600 dark:text-blue-400">
                  {levelGroup.level}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {levelGroup.subjects.map((subject, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between pb-3 border-b border-gray-200 dark:border-gray-700 last:border-0 last:pb-0"
                    >
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {subject.name}
                      </span>
                      <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
                        {subject.tutors} tutors
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
