import { data } from "autoprefixer"
import { useState } from "react"
import { useEffect } from "react"
import SingleProduct from "./SingleProduct";

function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]); 

  useEffect(() => {
    fetch('./fakeData.json')
    .then(res => res.json())
    // .then(data => {console.log(data)})
    // .then(data => console.log(data))

    // .then(data => {
    //   setProducts(data)
    // })
    .then(data => setProducts(data))
  },[])


  const handleCart = p => {
    console.log(p)
    const isExist = cart.find((pd) => pd.id == p.id);
    if (!isExist) {
      setCart([...cart, p])
    }
    else{
      alert("Already Exist in Cart")
    }
  }


  const handleDelete = id => {
    // console.log(id)
    const newCart = cart.filter(item => item.id !=id);
    // const newCart = cart.filter(item => item.id =id);
    setCart(newCart);
  }







  // console.log(products)
  // console.log(cart)

  return (
    <>
    <div className="flex gap-2">
      <div className="bg-gray-100 w-[55%] m-2">
        {
          products.map(pd => <SingleProduct product={pd} handleCart={handleCart}></SingleProduct>)
        }
        {/* <div className="w-80 flex flex-col items-center">
          <img className="w-48" src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" alt="" />
          <h1 className="text-2xl font-bold text-center">Test test</h1>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ad suscipit possimus adipisci atque velit unde.</p>
          <div className="flex justify-between gap-16">
            <h1 className="text-2xl font-bold bg-slate-300 rounded">520 $</h1>
            <button className="text-xl font-semibold bg-slate-200 p-2 rounded-xl">Add To Cart</button>
          </div>
        </div> */}
      </div>

      <div className=" bg-gray-300 w-[40%] m-2">
        <h1 className="text-3xl font-bold text-center">This is cart</h1>
        <div className="flex justify-around font-bold p-4">
          <h5>Name</h5>
          <h5>Price</h5>
        </div>

        <div>

          {
            cart.map((item, index) => (
              <div className="flex justify-around items-center space-y-1">
                {/* <p>{index}</p> */}
                <p>{index + 1}</p>
                <h5>{item.title.slice(0,10)}</h5>
                <h5>{item.price}</h5>
                <button onClick={()=>handleDelete(item.id)} className="bg-gray-400 p-1 rounded">Delete</button>
              </div>
            ))
          }

          {/* <div className="flex justify-around">
            <h5>{}</h5>
            <h5>Price</h5>
          </div> */}

        </div>
      </div>
    </div>

    </>
  )
}

export default App
