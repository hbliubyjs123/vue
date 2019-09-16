<template>
  <div>
    <h2>{{msg}}</h2>
    <hr/>
    <h3>{{count}}</h3>
    <div>
      <button @click="add(10)">+</button>
      <button @click="reduce">-</button>
    </div>
  </div>
</template>

<script>
import store from '@/vuex/store'
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
export default {
  data () {
    return {
      msg: 'Hello Vuex'
    }
  },
  store,
  // // computed 属性可以在输出前，对data中的值进行改变
  // // 第一种方式 使用return
  // computed: {
  //   count () {
  //     // 改变data中的值
  //     return this.$store.state.count
  //   }
  // }

  // 第二种方式 使用es6中的箭头函数
  // computed:mapState ({
  //   count: state => state.count
  // })

  // 第三种方式 通过mapState的数组来赋值
  // computed:mapState(['count']),
  methods: {
    ...mapMutations(['add', 'reduce']),
    ...mapActions(['addAction', 'reduceAction'])
  },

  // 改造computed 使用es6的扩展运算符
  computed: {
    ...mapState(['count']),
    ...mapGetters(['count'])
  }
}
</script>

<style>

</style>
