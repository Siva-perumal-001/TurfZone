import { useParams, Link, useNavigate } from "react-router-dom";
import { turfs } from "../data/turfs";
import { FiMapPin, FiCheckCircle } from "react-icons/fi";

const TurfDetails = () => {
  const { id } = useParams();
  const turf = turfs.find((t) => t.id === Number(id));

  const navigate = useNavigate();

  if (!turf) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Turf not found
      </div>
    );
  }

  return (
    <section className="relative min-h-screen bg-linear-to-br from-black via-gray-900 to-black py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.12),transparent_60%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* BACK */}
        <Link
          to="/turfs"
          className="text-gray-400 hover:text-green-400 transition"
        >
          ← Back to Turfs
        </Link>

        {/* HEADER */}
        <div className="mt-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {turf.name}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-4 text-gray-300">
            <span>⭐ 4.6 (128 reviews)</span>

            <a
              href={turf.maplink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-green-400 transition"
            >
              <FiMapPin size={16} />
              {turf.location}
            </a>

            <span className="inline-flex items-center gap-1 text-green-400">
              <FiCheckCircle />
              Verified Turf
            </span>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="mt-12 grid lg:grid-cols-3 gap-12">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-16">

            {/* IMAGE GALLERY */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Gallery
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[turf.image, turf.image, turf.image, turf.image].map(
                  (img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt="turf"
                      className="rounded-xl object-cover h-40 w-full"
                    />
                  )
                )}
              </div>
            </div>

            {/* FACILITIES */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Facilities
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
                <span>💡 Flood Lights</span>
                <span>🚗 Parking</span>
                <span>🚻 Washroom</span>
                <span>🥤 Drinking Water</span>
                <span>🏏 Practice Nets</span>
                <span>🪑 Seating Area</span>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                About this turf
              </h2>
              <p className="text-gray-400 leading-relaxed">
                This premium cricket turf offers excellent pitch quality,
                professional lighting, and a well-maintained playing surface.
                Ideal for practice sessions, friendly matches, and tournaments.
              </p>
            </div>

            {/* REVIEWS */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">
                Reviews
              </h2>

              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-xl">
                  ⭐⭐⭐⭐⭐
                  <p className="text-gray-300 mt-2">
                    Great turf, excellent lighting and pitch quality.
                  </p>
                  <span className="text-gray-500 text-sm">– Arjun</span>
                </div>

                <div className="bg-white/5 p-4 rounded-xl">
                  ⭐⭐⭐⭐☆
                  <p className="text-gray-300 mt-2">
                    Good place for night matches, parking is convenient.
                  </p>
                  <span className="text-gray-500 text-sm">– Karthik</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-fit sticky top-28">

            <div className="text-3xl font-bold text-green-400">
              ₹{turf.price}
              <span className="text-base text-gray-400"> / hour</span>
            </div>

            <p className="mt-2 text-gray-400 text-sm">
              Popular slots fill fast. Book early.
            </p>

            <button onClick={()=> navigate(`booking/${turf.id}`)}
                    className="mt-6 w-full bg-green-600 hover:bg-green-700 py-3 rounded-xl text-white font-semibold transition"
            >
              Book Now
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TurfDetails;
