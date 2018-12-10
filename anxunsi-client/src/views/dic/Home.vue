<template>
    <div id="welcome">
        <el-container>
            <el-header class="welcome-header">
                <div class="welcome-content">
                    &nbsp;Mysql数据字典
                </div>
            </el-header>
            <el-container>
                <div>
                    <el-aside width="100%">
                        <el-menu @open="chooceSchema">
                            <el-submenu :index="schema.schemaName" v-for="schema in schematas">
                                <template slot="title"><i class="el-icon-document"></i>{{schema.schemaName}}</template>
                                <el-menu-item :index="schema.schemaName+table.tableName"
                                              v-for="table in tables[schema.schemaName]">
                                    <span :title="table.tableComment">{{table.tableName}}</span>
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
                    © 2018 - 叮当家的小账本 Powered by Vue.js && element-ui
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
                tables: {}

            }
        },
        watch: {},
        created: function () {
            axios.get(`/schemata/all`).then(result => {
                console.info('result', result);
                this.schematas = result;
            })
        },
        mounted: function () {

        },
        methods: {
            chooceSchema: function (schemaName) {
                if (this.tables[schemaName] && this.tables[schemaName].length > 0) {
                    return;
                }
                var vm = this;
                axios.get("/" + schemaName + "/tables").then(result => {
                    console.info('result', result);
                    vm.$set(vm.tables, schemaName, result);

                })
            }
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
