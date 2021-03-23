<template>
   <div class="container" v-if="hutPage !== ''" >
       <header class="hut-container hut-container--header" >
            <div class="header-column-text">
                <div class="header-content-container">
                        <h2 class="hut-header-title">{{hutPage.headerTitle}}</h2>
                        <p class="hut-header-lead">
                            {{hutPage.subtitleHeader}}
                        </p>
                        <a href="tel:696599556" class="hut-header-button">Zadzwoń</a>
                </div>
            </div>
            <div class="hut-header__column-image">
                <picture> 
                    <source :srcset="linkPrefix + hutPage.headerImage.formats.large.url" media="(min-width: 1000px)">
                    <img class="header-image" :src="linkPrefix + hutPage.headerImage.formats.medium.url" :alt="hutPage.headerImage.alternativeText">
                </picture>
            </div>
        </header>
        <section class="hut-container hut-container--column" data-animation-id="hut-container-content-1">
            <div class="content-column content-column--left content-column--image" data-animation-id="hut-content-image-1">
                <picture>
                    <source :srcset="linkPrefix + hutPage.hutPageContent[0].image.formats.small.url" media="(max-width: 1000px)">
                    <img :src="linkPrefix + hutPage.hutPageContent[0].image.formats.medium.url" :alt="hutPage.hutPageContent[0].image.alternativeText">
                </picture>
            </div>
            <div class="content-column content-column--right" data-animation-id="hut-content-column-1">
                <h2 class="content-column__title">
                    {{hutPage.hutPageContent[0].title}}
                </h2>
                <div class="road-content-text" v-html="$md.render(hutPage.hutPageContent[0].text)">
                </div>
            </div>
        </section>
        <section class="hut-container hut-container--blue" data-animation-id="hut-container-card">
            <div class="hut-layout">
                <header class="hut-layout-header" data-animation-id="hut-card-title">
                    <h2 class="hut-layout-header__title">Co dla Ciebie przygotowaliśmy?</h2>
                </header>
                <div class="hut-layout-content hut-layout-content--blue" data-animation-id="hut-card-content">
                    <div class="hut-card" v-for="card in hutPage.card" :key="card.id">
                            <img :src="linkPrefix + card.icon.url" class="hut-card__img" :alt="card.icon.alternativeText">
                            <h3 class="hut-card__title">{{card.title}}</h3>
                            <p class="hut-card__text">{{card.text}}</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="hut-container hut-container--column hut-container--left" data-animation-id="hut-container-content-2">
            <div class="content-column content-column--left" data-animation-id="hut-content-column-2">
                <h2 class="content-column__title">
                    {{hutPage.hutPageContent[1].title}}
                </h2>
                <div class="road-content-text" v-html="$md.render(hutPage.hutPageContent[1].text)">
                </div>
            </div>
            <div class="content-column content-column--right content-column--image" data-animation-id="hut-content-image-2">
                <picture>
                    <source :srcset="linkPrefix + hutPage.hutPageContent[1].image.formats.small.url" media="(max-width: 1000px)">
                    <img :src="linkPrefix + hutPage.hutPageContent[1].image.formats.medium.url" alt="">
                </picture>
            </div>
        </section>
        <section class="hut-container hut-container--blue" data-animation-id="hut-container-furnishing">
            <div class="hut-layout hut-layout--column">
                <header class="hut-layout-header" data-animation-id="hut-furnishing-title">
                    <h2 class="hut-layout-header__title">Wyposażenie w skrócie:</h2>
                </header>
                <div class="hut-layout-content hut-layout-content--blue" data-animation-id="hut-furnishing-content">
                    <div class="furnishings-box" v-for="furnishing in hutPage.furnishings" :key="furnishing.id">
                        <div class="furnishings-box-header" >
                            <h3 class="furnishings-box-header__title">
                                {{furnishing.title}}
                            </h3>
                        </div>
                        <ul class="furnishings-box-list" v-for="itemDescription in furnishing.description" :key="itemDescription.id">
                            <li class="furnishings-box-list__item">
                                {{itemDescription.text}}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section class="hut-container" v-if="hutPage.hutGallery" data-animation-id="hut-container-gallery">
            <div class="hut-layout">
                <header class="hut-layout-header" data-animation-id="hut-gallery-title">
                    <h2 class="hut-layout-header__title">Galeria</h2>
                </header>
                <div class="hut-layout-content hut-layout-content--gallery" data-animation-id="hut-gallery-content">
                    <div class="gallery-header">
                        <div class="gallery-thumbnails-card" :class="{'gallery-thumbnails-card--target':index == selected}" v-for="(thumbnail, index) in hutPage.hutGallery" :key="thumbnail.id" @click="activeGallery = index, selected = index">
                            <img :src="linkPrefix + thumbnail.image[0].formats.thumbnail.url" class="gallery-thumbnails-card__img" :alt="thumbnail.image[0].alternativeText">
                            <h3 class="gallery-thumbnails-card__title">
                                {{thumbnail.title}}
                            </h3>
                        </div>
                    </div>
                    <div class="gallery-content" id="galleryContent">
                        <div class="gallery-content__column gallery-content__column--big">
                            <picture>
                                <source media="(min-width: 1150px)" :srcset="linkPrefix + hutPage.hutGallery[activeGallery].image[0].formats.small.url">
                                <source media="(min-width: 850px)" :srcset="linkPrefix + hutPage.hutGallery[activeGallery].image[0].formats.medium.url">
                                <img class="gallery-image gallery-image--big" :src="linkPrefix + hutPage.hutGallery[activeGallery].image[0].formats.small.url" :alt="hutPage.hutGallery[activeGallery].image[0].alternativeText">
                            </picture>
                            <p class="gallery-subtitle">
                                Zobacz naszą galerię obiektu
                            </p>
                        </div>
                        <div class="gallery-content__column gallery-content__column--tile">
                            <picture v-for="(galleryImg, index) in hutPage.hutGallery[activeGallery].image" :key="galleryImg.id" v-if="index">
                                <img class="gallery-image" :src="linkPrefix + galleryImg.formats.small.url" :alt="galleryImg.alternativeText">
                            </picture>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="hut-container hut-container--gray" data-animation-id="hut-container-price">
            <div class="hut-layout hut-layout--column">
                <header class="hut-layout-header" data-animation-id="hut-price-title">
                    <h2 class="hut-layout-header__title">Cennik wynajmu</h2>
                    <p class="hut-layout-header__subtitle">Wybierz odpowiedni pakiet dla siebie i zadzwoń!</p>
                </header>
                <div class="hut-layout-content hut-layout-content--price-section" data-animation-id="hut-price-content">
                    <div class="price-card" v-for="priceCard in hutPage.priceCard" :key="priceCard.id">
                        <div class="price-card-header">
                            <h3 class="price-card-header__title">
                                {{priceCard.title}}
                            </h3>
                            <p v-if="priceCard.months">{{priceCard.months}}</p>
                        </div>
                        <div class="price-card-variants" v-for="priceVariant in priceCard.priceVariants" :key="priceVariant.id">
                            <div class="price-card-variants__img-box">
                                <img class="card-variants-img" :src="linkPrefix + priceVariant.icon.url" :alt="priceVariant.icon.alternativeText">
                            </div>
                            <div class="price-card-variants__content">
                                <h4 class="card-variants-title">{{priceVariant.title}}</h4>
                                <p>
                                    <span class="price" :class="{'price--promotion': priceVariant.oldPrice !== null }">{{priceVariant.price}}zł </span> <span class="price-old" v-if="priceVariant.oldPrice !== null">{{priceVariant.oldPrice}}zł</span> / doba
                                </p>
                                <p>
                                {{priceVariant.shortDescription1}}  
                                </p>
                                <p v-if="priceVariant.shortDescription2">
                                {{priceVariant.shortDescription2}}  
                                </p>
                            </div>
                        </div>
                            <a class="price-button" href="tel:+48696599556">Zadzwoń</a>
                    </div>
                </div>
                    <div class="additional-information" v-if="hutPage.additionalInformation">
                        <h3 class="additional-information__title">
                            {{hutPage.additionalInformation.title}}
                        </h3>
                        <p>
                            {{hutPage.additionalInformation.description}}
                        </p>
                    </div>
            </div>
        </section>
        <Footer />
   </div>
