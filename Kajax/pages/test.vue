<template>
    <div class="div" v-if="hutPage">
        asdasdas
        {{hutPage.headerTitle}}
        <img :src="linkPrefix + hutPage.hutPageContent[0].image.formats.thumbnail.url" alt="">
        <div v-for="item in hutPage.hutPageContent" :key="item.id">
            
         <img :src="linkPrefix + item.image.formats.thumbnail.url" alt="">
        </div>
        <Footer />
    </div>
</template>
<script>
import Footer from '~/components/Home/Footer'

import hutQuery from '~/apollo/queries/page/hut'
export default {
    data(){
        return{
            hutPage:'',
            linkPrefix: 'http://192.168.1.50:1337',
        }
    },
    apollo:{
        hutPage:{
            prefetch: true,
            query: hutQuery
        },
    },
    components:{
        Footer
    },
    
}
</script>
<style scoped>
.div{
    position: absolute;
    top:150px;
    color:red;
    font-family: 'Montserrat';
}
</style>