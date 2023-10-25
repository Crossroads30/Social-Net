import React from 'react'

export const withSuspense = (Component) => (props) => {
  return (
    <React.Suspense fallback={<span>Loading...</span>}>
      <Component {...props} />
    </React.Suspense>
  )
}
