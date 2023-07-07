import { Chore } from "../../../models/Chore";
import CardListItem from "../../atoms/card/card";
import './card-list.css';

function CardList({chores}: {chores: Chore[]}) {
    const listItems = chores.map(({ id, title, description }) => <CardListItem key={id} id={id} title={title} description={description} />);
  return (
    <div className="cardlist">
        {listItems}
    </div>
  );
}

export default CardList;