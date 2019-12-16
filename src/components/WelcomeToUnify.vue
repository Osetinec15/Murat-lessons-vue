<template>
    <div class="welcome-latest">

        <div class="headers">
            <div class="h2">
                <h2>Welcome To Unify</h2>
                <div class="border"></div>
            </div>

            <div class="header">
                <h2>Latest Shots</h2>
                <div class="border"></div>
            </div>

        </div>

        <div class="content">

            <div class="welcome-and-latest">

                <div class="img">
                    <img src="../assets/Image.png">
                </div>

                <div class="list">
                    <p class="unify-text">
                        Unify is an incredibly beautiful responsive Bootstrap Template for corporate and creative
                        professionals. It works on all major web browsers, tablets and phone.
                    </p>
                    <div class="ul">
                        <img src="../assets/Icons.png">
                        <ul>
                            <li>Donec id elit non mi porta gravida</li>
                            <li>Corporate and Creative</li>
                            <li>Responsive Bootstrap Template</li>
                            <li>Corporate and Creative</li>
                        </ul>
                    </div>
                    <div class="CEO">
                        <div class="line"></div>

                        <div>
                            <p class="text">Award winning digital agency. We bring a personal and effective approach to
                                every project we work on, which is why. Unify is an incredibly beautiful responsive
                                Bootstrap Template for corporate professionals.</p>
                            <p class="ps">CEO, Jack Bour</p>
                        </div>
                    </div>
                </div>

                <div class="slide">
                    <img class="image-2" src="../assets/image-2.png">
                    <img class="left-arrow" src="../assets/arrow.png">
                    <img class="right-arrow" src="../assets/arrow.png">
                    <p>Facilisis odio, dapibus ac justo acilisis gestinas.</p>
                </div>


            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: "WelcomeToUnify"
    }
</script>

<style lang="scss" scoped>
    .welcome-latest{
        margin-top: 79px;
        margin-left: 212px;

    }
    .headers{
        display: flex;
    }
    .header{
        margin-left: 633px;
    }
    h2{
        width: 186px;
        height: 17px;
        color: #585f69;
        font-family: "Open Sans";
        font-size: 22px;
        font-weight: 400;
        line-height: 36px;
        margin-bottom: 12px;

    }
    .border{
        border-bottom: #7dc945 solid 2px;
        width: 186px;
        height: 2px
    }
.welcome-and-latest{
    margin-top: 28px;
    display: flex;
}
    img {
        width: 232px;
        height: 147px;
        margin-right: 28px;
    }
    .list{
        margin-top: -5px;
    }
.unify-text {
    width: 462px;
    height: 36px;
    color: #333333;
    font-family: "Helvetica Neue";
    font-size: 13px;
    font-weight: 400;
    line-height: 24px;
}
.ul img {
    width: 12px;
    height: 81px;
    padding-top: 10px;

}
    li{
        color: #333333;
        font-family: "Helvetica Neue";
        font-size: 13px;
        font-weight: 400;
        line-height: 24px;
        list-style: none;
        padding-left: 10px;

    }
    .ul{
        display: flex;
        margin-top: 10px;

    }
ul {
    margin-top:5px;
    margin-left:-30px ;
}
.slide{
    margin-left: 88px;
}
    .image-2  {
        width: 394px;
        height: 242px;
        position: relative;
        right: 188px;
    }
    .slide p {
        color: #f1f1f1;
        font-family: "Helvetica Neue";
        font-size: 13px;
        font-weight: 400;
        line-height: 18px;
        position: relative;
        bottom: 67px;
        right:100px;
    }

    .left-arrow{
        width: 35px;
        height: 35px;
        position: relative;
        bottom: 105px;
       right: 188px;
        transform: rotate(200grad);
    }

    .right-arrow{
        width: 35px;
        height: 35px;
        position: relative;
        bottom: 105px;
        left: 108px;

    }
    .text{
        width: 660px;
        height: 31px;
        color: #555555;
        font-family: "Helvetica Neue";
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        margin-top: 52px;

    }
    .ps {
        width: 101px;
        height: 12px;
        color: #999999;
        font-family: "Helvetica Neue";
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        margin-top: 15px;

    }
    .line{
        width: 2px;
        height: 85px;
        background-color: #eeeeee;
        position: relative;
        right: 20px;
        top: 40px;

    }
    .CEO{
        position: relative;
        right: 240px;
        display: flex;

    }

    /* CSS Mobile */

    @media only screen
    and (min-device-width : 300px)
    and (max-device-width : 575px) {
        .welcome-latest{

            width: 25.8%;
            margin: 0;
            background-color: aliceblue;
            display: block;

        }
        .content{
        display: block;
        }
        .welcome-and-latest{
            display: block;
        }

        .ul{
margin-top: 8%;
            margin-left: 20%;
        }

        img{
             width: 100%;
        }
        .header{
            margin: 0;
            position: absolute;
            top: 2580px;
            left: 100px;
        }

.h2{
    margin-left: 30%;
}
        .unify-text{
            width: 97%;
            margin-top: 4%;
        }

        .text{
            margin: 0;
            width: 90%;
            margin-left:63%;
            margin-top: 4%;
        }
        .slide{

            width: 90%;
            margin-left: 47.5%;
            margin-top: 15%;

        }
    }
</style>