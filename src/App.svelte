<script>
	import Header from "./components/header.svelte";
	import Balance from "./components/balance.svelte";
	import Table from "./components/table.svelte";
	import TableInput from "./components/table-input.svelte";
</script>

<main>
	<Header />
	<Balance />
	<TableInput />
	<Table />
</main>

<style>
	:global(body, html) {
		padding: 0;
		margin: 0;
	}

	main {
		background-color: rgb(245, 245, 124);
		height: 100vh;
		width: 66vw;
		margin-left: auto;
		margin-right: auto;
	}
</style>