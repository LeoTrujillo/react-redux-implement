import { ADD_ARTICLES, FOUND_BAD_WORD} from '../constants/actions-types'


const addArticle = payload => {
  return { type: ADD_ARTICLES, payload }
}

const foundBadWord = payload => {
  return { type: FOUND_BAD_WORD, payload }
}

const getData = () => {
  return { type: 'DATA_REQUESTED' }
}

export {
  addArticle,
  foundBadWord,
  getData
}
