<template>
  <div id="footer" class="card">
    <img :src="data.src.footer">
  </div>
</template>

<script>
// export default {
//   name: 'Footer',
//   data() {
//     return {
//       data: {
//         src: {},
//       },
//     };
//   },
//   beforeMount() {
//     this.getPhoto();
//   },
//   methods: {
//     async getPhoto() {
//       const headers = new Headers();
//       headers.append(
//         'Authorization',
//         'api_key',
//       );
//       const request = new Request(
//         'http://test.playgroup.pe/api/layout',
//         {
//           method: 'GET',
//           headers,
//           mode: 'cors',
//           cache: 'default',
//         },
//       );
//       const res = await fetch(request);
//       const { photos } = await res.json();
//       // eslint-disable-next-line prefer-destructuring
//       this.data = photos[0];
//     },
//   },
// };
</script>
