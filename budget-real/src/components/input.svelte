<div class="container">
    <input type="date" name="date">
    <input type="text" name="amount" placeholder="Amount">
    <input type="text" name="desc" placeholder="Description">
    <select name="type" id="type">
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
    </select>
    <button type="button">Add</button>
</div>


<style>
    .container {
        display: flex;
        margin: auto;
        justify-content: center;
        gap: .4rem;
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