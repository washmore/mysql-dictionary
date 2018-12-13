<template>
    <div class="choose">
        <el-dialog
                title="请选择需要展示的数据库:"
                :visible="true"
                width="30%"
        >
            <el-select v-model="mysql_dbs" multiple placeholder="请选择">
                <el-option
                        v-for="schema in schematas"
                        :key="schema.schemaName"
                        :label="schema.schemaName"
                        :value="schema.schemaName">
                </el-option>
            </el-select>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="setMysqlDbs">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                schematas: [],
                mysql_dbs: [],
            }
        },
        watch: {},
        created: function () {
        },
        mounted: function () {
            axios.get(`/schemata/all`).then(result => {
                this.schematas = result;
            })
        },
        methods: {
            setMysqlDbs: function () {
                if (this.mysql_dbs.length === 0) {
                    this.$message.error('请至少选择一个数据库!');
                    return;
                }
                localStorage.setItem('mysql_dbs', this.mysql_dbs.join(','));
                this.$router.push('/');
            }
        },
    }


</script>