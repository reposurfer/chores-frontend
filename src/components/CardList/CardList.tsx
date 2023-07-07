import { CardListProps } from "../../models/CardListProps";
import Card from "./Card/Card";
import './CardList.css';


function CardList({chores}: CardListProps) {
    const listItems = chores.map(({ id, title, description }) => <Card key={id} id={id} title={title} description={description} />);
  return (
    <div className="cardlist">
        {listItems}
    </div>
    
  );
}

export default CardList;