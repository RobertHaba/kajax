<template>
  <div class="container">
    <Header />
    <About />
    <Road />
    <Feedback />
    <Equipment />
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
import Experience from '../components/Home/Experience'
import Hut from '../components/Home/Hut'
import Footer from '../components/Home/Footer'
import Animation from "../components/assets/Animation"
export default {
    data(){
      return{
        title: 'Spływy kajakowe kaszuby, kajakiem przez Wdę, Zbyrzyce | Kajax Lipusz',
        description: 'Niezapomniane spływy kajakowe rzeką Wdą i Zbrzyce! Wypożycz nasze kajaki i zwiedź najpopularniejsze kaszubskie szlaki. Noclegi w domku Lipusz',
        image: 'https://kajakinakaszubach.haba.usermd.net/image/schodno.jpg'
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
    Experience,
    Footer,
    Hut,
    Animation
  },
    methods: {
        runAnimation(){
            let imageColumn = document.querySelector('#about-tile-image-small')
            let imageColumnBig = document.querySelector('#about-tile-image-big') 
            let aboutDescription = document.querySelector('#aboutDescription')
            let feedbackContainer = document.querySelector('#feedbackContainer')
            let equipmentContainer = document.querySelector('[data-animation-id="equipment"]')  
            let experienceContainer = document.querySelector('[data-animation-id="experience"]')
            let hutContainer = document.querySelector('[data-animation-id="hut"]')  
            let lastKnownScrollPosition = 0;
            document.addEventListener('scroll',()=>{
                lastKnownScrollPosition = window.scrollY
             Animation.methods.addAnimation({
                       element: aboutDescription,
                       elementToAnimate: aboutDescription,
                       classNameNew:'animation--fadeInUp',
                       classNameOld:'animation--hidden',
                       addSpaceFromTop:100,
                       scrollPosition: lastKnownScrollPosition

                   })
            Animation.methods.addAnimation({
                       element: imageColumnBig,
                       elementToAnimate: imageColumnBig.querySelector('img'),
                       classNameNew:'tile-animate-full',
                       classNameOld:'tile-animate-small',
                       addSpaceFromTop:100,
                       scrollPosition: lastKnownScrollPosition

                   })
            Animation.methods.addAnimation({
                       element: imageColumn,
                       elementToAnimate: imageColumn.querySelector('img'),
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

