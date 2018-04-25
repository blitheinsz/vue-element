<template>
   <div>
        <el-table :data="tableData"  class="table" stripe border>
            <el-table-column prop="date" :label="$t('lang.table.date')" sortable width="200"></el-table-column>
            <el-table-column prop="name" :label="$t('lang.table.name')" width="200"></el-table-column>
            <el-table-column prop="address" :label="$t('lang.table.address')"></el-table-column>
            <el-table-column prop="zip" :label="$t('lang.table.zip')" width="200"></el-table-column>
            <el-table-column :label="$t('lang.table.operations')" width="160">
                <template scope="scope">
                <el-button size="small">{{ $t('lang.table.edit') }}</el-button>
                <el-button size="small" type="danger">{{ $t('lang.table.delete') }}</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination class="page" layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                tableData: [{
                    date: '2017-05-02',
                    name: '姚明',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2017-06-04',
                    name: '刘翔',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '李晓梅',
                    address: '深圳市南山区科苑路 1519 单元'
                }, {
                    date: '2016-05-03',
                    name: '张三风',
                    address: '深圳市福田区银江路55栋'
                }]
            }
        },
        computed: {
            dd () {
                return '&lt;br&gt;wjwjswisjwi&lt;/br&gt;';
            }
        }
    }
</script>
<style scoped>
    .page {
        margin-top: 10px;
        float: right;
    }
</style>
