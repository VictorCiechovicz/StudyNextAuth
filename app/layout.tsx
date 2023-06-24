import './globals.css'
import { Provider } from './components/Provider'
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <main className="flex min-h-screen flex-col items-center justify-between p-20">
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}
