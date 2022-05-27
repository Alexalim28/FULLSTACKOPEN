const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercice={props.exercice1}/>
      <Part part={props.part2} exercice={props.exercice2}/>
      <Part part={props.part3} exercice={props.exercice3}/>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercice}
    </p>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.total}</p>
  )
}

function App() {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1}
              part2={part2}
              part3={part3}
              exercice1={exercises1}
              exercice2={exercises2}
              exerciec3={exercises3}
      />
      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App;
