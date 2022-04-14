import { AppContextProvider } from "./context"
import MainPage from "./components/MainPage"

function App() {
  return (
    <AppContextProvider>
      <MainPage />
    </AppContextProvider>
  )
}

export default App
