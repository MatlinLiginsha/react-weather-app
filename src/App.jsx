import React from 'react'
import WeatherappComponent from './components/WeatherappComponent/WeatherappComponent'
import './App.css'
import { QueryClientProvider,QueryClient } from 'react-query'
const App = () => {
  const queryClient=new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
          <WeatherappComponent/>
    </QueryClientProvider>
  
  )
}

export default App