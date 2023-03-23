<template>
  <div class="about">
    <HeaderLine></HeaderLine><br>
    <div class="dabba">
      <h1>Easy way to store & access your Credentials</h1>
      <br>
      <P>----------------------------------------------</P>
      <br>
      <h2>THINGS U CAN DO: </h2>
      
      <br><br>

      <v-simple-table theme="dark" width="200">
        <tbody>
          <tr
            v-for="item in things"
            :key="item.name"
          >
            <td class="itemmm">{{ item.name }}</td>
          </tr>
        </tbody>
      </v-simple-table>

      <br><br>

      <h4>Author: CJ</h4>
      <h4>Version: 1.0.0</h4>
    </div>
  </div>
    

</template>



<script>
  import HeaderLine from '@/components/HeaderLine.vue';

  export default {
    name: 'AboutView',
    components: {
      HeaderLine
    },
    data () {
      return {
        things: [
          {
            name: 'CREATE',
          },
          {
            name: 'RETRIEVE',
          },
          {
            name: 'UPDATE',
          },
          {
            name: 'DELETE',
          },
        ],
      }
    },
  }
</script>



<style scoped>
.dabba {
  width: 340px;
  height: 200px;
  align-items: center;
  margin: auto;
  justify-content: center;
  text-align: center;
}

</style>