import { loadable } from 'utils/router'
import { REFERRAL_INCOME_PATH as path } from 'constants/paths'

export default {
  path,
  component: loadable(() =>
    import(/* webpackChunkName: 'NotFound' */ './components/ReferralIncomePage')
  )
}
