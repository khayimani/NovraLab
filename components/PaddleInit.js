"use client"

import { useEffect } from "react"

export default function PaddleInit() {
    useEffect(() => {
        let attempts = 0
        const MAX_ATTEMPTS = 15 // 15 × 200 ms = 3 s max wait

        function trySetup() {
            if (typeof window === "undefined") return

            if (window.Paddle) {
                const vendorId = parseInt(
                    process.env.NEXT_PUBLIC_PADDLE_VENDOR_ID || "0",
                    10
                )

                // Skip initialization if no real vendor ID is configured yet.
                // parseInt("YOUR_PADDLE_VENDOR_ID") returns NaN which causes Paddle to throw a runtime error.
                if (!vendorId || isNaN(vendorId)) return

                // Switch to sandbox for testing. Comment this line for production.
                if (process.env.NEXT_PUBLIC_PADDLE_ENV === "sandbox") {
                    window.Paddle.Environment.set("sandbox")
                }

                window.Paddle.Setup({ vendor: vendorId })
                return
            }

            attempts++
            if (attempts < MAX_ATTEMPTS) {
                setTimeout(trySetup, 200)
            }
        }

        trySetup()
    }, [])

    return null
}
