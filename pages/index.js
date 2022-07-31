import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout/Layout'

import HeroHome from '../components/Home/HeroHome/HeroHome'
import Skills from '../components/Home/Skills/Skills'
import Proyects from '../components/Home/Proyects/Proyects'
import TemplateWeb from '../components/Home/TemplateWeb/TemplateWeb'
import SliderShow from '../components/Home/Slide/SliderShow'
import Testimonial from '../components/Home/Testimonial/Testimonial'
import About from '../components/Home/About/About'

export default function Home() {
  return (    
    <Layout>
    
        <HeroHome />
          
        <Skills/>

        <About/>

        <Proyects/>

        <TemplateWeb/>

        {/* <SliderShow/> */}

        <Testimonial/>

    </Layout>
  )
}
