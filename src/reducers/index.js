import { ADD_ARTICLES, FOUND_BAD_WORD, DATA_LOADED } from '../constants/actions-types'

const initialState = {
  articles: [],
  remoteArticles: []
}

const rootReducer = (state = initialState, action) => {
  if (action.type === ADD_ARTICLES){
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    })
  }

  if (action.type === FOUND_BAD_WORD ) {
    alert("you can't user a bad word")
    return state
  }

  if (action.type === DATA_LOADED) {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload)
    })
  }

  return state
  
}


export default rootReducer
