
export const puppeteerPromise = process.env.AWS_LAMBDA_FUNCTION_VERSION ? import('puppeteer-core') : import('puppeteer');

export const getOptions = async () => {
    
  if(!process.env.AWS_LAMBDA_FUNCTION_VERSION) return { headless: false }


    const chrome = await import('chrome-aws-lambda'); 
    
    const options = {
        args: [...chrome.default.args, '--hide-scrollbars', '--disable-web-security'],
        defaultViewport: chrome.default.defaultViewport,
        executablePath: await chrome.default.executablePath,
        headless: true,
        ignoreHTTPSErrors: true,
    }
    
    return options;
  
}


