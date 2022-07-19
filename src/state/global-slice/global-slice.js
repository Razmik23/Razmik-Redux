import {createSlice} from "@reduxjs/toolkit";


const state = {
  usersList: [],
  product: {
    priceList: [],
    productName: ''
  }
}


const globalSlice = createSlice({
  name: 'GlobalSliceKhachik',
  initialState: state,
  reducers: {
    getUsersList(state) {
      const usersStorage = localStorage.getItem('users_list')
      if (usersStorage) {
        let x = JSON.parse(usersStorage)
        state.usersList = x
      }
    },
    addUser(state, action) {
      console.log(action)
      let newUser = [...state.usersList, action.payload]
      newUser = newUser.map((item, index) => {
        return {
          ...item,
          id: index + 1
        }
      })
      const JSONString = JSON.stringify(newUser)
      localStorage.setItem('users_list', JSONString)

      state.usersList = newUser
    },
    deleteUser(state, action) {
      const newUsers = state.usersList.filter(x => x.id !== action.payload)
      localStorage.setItem('users_list', JSON.stringify(newUsers))
      state.usersList = newUsers
    }
  }

})

export const {
  getUsersList,
  addUser,
  deleteUser
} = globalSlice.actions;

export default globalSlice.reducer;