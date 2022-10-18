import { createSlice } from "@reduxjs/toolkit";

const generalSlice = createSlice({
    name: 'general',
    initialState: {
        loaded: 0,
        signedIn: false,
        accessToken: "",
        task:{
            daily: 0,
            weekly: 0,
            monthly: 0,
        },
        sync:{
            daily: 0,
            weekly: 0,
            monthly: 0,
        },
        id:{
            daily: 0,
            weekly: 0,
            monthly: 0,
        },
        syncing: false,
    },
    reducers: {
        changeLoaded(state, action){
            state.loaded = action.payload;
        },
        changeSignInState(state, action){
            state.signedIn = action.payload;
            console.log(action.payload, "signinstate")
        },
        changeTaskLoaded(state, action){
            state["task"][action.payload.list] = action.payload.value;
        },
        changeTaskSyncStat(state, action){
            state["sync"][action.payload.list] = action.payload.value;
        },
        setIds(state, action){
                console.log(action.payload)
                state.id = action.payload
        },
        resetTask(state){
            Object.keys(state["task"]).map(list => {
                state["task"][list] = 0
            })
        },
        setAccessToken(state, action){
            console.log(action.payload)
            state.accessToken = action.payload
        },
        setSyncing(state, action){
            state.syncing = action.payload
        }
    }
})

export const { changeLoaded, changeSignInState, changeTaskLoaded, changeTaskSyncStat, resetTask, setAccessToken, setIds, setSyncing } = generalSlice.actions;
export default generalSlice.reducer;