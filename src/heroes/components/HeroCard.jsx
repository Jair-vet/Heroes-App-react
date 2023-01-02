import { Link } from 'react-router-dom';

const CharactersByHero = ({ alter_ego, characters}) => {
    // if ( alter_ego === characters ) return (<></>);
    // return <p>{ characters }</p>
    return ( alter_ego === characters )
     ? <></>
     : <p>{ characters }</p>;
}

export const HeroCard = ({ 
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters ,
}) => {

    const heroImgaeUrl = `/assets/heroes/${ id }.jpg`;

    // const charactesByHero =  (<p>{ characters }</p>);

  return (
    <div className='col'>
        <div className="card">
            <div className="row no-gutters">

                <div className="card-info">
                    <div className="col-4 img-card">
                        <img  src={ heroImgaeUrl } className="card-img" alt={ superhero } />
                    </div>

                    <div className='body-card'>

                        <div className="body-card-info">

                            <h5 className="card-title">{ superhero }</h5>
                            <p className="card-text">{ alter_ego }</p>

                            {/* {
                                ( alter_ego !== characters ) && charactesByHero
                                ( alter_ego !== characters ) && <p>{ characters }</p>
                            } */}
                            <CharactersByHero characters={ characters } alter_ego={ alter_ego } />

                            {/* <p className="card-text">
                                <small className="text-muted">{ first_appearance }</small>
                            </p> */}

                            <Link className='info' to={`/hero/${ id }`}>
                                More Info
                            </Link>

                            
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}
