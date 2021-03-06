// @flow
import { connect, type Connector } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import type { Dispatch } from 'types'
import { closeSearchField } from '../HeaderContainer/actions'
import { addColumn } from '../ColumnSearch/actions'
import SearchField from './SearchFiled'
import type { Props } from './SearchFiled'
import * as actions from './actions'
import { makeSelectKeyword } from './selectors'

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onFetch(word: string) {
    dispatch(actions.fetchRequest(word))
  },
  onSubmit(tag: string) {
    dispatch(addColumn(tag))
  },
  onClose() {
    dispatch(closeSearchField())
  },
})

const mapStateToProps = createStructuredSelector({
  keywords: makeSelectKeyword(),
})

const connector: Connector<{}, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
)
export default connector(SearchField)
