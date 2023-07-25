<script>
	import Balance from "./components/balance.svelte";
	import Head from "./components/head.svelte";
	import Input from "./components/input.svelte";
	import Table from "./components/table.svelte";
</script>

<main>
	<Head />
	<Balance />
	<Input />
	<Table />
</main>

<style>
	:global(html, body) {
		background-color: #333;
		color: white;
	}
</style>