import React from "react"
import ContentLoader from "react-content-loader"

import { SkeletonLoader } from "./styles"

const UsersLoading = () => {
  return (
    <SkeletonLoader>
      <ContentLoader
        speed={2}
        width={400}
        height={160}
        viewBox="0 0 400 160"
        backgroundColor="#9caaa9"
        foregroundColor="#edf6f9"
      >
        <rect x="27" y="24" rx="5" ry="5" width="234" height="20" />
        <rect x="27" y="59" rx="5" ry="5" width="143" height="20" />
      </ContentLoader>
    </SkeletonLoader>
  )
}

export default UsersLoading
