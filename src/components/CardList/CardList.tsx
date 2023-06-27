import { CardListProps } from "../../models/CardListProps";
import { Chore } from "../../models/Chore";
import Card from "../Card/Card";


function CardList({chores}: CardListProps) {
    const listItems = chores.map(({ id, title, description }) => <li><Card key={id} id={id} title={title} description={description} /></li>);
  return (
    <ul>
        {listItems}
    </ul>
    
  );
}

export default CardList;