import create from 'zustand';

import {devtools, persist} from 'zustand/middleware'

const initialState = {
  listItems: []
}
const bucketListStore = (set) => ({
    ...initialState,
    addItem: (item) => {
      set((state) => ({
        listItems: [...state.listItems, item]
      }))
    },
    clear: () => {
      set(() => (initialState));
      sessionStorage.clear(); // or localStorage.clear();
    },
})

const useBucketListStore = create(
    devtools(
        persist(bucketListStore, {
            name: "budget",
        })
    )
)


export default useBucketListStore;
