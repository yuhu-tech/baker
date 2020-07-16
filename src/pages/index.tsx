import React from 'react';
import { router } from 'umi';
import { Button, Card } from 'antd';
import { formatMessage } from 'umi-plugin-locale';

import styles from './index.css';

const App: React.FC = () => {
  return (
    <div className={styles.normal}>
      <Card className={styles.home}>
        {formatMessage({ id: 'index.start' })}
        <Button type="link" onClick={() => router.push('/home')}>
          {formatMessage({ id: 'index.nav' })}
        </Button>
      </Card>
    </div>
  );
};

export default App;
