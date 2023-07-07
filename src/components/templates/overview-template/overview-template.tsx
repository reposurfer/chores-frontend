import './overview-template.css';
import { Chore } from '../../../models/Chore';
import CardList from '../../molecules/card-list/card-list';

function OverviewTemplate({ error, isLoaded, chores }: {error?: Error, isLoaded: boolean, chores: Chore[]}) {
  if (error){
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    
    return (
      <div>
          <div className='title'>Welcome Stef</div>
          <div className='subtitle'>Your chores</div>
          <CardList chores = {chores} />
      </div>
    );
  } 
}

export default OverviewTemplate;
