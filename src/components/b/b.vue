<template>
    <div class="b">
        组件B
        <div class="content">
            <div class="child">
                可能是文字把
            </div>
        </div>
    </div>
</template>

<script>

export default {
  props: {
  },
};
</script>
<style scoped lang="scss">
    .b{
        .content{
            width: 200px;
            height: 200px;
            background: red;
            display: table-cell;
            text-align: center;
            vertical-align: middle;
            .child{
                width: 100px;
                height: 100px;
                background: aqua;
                /*margin: auto;*/
                display: inline-block;
            }
        }
    }
</style>
