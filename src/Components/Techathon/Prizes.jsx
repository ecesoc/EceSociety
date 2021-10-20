import React from "react";

export default function Prizes() {
  return (
    <div>
      <h1 className="Prize-list-title">Prizes(For Each Domain)</h1>
      <div className="prize-area">
        <ul className="prizes">
          <li>1st Prize- worth Rs. 25k with certificates</li>
          <li>2nd Prize- worth Rs. 22k with certificates</li>
          <li>3rd Prize- worth Rs. 20k with certificates</li>
        </ul>
        <h2>
          NOTE-All the winners will get a chance for internship opportunities
          after clearing the interview round.
        </h2>
        <h2>
          {" "}
          Rest all will get certificates and course coupons worth Rs 2k on
          Udemy.
        </h2>
      </div>
    </div>
  );
}
