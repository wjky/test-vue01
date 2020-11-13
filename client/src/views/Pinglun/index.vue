<template>
<div>
    <el-card class="box-card">
        <div slot="header">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
                <el-breadcrumb-item>评论管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="name" label="标题">
            </el-table-column>
            <el-table-column prop="count" label="评论">
            </el-table-column>
            <el-table-column prop="status" label="状态">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-switch v-model="scope.row.switch" active-color="#13ce66" inactive-color="#ff4949" @change="fn(scope.row)" >
                    </el-switch>
                </template>
            </el-table-column>
        </el-table>

        <div style="margin-top: 10px" class="text-center">
            <el-pagination layout="total, prev, pager, next, jumper" :total="totalNum" :page-size="pageSize" :current-page="currentPage" background>
            </el-pagination>
        </div>

    </el-card>
</div>
</template>

<script>
export default {
    data() {
        return {
           totalNum: 50, // 共多少条
            pageSize: 10, // 每页显示多少条
            currentPage: 1, // 当前显示第几页
            tableData: [{
                count: '211',
                name: '王小虎',
                status: '正常',
                switch: true
            }, {
                count: '11',
                name: '王虎',
                status: '关闭',
                switch: false
            }, {
                count: '58',
                name: '王老虎',
                status: '关闭',
                switch: false
            }, {
                count: '58',
                name: '王二虎',
                status: '关闭',
                switch: true,
            }]
        }
    },
    methods: {
      fn(row){
        if (row.switch) {
          row.status="正常"
        } else {
           row.status="关闭"
        }
      }
    },
}
</script>

<style>

</style>
