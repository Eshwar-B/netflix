import Body from "./components/body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";


function App() {

  return (
    <>
      <div className=''>
        
          <Provider store={appStore}>  <Body />  </Provider>

      </div>

    </>
  )
}

export default App
