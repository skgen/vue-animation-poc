import { defineStore } from 'pinia';

type CardStoreState = {
  cards: string[];
};

export const useCardStore = defineStore({
  id: 'cards',
  state: (): CardStoreState => ({
    cards: Array(25).fill(null).map((v, i) => i.toString()),
  }),
  actions: {
    next() {
      this.cards.push(this.cards.shift() as string);
    },

    prev() {
      this.cards.unshift(this.cards.pop() as string);
    },

    shuffle() {
      this.cards = this.cards
        .sort(() => 0.5 - Math.random())
        .sort(() => 0.5 - Math.random());
    },
  },
});
