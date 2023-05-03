import Oven from './Oven'
import Sink from './Sink'

const Kitchen = (props) => {
  return (
    <>
      <div>
        <h2>Kitchen</h2>
        <div>
          <Oven />
          <Sink />
        </div>
      </div>
    </>
  )
}

export default Kitchen
