import Body from "./components/Body";
import "./App.css"
import About from "./components/About";

const App = () => {

  return (
    <>
      <div className="w-full overflow-hidden">
        <Body />
        <About/>
      </div>
    </>
  )
}

export default App