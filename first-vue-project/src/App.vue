<template>
  <div id="app">
    <nav-bar></nav-bar>
    <base-hero></base-hero>
    <base-download></base-download>
    <base-virtue></base-virtue>
    <recent-work></recent-work>
    <welcome-to-unify></welcome-to-unify>
    <our-clients></our-clients>
    <footer-menu></footer-menu>
    <base-footer></base-footer>
  </div>
</template>

<style lang="scss">

</style>
<script>
  import NavBar from "./components/NavBar";
  import BaseHero from "./components/BaseHero";
  import BaseVirtue from "./components/BaseVirtue";
  import BaseDownload from "./components/BaseDownload";
  import RecentWork from "./components/RecentWork";
  import WelcomeToUnify from "./components/WelcomeToUnify";
  import OurClients from "./components/OurClients";
  import FooterMenu from "./components/FooterMenu";
  import BaseFooter from "./components/BaseFooter";
  export default {
    components: {
      BaseFooter,
      FooterMenu, OurClients, WelcomeToUnify, RecentWork, BaseDownload, BaseVirtue, BaseHero, NavBar}
  }
</script>

<style>
  body, html{
    width: 1600px;
    margin: 0;
    padding: 0;
  }
</style>



</style>


