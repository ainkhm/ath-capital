import { loadable } from 'utils/router'
import { RECOVER_PATH as path } from 'constants/paths'

export default {
  path,
  component: loadable(() =>
    import(/* webpackChunkName: 'Login' */ './components/RecoverPasswordPage')
  )
}
