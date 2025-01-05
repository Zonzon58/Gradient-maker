 import { useSelector } from "react-redux";
 import getGradientCSSValue from "../utils/getGradientCSSValue";




export default function Gradient() {

  const gradientValue = useSelector(state => state.gradient)

  return (
    <div style={{backgroundImage: getGradientCSSValue(gradientValue).slice(0, -1)}} className='w-1/2 border-4 border-slate-200 '></div>
  )
}
