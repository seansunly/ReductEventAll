import React from 'react'

export default function SportCard({ image, quantity, price, desc, name }) {
  return (
    <div>
      <h1>helo</h1>
      <h1>{quantity}</h1>
      <img src={image} alt="" />
    </div>
  );
}
