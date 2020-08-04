<template>
  <div>
    <CategoriesListItem
      v-for="(category, key) in categories"
      :category="{ id: key, ...category }"
      :key="key"
    />
  </div>
</template>

<script>
import CategoriesListItem from './components/CategoriesListItem';

export default {
  name: 'CategoriesList',
  computed: {
    categories() {
      return this.$store.state.categories;
    },
  },
  components: {
    CategoriesListItem,
  },
}
</script>