<template>
  <div>
    <header class="app__header-wrapper">
      <div class="app__header">
        <div class="app__header-logo-image">
          <router-link to="/">
            <img :alt="$t('app.logo-alt')" src="./assets/logo.png" >
          </router-link>
        </div>
        <div class="app__header-logo-text">
          <h1>{{ $t('app.name') }}</h1>
          <h2>{{ $t('app.slogan') }}</h2>
        </div>
        <div class="app__header-sign-in" v-if="!signedIn">
          <router-link to="/sign-up">{{ $t('app.sign-up') }}</router-link> /
          <router-link to="/sign-in">{{ $t('app.sign-in') }}</router-link>
        </div>
        <div class="app__header-sign-in" v-if="signedIn">
          <router-link to="/profile">{{nickname}}</router-link>
        </div>
      </div>
    </header>
    <main>
      <router-view/>
    </main>
    <footer class="app__footer">
      <ul class="app__footer-link-list">
        <li class="app__footer-link-list-item"><router-link to="/help">{{ $t('app.help') }}</router-link></li>
        <li class="app__footer-link-list-item"><router-link to="/mission">{{ $t('app.our-mission') }}</router-link></li>
        <li class="app__footer-link-list-item"><router-link to="/contact">{{ $t('app.contact') }}</router-link></li>
        <li class="app__footer-link-list-item"><router-link to="/advertisement">{{ $t('app.advertisement') }}</router-link></li>
        <li class="app__footer-link-list-item"><router-link to="/archive">{{ $t('app.archive') }}</router-link></li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    signedIn() {
      return this.$store.getters.SIGNED_IN;
    },
    nickname() {
      return this.$store.getters.USER_NICKNAME;
    },
  },
  created() {
    console.log('Created');
    this.$store.dispatch('GET_SIGNED_IN');
    this.$store.dispatch('GET_USER_NICKNAME');
  },
};
</script>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
    color: #000;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .app__header-wrapper {
    background: #000;
    color: #FFF;
    border-bottom: 5px solid #ffd302;
  }

  .app__header {
    display: grid;
    grid-template-columns: 0.1fr 1fr 1fr;
    grid-gap: 1em;
    margin: 0 auto;
    max-width: 80%;
    padding: 1em 0;
  }

  .app__header-logo-text {
    grid-column: 2 / span 2;
    padding-top: 30px;
    line-height: 23px;
    font-size: 12px;
  }

  .app__header-sign-in {
    grid-column: auto / span 3;
    font-size: 16px;

    a {
      color: #ffd302;

      &.router-link-exact-active {
        color: #a08500;
      }
    }

    a:hover {
      color: #ffe45b
    }
  }

  .app__footer {
    background: #000;
    color: #ffd302;
    padding: 5px 0 15px 0;
  }

  .app__footer-link-list {
    margin: 0 auto;
    max-width: 80%;
    padding: 15px 15px 0 0;
    list-style: none;
  }

  .app__footer-link-list-item {
    display: inline-block;
  }

  .app__footer-link-list-item a {
    color: #ffe45b;
    text-decoration: none;
  }

  .app__footer-link-list-item a:visited {
    color: #ffd302;
    text-decoration: none;
  }

  .app__footer-link-list-item a:hover {
    color: #ffd302;
    text-decoration: underline;
  }

  .app__footer-link-list-item:after {
    content: '\b7\a0';
    padding: 0 10px 0 10px;
  }

  .app__footer-link-list-item:last-child:after {
    content: '';
  }

  @media all and (min-width: 850px) {
    .app__header-wrapper {
      height: 200px;
    }

    .app__header-sign-in {
      grid-column: 3 / 3;
      padding-top: 80px;
      text-align: right;
      font-size: 16px;
    }

    .app__header-logo-text {
      grid-column: 2 / 3;
      padding-top: 50px;
      line-height: 20px;
    }

    .app__header-logo-image {
      grid-column: 1 / 1;
    }
  }
</style>
