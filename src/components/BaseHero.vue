<template>
    <div class="base-hero">
        <img class="left" src="../assets/Left.png">
        <div>
            <p class="text">
                CLEAN & FRESH FULLY RESPONSIVE
                DESIGN</p>
            <br>
            <p class="small-text">Lorem ipsum dolor amet
                tempor incididunt ut
                veniam omnis </p>
        </div>
        <img class="img-content" src="../assets/1.png">
        <img class="right" src="../assets/Right.png">
    </div>
</template>

<script>
    export default {
        name: "BaseHero"
    }
</script>

<style lang="scss" scoped>
.base-hero{
    background-image:url("../assets/hero.png");
    height: 427px;
    display: flex;
}




    .text{
        width: 350px;
        height: 145px;
        color: #ffffff;
        font-family: "Open Sans";
        font-size: 35px;
        font-weight: 400;
        line-height: 60px;
        text-transform: uppercase;
        margin-top: 127px;
        margin-left: 56px;
        margin-bottom: 10px;
    }
    .small-text{
        width: 216px;
        height: 64px;
        color: #ffffff;
        font-family: "Open Sans - Semibold";
        font-size: 18px;
        font-weight: 400;
        line-height: 25px;
        margin-left: 57px;

    }
    .left{
        width: 54px;
        height: 54px;
        opacity: 0.67;
        margin-left: 156px;
        margin-top: 196px;
    }
.img-content{
    width: 617px;
    height: 327px;
    margin-top: 86px;
}
    .right{
        width: 54px;
        height: 54px;
        opacity: 0.67;
        margin-top: 196px;
        margin-left: 17px;
    }

    @font-face {
        font-family:"Open Sans - Semibold";
        src: url("../../fonts/open-sans-semibold.ttf");
    }

    @font-face {
        font-family: "Open Sans";
        src: url("../../fonts/open-sans.ttf");
    }

/* CSS Mobile */

@media only screen
and (min-device-width : 300px)
and (max-device-width : 575px) {
.base-hero{
    display: none;
}
}
</style>