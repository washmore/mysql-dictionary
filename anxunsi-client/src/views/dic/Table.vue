<template>
    <div class="table">
        <el-tabs type="border-card"
                 :value="getDefaultActiveTab"
                 @tab-click="tabTab">
            <el-tab-pane label="基本信息" name="基本信息">
                <div class="table-info">
                    <div>表名:{{table.tableName}}</div>
                    <div>创建时间:{{table.createAt}}</div>
                </div>
                <div class="table-info">
                    <strong>表注释:{{table.tableComment}}</strong>
                </div>
            </el-tab-pane>
            <el-tab-pane label="字段信息" name="字段信息">
                <el-table
                        border
                        :data="columns"
                        stripe
                        style="width: 100%">
                    <el-table-column
                            prop="columnName"
                            label="名称"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="columnType"
                            label="类型"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="isNullable"
                            label="允许为空"
                            width="80">
                        <template slot-scope="scope">
                            <el-checkbox
                                    v-model="scope.row[scope.column['property']].indexOf('YES') !== -1"
                                    disabled>
                            </el-checkbox>
                        </template>
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="columnName"
                            :formatter="checkAutoIncrOrPrimary"
                            label="标注"
                            width="100">
                    </el-table-column>
                    <el-table-column
                            prop="columnDefault"
                            label="默认值"
                            :formatter="columnFormatter"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="columnComment"
                            label="注释"
                    >
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="索引信息" name="索引信息">
                功能开发中...
            </el-tab-pane>
            <el-tab-pane label="建表语句" name="建表语句">
                功能开发中...
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import moment from 'moment';

    export default {
        data() {
            return {
                columns: [],
                table: {},
            }
        },
        computed: {
            getDefaultActiveTab: function () {
                return localStorage.getItem("default_active_tab") || '字段信息';
            },
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
                if (!table || !schema) {
                    vm.$router.push('/');
                    return;
                }
                axios.get('/columns?table=' + table + '&schema=' + schema).then(result => {
                    vm.columns = result;
                })
                axios.get('/table?table=' + table + '&schema=' + schema).then(result => {
                    vm.table = {
                        ...result,
                        createAt: moment(result.createTime).format("YYYY-MM-DD HH:mm:ss")
                    };
                })
            },
            tabTab: (tab) => {
                localStorage.setItem('default_active_tab', tab.name);
            },
            columnFormatter: function (row, column) {
                let columnName = column['property'];
                if (columnName === 'extra') {
                    return row[columnName].indexOf('auto_increment') !== -1
                }
                if (columnName === 'columnDefault') {
                    if (row[columnName] === null) {
                        return 'NULL';
                    } else if (row[columnName] === '') {
                        return '空字符串';
                    } else {
                        return row[columnName];
                    }
                }

                return row[columnName];
            },
            checkAutoIncrOrPrimary: function (row, column) {
                let arr = [];
                if (row['columnKey'].indexOf('PRI') !== -1) {
                    arr.push('主键');
                } else if (row['columnKey'].indexOf('UNI') !== -1) {
                    arr.push('唯一索引');
                } else if (row['columnKey'].indexOf('MUL') !== -1) {
                    arr.push('索引');
                }
                if (row['extra'].indexOf('auto_increment') !== -1) {
                    arr.push('自增');
                }
                return arr.join(',');
            }
        },
    }


</script>

<style scoped lang="less">
    .table-info {
        width: 100%;
        display: -webkit-flex;
        display: flex;
        -moz-justify-content: space-between;
        -webkit-justify-content: space-between;
        justify-content: space-between;
        -webkit-align-items: center;
        align-items: center;
        // background-color: #b2ffeb;
        padding: 6px;
        div {
            width: 48%;
        }
    }
</style>
