import { ITarefa } from '../../../types/tarefa'
import style from '../style.module.scss'
export default function Item({tarefa, tempo,selecionado, completado, id}:ITarefa){
  console.log('item actual: ',{tarefa, tempo,selecionado, completado, id});
  
  return(
    <li className={style.item}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  )
}