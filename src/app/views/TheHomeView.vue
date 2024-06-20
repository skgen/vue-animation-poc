<template>
  <div class="pux-TheHomeView">
    <div class="pux-TheHomeView-actions">
      <mk-button
        outlined
        @click="() => cardStore.prev()"
      >
        Prev
      </mk-button>
      <mk-button
        outlined
        @click="() => cardStore.shuffle()"
      >
        Shuffle
      </mk-button>
      <mk-button
        outlined
        @click="() => cardStore.next()"
      >
        Next
      </mk-button>
    </div>
    <div class="pux-TheHomeView-grid">
      <transition-group name="pux-AppCard">
        <AppCard
          v-for="(card, i) of cardStore.cards"
          :id="card"
          :key="card"
          :style="{
            '--i': i,
            '--flip-delay': cardStore.cards.length - i
          }"
        />
      </transition-group>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCardStore } from '@/app/stores/cardStore';
import AppCard from '@/app/components/AppCard.vue';

const cardStore = useCardStore();

</script>

<style lang="scss">
.pux-TheHomeView {
    display: flex;
    flex-direction: column;
    gap: var(--app-m-8);
    align-items: center;
    justify-content: center;
    min-height: 100vh;

    &-actions {
        display: flex;
        gap: var(--app-m-2);
        align-items: center;
    }

    &-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        gap: var(--app-m-2);

        .pux-AppCard {
            &-move {
                transition: transform 500ms;
                transition-delay: calc(var(--flip-delay) * 20ms);
            }
        }
    }
}
</style>
