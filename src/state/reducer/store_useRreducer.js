
const store_useRreducer = (state, action) => {
    if (action.type === 'SET_SEND_ARR') {
        return { ...state,
            sendArr:action.payload,};
    }
    
    
    
    return state;
  };
  
  export default store_useRreducer;
  