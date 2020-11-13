<template>
<div>
    <el-card>
        <div slot="header" class="clearfix">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
                <el-breadcrumb-item>口碑管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div>
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="状态">
                    <el-radio-group v-model="form.shstatus">
                        <el-radio label="全部"></el-radio>
                        <el-radio label="待审核"></el-radio>
                        <el-radio label="审核通过"></el-radio>
                        <el-radio label="审核失败"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="口碑来源">
                    <el-select v-model="form.origin" placeholder="请选择来源">
                        <el-option label="学员" value="xueyuan"></el-option>
                        <el-option label="同事" value="tongshi"></el-option>
                        <el-option label="网络" value="wangluo"></el-option>
                        <el-option label="朋友" value="pengyou"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="活动时间">
                    <el-date-picker v-model="form.date" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                    </el-date-picker>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="onSubmit">筛选</el-button>
                </el-form-item>
            </el-form>
        </div>
    </el-card>

    <el-card class="mt-3">
        <div slot="header" class="clearfix">
            <span>根据筛选条件共查询1234条结果：</span>
        </div>
        <div>
            <el-table :data="tableData" style="width: 100%" v-loading="listLoading">
                <el-table-column label="封面">
                    <template>
                        <el-image style="width: 60px; height: 60px" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" fit="fill"></el-image>
                    </template>
                </el-table-column>
                <el-table-column prop="title" label="标题">
                </el-table-column>
                <el-table-column label="状态">
                    <template slot-scope="scope">
                        <el-tag v-if="scope.row.status==1">待审核</el-tag>
                        <el-tag type="success" v-if="scope.row.status==2">审核通过</el-tag>
                        <el-tag type="danger" v-if="scope.row.status==3">审核失败</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="pubdate" label="发布日期">
                </el-table-column>
                <el-table-column label="操作">
                    <template>
                        <el-button type="primary" size="mini" icon="el-icon-edit" circle></el-button>
                        <el-button size="mini" type="danger" icon="el-icon-delete" circle></el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div style="margin-top: 10px;" class="text-right">
                <el-pagination layout="total, prev, pager, next, jumper" :total="totalNum" :page-size="pageSize" :current-page="currentPage" background>
                </el-pagination>
            </div>
        </div>
    </el-card>
</div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                shstatus: '全部',
                origin: '',
                date: '',
            },
            tableData: [{
                title: '王小虎',
                status: 1,
                pubdate: '2016-05-02',
            }, {
                title: '王小虎',
                status: 2,
                pubdate: '2016-05-02',
            }, {
                title: '王小虎',
                status: 3,
                pubdate: '2016-05-02',
            }],
            totalNum: 50, // 共多少条
            pageSize: 10, // 每页显示多少条
            currentPage: 1, // 当前显示第几页
            listLoading: false, // 数据返回慢时，显示加载动画
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        }
    },
}
</script>

<style>

</style>
