<template>
  <div class="hello-list">
    <h1 class="banner-h1">排序可视化</h1>
    <p class="banner-p">一套对部分排序算法的可视化程序</p>
    <router-link to="/feature">
      <el-button type="primary" plain class="start-button" @click="">开始使用</el-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data() {
    return {
      msg: 'Welcome to Sort Visualization'
    }
  }
}
</script>

<style scoped>
.hello-list{

}
.banner-h1{
  margin-top: 10%;
  font-size: 50px;
  font-weight: bolder;
  line-height: 60px;
  color: #555;
  height: 60px;
}

.banner-p{
  font-size: 28px;
  line-height: 28px;
  color: #888;
  margin: 20px 0 5px;
  height: 28px;
}

.start-button{
  font-size: 30px;
  font-weight: bolder;
  margin-top: 60px;
  height: 60px;
  width: 210px;
}
</style>
