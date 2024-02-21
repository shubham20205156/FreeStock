import { React, useContext, useEffect } from 'react'
import balanceContext from './Contexts/balanceContext'
const About = () => {
  const a = useContext(balanceContext);
  useEffect(() => {
    a.updateBalance(666);
  }, [])

  return (
    <div>
      hi guys {a.name} here
    </div>
  )
}

export default About
