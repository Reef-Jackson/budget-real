<script>
    export let addEntry;
    import { balance } from "./balance";
    import { jsonData } from "./data";
  
    let date = "";
    let amount = "";
    let desc = "";
    let type = "Income";
  
    function handleClick() {
      const newBalance =
        type === "Income" ? $balance + parseFloat(amount) : $balance - parseFloat(amount);
      $balance = newBalance;
  
      addEntry(date, parseFloat(amount), desc, type, $balance);
  
      date = "";
      amount = "";
      desc = "";
    }
  </script>
  
  <div class="container">
      <input type="date" name="date" bind:value={date} />
      <input
          type="text"
          name="amount"
          placeholder="Some balance"
          bind:value={amount}
      />
      <input
          type="text"
          name="desc"
          placeholder="Description"
          bind:value={desc}
      />
  
      <select name="type" id="type" bind:value={type}>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
      </select>
  
      <button type="button" on:click={handleClick}>Add</button>
  </div>
  
  <style>
      .container {
          display: flex;
          margin: auto;
          justify-content: center;
          gap: 0.4rem;
      }
  
      .container input[type="text"] {
          width: 10rem;
      }
  
      .container select {
          width: 10rem;
      }
  
      .container button {
          width: 5rem;
      }
  </style>
  