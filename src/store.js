import {create} from 'zustand'
import {createJSONStorage, persist, devtools} from "zustand/middleware";

export const normalStore = create(devtools((set) => ({
    counter: 0,
    resetNormalState: () => set((state) => ({
        ...state,
        counter: 0
    }),false,'resetNormalState'),
    incrementCounter: () => set((state) => ({
        ...state,
        counter: state.counter + 1,
    }), false, 'increment counter'),

    person: {age: 30, name: 'Michel', favNums: [4, 5]},

})))

export const sessionStore = create(devtools(persist((set, get) => ({
        name: 'bob',


        sessionState: {
            fetchData: null,
            loading: true,
            fetchRan: false,
        },
        setFetchData: (data) => set((state) => ({
            sessionState: {
                ...state.Axios,
                fetchData: data,
                loading: false,
                fetchRan: true,
            }
        }), false, 'set fetch data'),
    }),
    {
        name: 'app-session-storage',
        storage: createJSONStorage(() => sessionStorage),
    },
)))

export const localStore = create(devtools(persist((set, get) => ({
        colorMode: 'light',
        toggleColorMode: () => set(state => ({
            colorMode: state.colorMode === 'light' ? 'dark' : 'light'
        }), false, 'toggle color mode'),
    }),
    {
        name: 'app-local-storage',
        storage: createJSONStorage(() => localStorage),
    },
)))
