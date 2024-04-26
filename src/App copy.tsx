
import Sidebar from "./components/Sidebar"
import About from "./components/About"


function App() {
  

  return (
    <main className="my-[12px] mx-[15px] mb-[75px] min-w-[259px] lg:mb-[60px] md1:mb-[100px] md1:mt-[60px]">
      <Sidebar />

      {/* Main Content */}
      <div className="lg:relative lg:w-max mx-auto">

        {/* Nav Goes Here */}

        <About />
      </div>


    </main>
  )
}

export default App
