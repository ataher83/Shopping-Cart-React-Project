

const SingleProduct = ({product, handleCart}) => {
    // console.log(product)
    // console.log(handleCart)
    return (
        <div className="w-80 flex flex-col items-center">
          <img className="w-48" src={product.image} alt="" />
          <h1 className="text-2xl font-bold text-center">{product.title.slice(0,10)}</h1>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ad suscipit possimus adipisci atque velit unde.</p>
          <div className="flex justify-between gap-16">
            <h1 className="text-2xl font-bold bg-slate-300 rounded">{product.price} $</h1>
            {/* e না লিখলেও সমস্যা নাই  */}
            <button onClick={(e) => handleCart(product)} className="text-xl font-semibold bg-slate-200 p-2 rounded-xl">Add To Cart</button>
          </div>
        </div>
    );
};

export default SingleProduct;