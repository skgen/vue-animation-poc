<template>
  <div class="pux-AppCard">
    <mk-image
      :src="url"
      :ratio="[1, 1]"
      cover
    />
    <span class="pux-AppCard-index">
      {{ props.id }}
    </span>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

type Props = {
  id: string;
};

const props = defineProps<Props>();

const url = ref(`https://picsum.photos/100?${Math.random()}`);
</script>

<style lang="scss">
.pux-AppCard {
    position: relative;
    width: 100px;
    height: 100px;
    overflow: hidden;
    border: 2px solid var(--app-border-color);
    border-radius: 20px;

    &-index {
        position: absolute;
        top: 10px;
        left: 10px;
        color: white;
    }
}
</style>
