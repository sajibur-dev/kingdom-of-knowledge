import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase";

const Checkout = () => {
  const [user] = useAuthState(auth);

  const [welcomeMessage, setWelcomeMessage] = useState("");

  const handleCheckoutForm = (e) => {
    e.preventDefault();
    setWelcomeMessage(`Thanks's for booking`);
  };
  return (
    <div className="md:flex md:justify-center md:items-center my-20 ">
      <div>
          {welcomeMessage &&  <p className="my-16 text-6xl text-blue-600 ">{welcomeMessage}</p>}
        <form className="space-y-5" onSubmit={handleCheckoutForm}>
          <input
            className="block border-2 border-gray-700 leading-8 rounded-md px-5 outline-none"
            placeholder="enter your name"
            type="text"
            value={user.displayName}
            onFocus={() => setWelcomeMessage("")}
            required
          />
          <input
            className="block border-2 border-gray-700 leading-8 rounded-md px-5 outline-none"
            type="email"
            name="email"
            id="email"
            value={user.email}
            onFocus={() => setWelcomeMessage("")}
            readOnly
          />
          <input
            className="block border-2 border-gray-700 leading-8 rounded-md px-5 outline-none"
            type="number"
            name="phone"
            id="phone"
            onFocus={() => setWelcomeMessage("")}
            placeholder="enter your phone number"
            required
          />
          <textarea
            className="border-2 border-gray-600 rounded-md outline-none p-5"
            name="address"
            id="address"
            cols="50"
            rows="5"
            onFocus={() => setWelcomeMessage("")}
            required
            placeholder="enter address"
          ></textarea>
          <input
            className="block border-2 border-gray-700 leading-8 rounded-md px-7 outline-none cursor-pointer py-2"
            type="submit"
            value="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Checkout;
