import { combineReducers, Reducer } from 'redux'
import { configModule } from '../modules/configModule'

export const reducers = combineReducers<Reducer>({
  config: configModule.reducer,
})
