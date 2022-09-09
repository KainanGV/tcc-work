import puppeteer from "puppeteer";
import userAgent from "user-agents";

class GetAllGamesFutebolUseCase {
  async execute() {
    try {
      const browser = await puppeteer.launch({ headless: true });
      const page = await browser.newPage();

      await page.goto(
        "https://www.sportytrader.com/pt-br/odds/palmeiras-atletico-paranaense-5692609/",
      );

      await page.setJavaScriptEnabled(false);

      const test = await page.$eval(".odds-up", element => {
        return element.textContent;
      });

      console.log(test);

      await browser.close();
    } catch (error) {
      console.log(error);
    }
  }
}

export default GetAllGamesFutebolUseCase;
function getTest(arg0: any) {
  throw new Error("Function not implemented.");
}
