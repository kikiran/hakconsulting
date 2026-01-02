import BusinessWomanImage from "../assets/images/businesswoman.jpeg";

export function AboutSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Image */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <img
                src={BusinessWomanImage}
                alt="Professional businesswoman"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <h2 className="mb-4 sm:mb-6 headinginTitle">
              Elevating Financial Success
            </h2>
            <p className="text-gray-600 mb-6 sm:mb-8 max-w-lg">
              At HAK Consulting, we are dedicated to delivering exceptional
              financial solutions. Our personalized approach helps you make the
              assessment each people comprehensive and secure guidance to
              achieve your financial goals. Featured with dedicated expert
              support for your success.
            </p>
            <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 hover:bg-gray-800 transition-colors">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
