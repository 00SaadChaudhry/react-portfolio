import React from 'react';

import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretSquareUp} from '@fortawesome/free-solid-svg-icons';
library.add(faCaretSquareUp);

function TopBtn() {
  return(
    <button className="TopBtn">
      <FontAwesomeIcon icon={faCaretSquareUp} className="menu" />
    </button>
  )
}

export default TopBtn;