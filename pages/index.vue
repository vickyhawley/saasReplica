<template>
<div>
    <h1>Hi</h1>  
    <div v-for="about in data.aboutCollection.items" :key="about.aboutSection">
        <pre>{{ about }}</pre>
        <h1>Hi</h1>  
     </div>
     <div>
         <h1>Hi</h1>  
    </div>   
</div>

</template>

<script>
// import { gql } from "graphql-request";
// export default {
 // async asyncData({ $graphql, params }) {
  //  const query = gql
  ///  {
   //   aboutCollection; {
   //     items; {
   //       titleAbout
  ///      }
   //   }
  //  }

// const data = await $graphql.request(query);
// console.log(data.aboutCollection);
// return { data };
 //   }
 ////  }
</script>
