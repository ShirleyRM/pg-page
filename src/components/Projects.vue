<template>
  <div id="projects" class="bg-info">
      <div id="app">
      <form @submit.prevent="createPost">
        <input placeholder="name" v-model="post.name">
        <input placeholder="title" v-model="post.title">
        <br>
        <button type="submit">Create</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      post: {},
      data: {},
    };
  },
  methods: {
    async createPost() {
      const request = new Request(
        'http://test.playgroup.pe/api/lead/save/posts',
        {
          method: 'POST',
          mode: 'cors',
          cache: 'default',
          body: JSON.stringify(this.post),
        },
      );
      const res = await fetch(request);
      const data = await res.json();
      this.data = data;
    },
  },
};
</script>

<style scoped>

</style>
