<!-- App.svelte -->
<script>
	import { balance } from "./components/balance.js";
	import Table from "./components/table.svelte";
	import Input from "./components/input.svelte";
	import Head from "./components/head.svelte";
	import Balance from "./components/balance.svelte";
	import { jsonData } from "./components/data.js";
  
	function addEntry(date, amount, desc, type, balance) {
	  jsonData.update(entries => [
		...entries,
		{ date, amount, desc, type, balance: balance.toString() },
	  ]);
	}
  </script>
  
  <div class="head-container">
	<Head />
	<Balance {addEntry} />
  </div>
  
  <div class="container">
	<Input {addEntry} />
  </div>
  
  <div class="table-container">
	<Table {jsonData} />
  </div>
  
  <style>
	:global(html, body) {
	  background-color: #333;
	  color: white;
	}
  </style>
  