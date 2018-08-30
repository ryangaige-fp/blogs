import vue from "vue";
import vuex from "vuex";
import router from "../router";
import firebase from "firebase/app";
import "firebase/auth";
import db from "../utils/firebaseInit";

vue.use(vuex);

export default new vuex.Store({
  state: {
    user: {},
    blogs: [],
    activeBlog: {}
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setBlogs(state, blogs) {
      state.blogs = blogs;
    },
    setActiveBlog(state, blog){
        state.activeBlog = 
    }
  },

  actions: {
    register({ commit, dispatch }, newUser) {
      firebaseauth
        .auth()
        .createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then(res => {
          commit("setUser", res);
          router.push({ name: "Dashboard" });
        })
        .catch(err => {
          console.error(err);
        });
    },
    login({ commit, dispatch }, creds) {
      firebaseauth
        .auth()
        .signInWithEmailAndPassword(newUser.email, newUser.password)
        .then(res => {
          commit("setUser", res.user);
          router.push({ name: "Dashboard" });
        })
        .catch(err => {
          console.error(err);
        });
    },
    authenticate(commit, dispatch) {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          commit("setUser", user);
          router.push({ name: "Dashboard" });
        } else {
          commit("setUser", {});
          router.push({ name: "Login" });
        }
      });
    },
    logout({ commit, dispatch }) {
      firebase
        .auth()
        .signOut()
        .then(res => {
          commit("setUser", {});
          router.push({ name: "Login" });
        })
        .catch(err => {
          console.error(err);
        });
    },

    createBlog(commit, dispatch, newBlog) {
      db.collection("blogs")
        .add(newBlog)
        .then(doc => {
          console.log("created Blog with id:", doc.id);
          dispatch("getBlogs");
        });
    },

    getBlogs(commit, dispatch) {
      db.collection("blogs")
        .get()
        .then(querySnapShot => {
          let blogs = [];
          querySnapShot.forEach(doc => {
            if (doc.exists) {
              let blog = doc.data();
              blog.id = doc.id;
              blogs.push(blog);
            }
          });
          commit("setBlogs", blogs);
        });
    }, 
getBlog({commit, dispatch}, blogId){
    db.collection('blogs').doc(blogId).get().then(doc =>{
        let blog = doc.data()
        blog.id = doc.id
        commit('setActiveBlog', blog)
    })
}

  }
});
