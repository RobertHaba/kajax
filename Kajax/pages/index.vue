<template>
  <div class="container">
    <Header />
    <About postId="0"/>
    <Road />
    <Feedback />
    <Equipment />
    <About postId="1"/>
    <Price />
    <About postId="2"/>
    <Experience />
    <Hut />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Home/Header'
import About from '../components/Home/About'
import Road from '../components/Home/Road'
import Feedback from '../components/Home/Feedback'
import Equipment from '../components/Home/Equipment'
import Price from '../components/Home/Price'
import Experience from '../components/Home/Experience'
import Hut from '../components/Home/Hut'
import Footer from '../components/Home/Footer'
import Animation from "../components/assets/Animation"
export default {
    data(){
      return{
        title: 'Kajaki Kaszuby - Spływy Kajakowe Na Kaszubach | Lipusz Wda',
        description: 'Kajax - Kajaki i Kaszuby to najlepsze połączenie na udane spływy kajakowe! Wypożycz nasze kajaki i zwiedź takie rzeki jak Wda, Zbrzyca i Słupia.',
        image: 'https://kajaxadmin.haba.usermd.net/uploads/4_5439575d13.webp'
      }
    },
    head() {
      return{
        
    title: this.title,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: this.description
      },
      {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.image
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.title
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.image
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.image
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.title
        }
    ],
      }
  },
  components:{
    Header,
    About,
    Road,
    Feedback,
    Equipment,
    Price,
    Experience,
    Footer,
    Hut,
    Animation
  },
    methods: {
        runAnimation(){
            let aboutDescription0 = document.querySelector('#aboutDescription-0')
            let imageColumn0 = document.querySelector('#about-tile-image-small-0')
            let imageColumnBig0 = document.querySelector('#about-tile-image-big-0')
            let aboutDescription1 = document.querySelector('#aboutDescription-1')
            let imageColumn1 = document.querySelector('#about-tile-image-small-1')
            let imageColumnBig1 = document.querySelector('#about-tile-image-big-1')
            let aboutDescription2 = document.querySelector('#aboutDescription-2')
            let imageColumn2 = document.querySelector('#about-tile-image-small-2')
            let imageColumnBig2 = document.querySelector('#about-tile-image-big-2')    
            let feedbackContainer = document.querySelector('#feedbackContainer')
            let equipmentContainer = document.querySelector('[data-animation-id="equipment"]')  
            let priceContainer = document.querySelector('[data-animation-id="price"]')  
            let experienceContainer = document.querySelector('[data-animation-id="experience"]')
            let hutContainer = document.querySelector('[data-animation-id="hut"]')  
            let lastKnownScrollPosition = 0;
            document.addEventListener('scroll',()=>{
                lastKnownScrollPosition = window.scrollY
             Animation.methods.addAnimation({
                       element: aboutDescription0,
                       elementToAnimate: aboutDescription0,
                       classNameNew:'animation--fadeInUp',
                       classNameOld:'animation--hidden',
                       addSpaceFromTop:100,
                       scrollPosition: lastKnownScrollPosition

                   })
            Animation.methods.addAnimation({
                       element: imageColumnBig0,
                       elementToAnimate: imageColumnBig0.querySelector('img'),
                       classNameNew:'tile-animate-full',
                       classNameOld:'tile-animate-small',
                       addSpaceFromTop:100,
                       scrollPosition: lastKnownScrollPosition

                   })
            Animation.methods.addAnimation({
                       element: imageColumn0,
                       elementToAnimate: imageColumn0.querySelector('img'),
                       classNameNew:'tile-animate-full',
                       classNameOld:'tile-animate-small',
                       addSpaceFromTop:100,
                       scrollPosition: lastKnownScrollPosition

                   })
             Animation.methods.addAnimation({
                       element: aboutDescription1,
                       elementToAnimate: aboutDescription1,
                       classNameNew:'animation--fadeInUp',
                       classNameOld:'animation--hidden',
                       addSpaceFromTop:100,
                       scrollPosition: lastKnownScrollPosition

                   })
            Animation.methods.addAnimation({
                       element: imageColumnBig1,
                       elementToAnimate: imageColumnBig1.querySelector('img'),
                       classNameNew:'tile-animate-full',
                       classNameOld:'tile-animate-small',
                       addSpaceFromTop:100,
                       scrollPosition: lastKnownScrollPosition

                   })
            Animation.methods.addAnimation({
                       element: imageColumn1,
                       elementToAnimate: imageColumn1.querySelector('img'),
                       classNameNew:'tile-animate-full',
                       classNameOld:'tile-animate-small',
                       addSpaceFromTop:100,
                       scrollPosition: lastKnownScrollPosition

                   })
             Animation.methods.addAnimation({
                       element: aboutDescription2,
                       elementToAnimate: aboutDescription2,
                       classNameNew:'animation--fadeInUp',
                       classNameOld:'animation--hidden',
                       addSpaceFromTop:100,
                       scrollPosition: lastKnownScrollPosition

                   })
            Animation.methods.addAnimation({
                       element: imageColumnBig2,
                       elementToAnimate: imageColumnBig2.querySelector('img'),
                       classNameNew:'tile-animate-full',
                       classNameOld:'tile-animate-small',
                       addSpaceFromTop:100,
                       scrollPosition: lastKnownScrollPosition

                   })
            Animation.methods.addAnimation({
                       element: imageColumn2,
                       elementToAnimate: imageColumn2.querySelector('img'),
                       classNameNew:'tile-animate-full',
                       classNameOld:'tile-animate-small',
                       addSpaceFromTop:100,
                       scrollPosition: lastKnownScrollPosition

                   })
            Animation.methods.addAnimation({
                       element: feedbackContainer,
                       elementToAnimate: feedbackContainer.children[0],
                       classNameNew:'animation--fadeInUp',
                       classNameOld:'animation--hidden',
                       addSpaceFromTop:200,
                       scrollPosition: lastKnownScrollPosition

                   })
            Animation.methods.addAnimation({
                       element: equipmentContainer,
                       elementToAnimate: equipmentContainer.querySelector('[data-animation-id="equipment-main-image"]'),
                       classNameNew:'animation--fadeInLeftToRight',
                       classNameOld:'animation--hidden',
                       addSpaceFromTop:300,
                       scrollPosition: lastKnownScrollPosition

                   })
            Animation.methods.addAnimation({
                       element: equipmentContainer,
                       elementToAnimate: equipmentContainer.querySelector('[data-animation-id="equipment-specs"]'),
                       classNameNew:'animation--fadeInUp',
                       classNameOld:'animation--hidden',
                       addSpaceFromTop:300,
                       scrollPosition: lastKnownScrollPosition

                   })
            Animation.methods.addAnimation({
                       element: equipmentContainer,
                       elementToAnimate: equipmentContainer.querySelector('[data-animation-id="equipment-preview"]'),
                       classNameNew:'animation--fadeInRightToLeft',
                       classNameOld:'animation--hidden',
                       addSpaceFromTop:300,
                       scrollPosition: lastKnownScrollPosition

                   })
            Animation.methods.addAnimation({
                       element: experienceContainer,
                       elementToAnimate: experienceContainer.querySelector('[data-animation-id="experience-wrapper"]'),
                       classNameNew:'animation--fadeInLeftToRight',
                       classNameOld:'animation--hidden',
                       addSpaceFromTop:100,
                       scrollPosition: lastKnownScrollPosition

                   })
            Animation.methods.addAnimation({
                       element: priceContainer,
                       elementToAnimate: priceContainer.querySelector('[data-animation-id="wrapper"]'),
                       classNameNew:'animation--fadeInLeftToRight',
                       classNameOld:'animation--hidden',
                       addSpaceFromTop:100,
                       scrollPosition: lastKnownScrollPosition

                   })
            Animation.methods.addAnimation({
                       element: hutContainer,
                       elementToAnimate: hutContainer.querySelector('[data-animation-id="hut-content"]'),
                       classNameNew:'animation--fadeInLeftToRight',
                       classNameOld:'animation--hidden',
                       addSpaceFromTop:200,
                       scrollPosition: lastKnownScrollPosition

                   })  
            Animation.methods.addAnimation({
                       element: hutContainer,
                       elementToAnimate: hutContainer.querySelector('[data-animation-id="hut-image"]'),
                       classNameNew:'animation--fadeInLeftToRight',
                       classNameOld:'animation--hidden',
                       addSpaceFromTop:200,
                       scrollPosition: lastKnownScrollPosition

                   })
                   




                   
            })
        }
    },
    mounted() {
        this.runAnimation()
    },
}
</script>

