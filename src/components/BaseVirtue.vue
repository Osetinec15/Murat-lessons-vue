<template>
    <div class="base-virtue">
        <div class="first-block">
            <i class="fa fa-compress" aria-hidden="true"></i>
          <span><h3>Fully Responsive</h3>
            <p>Donec id elit non mi porta gravida at eget
                metus. Fusce dapibus, tellus ac cursus
                commodo, tortor mauris condimentum
                nibh, ut fermentum massa justo sit amet
                risus etiam sem...</p></span>
        </div>

        <div class="second-block">
            <i class="fa fa-cogs" aria-hidden="true"></i>
          <span><h3>HTML5 + CSS3</h3>
            <p>Donec id elit non mi porta gravida at eget
                metus. Fusce dapibus, tellus ac cursus
                commodo, tortor mauris condimentum
                nibh, ut fermentum massa justo sit amet
                risus etiam sem...</p></span>
        </div>

        <div class="third-block">
            <i class="fa fa-rocket" aria-hidden="true"></i>
            <span><h3>Launch Ready</h3>
            <p>Donec id elit non mi porta gravida at eget
                metus. Fusce dapibus, tellus ac cursus
                commodo, tortor mauris condimentum
                nibh, ut fermentum massa justo sit amet
                risus etiam sem...</p></span>
        </div>

    </div>
</template>

<script>
    export default {
        name: "BaseVirtue"
    }
</script>

<style lang="scss" scoped>
    .base-virtue{
        width: 1600px;
        display: flex;
    }

    .first-block{
        width: 337px;
        height: 168px;
        margin-left: 265px;
    }

    .second-block{
        width: 337px;
        height: 168px;
        margin-left: 128px;
    }


    .third-block{
        width: 337px;
        height: 168px;
        margin-left: 158px;
    }

.fa-rocket{
    font-size: 30px;
    position: relative;
    top: 40px;
    right: 55px;
    color: #72c02c;
}
.fa-cogs{
   font-size: 30px;
    position: relative;
    top: 40px;
    right: 55px;
    color: #72c02c;
}


   .fa-compress {
      font-size: 30px;
        position: relative;
        top: 40px;
        right: 55px;
    }


    p {
        width: 241px;
        height: 85px;
        color: #555555;
        font-family: "Helvetica Neue";
        font-size: 13px;
        font-weight: 400;
        line-height: 19px;
    }

    h3 {
        color: #585f69;
        font-family: "Open Sans";
        font-size: 22px;
        font-weight: 400;
        line-height: 36px;
        text-transform: uppercase;
    }

    /* CSS Mobile */

    @media only screen
    and (min-device-width : 300px)
    and (max-device-width : 575px) {

        .base-virtue{
            display: inherit;
            width: 25.6%;
            background-color: aliceblue;
            margin-top:-1.2% ;

        }
        .first-block {
            margin: 0;
            margin-left: 17%;
            margin-top: 5%;
            display: flex;



        }
        .second-block {
            margin: 0;
            margin-left: 17%;
            display: flex;
        }
        .third-block {
            margin: 0;
            margin-left: 17%;
            display: flex;
        }

        .fa-compress{
            position: inherit;
            padding-right: 8%;
            margin-top: 3.5%;
        }
        .fa-cogs{
            position: inherit;
            padding-right: 8%;
            margin-top: 3.5%;
        }
        .fa-rocket{
            position: inherit;
            padding-right: 8%;
            margin-top: 3.5%;
        }



    }

</style>