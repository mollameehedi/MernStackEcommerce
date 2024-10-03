import React from 'react'
import Image from 'next/image'

async function  getData() {
    const res = await fetch('http://localhost:8000/api/v1/product/allproducts')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

const Product = async () => {
    const data = await getData()
console.log(data);

  return (
    <>
<ul>
      {
        data.map(item => (
<>

<li>Name : {item.name} owner:{item.ownerid?.name}</li>
<Image
      src={`http://localhost:8000${item.image}`}
      width={300}
      height={300}
      alt="Picture of the author"
    />
          <li dangerouslySetInnerHTML={{ __html:item.description }}></li>
          <h2>variants</h2>
        <div className="shadow">
          {item.variantsId.map((vitem) => (
            <span className="bg-violet-700 p-2 inline-block">{vitem.name}</span>
          ))}
        </div>
</>
        ))
      }
    </ul>
    </>
  )
}

export default Product