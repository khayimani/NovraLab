"use client"

export default function PaddleCheckoutButton({ priceId, label = "Get Started" }) {
    function handleCheckout() {
        if (typeof window === "undefined" || !window.Paddle) {
            alert("Payment system is loading — please try again in a moment.")
            return
        }

        window.Paddle.Checkout.open({
            items: [{ priceId, quantity: 1 }],
        })
    }

    return (
        <button onClick={handleCheckout} className="pricing-cta">
            {label}
        </button>
    )
}
