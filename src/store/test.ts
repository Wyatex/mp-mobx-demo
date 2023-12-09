import { global } from './index'
import { runInAction } from 'mobx-miniprogram'

export function setGlobalNumA() {
  runInAction(() => {
    global.numA++
  })
}
