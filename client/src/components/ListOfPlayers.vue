<template>
    <tr >
        <th scope="row">{{index+1}}</th>
        <td>{{user.username}}</td>          
    </tr>
</template>

<script>
export default {
 name: 'List',
 props: ['user', 'index']
}
</script>

<style>

</style>
