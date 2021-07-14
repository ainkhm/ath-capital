import { loadable } from 'utils/router'
import { WALLET_PATH as path } from 'constants/paths'

export default {
  path,
  component: loadable(() =>
    import(/* webpackChunkName: 'NotFound' */ './components/WalletPage')
  )
}
