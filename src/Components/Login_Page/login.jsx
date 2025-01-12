import img from '/src/assets/image.png';

export default function Login() {
  return (
    <div className=" bg-gray-600 flex justify-center items-center h-screen ">

      <div className="rounded-3xl flex h-[80%] w-[80%] shadow-2xl">

        {/* college intro */}
        <div className= "font-serif text-black  bg-white w-1/2 flex flex-col justify-center items-center">
          <img src={img} alt="College img" className="w-52 h-52" />
          <span>Welcome To</span>
          <span className="text-blue-600 italic">Hope Foundation</span>
          <span className='text-xl'>INTERNATIONAL INSTITUTE</span>
          <span className='text-xl'>OF</span>
          <span className='text-xl'>INFORMATION TECHNOLOGY</span>
          <span>HINJAWADI, PUNE</span>
          <a href="https://www.isquareit.edu.in/" className='underline text-blue-600'>isquareit.edu</a>
        </div>

        {/* login feild */}
        <div className="bg-red-800 w-1/2 flex flex-col justify-center items-center font-sans ">
          <span className='text-xl'>Login As</span>
          <input type="text" />
          <input type="password" name="" id="" />
          <button> Login </button>
        </div>
      </div>
    </div>
  );
}
