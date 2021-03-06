import puppeteer from "puppeteer";

describe("show/hide and event details", () => {
  let browser;
  let page;
  beforeAll(async () => {
    jest.setTimeout(30000);
    browser = await puppeteer.launch();
    //   {
    //   headless: true,
    //    sloMo: 500,
    //    ignoreDefaultArgs: ["--disable-extensions"]
    // }

    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".CitySearch");
  });

  afterAll(() => {
    browser.close();
  });
  //Scenario 1
  test("An event element is collapsed by default", async () => {
    const eventDetails = await page.$(".event .details");
    expect(eventDetails).toBeNull();
    // browser.close();
  });
  //Scenario 2
  test("User can expand an event to see its details", async () => {
    await page.click(".event .showMore");
    const eventDetails = await page.$(".event .details");
    expect(eventDetails).toBeDefined();
  });
//scenario 3
  test("User can collapse an event to hide its details", async () => {
    await page.click(".event .showLess");
    const eventDetails = await page.$(".event .details");
    expect(eventDetails).toBeNull();
  });
});
