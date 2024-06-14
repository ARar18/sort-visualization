<script xmlns:el-col="http://www.w3.org/1999/html">
import Bubble from "./algorithm/Bubble.vue";
export default {
  data(){
    return{
      useRandomData: true,
      num: [8],
      nextStep: false,
      algorithmVisible: [6],
      list: null,
    }
  },
  methods:{
    loadData(){
      if(this.useRandomData){
        for(var i = 0; i < 8; i ++){
          this.num[i] = Math.floor((Math.random()*100)+1);
        }
      }
      this.list = this.num.map((item, index) => {
        return {index, value: item}
      })
    },
    chooseAlgorithm(val){

    },
  },
  components:{
    Bubble,
  },
  computed: {
    max() {
      let max = 0
      this.num.forEach(item => {
        if (item > max) {
          max = item
        }
      })
      return max
    }
  }
}
</script>

<template>
  <div>
    <el-container>
      <el-header>
        <div><span>排序可视化</span></div>
      </el-header>
      <div class="line"></div>
      <el-container>
        <el-aside class="aside">
          <div>
            <el-menu
              default-active="2"
              class="el-menu"
            >
              <el-menu-item index="0" @click="chooseAlgorithm(0)">冒泡排序</el-menu-item>
<!--              <el-menu-item index="2">插入排序</el-menu-item>-->
<!--              <el-menu-item index="3">选择排序</el-menu-item>-->
<!--              <el-menu-item index="4">快速排序</el-menu-item>-->
<!--              <el-menu-item index="5">归并排序</el-menu-item>-->
              <el-menu-item index="5" @click="chooseAlgorithm(5)">堆排序</el-menu-item>
            </el-menu>
            <div class="line"></div>
            <el-switch
              v-model="useRandomData"
              active-text="随机数值"
              inactive-text="选定数值">
            </el-switch>
            <el-input-number size="mini" v-bind:disabled="useRandomData" v-model="num[0]" :min=0 :max=100></el-input-number>
            <el-input-number size="mini" v-bind:disabled="useRandomData" v-model="num[1]" :min=0 :max=100></el-input-number>
            <el-input-number size="mini" v-bind:disabled="useRandomData" v-model="num[2]" :min=0 :max=100></el-input-number>
            <el-input-number size="mini" v-bind:disabled="useRandomData" v-model="num[3]" :min=0 :max=100></el-input-number>
            <el-input-number size="mini" v-bind:disabled="useRandomData" v-model="num[4]" :min=0 :max=100></el-input-number>
            <el-input-number size="mini" v-bind:disabled="useRandomData" v-model="num[5]" :min=0 :max=100></el-input-number>
            <el-input-number size="mini" v-bind:disabled="useRandomData" v-model="num[6]" :min=0 :max=100></el-input-number>
            <el-input-number size="mini" v-bind:disabled="useRandomData" v-model="num[7]" :min=0 :max=100></el-input-number>
            <el-button type="primary" @click="loadData">载入数据</el-button>
          </div>
        </el-aside>
        <el-main>
          <el-row :gutter="20">
            <el-col :span=16>
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>可视化显示</span>
                </div>
                <div class="sortlist">
                  <transition-group name="flip-list" tag="p">
                    <div
                      class="item"
                      v-for="item in list"
                      :key="item.index"
                      :style="{height: (item.value / max * 100) + '%'}"
                    >
                      <span class="value">
                        {{ item.value }}
                      </span>
                    </div>
                  </transition-group>
                </div>
              </el-card>
            </el-col>
            <el-col :span=8>
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>排序源代码</span>
                </div>
                <div v-for="o in 4" :key="o">
                  {{'列表内容 ' + o }}
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.el-header{
  display: flex; //设置显示为flex布局
  justify-content: space-between;//设置为flex左右布局
  padding-left: 0;//左内边距为0（Logo贴左边）
  align-items: center;//元素上下居中（防止右边按钮贴上下边）
  color: #fff;
  font-size: 20px;
  div{
    margin-left: 85px;
    span{
      font-weight: bolder;
      font-size: 30px;
      color: #409EFF
    }
  }
}
.item {
  background-color: #409EFF;
  margin-bottom: 10px;
}
.line{
  width: 100%;
  height: 1px;
  background: #909399;
  margin-bottom: 30px;
}
.el-menu{
  border-right: None;
}
.aside{
  height: 100%;
}
.el-container{
  height: 100%;
}
.el-switch{
  margin-bottom: 30px;
}
.el-input-number{
  margin-bottom: 15px;
}
.flip-list-move {
  transition: transform 0.5s;
}
</style>
