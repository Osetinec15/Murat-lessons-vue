<template>
    <div class="nav-bar">
        <a href="#"><img src="../assets/logo.png"></a>
        <div class="nav-bar-content">
            <p class="lhl"><i class="fa fa-globe" aria-hidden="true"></i> LANGUGAES | HELP | LOGIN</p>
            <ul>
                <li>HOME</li>
                <li>PAGES</li>
                <li>FEATURES</li>
                <li>PORTFOLIO</li>
                <li>BLOG</li>
                <li>CONTACTS</li>
            </ul>
        </div>
        <i class="fa fa-search"></i>

    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style lang="scss" scoped>
    .nav-bar {
        height: 89px;
        display: flex;
    }


    img {
        width: 103px;
        height: 39px;
        margin-top: 42px;
        margin-left: 213px;
        margin-right: 0;
        margin-bottom: 0;
        padding: 0;

    }

    ul {
        display: flex;
        margin-left: 329px;
        margin-top: 50px;
        padding: 0;
    }


    li {
        list-style: none;
        color: #687074;
        font-family: "Myriad Pro";
        font-size: 14px;
        font-weight: 400;
        text-transform: uppercase;
        margin-right: 45px;

    }

    .lhl {
        width: 189px;
        height: 13px;
        color: #9b9b9b;
        font-family: "Helvetica Neue";
        font-size: 12px;
        line-height: 24px;
        margin-left: 748px;
        position: relative;
        top: 18px;


    }

    .fa-search{
        width: 16px;
        height: 15px;
        color: #b8b8b8;
        font-size: 15px;
        line-height: 30.66px;
        position: relative;
        top:55px;
        right: 66px;

    }

    @font-face {
        font-family: "Myriad Pro";
        src: url("../../fonts/myriad-pro.otf");
    }
    /* CSS Mobile */

    @media only screen
    and (min-device-width : 300px)
    and (max-device-width : 575px) {
        .nav-bar{
            width: 25.8%;
            height: 200px;
            display: inherit;
            background-color: aliceblue;
        }
        img{
            margin:0%;
            margin-left: 37%;
            margin-top: 5%;
        }
        ul{
            display: block;
            margin:0%;
            margin-left: 41%;
            margin-top: 4%;

        }
        li{
            font-size: 1em;
            margin: 0%;
            padding-bottom: 1%;
            letter-spacing: 3px;

        }
    p{
        display: none;
    }

    }

</style>