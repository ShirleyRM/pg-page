import Vue from 'vue';
import VueRouter from 'vue-router';
import Header from '@/components/Header.vue';
import Form from '@/components/Form.vue';
import Projects from '@/components/Projects.vue';
import Footer from '@/components/Footer.vue';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/',
    name: 'Header',
    component: Header,
  },
  {
    path: '/',
    name: 'Form',
    component: Form,
  },
  {
    path: '/',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/',
    name: 'Footer',
    component: Footer,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
