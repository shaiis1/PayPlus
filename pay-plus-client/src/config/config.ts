interface EnvConfig {
    api: string;
  }
  
  const development: EnvConfig = {
    api: 'http://localhost:3000/v1',
  };

  
  const config: EnvConfig | '' =
      process.env.REACT_APP_STAGE === 'development'
      ? development
      : '';
  
  export default {
    ...config
  };
  