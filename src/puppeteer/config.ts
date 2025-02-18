
//import puppeteer from 'puppeteer';
//TODO: This is not necessary, we can use the puppeteer module directly.
export const getOptions = async () => {
    
  if(!process.env.PROD) return { headless: false }


    const options = {
        headless: true,
        ignoreHTTPSErrors: true,
    }
    
    return options;
  
}


