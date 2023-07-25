// data.js
import { writable } from 'svelte/store';

export const jsonData = writable([
  {
    date: "12/01/2003",
    amount: 200,
    desc: "Generic",
    type: "Income",
    balance: 0,
  },
]);

export function addEntry(date, amount, desc, type) {
  jsonData.update(data => [
    ...data,
    {
      date,
      amount,
      desc,
      type,
    },
  ]);
}
