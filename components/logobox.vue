<template>
   <div>
   <div v-for="(logo, index) in logobox" :key="index"></div>
   </div> 
</template>
<script>
var contentful = require('contentful');
var client = contentful.createClient({
  space: 'gxppcva787ir',
  accessToken: 'd-_lvsXnr9ZF7ivw5a7bXjsQGM6dqEezIOeIrRVCH5A',
});
export default {
  asyncData({$graphql, params}) {
    return client.getEntries({
      content_type: 'Logobox',
    }).then(entries => {
      return { logobox: entries.items}
    }).catch(e => console.log(e));
  },head: { title: 'Our Members'},
    name: 'logobox',
}
</script>
<style></style>