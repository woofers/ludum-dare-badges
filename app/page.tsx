import Container from 'components/container'
import Options from '../components/options'

const Home: React.FC<Nothing> = () => {
  return (
    <main>
      <Container>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center gap-y-3 my-4">
            <h1 className="text-3xl font-semibold">Ludum Dare Badges</h1>
            <h2 className="text-lg text-zinc-500">SVG badges for Ludum Dare Game Jam results</h2>
          </div>
          <Options />
        </div>
      </Container>
    </main>
  )
}

export default Home