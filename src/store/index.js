import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import data from '../assets/data/data'
//挂载
// import count from './modules/count'

Vue.use(Vuex);



export default new Vuex.Store({
    modules: {

    },
    state: {
        data: data,
        active: 0,
        selData: [],
        total: 0,
        summary: 0
    },
    mutations: {
        updateState(state, payload) {
            for (let key in payload) {
                state[key] = payload[key]
            }
        },
        changeCout(state, payload) {
            // console.log('data...', data.categoryList)
            // console.log('state...', state)
            console.log('payload...', payload)
            data.categoryList.forEach(item => {
                item.spuList.forEach(i => {
                    if (i.spuId === payload.itemData.spuId) {
                        if (payload.type == 'plus') {
                            i.activityType++;
                            let isHas = state.selData.filter(val => {
                                return val.spuId === payload.itemData.spuId;
                            });
                            if (isHas.length == 0) {
                                state.selData.push(i)
                            }
                        } else {
                            if (i.activityType <= 0) {
                                i.activityType = 0;
                            } else {
                                i.activityType--;
                            }
                            state.selData.forEach((v, k) => {
                                if (v.activityType <= 0) {
                                    state.selData.splice(k, 1)
                                }
                            })
                        }
                    }
                })
            });
        },
        changeAllNumber(state, payload) {
            state.total = 0;
            state.summary = 0;
            state.selData.forEach(item => {
                state.total += item.activityType;
                state.summary += item.activityType * item.currentPrice;
            })
        }
    },
    plugins: [createLogger()]
})