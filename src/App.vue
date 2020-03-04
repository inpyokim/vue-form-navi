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
          <td><button>Test</button></td>
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
          <td><textarea></textarea></td>
          <td><input type="text" style="width:50px" /></td>
        </tr>
        <template v-if="hasTable">
          <tr>
            <th>4</th>
            <td><input type="text" style="width:50px" /></td>
            <td><button></button></td>
            <td><input type="text" style="width:50px" /></td>
          </tr>
        </template>
      </tbody>
    </table>
    <button @click="toggle">toggle</button>
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line import/no-extraneous-dependencies
import { Component, Vue } from 'vue-property-decorator';
import formNavi from './vue-form-navi/index';
@Component({
  directives: { formNavi },
})
export default class App extends Vue {
  protected hasTable = false;

  protected toggle() {
    this.hasTable = !this.hasTable;
  }
}
</script>

<style></style>
