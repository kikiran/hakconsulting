import JaneImage from "../assets/images/jane.jpeg";
import DavidImage from "../assets/images/david.jpeg";
import ManagerImage from "../assets/images/manager.jpeg";

const teamMembers = [
  {
    name: "Jane Smith",
    role: "Financial Consultant",
    image: JaneImage,
  },
  {
    name: "David Brown",
    role: "Investment Advisor",
    image: DavidImage,
  },
  {
    name: "Sophia Kim",
    role: "Wealth Manager",
    image: ManagerImage,
  },
];

export function TeamSection() {
  return (
    <section id="meet-the-team" className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h4 className="mb-1">
                  {member.name}
                </h4>
                <p className="text-gray-600">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
