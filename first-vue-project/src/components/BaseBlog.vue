<template>
    <div class="blog">
       <slot name="img"><img src="../assets/Image.png"></slot>
       <a class="border_2" href="#"> <slot name="href"/>read more +</a>
        <h3> <slot name="title4">Project Four</slot></h3>
       <slot name="paragraf"><p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, justo sit amet risus etiam porta
            sem.</p></slot>
    </div>

</template>


<script>
    export default {
        name: "BaseBlog"
    }
</script>

<style lang="scss" scoped>
    h2{
        width: 140px;
        height: 17px;
        color: #585f69;
        font-family: "Open Sans";
        font-size: 22px;
        font-weight: 400;
        margin-bottom:9px ;

    }
    a{
        text-decoration: none;
        width: 70px;
        height: 9px;
        color: #ffffff;
        font-family:"Open Sans";
        font-size: 13px;
        font-weight: 400;
        line-height: 36px;
        position: relative;
        bottom: 56px;
        left: 190px;
        padding: 3px;
    }
    img{
        width: 248px;
        height: 149px;
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

    p {
        width: 240px;
        height: 50px;
        color: #585f69;
        font-family: "Open Sans";
        font-size: 13px;
        font-weight: 400;
        line-height: 19px;
        margin-top: 12px;
    }
    .border_2{
        width: 85px;
        height: 25px;
        background-color: #7dc945
    }
</style>