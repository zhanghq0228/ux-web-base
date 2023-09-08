<template>
  <div>
    <button class="ux-button red" :class="buttonStyle">
      <slot />
    </button>
    <el-button>这是按钮</el-button>
    <el-button type="danger">这是按钮</el-button>
    <button class="ux-button red" :class="buttonStyle">
      <slot />
    </button>
  </div>
</template>

<script lang="ts" setup>
import './style/index.less';
import { computed } from 'vue';
// defineOptions({ name: 'UxButton' });
type ButtonProps = {
  type?: string;
  size?: string;
};
const buttonProps = defineProps<ButtonProps>();

const buttonStyle = computed(() => {
  return { [`ux-button--${buttonProps.type}`]: buttonProps.type };
});
</script>
