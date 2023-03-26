import React, { FC, ReactNode } from 'react'
import styles from './ListWrapperLayout.module.scss'
interface props{
    children: ReactNode
}
const ListWrapperLayout: FC<props> = ({children}) => {
  return (
    <div className={styles.listWrapper}>
        {children}
    </div>
  )
}

export default ListWrapperLayout