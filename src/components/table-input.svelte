<script>
    import { createEventDispatcher } from 'svelte';
    import { balanceValue } from './balance.js';
  
    const dispatcher = createEventDispatcher();
  
    function handleAddButtonClick() {
      const dateInput = document.querySelector('input[name="date"]');
      const amountInput = document.querySelector('input[name="amount"]');
      const descInput = document.querySelector('input[name="desc"]');
      const typeInput = document.querySelector('select[name="type"]');
  
      // Read the balanceValue from the store
      const currentBalance = $balanceValue;
  
      const newItem = {
        "Date": dateInput.value,
        "Amount": parseFloat(amountInput.value),
        "Description": descInput.value,
        "Type": typeInput.value,
        "Balance": currentBalance, // Use the currentBalance from the store
      };
  
      dispatcher("add", newItem);
  
      // Reset the input fields after adding the item
      dateInput.value = '';
      amountInput.value = '';
      descInput.value = '';
      typeInput.value = '';
    }
  </script>

<div class="input-container">
    <div class="date">
        <input type="date" name="date" />
    </div>
    <div class="amount">
        <input type="number" name="amount" placeholder="$200" />
    </div>
    <div class="desc">
        <input type="text" name="desc" placeholder="Description" />
    </div>
    <div class="type">
        <select name="type" id="type">
            <option value="">Type</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
        </select>
    </div>
    <div class="submit">
        <button class="button" on:click={handleAddButtonClick}>Add</button>
    </div>
</div>

<style>
    .input-container {
        width: fit-content;
        gap: 0.4rem;
        margin: auto;
        display: grid;
        grid-template-columns: auto auto auto auto auto;
        align-items: center;
        padding-bottom: 1rem;
    }

    .date > input,
    .amount > input,
    .desc > input,
    .type > select {
        width: 10rem;
    }

    .input-container > div {
        width: fit-content;
    }

    button {
        width: 5rem;
    }
</style>
