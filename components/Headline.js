import styles from '../src/app/page.module.css'

export function Headline(props) {
  console.log(props)
  return (
    <div>
      <p>
        {props.page} Page &nbsp;
        {props.children}
      </p>
      <button>ボタン</button>
    </div>
  )
}
