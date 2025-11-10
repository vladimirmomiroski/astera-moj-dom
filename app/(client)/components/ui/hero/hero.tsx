import Image from "next/image"

const Hero = () => {
    return (
        <header className="relative w-full min-h-screen">
            <div>dark overlay here</div>
            <Image
                src="/test.jpg"
                alt="Hero Image Description"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-extra-large text-white font-bold leading-tight mb-1">Агенција за Недвижности</h1>
                <p className="text-medium text-white font-bold mb-5">Купи и продај имот брзо и лесно!</p>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Види Повеќе</button>
            </div>
        </header >
    )
}

export default Hero