import React from 'react';
import { router } from 'umi';
import { Button, Typography, Card } from 'antd';
import { observer } from 'mobx-react';
import { formatMessage } from 'umi-plugin-locale';
import { useStores } from '@/stores';
import styles from './style.less';

interface HomeProps {
  declareYourProps: any;
}

const { Text } = Typography;

const Home: React.FC<HomeProps> = (props) => {
  const { declareYourProps } = props;
  const {
    GlobalStore: { defineYourVariable, user, defineYourFunction, getUser },
  } = useStores();

  return (
    <Card className={styles.home}>
      {formatMessage({ id: 'index.home' })}
      <Text>{defineYourVariable}</Text>
      {defineYourVariable === "I'm here!" ? (
        <Button type="link" onClick={() => defineYourFunction({ ctx: 'bye~' })}>
          {formatMessage({ id: 'index.update' })}
        </Button>
      ) : (
        <Button type="link" onClick={() => defineYourFunction({ ctx: "I'm here!" })}>
          {formatMessage({ id: 'index.reupdate' })}
        </Button>
      )}
      <Button type="link" onClick={getUser}>
        {user}
      </Button>
      <Button type="link" onClick={() => router.push('/')}>
        {formatMessage({ id: 'index.back' })}
      </Button>
    </Card>
  );
};

export default observer(Home);
