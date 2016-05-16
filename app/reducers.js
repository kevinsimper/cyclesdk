import { SORT_TRUSTPILOT, SORT_LEVEL } from './actions'

function sorting(state, action) {
  switch (action.type) {
    case SORT_TRUSTPILOT:
      return Object.assign({}, state, {
        trustpilot: action.order
      })
      break;
    case SORT_LEVEL:
      return Object.assign({}, state, {
        level: action.order
      })
    default:
      return state
  }
}

function companies(state, action) {
  switch (action.type) {
    case SORT_TRUSTPILOT:
      return state.sort((a, b) => {
        let aTrust = (a.trustpilot) ? a.trustpilot : 0
        let bTrust = (b.trustpilot) ? b.trustpilot : 0
        switch (action.order) {
          case "2":
            return bTrust - aTrust
            break;
          case "3":
            return aTrust - bTrust
            break;
          default:
            return bTrust
        }
      })
      break;
    case SORT_LEVEL:
      return state.filter(x => {
        switch (action.order) {
          case "2":
            return x.level !== 'Erfarne'
            break;
          case "3":
            return x.level === 'Erfarne'
          default:
            return true
        }
      })
    default:
      return state
  }
}

export default function appStore(state, action) {
  switch(action.type) {
    case SORT_TRUSTPILOT:
    case SORT_LEVEL:
      return Object.assign({}, state, {
        sorting: sorting(state.sorting, action),
        sortedCompanies: companies(state.companies, action)
      })
      break;
    default:
      return state
  }
}
