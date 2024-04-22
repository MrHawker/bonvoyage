export const metadata = {
  title: 'bonvoyage',
  description: 'All your trip in one place!',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