</template>

<script>
import Footer from '~/components/Home/Footer'
import hutQuery from '~/apollo/queries/page/hut'
import Animation from "../components/assets/Animation"
export default {
    name:'hut',
    head() {
           return {
               title: `Domek do wynajęcia nad jeziorem - Wczasy na Kaszubach | Kajax 2021`,
               meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Rodzinne wakacje na Kaszubach. Noclegi w dużym domku holenderskim nad jeziorem Lipusz do 6os. Domek do wynajęcia w tygodniu i na weekend! '
                }
                ]
           }
        
    },
    data(){
        return{
            activeGallery:0,
            hutPage:'',
            linkPrefix: 'http://192.168.1.50:1337',
            selected: 0
        }
    },
    components:{
        Footer
    },
    apollo:{
        hutPage:{
            prefetch: true,
            query: hutQuery
        },
    },
    watch:{
        activeGallery(){
            let imageMainView = document.querySelector('#galleryContent')
            imageMainView.classList.remove('animation--fadeInUp')
            imageMainView.offsetWidth
            imageMainView.classList.add('animation--fadeInUp')
        }
    },
    methods: {
    runAnimation(){
            let hutContainerContent1 = document.querySelector('[data-animation-id="hut-container-content-1"]')
            let hutContainerContent2 = document.querySelector('[data-animation-id="hut-container-content-2"]')
            let hutContainerCard= document.querySelector('[data-animation-id="hut-container-card"]')
            let hutContainerFurnishing= document.querySelector('[data-animation-id="hut-container-furnishing"]')
            let hutContainerGallery= document.querySelector('[data-animation-id="hut-container-gallery"]')
            let hutContainerPrice= document.querySelector('[data-animation-id="hut-container-price"]')
            let lastKnownScrollPosition = 0;
            document.addEventListener('scroll',()=>{
                lastKnownScrollPosition = window.scrollY
             Animation.methods.addAnimation({
                       element: hutContainerContent1,
                       elementToAnimate: hutContainerContent1.querySelector('[data-animation-id="hut-content-image-1"]'),
                       classNameNew:'animation--fadeInLeftToRight',
                       classNameOld:'animation--hidden',
                       addSpaceFromTop:100,
                       scrollPosition: lastKnownScrollPosition

                   })
             Animation.methods.addAnimation({
                       element: hutContainerContent1,
                       elementToAnimate: hutContainerContent1.querySelector('[data-animation-id="hut-content-column-1"]'),
                       classNameNew:'animation--fadeInRightToLeft',
                       classNameOld:'animation--hidden',
                       addSpaceFromTop:100,
                       scrollPosition: lastKnownScrollPosition

                   })  
             Animation.methods.addAnimation({
                       element: hutContainerContent2,
                       elementToAnimate: hutContainerContent2.querySelector('[data-animation-id="hut-content-image-2"]'),
                       classNameNew:'animation--fadeInRightToLeft',
                       classNameOld:'animation--hidden',
                       addSpaceFromTop:100,
                       scrollPosition: lastKnownScrollPosition

                   })
             Animation.methods.addAnimation({
                       element: hutContainerContent2,
                       elementToAnimate: hutContainerContent2.querySelector('[data-animation-id="hut-content-column-2"]'),
                       classNameNew:'animation--fadeInLeftToRight',
                       classNameOld:'animation--hidden',
                       addSpaceFromTop:100,
                       scrollPosition: lastKnownScrollPosition

                   })
             Animation.methods.addAnimation({
                       element: hutContainerCard,
                       elementToAnimate: hutContainerCard.querySelector('[data-animation-id="hut-card-title"]'),
                       classNameNew:'animation--fadeInLeftToRight',
                       classNameOld:'animation--hidden',
                       addSpaceFromTop:100,
                       scrollPosition: lastKnownScrollPosition

                   })
             Animation.methods.addAnimation({
                       element: hutContainerCard,
                       elementToAnimate: hutContainerCard.querySelector('[data-animation-id="hut-card-content"]'),
                       classNameNew:'animation--fadeInUp',
                       classNameOld:'animation--hidden',
                       addSpaceFromTop:100,
                       scrollPosition: lastKnownScrollPosition

                   })
             Animation.methods.addAnimation({
                       element: hutContainerFurnishing,
                       elementToAnimate: hutContainerFurnishing.querySelector('[data-animation-id="hut-furnishing-title"]'),
                       classNameNew:'animation--fadeInLeftToRight',
                       classNameOld:'animation--hidden',
                       addSpaceFromTop:100,
                       scrollPosition: lastKnownScrollPosition

                   })
             Animation.methods.addAnimation({
                       element: hutContainerFurnishing,
                       elementToAnimate: hutContainerFurnishing.querySelector('[data-animation-id="hut-furnishing-content"]'),
                       classNameNew:'animation--fadeInUp',
                       classNameOld:'animation--hidden',
                       addSpaceFromTop:100,
                       scrollPosition: lastKnownScrollPosition

                   })
             Animation.methods.addAnimation({
                       element: hutContainerGallery,
                       elementToAnimate: hutContainerGallery.querySelector('[data-animation-id="hut-gallery-title"]'),
                       classNameNew:'animation--fadeInLeftToRight',
                       classNameOld:'animation--hidden',
                       addSpaceFromTop:100,
                       scrollPosition: lastKnownScrollPosition

                   })
             Animation.methods.addAnimation({
                       element: hutContainerGallery,
                       elementToAnimate: hutContainerGallery.querySelector('[data-animation-id="hut-gallery-content"]'),
                       classNameNew:'animation--fadeInUp',
                       classNameOld:'animation--hidden',
                       addSpaceFromTop:100,
                       scrollPosition: lastKnownScrollPosition

                   })
             Animation.methods.addAnimation({
                       element: hutContainerPrice,
                       elementToAnimate: hutContainerPrice.querySelector('[data-animation-id="hut-price-title"]'),
                       classNameNew:'animation--fadeInLeftToRight',
                       classNameOld:'animation--hidden',
                       addSpaceFromTop:100,
                       scrollPosition: lastKnownScrollPosition

                   })
             Animation.methods.addAnimation({
                       element: hutContainerPrice,
                       elementToAnimate: hutContainerPrice.querySelector('[data-animation-id="hut-price-content"]'),
                       classNameNew:'animation--fadeInUp',
                       classNameOld:'animation--hidden',
                       addSpaceFromTop:100,
                       scrollPosition: lastKnownScrollPosition

                   })
            })
        }
    },
    mounted(){
        this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => {
            this.$nuxt.$loading.finish()
            if(this.hutPage !== ""){
                this.runAnimation()
            }
        }, 500)
        })
    },
        loading: true
  
}
</script>

