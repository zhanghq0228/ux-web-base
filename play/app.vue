<!--
 * @Description: 
 * @Date: 2023-02-09 14:28:42
 * @Author: didi
 * @LastEditTime: 2023-05-24 11:29:22
-->
<template>
  <div>
    <ux-button>按钮</ux-button>
    <ux-button type="primary">123</ux-button>
    <el-button>这是按钮</el-button>
    <el-button type="danger">这是按钮</el-button>
  </div>
</template>
<script lang="ts" setup>
import { UxButton } from 'ux-web-base-components';
import { isArray } from 'ux-web-base-utils';
console.log(`output->isArray([])`, isArray([]));
</script>
