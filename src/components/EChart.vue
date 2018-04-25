<template>
    <div class="ebox">
        <div class="echarts">
         <IEcharts :option="bar" :loading="loading" @ready="onReady" @click="onClick"></IEcharts>
         <button @click="doRandom">{{$t("lang.message1")}}</button>
        </div>
        <div class="echarts">
        <IEcharts :option="pie" :loading="loading"></IEcharts>
        </div>
  </div>
</template>
<script>
    import IEcharts from 'vue-echarts-v3/src/lite.vue'
    import 'echarts/lib/chart/bar'
    import 'echarts/lib/chart/pie'
    import 'echarts/lib/component/title'

    export default {
        name: 'view',
        components: {
            IEcharts
        },
        props: {
        },
        data: () => ({
            loading: false,
            bar: {
                title: {
                    text: 'ECharts Hello World'
                },
                tooltip: {},
                xAxis: {
                    data: ['Shirt', 'Sweater', 'Chiffon Shirt', 'Pants', 'High Heels', 'Socks']
                },
                yAxis: {},
                series: [{
                    name: 'Sales',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            },
            pie: {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    show: true,
                    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: [
                          { value: 335, name: '直接访问' },
                          { value: 310, name: '邮件营销' },
                          { value: 234, name: '联盟广告' },
                          { value: 135, name: '视频广告' },
                          { value: 1548, name: '搜索引擎' }
                        ]
                    }
                ]
            }
        }),
        methods: {
            doRandom () {
                const that = this
                let data = []
                for (let i = 0, min = 5, max = 99; i < 6; i++) {
                    data.push(Math.floor(Math.random() * (max + 1 - min) + min))
                }
                // that.loading = !that.loading
                that.bar.series[0].data = data
            },
            onReady (instance) {
                console.log(instance)
            },
            onClick (event, instance, echarts) {
                console.log(arguments)
            }
        }
}
</script>
<style scoped>
  .echarts {
    width: 400px;
    height: 400px;
  }
  .ebox {
      height: 500px;
  }
</style>