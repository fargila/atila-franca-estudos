
interface GrettingProps {
    name: string
}

const Gretting: React.FC<GrettingProps> = ({ name }) => {
  return (
    <div>
      <p>Olá, {name}!</p>
    </div>
  )
}

export default Gretting
