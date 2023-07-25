<!-- Table.svelte -->
<script>
    export let jsonData;
</script>

<div class="table-container">
    <table>
        <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Description</th>
            <th>Type</th>
            <th>Balance</th>
        </tr>
        {#each $jsonData as entry}
            <tr>
                <td>{entry.date}</td>
                <td>{entry.amount}</td>
                <td>{entry.desc}</td>
                <td>{entry.type}</td>
                <td>{entry.balance}</td>
            </tr>
        {/each}
    </table>
</div>

<style>
    .table-container {
        display: flex;
        justify-content: center;
        padding-top: 2rem;
        text-align: left;
    }
    table {
        border-collapse: collapse;
    }
    table,
    td,
    th {
        border: 0.15rem solid white;
    }

    td,
    th {
        padding: 0.3rem 1rem;
    }
</style>
