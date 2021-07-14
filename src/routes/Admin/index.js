import { loadable } from 'utils/router'
import { USERS_PATH as path } from 'constants/paths'

export default {
  path,
  component: loadable(() =>
    import(/* webpackChunkName: 'NotFound' */ './components/AdminPage')
  )
}
