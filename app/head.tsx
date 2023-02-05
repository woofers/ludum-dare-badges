const options = { precedence: 'default' } as any

const Head: React.FC<{}> = () => (
  <>
    <title>ludum-dare-badges</title>
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, viewport-fit=cover"
    />
    <meta name="description" content="SVG & PNG badges for Ludum Dare Game Jam results" />
    <meta name="robots" content="noindex, nofollow" />
    <link rel="icon" href="/favicon.ico" />
    <link
      {...options}
      rel="stylesheet"
      href="https://rsms.me/inter/inter.css"
    />
  </>
)

export default Head