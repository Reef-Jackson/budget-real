<div class="input-container">
    <div class="date">
        <input type="date" name="date">
    </div>
    <div class="amount">
        <input type="number" name="amount" placeholder="$200">
    </div>
    <div class="desc">
        <input type="text" name="desc" placeholder="Description">
    </div>
    <div class="type">
        <select name="type" id="type">
            <option value="">Type</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
        </select>
    </div>
    <div class="submit">
        <button>Add</button>
    </div>
</div>

<style>
    .input-container {
        width: fit-content;
        gap: .4rem;
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