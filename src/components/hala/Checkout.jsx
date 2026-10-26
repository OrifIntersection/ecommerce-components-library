import React from 'react';
import './CheckoutComponents/Checkout.css';
export function Checkout({ }) {

  return (
    <div className="checkout">
      <div className="checkoutFormPanel">
        <form>
          <div className="checkoutFormSection">
            Contact information
            <div className="checkoutFormField">
              <label for="email">Email address</label>
              <input type="text" name="email" id="email" required />
            </div>
          </div>
          <div className="checkoutFormSection">
            Payment details
            <div className="checkoutFormField">
              <label for="cardNumber" >Card number</label>
              <input type="text" name="cardNumber" id="cardNumber" required />
            </div>
            <div className="checkoutFormFieldRow">
              <div className="checkoutFormField">
                <label for="cardDate" >Expiration date</label>
                <input type="text" name="cardDate" id="cardDate" placeholder="(MM/YY)" required />
              </div>
              <div className="checkoutFormField">
                <label for="cardCcv" >CVC</label>
                <input type="text" name="cardCcv" id="cardCcv" required />
              </div>
            </div>
          </div>
          <div className="checkoutFormSection">
            Shipping address
            <div className="checkoutFormField">
              <label for="shipAddress">Address</label>
              <input type="text" name="shipAddress" id="shipAddress" required />
            </div>
            <div className="checkoutFormFieldRow">
              <div className="checkoutFormField">
                <label for="shipAddress">City</label>
                <input type="text" name="shipCity" id="shipCity" required />
              </div>
              <div className="checkoutFormField">
                <label for="shipAddress">Canton</label>
                <input type="text" name="shipCanton" id="shipCanton" required />
              </div>
              <div className="checkoutFormField">
                <label for="shipAddress">Postal code</label>
                <input type="text" name="shipPost" id="shipPost" required />
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="checkoutRecapPanel">
        <div className="checkoutRecapArticles">
          Your order
          <div className="checkoutRecapArticle">
          </div>
          <div className="checkoutRecapArticle">
          </div>
          <div className="checkoutRecapArticle">
          </div>
        </div>
        <div className="checkoutRecapTotals">
          <div className="checkoutSubtotal">Subtotal</div>
          <div className="checkoutShipping">Shipping</div>
          <div className="checkoutTotal">Total</div>
        </div>
      </div>
    </div>
  );
}
