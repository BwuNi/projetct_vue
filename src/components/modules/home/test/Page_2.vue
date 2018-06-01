<template>
	<div class="page_2">
		<h1>{{ msg }}</h1>

		<h2 v-for="(item, index) in items">
			{{ parentMessage }} - {{ index < 10 ?'0'+index:index }} - {{ item.message }} - id:{{item.id}}
		</h2>

	</div>
</template>

<script>

	export default {
		name: 'page_2',
		data() {
			return {
				msg: 'Page 2',
				parentMessage: 'Page 2' ,
				items :((f,i,data)=>(f(f,i,data)))((f,i,data)=>{data[i]={message:'message',id:2000000+parseInt(Math.random()*1000000)};i++;return (i<100)?f(f,i,data):data},0,[])
			}
		}
	}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h2 {
		font-weight: normal;
		height: 48px;line-height: 48px;
		font-size: 24px;
	}

	h1{
		font-weight: bold;
		height: 72px;line-height: 72px;
		font-size: 32px;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
		height: 36px;line-height: 36px;
		font-size: 18px;
	}

	a {
		color: #42b983;
	}

	*{
		text-align: center;
	}
</style>