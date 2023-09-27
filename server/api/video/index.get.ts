// get /api/video
import video from "@/database/video";
// 通过defineEventHandler去定义接口
export default defineEventHandler(() => {
  return video;
});