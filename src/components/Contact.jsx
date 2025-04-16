import React from "react";


function Contact() {
    return (
        <section className="bg-gray-100 py-16">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">

                <div className="w-full md:w-1/2">
                    <img
                        src="https://readymadeui.com/team-2.webp"
                        alt="Our Team"
                        className="rounded-lg shadow-lg w-full"
                    />
                </div>

                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-4xl font-bold text-gray-900">Who We Are</h2>
                    <p className="text-lg text-gray-600 mt-4">
                        We are a team of passionate professionals dedicated to providing
                        innovative solutions. Our mission is to help businesses thrive
                        by offering customized strategies, top-notch security, and
                        world-class support.
                    </p>

                    <p className="mt-4 text-lg text-gray-600">
                        With a commitment to performance, reliability, and global reach,
                        we empower businesses to achieve their goals with cutting-edge
                        technology and seamless communication.
                    </p>

                    <div className="mt-6">
                        <a
                            href="/contact"
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;