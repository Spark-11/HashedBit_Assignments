import React from "react";
import { useLocation } from "react-router-dom";

const BookingConfirmation = () => {
  const { state } = useLocation();

  return (
    <div className="flex flex-col justify-center items-center w-96 h-96 m-auto gap-3 my-9 bg-orange-300 rounded-md">
      <h2 className="text-3xl font-bold">Booking Confirmed✅</h2>
      <div className="text-lg"><p>Your booking ID: <strong>{state.bookingId}</strong></p>
      <p><strong>Name:</strong> {state.name}</p>
      <p><strong>Email:</strong> {state.email}</p>
      <p><strong>Mobile:</strong> {state.mobile}</p></div>
    </div>
  );
};

export default BookingConfirmation;
