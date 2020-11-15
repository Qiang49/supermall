<template>
    <div class="tab-control">
        <div v-for="(item, index) in titles" :key="(item,index)" class="tab-control-item" :class="{active:index === currentIndex}" @click="itemCilck(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TabControl',
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data () {
        return {
            currentIndex:0
        }
    },
    methods:{
        itemCilck(index){
            this.currentIndex = index
        }
    }
}
</script>

<style scoped>
    .tab-control{
        display: flex;
        height: 40px;
        line-height: 40px;
    }
    .tab-control-item{
        flex: 1;
        text-align: center;
    }
    .active{
        color: rgb(255, 143, 150);
        
    }
    .active span{
        border-bottom: 3px solid rgb(255, 143, 150);
        padding: 5px;
    }
</style>


