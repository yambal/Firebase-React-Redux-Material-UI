import { configModule, iConfigState } from '../modules/configModule'


export interface iRootState {
  config: iConfigState
}

export default iRootState

export const initialState: iRootState = {
  config : configModule.initial,
}