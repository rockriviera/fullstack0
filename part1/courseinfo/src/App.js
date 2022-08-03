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

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


  return (
    <div>
      <Header course={course} />
      <Content part={[parts[0].name,parts[1].name,parts[2].name]}  exercises={[parts[0].exercises,parts[1].exercises,parts[2].exercises]} />
      <Total nbrExercises={[parts[0].exercises,parts[1].exercises,parts[2].exercises]}/>
    </div>
  )
}

export default App