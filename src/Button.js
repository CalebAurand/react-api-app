import React, { useState } from 'react'

const styleLikeButton = {
  backgroundColor: "aquamarine",
  color: "black",
  display: "flex",
  letterSpacing: "1px",
  borderRadius: "5px",
  padding: "1px 7px",
}

const styleLiked = {
  backgroundColor: "blue",
  color: "white",
  display: "flex",
  letterSpacing: "1px",
  borderRadius: "5px",
  padding: "1px 7px",
}

const ButtonCard = (props) => {
  const { index, likeAction } = props; 
  // isStyled as a variable that holds boolean true or false for if the like button is styled or not
  //setStyle is the method that sets isStyled to true or false when clicked
  const [isStyled, setStyle] = useState(false);
  
  // let likedTrue = isLiked(index);

  //if the isStyled variable is true, give the like button the liked styles
  if(isStyled){
    return (
      <div>
        <button index={index} style={styleLiked} onClick={()=>{
            likeAction(index);
            isStyled ? setStyle(false) : setStyle(true); //ternary operator calls setStyle method to set isStyled to true or false when clicked
          }}>Like</button>
      </div>
    )
  }else{ //if the isStyled variable is false, give the like button the generic styles
    return (
      <div>
        <button index={index} style={styleLikeButton} onClick={()=>{
            likeAction(index);
            isStyled ? setStyle(false) : setStyle(true); //ternary operator calls setStyle method to set isStyled to true or false when clicked
          }}>Like</button>
      </div>
    )
  }
}

export default ButtonCard