<template>
  <div id="trader-box">
    <h2>Trade or view your Portfolio</h2>
    <p>This application enables saving and loading your data.</p>
    <p>Click on 'End Day' to simulate beggining of a new day!</p>
    <hr />
    <p>
      Your funds: ${{
        this.$store.getters.funds.toLocaleString("en", {
          minimumFractionDigits: 2,
        })
      }}
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../utility/variables.scss";
#trader-box {
  width: 75%;
  font-family: $font;
  padding: 20px;
  margin: 150px auto;
  border: 1px solid black;
}
</style>
