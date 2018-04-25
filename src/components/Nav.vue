<template>
  <div>
    <el-row>
      <el-col :span="3">
          <el-menu default-active="1" class="el-menu-vertical-demo" @select="handleSelect">
            <el-menu-item index="1"><i class="el-icon-message"></i>{{$t('lang.vplay')}}</el-menu-item>
            <el-menu-item index="2"><i class="el-icon-menu"></i>{{$t('lang.chartshow')}}</el-menu-item>
            <el-menu-item index="3"><i class="el-icon-picture"></i>{{$t('lang.pdfshow')}}</el-menu-item>
            <el-menu-item index="4"><i class="el-icon-setting"></i>{{$t('lang.other')}}</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20" :offset="1" class="el-rco">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  
  export default {
      data () {
          return {
              activeName: 'second'
          }
      },
      methods: {
          handleSelect (e) {
              e = parseInt(e);
              switch (e) {
              case 1:
                  this.$router.push('/video');
                  break;
              case 2:
                  this.$router.push('/chart');
                  break;
              case 3:
                  this.$router.push('/pdf');
                  break;
              case 4:
                  this.$router.push('/other');
                  break;
              }
          }
      }
  }
</script>
<style scoped>
    .el-menu-item {
         text-align: left;
    }
    .el-rco {
        padding-top: 30px;
    }
</style>
