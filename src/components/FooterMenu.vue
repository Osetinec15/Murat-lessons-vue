<template>
    <div class="footer-menu">
        <div class="first-row">
            <div class="about">
                <h2><a href="#">About</a></h2>
                <p>Unify is an incredibly beautiful responsive Bootstrap Template for corporate and creative
                    professionals.</p>
            </div>
            <div class="monthly">
                <h2><a href="#">Monthly Newslatter</a></h2>
                <p>Subscribe to our newsletter and stay up to date with the latest news and deals!</p>
            </div>
        </div>
        <div class="second-row">
            <h2><a href="#">Recent Blog Entries</a></h2>
            <br>
            <br>

            <div class="img-and-text">
                <img src="../assets/small-image.png">
                <p>Anim moon officia Unify is an incredibly
                    beautiful responsive Bootstrap Template</p>
            </div>
            <br>
            <div class="img-and-text">
                <img src="../assets/small-image.png">
                <p>Anim moon officia Unify is an incredibly
                    beautiful responsive Bootstrap Template</p>
            </div>
            <br>
            <div class="img-and-text">
                <img src="../assets/small-image.png">
                <p>Anim moon officia Unify is an incredibly
                    beautiful responsive Bootstrap Template</p>
            </div>
        </div>
        <div class="third-row">
            <h2><a href="#">Contact Us</a></h2>
            <br>
            <br>
            <p>25, Lorem Lis Street, Orange
                California, US
                Phone: 800 123 3456
                Fax: 800 123 3456
                Email: <span>info@anybiz.com</span></p>
            <br>

            <h2 class="stay"><a href="#">Stay Connected</a></h2>
            <br>
            <br>

            <div class="icons">
                <a href="#"><img src="../assets/Rss.png"></a>
                <a href="#"><img src="../assets/Facebook.png"></a>
                <a href="#"><img src="../assets/Twitter.png"></a>
                <a href="#"><img src="../assets/Google+.png"></a>
                <a href="#"><img src="../assets/Pintrest.png"></a>
                <a href="#"><img src="../assets/Linkedin.png"></a>
                <a href="#"><img src="../assets/Vimeo.png"></a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FooterMenu"
    }
</script>

<style lang="scss" scoped>
    .footer-menu{
        width: 1600px;
        height: 350px;
        background-color: #6d727b;
        margin-top: 38px;
        display: flex;
    }
    .first-row{
        margin-left: 212px;
        padding-top: 38px;
    }

    .monthly{
        margin-top: 61px;
    }


    a{
        color: #e4e4e4;
        text-decoration: underline;
        text-decoration-color:#7dc945 ;
    }
    .first-row h2 {
        font-family: "Open Sans";
        font-size: 22px;
        font-weight: 400;


    }
    .first-row p {
        width: 325px;
        height: 31px;
        color: #e4e4e4;
        font-family: "Open Sans";
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        margin-top: 24px;
    }

    .second-row {
        margin-left: 80px;
        margin-top: 32px;
    }

    .img-and-text{
        display: flex;
    }
    .second-row p {
        width: 253px;
        height: 31px;
        color: #e4e4e4;
        font-family: "Open Sans";
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        margin-left: 9px;
        margin-top: -3px;
    }

    .third-row{
        margin-left: 72px;
        margin-top: 32px
    }
    .third-row p {
        width: 160px;
        height: 85px;
        color: #e4e4e4;
        font-family: "Open Sans";
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
    }
    .stay{
        margin-top: 25px;
    }
    .third-row img {
        padding-right:10px ;
    }
   span{
        color:#7dc945;
    }


    @media only screen
    and (min-device-width : 300px)
    and (max-device-width : 575px) {
        .footer-menu{
            margin: 0;
            width: 25.8%;
            height: 100%;
            display: block;
        }
        .first-row{
            margin: 0;
        }
        .first-row h2{
            margin-left: 30%;
        }

        .first-row p{
            margin-left: 10%;
        }
        .second-row{
            margin: 0;
            margin-top: 10%;
        }

        .second-row h2 {
            margin-left: 30%;
        }
        .img-and-text{
            margin-left: 10%;
        }
        .third-row{
            margin: 0;
            margin-top: 5%;
            margin-left: 20%;
        }
        .third-row h2 {
            margin-left: 25%;
        }
        .third-row p{
            margin-left: 20%;
        }



    }
</style>