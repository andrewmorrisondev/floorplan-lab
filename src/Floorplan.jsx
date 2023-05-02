import './App.css'
import Kitchen from './Kitchen'
import LivingRoom from './LivingRoom'
import Bedroom from './Bedroom'
import Bath from './Bath'

const Floorplan = (props) => {

  return (
    <>
      <Bedroom bedNum='1' />
      <Bath size='full' />
      <Kitchen />
      <LivingRoom />
      <Bedroom bedNum='2' />
      <Bath size='half'/>
    </>
  )
}

export default Floorplan
