/* eslint-disable @typescript-eslint/no-explicit-any */

import Autosuggest from 'react-autosuggest'

class AutosuggestPatch extends Autosuggest {
  constructor(props: any) {
    super(props)
    const self = this as any
    self.onSuggestionTouchMove = () => {
      self.justSelectedSuggestion = false
      self.pressedSuggestion = null
    }
  }
}

export default AutosuggestPatch as any
