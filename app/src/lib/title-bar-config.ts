import { writeFile } from 'fs/promises'
import { app } from 'electron'
import { join } from 'path'
import { TitleBarStyle } from '../ui/lib/title-bar-style'
import { readFileSync } from 'fs'

export type TitleBarConfig = {
  titleBarStyle: TitleBarStyle
}

const getTitleBarConfigPath = () =>
  join(app.getPath('userData'), '.title-bar-config')

function readTitleBarConfigFile(): TitleBarConfig {
  let titleBarConfig: TitleBarConfig

  try {
    titleBarConfig = JSON.parse(readFileSync(getTitleBarConfigPath(), 'utf8'))

    if (['native', 'custom'].includes(titleBarConfig.titleBarStyle)) {
      return titleBarConfig
    }
  } catch (error) {}

  titleBarConfig = { titleBarStyle: 'native' }
  saveTitleBarConfigFile(titleBarConfig)

  return titleBarConfig
}

export async function saveTitleBarConfigFile(config: TitleBarConfig) {
  await writeFile(getTitleBarConfigPath(), JSON.stringify(config), 'utf8')
}

export const TITLE_BAR_CONFIG = readTitleBarConfigFile()
