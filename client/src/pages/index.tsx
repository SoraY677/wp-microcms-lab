import BasicLayout from '@/layout/basic'
import type { NextPageWithLayout } from './_app'
import React, { ReactElement } from 'react'
import { get } from '@/api/wp-request'

type PostListQuery = {
  posts: {
    edges: {
      node: {
        title: string,
        id: string,
        date: string,
        content: string
      }
    }[]
  }
}

async function getPostList(): Promise<PostListQuery | undefined> {
  const response = await get<PostListQuery>(`query PostListQuery {
    posts {
      edges {
        node {
          title
          id
          date
          content
        }
      }
    }
  }`)
  return response
}

const Page: NextPageWithLayout = () => {
  const [post, setPost] = React.useState<PostListQuery | undefined>(undefined);

  React.useEffect(() => {
    getPostList().then((response) => {
      setPost(response);
    });
  }, []);

  if (!post) return null;


  return (
    <div>
      <ul>
      {post?.posts?.edges?.map((postItem, index) => {
          return(
            <div key={index}>
              <p>{ postItem.node.title }</p>
              <p>{ postItem.node.content }</p>
              <p>{ postItem.node.id }</p>
            </div>
          )
        }
      )}
      </ul>
    </div>
  );
}
Page.getLayout = function getLayout(page: ReactElement){
  return <BasicLayout>{page}</BasicLayout>
}

export default Page