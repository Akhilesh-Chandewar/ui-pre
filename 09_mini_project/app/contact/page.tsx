export default function Contact() {
    return (
        <main className="flex-1">
            {/* HERO */}
            <section className="bg-indigo-600 text-white py-20">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                    <p className="text-indigo-100 max-w-2xl mx-auto">
                        Have a question or feedback? We'd love to hear from you.
                    </p>
                </div>
            </section>

            {/* FORM */}
            <section className="py-16">
                <div className="max-w-3xl mx-auto px-4">
                    <div className="bg-white p-8 rounded-lg shadow-sm">
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Message
                                </label>
                                <textarea
                                    rows={4}
                                    placeholder="Your message..."
                                    className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* CONTACT INFO */}
            <section className="bg-gray-50 py-12">
                <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-6 text-center">
                    <InfoCard title="Email" value="contact@example.com" />
                    <InfoCard title="Phone" value="+91 98765 43210" />
                    <InfoCard title="Location" value="India" />
                </div>
            </section>
        </main>
    )
}

function InfoCard({ title, value }: { title: string; value: string }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{value}</p>
        </div>
    )
}
