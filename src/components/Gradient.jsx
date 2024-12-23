 import { useSelector } from "react-redux";




export default function Gradient() {

  const gradientValues = useSelector(state => state.gradient)

  return (
    <div className='w-1/2 border-4 border-slate-200 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 '>Gradient</div>
  )
}
