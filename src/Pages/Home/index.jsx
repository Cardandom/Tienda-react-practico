import { useEffect, useState } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'

function Home() {
  const [items, setItems] = useState(null)
  useEffect (()=> {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(responde => responde.json())
      .then(data => setItems(data))
  },[])

  return (
    <Layout>
      Home
      <div className="grid grid-cols-4 gap-10 w-full max-w-screen-lg">
      {
        items?.map(item=> (
          <Card key={item.id} data={item}/>
        ))
      }
      </div>
      <Card/>
    </Layout>
  )
}

export default Home