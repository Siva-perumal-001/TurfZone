import { useState } from "react";
import TurfCard from "../Components/Turfcard";
import { turfs } from "../data/turfs";
import { Link } from "react-router-dom";

const Turfs = () => {
  const [search, setSearch] = useState("");

  const filteredTurfs = turfs.filter((turf) =>
    `${turf.name} ${turf.location}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <section className="relative min-h-screen bg-linear-to-br from-black via-gray-900 to-black py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.12),transparent_60%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6">

      <Link
          to={`/home`}
          className="text-gray-400 hover:text-green-400 transition"
        >
          ← Back to Home
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Explore Turfs
          </h1>
          <p className="mt-4 text-gray-400">
            Search and find the perfect turf for your next match
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-16">
          <input
            type="text"
            placeholder="Search by turf name or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)} 
            className="w-full px-5 py-4 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:border-green-500 transition"
          />
        </div>

        {filteredTurfs.length > 0 ? (
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {filteredTurfs.map((turf) => (
              <TurfCard key={turf.id} turf={turf} /> 
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400">
            No turfs found matching your search
          </p>
        )}

      </div>
    </section>
  );
};

export default Turfs;
