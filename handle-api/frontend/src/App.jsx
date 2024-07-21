import React from 'react'
import GetData from './FetchingRoute/GetData'

function App() {

 const [error,loading,product]=GetData('/api/product')
 
  return (
    <div>
      <h1>Api example</h1>
      {loading && <h1>Loading ...</h1>}
      <h2>No of data is {product.length}</h2>
     
    </div>
  )
}

export default App
