<template>
    <div class="table">
        <el-table
                :data="columns"
                stripe
                style="width: 100%">
            <el-table-column
                    prop="columnName"
                    label="字段名"
                    width="180">
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="extra"
                    label="自增"
                    width="60">
                <template slot-scope="scope">
                    <el-checkbox
                            v-model="scope.row[scope.column['property']].indexOf('auto_increment') !== -1"
                            disabled="">
                    </el-checkbox>
                </template>
            </el-table-column>
            <el-table-column
                    prop="tableSchema"
                    label="数据库名">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                columns: []
            }
        },
        watch: {
            '$route': 'initPageData'
        },
        created: function () {
        },
        mounted: function () {
            this.initPageData();
        },
        methods: {
            initPageData: function () {
                let vm = this;
                let table = this.$route.query.name;
                let schema = this.$route.query.schema;
                console.info('table', table, 'schema', schema);
                if (!table || !schema) {
                    vm.$router.push('/');
                    return;
                }
                axios.get('/columns?table=' + table + '&schema=' + schema).then(result => {
                    console.info('result', result);
                    vm.columns = result;
                })
            },
            columnFormatter: function (row, column) {
                console.info('row', row, 'column', column);
                let columnName = column['property'];
                if (columnName === 'extra') {
                    return row[columnName].indexOf('auto_increment') !== -1
                }
                return row[columnName];
            },
        },
    }


</script>

<style scoped lang="less">
    /*#welcome {*/
    /*background: aqua url("../../assets/welcome.jpg") no-repeat fixed center;*/
    /*}*/
    .welcome-header {
        width: 100%;
        height: 60px;
        display: -webkit-flex;
        display: flex;
        -moz-justify-content: space-between;
        -webkit-justify-content: space-between;
        justify-content: space-between;
        -webkit-align-items: center;
        align-items: center;
        background-color: #409EFF;
        .welcome-content {
            font-size: 32px;
            .user-name {
                color: #b5ffdc;
            }
        }
        .user-info {
            font-weight: bold;
            -webkit-border-radius: 20px;
            -moz-border-radius: 20px;
            border-radius: 20px;

        }
        .image {
            max-width: 100%;
            width: 100%;
            display: block;
        }
    }

    .footer {
        text-align: right;
        background: #409EFF;
        border-top: 1px solid #000;
        padding: 10px 0 10px 0;
        width: 100%;
        div {
            margin-right: 20px;
        }
    }

    .color-F00 {
        color: #F00
    }
</style>
