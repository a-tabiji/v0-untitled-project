import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans_JP } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "At Ima（あっといま） | その場で残す、家族の思い出",
  description:
    "At Ima（あっといま）は、子育て中の20-30代家族を中心とした、アクティビティを楽しみながら思い出を残したい方向けの新しい写真サービス。体験に集中しながらも、その瞬間をプロのカメラマンが自然な形で残します。",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
