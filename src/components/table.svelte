<script>
  import TableInput from "./table-input.svelte";
  import { get } from "svelte/store";
  import { balanceValue } from "./balance.js";

  // Initialize initialBalance with the value of balanceValue from the store
  let initialBalance = get(balanceValue);

  let jsonData = [
    {
      Date: "13/01/2023",
      Amount: 200,
      Description: "Rent Payment",
      Type: "Income",
      Balance: 200,
    },
    {
      Date: "14/01/2023",
      Amount: 200,
      Description: "Rent Expense",
      Type: "Expense",
      Balance: 200,
    },
  ];

  let currentBalance = initialBalance;

  $: {
    currentBalance = initialBalance;
    for (const item of jsonData) {
      if (item.Type === "Income") {
        currentBalance += item.Amount;
      } else if (item.Type === "Expense") {
        currentBalance -= item.Amount;
      }
    }
  }

  function handleAddItem(event) {
    jsonData = [...jsonData, event.detail];

    // Update the currentBalance when a new item is added
    if (event.detail.Type === "Income") {
      currentBalance += event.detail.Amount;
    } else if (event.detail.Type === "Expense") {
      currentBalance -= event.detail.Amount;
    }
  }
</script>

<TableInput on:add={handleAddItem} />

<table>
  <thead>
    <tr>
      {#each Object.keys(jsonData[0]) as key}
        <th>{key}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each jsonData as item}
      <tr>
        {#each Object.values(item) as value}
          <td id="value">{value}</td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>

<style>
  table {
    width: fit-content;
    background-color: white;
    border-collapse: collapse;
    border: solid black 0.1rem;
    margin: auto;
  }
  tr {
    border: solid black 0.1rem;
  }
  td,
  th {
    border: solid black 0.1rem;
    padding: 0.5rem;
  }
  #value {
    width: 10rem;
  }
</style>
