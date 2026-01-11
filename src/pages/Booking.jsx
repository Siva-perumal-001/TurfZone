import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { turfs } from "../data/turfs";

const timeSlots = [
  "6:00 AM",
  "7:00 AM",
  "8:00 AM",
  "9:00 AM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
];

const Booking = () => {
  const { id } = useParams();
  const turf = turfs.find((t) => t.id === Number(id));

  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
  const [hours, setHours] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  if (!turf) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Turf not found
      </div>
    );
  }

  const totalPrice = turf.price * hours;
  const navigate = useNavigate();

  const handleBook = () => {
    const booking = {
      id: Date.now(),
      turfId: turf.id,
      turfName: turf.name,
      date,
      slot,
      hours,
      totalPrice,
    };

    const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    localStorage.setItem(
      "bookings",
      JSON.stringify([...existingBookings, booking])
    );

    setShowSuccess(true);

    setTimeout(() => {
      navigate("/my-bookings");
    }, 2000);
  }

  return (
    <section className="relative min-h-screen bg-linear-to-br from-black via-gray-900 to-black py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.12),transparent_60%)]"></div>

      <div className="relative max-w-5xl mx-auto px-6">

        {/* BACK */}
        <Link
          to={`/turfs/${turf.id}`}
          className="text-gray-400 hover:text-green-400 transition"
        >
          ← Back to Turf
        </Link>

        {/* TITLE */}
        <h1 className="mt-6 text-4xl font-bold text-white">
          Book {turf.name}
        </h1>

        {/* CONTENT */}
        <div className="mt-10 grid md:grid-cols-2 gap-12">

          {/* LEFT – FORM */}
          <div className="space-y-8">

            {/* DATE */}
            <div>
              <label className="block mb-2 text-gray-300">
                Select Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-white/10 border border-white/10 px-4 py-3 rounded-xl text-white outline-none focus:border-green-500"
              />
            </div>

            {/* TIME SLOTS */}
            <div>
              <label className="block mb-2 text-gray-300">
                Select Time Slot
              </label>
              <div className="grid grid-cols-4 gap-3">
                {timeSlots.map((t) => (
                  <button
                    key={t}
                    onClick={() => setSlot(t)}
                    className={`py-2 rounded-lg text-sm transition ${
                      slot === t
                        ? "bg-green-600 text-white"
                        : "bg-white/10 text-gray-300 hover:bg-white/20"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* DURATION */}
            <div>
              <label className="block mb-2 text-gray-300">
                Duration (hours)
              </label>
              <select
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full bg-white/10 border border-white/10 px-4 py-3 rounded-xl text-white outline-none cursor-pointer"
              >
                <option className="text-black" value={1}>1 Hour</option>
                <option className="text-black" value={2}>2 Hours</option>
                <option className="text-black" value={3}>3 Hours</option>
                <option className="text-black" value={4}>4 Hours</option>
              </select>
            </div>
          </div>

          {/* RIGHT – SUMMARY */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-fit">

            <h2 className="text-xl font-semibold text-white mb-6">
              Booking Summary
            </h2>

            <div className="space-y-4 text-gray-300 text-sm">
              <div className="flex justify-between">
                <span>Turf</span>
                <span>{turf.name}</span>
              </div>

              <div className="flex justify-between">
                <span>Date</span>
                <span>{date || "Not selected"}</span>
              </div>

              <div className="flex justify-between">
                <span>Time</span>
                <span>{slot || "Not selected"}</span>
              </div>

              <div className="flex justify-between">
                <span>Duration</span>
                <span>{hours} hour(s)</span>
              </div>

              <div className="border-t border-white/10 pt-4 flex justify-between font-bold text-green-400">
                <span>Total</span>
                <span>₹{totalPrice}</span>
              </div>
            </div>

            <button
              disabled={!date || !slot}
              onClick={handleBook}
              className="mt-6 w-full bg-green-600 hover:bg-green-700 py-3 rounded-xl text-white font-semibold transition disabled:opacity-50"
            >
              Confirm Booking
            </button>

            {showSuccess && (
              <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
                <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center max-w-sm">
                  <h2 className="text-2xl font-bold text-green-400">
                    Booking Confirmed 🎉
                  </h2>
                  <p className="mt-3 text-gray-300">
                    Your turf has been booked successfully.
                  </p>
                  <p className="mt-2 text-gray-400 text-sm">
                    Redirecting to My Bookings...
                  </p>
                </div>
              </div>
            )}


          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
