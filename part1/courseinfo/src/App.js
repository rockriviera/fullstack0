const Header=(props)=>{
  return(
  <h1>{props.course}</h1>
  )
}  

const Part=(props)=>{
  return(
    <p>{props.partnbr} {props.exnbr}</p>
  )
}
const Content=(props)=>{
    return(
    <>
    <Part partnbr={props.part[0]} exnbr={props.exercises[0]}/>
    <Part partnbr={props.part[1]} exnbr={props.exercises[1]}/>
    <Part partnbr={props.part[2]} exnbr={props.exercises[2]}/>
    </>
    )
  }

  const Total = (props) => {
    return(<p>Number of exercises {props.nbrExercises[0]+props.nbrExercises[1]+props.nbrExercises[2]}</p>
    )
  }
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


  return (
    <div>
      <Header course={course} />
      <Content part={[part1,part2,part3]}  exercises={[exercises1,exercises2,exercises3]} />
      <Total nbrExercises={[exercises1, exercises2, exercises3]}/>
    </div>
  )
}

export default App