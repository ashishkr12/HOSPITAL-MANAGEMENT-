// import {Rings} from 'react-loader-spinner'
import {TailSpin, Rings} from "react-loader-spinner";

const Loading = () => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
        <TailSpin color= '#fff' width={70} height={40} />
    </div>
  )
};

export default Loading;