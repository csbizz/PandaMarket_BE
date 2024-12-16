export const postgresConfig = () => {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL 환경변수가 설정되지 않았습니다.');
  }
  if (!process.env.DATABASE_URL_render) {
    throw new Error('DATABASE_URL_render 환경변수가 설정되지 않았습니다.');
  }

  return {
    databaseUrl: process.env.DATABASE_URL,
    databaseUrlRender: process.env.DATABASE_URL_render,
  };
};

export default postgresConfig;
