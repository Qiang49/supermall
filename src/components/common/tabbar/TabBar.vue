<template>
<div id="tab-bar">
    <slot></slot>
</div>
</template>

<script>
export default {
    name:'TabBar' 
}
</script>

<style scoped>
#tab-bar{
  position: fixed;
  display: flex;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f6f6f6;
  box-shadow: 0 -3px 1px rgba(100, 100, 100, .05);
}
</style>
