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
                        <div style="width: 100%;text-align: center">
                            <el-checkbox v-model="showComment">显示中文表名(表注释)</el-checkbox>
                        </div>
                        <el-menu
                                @select="chooceTable"
                                @open="chooceSchema"
                                :unique-opened="true"
                                :default-active="defaultActive"
                        >
                            <el-submenu :index="schemaName" v-for="(tables,schemaName) in schematas">
                                <template slot="title"><i class="el-icon-setting"></i>{{schemaName}}</template>
                                <el-menu-item :index="table.tableName+','+schemaName"
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
        <div class="beta-bar">
            <a target="_blank" href="https://github.com/1102568869/mysql-dictionary">Fork Github</a>
        </div>
    </div>

</template>

<script>

    export default {
        data() {
            return {
                schematas: [],
                showComment: false,
                defaultActive: ''
            }
        },
        watch: {},
        created: function () {

        },
        mounted: function () {
            this.defaultActive = this.$route.query.name + ',' + this.$route.query.schema;
            let dbs = localStorage.getItem('mysql_dbs');
            if (!dbs || dbs === '') {
                this.$router.push('/dic/chooce');
                return;
            }
            axios.get(`/tables/group?dbs=` + dbs).then(result => {
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
            },
            chooceTable: function (index, indexPath) {
                this.$router.push({
                    path: '/dic/table',
                    query: {
                        schema: indexPath[0],
                        name: index.split(',')[0],
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
            margin-right: 80px;
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

    .beta-bar {
        display: block;
        position: fixed;
        top: 0;
        right: 0;
        padding: 8px 0;
        z-index: 999;
        width: 200px;
        background-color: #fff;
        color: #20e9ff;
        text-align: center;
        transform: translate3d(60px, 24px, 0) rotate(45deg);
        a{
            color: #20e9ff;
            text-decoration: none;
        }
    }
</style>
