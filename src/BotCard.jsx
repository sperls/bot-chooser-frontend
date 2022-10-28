const BotCard = ({imageSrc, name, purpose, dislikes}) => {
  return (
    <div className="BotCard-container">
      <img src={imageSrc} className="BotCard-image" alt="robot" />
      <div className="BotCard-info-container">
        <h2 className="BotCard-info-row">{name}</h2>
        <p className="BotCard-info-row">{`Purpose: ${purpose}`}</p>
        <p className="BotCard-info-row">{`Dislikes: ${dislikes}`}</p>
      </div>
    </div>
  )
}

export default BotCard;