import { useEffect, useState } from 'react';
import './OverviewComponent.css';
import { Chore } from '../../models/Chore';
import CardList from '../CardList/CardList';

function OverviewComponent() {
  const [chores, setChores] = useState<Chore[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [error, setError] = useState<Error>();
  useEffect(() => {
    fetch("http://localhost:5013/api/Chores")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setIsLoaded(true);
      setChores(data);
    },
    (error) => {
      setIsLoaded(true);
      setError(error);
    });
  }, []);

  if (error){
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    
    return (
      <div>
          <div className='title'>Welcome Stef</div>
          <div className='subtitle'>Your chores</div>
          <CardList chores={chores} />
      </div>
    );
  } 
}

export default OverviewComponent;
