import { ColorMode } from '../../models/color-mode'

export interface GetColorMode {
  get: () => Promise<ColorMode>
}
