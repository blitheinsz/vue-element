<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div class="header-bg" :style="{ 'background-color': currentTheme }">
        <el-radio-group v-model="radio">
        <el-radio label="zh">{{$t('lang.chinese')}}</el-radio>
        <el-radio label="en">{{$t('lang.english')}}</el-radio>
        </el-radio-group>
        <el-select class="header-select" v-model="value" placeholder="请选择主题" @change="rchange">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import themeutil from './utils/themeutil'
import objectAssign from 'object-assign';
import generateColors from './utils/color';
export default {
    name: 'app',
    data () {
        return {
            radio: 'zh',
            options: [{
                value: '#20a0ff',
                label: '蓝色主题'
            }, {
                value: '#32CD32',
                label: '绿色主题'
            }, {
                value: '#ff0000',
                label: '红色主题'
            }],
            value: '蓝色主题',
            currentTheme: '#20a0ff',
            colors: {
                primary: '#20a0ff'
            }
        }
    },
    watch: {
        radio (val) {
            this.$i18n.locale = val
        }
    },
    methods: {
        rchange (e) {
            if (e === this.currentTheme) return;
            this.currentTheme = e;
            let newColor = generateColors(this.currentTheme);
            console.log(newColor);
            this.colors = objectAssign({}, this.colors, newColor);
            this.writeNewStyle();
        },
        writeNewStyle () {
            let cssText = themeutil.originalStyle;
            Object.keys(this.colors).forEach(key => {
                cssText = cssText.replace(new RegExp('(:|\\s+)' + key, 'g'), '$1' + this.colors[key]);
            });

            if (themeutil.originalStylesheetCount === document.styleSheets.length) {
                const style = document.createElement('style');
                style.innerText = cssText;
                document.head.appendChild(style);
            } else {
                document.head.lastChild.innerText = cssText;
            }
        }
    },
    created () {
        themeutil.getIndexStyle();
    },

    mounted () {
        this.$nextTick(_ => {
            themeutil.originalStylesheetCount = document.styleSheets.length;
        });
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header-bg {
    padding: 10px 0px;
}
.header-select {
    margin-left: 30px;
}
</style>