<style scoped>
.container{
        overflow-x: hidden;
        font-family: 'Montserrat';
}
    .hut-container{
        position: relative;
        display: flex;
        align-items: stretch;
        justify-content: stretch;
        width: 100%;
        padding: 7rem;
    }
    .hut-container--column{
        position: relative;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(500px,1fr));
        grid-gap: 4rem;
        justify-items: center;
        width: 100%;
        height: auto;
        max-width: calc(1300px + 4rem);
        padding: 7rem 2rem;
        margin: 0 auto;
    }
    .hut-container--blue{
        height: auto;
        padding: 8rem;
        color:#FFF;
        background-color: #005492;
        z-index: 4
    }
    .hut-container--header{
        padding: 0;
        height: 100vh;
    }
    .hut-container--gray{
        margin-bottom: 0;
        padding-bottom: 8rem;
        background-color: #F4F4F4;
    }
    @media screen and (max-width:950px) {
        .hut-container{
            padding: 7rem 2rem;
        }
    }
    @media screen and (max-width:750px) {
        .hut-header-title{
            font-size: 1.5rem;
        }
        .hut-container--column{
            display: flex;
            flex-direction: column;
        }
    }
    @media screen and (max-width:1150px) {
        .hut-container--left{
            display: flex;
            align-items: center;
            flex-direction: column-reverse;
        }
    }
    .header-column{
        width: 100%;
        max-width: 340px;
        height: 100%;
    }
    .header-column-text{
        position: absolute;
        left: 50%;
        bottom: 0px;
        display: flex;
        flex-direction: column;
        width: calc(100% - 10rem);
        max-width: 1300px;
        margin-bottom: 10rem;
        transform: translateX(-50%);
        transition: 1s ease all;
        z-index: 4;
        animation: textFromLeftToRight 1.2s ease-in;
    }
    @keyframes textFromLeftToRight{
        0%{
            opacity: 0;
            left:-25%;
        }
        80%{
            opacity: 0;
        }
        100%{
            opacity: 1;
            left: 50%;
            bottom:0px;
        }
    }
    .header-content-container{
        position: relative;
        max-width: 360px;
        color: #000;
        transition: 1s ease all;
    }
    .hut-header-title{
        font-size: 2.5rem;
        font-weight: bold;
        line-height: 100%;
        margin-bottom: 0.5rem;
        text-transform: uppercase;
    }
    .hut-header-subtitle{
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }
    
    @media screen and (max-width:750px) {
        .header-column-text{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0 2rem;
            width: calc(100% - 2rem);
        }
        .hut-header-title{
            font-size: 2rem;
        }
    }
    .hut-header-lead{
        line-height: 150%;
        margin-bottom: 4rem;
        text-transform: uppercase;
    }
    .hut-header-button{
        padding: 0.5rem 2rem;
        border:1px solid #000;
        border-radius: 2rem;
    }
    .hut-header__column-image{
        position: absolute;
        height: 100vh;
        width: 50%;
        right:0;
        transition: 1s ease all;
    }
    .header-image{
        position: relative;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
    
    @media screen and (max-width:1000px) {
        .hut-header__column-image{
            width: 100%;
        }
        .hut-header__column-image::after{
            content: '';
            position: absolute;
            top:0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.356);
        }
        .hut-content-column--text-left,
        .hut-content-column--text-right
        {
            padding: 1rem;
        }
        .header-content-container{
            color:#FFF;
        }
        .hut-header-button{
            border-color: #FFF;
        }
    }
    .content-column{
        max-width: 650px;
        position: relative;
        margin:2rem 0;
        z-index: 1;
    }
    .content-column--left.content-column--image::before{
        content: '';
        position: absolute;
        left: -50%;
        top:-10%;
        width: 100%;
        height: 120%;
        background-color: #F8F8F8;
        z-index: -1;
        border-radius: 15px;
    }
    .content-column--right.content-column--image::before{
        content: '';
        position: absolute;
        left: 50%;
        top:-10%;
        width: 100%;
        height: 120%;
        background-color: #F8F8F8;
        z-index: -1;
        border-radius: 15px;
    }
    @media screen and (max-width:520px) {
        .content-column--right.content-column--image::before,
        .content-column--left.content-column--image::before{
            display: none;
        }
    }
    .content-column--image{
        max-height: 400px;
    }
    .content-column--image img{
        width: 100%;
        height: 100%;
        object-fit:cover;
        border-radius: 15px;
    }
    .content-column__title{
        margin-bottom: 1.5rem;
        font-size: 1.5rem;
        font-weight: bold;
        text-transform: uppercase;
    }
    .hut-layout{
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 1300px;
        height: 100%;
        margin:0 auto;
        z-index: 1;
    }
    .hut-layout--column{
        flex-wrap: wrap;
    }
    .hut-layout-header{
        width: 100%;
        margin-bottom: 5rem;
    }
    .hut-layout-header__title{
        font-size: 2.5rem;
        font-weight: bold;
        text-transform: uppercase;
    }
    .hut-layout-header__subtitle{
        margin-top: 0.5rem;
        font-size: 1.2rem;
        text-transform: uppercase;
    }
    
    @media screen and (max-width:950px) {
       .hut-layout-header__title,
       .hut-layout-header__subtitle{
           text-align: center;
        }
        .hut-layout-header__title{
            font-size: 1.5rem;
           }
    }
    .hut-layout-content{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
    .hut-layout-content--blue::before{
        content: "";
        position: absolute;
        bottom: 10%;
        left: 5%;
        width: 80%;
        height: 50%;
        z-index: -1;
        background-color: #005B9D;
        border-radius: 15px;
    }
    .hut-layout-content--gallery{
        flex-direction: column;
        flex-wrap: nowrap;
    }
    .hut-layout-content--price-section{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
    }
    .hut-card{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 270px;
        height: 160px;
        padding: 1rem;
        margin: 2rem 1rem;
        background-color: #FFF;
        border-radius: 10px;
        color:#000;
        text-align: center;
    }
    .hut-card__img{
        width: 40px;
        height: 40px;
    }
    .hut-card__title{
        margin: 0.3rem;
        box-sizing: border-box;
        font-size: 0.9rem;
        font-weight: bold;
        text-transform: uppercase;
    }
    .hut-card__text{
        margin: 0;
        font-size: 0.9rem;
    }
    /* Furnishings section*/
    .furnishings-box{
        display: flex;
        flex-direction: column;
        width: 100%;
        min-width: 320px;
        max-width: 50%;
        margin-bottom: 2rem;
    }
    .furnishings-box-header{
        display: flex;
        width: 100%;
        margin-bottom: 1.5rem;
    }
    .furnishings-box-header__title{
        position: relative;
        padding: 0.5rem 2.5rem;
        font-size: 1rem;
        background-color: #FFF;
        color: #000;
        font-weight: bold;
        text-transform: uppercase;
        border-radius: 40px;
    }
    .furnishings-box-list{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
        grid-row-gap: 0.3rem;
        padding: 0 0.5rem;
    }
    .furnishings-box-list__item{
        font-size: 0.9rem;
    }
    .furnishings-box-list__item::before{
        content: '';
        display: inline-block;
        height: 0.5rem;
        width: 0.5rem;
        background-image: url('../assets/check.svg');
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;

    }
    /* Price section */
    .price-card{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: stretch;
        width: 100%;
        max-width: 380px;
        padding: 2rem;
        margin: 1rem 0;
        background-color: #FFF;
        border-radius: 10px;
        box-shadow: 0px 4px 10px 2px rgba(193, 193, 193, 0.25);
    }
    .price-card-header{
        margin-bottom: 2rem;
        text-align: center;
    }
    .price-card-header__title{
        font-size: 1.3rem;
        font-weight: bold;
    }
    .price-card-variants{
        display: flex;
        width: 100%;
        font-size: 0.8rem;
    }
    .price-card-variants__content{
        margin-bottom: 1.5rem;
    }
    .price-card-variants__content p{
        margin: 0.3rem 0;
    }
    .price-card-variants__img-box{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 60px;
        margin-right: 1.5rem;
        border:1px solid #005492;
        border-radius: 100px;
    }
    .card-variants-img{
        width: 35px;
        height: 35px;
    }
    .card-variants-title{
        font-size: 1rem;
        font-weight: bold;
    }
    .price{
        color:#005492;
        font-size: 1.2rem;
        font-weight: bold;
    }
    .price-old{
        color:#ACACAC;
        text-decoration-line: line-through;
    }
    .price--promotion{
        color: #EB4132;
    }
    .price-button{
        padding: 0.5rem 0;
        font-weight: bold;
        font-size: 0.9rem;
        text-align: center;
        color:#005492;
        border:1px solid #005492;
    }
    /* Additional */
    .additional-information{
        margin-top: 5rem;
        padding: 2rem;
        background-color: #FFF;
        border-radius: 10px;
        box-shadow: 0px 4px 10px 2px rgba(193, 193, 193, 0.25);
    }
    .additional-information__title{
        margin-bottom: 1rem;
        font-size: 1.5rem;
        font-weight: bold;
    }
    /* Gallery */
    .gallery-header{
        display: flex;
        margin-bottom: 3rem;
    }
    .gallery-thumbnails-card{
        width:100%;
        max-width: 180px;
        height: 130px;
        margin: 0 1.5rem;
    }
    .gallery-thumbnails-card--target .gallery-thumbnails-card__title{
        font-weight: bold;
    }
    .gallery-thumbnails-card--target .gallery-thumbnails-card__img{
        transform: scale(0.8);
    }
    .gallery-thumbnails-card__img{
        width: 100%;
        height: 100px;
        object-fit:cover;
        border-radius: 10px;
        transition: 0.8s;
    }
    .gallery-thumbnails-card__title{
        margin-top: 0.5rem;
        text-align: center;
    }
    .gallery-content{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(440px,1fr));
        grid-gap: 1rem;
    }
    .gallery-content__column--big{
        display: flex;
        flex-direction: column;
        justify-content: space-between;

    }
    .gallery-content__column--tile{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(210px,1fr));
        grid-gap: 1rem;
    }
    
    .gallery-image{
        width: 100%;
        height: 100%;
        object-fit:cover;
        max-height: 220px;
        border-radius: 10px;
    }
    .gallery-image--big{
        height: 360px;
        max-height: 360px;
    }
    .gallery-subtitle{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        min-height: 80px;
        height: 100%;
        font-size: 1.1rem;
        font-weight: bold;

    }
    @media screen and (max-width:1136px) {
        .hut-layout-header{
            margin-bottom: 1.5rem;
        }
        .gallery-header{
            margin-bottom: 1rem;
        }
        .gallery-thumbnails-card{
            max-width: 70px;
            height: 100px;
            margin: 0.5rem;

        }
        .gallery-thumbnails-card__img{
            object-fit: cover;
            height: 70px;
            border-radius: 100%;
        }
        .gallery-thumbnails-card__title{
            font-size: 0.8rem;
        }
        .gallery-image--big{
            height: 440px;
            max-height:440px;
        }
        .gallery-content{
            display: flex;
            align-items: stretch;
            flex-direction: column;
            padding: 0 1rem;
        }
        .gallery-content__column--big{
            flex-direction: column-reverse;
        }
    }
    @media screen and (max-width: 770px) {
        .gallery-content__column--big{
            margin-bottom: 1rem;
        }
        .gallery-image--big{
            height: auto;
            max-height:320px;
        }
    }
</style>