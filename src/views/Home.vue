<template>
  <div class="header">
    <div>
      <Header />
      <div>
        <Form />
        <div>
          <Projects />
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Form from '@/components/Form.vue';
import Projects from '@/components/Projects.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Form,
    Projects,
    Footer,
  },
};
</script>
