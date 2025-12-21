export default function About() {
    return (
        <main className="flex-1">
            {/* HERO */}
            <section className="bg-indigo-600 text-white py-20">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">About Us</h1>
                    <p className="text-indigo-100 max-w-2xl mx-auto">
                        Learn more about this project, our goals, and the technologies
                        behind it.
                    </p>
                </div>
            </section>

            {/* CONTENT */}
            <section className="py-16">
                <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
                        <p className="text-gray-600 mb-4">
                            This is a mini project built with Next.js App Router and Tailwind
                            CSS. The goal is to create a clean, responsive, and scalable UI
                            using modern best practices.
                        </p>
                        <p className="text-gray-600">
                            It focuses on reusable components, proper layout structure, and
                            simple yet effective design.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">What We Use</h2>
                        <ul className="space-y-3 text-gray-600">
                            <li>✔ Next.js (App Router)</li>
                            <li>✔ Tailwind CSS</li>
                            <li>✔ TypeScript</li>
                            <li>✔ Responsive Design</li>
                            <li>✔ Component-based Architecture</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* STATS */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <Stat value="2025" label="Built In" />
                    <Stat value="10+" label="Components" />
                    <Stat value="100%" label="Responsive" />
                    <Stat value="Clean" label="Design" />
                </div>
            </section>
        </main>
    )
}

function Stat({ value, label }: { value: string; label: string }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-3xl font-bold text-indigo-600">{value}</p>
            <p className="text-gray-600 mt-2">{label}</p>
        </div>
    )
}
