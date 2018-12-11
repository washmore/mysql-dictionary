<template>
    <div class="welcome">
        <el-container>
            <el-header class="welcome-header">
                <div class="welcome-content">
                    &nbsp;Mysql数据字典
                </div>
                <div style="width: 50%;">开发人员check各个数据库以及表的comment信息/主键/自增/索引是否完备.查漏补缺</div>
                <el-button
                        class="user-info"
                        @click="resetDbs"
                >重新选择数据库
                </el-button>
            </el-header>
            <el-container>
                <div>
                    <el-aside width="100%">
                        <el-checkbox v-model="showComment">显示中文表名(comment)</el-checkbox>
                        <el-menu
                                @select="chooceTable"
                                @open="chooceSchema"
                                :unique-opened="true"
                        >
                            <el-submenu :index="schemaName" v-for="(tables,schemaName) in schematas">
                                <template slot="title"><i class="el-icon-setting"></i>{{schemaName}}</template>
                                <el-menu-item :index="table.tableName"
                                              v-for="table in tables">
                                    <span :title="showComment&&table.tableComment&&table.tableComment!==''? table.tableName:table.tableComment">
                                        {{showComment&&table.tableComment&&table.tableComment!==''? table.tableComment:table.tableName}}
                                    </span>
                                </el-menu-item>
                            </el-submenu>
                        </el-menu>
                    </el-aside>
                </div>
                <el-main>
                    <router-view/>
                </el-main>
            </el-container>
            <el-footer class="footer">
                <div>
                    开发人员 <a target="_blank" href="https://blog.washmoretech.com">洗澡狂魔(washmore)</a>
                    && <a target="_blank" href="https://gitee.com/lanlanstar">兰兰(lanlanstar)</a><br/>
                    © 2018 - Mysql数据字典 Powered by egg.js && Vue.js && element-ui
                </div>
            </el-footer>
        </el-container>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                schematas: [],
                showComment: false,
            }
        },
        watch: {},
        created: function () {

        },
        mounted: function () {
            let dbs = localStorage.getItem('mysql_dbs');
            if (!dbs || dbs === '') {
                this.$router.push('/dic/chooce');
                return;
            }
            axios.get(`/tables/group?dbs=` + dbs).then(result => {
                console.info('result', result);
                this.schematas = result;
            })
        },
        methods: {
            resetDbs: function () {
                this.$confirm('确认当前操作?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    localStorage.removeItem('mysql_dbs');
                    this.$router.replace('/dic/chooce');
                }).catch(() => {

                });

            },
            chooceSchema: function (index) {
                console.info('index', index);
            },
            chooceTable: function (index, indexPath) {
                console.info('index', index, 'indexPath', indexPath)
                this.$router.push({
                    path: '/dic/table',
                    query: {
                        schema: indexPath[0],
                        name: index + '',
                    },
                })
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
        background-color: #20e9ff;
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
        background: #20e9ff;
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
