import Vue from 'vue';
import Vuex from 'vuex';
import sourceData from '@/data';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ...sourceData,
    authId: 'VXjpr2WHa8Ux4Bnggym8QFLdv5C3',
  },
  actions: {
    createPost(context, post) {
      const postId = 'greatPost' + Math.random();
      context.commit('setPost', { postId, post });
      context.commit('appendPostToThread', { threadId: post.threadId, postId });
      context.commit('appendPostToUser', { userId: post.userId, postId });
    },
    updateUser(context, user) {
      context.commit('setUser', user);
    },
  },
  mutations: {
    setPost(state, { postId, post }) {
      Vue.set(state.posts, postId, post);
    },
    appendPostToThread(state, { threadId, postId }) {
      Vue.set(state.threads[threadId].posts, postId, postId);
    },
    appendPostToUser(state, { userId, postId }) {
      Vue.set(state.users[userId].posts, postId, postId );
    },
    setUser(state, user) {
      Vue.set(state.users, user.id, user);
    },
  },
  getters: {
    authUser(state) {
      return {
        ...state.users[state.authId],
        id: state.authId,
      };
    },
  },
});