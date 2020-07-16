import React from 'react';
import { withRouter } from 'umi';
import styles from './style.less';

const BasicLayout: React.FC = (props) => {
  return <div className={styles['basic-layout']}>{props.children}</div>;
};

export default withRouter(BasicLayout);
