import {IoIosArrowDown} from 'react-icons/io';
import {AiFillStar} from 'react-icons/ai';
import {FiCheck} from 'react-icons/fi';
import "slick-carousel/slick/slick.css";
import Slider from "react-slick"; 
import {FaArrowLeft,FaArrowRight} from 'react-icons/fa';
import {AiOutlinePlus} from 'react-icons/ai';
import {BsTwitter} from 'react-icons/bs';
import {FaLinkedinIn,FaPinterestP} from 'react-icons/fa';
import CountUp from 'react-countup';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className='text-3xl border-2 p-2 w-12 h-12 items-center border-[#CECECE] text-[#CECECE] rounded-full hover:bg-secondary hover:text-white hover:border-white transition-all absolute top-[120%] right-[40%] cursor-pointer '
      onClick={onClick}
    ><FaArrowRight /></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
    className='text-3xl border-2 p-2 w-12 h-12 items-center border-[#CECECE] text-[#CECECE] rounded-full hover:bg-secondary hover:text-white hover:border-white transition-all absolute top-[120%] left-[40%] cursor-pointer '
      onClick={onClick}
    ><FaArrowLeft /></div>
  );
}
function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay:true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: dots => (
      <div>
        <ul className='flex gap-2 absolute top-[125%] left-1/2 -translate-x-1/2 innovattse_dots'> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className='text-[0] w-3 h-3 rounded-full bg-[#CECECE] cursor-pointer'>
        {i + 1}
      </div>
    )
  };
  return (
    <>
      <nav className='absolute top-0 left-0 w-full py-8'>
        <div className="container flex justify-between items-center">
          <div>
            <img src="logo.png" alt="" />
          </div>
          <ul className="flex gap-12 font-menu font-semibold text-lg text-white">
            <li><a className='flex items-center gap-2'><span>Home</span> <IoIosArrowDown /></a></li>
            <li><a>About</a></li>
            <li><a className='flex items-center gap-2'><span>Service</span> <IoIosArrowDown /></a></li>
            <li><a className='flex items-center gap-2'><span>Pages</span> <IoIosArrowDown /></a></li>
            <li><a>News</a></li>
          </ul>
          <div className="flex gap-9 font-primary text-white ">
            <button className='font-semibold text-xl'>Login</button>
            <button className='py-4 px-7 bg-white text-primary font-medium text-lg rounded-md'>Free Consultation</button>
          </div>
        </div>
      </nav>
    {/* ==========================  Menu part end  ========================  */}
  <section className="bg-[url('banner.png')] bg-no-repeat bg-cover bg-center pt-48">
    <div className="container flex">
      <div className='w-3/5'>
        <h1 className='font-primary leading-[74px] text-6xl font-semibold text-white w-[644px]'>We Provide Premium Consulting Service For your Business</h1>
        <p className='font-secondary leading-[34px] text-lg font-normal text-white w-3/5 pt-6 pb-10'>The Premium Consulting Service provides a faster way to process plans, register dealings and create titles.</p>
        <button className='font-primary font-medium text-lg text-white py-4 px-7 border-secondary border-2 rounded-md  relative after:absolute after:w-full after:h-[98%] after:bg-secondary after:bottom-0 after:left-0 z-10 after:-z-10 hover:after:h-0 after:transition-all after:duration-500'>Get Started Now</button>
        <img className=' translate-x-[357px] pb-3' src="arrow.png" alt="" />
        <p className='font-secondary font-normal text-xl text-white pb-16'>Already member of our communty? <span className='text-third font-bold'>Sign in</span></p>
          <div className="item_img flex relative pb-36">
              <div className="item_1 absolute">
                <img src="item-one.png" alt="" />
              </div>
              <div className="item_1 absolute left-[30px]">
                <img src="item-one.png" alt="" />
              </div>
              <div className="item_1 absolute left-[60px]">
                <img src="item-one.png" alt="" />
              </div>
              <div className="item_1 absolute left-[90px] ">
                <img src="item-one.png" alt="" />
              </div>
              <div className=' absolute left-[175px]'>
                <ul className='flex gap-1 text-four items-center'>
                  <li><a className='text-3xl font-bold font-secondary text-third border-r border-border gap-6'>4.5</a></li>
                  <li><a><AiFillStar /></a></li>
                  <li><a><AiFillStar /></a></li>
                  <li><a><AiFillStar /></a></li>
                  <li><a><AiFillStar /></a></li>
                  <li><a><AiFillStar /></a></li>
                </ul>
                <p className='font-secondary text-lg font-normal text-white '>305k Total Review</p>
              </div> 
          </div>
      </div>
      <div className='w-2/5 flex'>
          <img className='translate-x-[5%] items-end '  src="banner_man.png" alt="" />
      </div>
    </div>
  </section>
    {/* =====================   Banner part end   =====================  */}
 <section>
  <div className="container flex pt-40 pb-28 items-center">
    <div className=' w-3/6 translate-x-[8%]'>
      <img className=' w-11/12' src="about.png" alt="" />
    </div>
    <div className=' w-3/6 translate-x-[13%]'>
      <h3 className='font-primary font-semibold text-xl text-secondary pb-2'>ABOUT US</h3>
      <h1 className='text-5xl font-semibold font-primary text-primary'>Welcome to World Best Business Company</h1>
      <p className='font-normal text-lg font-secondary text-fifth pt-5 w-11/12'>We partner with experienced and qualified Accountants, Financial Advisors and Chartered Secretaries to provide</p>
      <ul className='pb-10'>
        <li className='flex items-center gap-3 pt-4 text-lg font-secondary font-normal text-primary'><span><FiCheck /></span> Monthly assesment report</li>
        <li className='flex items-center gap-3 pt-4 text-lg font-secondary font-normal text-primary'><span><FiCheck /></span> Tax planning consultation</li>
        <li className='flex items-center gap-3 pt-4 text-lg font-secondary font-normal text-primary'><span><FiCheck /></span>Montly rent problem solution</li>
      </ul>
      <button className='py-4 px-7 border-2 border-secondary rounded-md font-semibold text-lg font-primary text-primary relative after:absolute after:w-full after:h-[98%] after:bg-secondary after:bottom-0 after:left-0 z-10 after:-z-10 hover:after:h-0 after:transition-all after:duration-500'>Free Consultation</button>
    </div>
  </div>
 </section>
 {/* ===================== Service par start ====================== */}
    <section className='bg-[#FAFAFA]'>
      <div className="container pt-32 pb-64 mb-28">
        <h3 className='text-xl font-primary font-semibold text-secondary pb-2'>SERVICES</h3>
        <div className='flex justify-between'>
          <div>
            <h2 className='font-primary font-semibold text-5xl text-primary w-4/6 pb-12'>Find the service we provide</h2>
          </div>
          <div className='translate-x-[25%]'>
            <p className='font-secondary font-normal text-lg text-fifth w-2/3'>Our consultants have years of experience on the  in success. ​Through the provision of our services.</p>
          </div>
        </div>

      <Slider {...settings}>
        <div>
        <div className='py-10 service-one px-6 mx-4 bg-white'>
            <div className='relative'>
            <div className='animate-spin p-5 bg-secondary w-24 h-24 rounded-full m-auto relative'>
              <span className='w-[128%] h-[128%] border-secondary border-2 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 after:absolute after:w-3 after:h-3 after:rounded-full after:bg-secondary  after:top-[-6px] after:left-1/2'></span>
            </div>
               <img className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="icon_one.png" alt="" />
            </div>
           
            <h4 className=' font-primary font-semibold text-xl leading-7 text-primary w-64 text-center pt-8 pb-4 m-auto'>Grow Your Brand And Business</h4>
            <p className=' font-secondary font-normal text-base text-fifth leading-7 w-[282px] text-center m-auto'>That community can of course lend to sales - that's how brand and business go hand-in-hand</p>
        </div>
        </div>
        <div>
        <div className='py-10 service-two px-6 mx-4  bg-white'>
            <div className='relative'>
            <div className='animate-spin p-5 bg-third w-24 h-24 rounded-full m-auto relative'>
              <span className='w-[128%] h-[128%] border-third border-2 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 after:absolute after:w-3 after:h-3 after:rounded-full after:bg-third  after:top-[-6px] after:left-1/2'></span>
            </div>
               <img className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="icon_two.png" alt="" />
            </div>
           
            <h4 className=' font-primary font-semibold text-xl leading-7 text-primary w-64 text-center pt-8 pb-4 m-auto'>Grow Your Brand And Business</h4>
            <p className=' font-secondary font-normal text-base text-fifth leading-7 w-[282px] text-center m-auto'>That community can of course lend to sales - that's how brand and business go hand-in-hand</p>
        </div>
        </div>
        <div>
        <div className='py-10 service-three px-6 mx-4 bg-white'>
            <div className='relative'>
            <div className='animate-spin p-5 bg-[#2BCCFF] w-24 h-24 rounded-full m-auto relative'>
              <span className='w-[128%] h-[128%] border-[#2BCCFF] border-2 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 after:absolute after:w-3 after:h-3 after:rounded-full after:bg-[#2BCCFF]  after:top-[-6px] after:left-1/2'></span>
            </div>
               <img className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="icon_three.png" alt="" />
            </div>
           
            <h4 className=' font-primary font-semibold text-xl leading-7 text-primary w-64 text-center pt-8 pb-4 m-auto'>Grow Your Brand And Business</h4>
            <p className=' font-secondary font-normal text-base text-fifth leading-7 w-[282px] text-center m-auto'>That community can of course lend to sales - that's how brand and business go hand-in-hand</p>
        </div>
        </div>
        <div>
        <div className='py-10 service-four px-6 mx-4 bg-white'>
            <div className='relative'>
            <div className='animate-spin p-5 bg-[#5D5FEF] w-24 h-24 rounded-full m-auto relative'>
              <span className='w-[128%] h-[128%] border-[#5D5FEF] border-2 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 after:absolute after:w-3 after:h-3 after:rounded-full after:bg-[#5D5FEF]  after:top-[-6px] after:left-1/2'></span>
            </div>
               <img className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="icon_four.png" alt="" />
            </div>
           
            <h4 className=' font-primary font-semibold text-xl leading-7 text-primary w-64 text-center pt-8 pb-4 m-auto'>Grow Your Brand And Business</h4>
            <p className=' font-secondary font-normal text-base text-fifth leading-7 w-[282px] text-center m-auto'>That community can of course lend to sales - that's how brand and business go hand-in-hand</p>
        </div>
        </div>
        <div>
        <div className='py-10 service-five px-6 mx-4 bg-white'>
            <div className='relative'>
            <div className='animate-spin p-5 bg-third w-24 h-24 rounded-full m-auto relative'>
              <span className='w-[128%] h-[128%] border-third border-2 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 after:absolute after:w-3 after:h-3 after:rounded-full after:bg-third  after:top-[-6px] after:left-1/2'></span>
            </div>
               <img className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="icon_two.png" alt="" />
            </div>
           
            <h4 className=' font-primary font-semibold text-xl leading-7 text-primary w-64 text-center pt-8 pb-4 m-auto'>Grow Your Brand And Business</h4>
            <p className=' font-secondary font-normal text-base text-fifth leading-7 w-[282px] text-center m-auto'>That community can of course lend to sales - that's how brand and business go hand-in-hand</p>
        </div>
        </div>
        </Slider>
        </div>
    </section>
{/* ========================== Solution part start ===================== */}
    <section>
      <div className="container flex">
        <div className='w-1/2'>
          <h2 className=' font-primary font-semibold text-5xl text-primary w-3/4 leading-[62px]'>Best Reliable Solution For Your Business</h2>
          <p className=' font-secondary font-normal text-lg text-fifth pt-5 pb-10 w-8/12 leading-[32px]'>We help our clients succeed by creating brand identities, digital experiences, and print materials that communicate clearly, achieve marketing.</p>
          <button className='mb-16 py-4 px-7 text-lg font-primary font-medium text-primary border-2 border-secondary rounded-md relative after:absolute after:w-full after:h-[98%] after:bg-secondary after:bottom-0 after:left-0 z-10 after:-z-10 after:hover:h-0 after:transition-all after:duration-500'>Get Started Now</button>
          <div className='flex'>
            <div className='w-1/2'>
              <h3 className='font-primary font-semibold text-2xl text-primary pb-4 w-[70%] leading-[32px]'>First-class investment solutions</h3>
              <p className='font-secondary font-normal text-base text-fifth leading-[26px] w-64 pb-40'>We can help you with your business strategy, architecture, mapping, and optimisation. </p>
            </div>
            <div>
              <h3 className='font-primary font-semibold text-2xl text-primary pb-4 w-[60%] leading-[32px]'>Building   
              The idea of future</h3>
              <p className='font-secondary font-normal text-base text-fifth leading-[26px] w-64 pb-40'>Offering Performance Driven Partnerships CIBA Specializes In Business Process Outsourcing.</p>
            </div>
          </div>
        </div>

        <div className='w-1/2'>
          <img className='w-11/12' src="/solution_img.png" alt="" />
        </div>
      </div>
    </section>
{/* ========================= Team part start ========================== */}
   <section>
    <div className='bg-[url("/team.png")] pt-20 pb-56'>
      <div>
        <h3 className=' font-primary font-semibold text-xl text-secondary text-center'>OUR TEAM</h3>
        <h2 className=' font-primary font-semibold text-5xl text-white text-center mt-2'>Meet With Expert</h2>
      </div>
    </div>
    <div className="container relative -translate-y-1/3">
      <div className='flex justify-between'>
        <div className='w-fit relative'>
          <img className=' rounded-xl' src="/team-one.png" alt="" />
          <div className='py-5 bg-white hover:bg-third w-3/4 rounded-tr-lg relative -translate-y-3/4 text-center transition-all'>
            <h3 className=' font-primary font-semibold text-lg'>Eleanor Pena</h3>
            <p className=' font-secondary font-normal text-base'>Senior Engineer</p>
          </div>
          <div className=' absolute bottom-28 right-7 w-fit h-fit overflow-y-hidden'>
            <div className='group h-60 flex items-end cursor-pointer'>
              <ul className='flex flex-col gap-3 mb-4 absolute bottom-10 left-0 translate-y-[140%] group-hover:-translate-y-2 transition-all opacity-0 group-hover:opacity-100'>
                <li className=' w-11 h-11 bg-white rounded-full flex items-center justify-center text-primary'><FaPinterestP /></li>
                <li className=' w-11 h-11 bg-white rounded-full flex items-center justify-center text-primary'><FaLinkedinIn /></li>
                <li className=' w-11 h-11 bg-white rounded-full flex items-center justify-center text-primary'><BsTwitter /></li>
              </ul>
              <div className='text-xl w-11 h-11 text-primary bg-white hover:bg-third rounded-full flex items-center justify-center z-50 '>
                <AiOutlinePlus className='group-hover:rotate-45' />
              </div>
            </div>
          </div>
        </div>
        <div className='w-fit relative'>
          <img className=' rounded-xl' src="/team-one.png" alt="" />
          <div className='py-5 bg-white hover:bg-third w-3/4 rounded-tr-lg relative -translate-y-3/4 text-center transition-all'>
            <h3 className=' font-primary font-semibold text-lg'>Eleanor Pena</h3>
            <p className=' font-secondary font-normal text-base'>Senior Engineer</p>
          </div>
          <div className=' absolute bottom-28 right-7 w-fit h-fit overflow-y-hidden'>
            <div className='group h-60 flex items-end cursor-pointer'>
              <ul className='flex flex-col gap-3 mb-4 absolute bottom-10 left-0 translate-y-[140%] group-hover:-translate-y-2 transition-all opacity-0 group-hover:opacity-100'>
                <li className=' w-11 h-11 bg-white rounded-full flex items-center justify-center text-primary'><FaPinterestP /></li>
                <li className=' w-11 h-11 bg-white rounded-full flex items-center justify-center text-primary'><FaLinkedinIn /></li>
                <li className=' w-11 h-11 bg-white rounded-full flex items-center justify-center text-primary'><BsTwitter /></li>
              </ul>
              <div className='text-xl w-11 h-11 text-primary bg-white hover:bg-third rounded-full flex items-center justify-center z-50 '>
                <AiOutlinePlus className='group-hover:rotate-45' />
              </div>
            </div>
          </div>
        </div>
        <div className='w-fit relative'>
          <img className=' rounded-xl' src="/team-one.png" alt="" />
          <div className='py-5 bg-white hover:bg-third w-3/4 rounded-tr-lg relative -translate-y-3/4 text-center transition-all'>
            <h3 className=' font-primary font-semibold text-lg'>Eleanor Pena</h3>
            <p className=' font-secondary font-normal text-base'>Senior Engineer</p>
          </div>
          <div className=' absolute bottom-28 right-7 w-fit h-fit overflow-y-hidden'>
            <div className='group h-60 flex items-end cursor-pointer'>
              <ul className='flex flex-col gap-3 mb-4 absolute bottom-10 left-0 translate-y-[140%] group-hover:-translate-y-2 transition-all opacity-0 group-hover:opacity-100'>
                <li className=' w-11 h-11 bg-white rounded-full flex items-center justify-center text-primary'><FaPinterestP /></li>
                <li className=' w-11 h-11 bg-white rounded-full flex items-center justify-center text-primary'><FaLinkedinIn /></li>
                <li className=' w-11 h-11 bg-white rounded-full flex items-center justify-center text-primary'><BsTwitter /></li>
              </ul>
              <div className='text-xl w-11 h-11 text-primary bg-white hover:bg-third rounded-full flex items-center justify-center z-50 '>
                <AiOutlinePlus className='group-hover:rotate-45' />
              </div>
            </div>
          </div>
        </div>
        <div className='w-fit relative'>
          <img className=' rounded-xl' src="/team-one.png" alt="" />
          <div className='py-5 bg-white hover:bg-third w-3/4 rounded-tr-lg relative -translate-y-3/4 text-center transition-all'>
            <h3 className=' font-primary font-semibold text-lg'>Eleanor Pena</h3>
            <p className=' font-secondary font-normal text-base'>Senior Engineer</p>
          </div>
          <div className=' absolute bottom-28 right-7 w-fit h-fit overflow-y-hidden'>
            <div className='group h-60 flex items-end cursor-pointer'>
              <ul className='flex flex-col gap-3 mb-4 absolute bottom-10 left-0 translate-y-[140%] group-hover:-translate-y-2 transition-all opacity-0 group-hover:opacity-100'>
                <li className=' w-11 h-11 bg-white rounded-full flex items-center justify-center text-primary'><FaPinterestP /></li>
                <li className=' w-11 h-11 bg-white rounded-full flex items-center justify-center text-primary'><FaLinkedinIn /></li>
                <li className=' w-11 h-11 bg-white rounded-full flex items-center justify-center text-primary'><BsTwitter /></li>
              </ul>
              <div className='text-xl w-11 h-11 text-primary bg-white hover:bg-third rounded-full flex items-center justify-center z-50 '>
                <AiOutlinePlus className='group-hover:rotate-45' />
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
   </section>
{/* ========================  Startup part start  =========================== */}
    <section>
      <div className="container pb-36 flex">
        <div className='w-[50%] -translate-y-[12%]'>
          <img src="/startup.png" alt="" />
        </div>

        <div className='w-[50%]'>
          <h1 className='font-primary font-semibold text-5xl text-primary leading-[62px] m-auto w-[589px] pt-5 mb-12'>Startup Digital Platform For Investing</h1>
          <div>
          <Accordion allowZeroExpanded>
    
        <AccordionItem dangerouslySetExpanded className='translate-x-[10%] w-[85%] mb-4'>
            <AccordionItemHeading>
                <AccordionItemButton className='py-5 px-7 border-2 border-[#D6D8E8]' >
                   <h2 className=' font-primary font-semibold text-xl text-fifth leading-[34px] flex justify-between items-center'>Securing Digital Payment <span className=' text-2xl'><AiOutlinePlus /></span></h2>
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className='py-5 px-7 border-2 border-third'>
              <p className=' font-secondary font-normal text-lg text-fifth leading-[32px] w-[80%]'>Through our Connected Content™ approach, we unite communications, digital experiences, and performance marketing to help more than 1600 global companies.</p>
            </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className='translate-x-[10%] w-[85%] mb-4'>
            <AccordionItemHeading>
                <AccordionItemButton className='py-5 px-7 border-2 border-[#D6D8E8]' >
                   <h2 className=' font-primary font-semibold text-xl text-fifth leading-[34px] flex justify-between items-center'>Securing Digital Payment<span className=' text-2xl'><AiOutlinePlus /></span></h2>
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className='py-5 px-7 border-2 border-third'>
              <p className=' font-secondary font-normal text-lg text-fifth leading-[32px] w-[80%]'>Through our Connected Content™ approach, we unite communications, digital experiences, and performance marketing to help more than 1600 global companies.</p>
            </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className='translate-x-[10%] w-[85%] mb-4'>
            <AccordionItemHeading>
                <AccordionItemButton className='py-5 px-7 border-2 border-[#D6D8E8]' >
                   <h2 className=' font-primary font-semibold text-xl text-fifth leading-[34px] flex justify-between items-center'>Securing Digital Payment<span className=' text-2xl'><AiOutlinePlus /></span></h2>
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className='py-5 px-7 border-2 border-third'>
              <p className=' font-secondary font-normal text-lg text-fifth leading-[32px] w-[80%]'>Through our Connected Content™ approach, we unite communications, digital experiences, and performance marketing to help more than 1600 global companies.</p>
            </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className='translate-x-[10%] w-[85%]'>
            <AccordionItemHeading>
                <AccordionItemButton className='py-5 px-7 border-2 border-[#D6D8E8]' >
                   <h2 className=' font-primary font-semibold text-xl text-fifth leading-[34px] flex justify-between items-center'>Securing Digital Payment<span className=' text-2xl'><AiOutlinePlus /></span></h2>
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className='py-5 px-7 border-2 border-third'>
              <p className=' font-secondary font-normal text-lg text-fifth leading-[32px] w-[80%]'>Through our Connected Content™ approach, we unite communications, digital experiences, and performance marketing to help more than 1600 global companies.</p>
            </AccordionItemPanel>
        </AccordionItem>
    
</Accordion>
          </div>
        </div>
      </div>
    </section>

  <section className='bg-[url("/counter.png")] bg-no-repeat bg-cover bg-center'>
    <div className="container flex py-28">
        <div className='w-[45%]'>
          <h2 className=' font-primary font-semibold text-4xl leading-[54px] text-white pb-10 w-3/4'>Trusted By The World’s Leading Companies</h2>
          <button className=' py-4 px-7 border-2 border-secondary rounded-md relative after:absolute after:h-[97%] after:w-full after:bg-secondary after:bottom-0 after:left-0 after:transition-all after:hover:h-0 after:duration-500 z-10 after:-z-10 font-primary font-semibold text-lg text-white'>Free Consultation</button>
        </div>
        <div className='w-[55%]'>
            <div className='flex gap-28'>
              <h2 className='font-primary font-semibold text-white text-6xl text-center pb-28'><CountUp end={150} /><span>+</span></h2>
              <h2 className='font-primary font-semibold text-white text-6xl text-center pb-28'><CountUp end={100} /><span>%</span></h2>
              <h2 className='font-primary font-semibold text-white text-6xl text-center pb-28'><CountUp end={350} /><span>+</span></h2>
            </div>
        </div>
    </div>
  </section>





    </>
  )
}

export default App
