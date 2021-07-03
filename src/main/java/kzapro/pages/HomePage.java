package kzapro.pages;

import kzapro.utilities.TestBase;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends TestBase {

    @FindBy(xpath = "//span[text()='Create new board']")
    WebElement createNewBoardLink;

    @FindBy(xpath = "//div[@title=\"KZA Board\"]")
    WebElement kzaBoadrLink;

    @FindBy(xpath = "//span[text()='Home']")
    WebElement verifyHomePageMessage;

    public HomePage() {
        PageFactory.initElements(driver,this);
    }

    public CreateBoardPage clickLink()
    {
        createNewBoardLink.click();
        return new CreateBoardPage();
    }

    public KZAboardPage clickKzaBoard()
    {
        kzaBoadrLink.click();
        return new KZAboardPage();
    }

    public boolean verifyHomePage()
    {
        verifyHomePageMessage.isDisplayed();
        return true;
    }


}
