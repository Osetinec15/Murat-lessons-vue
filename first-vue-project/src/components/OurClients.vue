<template>
    <div class="our-clients">
        <div class="header">
            <h2>Our Clients</h2>
            <div class="border"></div>
        </div>
        <div class="flex">
            <img id="item1" src="../assets/clients-image.png">
            <img id="item2" src="../assets/clients-image.png">
            <img id="item3" src="../assets/clients-image.png">
            <img id="item4" src="../assets/clients-image.png">
            <img  id="item5" src="../assets/clients-image.png">
            <img id="item6" src="../assets/clients-image.png">
            <img id="item7" src="../assets/clients-image.png">
            <img id="item8" src="../assets/clients-image.png">
        </div>
    </div>
</template>

<script>
    export default {
        name: "OurClients"
    }
</script>

<style lang="scss" scoped>

    .border{
        border-bottom: #7dc945 solid 2px;
        width: 186px;
        height: 2px
    }
    .header{
     margin-left: 212px;
    }
    .flex{
        display: flex;
        margin-left: 212px;
        margin-top: 28px;
    }
    img {
        width: 144px;
        height: 144px;
        padding-right:9px;
    }

    /* CSS Mobile */

    @media only screen
    and (min-device-width : 300px)
    and (max-device-width : 575px) {

        .our-clients {
            background-color: aliceblue;
            width: 25.8%;


        }
        .header {
            margin: 0;
            margin-left: 39%;

        }
        .flex {
            margin: 0;
            display: grid;
            grid-gap: 5px 5px;
            margin-left: 8%;
            margin-top: 10%;
        }
        #item1{
            grid-column-start: 1;
            grid-column-end: 1;

        }
        #item2{
            grid-column-start: 2;
            grid-column-end: 2;
        }
    .border{
        width: 30%;
    }
    }
</style>