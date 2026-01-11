import { Link } from "react-router-dom";
import { FiMapPin } from "react-icons/fi";

const TurfCard = ({ turf }) => {
  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-green-500/40 transition">

      <Link to={`/turfs/${turf.id}`}>
        <img
          src={turf.image}
          alt={turf.name}
          className="h-48 w-full object-cover hover:scale-105 transition"
        />
      </Link>

      <div className="p-5">
        <h3 className="text-xl font-semibold text-white">
          {turf.name}
        </h3>

        <a
          href={turf.maplink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-1 text-gray-300 hover:text-green-400 transition"
        >
          <FiMapPin size={16} />
          {turf.location}
        </a>

        <div className="mt-4 flex justify-between items-center">
          <span className="text-green-400 font-bold">
            ₹{turf.price}/hr
          </span>

          <Link
            to={`/turfs/${turf.id}`}
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-white transition"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TurfCard;
