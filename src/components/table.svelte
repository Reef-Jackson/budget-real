<script>

  const balance = "200"; //We handle this later.


  const jsonData = [
    {
      "Date": "13/01/2023",
      "Amount": 200,
      "Description": "Rent Payment",
      "Type": "Income",
      "Balance": balance,
    },
    {
      "date": "14/01/2023",
      "amount": 200,
      "description": "Rent Expense",
      "type": "Expense",
      "balance": balance
    }
  ];
</script>

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
    border: solid black .1rem;
    margin: auto;
  }
  tr {
    border: solid black .1rem;
  }
  td, th {
    border: solid black .1rem;
    padding: .5rem;
  }
  #value {
    width: 10rem;
  }
</style>