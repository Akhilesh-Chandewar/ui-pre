function FeatureCard({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function StatCard({
  value,
  label,
}: {
  value: string
  label: string
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <p className="text-3xl font-bold text-indigo-600">{value}</p>
      <p className="text-gray-600 mt-2">{label}</p>
    </div>
  )
}

export default function Home() {
  return (
    <main className="flex-1">
      {/* HERO SECTION */}
      <section className="bg-linear-to-r from-indigo-600 to-blue-500 text-white">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Build Better Web Experiences
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-indigo-100">
            A modern Next.js mini project with responsive design, reusable
            components, and clean architecture.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100">
              Get Started
            </button>
            <button className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-indigo-600 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose This Project?
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <FeatureCard
              title="Next.js App Router"
              description="Built using the latest Next.js features with optimized routing and layouts."
            />
            <FeatureCard
              title="Responsive Design"
              description="Fully responsive UI using Tailwind CSS for mobile, tablet, and desktop."
            />
            <FeatureCard
              title="Reusable Components"
              description="Clean component-based structure for scalability and maintainability."
            />
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <StatCard value="10+" label="Components" />
            <StatCard value="100%" label="Responsive" />
            <StatCard value="Fast" label="Performance" />
            <StatCard value="Clean" label="Codebase" />
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Explore More?
          </h2>
          <p className="text-indigo-100 mb-6">
            Check out the About page or get in touch via the Contact page.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100">
            Contact Us
          </button>
        </div>
      </section>
    </main>
  )
}
