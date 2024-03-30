import React from "react";

function Payment() {
  let amount = 0.0;
  return (
    <div className="payment">
      <h1>Payment</h1>
      <form action="" method="post">
        <div>
          <label htmlFor="cardName">Card name</label>
          <input type="text" id="cardName" name="cardName" />
        </div>
        <div>
          <label htmlFor="cardNumber">Card number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            placeholder="0000 0000 0000 0000"
          />
        </div>
        <div>
          <label htmlFor="cardExpDate">Card expiration date</label>
          <input
            type="text"
            id="cardExpDate"
            name="cardExpDate"
            placeholder="MM/YY"
          />
        </div>

        <input type="submit" value={`Charge ${amount}`} />
      </form>
    </div>
  );
}

export default Payment;
