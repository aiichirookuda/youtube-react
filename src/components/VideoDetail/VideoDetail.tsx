import React, { useContext, VFC } from 'react';
import { Store } from '../../store/index';
import { VideoPlay } from '../VideoPlay/VideoPlay';
import Style from './VideoDetail.module.scss';
import Linkify from 'react-linkify';

export const VideoDetail: VFC = () => {
  const { globalState } = useContext(Store);

  return globalState.selected && globalState.selected.id ? (
    <div className={Style.wrap}>
      <VideoPlay id={globalState.selected.id} />
      <p>{globalState.selected.snippet.title}</p>
      <hr />
      <Linkify>
        <pre>{globalState.selected.snippet.description}</pre>
      </Linkify>
    </div>
  ) : (
    <span>No Data</span>
  );
};