import MeetingImage from '../assets/images/meeting.jpeg';

export function HeroSection() {
  return (
    <section id="home" className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h1 className="mb-4 sm:mb-6 sm:text-2xl lg:text-6xl font-bold text-blue-100 headinginTitle">
              Empower Financial Independence
            </h1>
            <h2 className="mb-4 sm:mb-6 text-gray-700">
              Expert Guidance for Your Financial Journey
            </h2>
            <p className="text-gray-600 mb-6 sm:mb-8 max-w-lg">
              At HAK Consulting, we are committed to helping you achieve
              financial freedom. Our team of experienced advisors provides
              personalized strategies, expert guidance and innovative tools to
              help you navigate your unique financial landscape.
            </p>
            <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 hover:bg-gray-800 transition-colors">
              Get in touch
            </button>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] lg:aspect-square rounded-lg overflow-hidden shadow-lg">
              <img
                src={MeetingImage}
                alt="Business professionals meeting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
