<template>

  <div class="dashboard">

    <form @sumbit.prevent="createBlog(); newBlog = {}">
      <input type="text" name="title" id="title" v-model="newBlog.title" required>
      <textarea cols="100" rows="10" name="body" id="body" v-model="newBlog.body" required></textarea>
      <button type="submit">Create Blog</button>
    </form>

    <div class="row">
      <router-link class="viewAllBlogs" :to="{name: 'Blog', params: {id: blog.id}}" v-for="blog in blogs" :key="blog.id">{{blog.title}}</router-link>

    </div>


  </div>

</template>

<script>
  export default {
    name: 'dashboard',
    data() {
      return {
        newBlog: {}
      }
    },
    mounted() {
      this.$store

    },
    methods: {
      createBlog() {
        this.newBlog.author = this.user.email
        this.$store.dispatch('createBlog', this.newBlog)
      }

    },
    computed: {
      user() {
        return this.$store.state.user
      },
      blogs() {
        return this.$store.state.blogs
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>