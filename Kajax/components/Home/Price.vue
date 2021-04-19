<template>
     <section class="container" id="cennik" data-animation-id="price" v-if="price !== ''">
        <div class="layout">
                <header class="layout-header" data-animation-id="title">
                    <h2 class="layout-header__title">Cennik spływów kajakowych</h2>
                    <p class="layout-header__subtitle">Wybierz okres wypożyczenia kajaków</p>
                    <div class="layout-option-box">
                        <button class="button button--active">pon-czw</button>
                        <button class="button">pt-niedz</button>
                    </div>
                </header>
            <div class="content-container">
                <div class="wrapper" data-animation-id="wrapper">
                    <div class="card">
                        <header class="card-header">
                            <h3 class="card-header__title">Spływy kajakowe jednodniowe</h3>
                        </header>
                        <div class="card-content">
                            <div class="card-price-box">
                                <p class="card-price-box__value">40zł</p>
                                <p class="card-price-box__info">za osobę</p>
                            </div>
                            <div class="card-content-box">
                                <p class="card-content-box__type">Typ: <span class="card-content-box__text">Kajak 2 osobowy</span></p>
                            </div>
                        </div>
                        <footer class="card-footer">
                            <a href="tel:696599556" class="button button--tel" title="Kliknij, aby zadzwonić" aria-label="Kliknij, aby zadzwonić">Zadzwoń</a>
                        </footer>
                    </div>
                    <div class="card">
                        <header class="card-header">
                            <h3 class="card-header__title">Spływy kajakowe jednodniowe</h3>
                        </header>
                        <div class="card-content">
                            <div class="card-price-box">
                                <p class="card-price-box__value">50zł</p>
                                <p class="card-price-box__info">za osobę</p>
                            </div>
                            <div class="card-content-box">
                                <p class="card-content-box__type">Typ: <span class="card-content-box__text">Kajak 1 osobowy</span></p>
                            </div>
                        </div>
                        <footer class="card-footer">
                            <a href="tel:696599556" class="button button--tel" title="Kliknij, aby zadzwonić" aria-label="Kliknij, aby zadzwonić">Zadzwoń</a>
                        </footer>
                    </div>
                    <div class="card">
                        <header class="card-header">
                            <h3 class="card-header__title">Spływy kajakowe kilkudniowe</h3>
                        </header>
                        <div class="card-content">
                            <div class="card-price-box">
                                <p class="card-price-box__value">30zł</p>
                                <p class="card-price-box__info">za osobę</p>
                            </div>
                            <div class="card-content-box">
                                <p class="card-content-box__type">Typ: <span class="card-content-box__text">Kajak 2 osobowy</span></p>
                            </div>
                        </div>
                        <footer class="card-footer">
                            <a href="tel:696599556" class="button button--tel" title="Kliknij, aby zadzwonić" aria-label="Kliknij, aby zadzwonić">Zadzwoń</a>
                        </footer>
                    </div>
                    <div class="card">
                        <header class="card-header">
                            <h3 class="card-header__title">Spływy kajakowe kilkudniowe</h3>
                        </header>
                        <div class="card-content">
                            <div class="card-price-box">
                                <p class="card-price-box__value">40zł</p>
                                <p class="card-price-box__info">za osobę</p>
                            </div>
                            <div class="card-content-box">
                                <p class="card-content-box__type">Typ: <span class="card-content-box__text">Kajak 1 osobowy</span></p>
                            </div>
                        </div>
                        <footer class="card-footer">
                            <a href="tel:696599556" class="button button--tel" title="Kliknij, aby zadzwonić" aria-label="Kliknij, aby zadzwonić">Zadzwoń</a>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
  </section>   
</template>

<script>
export default {
    data(){
        return{
            price:'a'
        }
    }
}
</script>

<style scoped>
    .container{
    position: relative;
    z-index: 0;
    min-height: 600px;
    background-color: #F4F4F4;
    padding: 7rem 5rem;
    color:#000;
    }
    .layout{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    margin:0 auto;
    }
    .layout-header{
        width: 100%;
        max-width: 1300px;
        margin:0 auto;
        margin-bottom: 2rem;
    }
    .layout-header__title{
        margin-bottom: 1rem;
        font-size: 2rem;
        font-weight: bold;
        text-transform: uppercase;
    }
    .layout-header__subtitle{
        font-size: 2.5rem;
        font-size: 1.3rem;
        margin-bottom: 1rem;
    }
    .button{
        padding: 0.5rem 2rem;
        margin-right: 1rem;
        background: #FFF;
        border:1px solid #005492;
        font-weight:bold;
        color:#005492;
        border-radius: 2rem;
    }
    .button--active, .button--tel{
        background: #005492;
        color:#FFF;

    }
    .button--tel{
        font-size: 0.9rem;
    }
    .button:hover{
    transition: 1s all cubic-bezier(0.075, 0.82, 0.165, 1);
    border:1px solid #4E79C7;
        background: #4E79C7;
        color:#FFF;
    }
    .content-container{
        position: relative;
        display: flex;
        justify-content: space-between;
        width: 100%;
        max-width: 1300px;
        padding: 4rem 0 2rem;
        margin: 0 auto;
        overflow-x: scroll;
        scrollbar-width: thin;
        scrollbar-color: #005492 rgb(192, 192, 192);
    }
    .content-container::-webkit-scrollbar {
        height: 12px;
    }

    .content-container::-webkit-scrollbar-track {
    background: rgb(192, 192, 192);
    border-radius: 20px;
    }

    .content-container::-webkit-scrollbar-thumb {
    background-color: #005492;
    border-radius: 20px;
    }
    .wrapper{
        display: flex;
    }
    .card{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 300px;
        height: 380px;
        margin-right: 3rem;
        padding: 2rem;
        background-color: #FFF;
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.12);
        border-radius: 20px;
    }
    .card-header{
        height: 60px;
        width: 100%;
        border-bottom: 1px solid #9AC4DC;
        padding-bottom: 0.5rem;
    }
    .card-header__title{
        text-align: center;
        font-weight: bold;
        color: #005492;
        text-transform: uppercase;
    }
    .card-content{
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 2rem 0 1rem;
    }
    .card-price-box{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        height: 100px;
        border: 1px solid #005492;
        border-radius: 20px;
    }
    .card-price-box__value{
        margin: 0;
        font-size: 2rem;
        font-weight: bold;
        color: #005492;
    }
    .card-price-box__info{
        margin: 0;
        font-size: 0.8rem;
        color: #005492;
        
    }
    .card-content-box__type{
        display: flex;
        justify-content: center;
        font-weight: bold;
    }
    .card-content-box__text{
        display: block;
        margin-left: 1rem;
        font-weight: normal;
    }
    .card-footer{
        display: flex;
        justify-content: center;
        width: 100%;
        padding-top: 1rem;
        border-top: 1px solid #9AC4DC;
    }
    
    @media screen and (max-width: 600px) {
        .container{
            padding: 7rem 2rem;
        }
        .layout-header__title,
        .layout-header__subtitle{
            text-align: center;
        }
        .layout-option-box{
            display: flex;
            justify-content: center;
        }
        .content-container{
            padding: 2rem 0;
        }
    }
</style>