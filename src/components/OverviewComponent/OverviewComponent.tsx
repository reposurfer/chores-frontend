import { useEffect, useState } from 'react';
import './OverviewComponent.css';
import { Chore } from '../../models/Chore';
import Card from '../Card/Card';

function OverviewComponent() {
  const [chores, setChores] = useState<Chore[]>([]);
  useEffect(() => {
    fetch("http://localhost:5013/api/Chores")
    .then((res) => res.json())
    .then((data) => {
      setChores(data);
    })
    .catch((err) => {
      console.error(err.message);
    });
  }, []);

  const listItems = chores.map(chore => <Card title={chore.title} description={chore.description} />);

  return (
    <div>
        <div className='title'>Welcome Stef</div>
        <div className='subtitle'>Your chores</div>
        <div>{listItems}</div>
    </div>
  );
}

export default OverviewComponent;
