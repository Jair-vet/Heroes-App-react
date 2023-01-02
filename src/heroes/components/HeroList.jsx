import { useMemo } from 'react';
import { HeroCard } from './HeroCard';
import { getHeroesByPublisher } from '../helpers';


export const HeroList = ({ publisher }) => {

    const heroes = useMemo( () => getHeroesByPublisher( publisher ), [ publisher ]);
    // const heroes = getHeroesByPublisher( publisher )

    return (
        <div className="row row-cols-md-2 row-cols-lg-2 row-cols-xl-3 hero-card">
            {
                heroes.map( hero => (
                    <HeroCard 
                        key={ hero.id } 
                        { ...hero }
                    />
                ))
            }
        </div>
  )
}
