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
import sourceData from '@/data';
import CategoriesListItem from './components/CategoriesListItem';

export default {
  name: 'CategoriesList',
  data: function() {
    return {
      categories: sourceData.categories,
    };
  },
  components: {
    CategoriesListItem,
  },
}
</script>