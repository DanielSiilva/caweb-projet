import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../layouts/DefaultLayout/index'


import { Home } from '../pages/Home'
import { NewPlan } from '../pages/NewPlan/NewPlan'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/newPlan" element={<NewPlan/>} />
      </Route>
    </Routes>
  )
}
