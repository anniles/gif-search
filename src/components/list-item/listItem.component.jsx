import React from 'react';

import Icon from './../icon/icon.component';
import './listItem.styled.sass';

function ListItem ({ gif }) {
  const handleItemClick = (gif) => {
    navigator.clipboard.writeText(gif.url)
  }

  return (
    <div className="list-item" onClick={() => handleItemClick(gif)}>
      <img
        className="list-item--image"
        src={gif.images.downsized_medium.url}
        alt={gif.title}
      />
      <span className="list-item--info">
        <Icon
          name="copyLink"
          width={20}
          fill="#fff"
          style={{paddingRight: 5}}
        />

        Click to copy
      </span>
    </div>
  )
}

export default ListItem;
