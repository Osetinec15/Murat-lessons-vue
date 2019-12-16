<template>
    <div class="base-download">
        <div class="text-content">
            <p class="first-text">Unify is a clean and fully responsive incredible Template.</p>
            <p class="second-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi vehicula sem ut volutpat. Ut
                non libero magna fusce condimentum eleifend enim a feugiat corrupti quos.</p>
        </div>

        <div>
            <button class="btn">Download Now</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BaseDownload"
    }
</script>

<style lang="scss" scoped>
.base-download{
    height: 144px;
    border: 1px solid #d6d6d6;
    color: #FDFDFD;
    display: flex;



}

.text-content{


}

.first-text{
    width: 650px;
    height: 24px;
    color: #666666;
    font-family: "Open Sans";
    font-size: 24px;
    font-weight: 400;
    line-height: 24px;
    margin-top: 24px;
    margin-left: 212px;

}
    .second-text{
        width: 740px;
        height: 49px;
        color: #555555;
        font-family: "Open Sans";
        font-size: 13px;
        font-weight: 400;
        line-height: 18px;
        margin-top: 20px;
        margin-left: 212px;
    }

    .btn{
        width: 205px;
        height: 51px;
        background-color: #72c02c;
        color: white;
        border: none;
        outline: none;
        margin-left: 200px;
        margin-top: 44px;


    }
    .btn text{

        color: #ffffff;
        font-family: "HelveticaNeueCyr ";
        font-size: 18px;
        font-weight: normal;
        line-height: 36px;
    }


    @font-face {
        font-family:HelveticaNeueCyr;
        src: url("../../fonts/HelveticaNeueCyr-Thin.ttf");
    }


/* CSS Mobile */

@media only screen
and (min-device-width : 300px)
and (max-device-width : 575px) {
    .base-download {
        width: 25.6%;
        height: 180px;
        display: inherit;
        margin: 0%;
        background-color: aliceblue;
    }
.first-text{
    font-size: 90%;
    margin: 0%;
    margin-left: 5%;
    margin-top: 3%;
}
    .second-text{
        width: 80%;
        font-size: 80%;
        margin: 0%;
        margin-left: 12%;
    }
    .btn{
        width: 30%;
        height: 40px;
        padding: 0%;
        margin: 0%;
        margin-left: 65%;
        margin-top: 11%;
        font-size: 14px;
    }


    }
</style>