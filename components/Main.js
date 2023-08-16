import Image from 'next/image'
import styles from '../src/app/page.module.css'
import { Links } from './Links'
import { Headline } from './Headline'

export function Main(props) {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Headline page={props.page}><code className={styles.code}>src/app/{props.page}.js</code></Headline>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <Links />
    </main>
  )
}
