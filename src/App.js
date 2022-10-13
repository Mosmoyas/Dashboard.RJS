import './App.css';
import { Sidebar } from "./parts/index"
import { Content } from "./parts/index"



function App() {
  return (
    <>
      <div className='page d-flex'>
        <Sidebar />
        <Content />

      </div>

    </>
  )
}

export default App;
