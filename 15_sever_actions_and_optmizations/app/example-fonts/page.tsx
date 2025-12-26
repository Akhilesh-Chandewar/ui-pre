import { Roboto , Poppins , Jockey_One } from "next/font/google"

const roboto = Roboto({ weight: ["100", "200", "300", "400", "500", "700", "600", "800" , "900"], subsets: ["latin"] })

const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800" , "900"], subsets: ["latin"] })

const jockey = Jockey_One({ weight: ["400"], subsets: ["latin"] })

const FontExample = () => {
    return (
        <div className={`flex min-h-screen items-center justify-center px-6 ${roboto.className}`}>
            <div className="max-w-3xl text-center">
                <h1 className="mb-6 text-5xl font-bold leading-tight">
                    Lorem ipsum dolor sit amet consectetur.
                </h1>

                <p className={`text-lg leading-relaxed ${jockey.className}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
                    dignissimos eum rerum quaerat tempora voluptatem fugiat eveniet
                    blanditiis natus? Laborum deleniti fuga aliquam quas cum, ab maxime
                    fugiat! Aliquid adipisci recusandae consequatur praesentium dolorum
                    totam temporibus sequi. Quasi dolores enim in ut nisi optio? Voluptatem
                    laborum quo nulla nihil in eos voluptate, vel corrupti voluptatum velit.
                </p>
            </div>
        </div>
    )
}

export default FontExample
