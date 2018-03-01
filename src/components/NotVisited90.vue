<template>
	<div class="not-visited-90">
		<h1>Families Not Visited in 90 Days</h1>
		<form v-on:submit.prevent="addFamily">
			<h2>Add a Family</h2>
			<input id="name" type="text" v-model="name" placeholder="Name">
			<br>
			<textarea id="homeTeachers" v-model="homeTeachers" placeholder="Write each Home Teacher on a seperate line"></textarea>

			<br>
			<select id="district" v-model="district">
				<option disabled value="">Assign a District</option>
				<option>District 1</option>
				<option>District 2</option>
				<option>District 3</option>
			</select>
			
			<br>
			<button id="addFamily" type="submit">Add</button>
		</form>
		<button v-on:click="showAll()">Show All</button>
		<button v-on:click="showDistrict1()">District 1</button>
		<button v-on:click="showDistrict2()">District 2</button>
		<button v-on:click="showDistrict3()">District 3</button>
		<table v-show="allFamilies.length !== 0">
			<tr>
				<th>Family</th>
				<th>Companionship</th>
				<th>District</th>
			</tr>
			<tr v-for="item in filteredFamilies">
				<td>{{item.name}}</td>
				<td>
					<div v-for="ht in item.homeTeachers">
						{{ht}}
					</div>
				</td>
				<td>{{item.district}}</td>
			</tr>
		</table>
	</div>

</template>

<script>
	export default {
		name: 'NotVisited90',
		data () {
			return {
				show: 'all',
				name: '',
				homeTeachers: [],
				district: '',
				families: [],
				error: '',
			}
		},
		computed: {
			allFamilies: function() {
				return this.families;
			},
			filteredFamilies: function() {
				if(this.show === 'district1'){
					return this.families.filter(function(item) {
						if(item.district === 'District 1')
							return item;
					});
				}
				if(this.show === 'district2'){

					return this.families.filter(function(item) {
						if(item.district === 'District 2')
							return item;
					});
				}
				if(this.show === 'district3'){

					return this.families.filter(function(item) {
						if(item.district === 'District 3')
							return item;
					});
				}
				return this.families;
			}
		},
		methods: {
			addFamily: function() {
				if(this.name === '' || this.homeTeachers === '' || this.district === ''){
					this.error = "Missing a field";
				}
				else {
					console.log(this.homeTeachers);
					//this.families.push({name: this.name, homeTeachers: this.homeTeachers, district: this.district});
					this.families.push({name: this.name, homeTeachers: this.homeTeachers.split('\n'), district: this.district});
					this.name = '';
					this.homeTeachers = '';
				}
			},
			showAll: function() {
				this.show = 'all';
			},
			showDistrict1: function() {
				this.show = 'district1';
			},
			showDistrict2: function() {
				this.show = 'district2';
			},
			showDistrict3: function() {
				this.show = 'district3';
			},

		}
	}
</script>
		
<style>
	button {
		margin: 25px;
		padding: 10px;
		width: 100px;
	}	
	form {
		border-style: solid;
		padding-top: 15px;
		padding-bottom: 15px;
		width: 50%;
		margin: auto;
	}
	#name {
		width: 300px;
		margin: 10px;
		height: 25px;
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
	}
	#homeTeachers {
		height: 60px;
		width: 300px;
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
	}
	#district {
		margin: 7px;
		height: 35px;
		width: 150px;
	}
	table {
		width: 50%;
		margin: auto;
		border-collapse: collapse;
		table-layout: fixed;
	}
	th {
		height: 50px;
	}
	th, td {
		padding: 8px;
		text-align: left;
	}
	tr:nth-child(even) {
		background-color: #f2f2f2;
	}
</style>
