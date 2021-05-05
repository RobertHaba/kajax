<template>
    <section class="image-view" :class="{'image-view--hidden':imageClose}">
        <div class="image-closer" @click="imageClose = true"></div>
        <div class="image-view-container">
            <div class="image-container">
                <img :src="imageSrc" alt="" class="image" :class="{'image--big': bigSize}">
            </div>
            <div class="image-view-footer">
                <button @click="bigSize = true" class="btn btn--zoom">Powiększ</button>
                <button @click="bigSize = false" class="btn btn--zoom-out">Zmniejsz</button>
                <button @click="imageClose = true" class="btn">Zamknij</button>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props:['imageSrc','close'],
    data(){
        return{
            bigSize:false,
            imageClose: this.close
        }
    },
}
</script>
<style scoped>
    
    .image-view{
        position:fixed;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
        background-color: #ffffffa9;
        z-index: 9999999;
    }
    .image-view--hidden{
        display: none !important;
    }
    .image-closer{
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        content: ' ';
        background: #ffffffbe;
    }
    .image-view-container{
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 4rem 5rem;
        width: calc(100% - 10rem);
        height: calc(100% - 8rem);
        background-color: #005592f8;
        border-radius: 15px;
        z-index: 4;
    }
    .image-container{
        display: flex;
        justify-content: center;
        align-items: center;
        height: calc(100% - 80px);
        width: 100%;
    }
    .image{
        border-radius: 5px;
        max-height: 80%;
        max-width: 80%;
        box-shadow: 4px 4px 4px 3px #00477a;
    }
    .image--big{
        height: 100%;
    }
    .image-view-footer{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80px;
    }
    .btn{
        padding: 8px 25px;
        background-color: #FFF;
        color:#000;
        border-radius: 50px;
        margin: 0 1rem;
    }
    .btn--zoom{
        color:#FFF;
        background-color: #003d69;
    }
    .btn--zoom-out{
        color:#FFF;
        background-color: #0078ce;;
    }
    @media screen and (max-width:850px) {
        .image-view-container{
            margin: 0;
            width: 100%;
            height: 100%;
            border-radius: 0;
        }
        .image{
            max-width: 80%;
            max-height: 60%;
        }
        .btn{
            margin: 0 0.4rem;
        }
    }
</style>