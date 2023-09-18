import BasicLayout from '@/layout/basic'
import type { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'

const Page: NextPageWithLayout = () => {
  return (
  <>
    <p>hello world</p>
  </>
  )
}
Page.getLayout = function getLayout(page: ReactElement){
  return <BasicLayout>{page}</BasicLayout>
}

export default Page