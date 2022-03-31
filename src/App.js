import { AppContextProvider } from "./context"
import "./App.css"
import MainPage from "./components/MainPage"
function App() {
  return (
    <AppContextProvider>
      <MainPage />
    </AppContextProvider>
  )
}
// hi here is  a test comment
export default App
