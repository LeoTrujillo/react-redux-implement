import { ADD_ARTICLES, FOUND_BAD_WORD } from '../constants/actions-types'

const forbiddenWords = ['spam', 'money']


export const forbiddenWordsMiddleware = ({dispatch}) => {
  return next => {
    return action => {
      // do your stuff
      if (action.type === ADD_ARTICLES) {

        const foundWord = forbiddenWords.filter(w => action.payload.title.includes(w))

        if (foundWord.length) {
          return dispatch({type: "FOUND_BAD_WORD"})
        }
      }

      return next(action)
    }
  }
}
