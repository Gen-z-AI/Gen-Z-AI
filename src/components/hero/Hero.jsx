import React from 'react';

function Hero() {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                        <img
                            alt=""
                            src="https://www.spyne.ai/blogs/wp-content/uploads/2023/08/Untitled-1-3.webp"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>

                    <div className="lg:py-24">
                        <h2 className="text-3xl font-bold sm:text-4xl">Empower Your Future with Gen-Z-AI</h2>

                        <p className="mt-4 text-gray-600">
                            Gen-Z-AI is revolutionizing artificial intelligence, driving innovation and shaping the future of technology. Join us in our mission to create safe and beneficial AI for all.
                        </p>

                        <p className="mt-4 text-gray-600">
                            <span className='font-bold'>Why Choose Gen-Z-AI? </span>Our logo symbolizes trust, innovation, and progress. Crafted by developers —  <span className='font-bold'>Rajan, Druti, </span>and  <span className='font-bold'>Priyanshi</span> — it reflects our commitment to excellence and a better tomorrow.
                        </p>

                        <button type="button" className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
