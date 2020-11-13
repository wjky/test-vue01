<template>
<div>
    <el-card class="box-card">
        <div slot="header">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
                <el-breadcrumb-item>素材管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div>
            <el-radio-group v-model="radio1">
                <el-radio-button label="全选"></el-radio-button>
                <el-radio-button label="收藏"></el-radio-button>
            </el-radio-group>

            <el-button type="success" size="small" class="float-right" @click="scVisible=true">上传素材</el-button>

            <el-row :gutter="20">
                <el-col class="mt-3" :lg="4" :md="6" :sm="12">
                    <div class="grid-content bg-purple">
                        <el-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" fit="fill"></el-image>
                    </div>
                </el-col>
                <el-col class="mt-3" :lg="4" :md="6" :sm="12">
                    <div class="grid-content bg-purple">
                        <el-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" fit="fill"></el-image>
                    </div>
                </el-col>
                <el-col class="mt-3" :lg="4" :md="6" :sm="12">
                    <div class="grid-content bg-purple">
                        <el-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" fit="fill"></el-image>
                    </div>
                </el-col>
                <el-col class="mt-3" :lg="4" :md="6" :sm="12">
                    <div class="grid-content bg-purple">
                        <el-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" fit="fill"></el-image>
                    </div>
                </el-col>
                <el-col class="mt-3" :lg="4" :md="6" :sm="12">
                    <div class="grid-content bg-purple">
                        <el-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" fit="fill"></el-image>
                    </div>
                </el-col>
                <el-col class="mt-3" :lg="4" :md="6" :sm="12">
                    <div class="grid-content bg-purple">
                        <el-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" fit="fill"></el-image>
                    </div>
                </el-col>
                <el-col class="mt-3" :lg="4" :md="6" :sm="12">
                    <div class="grid-content bg-purple">
                        <el-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" fit="fill"></el-image>
                    </div>
                </el-col>
            </el-row>
        </div>

        <div style="margin-top: 10px" class="text-center">
            <el-pagination layout="total, prev, pager, next, jumper" :total="totalNum" :page-size="pageSize" :current-page="currentPage" background>
            </el-pagination>
        </div>
    </el-card>

    <el-dialog title="上传素材" :visible.sync="scVisible" width="35%">
        <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">
                只能上传jpg/png文件，且不超过500kb
            </div>
        </el-upload>
    </el-dialog>
</div>
</template>

<script>
export default {
    data() {
        return {
            scVisible: false,
            radio1: "全选",
            totalNum: 50, // 共多少条
            pageSize: 10, // 每页显示多少条
            currentPage: 1, // 当前显示第几页
        };
    },
};
</script>

<style>
</style>
