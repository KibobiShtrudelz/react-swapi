import * as React from 'react'

import styles from './main.module.scss'

export function Main({ children }: React.PropsWithChildren) {
  return <main className={styles.main}>{children}</main>
}

export default Main
