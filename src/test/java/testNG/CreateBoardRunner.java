package testNG;

import kzapro.pages.*;
import kzapro.utilities.TestBase;
import kzapro.utilities.TestUtilities;
import org.openqa.selenium.By;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class CreateBoardRunner extends TestBase {
    LoginPage loginPage;
    HomePage homePage;
    CreateBoardPage createBoardPage;
    KZAboardPage kzAboardPage;
    UpdateCardPage updateCardPage;


    @BeforeMethod
    public void setUp()
    {
        initialization();
        loginPage=new LoginPage();
        loginPage.clickLoginLink();
        loginPage.enterUserName(prop.getProperty("userEmail"));
        loginPage.clickLoginWithAtlassianLin();
        loginPage.enterPassword(prop.getProperty("userPassword"));
        loginPage.clickLoginPassword();

    }

    @Test(priority = 1)
    public void createBoard()
    {
        homePage=new HomePage();
        createBoardPage=homePage.clickLink();
        createBoardPage=new CreateBoardPage();
        createBoardPage.addBoardTitle(prop.getProperty("boardName"));
        createBoardPage.clickButton();
        TestUtilities.sleep(3);
       createBoardPage.clickCancelButton();
        Assert.assertTrue(driver.findElement(By.xpath("//h1[text()='KZA Board']")).isDisplayed());
    }

    @Test(priority = 2)
    public void addList()
    {
        homePage=new HomePage();
        kzAboardPage=homePage.clickKzaBoard();
        kzAboardPage=new KZAboardPage();
        kzAboardPage.clickAddListForToDoTextBox(prop.getProperty("toDoListName"));
        kzAboardPage.clickAddListForToDoLink();
        TestUtilities.sleep(1);
        kzAboardPage.addListForInProgressTextBox(prop.getProperty("inProgressListName"));
        kzAboardPage.clickAddListForInProgressLink();
        TestUtilities.sleep(1);
        kzAboardPage.addListForDoneTextBox(prop.getProperty("doneListName"));
        kzAboardPage.clickAddListForDoneLink();
        TestUtilities.sleep(1);
        kzAboardPage.clickCancelButton();
        TestUtilities.sleep(1);
        Assert.assertTrue(driver.findElement(By.xpath("//span[@class='placeholder']")).isDisplayed());
    }

    @Test(priority = 3)
    public void addCartToList()
    {

        homePage=new HomePage();
        homePage.clickKzaBoard();
        kzAboardPage=new KZAboardPage();
        kzAboardPage.clickAddCart(prop.getProperty("cardName"));
        kzAboardPage.clickAddCartButton();
        kzAboardPage.clickCancelButtonForAddCart();
        Assert.assertTrue(driver.findElement(By.xpath("//span[text()='Add another card']")).isDisplayed());

    }

    @Test(priority = 4)
    public void updateCard()
    {
        homePage=new HomePage();
        homePage.clickKzaBoard();
        TestUtilities.sleep(5);
        updateCardPage=new UpdateCardPage();
        updateCardPage.clickCardTab();
        TestUtilities.sleep(5);
        TestUtilities.sleep(5);
        updateCardPage.clickSaveButton();
        updateCardPage.clickMoveButton();
        updateCardPage.clickSelectListSection();
        updateCardPage.clickConfirmButton();
        updateCardPage.clickCloseButton();
        Assert.assertTrue(driver.findElement(By.xpath("//span[@class='placeholder']")).isDisplayed());

    }


    @AfterMethod
    public void tearDown()
    {
        driver.close();
        driver.quit();
    }






}
