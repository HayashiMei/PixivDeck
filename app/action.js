// @flow
import type { Action as UserPopoverContainerAction } from './containers/UserPopoverContainer/actionTypes'

import type { Action as LanguageProviderAction } from './containers/LanguageProvider/actionTypes'

import type { Action as SearchFieldAction } from './containers/SearchField/actionTypes'

import type { Action as ModalManegerAction } from './containers/ModalManeger/actionTypes'

import type { Action as SettingModalAction } from './containers/SettingModal/actionTypes'

import type { Action as HeaderContainerAction } from './containers/HeaderContainer/actionTypes'

import type { Action as MangaPreviewAction } from './containers/MangaPreview/actionTypes'

export type Action =
  | UserPopoverContainerAction
  | LanguageProviderAction
  | SearchFieldAction
  | ModalManegerAction
  | SettingModalAction
  | HeaderContainerAction
  | MangaPreviewAction
