<template>
<el-card class="box-card">
    <el-table :data="tableData" border class="mb-3" v-loading="listLoading">
        <el-table-column label="编号" width="100" type="index">
            <!--    <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template> -->
        </el-table-column>
        <el-table-column prop="title" label="新闻标题" width="140" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="content" label="新闻内容" show-overflow-tooltip>
        </el-table-column>
        <el-table-column label="操作" width="200">
            <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>

    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" layout="total,sizes,prev, pager, next,jumper" :total="totalNum" :page-size="pageSize" :page-sizes="[5, 10, 20, 30, 40]" :current-page="currentPage" background class="text-center">
    </el-pagination>
</el-card>
</template>

<script>
export default {
    data() {
        return {
            tableData: [],
            totalNum: 0, // 共多少条
            pageSize: 5, // 每页显示多少条
            currentPage: 1, // 当前显示第几页
            listLoading: false, // 数据返回慢时，显示加载动画
        };
    },

    mounted() {
        this.getArtiacle(this.currentPage, this.pageSize);
    },
    methods: {
        getArtiacle() {
            this.axios
                .get("/get-article")
                .then((res) => {
                    console.log(res.data);
                    this.tableData = res.data.listData;
                    this.totalNum = res.data.count;
                })
                .catch((err) => {
                    console.error(err);
                });
        },

        handleEdit(index, row) {
            this.$router.push("/edit-article/" + row.id);
        },

        handleDelete(index, row) {
            this.$confirm("此操作将永久删除该链接, 是否继续?", "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning",
                })
                .then(() => {
                    this.axios.post("/delete-artiacle", {
                        id: row.id
                    }).then((res) => {
                        if (res.data.code == 0) {
                            this.$message(res.data.msg);
                            this.getArtiacle(this.currentPage, this.pageSize);
                        }
                    });
                })
                .catch(() => {
                    this.$message({
                        type: "info",
                        message: "已取消删除",
                    });
                });
        },
        //点击第几页
        handleCurrentChange(val) {
            this.currentPage = val;
            this.getArtiacle(this.currentPage, this.pageSize);
        },
        // 每页下拉显示数据
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            this.pageSize = val;
            this.getArtiacle(this.currentPage, this.pageSize);
        },

        getArtiacle(currentPage, pageSize) {
            this.listLoading = true;
            this.axios
                .get("/getnews", {
                    params: {
                        curr: currentPage,
                        limit: pageSize,
                    },
                })
                .then((res) => {
                    this.listLoading = false;
                    this.totalNum = res.data.count;
                    this.tableData = res.data.listData;
                });
        },
    },
};
</script>

<style>
.el-table td,
.el-table th {
    text-align: center !important;
}

.box-card {
    min-height: 500px;
}
</style>
