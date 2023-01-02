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
    <>
        {/* container */}
        <div className="card-center">
            {/* Tarjeta completa */}
            <div className="card-info">
                {/* more info */}
                <Link className='info' to={`/hero/${ id }`}>
                    <div className="img-card">
                        {/* Imgaen superheroe */}
                        <img  src={ heroImgaeUrl } className="card-img-item" alt={ superhero } />
                        <div className="body-card-info">
                            {/* Titulo */}
                            <div className="title">
                                <h5 className="card-title">{ superhero }</h5>
                            </div>   
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    </>
  )
}
