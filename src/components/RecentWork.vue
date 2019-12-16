<template>
    <div class="resent-work">
        <h2>Recent Work</h2>
        <div class="border"></div>
        <div class="blog-container">
            <div class="blog" id="bl">
           <base-blog>

               <slot #img></slot>
               <slot #href></slot>
               <slot id="title4"></slot>
               <slot #paragraf></slot>

           </base-blog>
            </div>
            <base-blog>
                <slot #img></slot>
                <slot #href></slot>
                <slot #title2></slot>
                <slot #paragraf></slot>

            </base-blog>
            <base-blog>
                <slot #img></slot>
                <slot #href></slot>
                <slot #title3></slot>
                <slot #paragraf></slot>

            </base-blog>
            <base-blog >
                <slot #img></slot>
                <slot #href></slot>
                <slot #title4></slot>
                <slot #paragraf></slot>

            </base-blog>
        </div>
    </div>
</template>

<script>
    import BaseBlog from "./BaseBlog";
    export default {
        name: "RecentWork",
        components: {BaseBlog}
    }
</script>

<style lang="scss" scoped>
.resent-work{
    margin-top: 80px;
    margin-left: 212px;
}
.border{
    border-bottom: #7dc945 solid 2px;
    width: 140px;
    height: 2px
}
    h2{
        width: 140px;
        height: 17px;
        color: #585f69;
        font-family: "Open Sans";
        font-size: 22px;
        font-weight: 400;
        margin-bottom:9px ;

    }

    .blog-container{
        margin-top: 25px;
        display: flex;
    }
    .blog{
        width: 265px;
        height: 240px;
        margin-right: 56px;
    }


    h3{
        margin-top: -30px;
        width: 130px;
        height: 20px;
        color: #585f69;
        font-family: "Open Sans";
        font-size: 20px;
        font-weight: 400;
        line-height: 36px;
    }

/* CSS Mobile */

@media only screen
and (min-device-width : 300px)
and (max-device-width : 575px) {
    .resent-work{
        width: 25.7%;
        background-color: aliceblue;
        margin: 0;
        border:1px #d6d6d6 solid ;
    }
    .blog-container{
        display: block;
padding-bottom:2% ;

    }
    .blog{
        margin: 0;
        margin-left: 20%;
        margin-bottom: 10%;
    }
#bl{
    margin-left: 27px;
}
    h2 {
        margin-left: 30%;
        padding-top: 2%;
    }
    .border{
        margin-left: 30%;
    }


}

</style>