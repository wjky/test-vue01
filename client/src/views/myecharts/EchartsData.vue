<template>
<div>
    <el-card class="box-card">
        <div slot="header">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
                <el-breadcrumb-item>评论统计</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div>
            <div id="ebox" style="width:700px;height:500px" ref="mybox">

            </div>
        </div>
    </el-card>
</div>
</template>

<script>
import echarts from 'echarts'
export default {
    data() {
        return {
            option: {
                title: {
                    //主标题文本
                    text: 'ECharts 入门示例',
                    //是否显示标题组件
                    show: true,
                    //主标题文本
                    link: 'https://echarts.apache.org/',
                    //主标题文本
                    target: 'blank',
                    //主标题文本样式
                    textStyle: {
                        color: 'pink',
                        fontStyle: 'italic',
                        /* textBorderColor:'blue',
                        textBorderWidth:20, */
                    },

                    //副标题文本
                    subtext: '好好学习',
                    //副标题文本样式
                    subtextStyle: {
                        color: 'green',
                        fontSize: 16
                    },
                    left: "left",
                    textAlign: "left",
                    itemGap: 15

                },
                tooltip: {
                    //是否显示提示框组件，包括提示框浮层
                    show: true,
                    //触发类型
                    trigger: 'axis',
                    //提示框浮层内容格式器
                    formatter: '{a}-{b}:{c}',
                    backgroundColor: '#ccc',
                    //提示框浮层的文本样式
                    textStyle: {
                        color: 'yellow'
                    }
                },
                legend: {
                    data: ['一月销量','二月销量'],
                    show: true,

                },
                xAxis: {
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                },
                yAxis: {},
                series: [{
                    name: '一月销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                },{
                    name: '二月销量',
                    type: 'bar',
                    data: [15, 30,45, 60, 22, 47]
                }]
            }
        }
    },
    mounted() {
        echarts.init(this.$refs.mybox).setOption(this.option)

    },

}
</script>

<style>

</style>
