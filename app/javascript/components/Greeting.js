import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreetingsAsync } from '../redux/greetings/greetings';

const Greeting = () => {

  const { greetings } = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetingsAsync());
  }, []);

  console.log(greetings);

  return (
    <div>
     <div class="card mt-5 me-5 ms-5">
      <div class="card-body">
      {greetings.message}
      </div>
    </div>
    </div>
  )
}

export default Greeting

