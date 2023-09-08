<template>
  <div>
    <button class="ux-button red" :class="buttonStyle">
      <slot />
    </button>
    <el-button>这是按钮TEST1</el-button>
    <el-button type="danger">这是按钮TEST2</el-button>
    <el-switch v-model="value1" />
    <button class="ux-button red" :class="buttonStyle">
      <slot />
    </button>
  </div>
</template>

<script lang="ts" setup>
import './style/index.less';
import { computed, ref } from 'vue';
import { ElButton } from 'element-plus';
// defineOptions({ name: 'UxButton' });
type ButtonProps = {
  type?: string;
  size?: string;
};
const buttonProps = defineProps<ButtonProps>();
const value1 = ref(true);
const buttonStyle = computed(() => {
  return { [`ux-button--${buttonProps.type}`]: buttonProps.type };
});
</script>
