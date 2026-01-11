import { Link } from "react-router-dom";
import { useState } from "react";

const MyBooking = () => {

const [bookings, setBookings ]= useState(JSON.parse(localStorage.getItem("bookings")) || []);

const cancelBooking = (id)=>{
    const updated = bookings.filter(
        (booking) => booking.id !== id
    );

    setBookings(updated);

    localStorage.setItem("bookings", JSON.stringify(updated))
}

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.12),transparent_60%)]"></div>

      <div className="relative max-w-5xl mx-auto px-6">

        <Link
          to={`/home`}
          className="text-gray-400 hover:text-green-400 transition"
        >
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-white mb-10 text-center">
          My Bookings
        </h1>

        {bookings.length === 0 ? (
          <p className="text-center text-gray-400">
            You haven’t booked any turfs yet.
          </p>
        ) : (
          <div className="space-y-6">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
              >
                <h2 className="text-xl font-semibold text-white">
                  {booking.turfName}
                </h2>

                <div className="mt-3 grid grid-cols-2 gap-4 text-gray-300 text-sm">
                  <span>Date:</span>
                  <span>{booking.date}</span>

                  <span>Time:</span>
                  <span>{booking.slot}</span>

                  <span>Duration:</span>
                  <span>{booking.hours} hour(s)</span>

                  <span>Total:</span>
                  <span className="text-green-400 font-bold">
                    ₹{booking.totalPrice}
                  </span>
                </div>

                <div className="mt-6 flex justify-between items-center">
                  <span className="text-green-400 text-sm">
                    ✔ Confirmed
                  </span>

                  <button
                    onClick={() => cancelBooking(booking.id)}
                    className="text-red-400 hover:text-red-500 transition text-sm cursor-pointer"
                  >
                    Cancel Booking
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 text-center">
          <Link
            to="/turfs"
            className="text-green-400 hover:underline"
          >
            Book another turf →
          </Link>
        </div>

      </div>
    </section>
  )
}

export default MyBooking