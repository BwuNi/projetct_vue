<template>
		<div class="pmenu">
      <wu-chart></wu-chart>
		</div>
</template>
	
<script>
import chart from './chart'
export default {
  name: 'page_1',
  components: {
    ['wu-chart']: chart
  },
  data() {
    return {
    }
  }
}

</script>
	
	<!-- Add "scoped" attribute to limit CSS to this component only -->
	<style scoped>

</style>