"use client"

import { useEffect } from "react"

export default function PaddleInit() {
    useEffect(() => {
        let attempts = 0
        const MAX_ATTEMPTS = 15

        function trySetup() {
            if (typeof window === "undefined") return

            if (window.Paddle) {
                const token = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN
                if (!token || token === "YOUR_TOKEN_HERE") return

                if (process.env.NEXT_PUBLIC_PADDLE_ENV === "sandbox") {
                    window.Paddle.Environment.set("sandbox")
                }

                window.Paddle.Initialize({ token })
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
