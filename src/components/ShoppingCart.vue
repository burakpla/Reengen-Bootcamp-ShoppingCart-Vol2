<template>
    <div id="ShoppingCart">
        <p>Cart</p>
        <p>items: {{cart.length}}</p>
        <p>Total: ${{total}}</p>
    </div>
</template>
<script>
export default {
    name: 'shopping-cart',
    components: {},
    props: ['cart', 'total'],
    computed: {
    }
    
    
}
</script>

<style>
p {
    margin: 0;
}
#ShoppingCart {
    padding: 10px;
    border-radius: 5px;
    background: rgb(15, 31, 44);
}
</style>
