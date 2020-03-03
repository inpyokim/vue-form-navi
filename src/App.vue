<template>
  <div id="app">
    <table class="gridexample" v-form-navi>
      <thead>
        <tr>
          <th></th>
          <th>A</th>
          <th>B</th>
          <th>C</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <td><input type="text" style="width:50px" /></td>
          <td><input type="text" style="width:50px" /></td>
          <td><input type="text" style="width:50px" /></td>
        </tr>
        <tr>
          <th>2</th>
          <td><input type="text" style="width:50px" /></td>
          <td><input type="text" style="width:50px" /></td>
          <td><input type="text" style="width:50px" /></td>
        </tr>
        <tr>
          <th>3</th>
          <td><input type="text" style="width:50px" /></td>
          <td><button></button></td>
          <td><input type="text" style="width:50px" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import formNavi from './vue-form-navi';
@Component({
  directives: { formNavi },
})
export default class App extends Vue {}
</script>

<style></style>
