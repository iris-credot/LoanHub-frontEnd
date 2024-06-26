import { FaRegSun, FaTachometerAlt, FaChevronRight, FaWrench, FaStickyNote, FaRegChartBar, FaRegCalendarAlt, FaChevronLeft,FaBolt } from 'react-icons/fa';

function Manager() {
  return (
    <div className='flex'>
      <div className="bg-red-300  p-8 ">
        <div className="px-4 py-8 flex items-center justify-center border-gray-300 border-opacity-30 border-[1px]">
          <h1 className="text-white text-2xl leading-6 font-extrabold cursor-pointer">
            Manager Panel
          </h1>
        </div>
        
        <div className="flex items-center gap-4 py-4 border-b-[1px] border-gray-300 border-opacity-30">
          <FaTachometerAlt color="white" />
          <p className="text-lg font-bold text-white">Dashboard</p>
        </div>

        <div className="pt-4 border-b-[1px] border-gray-300 border-opacity-30">
          <p className="text-xs font-extrabold leading-6 text-white opacity-40">INTERFACE</p>
          
          <div className="flex items-center justify-between gap-4 cursor-pointer py-4">
            <div className="flex items-center gap-4">
              <FaRegSun color="white" />
              <p className="text-lg leading-6 font-normal text-white">Pages</p>
            </div>
            <FaChevronRight color="white" />
          </div>

          <div className="flex items-center justify-between gap-4 cursor-pointer py-4">
            <div className="flex items-center gap-4">
              <FaRegChartBar color="white" />
              <p className="text-lg leading-6 font-normal text-white">Charts</p>
            </div>
            <FaChevronRight color="white" />
          </div>
        </div>

        <div className="pt-4 border-b-[1px] border-gray-300 border-opacity-30">
          <p className="text-xs font-extrabold leading-6 text-white opacity-40">ADDONS</p>
          
          <div className="flex items-center justify-between gap-4 cursor-pointer py-4">
            <div className="flex items-center gap-4">
              <FaRegCalendarAlt color="white" />
              <p className="text-lg leading-6 font-normal text-white">Tables</p>
            </div>
            <FaChevronRight color="white" />
          </div>
          <div className="flex items-center justify-between gap-4 cursor-pointer py-4">
            <div className="flex items-center gap-4">
              <FaStickyNote color="white" />
              <p className="text-lg leading-6 font-normal text-white">Components</p>
            </div>
            <FaChevronRight color="white" />
          </div>

          <div className="flex items-center justify-between gap-4 cursor-pointer py-4">
            <div className="flex items-center gap-4 justify-center ">
              <FaWrench color="white" />
              <p className="text-lg leading-6 font-normal text-white">Utilities</p>
            </div>
            <FaChevronRight color="white" />
          </div>
        </div>
        <div className='flex items-center justify-center p-[15px]'>
        <div className='h-[40px] w-[40px] bg-[#c13c7a] rounded-full  flex items-center justify-center cursor-pointer'>
          <FaChevronLeft color='white'/>
        </div>
      </div>
      <div className='bg-[#c13c7a] mt-[15px] flex item-center justify-center flex-col py-[15px] px-10px] gap-[15px] rounded-[3px]'>
<FaBolt color="white"/>
<p className='text-[12px] leading-[18px] font-normal text-gray-800 text-center'>loremm ipdoihgfxcvbnm,bgfghjknbvcvbnm,</p>
<button className='bg-green-700 text-white flex items-centr justify-center h-[30px] w-full rounded-3px text-[14px] leading-[21px] font-normal'>Upgrade to prots</button>

      </div>
      </div>
      </div>

  );
}

export default Manager;