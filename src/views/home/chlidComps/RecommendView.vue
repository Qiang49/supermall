<template>
    <div class="recommend">
        <div v-for="item in recommends" :key="item" class="recommend-item">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name:'RecommendView',
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
.recommend{
    display: flex;
    width: 100%;
    padding: 10px 0 20px 0;
    border-bottom: 8px solid #ccc;
}
.recommend-item{
    flex: 1;
    width: 25%;
    box-sizing: border-box;
    padding: 0 5px;
    font-size: 12px;
    text-align: center;
}
.recommend-item img{
    width: 100%;
    margin-bottom: 5px;
}
</style>
