const sendTextSideBar = 'ADD-TEXT-SIDEBAR';
const onUpdateTextSideBar = 'UPDATE-NEW-TEXT-SIDEBAR';
const initialState = {

}

const sidebarReducer = (state = initialState,action) => {
  switch(action.type){
    case sendTextSideBar:
    let newSideBar = {
      id: 6,
      sidebar: state.newSidebarBody
    }
    state.sides.push(newSideBar)
    state.newSidebarBody = '';
    return state
    case onUpdateTextSideBar: 
      state.newSidebarBody = action.newText;
    return state
    default: 
      return state
  }
}

export const addSideBarActionCreator = () => {
  return{
    type: 'ADD-TEXT-SIDEBAR'
  }
}

export const onUpdateTextSideBarActionCreator = (text) => {
  return{
    type: 'UPDATE-NEW-TEXT-SIDEBAR',
    newText: text
  }
}
export default sidebarReducer;