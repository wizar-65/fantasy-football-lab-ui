import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./layouts/MainLayout/MainLayout"
import { Home, Rankings, Scores, Stats, TradeInator } from "./pages"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="stats" element={<Stats />} />
          <Route path="scores" element={<Scores />} />
          <Route path="rankings" element={<Rankings />} />
          <Route path="/trade-inator" element={<TradeInator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
