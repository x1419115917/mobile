<!--  -->
<template>
  <div class="con">
    <van-nav-bar
      title="首页"
      left-text="返回"
      fixed
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="content">
      <van-row class="item">
        <van-col span="8">span: 8</van-col>
        <van-col span="8">span: 8</van-col>
        <van-col span="8">span: 8</van-col>
      </van-row>
      <!-- 两端对齐 -->
      <van-row class="item" type="flex" justify="space-between">
        <van-col span="6">span: 6</van-col>
        <van-col span="6">span: 6</van-col>
        <van-col span="6">span: 6</van-col>
      </van-row>

      <!-- 每个元素的两侧间隔相等 -->
      <van-row class="item" type="flex" justify="space-around">
        <van-col span="6">span: 6</van-col>
        <van-col span="6">span: 6</van-col>
        <van-col span="6">span: 6</van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import { iconsList } from '@/api/base'
export default {
  name: 'login',
  data () {
    return {
      tableLoading: false
    };
  },

  components: {},

  computed: {},

  created () {
    this.getPageList()
  },

  mounted() {},

  methods: {
    onClickLeft() {
      Toast('返回');
    },
    async getPageList () {
      this.tableLoading = true
      let data = {
        FLAG: 1,
        pageIndex: 1,
        pageSize: 10
      }
      let res = await iconsList(data)
      this.tableLoading = false
      if (res.data.code === 0) {
        console.log(res.data.content)
        this.dataList = res.data.content.rows
      }
    },
  }
}

</script>
<style lang='scss' scoped>
.content{
  margin-top: 46px;
  width: 100vw;
  .item{
    padding: 15px 0;
  }
}
</style>