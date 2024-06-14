<script>
import {watch} from "vue";

export default {
  data() {
    return {
      i: 0,
      j: 0,
      nextStep: 0,
    }
  },
  methods: {
    bubbleSort(arr) {
      const len = arr.length;
      for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1;) {
          if (arr[j] > arr[j + 1]) {
            const tmp = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = tmp;
          }
        }
      }
      return arr;
    },
    goNextStep() {
      j++;
    }
  },
  watch: {
    nextStep(val) {
      if (val) {
        this.goNextStep()
      }
    },
    immediate: true
  },
}
</script>

<template>

</template>

<style>


</style>
