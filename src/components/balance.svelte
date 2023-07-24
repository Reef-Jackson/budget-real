<script>
    import { balanceValue } from './balance.js';
  
    // Create a local variable to store the input value
    let inputValue = $balanceValue;
  
    // Update the balanceValue whenever the inputValue changes
    $: balanceValue.set(parseFloat(inputValue));
  </script>
  
  <div class="balance-container">
    <div class="input-container">
      <!-- Bind the input value to the inputValue variable -->
      <input type="text" id="input" placeholder="$2000" bind:value={inputValue}>
      <input type="date" id="first-date">
      <input type="date" id="second-date">
    </div>
    <p>Error Code Implementation [Here]</p>
  </div>

<style>
    .balance-container {
        align-self: center;
        padding-bottom: 3rem;
    }

    .input-container {
        display: grid;
        grid-template-columns: 15rem 15rem;
        grid-template-areas: 
        "input first"
        "input second";
        column-gap: .5rem;
        margin: auto;
        width: fit-content;
    }

    #input {
        grid-area: input;
        height: 100%;
        font-size: 2rem;
        font-family: monospace;
        text-align: center;
    }

    #first-date {
        grid-area: first;
    }

    #second-date {
        grid-area: second;
    }

    #first-date, #second-date {
        height: 100%;
        margin: 0;
    }

    p {
        text-align: center;
        color: red;
    }
</style>