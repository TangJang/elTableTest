<template>
    <div>
        <el-button @click="toPage('/views')" >页面1</el-button>
        <el-button @click="toPage('/views2')">页面2</el-button>

        <el-table
            :data="tableData"
            stripe
            style="width: 100%"
            @row-click="rowClick"
            highlight-selection-row
        >
            <el-table-column
                v-for="(item,index) in listKey"
                :key="item + index"
                :label="item"
                min-width="130"
                sortable="custom"
                prop="lastFollowTime"
            >
                <template slot-scope="{ row }">
                    <div>
                        {{ row[item] }}
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
const listKey = ['test1','test2','test3','test4','test5','test6','test7']
const list = () => {
    let arr = [];
    for (let i = 0; i < 40; i++) {
        const data = {};
        listKey.forEach(it=>{
            data[it] = i;
        })
        arr.push(data)
    }
    return arr;
}
export default {
    data(){
        return {
            tableData: list(),
            listKey:listKey,
        }
    },
    methods:{
        toPage(newPath){
            this.$router.push({path: newPath || '/'});
        },
        rowClick(row){
            console.log(row)
        },
    }
}
</script>

<style scoped>

</style>