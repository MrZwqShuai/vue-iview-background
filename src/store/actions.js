// import { getTestData } from '../services/home'

// export const increment = ({ commit }) => commit("increment")
// export const decrement = ({ commit }) => commit("decrement")
//http://localhost:8082/auth/oauth2/selftoken?username=33893.13554282399&password=123456&usertype=3
import { login, getTestData, getTableData, updateTableData } from '../services/index'
import {
    GET_TESTDATA,
    FETCH_LOADING,
    SET_USERINFO
} from './mutation-types.js'

export default {
    // 测试一下
    increment(context) {
        context.commit("INCREMENT");
    },
    decrement({ commit }) {
        commit("DECREMENT")
    },
    FetchLoading({ commit }, params) {
        commit(FETCH_LOADING, params)
    },
    setUserInfo({ commit }, params) {
        commit(SET_USERINFO, params);
    },
    async getTestData({ commit, state }) {
        let res = await getTestData();
        commit(GET_TESTDATA, res);
        return res;
    },
    async login({ commit, state }, params) {
        let res = await login(params);
        return res;
    },
    //获取桌台
    async getTableData({ commit }, params) {
        let res = await getTableData(params);
        return res;
    },
    //更新桌台信息
    async updateTableData({ commit }, params) {
        let res = await updateTableData(params);
        return res;
    }
}