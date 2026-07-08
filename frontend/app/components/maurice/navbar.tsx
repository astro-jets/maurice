import { Link } from "react-router";

import { FaArrowRight } from "react-icons/fa";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-white/10">

            <div className="max-w-7xl mx-auto px-8">

                <div className="h-20 flex items-center justify-between">

                    <h1 className="text-3xl font-black tracking-wider">

                        NEWA

                    </h1>

                    <div className="hidden lg:flex gap-10">

                        <Link to="">Home</Link>

                        <Link to="/services">Services</Link>

                        <Link to="/insights">Insights</Link>

                        <Link to="/about">About</Link>

                        <Link to="/record">Record</Link>

                        <Link to="/contact">Contact</Link>

                    </div>

                    <button className="bg-yellow-400 text-black px-6 py-3 rounded-full flex gap-3 items-center font-bold hover:scale-105 duration-300">

                        Book Consultation

                        <FaArrowRight />

                    </button>

                </div>

            </div>

        </nav>
    );
}