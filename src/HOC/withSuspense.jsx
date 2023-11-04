import React from 'react'
import Preloader from '../UI/components/common/Preloader/Preloader'

export const withSuspense = (Component) => (props) => {
  return (
    <React.Suspense fallback={<span><Preloader /></span>}>
      <Component {...props} />
    </React.Suspense>
  )
}
