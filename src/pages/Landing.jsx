import React,{useLayoutEffect,useRef} from 'react';
import { CustomButton, Footer, Header, } from '../components';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Landing = () => {
  const comp=useRef(null)
  const comp2=useRef(null)
  const comp3=useRef(null)
  useLayoutEffect(()=>{
    let ctx=gsap.context(()=>{
      const t1=gsap.timeline()
      t1.to("#intro-slider",{
        xPercent:"-100",
        duration:1.3,
        delay:0.5,
     }).from("#title",{
      y:"-=30",
      delay:0.6,
      opacity:1,
     })
     .to("#title",{
      opacity:0,
      stagger:0.5,
      delay:0.3,
      scale:"1.1"
     }).to("#text1",{
      y:"+=60",
      duration:1.5,
      delay:-0.8,
      scale:"1.05",
     }).to("#text2",{
      y:"+=80",
      duration:1.3,
      stagger:0.3,
      scale:"1.1",
      delay:0.2
     })
      return ()=>ctx.revert()
    },comp)

   },[])
   useLayoutEffect(()=>{
    let ctx=gsap.context(()=>{
      const t2=gsap.timeline()
      t2.to("#lorem",{
        xPercent:"-10",
        x:"+=40",
        duration:1.5,
        delay:8,
        scale:"0.8"
    }).to("#btn",{
      y:"-=30",
      x:"-=40",
      scale:"1.1",
      duration:0.5,
      delay:0.2
    })
    return ()=>ctx.revert()
    },comp2)
   },[])

  //  useLayoutEffect(()=>{
  //   let ctx=gsap.context(()=>{
  //     const t=gsap.timeline()
  //     t.to("#head",{
  //       xPercent:"+100",
  //       opacity:1,
  //       duration:0.5,
  //       delay:0.2
  //     })
  //     return ()=>ctx.revert()
  //   },comp3)
  //  },[])

  return (
    <main className=' w-full  min-h-screen bg-bgColor  '>
      <div ref={comp3} id='head' className='  '>
       <Header/>
      </div>
       <div ref={comp}  className=' relative'>
       <div id='intro-slider' className='absolute top-0 left-0 p-10 h-screen w-screen tracking-tight z-10 bg-primary  flex justify-center items-center  text-9xl'>
        <h1 id='title' className=' font-futura '>Welcome ..</h1>
       </div>
        <div className='text-9xl  flex flex-col justify-start items-center text-primary font-futura h-screen bg-bgColor'>
          <h1 id='text1' className='mb-8 pl-16'>Explore Boundless</h1>
          <h1 id='text2' className='mt-8 pl-16'>Realms of Skills</h1>
        </div>
       </div>
       <div ref={comp2} className='h-screen relative w-full bg-primary grid place-content-center'>

        <div className='flex flex-col justify-center items-center'>
        <p id='lorem' className='text-tertiary text-xl  mb-8 ml-72 mr-10 flex-shrink-0'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro quis quam, mollitia ipsam ipsa facilis alias magni quasi necessitatibus quas perferendis eaque reiciendis! Quis numquam ab placeat porro quidem aspernatur facere minus, excepturi ratione! Tempore, perferendis numquam. Reiciendis esse, voluptatum labore natus reprehenderit sunt ab dolorem cupiditate harum veritatis error?</p>
        </div>
        <section id='btn' className='bg-primary min-h-full z-10 pr-10 flex justify-center items-start'>
        <Link to='/register'>
        <CustomButton
        title='Register'
        containerStyles='bg-secondary text-xl mr-3 text-tertiary px-3 py-3 rounded-md mt-24'
        />
        </Link>
      </section>
      </div>
       <Footer/>
    </main>
  )
}

export default Landing;