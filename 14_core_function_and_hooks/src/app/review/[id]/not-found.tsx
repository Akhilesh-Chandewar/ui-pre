function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
            <h1 className="text-7xl font-extrabold text-gray-900">404</h1>
            <h2 className="mt-4 text-3xl font-semibold text-gray-800">
                Page Not Found
            </h2>
            <p className="mt-4 max-w-md text-lg text-gray-600">
                Sorry, the page you are looking for doesn’t exist or has been moved.
            </p>

            <a
                href="/"
                className="mt-8 rounded-lg bg-black px-6 py-3 text-lg font-medium text-white transition hover:bg-gray-800"
            >
                Go back home
            </a>
        </div>
    )
}

export default NotFound
