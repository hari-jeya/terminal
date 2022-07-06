import config from '../../../config.json';

export const instagram = async (args: string[]): Promise<string> => {
  window.open(`https://www.instagram.com/${config.social.instagram}/`);
  var des = "tu as vu ma derniere photos ?";

  return 'Opening instagram...';
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};
export const projects = async (args: string[]): Promise<string> => {
  window.open(`https://www.hari.jeyakrishnan.fr`);

  return 'Opening Docx...';
};
export const email = async (args: string[]): Promise<string> => {
    window.open(`mailto:${config.social.mail}`);
  
    return `Opening mailto:${config.social.mail}...`;
  };