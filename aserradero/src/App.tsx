import { useEffect, useState } from 'react'
import './App.css'
import {Button} from './components'
import { useFetch } from './hooks/useFetch';
import { Menu } from './components/Navigation/Menu/Menu';

interface Data {
  id: number;
  name: string;
  username:string
  email: string;
}

const url = 'https://jsonplaceholder.typicode.com/users';
//Componente funcional
function App() {  
  //Desestructuramos los valores que nos devuelve el hook useFetch
  const {data, loading, error} = useFetch<Data>(url);  

  if (loading) {
    return <div>Loading...</div>
  }
    
  if (error) {
    return <div>Error: {error.message}</div>
  }
  return (    
    <div>
      <Menu/>           
    </div>
  )    
}

export default App
