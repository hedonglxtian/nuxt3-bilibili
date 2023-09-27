// get /api/channel
import channel from '@/database/chnnel';
// 通过defineEventHandler去定义接口
export default defineEventHandler(() => {
  return channel;
}); 