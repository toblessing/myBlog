<style>
.img-carousel{
    width: 500px;
    
}
.carousel{
    width: 496px;
    margin: 0px auto;
}
</style>

<template>
    <Carousel class="carousel" autoplay v-model="value2" loop>
        <CarouselItem>
            <img class="img-carousel" src="img/1.jpeg"/>
        </CarouselItem>
        <CarouselItem>
            <img class="img-carousel" src="img/2.jpeg"/>
        </CarouselItem>
        <CarouselItem>
            <img class="img-carousel" src="img/3.jpeg"/>
        </CarouselItem>
        <CarouselItem>
            <img class="img-carousel" src="img/4.jpeg"/>
        </CarouselItem>
        <CarouselItem>
            <img class="img-carousel" src="img/5.jpeg"/>
        </CarouselItem>
    </Carousel>
</template>
<script>
    export default {
        data () {
            return {
                value2: 0
            }
        }
    }
</script>
