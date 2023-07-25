<script>
    import { balance } from "./balance.js";

    let inputText = "";

    function handleButtonClick() {
        const amount = parseFloat(inputText);
        balance.set(amount);
    }
</script>

<div class="container">
    <input type="text" id="balance" bind:value={inputText} placeholder="balance" />
    <button type="button" on:click={handleButtonClick}>Add</button>
    <p>Balance: ${$balance}</p>
</div>

<style>
    .container {
        display: flex;
        gap: 0.4rem;
        justify-content: center;
        padding-bottom: 2rem;
        margin-bottom: 0;
    }
    .container #balance {
        margin: 0;
    }
    p {
        margin: 0;
        text-align: center;
        margin: auto 0;
        padding-left: 1rem;
    }
</style>
