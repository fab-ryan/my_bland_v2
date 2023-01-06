import 'styled-components'
import { Theme} from '../pages/lib/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme { }
}