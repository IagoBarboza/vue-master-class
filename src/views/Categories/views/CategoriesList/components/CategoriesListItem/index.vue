<template>
  <div>
    <h2 class="list-title">
      <router-link :to="{ name: 'Category', params: { catetoryId: this.category.id }}">
        {{ category.name }}
      </router-link>
    </h2>

    <ForumsList :forums="forums" />
  </div>
</template>

<script>
import sourceData from '@/data';
import ForumsList from './components/ForumsList';

export default {
  name: 'CategoriesListItem',
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
  components: {
    ForumsList,
  },
  computed: {
    forums() {
      return Object.entries(sourceData.forums)
        .filter(([forumKey, forum]) => forum.categoryId === this.category.id)
        .map(([forumKey, forum]) => ({ id: forumKey, ...forum }));
    },
  },
}
</script>