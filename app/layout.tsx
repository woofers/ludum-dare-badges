import './global.css'

const RootLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head />
      <body>
        <div id="__next">
          <div className="flex min-h-screen flex-col text-stone-100 bg-zinc-900">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}

export default RootLayout