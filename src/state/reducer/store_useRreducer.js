
const store_useRreducer = (state, action) => {
    
    const detailsOfUser =action.payload

    if (action.type === 'SET_SEND_ARR') {
        if (detailsOfUser.newname===''|| detailsOfUser.email===''||detailsOfUser.password==='' ) {

            alert('Please Provide Valid Credentials')
        }
        else{
            window.location.assign('/')
            alert('Signed Up succesfully ! Please LogIn')
            
            return { ...state,
                sendArr:[...state.sendArr,detailsOfUser]
            };
        }
    }


    if(action.type==='SET_CHECK_ARR'){

        const findArr =[...state.sendArr]
        const passArr = findArr.find((item)=>item.email===detailsOfUser.email&&item.password===detailsOfUser.password)
        console.log(passArr)
        // if (passArr.newname===''||passArr.email===''||passArr.password==='') {
        if (passArr===undefined) {

            alert('Please Provide Valid Credentials')
        }
        else{
            window.location.assign('/')
        return{
            ...state,
            checkArr:passArr
        }
    }
    }
    
    
    
    return state;
  };
  
  export default store_useRreducer;
  