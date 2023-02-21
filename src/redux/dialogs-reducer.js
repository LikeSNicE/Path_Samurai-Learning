const ADD_MESSAGE = 'ADD-MESSAGE';

const initialState = {
  dialogs: [
    { id: 1, name: 'Dimych', },
    { id: 2, name: 'Andrew' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Viktor' },
    { id: 6, name: 'Valera' }
  ],
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How is your it-kamasutra?' },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'Yo' },
    { id: 5, message: 'Yo' },
    { id: 6, message: 'Yo Valera' }
  ],
  // newMessageBody: 'LikeSNicE.com'
}

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE:{
      let body = action.newMessageBody
      return {
        ...state,
        // newMessageBody: action.newMessageBody,
        messages: [...state.messages, { id: 6, message: body }] // {id: 6, message: body}, вместо push 
      }
    }
    default:
      return state
  }


}

export const addMessageActionCreator = (newMessageBody) => ({ type: 'ADD-MESSAGE', newMessageBody })

export default dialogsReducer;