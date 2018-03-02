<template>
	<div id="app">
		<router-view/>
		
		<div id="footer">
			<a id="github" href="https://github.com/sirryanscott/creative3.git" target="_blank">
				<img src="/static/images/GitHub_Logo.png"></img>
			</a>
		</div>
	</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img {
	margin-top: 200px;
	width: 10%;
}
</style>
