<template>
	<div>
		<h1>Westfield 1st Ward</h1><h2>EQ Presidency</h2>
		<form v-on:submit.prevent="addFamily">
			<input type="text" placeholder="Username">
			<br><input type="password" placeholder="Password">
			<br><router-link to="/NotVisited90"><button>Submit</button></router-link>
		</form>
	</div>
</template>

<script>
	
</script>

<style>
	form {
		width: 15%;
		margin: auto;
		margin-top: 50px;
		border: none;
	}
	input {
		margin: 5px;
		height: 20px;
	}
	button {
		width: 50%;
		padding-top: 5px;
		padding-bottom: 5px;
		margin: 15px;
	}
</style>
