import { Gear, Play, Stop } from "@phosphor-icons/react";

function App() {

  return (
    <div className="app-container h-100 w-100 shadow-md">
      <div className="title-bar py-2 z-3">

      </div>
      <div className="app-window h-100 w-100 pe-2" style={{ paddingTop: "2.125rem"}}>
        <div className="d-flex">
          <button className="btn ms-auto">
            <Gear size={28} color="#fff" />
          </button>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-white" style={{ fontSize: "6rem" }}>30:00</h1>
          <div>
            <button className="btn me-2">
              {/* <Pause size={32} color="#fff" /> */}
              <div className="p-2 bg-success rounded-circle">
                <Play size={48} color="#fff" />
              </div>
            </button>
            <button className="btn">
              <Stop size={48} color="#fff" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
