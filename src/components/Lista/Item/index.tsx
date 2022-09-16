import style from '../style.module.scss'
export default function Item({tarefa, tempo}:{tarefa:String, tempo:String}){
  return(
    <li className={style.item}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  )
}