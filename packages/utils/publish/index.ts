import run from '../../components/script/utils/run';
import { series } from 'gulp';
export const publishComponent = async () => {
  run('release-it', `../dist`);
};
export default series(async () => publishComponent());
