/** @jsx jsx */ 
import { css, jsx } from '@emotion/core'; 

import user from './zondicons/user.svg';

export const UserIcon = () => 
<img 
src={user}
alt="User"
width="12px" 
css={css`
width: 12px;
opacity: 0.6;
`}
  />

export default UserIcon;