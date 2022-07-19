// Initial State
import {profileActions} from "./actions";

const initialState = {
  profile: {
    firstName: '',
    lastName: '',
    age: '',
    gender: null,
    position: '',
    email: '',
    phoneNumber: '',
    profileImage: '',
    dateOfBirth: null
  }
}


// Current Reducer (Profile)
/**
 * @state - current reducer initial State (by default initialState)
 *
 * @action  - object {type, payload}
 *    @type - created Actions name,
 *    @payload  - changed data from project
 *
 *  Reducer  work with switch case
 *  switch (action.type)  by default return main state
 * **/

export const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case profileActions.MANAGE_USER_INFO: {
      console.log('MANAGE_USER_INFO')

      return {...state, profile:{...state.profile, ...action.payload}}
    }
    case profileActions.MANAGE_USER_GENDER: {
      console.log('MANAGE_USER_GENDER')
      return {...state}
    }
    case profileActions.MANAGE_USER_PROFILE_IMAGE: {
      console.log('MANAGE_USER_PROFILE_IMAGE')
      return {...state}
    }
    case profileActions.MANAGE_USER_DATE_BIRTH: {
      console.log('MANAGE_USER_DATE_BIRTH')
      return {...state}
    }

    // IMPORTANT
    default: {
      return state
    }
  }

}


/**
 * 1. Create InitialState for  State  Management
 *    all in Project in different reducers
 * 2. Create Actions for different reducers (Actions:name for functions)
 * 3. Create Reducers using Actions
 * **/






