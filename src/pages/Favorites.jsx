import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import { removeFavProduct } from '../features/productSlice'
import { ToastContainer, toast } from "react-toastify";
import { Link } from 'react-router-dom';

const Favorites = () => {
    const {favProducts} = useSelector(state=> state.product)
const dispatch = useDispatch()
    const removeBtn = (id) => {
        if(id){
            dispatch(removeFavProduct(id))
             toast("Product removed!")
        }else{
            toast.error("Error removing product!")
        }
    }

  return <>

     <div className="max-w-5xl mx-auto pt-16 min-h-screen">
     <ToastContainer/>
        <h1 className="text-3xl lg:py-5 px-5 pb-4">Favorites Products</h1>
        {favProducts.length === 0 && 
        <div className='text-2xl pt-6 flex flex-col gap-4 items-center justify-center text-gray-600'>
      <p>No Products in Favorites </p>  
        <Link to="/" className='px-3 py-2 bg-gray-200 text-gray-900 text-sm inline'>
        Add Products To Favorites</Link></div>}
         <div className=" flex flex-wrap gap-5 justify-center mx-5 md:mx-0">
          {favProducts?.map((product) => (
            <ProductCard product={product} key={product.id} removeBtn={() => removeBtn(product.id)}/>
          ))}
        </div>
        </div>
  </>
}

export default Favorites