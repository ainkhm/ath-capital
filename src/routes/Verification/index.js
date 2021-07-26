import { loadable } from 'utils/router'
import { VERIFICATION_PATH as path } from 'constants/paths'

export default {
  path,
  component: loadable(() =>
    import(/* webpackChunkName: 'Signup' */ './components/VerificationPage')
  )
}
