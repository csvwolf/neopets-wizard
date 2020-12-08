<template>
  <el-menu
    class="menu"
    mode="horizontal"
    :router="true"
    :default-active="initialPath"
  >
    <el-menu-item
      v-for="route in routing"
      :key="route.path"
      :index="route.path"
    >
      {{ route.title }}
    </el-menu-item>
    <section class="menu__settings">
      <el-button
        type="text"
        @click="openSettings"
      >
        设置 Cookie
      </el-button>
    </section>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent, readonly } from 'vue'
import { useRoute } from 'vue-router'
import { ElMessageBox } from 'element-plus'

interface SetupResult {
  routing: Array<{ readonly title: string, readonly path: string }>
  initialPath: string
  openSettings: () => void
}

export default defineComponent({
  setup(): SetupResult {
    const route = useRoute()
    const routes: SetupResult['routes'] = [{
      title: 'Daily Tasks',
      path: '/daily'
    }]
    const openSettings = () => {
      ElMessageBox.prompt(
        '输入要更新的 Cookie',
        'cookies',
        {
          confirmButtonText: '发射',
          cancelButtonText: '取消',
          inputValue: localStorage.getItem('cookie')
        }
      )
        .then(({ value }) => {
          localStorage.setItem('cookie', value)
        }).catch(() => {
          console.log('error')
        })
    }
    return {
      routing: readonly(routes),
      initialPath: route.path,
      openSettings
    }
  }
})
</script>
<style lang="postcss" scoped>
.menu {
  position: relative;
  &__settings {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
