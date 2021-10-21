import {createStore} from 'vuex';
import auth from './auth.store';
import {SET_IS_GAME_PAGE} from "./mutationTypes";
import {SET_IS_IN_GAME} from "./mutationTypes";
import {SET_HIDE_MENU} from "./mutationTypes";
import {SET_CHAT} from "./mutationTypes";
import {SET_MODAL} from "./mutationTypes";

const store = createStore({
	state() {
		return {
			isGamePage: false,
			isInGame: false,
			hideMenu: false,
			chatIsOpen: false,
			modalIsOpen: false
		};
	},
	mutations: {
		[SET_IS_GAME_PAGE](state, payload) {
			state.isGamePage = payload;
		},
		[SET_IS_IN_GAME](state, payload) {
			state.isInGame = payload;
		},
		[SET_HIDE_MENU](state, payload) {
			state.hideMenu = payload;
		},
		[SET_CHAT](state, payload) {
			state.chatIsOpen = payload
		},
		[SET_MODAL](state, payload) {
			state.modalIsOpen = payload
		}


	},
	actions: {
		setIsGamePage({commit}, payload) {
			commit(SET_IS_GAME_PAGE, payload);
		},
		setIsInGame({commit}, payload) {
			commit(SET_IS_IN_GAME, payload);
		},
		setHideMenu({commit}, payload) {
			commit(SET_HIDE_MENU, payload);
		},
		setChat({commit}, payload) {
			commit(SET_CHAT, payload);
		},
		setModal({commit}, payload) {
			commit(SET_MODAL, payload);
		},

	},
	modules: {
		auth,
	}
});

export default store;
