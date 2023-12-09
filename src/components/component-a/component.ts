import { ComponentWithStore } from 'mobx-miniprogram-bindings'
import { global } from '../../store/index'
import { setGlobalNumA } from '../../store/test'
ComponentWithStore({
  options: {
    styleIsolation: 'shared',
  },
  data: {
    someData: '...',
  },
  methods: { setGlobalNumA },
  storeBindings: {
    store: global,
    fields: ['numA', 'numB', 'sum'],
    actions: {
      buttonTap: 'update',
    },
  },
})
