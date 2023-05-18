import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Checkout = () => {
  const { _id, title, price } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "unregistered";
    const phone = form.phone.value;
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message,
    };

    fetch("https://69-genius-car-server.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("genius-token")}`,
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Order placed Successfully");
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <form onSubmit={handlePlaceOrder}>
        <h2 className="text-4xl">You are about to order{title} </h2>
        <h4 className="text-4xl">Price:{price} </h4>
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="input input-ghost w-full input-bordered"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="input input-ghost w-full input-bordered"
          />
          <input
            type="text"
            name="phone"
            placeholder="Your Phone"
            className="input input-ghost w-full input-bordered"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            defaultValue={user?.email}
            className="input input-ghost w-full input-bordered "
            readOnly
          />
        </div>
        <textarea
          name="message"
          className=" mt-4 textarea textarea-bordered h-24 w-full"
          placeholder="Your Message"
          required
        ></textarea>
        <input className="mt-4 btn" type="submit" value="Place Your Order" />
      </form>
    </div>
  );
};

export default Checkout;
