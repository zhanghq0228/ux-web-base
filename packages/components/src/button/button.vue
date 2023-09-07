<template>
  <button class="ux-button" :class="buttonStyle">
    <slot />
  </button>
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
