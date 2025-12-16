interface CardProps {
    title: string;
    description: string;
}

function Card({ title, description }: CardProps) {
    return (
        <div className="max-w-sm mx-auto mt-10 bg-white shadow-lg rounded-xl overflow-hidden">
            <img
                src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80"
                alt="Sample"
                className="w-full h-48 object-cover"
            />

            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-700">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Card