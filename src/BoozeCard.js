import ButtonCard from './Button';

const BoozeCard = (props) => {
  const { index, image, boozeName, tagline, abv, firstBrewed, desc, likeAction } = props; 
  // const [unLiked, setLiked] = useState(true)

  return (
    <li style={{listStyle: "none" }}>
      <figure className="img-container">
        <img src={image} alt="booze pics"/>
      </figure>
      <div>
        <h3>{boozeName}<span>{firstBrewed}</span></h3>
        <h4>{tagline}</h4>
        <p><span>{abv}</span>{desc}</p>

        <ButtonCard key={index} index={index} likeAction={likeAction} />
      </div>
    </li>
  )
}

export default BoozeCard;