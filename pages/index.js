import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'
import ArticleList from '../components/Articlelist'

export default function Home({articles}) {
  return (
    <div className={styles.container}>
                      <Head>
                        <title>NextApp</title>
                      </Head>
                      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}