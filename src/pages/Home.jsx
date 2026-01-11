import Navbar from "../components/Navbar";
import heroBg from "../assets/hero-bg.png";
import { turfs } from "../data/turfs";
import Turfcard from "../Components/Turfcard";
import { FiCheckCircle, FiZap, FiMapPin, FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Navbar />
            
      <section className="relative min-h-screen flex items-center" id="home"
              style={{
                backgroundImage: `url(${heroBg})`,
                backgroundSize: "cover",
                backgroundPosition: "left center", 
              }}
            >
              <div className="absolute inset-0 bg-black/65"></div>

          
              <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                <div className="ml-auto max-w-xl text-left">
                  <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                    Book World-Class
                    <br />
                    <span className="text-green-500">
                      Cricket Turfs
                    </span>
                  </h1>

                  <p className="mt-6 text-gray-300 text-lg md:text-xl">
                    Train, practice, and compete on premium cricket turfs with
                    instant booking and flexible time slots.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold transition">
                      Book Now
                    </button>

                    <a href="#turfs">
                      <button className="border border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-xl font-semibold transition">
                        Explore Turfs
                      </button>
                    </a>
                  </div>
                </div>
              </div>
      </section>

      <section className="relative py-24 bg-linear-to-br from-black via-gray-900 to-black" id="turfs">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.12),transparent_60%)]"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Featured Cricket Turfs
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto">
              Explore premium cricket turfs designed for professional practice and matches
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {turfs.slice(0, 3).map((turf) => (
              <Turfcard key={turf.id} turf={turf} />
            ))}
          </div>

          <div className="mt-16 text-center"> 
            <Link to="/turfs"
                className="inline-block border border-white/20 text-white hover:bg-white hover:text-black px-8 py-3 rounded-xl font-semibold transition"
            >
              See more turfs →
            </Link>
          </div>

        </div>
      </section>

      <section className="relative py-32 bg-black overflow-hidden">

        <div className="absolute inset-0 bg-linear-to-br from-gray-900 to-black"></div>

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl">
            
            <h3 className="text-white font-semibold text-lg mb-6">
              Book a Cricket Turf
            </h3>

            <div className="space-y-5 text-gray-300 text-sm">

              <div>
                <p className="mb-1">Select Date</p>
                <div className="bg-black/40 rounded-lg px-4 py-3">
                  18 Jan 2026
                </div>
              </div>

              <div>
                <p className="mb-1">Select Time</p>
                <div className="flex gap-3">
                  <span className="px-3 py-2 bg-green-600 text-white rounded-lg">
                    6–7 AM
                  </span>
                  <span className="px-3 py-2 bg-black/40 rounded-lg">
                    7–8 AM
                  </span>
                  <span className="px-3 py-2 bg-black/40 rounded-lg">
                    8–9 AM
                  </span>
                </div>
              </div>

              <div>
                <p className="mb-1">Duration</p>
                <div className="bg-black/40 rounded-lg px-4 py-3">
                  2 Hours
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-white/10">
                <span>Total Price</span>
                <span className="text-green-400 font-bold text-lg">
                  ₹2400
                </span>
              </div>

              <button className="w-full bg-green-600 py-3 rounded-xl text-white font-semibold">
                Confirm Booking
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Booking made
              <br />
              <span className="text-green-500">simple & fast</span>
            </h2>

            <p className="mt-6 text-gray-400 max-w-md">
              TurfZone lets you book cricket turfs in seconds. Choose a date,
              select a slot, see pricing instantly, and confirm — no calls, no
              waiting.
            </p>

            <ul className="mt-8 space-y-4 text-gray-300">
              <li>✔ Real-time slot visibility</li>
              <li>✔ Transparent pricing</li>
              <li>✔ Instant confirmation</li>
            </ul>
          </div>

        </div>
      </section>

      <section className="relative py-24 bg-linear-to-br from-black via-gray-900 to-black">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(34,197,94,0.12),transparent_60%)]"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Why Choose TurfZone
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto">
              A smarter, faster, and more reliable way to book cricket turfs
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

            <div className="group p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 hover:border-green-500/40 transition">
              <FiCheckCircle className="text-green-400 text-3xl mb-4" />
              <h3 className="text-lg font-semibold text-white">
                Verified Turfs
              </h3>
              <p className="mt-3 text-gray-400 text-sm">
                Only trusted and quality-checked cricket turfs are listed.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 hover:border-green-500/40 transition">
              <FiZap className="text-green-400 text-3xl mb-4" />
              <h3 className="text-lg font-semibold text-white">
                Instant Booking
              </h3>
              <p className="mt-3 text-gray-400 text-sm">
                Book your preferred slot instantly with real-time availability.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 hover:border-green-500/40 transition">
              <FiMapPin className="text-green-400 text-3xl mb-4" />
              <h3 className="text-lg font-semibold text-white">
                Easy Location Access
              </h3>
              <p className="mt-3 text-gray-400 text-sm">
                Find turfs easily and navigate directly via Google Maps.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 hover:border-green-500/40 transition">
              <FiClock className="text-green-400 text-3xl mb-4" />
              <h3 className="text-lg font-semibold text-white">
                Flexible Time Slots
              </h3>
              <p className="mt-3 text-gray-400 text-sm">
                Choose slots that fit your schedule, no restrictions.
              </p>
            </div>

          </div>
        </div>
      </section>

      <footer className="relative bg-black border-t border-white/10">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(34,197,94,0.12),_transparent_60%)]"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">

          <div>
            <h3 className="text-2xl font-bold text-white">
              Turf<span className="text-green-500">Zone</span>
            </h3>
            <p className="mt-4 text-gray-400 text-sm">
              A modern platform to book premium cricket turfs quickly and
              hassle-free.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-green-400 cursor-pointer transition">Home</li>
              <li className="hover:text-green-400 cursor-pointer transition">Turfs</li>
              <li className="hover:text-green-400 cursor-pointer transition">My Bookings</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-green-400 cursor-pointer transition">Help Center</li>
              <li className="hover:text-green-400 cursor-pointer transition">Contact Us</li>
              <li className="hover:text-green-400 cursor-pointer transition">Terms & Privacy</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="text-gray-400 text-sm">
              📧 support@turfzone.com
            </p>
            <p className="mt-2 text-gray-400 text-sm">
              📞 +91 93603 77023
            </p>
          </div>

        </div>

        <div className="border-t border-white/10 py-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} TurfZone. All rights reserved.
        </div>
      </footer>

    </>
  );
}
